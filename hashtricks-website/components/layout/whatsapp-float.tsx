"use client";
import { useEffect, useState } from "react";
import { WhatsappIcon } from "@/components/brand/social-icons";
import { company } from "@/lib/data/company";

export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      data-visible={visible}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-fg)] shadow-[0_12px_36px_-10px_rgba(255,152,106,0.6)] transition-all duration-300 hover:brightness-110 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] data-[visible=false]:translate-y-24 data-[visible=false]:opacity-0 data-[visible=false]:pointer-events-none"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[var(--color-accent)]/60 animate-ping opacity-30"
      />
      <WhatsappIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--color-neutral)] opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 md:block hidden">
        Chat on WhatsApp
      </span>
    </a>
  );
}
