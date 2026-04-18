import {
  Code2,
  Globe,
  Smartphone,
  Sparkles,
  Workflow,
  Cloud,
  Package,
  PenTool,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  features: { title: string; body: string }[];
  stack: string[];
  audiences: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    short: "Purpose-built software for workflows off-the-shelf tools can't handle.",
    long: "From internal tools to client-facing platforms, we design and build bespoke software that models your business exactly — no forced workflows, no feature bloat.",
    icon: Code2,
    features: [
      { title: "Discovery-led", body: "We map your process before we write code." },
      { title: "Full stack", body: "APIs, databases, dashboards, integrations — end to end." },
      { title: "Owned by you", body: "You keep the code, the data, and the roadmap." },
      { title: "Built to evolve", body: "Clean architecture so it scales with the business." },
    ],
    stack: ["TypeScript", "Python", "Postgres", "Next.js", "FastAPI", "AWS", "GCP"],
    audiences: [
      "Ops teams with complex workflows",
      "Companies outgrowing spreadsheets",
      "Firms replacing legacy tools",
    ],
    faqs: [
      { q: "How long does a typical build take?", a: "Most engagements ship a first usable version in 6–10 weeks." },
      { q: "Can you work alongside our in-house team?", a: "Yes — we embed with your engineers or hand off a clean codebase." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    short: "Fast, production-grade web apps built on modern frameworks.",
    long: "Marketing sites, SaaS dashboards, customer portals, and full-stack web apps — built with performance, accessibility, and SEO as non-negotiables.",
    icon: Globe,
    features: [
      { title: "Modern stack", body: "Next.js, React, Node, Postgres." },
      { title: "Performance first", body: "Lighthouse 95+, Core Web Vitals passing." },
      { title: "Accessibility", body: "WCAG 2.1 AA compliance by default." },
      { title: "SEO-ready", body: "Structured data, sitemaps, OG tags out of the box." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "Postgres", "Vercel"],
    audiences: ["SaaS companies", "D2C brands", "B2B platforms"],
    faqs: [
      { q: "Do you design too?", a: "Yes — our design team can own UI/UX or plug into yours." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    short: "iOS and Android apps, native or cross-platform.",
    long: "Ship to both app stores from a single codebase with React Native, or go native where performance demands it. We handle builds, CI, and store submissions.",
    icon: Smartphone,
    features: [
      { title: "React Native & native", body: "Right tool for each build." },
      { title: "Offline-first", body: "Sync, queue, and cache where it matters." },
      { title: "App Store shipping", body: "Builds, signing, submissions — we handle it all." },
      { title: "Analytics ready", body: "Events wired from day one." },
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "Fastlane"],
    audiences: ["Consumer apps", "Enterprise field tools", "B2B companions to web products"],
    faqs: [
      { q: "Native vs React Native?", a: "We recommend based on performance needs and platform features — not dogma." },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI / ML Solutions",
    short: "LLM apps, agents, and ML pipelines that ship to production.",
    long: "We build AI products that do useful work — retrieval systems, agents, fine-tuned models, and evaluation pipelines — with a sharp eye on cost, latency, and accuracy.",
    icon: Sparkles,
    features: [
      { title: "RAG & retrieval", body: "Grounded, accurate, cost-controlled." },
      { title: "Agents", body: "Tool-using, evaluated, and safe." },
      { title: "Fine-tuning & evals", body: "Models tuned to your data, measured rigorously." },
      { title: "LLMOps", body: "Monitoring, cost control, drift detection." },
    ],
    stack: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "pgvector", "Pinecone", "Python"],
    audiences: [
      "Companies with proprietary data",
      "Teams replacing manual review",
      "Support & knowledge orgs",
    ],
    faqs: [
      { q: "How do you keep LLM costs predictable?", a: "Caching, model routing, token budgeting, and offline eval before every prompt change." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI-Powered Process Automation",
    short: "Automate the manual work slowing your team down.",
    long: "We identify high-leverage processes — invoice review, lead triage, content workflows, data extraction — and build automations that compound in value over time.",
    icon: Workflow,
    features: [
      { title: "Process discovery", body: "We find the ROI before we build." },
      { title: "Human-in-the-loop", body: "Automation with review gates where trust matters." },
      { title: "Integrations", body: "Slack, email, CRMs, ERPs, your internal APIs." },
      { title: "Measurable outcomes", body: "Time saved, errors reduced — we report it." },
    ],
    stack: ["n8n", "Temporal", "OpenAI", "Zapier", "Python", "Postgres"],
    audiences: ["Operations teams", "Finance & back-office", "Customer support orgs"],
    faqs: [
      { q: "What kind of ROI should we expect?", a: "Typical engagements save 20–40 hrs/week within the first quarter." },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Reliable infra, fast deploys, clear costs.",
    long: "We set up cloud environments, CI/CD, observability, and cost guardrails so your team ships confidently and sleeps through the night.",
    icon: Cloud,
    features: [
      { title: "IaC", body: "Terraform and Pulumi — everything versioned." },
      { title: "CI/CD", body: "GitHub Actions, tests on every PR, safe rollouts." },
      { title: "Observability", body: "Logs, metrics, traces — you see what's happening." },
      { title: "Cost control", body: "Budgets, alerts, right-sizing." },
    ],
    stack: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
    audiences: [
      "Teams without dedicated DevOps",
      "Companies scaling past single-server",
      "Post-MVP startups",
    ],
    faqs: [
      { q: "Do you support existing infra?", a: "Yes — we can audit, improve, or fully take over operations." },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    short: "From idea to paying customers.",
    long: "Multi-tenant SaaS with auth, billing, admin, and everything in between. We ship MVPs in 12 weeks and keep iterating with you post-launch.",
    icon: Package,
    features: [
      { title: "Multi-tenant foundations", body: "RBAC, orgs, workspaces built in." },
      { title: "Billing", body: "Stripe, usage-based or seat-based." },
      { title: "Admin tooling", body: "Internal tools so support can self-serve." },
      { title: "Analytics", body: "Product telemetry from day one." },
    ],
    stack: ["Next.js", "Postgres", "Stripe", "Clerk", "Prisma", "Vercel"],
    audiences: [
      "Founders with a validated idea",
      "Companies productizing internal tools",
      "Post-pilot B2B",
    ],
    faqs: [
      { q: "Do you take equity?", a: "No — we're a services firm. Cash engagements only." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces users want to come back to.",
    long: "Research, wireframes, high-fidelity design systems, and prototypes. We work hand-in-hand with our engineers so design survives the build.",
    icon: PenTool,
    features: [
      { title: "User research", body: "Interviews, jobs-to-be-done, usability testing." },
      { title: "Design systems", body: "Figma libraries your team can extend." },
      { title: "Prototypes", body: "Clickable, testable, before a line of code." },
      { title: "Dev handoff", body: "Specs and components engineers love." },
    ],
    stack: ["Figma", "Storybook", "FigJam", "Lottie"],
    audiences: [
      "Early-stage products",
      "Teams redesigning legacy UIs",
      "Brands launching digital-first",
    ],
    faqs: [
      { q: "Can you work with our existing brand?", a: "Absolutely — we extend existing systems or build from scratch." },
    ],
  },
  {
    slug: "consulting",
    title: "Consulting / Tech Advisory",
    short: "A senior eye on your roadmap, stack, and team.",
    long: "Fractional CTO engagements, technical due diligence, architecture reviews, and hiring support. Senior expertise without a full-time hire.",
    icon: Compass,
    features: [
      { title: "Fractional CTO", body: "Weekly engagement, in your Slack." },
      { title: "Architecture reviews", body: "Second-opinion or full audit." },
      { title: "Due diligence", body: "For investors and acquirers." },
      { title: "Hiring support", body: "JDs, interview loops, technical screens." },
    ],
    stack: ["—"],
    audiences: ["Seed-to-Series-B startups", "Investors", "Non-technical founders"],
    faqs: [
      { q: "Minimum engagement?", a: "4 weeks for advisory, 1 week for a discrete review." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
