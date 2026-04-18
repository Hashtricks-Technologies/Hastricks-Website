import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { mainNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-neutral)]/75 hover:text-[var(--color-neutral)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm">
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
