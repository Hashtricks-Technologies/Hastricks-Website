import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hashtricks Technologies home"
      className={cn("inline-flex items-center gap-2 group", className)}
    >
      <span className="font-display text-2xl font-bold leading-none text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        #
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-accent)] transition-colors">
        Hashtricks
      </span>
    </Link>
  );
}
