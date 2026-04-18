import { process } from "@/lib/data/process";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Process() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> how we work
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
          A process that compounds.
        </h2>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {process.map((step) => (
          <li
            key={step.number}
            className="relative rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6"
          >
            <span className="font-mono text-xs text-[var(--color-accent)]">{step.number}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
