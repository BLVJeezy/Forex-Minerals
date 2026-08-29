import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";
import { ecosystem } from "@/content/company";

/**
 * Industrial ecosystem.
 *
 * Deliberately restrained: the organisations below are named as reference
 * points of the Haut-Katanga industrial landscape. No partnership, contract or
 * volume is stated or implied. Official logos will replace this typographic
 * treatment once the assets are supplied.
 */
export function Ecosystem({ content }: { content: Dictionary }) {
  const section = content.home.ecosystem;

  return (
    <section className="bg-steel-50 fx-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            body={section.body}
            className="lg:col-span-5"
          />

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-px bg-steel-200 sm:grid-cols-3">
              {ecosystem.map((organisation) => (
                <li
                  key={organisation.id}
                  className="flex flex-col justify-between gap-4 bg-white px-6 py-6 sm:min-h-[150px] sm:py-7"
                >
                  <p className="fx-display text-[1.25rem] leading-none text-navy-700">
                    {organisation.name}
                  </p>
                  <p className="text-[0.75rem] leading-snug text-steel-600">
                    {organisation.fullName}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[0.75rem] leading-relaxed text-steel-500">
              {section.disclaimer}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
