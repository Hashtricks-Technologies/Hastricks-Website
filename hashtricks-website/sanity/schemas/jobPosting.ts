import { defineType, defineField } from "sanity";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract"] },
    }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
  ],
});
