import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/layout/section-heading";

export function ServicesGrid() {
  const total = services.length.toString().padStart(2, "0");

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-24 md:py-32" id="services">
      <SectionHeading
        index="01"
        eyebrow="Capabilities"
        title={
          <>
            Nine ways we show up.
            <br />
            <span className="text-[var(--color-sky)] italic font-normal">One senior team.</span>
          </>
        }
        description={`Pick what you need — we'll bring the rest. Every engagement is led by senior engineers with design and AI in the loop from day one.`}
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 stagger-children">
        {services.map((service, i) => {
          const Icon = service.icon;
          const num = (i + 1).toString().padStart(2, "0");
          const featured = i === 0;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={[
                "group relative overflow-hidden rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 md:p-7",
                "transition-all hover:border-[var(--color-primary)]/60 hover:-translate-y-1",
                featured ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2",
                i === 1 ? "lg:col-span-3" : "",
                i === 2 ? "lg:col-span-3" : "",
              ].join(" ")}
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(241,109,52,0.22),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(187,224,239,0.12),transparent_55%)]"
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-neutral)]/45">
                  {num} / {total}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[var(--color-neutral)]/35 group-hover:text-[var(--color-primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div
                className={[
                  "mt-10 inline-flex items-center justify-center rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-secondary)]/60 text-[var(--color-primary)]",
                  featured ? "h-16 w-16" : "h-12 w-12",
                ].join(" ")}
              >
                <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
              </div>

              <h3
                className={[
                  "mt-6 font-display font-bold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors",
                  featured ? "text-3xl md:text-4xl" : "text-xl",
                ].join(" ")}
              >
                {service.title}
              </h3>

              <p
                className={[
                  "mt-3 text-[var(--color-neutral)]/65 leading-relaxed",
                  featured ? "text-base md:text-lg max-w-xl" : "text-sm",
                ].join(" ")}
              >
                {featured ? service.long : service.short}
              </p>

              {featured && (
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  Read more
                  <span className="h-px w-8 bg-[var(--color-primary)]/60 group-hover:w-14 transition-all" />
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
