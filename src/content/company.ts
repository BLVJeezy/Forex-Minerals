/**
 * Locale-neutral corporate data.
 *
 * ⚠️  IMPORTANT — CONTENU EN ATTENTE DE CONFIRMATION
 *
 * Every entry wrapped in `pending()` is a DESIGN PLACEHOLDER. It is not a
 * verified company fact and must be replaced with information supplied by
 * Forex Minerals before the site goes live. See docs/CONTENU-A-CONFIRMER.md.
 *
 * Entries wrapped in `confirmed()` are based on information explicitly
 * provided by the company.
 */

export type Value<T> = { value: T; pending: boolean };

export const pending = <T>(value: T): Value<T> => ({ value, pending: true });
export const confirmed = <T>(value: T): Value<T> => ({
  value,
  pending: false,
});

export const company = {
  name: "Forex Minerals",
  legalName: pending("Forex Minerals [forme juridique à confirmer]"),

  headquarters: confirmed({
    city: "Likasi",
    province: "Haut-Katanga",
    country: "République Démocratique du Congo",
    countryEn: "Democratic Republic of the Congo",
    countryCode: "CD",
  }),

  /** Rue / avenue / numéro — non communiqués à ce jour. */
  street: pending("[Adresse complète à confirmer]"),

  operationsArea: confirmed({
    fr: "Likasi, Lubumbashi et le corridor industriel du Haut-Katanga",
    en: "Likasi, Lubumbashi and the wider Haut-Katanga industrial corridor",
  }),

  contact: {
    phone: pending("[Téléphone à confirmer]"),
    whatsapp: pending("[WhatsApp à confirmer]"),
    email: pending("[Adresse e-mail à confirmer]"),
    commercialEmail: pending("[E-mail commercial à confirmer]"),
    hours: pending("[Horaires d'ouverture à confirmer]"),
  },

  registration: {
    rccm: pending("[RCCM à confirmer]"),
    idNat: pending("[Numéro d'identification nationale à confirmer]"),
    taxNumber: pending("[Numéro impôt à confirmer]"),
  },

  social: {
    linkedin: pending("[LinkedIn à confirmer]"),
    facebook: pending("[Facebook à confirmer]"),
  },

  /** Production domain — update before deployment. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.forexminerals.cd",

  /**
   * True once the real production domain has been supplied via
   * NEXT_PUBLIC_SITE_URL. Staging and preview deployments leave it unset, and
   * are kept out of search results — the site still carries placeholder
   * contact details, and an indexed preview URL would misrepresent the
   * company. Setting the domain switches indexing on.
   */
  isProductionDomain: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
} as const;

/* ------------------------------------------------------------------ */
/* Chiffres clés — PLACEHOLDERS                                        */
/* ------------------------------------------------------------------ */

export type Stat = {
  id: string;
  /** Numeric part. `null` while the real figure has not been supplied. */
  number: number | null;
  /** Displayed while the figure is pending. */
  display: string;
  suffix?: string;
  pending: boolean;
};

/**
 * ⚠️  None of these figures has been confirmed by Forex Minerals.
 * They are laid out as editable placeholders. Replace `display` with the real
 * value and set `number` so the count-up animation activates.
 */
export const keyFigures: Stat[] = [
  { id: "vehicles", number: null, display: "XX", suffix: "+", pending: true },
  { id: "tonnage", number: null, display: "XX", suffix: "K", pending: true },
  { id: "sites", number: null, display: "XX", suffix: "+", pending: true },
  { id: "experience", number: null, display: "XX", suffix: "", pending: true },
];

/* ------------------------------------------------------------------ */
/* Écosystème industriel                                               */
/* ------------------------------------------------------------------ */

/**
 * Organisations named by Forex Minerals as part of the industrial ecosystem it
 * operates within. No contractual relationship, volume or exclusivity is
 * implied or should be added here without written confirmation.
 * Official logos will replace the typographic treatment once supplied.
 */
export const ecosystem = [
  {
    id: "gck",
    name: "GCK",
    fullName: "Grande Cimenterie du Katanga SAS",
  },
  {
    id: "gecamines",
    name: "Gécamines",
    fullName: "La Générale des Carrières et des Mines",
  },
  {
    id: "shiesuka",
    name: "Shiesuka",
    fullName: "Shiesuka Likasi",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Direction                                                           */
/* ------------------------------------------------------------------ */

/**
 * ⚠️  Names, titles and responsibilities have not been confirmed.
 * Do not add biographical copy until Forex Minerals supplies it.
 */
export const leadership = [
  { id: "rep-1", name: "[Nom]", role: "[Fonction]", pending: true },
  { id: "rep-2", name: "[Nom]", role: "[Fonction]", pending: true },
] as const;
