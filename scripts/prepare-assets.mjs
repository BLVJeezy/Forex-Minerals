/**
 * Asset preparation for the Forex Minerals website.
 *
 * Converts the supplied corporate photography (PNG masters) into optimised
 * JPEGs used by next/image, and derives the brand logo variants
 * (light background, reversed for dark backgrounds, square mark, favicons)
 * from the official logo file.
 *
 * Usage: node scripts/prepare-assets.mjs <source-directory>
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2];
if (!SRC) {
  console.error("Usage: node scripts/prepare-assets.mjs <source-directory>");
  process.exit(1);
}

const IMG_OUT = "src/assets/images";
const BRAND_OUT = "src/assets/brand";
const PUBLIC_OUT = "public";

await mkdir(IMG_OUT, { recursive: true });
await mkdir(BRAND_OUT, { recursive: true });

/* ------------------------------------------------------------------ */
/* Photography                                                         */
/* ------------------------------------------------------------------ */

const photos = [
  // Direction + flotte Forex Minerals — image héro
  { in: "ddd70244-image.png", out: "leadership-fleet.jpg" },
  // Flotte symétrique sur la route industrielle
  { in: "8c74c362-image.png", out: "fleet-formation.jpg" },
  // Tracteur + benne industrielle
  { in: "8787d634-image.png", out: "truck-trailer.jpg" },
  // Chargeuses sur pneus en carrière
  { in: "ca39f33b-image.png", out: "wheel-loaders.jpg" },
];

for (const photo of photos) {
  const file = path.join(IMG_OUT, photo.out);
  await sharp(path.join(SRC, photo.in))
    .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(file);
  const meta = await sharp(file).metadata();
  console.log(`photo  ${photo.out.padEnd(24)} ${meta.width}x${meta.height}`);
}

/* ------------------------------------------------------------------ */
/* Logo                                                                */
/* ------------------------------------------------------------------ */

const LOGO_SRC = path.join(SRC, "67cab7d2-image.png");

/** Turn the flat white studio background into transparency. */
async function knockOutWhite(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const min = Math.min(r, g, b);
    if (min > 246) {
      out[i + 3] = 0;
    } else if (min > 232) {
      // Feather the antialiased edge instead of leaving a white halo.
      out[i + 3] = Math.round(((246 - min) / 14) * 255);
    }
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

/**
 * Reversed (knock-out) variant for deep navy surfaces.
 * The navy geometry is inverted in lightness so the mark stays readable on
 * dark backgrounds; gold and the internal keylines are preserved.
 */
async function reversed(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (min > 246) {
      out[i + 3] = 0; // background
      continue;
    }
    if (min > 232) {
      out[i + 3] = Math.round(((246 - min) / 14) * 255);
    }

    const isGold = r > g && g > b && r - b > 40;
    if (isGold) continue; // gold reads well on navy — keep it

    const isBlue = b >= r && b - r > 12;
    if (isBlue) {
      // Navy -> cool light steel, keeping the internal light/dark relationship
      // so the white keylines of the mark stay legible.
      const l = max / 255;
      const v = 255 - (1 - l) * 96;
      out[i] = Math.max(0, Math.min(255, Math.round(v - 17)));
      out[i + 1] = Math.max(0, Math.min(255, Math.round(v - 9)));
      out[i + 2] = Math.max(0, Math.min(255, Math.round(v + 2)));
    } else {
      // Neutral greys -> lifted greys.
      const v = Math.round(186 + (max / 255) * 64);
      out[i] = v;
      out[i + 1] = v;
      out[i + 2] = Math.min(255, v + 3);
    }
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

// Flattened intermediates (transparent background, full canvas)
const lightBuf = await (await knockOutWhite(LOGO_SRC)).png().toBuffer();
const darkBuf = await (await reversed(LOGO_SRC)).png().toBuffer();

// Full lockup, light backgrounds
await sharp(lightBuf)
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toFile(path.join(BRAND_OUT, "forex-minerals-logo.png"));

// Full lockup, dark backgrounds
await sharp(darkBuf)
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toFile(path.join(BRAND_OUT, "forex-minerals-logo-reversed.png"));

// Square mark only (the crystal + F device above the wordmark)
const meta = await sharp(LOGO_SRC).metadata();
const markSize = Math.round(meta.height * 0.52);
const markLeft = Math.round((meta.width - markSize) / 2);
const markTop = Math.round(meta.height * 0.14);
const markBox = { left: markLeft, top: markTop, width: markSize, height: markSize };

// sharp runs trim() before extract() in its pipeline, so crop and trim in
// two separate passes.
for (const [buf, name] of [
  [lightBuf, "forex-minerals-mark.png"],
  [darkBuf, "forex-minerals-mark-reversed.png"],
]) {
  const cropped = await sharp(buf).extract(markBox).png().toBuffer();
  await sharp(cropped)
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(BRAND_OUT, name));
}

/**
 * Horizontal lockup parts.
 *
 * The official logo is a stacked lockup: at navigation-bar heights the wordmark
 * becomes illegible. The mark and the wordmark are therefore exported
 * separately from the same artwork so the header can set them side by side —
 * a secondary lockup, not a redesign. Proportions and colours are untouched.
 */
const wordmarkBox = {
  left: 0,
  top: Math.round(meta.height * 0.585),
  width: meta.width,
  height: Math.round(meta.height * 0.122),
};

for (const [buf, name] of [
  [lightBuf, "forex-minerals-wordmark.png"],
  [darkBuf, "forex-minerals-wordmark-reversed.png"],
]) {
  const cropped = await sharp(buf).extract(wordmarkBox).png().toBuffer();
  await sharp(cropped)
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(BRAND_OUT, name));
}

// Favicons / touch icons — the mark centred on the brand navy.
const markBuffer = await sharp(path.join(BRAND_OUT, "forex-minerals-mark-reversed.png"))
  .resize(404, 404, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const iconMaster = await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 32, b: 79, alpha: 1 } },
})
  .composite([{ input: markBuffer, gravity: "center" }])
  .png()
  .toBuffer();

for (const [size, name] of [
  [512, "icon-512.png"],
  [192, "icon-192.png"],
  [180, "apple-touch-icon.png"],
  [32, "favicon.png"],
]) {
  await sharp(iconMaster)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC_OUT, name));
}

// Open Graph image: hero photography + navy scrim handled in the app; here we
// export a simple branded fallback at 1200x630.
await sharp(path.join(IMG_OUT, "fleet-formation.jpg"))
  .resize(1200, 630, { fit: "cover", position: "center" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(PUBLIC_OUT, "og-image.jpg"));

console.log("brand  logo, reversed logo, mark, favicons, og-image written");
