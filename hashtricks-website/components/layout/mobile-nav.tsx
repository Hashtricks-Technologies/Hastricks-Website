"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-neutral)] hover:bg-[var(--color-surface-muted)]"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-6 pt-10" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-[var(--color-neutral)] hover:text-[var(--color-accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="cta" className="mt-4">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
              Book a Call
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
