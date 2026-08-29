import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "@/app/globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent } from "@/content";
import { company } from "@/content/company";
import {
  type Locale,
  isLocale,
  localeHtmlLang,
  locales,
  pathFor,
} from "@/lib/i18n";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00204f",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getContent(locale);

  return {
    metadataBase: new URL(company.siteUrl),
    title: {
      default: content.meta.defaultTitle,
      template: content.meta.titleTemplate,
    },
    description: content.meta.defaultDescription,
    applicationName: content.meta.siteName,
    alternates: {
      canonical: pathFor(locale, "home"),
      languages: {
        fr: pathFor("fr", "home"),
        en: pathFor("en", "home"),
        "x-default": pathFor("fr", "home"),
      },
    },
    openGraph: {
      type: "website",
      siteName: content.meta.siteName,
      locale: locale === "fr" ? "fr_CD" : "en_GB",
      alternateLocale: locale === "fr" ? "en_GB" : "fr_CD",
      url: pathFor(locale, "home"),
      title: content.meta.defaultTitle,
      description: content.meta.defaultDescription,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: content.meta.tagline,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.defaultTitle,
      description: content.meta.defaultDescription,
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const content = getContent(typedLocale);
  const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "1";

  return (
    <html
      lang={localeHtmlLang[typedLocale]}
      data-show-placeholders={showPlaceholders ? "true" : undefined}
      className={`${archivo.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-navy-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          {content.nav.skipToContent}
        </a>

        <Header locale={typedLocale} content={content} />

        <main id="main">{children}</main>

        <Footer locale={typedLocale} content={content} />
      </body>
    </html>
  );
}
