import type { StaticImageData } from "next/image";

import fleetFormation from "@/assets/images/fleet-formation.jpg";
import leadershipFleet from "@/assets/images/leadership-fleet.jpg";
import truckTrailer from "@/assets/images/truck-trailer.jpg";
import wheelLoaders from "@/assets/images/wheel-loaders.jpg";
import logo from "@/assets/brand/forex-minerals-logo.png";
import logoReversed from "@/assets/brand/forex-minerals-logo-reversed.png";
import mark from "@/assets/brand/forex-minerals-mark.png";
import markReversed from "@/assets/brand/forex-minerals-mark-reversed.png";
import wordmark from "@/assets/brand/forex-minerals-wordmark.png";
import wordmarkReversed from "@/assets/brand/forex-minerals-wordmark-reversed.png";

import type { Locale } from "@/lib/i18n";

export type Photo = {
  src: StaticImageData;
  alt: Record<Locale, string>;
  /** object-position used when the photo is cropped into a band. */
  focus?: { desktop: string; mobile: string };
};

/**
 * Official Forex Minerals photography.
 *
 * To replace a photograph, drop a new file into `src/assets/images` under the
 * same name (or update the import here). Dimensions and blur placeholders are
 * derived automatically at build time.
 */
export const photos = {
  /** Direction de Forex Minerals devant la flotte — photographie héro. */
  leadershipFleet: {
    src: leadershipFleet,
    alt: {
      fr: "Deux représentants de la direction de Forex Minerals devant la flotte de camions de l'entreprise sur un site industriel du Haut-Katanga.",
      en: "Two Forex Minerals company representatives standing in front of the corporate truck fleet at an industrial site in Haut-Katanga.",
    },
    focus: { desktop: "50% 40%", mobile: "50% 42%" },
  },

  /** Flotte Forex Minerals en formation symétrique sur la route industrielle. */
  fleetFormation: {
    src: fleetFormation,
    alt: {
      fr: "Flotte de tracteurs routiers Forex Minerals alignés de part et d'autre d'une piste industrielle en carrière.",
      en: "Forex Minerals truck fleet lined up on both sides of an industrial haul road at a quarry.",
    },
    focus: { desktop: "50% 55%", mobile: "50% 50%" },
  },

  /** Tracteur Forex Minerals attelé à une benne industrielle. */
  truckTrailer: {
    src: truckTrailer,
    alt: {
      fr: "Tracteur routier Forex Minerals attelé à une semi-remorque benne pour le transport de minéraux industriels en vrac.",
      en: "Forex Minerals tractor unit coupled to a tipper semi-trailer used for bulk industrial mineral transport.",
    },
    focus: { desktop: "50% 55%", mobile: "42% 55%" },
  },

  /** Chargeuses sur pneus en carrière — opérations de chargement. */
  wheelLoaders: {
    src: wheelLoaders,
    alt: {
      fr: "Chargeuses sur pneus alignées sur une plateforme de carrière, prêtes pour les opérations de chargement de minéraux.",
      en: "Wheel loaders lined up on a quarry platform, ready for mineral loading operations.",
    },
    focus: { desktop: "50% 60%", mobile: "45% 60%" },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/**
 * Brand artwork derived from the official Forex Minerals logo by
 * `scripts/prepare-assets.mjs`.
 *
 * - `logo` / `logoReversed`   full stacked lockup (light / dark backgrounds)
 * - `mark` / `markReversed`   the crystal + F device on its own
 * - `wordmark` / `…Reversed`  the wordmark on its own
 *
 * The stacked lockup is used wherever there is vertical room; the header sets
 * the mark and wordmark side by side so the name stays legible at navigation
 * height. Colours and proportions are never altered.
 */
export const brand = {
  logo,
  logoReversed,
  mark,
  markReversed,
  wordmark,
  wordmarkReversed,
};
