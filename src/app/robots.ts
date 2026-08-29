import type { MetadataRoute } from "next";

import { company } from "@/content/company";

/**
 * Search engines are only invited in once NEXT_PUBLIC_SITE_URL names the real
 * production domain. Preview and staging deployments are excluded: the site
 * still carries placeholder contact details and unconfirmed figures, and an
 * indexed preview URL would misrepresent Forex Minerals.
 */
export default function robots(): MetadataRoute.Robots {
  if (!company.isProductionDomain) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", company.siteUrl).toString(),
    host: company.siteUrl,
  };
}
