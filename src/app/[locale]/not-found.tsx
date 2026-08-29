import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { getContent } from "@/content";
import { defaultLocale, pathFor } from "@/lib/i18n";

/**
 * Locale-scoped 404. Rendered inside the locale layout, so the visitor keeps
 * the header, footer and navigation. Copy is French — the default editorial
 * language — because the segment that failed to resolve may not identify a
 * locale reliably.
 */
export default function NotFound() {
  const content = getContent(defaultLocale);

  return (
    <section className="fx-navy-texture">
      <Container className="flex min-h-[62vh] flex-col justify-center py-24">
        <p className="fx-eyebrow fx-eyebrow-light">Erreur 404</p>
        <span className="fx-rule-gold mt-6" />
        <h1 className="fx-display mt-7 max-w-2xl text-[2rem] text-white sm:text-[2.6rem]">
          Cette page n&apos;existe pas ou n&apos;est plus disponible.
        </h1>
        <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-steel-200">
          Vous pouvez revenir à l&apos;accueil ou nous adresser directement votre
          demande industrielle.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href={pathFor(defaultLocale, "home")}
            className="inline-flex items-center justify-center bg-gold-500 px-6 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:bg-gold-400"
          >
            {content.nav.home}
          </Link>
          <Link
            href={pathFor(defaultLocale, "contact")}
            className="inline-flex items-center justify-center border border-white/30 px-6 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-navy-800"
          >
            {content.nav.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
