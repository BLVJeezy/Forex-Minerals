import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Photo } from "@/content/media";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  photo: Photo;
  title?: string;
  body?: string;
  /** Height profile of the band. */
  height?: "standard" | "tall";
  /** Where the overlay type sits. Kept away from faces and vehicle liveries. */
  align?: "bottom-left" | "bottom-right";
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed photographic break.
 *
 * The overlay gradient rises from the bottom edge only, so cab liveries, the
 * Forex Minerals branding on the vehicles and any people stay uncovered.
 */
export function ImageBand({
  locale,
  photo,
  title,
  body,
  height = "standard",
  align = "bottom-left",
  priority = false,
  className,
}: Props) {
  const hasOverlay = Boolean(title || body);

  return (
    <section className={cn("relative bg-navy-900", className)}>
      <div
        className={cn(
          "relative w-full",
          height === "tall"
            ? "h-[72vw] max-h-[680px] min-h-[380px] sm:h-[56vw]"
            : "h-[62vw] max-h-[560px] min-h-[300px] sm:h-[46vw]",
        )}
      >
        <Image
          src={photo.src}
          alt={photo.alt[locale]}
          fill
          priority={priority}
          placeholder="blur"
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: photo.focus?.desktop ?? "50% 50%",
          }}
        />

        {hasOverlay ? (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-950/92 via-navy-950/55 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0">
              <Container className="pb-10 sm:pb-12 lg:pb-16">
                <Reveal
                  className={cn(
                    "max-w-2xl",
                    align === "bottom-right" && "ml-auto text-right",
                  )}
                >
                  <span
                    className={cn(
                      "fx-rule-gold mb-6",
                      align === "bottom-right" && "ml-auto",
                    )}
                  />
                  {title ? (
                    <h2 className="fx-display text-[1.5rem] text-white sm:text-[2rem] lg:text-[2.5rem]">
                      {title}
                    </h2>
                  ) : null}
                  {body ? (
                    <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-steel-200 lg:text-[1rem]">
                      {body}
                    </p>
                  ) : null}
                </Reveal>
              </Container>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
