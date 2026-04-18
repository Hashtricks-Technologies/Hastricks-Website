import { Marquee } from "@/components/brand/marquee";

const clients = [
  "Eateszy",
  "The Urban Elephant",
  "DentiQ",
];

export function ClientStrip() {
  return (
    <section className="relative border-y border-[var(--color-surface-border)]/60 bg-[var(--color-secondary)]/30 py-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 flex items-center gap-8 flex-wrap md:flex-nowrap">
        <p className="shrink-0 eyebrow">
          <span className="eyebrow-rule" />
          <span>Trusted by teams at</span>
        </p>
        <Marquee className="flex-1" speed="slow">
          {clients.map((label) => (
            <span
              key={label}
              className="font-display text-xl md:text-2xl font-bold tracking-tight text-[var(--color-neutral)]/45 hover:text-[var(--color-sky)] transition-colors whitespace-nowrap flex items-center gap-16"
            >
              {label}
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/70" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
