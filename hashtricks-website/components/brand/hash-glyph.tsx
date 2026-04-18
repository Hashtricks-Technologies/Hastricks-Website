import { cn } from "@/lib/utils";

export function HashGlyph({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-block font-mono text-[var(--color-accent)]", className)}>
      #
    </span>
  );
}
