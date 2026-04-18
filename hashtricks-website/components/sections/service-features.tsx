import type { Service } from "@/lib/data/services";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Badge } from "@/components/ui/badge";

export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 space-y-20">
      <div>
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> what we do
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Capabilities</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {service.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6"
            >
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      {service.stack.length > 0 && service.stack[0] !== "—" && (
        <div>
          <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
            <HashGlyph /> stack
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
            Tools we reach for
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-sm text-[var(--color-accent)] font-mono flex items-center gap-2">
          <HashGlyph /> built for
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">
          Who this is for
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {service.audiences.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-4 text-sm text-[var(--color-neutral)]/75"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
