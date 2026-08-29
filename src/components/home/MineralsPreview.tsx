import { MineralCards } from "@/components/shared/MineralCards";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { type Locale, pathFor } from "@/lib/i18n";

export function MineralsPreview({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { minerals } = content.home;

  return (
    <section className="bg-steel-50 fx-section">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={minerals.eyebrow}
            title={minerals.title}
            body={minerals.body}
            className="lg:max-w-2xl"
          />
          <Reveal delay={120} className="shrink-0">
            <ButtonLink
              href={pathFor(locale, "minerals")}
              variant="ghost"
              className="text-[0.75rem] uppercase tracking-[0.14em]"
            >
              {minerals.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <MineralCards locale={locale} content={content} className="mt-12 lg:mt-16" />

        <Reveal delay={140}>
          <p className="mt-8 max-w-3xl text-[0.8125rem] leading-relaxed text-steel-600">
            {content.minerals.specNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
