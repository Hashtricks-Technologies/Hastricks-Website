const placeholders = ["Acme Inc", "Lumen Co", "Northstar", "Brickhouse", "Vanta", "Relay"];

export function ClientStrip() {
  return (
    <section className="border-y border-[var(--color-surface-border)]/60 py-10">
      <div className="mx-auto max-w-[1280px] px-5">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-neutral)]/50">
          Trusted by teams at
        </p>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {placeholders.map((label) => (
            <div
              key={label}
              className="text-center font-mono text-sm text-[var(--color-neutral)]/40 hover:text-[var(--color-neutral)]/70 transition-colors"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
