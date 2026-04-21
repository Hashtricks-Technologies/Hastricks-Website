import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/layout/section-heading";

const cardPalette = [
  { bg: "bg-[var(--color-secondary)]", dark: true },
  { bg: "bg-[var(--color-sky)]", dark: false },
  { bg: "bg-[#FCE3D1]", dark: false },
  { bg: "bg-[#F3F4F6]", dark: false },
  { bg: "bg-[var(--color-sky)]", dark: false },
  { bg: "bg-[#FCE3D1]", dark: false },
];

export function ServicesGrid() {
  const total = services.length.toString().padStart(2, "0");

  return (
    <div className="bg-white" id="services">
    <section className="mx-auto max-w-[1280px] px-5 py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="Capabilities"
        className="[&_.eyebrow]:!text-[var(--color-secondary)]/70 [&_h2]:!text-[var(--color-secondary)] [&_p]:!text-[var(--color-secondary)]/70"
        title={
          <>
            Nine ways we show up.
            <br />
            <span className="text-[var(--color-primary)] italic font-normal">One senior team.</span>
          </>
        }
        description={`Pick what you need — we'll bring the rest. Every engagement is led by senior engineers with design and AI in the loop from day one.`}
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 stagger-children">
        {services.map((service, i) => {
          const Icon = service.icon;
          const num = (i + 1).toString().padStart(2, "0");
          const featured = i === 0;
          const palette = cardPalette[i % cardPalette.length];
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={[
                "group relative overflow-hidden rounded-2xl border p-6 md:p-7",
                palette.bg,
                palette.dark ? "border-[var(--color-secondary)]" : "border-transparent",
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
                <span
                  className={[
                    "font-mono text-xs tracking-[0.2em]",
                    palette.dark ? "text-[var(--color-neutral)]/55" : "text-[var(--color-secondary)]/50",
                  ].join(" ")}
                >
                  {num} / {total}
                </span>
                <ArrowUpRight
                  className={[
                    "h-5 w-5 group-hover:text-[var(--color-primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all",
                    palette.dark ? "text-[var(--color-neutral)]/50" : "text-[var(--color-secondary)]/40",
                  ].join(" ")}
                />
              </div>

              <div
                className={[
                  "mt-10 inline-flex items-center justify-center rounded-xl text-[var(--color-primary)]",
                  palette.dark
                    ? "border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/15"
                    : "border border-[var(--color-secondary)]/15 bg-white/70",
                  featured ? "h-16 w-16" : "h-12 w-12",
                ].join(" ")}
              >
                <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
              </div>

              <h3
                className={[
                  "mt-6 font-display font-bold tracking-tight group-hover:text-[var(--color-primary)] transition-colors",
                  palette.dark ? "text-[var(--color-neutral)]" : "text-[var(--color-secondary)]",
                  featured ? "text-3xl md:text-4xl" : "text-xl",
                ].join(" ")}
              >
                {service.title}
              </h3>

              <p
                className={[
                  "mt-3 leading-relaxed",
                  palette.dark ? "text-[var(--color-neutral)]/75" : "text-[var(--color-secondary)]/70",
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
    </div>
  );
}
