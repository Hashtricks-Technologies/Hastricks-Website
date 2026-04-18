import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/data/services";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const locationMeta: Record<string, { title: string; description: string }> = {
  "ai-automation": {
    title: "AI Automation Services in Coimbatore",
    description:
      "Leading AI automation company in Coimbatore. We automate manual workflows, invoice processing, lead triage, and document extraction — helping businesses across India save time and scale operations.",
  },
  "custom-software": {
    title: "Custom Software Development Company in Coimbatore",
    description:
      "Top custom software development company in Coimbatore. We build purpose-built software — internal tools, platforms, and web apps — for SMEs and growing businesses across India.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const meta = locationMeta[slug];
  const title = meta?.title ?? service.title;
  const description = meta?.description ?? service.short;
  return {
    title,
    description,
    alternates: { canonical: `https://www.hashtrickstechnologies.com/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://www.hashtrickstechnologies.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <Faq items={service.faqs} />
      <CtaBand />
    </>
  );
}
