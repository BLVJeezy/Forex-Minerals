import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import { type Locale, pathFor } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
};

/**
 * Homepage hero.
 *
 * The supplied leadership + fleet photograph has its subjects at the centre of
 * frame, so the layout is editorial rather than an overlay: the navy panel
 * carries the type, the photograph bleeds to the right edge at full height and
 * neither face nor vehicle livery is ever covered by text.
 * On mobile the photograph moves above the type block, cropped to keep both
 * representatives and the fleet in frame.
 */
export function Hero({ locale, content }: Props) {
  const { hero } = content.home;
  const photo = photos.leadershipFleet;

  return (
    <section className="fx-navy-texture relative overflow-hidden">
      <div className="flex flex-col-reverse lg:block">
        {/* Type */}
        <Container className="relative z-10 py-14 sm:py-16 lg:min-h-[min(80vh,760px)] lg:py-24 xl:py-28">
          <div className="lg:max-w-[50%] xl:max-w-[47%]">
            <p className="fx-eyebrow fx-eyebrow-light">{hero.eyebrow}</p>
            <span className="fx-rule-gold mt-6" />

            <h1 className="fx-display mt-7 text-[2rem] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.45rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-steel-200 lg:text-[1.0625rem]">
              {hero.body}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ButtonLink href={pathFor(locale, "contact")} variant="primary">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href={pathFor(locale, "about")} variant="onDark">
                {hero.secondaryCta}
              </ButtonLink>
            </div>

            <p className="mt-12 hidden items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-steel-400 lg:flex">
              <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
              {hero.caption}
            </p>
          </div>
        </Container>

        {/* Photography */}
        <div className="relative h-[66vw] max-h-[460px] min-h-[280px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:max-h-none lg:w-[50%] xl:w-[52%]">
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            priority
            placeholder="blur"
            quality={86}
            sizes="(max-width: 1023px) 100vw, 56vw"
            className="object-cover object-[50%_38%] lg:object-[50%_45%]"
          />
          {/* Soft seam into the navy panel — kept narrow so no face is dimmed */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-[12%] bg-gradient-to-r from-navy-800 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-800/85 to-transparent lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-px bg-gold-500/50 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
