import { testimonials } from "@/lib/data/testimonials";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
          Partnerships, not transactions.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6"
          >
            <p className="text-[var(--color-neutral)]/85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6">
              <p className="font-semibold text-[var(--color-neutral)]">{t.author}</p>
              <p className="text-sm text-[var(--color-neutral)]/50">
                {t.role}, {t.company}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
