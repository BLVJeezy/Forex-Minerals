import type { Metadata } from "next";

import { getContent } from "@/content";
import { company } from "@/content/company";
import { type Locale, type RouteKey, pathFor } from "@/lib/i18n";

/**
 * Per-page metadata: unique title, description, canonical URL and the full
 * fr/en hreflang set pointing at the equivalent page in the other locale.
 */
export function buildPageMetadata(locale: Locale, key: RouteKey): Metadata {
  const content = getContent(locale);
  const meta = content.pageMeta[key];
  const canonical = pathFor(locale, key);

  return {
    title: key === "home" ? meta.title : { absolute: `${meta.title} | ${content.meta.siteName}` },
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        fr: pathFor("fr", key),
        en: pathFor("en", key),
        "x-default": pathFor("fr", key),
      },
    },
    openGraph: {
      type: "website",
      siteName: content.meta.siteName,
      locale: locale === "fr" ? "fr_CD" : "en_GB",
      url: canonical,
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: content.meta.tagline,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.jpg"],
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, company.siteUrl).toString();
}
