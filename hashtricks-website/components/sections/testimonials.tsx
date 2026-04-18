import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/layout/section-heading";

export function Testimonials() {
  const [lead, ...rest] = testimonials;
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24 md:py-32">
      <SectionHeading
        index="05"
        eyebrow="In their words"
        title={
          <>
            Partnerships,{" "}
            <span className="italic font-normal text-[var(--color-sky)]">not transactions</span>.
          </>
        }
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr] stagger-children">
        {lead && (
          <figure className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-8 md:p-12">
            <span
              aria-hidden
              className="absolute -top-6 -left-2 font-display text-[10rem] md:text-[14rem] leading-none text-[var(--color-primary)]/20 select-none"
            >
              &ldquo;
            </span>
            <blockquote className="relative font-display text-2xl md:text-[2rem] leading-[1.2] font-medium tracking-tight text-[var(--color-neutral)]">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-secondary)] font-display font-bold text-[var(--color-primary)]">
                {lead.author
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div>
                <p className="font-semibold text-[var(--color-neutral)]">{lead.author}</p>
                <p className="text-sm text-[var(--color-neutral)]/55">
                  {lead.role} · {lead.company}
                </p>
              </div>
            </figcaption>
          </figure>
        )}

        <div className="grid gap-6 content-start">
          {rest.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/30 p-6"
            >
              <blockquote className="text-[var(--color-neutral)]/85 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-[var(--color-surface-border)]/70">
                <p className="font-semibold text-[var(--color-neutral)] text-sm">{t.author}</p>
                <p className="text-xs text-[var(--color-neutral)]/50">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
