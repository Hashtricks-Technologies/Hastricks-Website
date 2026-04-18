import { values } from "@/lib/data/values";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function WhyUs() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> why hashtricks
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
          Built for the teams that ship.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.title}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <Icon className="h-6 w-6 text-[var(--color-accent)]" />
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{v.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
