import type { Dictionary } from "@/content";
import { company } from "@/content/company";
import { absoluteUrl } from "@/lib/metadata";
import { type Locale, type RouteKey, pathFor } from "@/lib/i18n";

/**
 * Structured data.
 *
 * Only facts explicitly provided by Forex Minerals are emitted: name, the
 * headquarters city/province/country and the operating area. Telephone,
 * email, registration numbers, founding date and employee counts are
 * intentionally omitted while they remain unconfirmed — publishing
 * placeholder values as structured data would be a factual claim.
 */
export function organisationSchema(locale: Locale, content: Dictionary) {
  const hq = company.headquarters.value;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    url: absoluteUrl(pathFor(locale, "home")),
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/og-image.jpg"),
    description: content.meta.defaultDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: hq.city,
      addressRegion: hq.province,
      addressCountry: hq.countryCode,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${hq.province}, ${locale === "fr" ? hq.country : hq.countryEn}`,
    },
    knowsAbout: content.minerals.items.map((item) => item.name),
  };
}

export function websiteSchema(locale: Locale, content: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: content.meta.siteName,
    url: absoluteUrl(pathFor(locale, "home")),
    inLanguage: locale,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function breadcrumbSchema(
  locale: Locale,
  key: RouteKey,
  content: Dictionary,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: content.nav.home,
        item: absoluteUrl(pathFor(locale, "home")),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.nav[key],
        item: absoluteUrl(pathFor(locale, key)),
      },
    ],
  };
}
