import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from Hashtricks Technologies.",
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-5 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
          <HashGlyph /> work
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Case studies</h1>
        <p className="mt-4 text-lg text-[var(--color-neutral)]/70 max-w-2xl">
          Selected engagements. Each one shipped, measured, and maintained.
        </p>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholderWork.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 overflow-hidden transition hover:shadow-glow-accent hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
            >
              <div className="aspect-[4/3] bg-brand-gradient/10 border-b border-[var(--color-surface-border)] grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.2),transparent_60%)]" />
                <span className="relative font-mono text-sm text-[var(--color-accent)]/70 tracking-wider">
                  {item.industry.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">{item.industry}</p>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{item.summary}</p>
                <p className="mt-3 text-xs font-mono text-[var(--color-accent)]">{item.metric}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--color-neutral)]/70 group-hover:text-[var(--color-accent)] transition-colors">
                  Read case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
