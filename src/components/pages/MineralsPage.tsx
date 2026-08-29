import { CtaBand } from "@/components/shared/CtaBand";
import { ImageBand } from "@/components/shared/ImageBand";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";

/**
 * Each commodity gets its own full-width editorial block. Commodity
 * photography (gypsum, coal, sand) has not been supplied; the layout reserves
 * the right-hand column for it and currently carries the applications list, so
 * material photographs can be dropped in without a redesign.
 */
export function MineralsPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { minerals } = content;

  return (
    <>
      <PageHero
        locale={locale}
        content={content}
        routeKey="minerals"
        eyebrow={minerals.eyebrow}
        title={minerals.title}
        lead={minerals.intro}
      />

      <div className="bg-white">
        {minerals.items.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className="scroll-mt-28 border-b border-steel-200 last:border-b-0"
          >
            <Container className="fx-section grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className="fx-display text-[0.8125rem] font-semibold tracking-[0.16em] text-gold-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-steel-200" />
                  </div>

                  <h2 className="fx-display mt-7 text-[1.9rem] text-navy-700 sm:text-[2.35rem]">
                    {item.name}
                  </h2>
                  <p className="fx-lead mt-5">{item.short}</p>

                  <div className="mt-7 space-y-4">
                    {item.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.9375rem] leading-relaxed text-steel-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={130} className="lg:col-span-4 lg:col-start-9">
                <div className="border-t-2 border-navy-700 bg-steel-50 p-7 lg:p-8">
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel-600">
                    {locale === "fr" ? "Applications" : "Applications"}
                  </h3>
                  <ul className="mt-6 space-y-0">
                    {item.applications.map((application) => (
                      <li
                        key={application}
                        className="flex items-start gap-3 border-b border-steel-200 py-3.5 text-[0.9375rem] text-navy-700 last:border-b-0"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500"
                        />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Container>
          </section>
        ))}
      </div>

      <ImageBand
        locale={locale}
        photo={photos.wheelLoaders}
        title={content.home.process.steps[2].title}
        body={content.home.process.steps[2].body}
      />

      <section className="bg-steel-50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="max-w-2xl border-l-2 border-gold-500 pl-6 text-[0.875rem] leading-relaxed text-steel-700">
              {minerals.specNote}
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={minerals.cta.title}
        body={minerals.cta.body}
        primary={minerals.cta.button}
      />
    </>
  );
}
