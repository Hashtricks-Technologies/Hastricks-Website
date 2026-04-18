import type { Metadata } from "next";
import { placeholderJobs } from "@/lib/data/placeholder-jobs";
import { getActiveJobs } from "@/lib/sanity/queries";
import { company } from "@/lib/data/company";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build AI-powered software with a senior team at Hashtricks Technologies, Coimbatore.",
  alternates: { canonical: "https://www.hashtrickstechnologies.com/careers" },
  openGraph: {
    title: "Careers — Hashtricks Technologies",
    description: "Build AI-powered software with a senior team at Hashtricks Technologies, Coimbatore.",
    url: "https://www.hashtrickstechnologies.com/careers",
  },
};

export const revalidate = 60;

type JobCard = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
};

export default async function CareersPage() {
  const cms = await getActiveJobs();
  const jobs: JobCard[] = cms.length
    ? cms.map((j) => ({
        slug: j.slug,
        title: j.title,
        location: j.location ?? "Remote",
        type: j.type ?? "Full-time",
        summary: j.summary ?? "",
      }))
    : placeholderJobs.map((j) => ({
        slug: j.slug,
        title: j.title,
        location: j.location,
        type: j.type,
        summary: j.summary,
      }));

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>Careers · {jobs.length.toString().padStart(2, "0")} open roles</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-4xl reveal">
            Work{" "}
            <span className="italic font-normal text-[var(--color-sky)]">with us</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
            A small, senior team shipping AI-native software to mid-sized companies. If that sounds
            like your kind of engineering, say hi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24">
        <div className="horizon-line w-full reveal" />

        {jobs.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-10 md:p-16 max-w-2xl reveal">
            <p className="font-display text-2xl font-bold text-[var(--color-neutral)]">
              No open roles right now.
            </p>
            <p className="mt-4 text-base text-[var(--color-neutral)]/70 leading-relaxed">
              But we&apos;re always interested in meeting sharp people. If you build things you&apos;re proud
              of, tell us your story.
            </p>
            <div className="mt-8">
              <Button asChild variant="cta">
                <a href={`mailto:${company.email}?subject=Introduction`}>
                  {company.email}
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <ul className="mt-2 divide-y divide-[var(--color-surface-border)]/70 stagger-children">
            {jobs.map((job, i) => (
              <li key={job.slug}>
                <div className="group grid gap-6 py-10 md:grid-cols-12 items-center">
                  <span className="text-numeral font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/45 md:col-span-1">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)]">
                      {job.title}
                    </h2>
                    <p className="mt-3 text-base text-[var(--color-neutral)]/65 leading-relaxed max-w-2xl">
                      {job.summary}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sky)]">
                      {job.location}
                    </span>
                    <p className="mt-1 font-mono text-xs text-[var(--color-neutral)]/50">{job.type}</p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end">
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                      >
                        Apply →
                      </a>
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
