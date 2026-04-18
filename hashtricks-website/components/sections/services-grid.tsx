import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24" id="services">
      <div className="max-w-2xl">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> services
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
          What we build
        </h2>
        <p className="mt-4 text-[var(--color-neutral)]/70 text-lg">
          Nine capabilities, one senior team. Pick what you need — we&apos;ll bring the rest.
        </p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 transition-all hover:shadow-glow-accent hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-lg bg-brand-gradient/10 border border-[var(--color-accent)]/25 grid place-items-center text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-[var(--color-neutral)]/40 group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{service.short}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
