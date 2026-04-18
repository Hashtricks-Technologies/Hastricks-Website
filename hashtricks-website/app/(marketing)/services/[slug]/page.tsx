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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
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
