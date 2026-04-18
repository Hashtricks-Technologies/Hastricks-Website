import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { getCaseStudies } from "@/lib/sanity/queries";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from Hashtricks Technologies.",
  alternates: { canonical: "https://hashtricks.tech/work" },
  openGraph: {
    title: "Work — Hashtricks Technologies",
    description: "Selected case studies from Hashtricks Technologies.",
    url: "https://hashtricks.tech/work",
  },
};

export const revalidate = 60;

type WorkCard = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metric: string;
};

export default async function WorkPage() {
  const cms = await getCaseStudies();
  const items: WorkCard[] = cms.length
    ? cms.map((w) => ({
        slug: w.slug,
        title: w.title,
        industry: w.industry ?? "",
        summary: w.summary ?? "",
        metric: w.metric ?? "",
      }))
    : placeholderWork.map((w) => ({
        slug: w.slug,
        title: w.title,
        industry: w.industry,
        summary: w.summary,
        metric: w.metric,
      }));

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>Selected work · {items.length.toString().padStart(2, "0")}</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-5xl reveal">
            Case studies.{" "}
            <span className="italic font-normal text-[var(--color-sky)]">Shipped, measured, maintained.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
            Selected engagements. Every one of them in production with real users and real outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-20">
        <div className="horizon-line w-full reveal" />
        <ul className="mt-2 divide-y divide-[var(--color-surface-border)]/70 stagger-children">
          {items.map((item, i) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="group grid gap-6 py-8 md:py-10 md:grid-cols-12 items-center"
              >
                <span className="text-numeral font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/45 md:col-span-1">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="md:col-span-7">
                  <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base text-[var(--color-neutral)]/65 leading-relaxed max-w-2xl">
                    {item.summary}
                  </p>
                </div>
                <div className="md:col-span-3">
                  {item.industry && (
                    <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-neutral)]/60 border border-[var(--color-surface-border)] rounded-full px-3 py-1">
                      {item.industry}
                    </span>
                  )}
                  {item.metric && (
                    <p className="mt-3 text-numeral text-xl font-bold text-[var(--color-primary)]">
                      {item.metric}
                    </p>
                  )}
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-surface-border)] text-[var(--color-neutral)]/60 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] group-hover:rotate-[-45deg] transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
