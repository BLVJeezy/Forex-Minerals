import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import { type Locale, pathFor } from "@/lib/i18n";

/**
 * Fleet section.
 *
 * The symmetrical fleet photograph is the strongest corporate asset supplied,
 * so it runs full width at its natural panoramic proportion rather than being
 * cropped into a column. On mobile the crop tightens towards the centre of the
 * formation so the vehicles remain legible.
 */
export function FleetTeaser({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { fleet } = content.home;
  const photo = photos.fleetFormation;

  return (
    <section className="fx-navy-texture fx-section-pb">
      <div className="relative h-[68vw] max-h-[620px] min-h-[300px] w-full sm:h-[46vw] lg:h-auto lg:max-h-none lg:min-h-0">
        <Image
          src={photo.src}
          alt={photo.alt[locale]}
          placeholder="blur"
          quality={85}
          sizes="100vw"
          className="h-full w-full object-cover object-[50%_50%] lg:h-auto"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-800 to-transparent"
        />
      </div>

      <Container className="grid gap-12 pt-14 lg:grid-cols-12 lg:gap-16 lg:pt-20">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow={fleet.eyebrow}
            title={fleet.title}
            body={fleet.body}
            tone="dark"
          />
          <Reveal delay={140} className="mt-10">
            <ButtonLink href={pathFor(locale, "fleet")} variant="onDark">
              {fleet.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:col-span-5 lg:col-start-8">
          <ul className="divide-y divide-white/12 border-t border-white/12">
            {fleet.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 py-5 text-[0.9375rem] leading-relaxed text-steel-200"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
