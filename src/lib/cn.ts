type ClassValue = string | false | null | undefined;

/** Minimal class-name joiner — no runtime dependency needed. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
