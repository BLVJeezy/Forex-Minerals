import { CtaBand } from "@/components/shared/CtaBand";
import { ImageBand } from "@/components/shared/ImageBand";
import { MineralCards } from "@/components/shared/MineralCards";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { ecosystem } from "@/content/company";
import { photos } from "@/content/media";
import type { Locale } from "@/lib/i18n";

export function IndustriesPage({ locale, content }: { locale: Locale; content: Dictionary }) {
  const { industries, home } = content;
  return (
    <>
      <PageHero locale={locale} content={content} routeKey="industries" eyebrow={industries.eyebrow} title={industries.title} lead={industries.lead} />
      <section className="bg-white fx-section">
        <Container>
          <Reveal><figure className="mb-14 overflow-hidden lg:mb-20"><div className="aspect-[16/7] overflow-hidden bg-steel-100"><img src="https://www.mombasacement.com/0.jpg" alt={locale === "fr" ? "Vue aérienne illustrative d'un complexe cimentier industriel." : "Illustrative aerial view of an industrial cement production complex."} loading="eager" className="h-full w-full object-cover" /></div><figcaption className="mt-3 text-[0.6875rem] leading-relaxed text-steel-500">{locale === "fr" ? "Image illustrative du secteur cimentier — elle ne représente pas un site ou un client Forex Minerals." : "Illustrative cement-industry image — it does not represent a Forex Minerals site or client."}</figcaption></figure></Reveal>
          <div className="grid gap-px bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {industries.items.map((item, index) => <Reveal key={item.id} delay={index * 80}><div className="group flex h-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-navy-700 lg:p-10"><div className="flex items-start justify-between gap-4"><span className="fx-display text-[0.75rem] font-semibold tracking-[0.16em] text-gold-700 transition-colors group-hover:text-gold-400">{String(index + 1).padStart(2, "0")}</span><span aria-hidden="true" className="mt-2 h-px w-10 bg-steel-300 transition-all duration-500 group-hover:w-16 group-hover:bg-gold-500" /></div><h2 className="fx-display mt-8 text-[1.3125rem] text-navy-700 transition-colors group-hover:text-white">{item.title}</h2><p className="mt-4 text-[0.9375rem] leading-relaxed text-steel-700 transition-colors group-hover:text-steel-200">{item.body}</p></div></Reveal>)}
          </div>
        </Container>
      </section>
      <ImageBand locale={locale} photo={photos.wheelLoaders} title={home.imageBreak.title} body={home.imageBreak.body} />
      <section className="bg-steel-50 fx-section"><Container><SectionHeading eyebrow={home.minerals.eyebrow} title={home.minerals.title} body={home.minerals.body} /><MineralCards locale={locale} content={content} className="mt-12 lg:mt-16" /></Container></section>
      <section className="bg-white fx-section"><Container className="grid gap-12 lg:grid-cols-12 lg:gap-16"><SectionHeading eyebrow={home.ecosystem.eyebrow} title={home.ecosystem.title} body={home.ecosystem.body} className="lg:col-span-5" /><Reveal delay={120} className="lg:col-span-6 lg:col-start-7"><ul className="grid gap-px bg-steel-200 sm:grid-cols-3">{ecosystem.map((organisation) => <li key={organisation.id} className="flex flex-col justify-between gap-4 bg-white px-6 py-6 sm:min-h-[150px] sm:py-7"><p className="fx-display text-[1.25rem] leading-none text-navy-700">{organisation.name}</p><p className="text-[0.75rem] leading-snug text-steel-600">{organisation.fullName}</p></li>)}</ul><p className="mt-6 text-[0.75rem] leading-relaxed text-steel-500">{home.ecosystem.disclaimer}</p></Reveal></Container></section>
      <CtaBand locale={locale} title={industries.cta.title} body={industries.cta.body} primary={industries.cta.button} />
    </>
  );
}
