import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { getCaseStudies, getCaseStudy } from "@/lib/sanity/queries";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { CtaBand } from "@/components/sections/cta-band";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60;

export async function generateStaticParams() {
  const cms = await getCaseStudies();
  if (cms.length) return cms.map((w) => ({ slug: w.slug }));
  return placeholderWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getCaseStudy(slug);
  const fallback = placeholderWork.find((w) => w.slug === slug);
  const item = cms ?? fallback;
  if (!item) return {};
  return { title: item.title, description: item.summary ?? "" };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getCaseStudy(slug);
  const fallback = placeholderWork.find((w) => w.slug === slug);
  const item = cms ?? fallback;
  if (!item) notFound();

  const services = cms?.services ?? fallback?.services ?? [];
  const industry = cms?.industry ?? fallback?.industry ?? "";
  const metric = cms?.metric ?? fallback?.metric ?? "";
  const summary = cms?.summary ?? fallback?.summary ?? "";

  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
          <HashGlyph /> case study{industry ? ` / ${industry}` : ""}
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          {item.title}
        </h1>
        {summary && <p className="mt-4 text-lg text-[var(--color-neutral)]/70">{summary}</p>}
        {services.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <Badge key={String(s)}>{String(s)}</Badge>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 space-y-8">
        {metric && (
          <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">Outcome</p>
            <p className="mt-2 font-display text-2xl font-bold text-[var(--color-accent)]">{metric}</p>
          </div>
        )}

        <div className="prose-invert">
          {cms?.challenge ? (
            <>
              <h2>Challenge</h2>
              <PortableText value={cms.challenge as never} />
            </>
          ) : (
            <>
              <h2>Challenge</h2>
              <p>Placeholder challenge narrative — add real content in Sanity Studio.</p>
            </>
          )}
          {cms?.solution ? (
            <>
              <h2>Solution</h2>
              <PortableText value={cms.solution as never} />
            </>
          ) : (
            <>
              <h2>Solution</h2>
              <p>Placeholder solution narrative — add real content in Sanity Studio.</p>
            </>
          )}
          {cms?.outcomes ? (
            <>
              <h2>Outcomes</h2>
              <PortableText value={cms.outcomes as never} />
            </>
          ) : (
            <>
              <h2>Outcomes</h2>
              <p>Placeholder outcomes — add real numbers in Sanity Studio.</p>
            </>
          )}
        </div>

        {cms?.stack && cms.stack.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cms.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        )}

        {cms?.testimonial?.quote && (
          <blockquote className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6">
            <p className="text-[var(--color-neutral)]/85 leading-relaxed">&ldquo;{cms.testimonial.quote}&rdquo;</p>
            {cms.testimonial.author && (
              <footer className="mt-4">
                <p className="font-semibold text-[var(--color-neutral)]">{cms.testimonial.author}</p>
                {cms.testimonial.role && (
                  <p className="text-sm text-[var(--color-neutral)]/50">{cms.testimonial.role}</p>
                )}
              </footer>
            )}
          </blockquote>
        )}
      </section>

      <CtaBand />
    </>
  );
}
