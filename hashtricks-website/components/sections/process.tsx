import { process } from "@/lib/data/process";
import { SectionHeading } from "@/components/layout/section-heading";

export function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24 md:py-32">
      <SectionHeading
        index="04"
        eyebrow="How we work"
        title={
          <>
            A process that{" "}
            <span className="italic font-normal text-[var(--color-sky)]">compounds</span>.
          </>
        }
        description="Four tight phases, no surprises. We map before we build, ship in weeks not quarters, then stay on to help your team own it."
      />

      <div className="mt-20 relative">
        <div
          aria-hidden
          className="absolute left-6 md:left-0 md:top-12 top-6 bottom-6 md:bottom-auto md:right-6 w-px md:w-auto md:h-px bg-[linear-gradient(180deg,transparent,rgba(187,224,239,0.35)_10%,rgba(241,109,52,0.75)_50%,rgba(15,22,64,0.3)_90%,transparent)] md:bg-[linear-gradient(90deg,transparent,rgba(187,224,239,0.35)_10%,rgba(241,109,52,0.75)_50%,rgba(15,22,64,0.3)_90%,transparent)]"
        />

        <ol className="relative grid gap-10 md:grid-cols-4 stagger-children">
          {process.map((step) => (
            <li key={step.number} className="relative pl-16 md:pl-0 md:pt-16">
              <span
                aria-hidden
                className="absolute left-0 top-0 md:left-0 md:top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface)] font-mono text-sm font-semibold text-[var(--color-primary)]"
              >
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-[var(--color-neutral)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-[var(--color-neutral)]/70 leading-relaxed max-w-sm">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
