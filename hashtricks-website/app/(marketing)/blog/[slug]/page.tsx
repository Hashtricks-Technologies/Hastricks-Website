import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { placeholderBlog, type BlogSection } from "@/lib/data/placeholder-blog";
import { getPosts, getPost } from "@/lib/sanity/queries";
import { SunHorizon } from "@/components/brand/sun-horizon";

export const revalidate = 60;

export async function generateStaticParams() {
  const cms = await getPosts();
  if (cms.length) return cms.map((p) => ({ slug: p.slug }));
  return placeholderBlog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getPost(slug);
  const fallback = placeholderBlog.find((p) => p.slug === slug);
  const item = cms ?? fallback;
  if (!item) return {};
  const description = cms?.excerpt ?? fallback?.excerpt ?? "";
  return {
    title: item.title,
    description,
    alternates: { canonical: `https://www.hashtrickstechnologies.com/blog/${slug}` },
    openGraph: { title: item.title, description, url: `https://www.hashtrickstechnologies.com/blog/${slug}` },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getPost(slug);
  const fallback = placeholderBlog.find((p) => p.slug === slug);
  if (!cms && !fallback) notFound();

  const title = cms?.title ?? fallback?.title ?? "";
  const excerpt = cms?.excerpt ?? fallback?.excerpt ?? "";
  const date = cms?.publishedAt ?? fallback?.date ?? "";
  const readingTime = fallback?.readingTime;
  const tags: string[] = cms?.categories ?? fallback?.tags ?? [];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-3xl px-5 pt-20 pb-12 md:pt-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/55 hover:text-[var(--color-primary)] transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> All posts
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3 reveal">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sky)] border border-[var(--color-sky)]/30 rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
            {date && (
              <span className="font-mono text-xs text-[var(--color-neutral)]/45">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {readingTime ? ` · ${readingTime}` : ""}
              </span>
            )}
          </div>

          <h1 className="mt-6 text-display-xl text-[var(--color-neutral)] reveal">{title}</h1>

          {excerpt && (
            <p className="mt-6 text-lg md:text-xl text-[var(--color-neutral)]/75 leading-relaxed reveal">
              {excerpt}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div className="horizon-line w-full mb-10" />
        <div className="prose-invert">
          {cms?.body ? (
            <PortableText value={cms.body as never} />
          ) : fallback?.content ? (
            <PlaceholderContent sections={fallback.content} />
          ) : (
            <>
              <h2>Introduction</h2>
              <p>
                This is a placeholder article — add real content in Sanity Studio at{" "}
                <code>/studio</code>.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}

function PlaceholderContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((s, i) => {
        if (s.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)]"
            >
              {s.text}
            </h2>
          );
        }
        if (s.type === "h3") {
          return (
            <h3
              key={i}
              className="mt-6 font-display text-lg md:text-xl font-semibold text-[var(--color-neutral)]"
            >
              {s.text}
            </h3>
          );
        }
        if (s.type === "p") {
          return (
            <p key={i} className="text-base md:text-lg text-[var(--color-neutral)]/80 leading-relaxed">
              {s.text}
            </p>
          );
        }
        if (s.type === "ul") {
          return (
            <ul key={i} className="space-y-3 mt-4">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-base text-[var(--color-neutral)]/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (s.type === "callout") {
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-secondary)]/60 p-6 md:p-8 mt-8"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_0%_50%,rgba(241,109,52,0.12),transparent_60%)]"
              />
              <p className="text-base text-[var(--color-neutral)]/85 leading-relaxed">{s.text}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
