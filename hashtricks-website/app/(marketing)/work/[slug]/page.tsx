import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return placeholderWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = placeholderWork.find((w) => w.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = placeholderWork.find((w) => w.slug === slug);
  if (!item) notFound();
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
          <HashGlyph /> case study / {item.industry}
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          {item.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-neutral)]/70">{item.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.services.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 space-y-8">
        <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">Outcome</p>
          <p className="mt-2 font-display text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent">
            {item.metric}
          </p>
        </div>
        <div className="prose-invert">
          <h2>Challenge</h2>
          <p>
            Placeholder challenge narrative — describe the problem, the constraints, and what was at stake. Replace with
            real content before launch.
          </p>
          <h2>Solution</h2>
          <p>
            Placeholder solution narrative — describe the approach, the architecture decisions, and why. Replace with
            real content before launch.
          </p>
          <h2>Outcomes</h2>
          <p>
            Placeholder outcomes — quantify time saved, revenue unlocked, errors reduced. Replace with real numbers
            before launch.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
