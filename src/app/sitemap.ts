import type { MetadataRoute } from "next";

import { company } from "@/content/company";
import { locales, pathFor, routeKeys } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routeKeys.map((key) => ({
      url: new URL(pathFor(locale, key), company.siteUrl).toString(),
      lastModified: now,
      changeFrequency: key === "home" ? ("weekly" as const) : ("monthly" as const),
      priority: key === "home" ? 1 : key === "contact" ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            alt,
            new URL(pathFor(alt, key), company.siteUrl).toString(),
          ]),
        ),
      },
    })),
  );
}
