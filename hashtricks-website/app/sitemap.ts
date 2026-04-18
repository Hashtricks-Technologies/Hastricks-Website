import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { placeholderBlog } from "@/lib/data/placeholder-blog";
import { getPosts, getCaseStudies } from "@/lib/sanity/queries";

const base = "https://hashtricks.tech";
const staticPaths = ["", "/services", "/about", "/work", "/blog", "/careers", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cmsPosts, cmsCases] = await Promise.all([getPosts(), getCaseStudies()]);
  const posts = cmsPosts.length
    ? cmsPosts.map((p) => ({ slug: p.slug, date: p.publishedAt }))
    : placeholderBlog.map((p) => ({ slug: p.slug, date: p.date }));
  const cases = cmsCases.length
    ? cmsCases.map((w) => ({ slug: w.slug }))
    : placeholderWork.map((w) => ({ slug: w.slug }));

  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...cases.map((c) => ({ url: `${base}/work/${c.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
    })),
  ];
}
