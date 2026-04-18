import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { getCaseStudies, getCaseStudy } from "@/lib/sanity/queries";
import { SunHorizon } from "@/components/brand/sun-horizon";
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
  const challenge = fallback?.challenge;
  const solution = fallback?.solution;
  const outcomes = fallback?.outcomes;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-3xl px-5 pt-20 pb-12 md:pt-28">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/55 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> All case studies
          </Link>
          <span className="mt-8 eyebrow reveal">
            <span className="eyebrow-rule" />
            <span>Case study{industry ? ` · ${industry}` : ""}</span>
          </span>
          <h1 className="mt-6 text-display-xl text-[var(--color-neutral)] reveal">{item.title}</h1>
          {summary && (
            <p className="mt-6 text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
              {summary}
            </p>
          )}
          {services.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 reveal">
              {services.map((s) => (
                <Badge key={String(s)}>{String(s)}</Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 space-y-10">
        {metric && (
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-secondary)]/60 p-8 md:p-10">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_50%,rgba(241,109,52,0.25),transparent_55%)]"
            />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
              Key outcome
            </p>
            <p className="mt-4 text-numeral text-display-lg font-bold text-[var(--color-primary)]">
              {metric}
            </p>
          </div>
        )}

        <div className="horizon-line w-full" />

        {/* CMS content takes priority; fall back to structured placeholder data */}
        {cms && (cms.challenge || cms.solution || cms.outcomes) ? (
          <div className="prose-invert">
            {cms.challenge != null && (
              <>
                <h2>Challenge</h2>
                <PortableText value={cms.challenge as never} />
              </>
            )}
            {cms.solution != null && (
              <>
                <h2>Solution</h2>
                <PortableText value={cms.solution as never} />
              </>
            )}
            {cms.outcomes != null && (
              <>
                <h2>Outcomes</h2>
                <PortableText value={cms.outcomes as never} />
              </>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {challenge && (
              <div>
                <span className="eyebrow">
                  <span className="text-numeral text-[var(--color-primary)]">01</span>
                  <span className="eyebrow-rule" />
                  <span>{challenge.heading}</span>
                </span>
                <p className="mt-6 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  {challenge.body}
                </p>
                {challenge.points && (
                  <ul className="mt-6 space-y-3">
                    {challenge.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-base text-[var(--color-neutral)]/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {solution && (
              <div>
                <span className="eyebrow">
                  <span className="text-numeral text-[var(--color-primary)]">02</span>
                  <span className="eyebrow-rule" />
                  <span>{solution.heading}</span>
                </span>
                <p className="mt-6 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  {solution.body}
                </p>
                {solution.points && (
                  <ul className="mt-6 space-y-3">
                    {solution.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-base text-[var(--color-neutral)]/75">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {solution.backend && solution.backend.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                      Under the hood
                    </p>
                    <ul className="mt-4 space-y-3">
                      {solution.backend.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-[var(--color-neutral)]/75">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sky)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {outcomes && (
              <div>
                <span className="eyebrow">
                  <span className="text-numeral text-[var(--color-primary)]">03</span>
                  <span className="eyebrow-rule" />
                  <span>{outcomes.heading}</span>
                </span>
                <ul className="mt-6 space-y-3">
                  {outcomes.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base text-[var(--color-neutral)]/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      {p}
                    </li>
                  ))}
                </ul>
                {outcomes.takeaway && (
                  <blockquote className="mt-8 pl-5 border-l-2 border-[var(--color-primary)]/60 text-base md:text-lg italic text-[var(--color-neutral)]/85 leading-relaxed">
                    {outcomes.takeaway}
                  </blockquote>
                )}
              </div>
            )}
          </div>
        )}

        {cms?.stack && cms.stack.length > 0 && (
          <div className="border-t border-[var(--color-surface-border)]/70 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
              Tech stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cms.stack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        )}

        {cms?.testimonial?.quote && (
          <figure className="relative rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-8 md:p-10">
            <span
              aria-hidden
              className="absolute -top-4 left-4 font-display text-8xl leading-none text-[var(--color-primary)]/25 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-xl md:text-2xl leading-snug text-[var(--color-neutral)]">
              {cms.testimonial.quote}
            </blockquote>
            {cms.testimonial.author && (
              <figcaption className="mt-6">
                <p className="font-semibold text-[var(--color-neutral)]">{cms.testimonial.author}</p>
                {cms.testimonial.role && (
                  <p className="text-sm text-[var(--color-neutral)]/55">{cms.testimonial.role}</p>
                )}
              </figcaption>
            )}
          </figure>
        )}
      </section>

      <CtaBand />
    </>
  );
}
