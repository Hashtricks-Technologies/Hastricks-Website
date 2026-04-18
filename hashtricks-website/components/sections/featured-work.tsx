import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { placeholderWork } from "@/lib/data/placeholder-work";

export function FeaturedWork() {
  const [hero, ...rest] = placeholderWork.slice(0, 3);

  return (
    <section className="relative border-y border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title={
            <>
              Outcomes,{" "}
              <span className="italic font-normal text-[var(--color-sky)]">not output</span>.
            </>
          }
          description="A small slice of what we've shipped. Every engagement is measured in time saved, revenue unlocked, or users retained."
          action={
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/70 hover:text-[var(--color-primary)] transition-colors"
            >
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-5 stagger-children">
          {hero && (
            <Link
              href={`/work/${hero.slug}`}
              className="group relative lg:col-span-3 overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 transition hover:border-[var(--color-primary)]/60"
            >
              <div className="relative aspect-[5/4] md:aspect-[7/5] overflow-hidden border-b border-[var(--color-surface-border)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(241,109,52,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(187,224,239,0.25),transparent_55%),linear-gradient(180deg,rgba(15,22,64,0.4)_0%,rgba(22,30,84,0.8)_100%)]" />
                <div className="absolute left-6 top-6 flex gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sky)] border border-[var(--color-sky)]/30 rounded-full px-3 py-1">
                    Featured
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-neutral)]/70 border border-[var(--color-surface-border)] rounded-full px-3 py-1 bg-[var(--color-surface)]/40">
                    {hero.industry}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 text-right">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-neutral)]/60">
                    Outcome
                  </p>
                  <p className="mt-1 text-numeral text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                    {hero.metric}
                  </p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {hero.title}
                </h3>
                <p className="mt-3 text-base text-[var(--color-neutral)]/70 leading-relaxed max-w-xl">
                  {hero.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          )}

          <div className="lg:col-span-2 grid gap-5">
            {rest.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 transition hover:border-[var(--color-primary)]/60"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-neutral)]/60">
                    {item.industry}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-neutral)]/40 group-hover:text-[var(--color-primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-6 font-display text-lg md:text-xl font-bold tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-neutral)]/65 leading-relaxed">
                  {item.summary}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-numeral text-xl font-bold text-[var(--color-primary)]">
                    {item.metric}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
