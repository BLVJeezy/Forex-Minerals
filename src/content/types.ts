import type { fr } from "@/content/fr";

/**
 * The French dictionary is the reference shape. Every other locale must
 * provide exactly the same keys — enforced at compile time.
 */
export type Dictionary = typeof fr;
