import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "metric",
      type: "string",
      description: "e.g. '80% volume automated'",
    }),
    defineField({ name: "cover", type: "image", options: { hotspot: true } }),
    defineField({
      name: "services",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "challenge",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "solution",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "outcomes",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "testimonial",
      type: "object",
      fields: [
        defineField({ name: "quote", type: "text" }),
        defineField({ name: "author", type: "string" }),
        defineField({ name: "role", type: "string" }),
      ],
    }),
    defineField({ name: "publishedAt", type: "datetime" }),
  ],
  orderings: [
    {
      title: "Published (newest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
