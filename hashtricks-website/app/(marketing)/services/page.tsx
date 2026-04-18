import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { SunHorizon } from "@/components/brand/sun-horizon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI, cloud, and more — nine capabilities from a senior team that ships.",
  alternates: { canonical: "https://hashtricks.tech/services" },
  openGraph: {
    title: "Services — Hashtricks Technologies",
    description: "Custom software, AI, cloud, and more — nine capabilities from a senior team that ships.",
    url: "https://hashtricks.tech/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-6 md:pt-32">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>Capabilities</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-5xl reveal">
            Services{" "}
            <span className="italic font-normal text-[var(--color-sky)]">from a team that ships</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
            From a fractional CTO hour to a full SaaS product build — senior engineers, design-led, AI-native.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
