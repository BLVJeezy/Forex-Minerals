import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { type Locale, pathFor } from "@/lib/i18n";

export function Intro({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { intro } = content.home;

  return (
    <section className="bg-white fx-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            body={intro.body}
            size="large"
          />
          <Reveal delay={120} className="mt-10">
            <ButtonLink href={pathFor(locale, "about")} variant="secondary">
              {intro.cta}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:col-span-5">
          <div className="border-t-2 border-navy-700 bg-steel-50 p-8 lg:p-10">
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel-600">
              {intro.asideTitle}
            </h3>
            <dl className="mt-7 space-y-0">
              {intro.aside.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 border-b border-steel-200 py-4 last:border-b-0 sm:grid-cols-5 sm:gap-4"
                >
                  <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-steel-500 sm:col-span-2">
                    {row.label}
                  </dt>
                  <dd className="text-[0.9375rem] font-medium text-navy-700 sm:col-span-3">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
