import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { placeholderWork } from "@/lib/data/placeholder-work";

export function FeaturedWork() {
  const featured = placeholderWork.slice(0, 3);
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
            <HashGlyph /> featured work
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
            Outcomes, not output.
          </h2>
        </div>
        <Link
          href="/work"
          className="text-sm text-[var(--color-neutral)]/70 hover:text-[var(--color-accent)] inline-flex items-center gap-1 transition-colors"
        >
          See all work <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
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
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">
                {item.industry}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{item.summary}</p>
              <p className="mt-3 text-xs font-mono text-[var(--color-accent)]">{item.metric}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
