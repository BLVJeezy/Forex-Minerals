import { Container } from "@/components/ui/Container";
import { KeyFigures } from "@/components/ui/KeyFigures";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";

/**
 * Corporate key-figure band.
 *
 * ⚠️ The figures themselves are placeholders — see `keyFigures` in
 * `src/content/company.ts`. The note below is rendered on the page so the
 * status of these numbers is never ambiguous during review.
 */
export function Figures({ content }: { content: Dictionary }) {
  const { figures } = content.home;

  return (
    <section className="fx-navy-texture fx-section">
      <Container>
        <SectionHeading
          eyebrow={figures.eyebrow}
          title={figures.title}
          tone="dark"
        />

        <Reveal delay={100} className="mt-12 lg:mt-16">
          <KeyFigures labels={figures.items} tone="dark" />
        </Reveal>

        <Reveal delay={180}>
          <p
            className="mt-8 max-w-2xl text-[0.8125rem] leading-relaxed text-steel-400"
            data-placeholder="true"
          >
            {figures.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
