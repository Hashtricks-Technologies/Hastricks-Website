import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Hashtricks Technologies — Custom Software & AI Systems",
  description:
    "We build custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter. Based in Coimbatore, India.",
  alternates: { canonical: "https://hashtricks.tech" },
  openGraph: {
    title: "Hashtricks Technologies — Custom Software & AI Systems",
    description:
      "Custom software and AI-powered systems for growing businesses. Based in Coimbatore, India.",
    url: "https://hashtricks.tech",
  },
};
import { ClientStrip } from "@/components/sections/client-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <ServicesGrid />
      <WhyUs />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
