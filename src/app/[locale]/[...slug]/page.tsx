import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPage } from "@/components/pages/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { FleetPage } from "@/components/pages/FleetPage";
import { IndustriesPage } from "@/components/pages/IndustriesPage";
import { MineralsPage } from "@/components/pages/MineralsPage";
import { TransportPage } from "@/components/pages/TransportPage";
import { getContent } from "@/content";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import {
  type Locale,
  type RouteKey,
  isLocale,
  locales,
  routeKeyFromSegment,
  routeKeys,
  routeSegments,
} from "@/lib/i18n";

/**
 * Localised pages resolve through the central route table
 * (`src/lib/i18n.ts`), so /fr/transport-logistique and
 * /en/transport-logistics render the same page in the right language and each
 * URL exists in exactly one place.
 */
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routeKeys
      .filter((key) => key !== "home")
      .map((key) => ({ locale, slug: [routeSegments[key][locale]] })),
  );
}

function resolve(
  localeParam: string,
  slug: string[],
): { locale: Locale; key: RouteKey } | null {
  if (!isLocale(localeParam)) return null;
  if (slug.length !== 1) return null;
  const key = routeKeyFromSegment(localeParam, slug[0]);
  if (!key || key === "home") return null;
  return { locale: localeParam, key };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) return {};
  return buildPageMetadata(resolved.locale, resolved.key);
}

export default async function LocalisedPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const resolved = resolve(locale, slug);
  if (!resolved) notFound();

  const content = getContent(resolved.locale);
  const props = { locale: resolved.locale, content };

  const pages: Record<Exclude<RouteKey, "home">, React.ReactNode> = {
    about: <AboutPage {...props} />,
    minerals: <MineralsPage {...props} />,
    transport: <TransportPage {...props} />,
    fleet: <FleetPage {...props} />,
    industries: <IndustriesPage {...props} />,
    contact: <ContactPage {...props} />,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(resolved.locale, resolved.key, content),
          ),
        }}
      />
      {pages[resolved.key as Exclude<RouteKey, "home">]}
    </>
  );
}
