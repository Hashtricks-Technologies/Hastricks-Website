import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Software Development Company in Coimbatore — Hashtricks Technologies",
  description:
    "Hashtricks Technologies is a software development company in Coimbatore building custom software, web apps, and AI automation systems for growing businesses across India.",
  alternates: { canonical: "https://www.hashtrickstechnologies.com" },
  openGraph: {
    title: "Software Development Company in Coimbatore — Hashtricks Technologies",
    description:
      "Custom software, AI automation, and web development from Coimbatore. We help businesses across India reduce manual work and operate smarter.",
    url: "https://www.hashtrickstechnologies.com",
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
