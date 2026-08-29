import { CtaBand } from "@/components/shared/CtaBand";
import { ImageBand } from "@/components/shared/ImageBand";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";

const materialImages: Record<string, { src: string; alt: { fr: string; en: string } } | undefined> = {
  charbon: {
    src: "https://static.euronews.com/articles/stories/06/21/28/86/1200x675_cmsv2_a182af5c-675e-5eda-9d90-97e722464a85-6212886.jpg",
    alt: { fr: "Stockage de charbon industriel et équipements de manutention.", en: "Industrial coal stockpile and bulk handling equipment." },
  },
};

export function MineralsPage({ locale, content }: { locale: Locale; content: Dictionary }) {
  const { minerals } = content;
  return (
    <>
      <PageHero locale={locale} content={content} routeKey="minerals" eyebrow={minerals.eyebrow} title={minerals.title} lead={minerals.intro} />
      <div className="bg-white">
        {minerals.items.map((item, index) => {
          const materialImage = materialImages[item.id];
          return (
            <section key={item.id} id={item.id} className="scroll-mt-28 border-b border-steel-200 last:border-b-0">
              <Container className="fx-section grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7"><Reveal>
                  <div className="flex items-baseline gap-5"><span className="fx-display text-[0.8125rem] font-semibold tracking-[0.16em] text-gold-700">{String(index + 1).padStart(2, "0")}</span><span aria-hidden="true" className="h-px flex-1 bg-steel-200" /></div>
                  <h2 className="fx-display mt-7 text-[1.9rem] text-navy-700 sm:text-[2.35rem]">{item.name}</h2><p className="fx-lead mt-5">{item.short}</p>
                  <div className="mt-7 space-y-4">{item.body.map((paragraph) => <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-steel-700">{paragraph}</p>)}</div>
                </Reveal></div>
                <Reveal delay={130} className="lg:col-span-4 lg:col-start-9">
                  {materialImage && <figure className="mb-7 overflow-hidden"><div className="aspect-[4/3] overflow-hidden bg-steel-100"><img src={materialImage.src} alt={materialImage.alt[locale]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" /></div><figcaption className="mt-3 text-[0.6875rem] leading-relaxed text-steel-500">{locale === "fr" ? "Image illustrative — à remplacer par une photographie Forex Minerals dès disponibilité." : "Illustrative image — to be replaced by Forex Minerals photography when available."}</figcaption></figure>}
                  <div className="border-t-2 border-navy-700 bg-steel-50 p-7 lg:p-8"><h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel-600">Applications</h3><ul className="mt-6">{item.applications.map((application) => <li key={application} className="flex items-start gap-3 border-b border-steel-200 py-3.5 text-[0.9375rem] text-navy-700 last:border-b-0"><span aria-hidden="true" className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />{application}</li>)}</ul></div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>
      <ImageBand locale={locale} photo={photos.wheelLoaders} title={content.home.process.steps[2].title} body={content.home.process.steps[2].body} />
      <section className="bg-steel-50 py-16 lg:py-20"><Container><Reveal><p className="max-w-2xl border-l-2 border-gold-500 pl-6 text-[0.875rem] leading-relaxed text-steel-700">{minerals.specNote}</p></Reveal></Container></section>
      <CtaBand locale={locale} title={minerals.cta.title} body={minerals.cta.body} primary={minerals.cta.button} />
    </>
  );
}
