import type { Metadata } from "next";
import { team } from "@/lib/data/team";
import { values } from "@/lib/data/values";
import { company } from "@/lib/data/company";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { GradientMesh } from "@/components/brand/gradient-mesh";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we believe, and how we work at Hashtricks Technologies.",
};

export default function AboutPage() {
  const stats = [
    { label: "Founded", value: String(company.foundedYear) },
    { label: "Team", value: `${company.teamSize}+` },
    { label: "Projects", value: "25+" },
    { label: "Countries served", value: "5+" },
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <GradientMesh />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
            <HashGlyph /> about
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            A senior team, building AI-native software from {company.location}.
          </h1>
          <p className="mt-6 text-lg text-[var(--color-neutral)]/70 leading-relaxed">
            Founded in {company.foundedYear}, Hashtricks Technologies is a team of {company.teamSize} engineers,
            designers, and strategists. We partner with mid-sized companies to build custom software and AI systems that
            reduce manual work and unlock new leverage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> what we believe
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Values</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6"
              >
                <Icon className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> team
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">The people</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-4"
            >
              <div className="aspect-square rounded-xl bg-brand-gradient/10 border border-[var(--color-surface-border)] grid place-items-center">
                <span className="font-display text-2xl text-[var(--color-accent)]/70">
                  {member.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-sm">{member.name}</h3>
              <p className="text-xs text-[var(--color-neutral)]/50">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-16">
        <div className="grid gap-6 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6"
            >
              <p className="font-display text-3xl md:text-5xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
