import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { placeholderBlog } from "@/lib/data/placeholder-blog";
import { getPost, getPosts } from "@/lib/sanity/queries";

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
  const post = cms ?? fallback;
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getPost(slug);
  const fallback = placeholderBlog.find((p) => p.slug === slug);
  const post = cms ?? fallback;
  if (!post) notFound();

  const tags = cms?.categories ?? fallback?.tags ?? [];
  const date = cms?.publishedAt ?? fallback?.date ?? "";
  const cmsAuthor = cms?.author as { name?: string } | string | undefined;
  const authorName =
    typeof cmsAuthor === "string"
      ? cmsAuthor
      : cmsAuthor?.name ?? fallback?.author ?? "Hashtricks Team";

  return (
    <article className="mx-auto max-w-3xl px-5 pt-24 pb-24">
      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)]">
        {tags.map((t) => (
          <span key={String(t)}>#{String(t)}</span>
        ))}
      </div>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-[var(--color-neutral)]/50">
        {date
          ? new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
        {fallback?.readingTime ? ` · ${fallback.readingTime}` : ""} · {authorName}
      </p>
      <div className="mt-10 prose-invert space-y-6">
        {cms?.body ? (
          <PortableText value={cms.body as never} />
        ) : (
          <>
            <p>{post.excerpt}</p>
            <p>
              Placeholder post body. Add real content in Sanity Studio (or update{" "}
              <code className="font-mono">lib/data/placeholder-blog.ts</code>).
            </p>
          </>
        )}
      </div>
    </article>
  );
}
