import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { type Locale, pathFor } from "@/lib/i18n";

type Props = {
  locale: Locale;
  title: string;
  body: string | string[];
  primary: string;
  secondary?: string;
};

/** Deep navy procurement prompt used at the foot of every page. */
export function CtaBand({ locale, title, body, primary, secondary }: Props) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className="fx-navy-texture relative overflow-hidden">
      <Container className="relative grid gap-10 fx-section lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <span className="fx-rule-gold mb-7" />
          <h2 className="fx-display text-[1.85rem] text-white sm:text-[2.35rem] lg:text-[2.9rem]">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1rem] leading-relaxed text-steel-200">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href={pathFor(locale, "contact")} variant="primary">
              {primary}
            </ButtonLink>
            {secondary ? (
              <ButtonLink
                href={pathFor(locale, "contact")}
                variant="onDark"
                withArrow={false}
              >
                {secondary}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
