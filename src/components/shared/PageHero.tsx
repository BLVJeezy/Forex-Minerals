import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/content";
import type { Photo } from "@/content/media";
import { cn } from "@/lib/cn";
import { type Locale, type RouteKey, pathFor } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: Dictionary;
  routeKey: RouteKey;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Optional supporting photograph, shown as a band beneath the type. */
  photo?: Photo;
  priority?: boolean;
};

/** Inner-page masthead: breadcrumb, eyebrow, H1 and lead paragraph. */
export function PageHero({
  locale,
  content,
  routeKey,
  eyebrow,
  title,
  lead,
  photo,
  priority = false,
}: Props) {
  return (
    <section className="fx-navy-texture">
      <Container className="pt-10 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <nav aria-label={content.nav.breadcrumb} className="mb-10 lg:mb-14">
          <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-steel-400">
            <li>
              <Link
                href={pathFor(locale, "home")}
                className="transition-colors hover:text-white"
              >
                {content.nav.home}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gold-500">
              /
            </li>
            <li className="text-steel-200" aria-current="page">
              {content.nav[routeKey]}
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="fx-eyebrow fx-eyebrow-light">{eyebrow}</p>
            <span className="fx-rule-gold mt-5" />
            <h1 className="fx-display mt-6 text-[2.1rem] text-white sm:text-[2.75rem] lg:text-[3.4rem]">
              {title}
            </h1>
          </div>
          {lead ? (
            <div className="lg:col-span-5 lg:pt-16">
              <p className="text-[1rem] leading-relaxed text-steel-200 lg:text-[1.0625rem]">
                {lead}
              </p>
            </div>
          ) : null}
        </div>
      </Container>

      {photo ? (
        <div
          className={cn(
            "relative h-[58vw] max-h-[520px] min-h-[260px] w-full sm:h-[42vw]",
          )}
        >
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            priority={priority}
            placeholder="blur"
            quality={85}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: photo.focus?.desktop ?? "50% 50%" }}
          />
        </div>
      ) : null}
    </section>
  );
}
