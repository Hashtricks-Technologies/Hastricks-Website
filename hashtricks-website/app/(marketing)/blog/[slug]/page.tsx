import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { placeholderBlog } from "@/lib/data/placeholder-blog";

export function generateStaticParams() {
  return placeholderBlog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderBlog.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = placeholderBlog.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-3xl px-5 pt-24 pb-24">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)]">
        {post.tags.map((t) => (
          <span key={t}>#{t}</span>
        ))}
      </div>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-[var(--color-neutral)]/50">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {post.readingTime} · {post.author}
      </p>
      <div className="mt-10 prose-invert space-y-6">
        <p>{post.excerpt}</p>
        <p>
          Placeholder post body. Real content will land here — rich writing, code blocks, and embedded media — once the
          Sanity CMS is provisioned.
        </p>
      </div>
    </article>
  );
}
