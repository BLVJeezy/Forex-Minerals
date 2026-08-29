/**
 * Locale + URL architecture.
 *
 * French is the original editorial language and the default locale.
 * Every page exists under a localised path so that search engines index a
 * clean multilingual structure: /fr/transport-logistique, /en/transport-logistics.
 */

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

/** HTML lang / hreflang values. */
export const localeHtmlLang: Record<Locale, string> = {
  fr: "fr",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/* ------------------------------------------------------------------ */
/* Route table — single source of truth for localised URLs             */
/* ------------------------------------------------------------------ */

export const routeKeys = [
  "home",
  "about",
  "minerals",
  "transport",
  "fleet",
  "industries",
  "contact",
] as const;

export type RouteKey = (typeof routeKeys)[number];

export const routeSegments: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "", en: "" },
  about: { fr: "a-propos", en: "about" },
  minerals: { fr: "mineraux", en: "minerals" },
  transport: { fr: "transport-logistique", en: "transport-logistics" },
  fleet: { fr: "flotte-securite", en: "fleet-safety" },
  industries: { fr: "secteurs", en: "industries" },
  contact: { fr: "contact", en: "contact" },
};

/** Absolute in-site path for a page in a given locale. */
export function pathFor(locale: Locale, key: RouteKey): string {
  const segment = routeSegments[key][locale];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

/** Resolve a URL segment back to its route key (used by the catch-all page). */
export function routeKeyFromSegment(
  locale: Locale,
  segment: string,
): RouteKey | null {
  const match = routeKeys.find((key) => routeSegments[key][locale] === segment);
  return match ?? null;
}

/** The equivalent path in the other locale — powers the FR | EN switch. */
export function alternatePath(
  currentLocale: Locale,
  target: Locale,
  key: RouteKey,
): string {
  void currentLocale;
  return pathFor(target, key);
}
