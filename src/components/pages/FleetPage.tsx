import Image from "next/image";

import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";

export function FleetPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { fleet } = content;

  return (
    <>
      <PageHero
        locale={locale}
        content={content}
        routeKey="fleet"
        eyebrow={fleet.eyebrow}
        title={fleet.title}
        lead={fleet.lead}
        photo={photos.fleetFormation}
        priority
      />

      {/* Equipment */}
      <section className="bg-white fx-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow={fleet.fleetSection.eyebrow}
                title={fleet.fleetSection.title}
                body={fleet.fleetSection.body}
                size="large"
              />
            </div>
            <Reveal delay={140} className="lg:col-span-6">
              <figure className="fx-zoom overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photos.truckTrailer.src}
                    alt={photos.truckTrailer.alt[locale]}
                    fill
                    placeholder="blur"
                    quality={84}
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover object-[46%_55%]"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-steel-200 sm:grid-cols-3 lg:mt-20">
            {fleet.fleetSection.points.map((point, index) => (
              <Reveal key={point.id} delay={index * 90}>
                <div className="flex h-full flex-col bg-white p-8">
                  <span className="fx-rule-gold" />
                  <h3 className="fx-display mt-6 text-[1.125rem] text-navy-700">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-700">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational readiness */}
      <section className="bg-steel-50 fx-section">
        <Container>
          <SectionHeading
            eyebrow={fleet.readiness.eyebrow}
            title={fleet.readiness.title}
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {fleet.readiness.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <div className="border-t-2 border-steel-200 pt-7 transition-colors duration-500 hover:border-gold-500">
                  <p className="fx-display text-[0.75rem] font-semibold tracking-[0.16em] text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="fx-display mt-5 text-[1.125rem] text-navy-700">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-steel-700">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section className="fx-navy-texture fx-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow={fleet.safety.eyebrow}
              title={fleet.safety.title}
              body={fleet.safety.body}
              tone="dark"
            />
          </div>
          <Reveal delay={140} className="lg:col-span-5 lg:col-start-8">
            <figure className="fx-zoom overflow-hidden">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={photos.wheelLoaders.src}
                  alt={photos.wheelLoaders.alt[locale]}
                  fill
                  placeholder="blur"
                  quality={84}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-[50%_62%]"
                />
              </div>
            </figure>
            <p
              className="mt-6 text-[0.8125rem] leading-relaxed text-steel-400"
              data-placeholder="true"
            >
              {fleet.safety.note}
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={fleet.cta.title}
        body={fleet.cta.body}
        primary={fleet.cta.button}
      />
    </>
  );
}
