import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderBlog } from "@/lib/data/placeholder-blog";
import { getPosts } from "@/lib/sanity/queries";
import { SunHorizon } from "@/components/brand/sun-horizon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building software, AI systems, and growing a tech company from Coimbatore.",
  alternates: { canonical: "https://hashtricks.tech/blog" },
  openGraph: {
    title: "Blog — Hashtricks Technologies",
    description: "Notes on building software, AI systems, and growing a tech company from Coimbatore.",
    url: "https://hashtricks.tech/blog",
  },
};

export const revalidate = 60;

type PostCard = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  tags: string[];
};

export default async function BlogPage() {
  const cmsPosts = await getPosts();
  const posts: PostCard[] = cmsPosts.length
    ? cmsPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: p.publishedAt,
        tags: p.categories ?? [],
      }))
    : placeholderBlog.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: p.date,
        readingTime: p.readingTime,
        tags: p.tags,
      }));

  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <SunHorizon position="top" intensity="soft" />
        <div className="mx-auto max-w-[1280px] px-5 pt-24 pb-16 md:pt-32 md:pb-20">
          <span className="eyebrow reveal">
            <span className="text-numeral text-[var(--color-primary)]">01</span>
            <span className="eyebrow-rule" />
            <span>Notes from the team · {posts.length.toString().padStart(2, "0")}</span>
          </span>
          <h1 className="mt-8 text-display-xl text-[var(--color-neutral)] max-w-5xl reveal">
            Sharp takes on AI,{" "}
            <span className="italic font-normal text-[var(--color-sky)]">product</span>, and
            engineering.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 pb-24">
        <div className="horizon-line w-full reveal" />

        {posts.length === 0 && (
          <div className="mt-16 rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-10 md:p-16 max-w-2xl reveal">
            <p className="font-display text-2xl font-bold text-[var(--color-neutral)]">
              Coming soon.
            </p>
            <p className="mt-4 text-base text-[var(--color-neutral)]/70 leading-relaxed">
              We&apos;re working on our first posts — sharp takes on AI, product, and software engineering. Check back soon.
            </p>
          </div>
        )}

        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-2 grid gap-6 py-10 md:py-14 md:grid-cols-12 items-start border-b border-[var(--color-surface-border)]/70"
          >
            <div className="md:col-span-2">
              <span className="text-numeral font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/45">
                01
              </span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {featured.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-sky)] border border-[var(--color-sky)]/30 rounded-full px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-[var(--color-neutral)]/70 leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end md:pt-2">
              <div className="flex flex-col items-end gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-surface-border)] text-[var(--color-neutral)]/60 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] group-hover:rotate-[-45deg] transition-all duration-500">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <p className="font-mono text-xs text-[var(--color-neutral)]/45">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                  {featured.readingTime ? ` · ${featured.readingTime}` : ""}
                </p>
              </div>
            </div>
          </Link>
        )}

        <ul className="divide-y divide-[var(--color-surface-border)]/70 stagger-children">
          {rest.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-6 py-8 md:py-10 md:grid-cols-12 items-center"
              >
                <span className="text-numeral font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-neutral)]/45 md:col-span-1">
                  {(i + 2).toString().padStart(2, "0")}
                </span>
                <div className="md:col-span-8">
                  <h2 className="font-display text-xl md:text-3xl font-bold tracking-tight text-[var(--color-neutral)] group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--color-neutral)]/65 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-neutral)]/55">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-xs text-[var(--color-neutral)]/45">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                    {post.readingTime ? ` · ${post.readingTime}` : ""}
                  </p>
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-surface-border)] text-[var(--color-neutral)]/60 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] group-hover:rotate-[-45deg] transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
