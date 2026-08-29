import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** `wide` is used for full-bleed editorial bands, `narrow` for text columns. */
  size?: "default" | "wide" | "narrow";
  as?: "div" | "section" | "header" | "footer" | "nav" | "article";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-[1240px]",
  wide: "max-w-[1500px]",
};

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: Props) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}>
      {children}
    </Tag>
  );
}
