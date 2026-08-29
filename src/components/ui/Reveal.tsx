"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  as?: "div" | "li" | "article" | "section" | "figure";
};

/**
 * Restrained entrance animation. Elements fade and lift once, on first
 * intersection. Falls back to fully visible content when IntersectionObserver
 * is unavailable or when the visitor prefers reduced motion.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("fx-reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={delay ? ({ "--fx-reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
