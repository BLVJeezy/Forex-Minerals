import { RfqForm } from "@/components/forms/RfqForm";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/content";
import { company } from "@/content/company";
import type { Locale } from "@/lib/i18n";

export function ContactPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary;
}) {
  const { contact, rfq } = content;
  const labels = contact.coordinates.labels;

  /**
   * ⚠️ Contact details are placeholders. They are rendered as plain text —
   * never as `tel:` or `mailto:` links — so nothing on the page can be
   * mistaken for a working company contact until the real details arrive.
   */
  const rows = [
    { label: labels.phone, value: company.contact.phone },
    { label: labels.whatsapp, value: company.contact.whatsapp },
    { label: labels.email, value: company.contact.email },
    { label: labels.commercial, value: company.contact.commercialEmail },
    { label: labels.hours, value: company.contact.hours },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        content={content}
        routeKey="contact"
        eyebrow={contact.eyebrow}
        title={contact.title}
        lead={contact.lead}
      />

      <section className="bg-white fx-section">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Coordinates */}
          <Reveal className="lg:col-span-4">
            <div className="border-t-2 border-navy-700 bg-steel-50 p-8">
              <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-steel-600">
                {contact.coordinates.title}
              </h2>

              <dl className="mt-7">
                <div className="border-b border-steel-200 py-4">
                  <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-steel-500">
                    {labels.address}
                  </dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-navy-700">
                    {contact.coordinates.addressValue}
                  </dd>
                  <dd
                    className="mt-1 text-[0.8125rem] text-steel-500"
                    data-placeholder="true"
                  >
                    {company.street.value}
                  </dd>
                </div>

                {rows.map((row) => (
                  <div key={row.label} className="border-b border-steel-200 py-4">
                    <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-steel-500">
                      {row.label}
                    </dt>
                    <dd
                      className="mt-1.5 text-[0.9375rem] text-navy-700"
                      data-placeholder={row.value.pending ? "true" : undefined}
                    >
                      {row.value.value}
                    </dd>
                  </div>
                ))}

                <div className="py-4">
                  <dt className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-steel-500">
                    {labels.registration}
                  </dt>
                  <dd
                    className="mt-1.5 space-y-1 text-[0.9375rem] text-navy-700"
                    data-placeholder="true"
                  >
                    <p>{company.registration.rccm.value}</p>
                    <p>{company.registration.idNat.value}</p>
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-[0.75rem] leading-relaxed text-steel-500">
                {contact.coordinates.note}
              </p>
            </div>
          </Reveal>

          {/* RFQ */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="fx-eyebrow">{rfq.eyebrow}</p>
              <h2 className="fx-display mt-5 text-[1.75rem] text-navy-700 sm:text-[2.15rem]">
                {rfq.title}
              </h2>
              <p className="fx-lead mt-5">{rfq.intro}</p>
              <p
                className="mt-6 border-l-2 border-gold-500 bg-steel-50 px-5 py-4 text-[0.8125rem] leading-relaxed text-steel-700"
                data-placeholder="true"
              >
                {rfq.devNotice}
              </p>
            </Reveal>

            <div className="mt-12">
              <RfqForm locale={locale} content={content} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
