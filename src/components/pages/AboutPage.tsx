import { CtaBand } from "@/components/shared/CtaBand";
import { LeadershipBlock } from "@/components/shared/LeadershipBlock";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { KeyFigures } from "@/components/ui/KeyFigures";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";
import Image from "next/image";

export function AboutPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { about, home } = content;

  return (
    <>
      <PageHero
        locale={locale}
        content={content}
        routeKey="about"
        eyebrow={about.eyebrow}
        title={about.title}
        lead={about.lead}
      />

      {/* Positioning */}
      <section className="bg-white fx-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow={about.story.eyebrow}
              title={about.story.title}
              body={about.story.body}
              size="large"
            />
          </div>
          <Reveal delay={140} className="lg:col-span-5">
            <div className="border-t-2 border-navy-700 bg-steel-50 p-8 lg:p-10">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel-600">
                {home.intro.asideTitle}
              </h3>
              <dl className="mt-7">
                {about.presence.points.map((row) => (
                  <div key={row.label} className="border-b border-steel-200 py-4 last:border-b-0">
                    <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-steel-500">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.9375rem] font-medium leading-relaxed text-navy-700">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Key figures */}
      <section className="fx-navy-texture fx-section">
        <Container>
          <SectionHeading
            eyebrow={home.figures.eyebrow}
            title={about.figuresTitle}
            tone="dark"
          />
          <Reveal delay={100} className="mt-12 lg:mt-16">
            <KeyFigures labels={home.figures.items} tone="dark" />
          </Reveal>
          <Reveal delay={160}>
            <p
              className="mt-8 max-w-2xl text-[0.8125rem] leading-relaxed text-steel-400"
              data-placeholder="true"
            >
              {home.figures.note}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Regional presence */}
      <section className="bg-white fx-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={about.presence.eyebrow}
              title={about.presence.title}
              body={about.presence.body}
            />
          </div>
          <Reveal delay={140} className="lg:col-span-7">
            <figure className="fx-zoom overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={photos.wheelLoaders.src}
                  alt={photos.wheelLoaders.alt[locale]}
                  fill
                  placeholder="blur"
                  quality={84}
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                  style={{ objectPosition: photos.wheelLoaders.focus?.desktop }}
                />
              </div>
              <figcaption className="mt-4 text-[0.75rem] leading-relaxed text-steel-500">
                {photos.wheelLoaders.alt[locale]}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-steel-50 fx-section">
        <Container>
          <SectionHeading eyebrow={about.values.eyebrow} title={about.values.title} />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {about.values.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <div className="border-t-2 border-steel-200 pt-7 transition-colors duration-500 hover:border-gold-500">
                  <p className="fx-display text-[0.75rem] font-semibold tracking-[0.16em] text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="fx-display mt-5 text-[1.1875rem] text-navy-700">
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

      {/* Leadership */}
      <section className="fx-navy-texture fx-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={about.leadership.eyebrow}
              title={about.leadership.title}
              body={about.leadership.body}
              tone="dark"
            />
            <LeadershipBlock
              tone="dark"
              pendingLabel={content.common.pendingLabel}
              className="mt-10 border-t border-white/12"
            />
          </div>

          <Reveal delay={140} className="lg:col-span-7">
            <figure className="fx-zoom overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={photos.leadershipFleet.src}
                  alt={photos.leadershipFleet.alt[locale]}
                  fill
                  placeholder="blur"
                  quality={85}
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover object-[50%_35%]"
                />
              </div>
            </figure>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={home.cta.title}
        body={home.cta.body}
        primary={home.cta.primary}
        secondary={home.cta.secondary}
      />
    </>
  );
}
