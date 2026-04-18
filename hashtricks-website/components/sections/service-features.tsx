import type { Service } from "@/lib/data/services";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";

export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:py-24 space-y-24 md:space-y-32">
      <div>
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title={
            <>
              Capabilities{" "}
              <span className="italic font-normal text-[var(--color-sky)]">in scope</span>.
            </>
          }
        />
        <div className="mt-16 grid gap-0 md:grid-cols-2 stagger-children">
          {service.features.map((f, i) => {
            const num = (i + 1).toString().padStart(2, "0");
            return (
              <article
                key={f.title}
                className="group relative flex gap-6 border-t border-[var(--color-surface-border)]/70 py-10 pr-6 first:md:border-t-0 md:[&:nth-child(2)]:border-t-0 md:even:pl-10 md:odd:border-r md:odd:border-r-[var(--color-surface-border)]/70"
              >
                <span className="text-numeral text-[2.5rem] font-bold leading-none text-[var(--color-primary)]/35 group-hover:text-[var(--color-primary)] transition-colors">
                  {num}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-[var(--color-neutral)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base text-[var(--color-neutral)]/70 leading-relaxed max-w-lg">
                    {f.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {service.stack.length > 0 && service.stack[0] !== "—" && (
        <div>
          <SectionHeading
            index="02"
            eyebrow="Stack"
            title={
              <>
                Tools we{" "}
                <span className="italic font-normal text-[var(--color-sky)]">reach for</span>.
              </>
            }
          />
          <div className="mt-12 flex flex-wrap gap-2 reveal">
            {service.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <SectionHeading
          index="03"
          eyebrow="Built for"
          title={
            <>
              Who this{" "}
              <span className="italic font-normal text-[var(--color-sky)]">is for</span>.
            </>
          }
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3 stagger-children">
          {service.audiences.map((a, i) => (
            <li
              key={a}
              className="rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 flex gap-4"
            >
              <span className="text-numeral text-sm font-bold text-[var(--color-primary)]">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <p className="text-base text-[var(--color-neutral)]/85 leading-relaxed">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
