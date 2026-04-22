import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hashtricks Technologies home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <Image
        src="/hashtricks-favicon-512.png"
        alt=""
        width={512}
        height={512}
        priority
        className="h-8 w-8 rounded-[7px] transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-accent)] transition-colors">
        Hashtricks
      </span>
    </Link>
  );
}
