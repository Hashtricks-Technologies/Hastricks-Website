import type { Metadata } from "next";
import { placeholderJobs } from "@/lib/data/placeholder-jobs";
import { getActiveJobs } from "@/lib/sanity/queries";
import { company } from "@/lib/data/company";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build AI-powered software with a senior, remote-first team.",
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
    <section className="mx-auto max-w-[1280px] px-5 pt-24 pb-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
        <HashGlyph /> careers
      </div>
      <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Work with us</h1>
      <p className="mt-4 text-lg text-[var(--color-neutral)]/70 max-w-2xl">
        We&apos;re a small, senior team shipping AI-native software to mid-sized companies. If that sounds like your kind of engineering, say hi.
      </p>

      <div className="mt-14 grid gap-6">
        {jobs.length === 0 ? (
          <div className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 text-sm text-[var(--color-neutral)]/70">
            No open roles right now — but we&apos;re always interested in meeting sharp people.{" "}
            <a className="text-[var(--color-primary)] hover:text-[var(--color-accent)]" href={`mailto:${company.email}`}>
              Send us your story.
            </a>
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.slug}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <div>
                <h2 className="font-display text-xl font-semibold">{job.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-neutral)]/60">{job.summary}</p>
                <p className="mt-2 text-xs font-mono text-[var(--color-accent)]">
                  {job.location} · {job.type}
                </p>
              </div>
              <Button asChild variant="outline">
                <a href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(job.title)}`}>Apply</a>
              </Button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
