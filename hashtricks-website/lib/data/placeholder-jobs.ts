export type JobPosting = {
  slug: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
};

export const placeholderJobs: JobPosting[] = [
  {
    slug: "senior-fullstack",
    title: "Senior Full-stack Engineer",
    location: "Remote (India)",
    type: "Full-time",
    summary: "Own end-to-end features in TypeScript, Next.js, and Postgres.",
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    location: "Remote (India)",
    type: "Full-time",
    summary: "Build LLM-powered features, agents, and evaluation pipelines.",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    location: "Remote (India)",
    type: "Full-time",
    summary: "Design interfaces for the custom software and AI products we ship.",
  },
];
