import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/30 p-10 md:p-16 text-center">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(187,224,239,0.2),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(241,109,52,0.18),transparent_60%)]"
        />
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Ready to build?</h2>
        <p className="mt-4 text-[var(--color-neutral)]/70 max-w-2xl mx-auto">
          Tell us what you&apos;re working on. We&apos;ll show you what we&apos;d build.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="cta">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
              Book a Call <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
