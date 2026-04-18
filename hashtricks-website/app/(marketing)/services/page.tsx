import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI, cloud, and more — nine capabilities from a senior team that ships.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-4">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Services</h1>
        <p className="mt-4 text-lg text-[var(--color-neutral)]/70 max-w-2xl">
          From a fractional CTO hour to a full SaaS product build — senior engineers, design-led, AI-native.
        </p>
      </div>
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
