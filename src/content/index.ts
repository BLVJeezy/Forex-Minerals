import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, Dictionary> = { fr, en };

/** Full editorial content for a locale. */
export function getContent(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
