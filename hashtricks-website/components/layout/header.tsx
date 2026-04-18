import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { mainNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-surface-border)]/70 bg-[var(--color-secondary)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-md px-3 py-2 text-sm text-[var(--color-neutral)]/75 hover:text-[var(--color-neutral)] hover:bg-[var(--color-surface-muted)]/60 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-neutral)]/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-60 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            </span>
            Taking projects
          </span>
          <Button asChild size="sm" variant="cta">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
