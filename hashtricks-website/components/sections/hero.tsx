"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SunHorizon } from "@/components/brand/sun-horizon";
import { company } from "@/lib/data/company";

const proofPoints = [
  { k: "Founded", v: String(company.foundedYear) },
  { k: "Team", v: `${company.teamSize}+` },
  { k: "Based in", v: company.location },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <SunHorizon position="bottom" intensity="strong" />
      <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-28 md:pt-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div className="max-w-4xl">
            <span className="eyebrow">
              <span className="text-numeral text-[var(--color-primary)]">00</span>
              <span className="eyebrow-rule" />
              <span>Hashtricks Technologies · EST. {company.foundedYear}</span>
            </span>

            <h1 className="mt-8 text-display-xl text-[var(--color-neutral)]">
              Software development &amp;{" "}
              <span className="italic font-normal text-[var(--color-sky)]">AI automation</span>{" "}
              for businesses that want to move <span className="text-[var(--color-primary)]">faster</span>.
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed">
              A software development company in Coimbatore — we design, build, and deploy custom software and AI automation systems end-to-end, so your team spends less time on manual work and more time on what actually grows the business.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="cta">
                <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
                  Book a Call <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>

          <aside className="flex items-stretch divide-x divide-[var(--color-surface-border)] rounded-2xl border border-[var(--color-surface-border)]/70 bg-[var(--color-secondary)]/60 backdrop-blur-md px-6 py-5 self-start lg:self-end lg:max-w-[360px]">
            {proofPoints.map((p) => (
              <div key={p.k} className="px-5 first:pl-0 last:pr-0">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-neutral)]/50">
                  {p.k}
                </p>
                <p className="mt-1 text-numeral text-2xl font-bold text-[var(--color-neutral)]">{p.v}</p>
              </div>
            ))}
          </aside>
        </motion.div>

        <div className="mt-24 flex items-center gap-6">
          <div className="horizon-line flex-1" />
          <a
            href="#services"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/55 hover:text-[var(--color-primary)] transition-colors"
          >
            <span>Scroll to capabilities</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-surface-border)] group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
