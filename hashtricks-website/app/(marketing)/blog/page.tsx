import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderBlog } from "@/lib/data/placeholder-blog";
import { HashGlyph } from "@/components/brand/hash-glyph";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building software and AI systems.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-24 pb-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-surface-border)]/80 bg-[var(--color-surface-muted)]/40 backdrop-blur px-3 py-1 text-xs text-[var(--color-neutral)]/75">
        <HashGlyph /> blog
      </div>
      <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Notes from the team</h1>
      <p className="mt-4 text-lg text-[var(--color-neutral)]/70 max-w-2xl">
        Sharp takes on AI, product, and software engineering.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {placeholderBlog.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-muted)]/40 p-6 transition hover:shadow-glow-accent hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)]">
              {post.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-neutral)]/60">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-[var(--color-neutral)]/50">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
