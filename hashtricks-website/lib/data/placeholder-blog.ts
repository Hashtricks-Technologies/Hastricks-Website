export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
};

export const placeholderBlog: BlogPost[] = [
  {
    slug: "evaluating-llms-in-production",
    title: "Evaluating LLMs in Production",
    excerpt:
      "How we build offline evals that catch regressions before your customers do — a playbook for teams shipping LLM features.",
    date: "2026-03-15",
    readingTime: "8 min",
    author: "Hashtricks Team",
    tags: ["AI", "Engineering"],
  },
  {
    slug: "ship-fast-without-tech-debt",
    title: "Ship Fast Without Tech Debt",
    excerpt:
      "A playbook for moving quickly without poisoning your codebase. Decisions to defer, decisions to make early.",
    date: "2026-02-20",
    readingTime: "6 min",
    author: "Hashtricks Team",
    tags: ["Engineering", "Culture"],
  },
  {
    slug: "ai-automation-roi",
    title: "How to ROI-Check an AI Automation Before You Build It",
    excerpt:
      "A simple framework we use with clients to size the return on an automation before committing engineering time.",
    date: "2026-01-18",
    readingTime: "5 min",
    author: "Hashtricks Team",
    tags: ["AI", "Strategy"],
  },
];
