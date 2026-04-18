import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { company } from "@/lib/data/company";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-[var(--color-surface-border)] bg-[var(--color-secondary)]/80 px-6 py-20 md:px-16 md:py-28 text-center">
        <SunHorizon position="bottom" intensity="strong" className="rounded-[2rem]" />

        <span className="eyebrow justify-center">
          <span className="eyebrow-rule" />
          <span>Let&apos;s talk</span>
          <span className="eyebrow-rule" />
        </span>

        <h2 className="mt-6 text-display-xl text-[var(--color-neutral)] max-w-4xl mx-auto">
          Ready to{" "}
          <span className="italic font-normal text-[var(--color-sky)]">build</span>?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[var(--color-neutral)]/75 max-w-2xl mx-auto leading-relaxed">
          Tell us what you&apos;re working on. We&apos;ll show you what we&apos;d build — and how fast.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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

        <div className="mt-14 flex items-center justify-center gap-5 text-xs font-mono uppercase tracking-[0.22em] text-[var(--color-neutral)]/55">
          <span>Replies within 1 business day</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
          <span>No obligation</span>
        </div>
      </div>
    </section>
  );
}
