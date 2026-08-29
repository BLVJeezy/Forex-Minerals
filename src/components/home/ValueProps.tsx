import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/content";

export function ValueProps({ content }: { content: Dictionary }) {
  const { values } = content.home;

  return (
    <section className="bg-white fx-section">
      <Container>
        <SectionHeading eyebrow={values.eyebrow} title={values.title} />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {values.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <div className="group border-t-2 border-steel-200 pt-7 transition-colors duration-500 hover:border-gold-500">
                <p className="fx-display text-[0.75rem] font-semibold tracking-[0.16em] text-gold-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="fx-display mt-5 text-[1.1875rem] text-navy-700 lg:text-[1.25rem]">
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
  );
}
