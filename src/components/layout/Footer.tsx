import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content";
import { company } from "@/content/company";
import { type Locale, type RouteKey, pathFor } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
};

const NAV: RouteKey[] = ["home", "about", "minerals", "contact"];

export function Footer({ locale, content }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="fx-navy-texture text-steel-300">
      {/* Closing procurement prompt */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div>
            <h2 className="fx-display text-[1.5rem] text-white sm:text-[1.85rem]">
              {content.footer.ctaTitle}
            </h2>
            <p className="mt-2 text-[0.9375rem] text-steel-300">
              {content.footer.ctaBody}
            </p>
          </div>
          <Link
            href={pathFor(locale, "contact")}
            className="group inline-flex shrink-0 items-center gap-3 bg-gold-500 px-7 py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors duration-300 hover:bg-gold-400"
          >
            {content.footer.ctaButton}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 12"
              width="18"
              height="11"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M0 6h17.5M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </Container>
      </div>

      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-3">
          <Logo variant="reversed" height={92} className="h-[78px] lg:h-[92px]" />
          <p className="mt-7 max-w-sm text-[0.9375rem] leading-relaxed text-steel-300">
            {content.footer.description}
          </p>
          <span className="fx-rule-gold mt-8" />
        </div>

        <nav className="lg:col-span-2" aria-label={content.footer.navTitle}>
          <FooterTitle>{content.footer.navTitle}</FooterTitle>
          <ul className="mt-5 space-y-3">
            {NAV.map((key) => (
              <li key={key}>
                <FooterLink href={pathFor(locale, key)}>
                  {content.nav[key]}
                </FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label={content.footer.mineralsTitle}>
          <FooterTitle>{content.footer.mineralsTitle}</FooterTitle>
          <ul className="mt-5 space-y-3">
            {content.minerals.items.map((item) => (
              <li key={item.id}>
                <FooterLink href={`${pathFor(locale, "minerals")}#${item.id}`}>
                  {item.name}
                </FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label={content.footer.operationsTitle}>
          <FooterTitle>{content.footer.operationsTitle}</FooterTitle>
          <ul className="mt-5 space-y-3">
            {content.footer.operations.map((item) => (
              <li key={item.key}>
                <FooterLink href={pathFor(locale, item.key)}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterTitle>{content.footer.contactTitle}</FooterTitle>
          <address className="mt-5 space-y-3 text-[0.875rem] not-italic leading-relaxed">
            <p className="text-steel-300">
              {company.headquarters.value.city},<br />
              {locale === "fr"
                ? `Province du ${company.headquarters.value.province}`
                : `${company.headquarters.value.province} Province`}
              ,<br />
              {locale === "fr"
                ? company.headquarters.value.country
                : company.headquarters.value.countryEn}
            </p>
            <p data-placeholder="true" className="text-steel-400">
              {company.contact.phone.value}
            </p>
            <p data-placeholder="true" className="text-steel-400">
              {company.contact.email.value}
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.75rem] text-steel-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. {content.footer.legal}
          </p>
          <p data-placeholder="true">{content.footer.legalNote}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white">
      {children}
    </h2>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="fx-underline text-[0.875rem] text-steel-300 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
