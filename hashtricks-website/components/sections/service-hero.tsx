import { SunHorizon } from "@/components/brand/sun-horizon";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import type { Service } from "@/lib/data/services";

export function ServiceHero({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section className="relative isolate overflow-hidden">
      <SunHorizon position="top" intensity="soft" />
      <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-20 md:pt-32 md:pb-28">
        <span className="eyebrow reveal">
          <span className="text-numeral text-[var(--color-primary)]">/</span>
          <span className="eyebrow-rule" />
          <span>Services / {service.slug}</span>
        </span>

        <div className="mt-10 grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-primary)]/40 bg-[var(--color-secondary)]/80 text-[var(--color-primary)] shadow-glow-primary reveal">
            <Icon className="h-10 w-10" />
          </div>
          <div className="max-w-4xl">
            <h1 className="text-display-xl text-[var(--color-neutral)] reveal">{service.title}</h1>
            <p className="mt-8 text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed max-w-3xl reveal">
              {service.long}
            </p>
            <div className="mt-10 flex flex-wrap gap-3 reveal">
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
      </div>
    </section>
  );
}
