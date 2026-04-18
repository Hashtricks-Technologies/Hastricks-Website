import { Hero } from "@/components/sections/hero";
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
