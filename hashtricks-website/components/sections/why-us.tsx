import { values } from "@/lib/data/values";
import { SectionHeading } from "@/components/layout/section-heading";

export function WhyUs() {
  return (
    <section className="relative border-y border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5">
        <SectionHeading
          index="02"
          eyebrow="Why Hashtricks"
          title={
            <>
              Built for the teams that{" "}
              <span className="italic font-normal text-[var(--color-sky)]">ship</span>.
            </>
          }
          description="We're small on purpose. No layers, no junior-only squads — just senior people who know how to take a hard problem to production."
        />

        <div className="mt-20 grid gap-0 md:grid-cols-2 stagger-children">
          {values.map((v, i) => {
            const Icon = v.icon;
            const num = (i + 1).toString().padStart(2, "0");
            return (
              <article
                key={v.title}
                className="group relative flex gap-8 border-t border-[var(--color-surface-border)]/70 py-10 md:py-12 pr-6 first:md:border-t-0 md:[&:nth-child(2)]:border-t-0 md:even:pl-10 md:odd:border-r md:odd:border-r-[var(--color-surface-border)]/70"
              >
                <span className="text-numeral text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-[var(--color-primary)]/30 group-hover:text-[var(--color-primary)] transition-colors">
                  {num}
                </span>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-[var(--color-primary)]" />
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)]">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/70 leading-relaxed max-w-lg">
                    {v.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
