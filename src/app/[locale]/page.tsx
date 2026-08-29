import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Ecosystem } from "@/components/home/Ecosystem";
import { Figures } from "@/components/home/Figures";
import { FleetTeaser } from "@/components/home/FleetTeaser";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { MineralsPreview } from "@/components/home/MineralsPreview";
import { ValueProps } from "@/components/home/ValueProps";
import { CtaBand } from "@/components/shared/CtaBand";
import { ImageBand } from "@/components/shared/ImageBand";
import { ProcessFlow } from "@/components/shared/ProcessFlow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { photos } from "@/content/media";
import { buildPageMetadata } from "@/lib/metadata";
import { organisationSchema, websiteSchema } from "@/lib/schema";
import { isLocale, locales } from "@/lib/i18n";

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
  return buildPageMetadata(locale, "home");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);
  const { process: operatingModel, imageBreak, cta } = content.home;

  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is generated from the same central content source.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organisationSchema(locale, content),
            websiteSchema(locale, content),
          ]),
        }}
      />

      <Hero locale={locale} content={content} />
      <Intro locale={locale} content={content} />
      <Figures content={content} />
      <MineralsPreview locale={locale} content={content} />

      <section className="bg-white fx-section">
        <Container>
          <SectionHeading
            eyebrow={operatingModel.eyebrow}
            title={operatingModel.title}
            body={operatingModel.body}
          />
          <ProcessFlow steps={operatingModel.steps} className="mt-12 lg:mt-16" />
        </Container>
      </section>

      <ImageBand
        locale={locale}
        photo={photos.truckTrailer}
        title={imageBreak.title}
        body={imageBreak.body}
        height="tall"
      />

      <ValueProps content={content} />
      <FleetTeaser locale={locale} content={content} />
      <Ecosystem content={content} />
      <LeadershipSection locale={locale} content={content} />

      <CtaBand
        locale={locale}
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
