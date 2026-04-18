import type { Metadata } from "next";
import { MessageCircle, Mail } from "lucide-react";
import { company } from "@/lib/data/company";
import { ContactForm } from "@/components/sections/contact-form";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call or send us your project brief.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-24 pb-24 grid gap-12 md:grid-cols-2">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
          <HashGlyph /> contact
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          Let&apos;s build.
        </h1>
        <p className="mt-4 text-lg text-[var(--color-neutral)]/70">
          Book a call, WhatsApp us, or fill the form. We reply within one business day.
        </p>

        <div className="mt-8 space-y-3">
          <Button asChild variant="cta" className="w-full md:w-auto">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
              Book a discovery call
            </a>
          </Button>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={`mailto:${company.email}`}>
                <Mail className="h-4 w-4" /> {company.email}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 text-sm text-[var(--color-neutral)]/60">
          <p className="font-semibold text-[var(--color-neutral)]">Based in {company.location}.</p>
          <p className="mt-2">
            Founded {company.foundedYear}. A {company.teamSize}-person senior team working with clients across time
            zones.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
