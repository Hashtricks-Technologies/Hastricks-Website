import { groq } from "next-sanity";
import { sanityClient } from "./client";

const postsListQuery = groq`
  *[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    cover,
    "author": author->name,
    "categories": categories[]->title
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    publishedAt,
    body,
    cover,
    "author": author->{name, role, avatar},
    "categories": categories[]->title
  }
`;

const caseStudiesListQuery = groq`
  *[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    industry,
    summary,
    metric,
    cover,
    services
  }
`;

const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    title,
    industry,
    summary,
    metric,
    cover,
    services,
    stack,
    challenge,
    solution,
    outcomes,
    testimonial
  }
`;

const jobsActiveQuery = groq`
  *[_type == "jobPosting" && active == true] | order(_createdAt desc) {
    "slug": slug.current,
    title,
    location,
    type,
    summary
  }
`;

export type CmsPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  cover?: unknown;
  author?: string;
  categories?: string[];
};

export type CmsPostDetail = CmsPost & {
  body?: unknown;
};

export type CmsCaseStudy = {
  slug: string;
  title: string;
  industry?: string;
  summary?: string;
  metric?: string;
  cover?: unknown;
  services?: string[];
};

export type CmsCaseStudyDetail = CmsCaseStudy & {
  stack?: string[];
  challenge?: unknown;
  solution?: unknown;
  outcomes?: unknown;
  testimonial?: { quote?: string; author?: string; role?: string };
};

export type CmsJob = {
  slug: string;
  title: string;
  location?: string;
  type?: "Full-time" | "Part-time" | "Contract";
  summary?: string;
};

async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch (err) {
    console.warn("[sanity] fetch failed", err);
    return null;
  }
}

export async function getPosts(): Promise<CmsPost[]> {
  return (await safeFetch<CmsPost[]>(postsListQuery)) ?? [];
}

export async function getPost(slug: string): Promise<CmsPostDetail | null> {
  return (await safeFetch<CmsPostDetail>(postBySlugQuery, { slug })) ?? null;
}

export async function getCaseStudies(): Promise<CmsCaseStudy[]> {
  return (await safeFetch<CmsCaseStudy[]>(caseStudiesListQuery)) ?? [];
}

export async function getCaseStudy(slug: string): Promise<CmsCaseStudyDetail | null> {
  return (await safeFetch<CmsCaseStudyDetail>(caseStudyBySlugQuery, { slug })) ?? null;
}

export async function getActiveJobs(): Promise<CmsJob[]> {
  return (await safeFetch<CmsJob[]>(jobsActiveQuery)) ?? [];
}
