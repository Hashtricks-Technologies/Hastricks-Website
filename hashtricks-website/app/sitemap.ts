import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { placeholderBlog } from "@/lib/data/placeholder-blog";

const base = "https://hashtricks.tech";
const staticPaths = ["", "/services", "/about", "/work", "/blog", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...placeholderWork.map((w) => ({ url: `${base}/work/${w.slug}`, lastModified: new Date() })),
    ...placeholderBlog.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ];
}
