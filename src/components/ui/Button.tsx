import Link from "next/link";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const base =
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-6 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]";

const variants: Record<Variant, string> = {
  // Gold on navy — the procurement action
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 focus-visible:bg-gold-400",
  // Navy outline on light surfaces
  secondary:
    "border border-navy-700/25 text-navy-700 hover:border-navy-700 hover:bg-navy-700 hover:text-white",
  ghost: "px-0 py-1 text-navy-700 hover:text-gold-700",
  // Outline on deep navy surfaces
  onDark:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-800",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 12"
      width="18"
      height="11"
      fill="none"
      className="translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-1"
    >
      <path d="M0 6h17.5M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  ...rest
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {withArrow ? <Arrow /> : null}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  withArrow = false,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)}
      {...rest}
    >
      <span>{children}</span>
      {withArrow ? <Arrow /> : null}
    </button>
  );
}
