import { CtaBand } from "@/components/shared/CtaBand";
import { ImageBand } from "@/components/shared/ImageBand";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessFlow } from "@/components/shared/ProcessFlow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";

export function TransportPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { transport, home } = content;

  return (
    <>
      <PageHero
        locale={locale}
        content={content}
        routeKey="transport"
        eyebrow={transport.eyebrow}
        title={transport.title}
        lead={transport.lead}
        photo={photos.truckTrailer}
        priority
      />

      <section className="bg-white fx-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={transport.intro.eyebrow}
              title={transport.intro.title}
              body={transport.intro.body}
              size="large"
            />
          </div>
          <Reveal delay={140} className="lg:col-span-4 lg:col-start-9">
            <ul className="border-t border-steel-200">
              {home.fleet.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 border-b border-steel-200 py-4 text-[0.9375rem] leading-relaxed text-steel-700"
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

      <section className="bg-steel-50 fx-section">
        <Container>
          <SectionHeading
            eyebrow={transport.capabilities.eyebrow}
            title={transport.capabilities.title}
          />
          <div className="mt-12 grid gap-px bg-steel-200 sm:grid-cols-2 lg:mt-16">
            {transport.capabilities.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-navy-700 lg:p-10">
                  <span className="fx-display text-[0.75rem] font-semibold tracking-[0.16em] text-gold-700 transition-colors group-hover:text-gold-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="fx-display mt-6 text-[1.25rem] text-navy-700 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-steel-700 transition-colors group-hover:text-steel-200">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="fx-navy-texture fx-section">
        <Container>
          <SectionHeading
            eyebrow={transport.flow.eyebrow}
            title={transport.flow.title}
            tone="dark"
          />
          <ProcessFlow
            steps={home.process.steps}
            tone="dark"
            className="mt-12 lg:mt-16"
          />
        </Container>
      </section>

      <ImageBand
        locale={locale}
        photo={photos.fleetFormation}
        title={home.imageBreak.title}
        body={home.imageBreak.body}
      />

      <CtaBand
        locale={locale}
        title={transport.cta.title}
        body={transport.cta.body}
        primary={transport.cta.button}
      />
    </>
  );
}
