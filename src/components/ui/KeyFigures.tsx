"use client";

import { useEffect, useRef, useState } from "react";

import { keyFigures } from "@/content/company";
import { cn } from "@/lib/cn";

type Props = {
  labels: Record<string, string>;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Corporate key figures.
 *
 * Confirmed numeric values animate with a count-up on first view. Values still
 * awaiting confirmation are rendered as clearly marked editable placeholders
 * (`data-placeholder`) — see docs/CONTENU-A-CONFIRMER.md.
 */
export function KeyFigures({ labels, tone = "dark", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 gap-px border-t lg:grid-cols-4",
        tone === "dark"
          ? "border-white/12 bg-white/12"
          : "border-steel-200 bg-steel-200",
        className,
      )}
    >
      {keyFigures.map((figure, index) => (
        <div
          key={figure.id}
          className={cn(
            "px-5 py-9 sm:px-7 sm:py-11",
            tone === "dark" ? "bg-navy-800" : "bg-white",
          )}
        >
          <div
            className={cn(
              "fx-display flex items-baseline text-[2.5rem] leading-none sm:text-[3.15rem]",
              tone === "dark" ? "text-white" : "text-navy-700",
            )}
            data-placeholder={figure.pending ? "true" : undefined}
            title={figure.pending ? "Valeur à confirmer" : undefined}
          >
            <Figure figure={figure} active={active} delay={index * 90} />
            {figure.suffix ? (
              <span className="ml-0.5 text-gold-500">{figure.suffix}</span>
            ) : null}
          </div>
          <p
            className={cn(
              "mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
              tone === "dark" ? "text-steel-300" : "text-steel-600",
            )}
          >
            {labels[figure.id]}
          </p>
        </div>
      ))}
    </div>
  );
}

function Figure({
  figure,
  active,
  delay,
}: {
  figure: (typeof keyFigures)[number];
  active: boolean;
  delay: number;
}) {
  const [value, setValue] = useState(0);
  const target = figure.number;

  useEffect(() => {
    if (target === null || !active) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }

    let frame = 0;
    const duration = 1400;
    let start: number | null = null;

    const timeout = window.setTimeout(() => {
      const step = (now: number) => {
        if (start === null) start = now;
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [target, active, delay]);

  if (target === null) return <span>{figure.display}</span>;
  return <span>{value.toLocaleString("fr-FR")}</span>;
}
