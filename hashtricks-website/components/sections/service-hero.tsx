import { GradientMesh } from "@/components/brand/gradient-mesh";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import type { Service } from "@/lib/data/services";

export function ServiceHero({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section className="relative isolate overflow-hidden">
      <GradientMesh />
      <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
            <HashGlyph /> services / {service.slug}
          </div>
          <div className="mt-6 flex items-start gap-4">
            <div className="h-14 w-14 shrink-0 rounded-xl bg-brand-gradient/10 border border-[var(--color-accent)]/25 grid place-items-center text-[var(--color-accent)]">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              {service.title}
            </h1>
          </div>
          <p className="mt-6 text-lg text-[var(--color-neutral)]/70 leading-relaxed">{service.long}</p>
          <div className="mt-8 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
