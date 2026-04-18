export type WorkItem = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metric: string;
  services: string[];
};

export const placeholderWork: WorkItem[] = [
  {
    slug: "ai-support-triage",
    title: "AI Triage for Support Ops",
    industry: "SaaS",
    summary:
      "Classified and routed 80% of inbound tickets with an evaluated LLM pipeline, human-in-the-loop for edge cases.",
    metric: "80% volume automated",
    services: ["AI / ML Solutions", "AI Automation"],
  },
  {
    slug: "inventory-forecasting",
    title: "Inventory Forecasting Platform",
    industry: "Retail",
    summary:
      "Custom forecasting models wired into ERP for 42 stock-keeping categories, cutting stockouts and overstock in parallel.",
    metric: "32% fewer stockouts",
    services: ["Custom Software", "AI / ML Solutions"],
  },
  {
    slug: "b2b-sales-copilot",
    title: "B2B Sales Copilot",
    industry: "Manufacturing",
    summary:
      "Agent-driven research and outreach assistant integrated with HubSpot, reclaiming reps' time from manual research.",
    metric: "3x pipeline created",
    services: ["AI / ML Solutions", "Web Development"],
  },
];
