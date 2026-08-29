import { LeadershipBlock } from "@/components/shared/LeadershipBlock";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { type Locale, pathFor } from "@/lib/i18n";

export function LeadershipSection({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const section = content.home.leadership;

  return (
    <section className="bg-white fx-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            body={section.body}
          />
          <Reveal delay={140} className="mt-9">
            <ButtonLink href={pathFor(locale, "about")} variant="secondary">
              {section.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <LeadershipBlock
            tone="light"
            pendingLabel={content.common.pendingLabel}
            className="border-t-2 border-navy-700"
          />
        </div>
      </Container>
    </section>
  );
}
