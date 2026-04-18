import type { Metadata } from "next";
import { team } from "@/lib/data/team";
import { values } from "@/lib/data/values";
import { company } from "@/lib/data/company";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { SectionHeading } from "@/components/layout/section-heading";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we believe, and how we work at Hashtricks Technologies.",
  alternates: { canonical: "https://hashtricks.tech/about" },
  openGraph: {
    title: "About — Hashtricks Technologies",
    description: "Who we are, what we believe, and how we work at Hashtricks Technologies.",
    url: "https://hashtricks.tech/about",
  },
};

export default function AboutPage() {
  const stats = [
    { label: "Founded", value: String(company.foundedYear) },
    { label: "Projects delivered", value: "25+" },
    { label: "Clients served", value: "10+" },
    { label: "Based in", value: "India" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-20 md:pt-32 md:pb-28">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>About Hashtricks</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-5xl reveal">
            Built from{" "}
            <span className="italic font-normal text-[var(--color-sky)]">hackathons</span>.
            Grown into{" "}
            <span className="text-[var(--color-primary)]">real systems</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
            Hashtricks Technologies started with curiosity, experimentation, and a shared belief in building impactful technology — from a college lab in Coimbatore to production systems for businesses across industries.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="border-y border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5">
          <SectionHeading
            index="02"
            eyebrow="Our story"
            title={
              <>
                From hackathon winners{" "}
                <span className="italic font-normal text-[var(--color-sky)]">to system builders</span>.
              </>
            }
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            {/* Origin */}
            <div className="space-y-8 stagger-children">
              <article className="relative pl-6 border-l-2 border-[var(--color-primary)]/50">
                <span className="eyebrow mb-3">
                  <span className="text-numeral text-[var(--color-primary)]">01</span>
                  <span className="eyebrow-rule" />
                  <span>The beginning</span>
                </span>
                <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  Sri Manikandan R and Sai Sidharthan H were actively participating in hackathons during their college days. What began as a learning experience quickly turned into something more — consistent wins, strong technical confidence, and a growing interest in solving real-world problems through technology.
                </p>
              </article>

              <article className="relative pl-6 border-l-2 border-[var(--color-primary)]/30">
                <span className="eyebrow mb-3">
                  <span className="text-numeral text-[var(--color-primary)]">02</span>
                  <span className="eyebrow-rule" />
                  <span>The turning point</span>
                </span>
                <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  One defining moment came during a hackathon in Salem, where they pitched a fully generative AI-based product at a startup-focused event. The idea resonated with the audience — potential backers approached them directly. For the first time, they saw genuine market interest.
                </p>
              </article>

              <article className="relative pl-6 border-l-2 border-[var(--color-primary)]/15">
                <span className="eyebrow mb-3">
                  <span className="text-numeral text-[var(--color-primary)]">03</span>
                  <span className="eyebrow-rule" />
                  <span>The realisation</span>
                </span>
                <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  Instead of treating it as just another project, they began investing their own time and resources into building seriously. And along the way, a bigger question emerged:
                </p>
                <blockquote className="mt-6 pl-5 border-l border-[var(--color-sky)]/50 font-display text-xl md:text-2xl font-medium italic text-[var(--color-sky)] leading-snug">
                  "If we can build powerful solutions like this, why not help other businesses do the same?"
                </blockquote>
              </article>
            </div>

            {/* Today */}
            <div className="space-y-6 lg:pt-2">
              <div className="rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-8 md:p-10 reveal">
                <span className="eyebrow">
                  <span className="eyebrow-rule" />
                  <span>Where we are today</span>
                </span>
                <p className="mt-6 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  From hackathons to real-world business systems, the journey has been driven by continuous learning, hands-on building, and a strong focus on outcomes.
                </p>
                <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
                  Today, Hashtricks Technologies works with clients across industries to design and build custom software systems, AI-powered solutions, and business automation tools — each driven by a single goal: to simplify operations, reduce inefficiencies, and enable scalable growth.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--color-surface-border)]/70 pt-8">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-numeral text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{s.value}</p>
                      <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="What we believe"
          title={
            <>
              Four values.{" "}
              <span className="italic font-normal text-[var(--color-sky)]">No slogans</span>.
            </>
          }
        />
        <div className="mt-16 grid gap-0 md:grid-cols-2 stagger-children">
          {values.map((v, i) => {
            const Icon = v.icon;
            const num = (i + 1).toString().padStart(2, "0");
            return (
              <article
                key={v.title}
                className="group relative flex gap-8 border-t border-[var(--color-surface-border)]/70 py-10 md:py-12 pr-6 first:md:border-t-0 md:[&:nth-child(2)]:border-t-0 md:even:pl-10 md:odd:border-r md:odd:border-r-[var(--color-surface-border)]/70"
              >
                <span className="text-numeral text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none text-[var(--color-primary)]/30 group-hover:text-[var(--color-primary)] transition-colors">
                  {num}
                </span>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--color-neutral)]">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-[var(--color-neutral)]/70 leading-relaxed max-w-lg">
                    {v.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5">
          <SectionHeading
            index="04"
            eyebrow="The founders"
            title={
              <>
                Two builders.{" "}
                <span className="italic font-normal text-[var(--color-sky)]">One mission</span>.
              </>
            }
            description="Started in a college lab, shipped to production. Every decision is made by people who write code."
          />
          <div className="mt-14 flex flex-wrap gap-6 stagger-children">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative w-full max-w-xs rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 transition hover:border-[var(--color-primary)]/50"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-[var(--color-surface-border)] bg-[radial-gradient(circle_at_30%_20%,rgba(241,109,52,0.25),transparent_60%),linear-gradient(180deg,rgba(22,30,84,0.6),rgba(15,22,64,0.9))] grid place-items-center">
                  <span className="font-display text-2xl font-bold text-[var(--color-sky)]/80 group-hover:text-[var(--color-primary)] transition-colors">
                    {member.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-[var(--color-primary)] group-hover:scale-x-100 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{member.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-neutral)]/50">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
