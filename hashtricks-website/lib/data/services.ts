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
    short: "Purpose-built software that fits your business exactly — no compromises, no feature bloat.",
    long: "Off-the-shelf tools force your team to work around them. As a custom software development company in Coimbatore, we build software that works the way your business actually works — from internal operational tools to client-facing platforms, designed end-to-end and owned entirely by you.",
    icon: Code2,
    features: [
      {
        title: "Discovery before code",
        body: "We map your workflows, users, and pain points in detail before writing a single line — so we build the right thing, not just a thing.",
      },
      {
        title: "Full-stack delivery",
        body: "APIs, databases, dashboards, admin panels, third-party integrations — we handle the entire stack so you deal with one team, not five.",
      },
      {
        title: "You own everything",
        body: "Source code, data, hosting infrastructure — it's all yours. No vendor lock-in, no monthly licensing fee to us after delivery.",
      },
      {
        title: "Built to evolve",
        body: "Clean architecture, solid documentation, and sensible abstractions mean your team (or future developers) can extend it without starting over.",
      },
    ],
    stack: ["TypeScript", "Python", "Node.js", "Next.js", "FastAPI", "PostgreSQL", "AWS", "GCP", "Docker"],
    audiences: [
      "Operations teams drowning in manual, repetitive workflows",
      "Companies outgrowing spreadsheets and generic SaaS tools",
      "Businesses with legacy systems they need to replace or modernise",
    ],
    faqs: [
      {
        q: "How long does a typical build take?",
        a: "Most projects ship a first usable version in 8–12 weeks. Complex platforms take 4–6 months. We break every project into phases so you see working software early and can course-correct before it's too late.",
      },
      {
        q: "We don't have detailed technical requirements — is that a problem?",
        a: "Not at all. Most of our best clients come in with a problem, not a spec. We run structured discovery sessions with your team, document requirements collaboratively, and propose the architecture before development starts.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    short: "Fast, production-grade web apps built on modern frameworks — from marketing sites to full SaaS dashboards.",
    long: "Whether you need a high-converting marketing site, a customer portal, or a full-featured web application, we build it with performance, accessibility, and SEO as non-negotiables — not afterthoughts. Our web apps load fast, rank well, and scale without rewrites.",
    icon: Globe,
    features: [
      {
        title: "Modern, proven stack",
        body: "React, Next.js, TypeScript, and Tailwind CSS. Fast server-side rendering, excellent SEO, and a developer experience that means fewer bugs and faster iterations.",
      },
      {
        title: "Performance first",
        body: "Lighthouse 95+ scores, Core Web Vitals passing, sub-2s load times on mobile. We optimise images, bundle sizes, and cache aggressively — because slow pages lose customers.",
      },
      {
        title: "Accessibility by default",
        body: "WCAG 2.1 AA compliance, keyboard navigation, screen reader support, and proper semantic HTML — included in every build, not an optional add-on.",
      },
      {
        title: "Integrations and APIs",
        body: "Razorpay, Stripe, WhatsApp Business API, Twilio, and most REST/GraphQL APIs. We handle authentication, webhook management, and error handling securely.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Vercel", "AWS"],
    audiences: [
      "SaaS companies that need a polished, fast product frontend",
      "D2C and e-commerce brands that need conversions, not just a website",
      "B2B businesses replacing outdated portals or internal tools",
    ],
    faqs: [
      {
        q: "Do you handle design as well?",
        a: "Yes — we can own the full UI/UX design process or work from your existing brand guidelines. We have an in-house design capability and don't rely on external handoffs.",
      },
      {
        q: "Will the site work well for users in India on mobile?",
        a: "Yes. We design mobile-first, use CDNs with India region nodes, compress assets aggressively, and test on real 4G network conditions. Most of our builds load in under 2 seconds on mid-range Android devices.",
      },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    short: "iOS and Android apps — cross-platform or native — shipped to both app stores.",
    long: "We build mobile apps using React Native for cost-efficient cross-platform delivery, or native Swift/Kotlin when performance demands it. We handle builds, code signing, and App Store / Play Store submissions — so you focus on users, not pipeline administration.",
    icon: Smartphone,
    features: [
      {
        title: "React Native (cross-platform)",
        body: "One TypeScript codebase, two platforms. Near-native performance with the Hermes engine, 40–60% lower development cost than native, and full access to device APIs.",
      },
      {
        title: "Native (Swift / Kotlin)",
        body: "For apps where performance is non-negotiable — real-time communication, hardware-intensive features, AR/VR. We go native when the product demands it.",
      },
      {
        title: "Offline-first architecture",
        body: "Local databases, background sync, and conflict resolution built in — critical for Indian markets with intermittent connectivity.",
      },
      {
        title: "App Store ready",
        body: "Build signing, TestFlight/Play Console setup, store listing optimisation, and submission — we manage the full release pipeline.",
      },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Firebase", "SQLite", "FastLane", "OneSignal"],
    audiences: [
      "Founders wanting to launch on both platforms quickly and within budget",
      "Enterprises building field operations, logistics, or B2B companion apps",
      "Consumer app builders targeting India's Android-first mobile market",
    ],
    faqs: [
      {
        q: "React Native or native — which should we choose?",
        a: "React Native is the right call for most startups and content/information apps — it's faster to build, cheaper to maintain, and covers 95% of use cases. We recommend native Swift or Kotlin only for apps with intensive graphics, real-time audio/video, or complex hardware integrations.",
      },
      {
        q: "Can you add features to an existing app?",
        a: "Yes. We audit the current codebase, identify technical debt, and extend or refactor it. We've taken over apps from other teams and significantly improved performance and stability.",
      },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI / ML Solutions",
    short: "LLM apps, RAG pipelines, agents, and ML models that ship to production and stay accurate.",
    long: "We build AI products that do genuinely useful work — retrieval-augmented generation, autonomous agents, fine-tuned models, and full evaluation pipelines. Every system we ship has cost controls, latency budgets, and measurable accuracy targets from day one.",
    icon: Sparkles,
    features: [
      {
        title: "RAG and retrieval systems",
        body: "Vector search, document ingestion pipelines, and grounded LLM responses over your proprietary data — accurate, cited, and hallucination-resistant.",
      },
      {
        title: "Autonomous AI agents",
        body: "Tool-using agents that take actions, handle multi-step tasks, and escalate to humans when confidence is low. Built with LangChain, CrewAI, or custom orchestration.",
      },
      {
        title: "Fine-tuning and model evals",
        body: "Models fine-tuned on your domain data and evaluated rigorously with offline test suites — so you know accuracy before and after every change.",
      },
      {
        title: "Predictive ML models",
        body: "Demand forecasting, churn prediction, recommendation engines, and classification models — built on your historical data with explainable outputs.",
      },
    ],
    stack: ["Python", "OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "pgvector", "Pinecone", "HuggingFace", "FastAPI", "MLflow"],
    audiences: [
      "Companies with proprietary data who want AI that understands their domain",
      "Teams spending hours on manual review, classification, or data extraction",
      "Support, knowledge, and operations teams looking to scale without headcount",
    ],
    faqs: [
      {
        q: "What data do we need to get started?",
        a: "It depends on the use case. For RAG and retrieval, even a few hundred documents are enough to start. For predictive ML, we typically need 6–12 months of historical data with at least 500–1000 labelled examples. We run a data audit at the start of every engagement to assess what you have.",
      },
      {
        q: "How do you keep LLM costs predictable?",
        a: "Prompt caching, model routing (using smaller models where they're sufficient), token budgeting, and comprehensive offline evals before every prompt change. We track cost-per-query and set alerts — you never get a surprise bill.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI-Powered Process Automation",
    short: "Automate the manual, repetitive work slowing your team down — with AI that handles exceptions, not just rules.",
    long: "Based in Coimbatore, we work with businesses across India to identify high-leverage processes — invoice processing, lead triage, document extraction, support ticket routing — and build AI automation systems that compound in value over time. Unlike basic RPA, our automations understand context and handle edge cases intelligently.",
    icon: Workflow,
    features: [
      {
        title: "Process discovery and ROI sizing",
        body: "We find the automation opportunities with the highest return before writing a line of code — quantifying hours saved, errors eliminated, and cycle time reduced.",
      },
      {
        title: "Intelligent document processing",
        body: "OCR + AI to extract structured data from invoices, contracts, forms, and reports — validated against business rules and routed for approval automatically.",
      },
      {
        title: "Human-in-the-loop workflows",
        body: "Review gates, escalation paths, and confidence thresholds built in — automation handles the routine, humans handle the exceptions.",
      },
      {
        title: "System integrations",
        body: "Slack, email, WhatsApp, ERPs, CRMs, accounting software, and your internal APIs — automations that slot into your existing tools without replacing them.",
      },
    ],
    stack: ["Python", "n8n", "Temporal", "LangChain", "OpenAI", "Anthropic Claude", "Tesseract OCR", "Zapier", "PostgreSQL"],
    audiences: [
      "Finance and accounting teams spending hours on manual data entry and reconciliation",
      "Operations teams managing high-volume, rule-based processes across multiple systems",
      "Customer support teams handling repetitive tickets and FAQs at scale",
    ],
    faqs: [
      {
        q: "Which processes should we automate first?",
        a: "The best candidates are high-volume (100+ transactions/day), rule-based with clear logic, and involve copying data across multiple systems. We run process mining sessions to identify the top 20% of processes that drive 80% of manual effort — and start there for quick ROI.",
      },
      {
        q: "Will automation replace our employees?",
        a: "No. Automation removes the repetitive, error-prone parts of jobs — not the judgment, relationships, and decision-making that people are actually good at. Most of our clients redeploy the time saved into customer-facing or strategic work.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Reliable infrastructure, fast deployments, and clear costs — so your team ships confidently.",
    long: "We set up and manage cloud environments on AWS, GCP, or Azure — with CI/CD pipelines, observability, and cost guardrails from day one. Whether you're migrating from on-premise, scaling past a single server, or just want to stop deploying by hand, we own the infrastructure layer so your engineers can focus on product.",
    icon: Cloud,
    features: [
      {
        title: "Infrastructure as Code",
        body: "Everything defined in Terraform — VPCs, databases, load balancers, IAM policies. Versioned, reproducible, and consistent across development, staging, and production.",
      },
      {
        title: "CI/CD pipelines",
        body: "GitHub Actions or GitLab CI with automated tests, container builds, vulnerability scans, and safe zero-downtime deployments on every merge.",
      },
      {
        title: "Observability stack",
        body: "Logs, metrics, and distributed traces wired up from day one. You see exactly what's happening in production — latency, errors, costs — without digging through files.",
      },
      {
        title: "Cost optimisation",
        body: "Right-sizing, reserved instance planning, auto-scaling policies, and budget alerts. Most teams we work with reduce cloud spend by 20–35% within the first quarter.",
      },
    ],
    stack: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Datadog", "ArgoCD"],
    audiences: [
      "Engineering teams without dedicated DevOps who deploy by hand or via FTP",
      "Scaling companies moving past single-server or shared hosting",
      "Teams that want better visibility into what their cloud is actually costing them",
    ],
    faqs: [
      {
        q: "Can you take over our existing infrastructure?",
        a: "Yes. We audit your current setup, document what exists, identify risks, and improve incrementally — we don't require a full rewrite or migration to get started.",
      },
      {
        q: "AWS, GCP, or Azure — which should we use?",
        a: "AWS for most startups and general-purpose workloads — broadest service catalog and most documentation. GCP if your workloads are analytics or ML-heavy. Azure if you're in a regulated industry or already use Microsoft products. We help you choose based on your actual needs, not trends.",
      },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Product Development",
    short: "From idea to paying customers — multi-tenant SaaS with auth, billing, and everything in between.",
    long: "We build multi-tenant SaaS platforms with the foundations that matter: role-based access, subscription billing, admin tooling, usage analytics, and API extensibility. We ship MVPs in 10–12 weeks and keep iterating with you post-launch — building toward product-market fit, not just a feature list.",
    icon: Package,
    features: [
      {
        title: "Multi-tenant architecture",
        body: "Secure data isolation, organisation and workspace management, and role-based access control — built in from the start, not bolted on after customers complain.",
      },
      {
        title: "Subscription billing",
        body: "Stripe or Razorpay integration with tiered plans, usage-based billing, trial management, and dunning — so you can monetise flexibly without building a billing system from scratch.",
      },
      {
        title: "Admin and support tooling",
        body: "Internal dashboards so your support and success teams can view customer state, impersonate accounts, and manage subscriptions without engineering involvement.",
      },
      {
        title: "Product analytics",
        body: "Event tracking wired from day one — feature usage, activation funnels, retention curves. You know what customers actually use before your next planning cycle.",
      },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Razorpay", "Clerk", "Vercel", "Redis", "Sentry"],
    audiences: [
      "Founders with a validated problem looking to ship their first paying version",
      "Companies productising an internal tool into a sellable SaaS",
      "Teams at post-pilot stage ready to scale from 10 to 100+ customers",
    ],
    faqs: [
      {
        q: "How long to build and launch an MVP?",
        a: "A focused MVP — core feature set, auth, billing, and onboarding — takes 10–12 weeks. We scope tightly to what's needed for the first 10 paying customers, not the imagined 10,000. You'll have something real to show investors and users within three months.",
      },
      {
        q: "Do you take equity instead of cash?",
        a: "No — we're a services firm. Cash engagements only. This keeps incentives clear: we're focused on delivering what you need, not on our cap table position.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Research-backed interfaces users actually want to return to — designed to work with engineering, not in isolation.",
    long: "We run user research, build wireframes and high-fidelity mockups, create scalable design systems, and prototype before writing a line of code. Our designers work hand-in-hand with our engineers so what gets designed actually gets built — without the usual quality loss in handoff.",
    icon: PenTool,
    features: [
      {
        title: "User research",
        body: "Interviews, jobs-to-be-done sessions, and competitive analysis to understand what users actually need — before we design anything.",
      },
      {
        title: "Wireframes and prototypes",
        body: "Clickable prototypes in Figma that stakeholders and users can test and react to — before engineering time is spent building the wrong thing.",
      },
      {
        title: "Design systems",
        body: "Reusable component libraries with design tokens, typography scales, and interaction patterns that keep your product consistent as it grows and your team scales.",
      },
      {
        title: "Accessible by default",
        body: "WCAG 2.1 AA compliance, keyboard navigation, proper colour contrast, and semantic structure — included in every design, not treated as an afterthought.",
      },
    ],
    stack: ["Figma", "FigJam", "Storybook", "Framer", "Hotjar", "Lottie"],
    audiences: [
      "SaaS and B2B products with complex dashboards that feel overwhelming to new users",
      "E-commerce brands where small UX improvements directly move conversion rate",
      "Startups building a consistent visual identity from zero",
    ],
    faqs: [
      {
        q: "Can you work with our existing brand?",
        a: "Yes — we can extend an existing design system, work within established brand guidelines, or build from scratch if you're starting fresh. We adapt to what exists rather than imposing a new direction.",
      },
      {
        q: "How do you make sure the design actually gets built correctly?",
        a: "Our designers and engineers work in the same team, not as separate handoffs. Designers stay involved through development — reviewing implementations, catching drift, and adjusting specs when engineering constraints require it.",
      },
    ],
  },
  {
    slug: "consulting",
    title: "Consulting / Tech Advisory",
    short: "A senior technical eye on your roadmap, stack, hiring, and architecture — without a full-time hire.",
    long: "Fractional CTO engagements, architecture reviews, technical due diligence, and hiring support. We give you honest, experienced opinions on the decisions that matter most — and stay involved long enough to see them through.",
    icon: Compass,
    features: [
      {
        title: "Fractional CTO",
        body: "Weekly engagement in your Slack, sprint reviews, and planning cycles. Senior technical leadership at a fraction of a full-time hire — ideal for seed-to-Series A companies.",
      },
      {
        title: "Architecture and code review",
        body: "Second opinion on a system design, or a full audit of your existing codebase — identifying risks, bottlenecks, and improvement opportunities with clear recommendations.",
      },
      {
        title: "Technology roadmap",
        body: "A prioritised 6–18 month technology plan aligned to your business goals — what to build, what to buy, what to defer, and in what order.",
      },
      {
        title: "Hiring and team building",
        body: "Job descriptions, interview scorecards, and technical screening support — so you hire the right engineers without the costly mistakes that come from non-technical hiring.",
      },
    ],
    stack: ["—"],
    audiences: [
      "Non-technical founders who need senior technical judgment without a full-time CTO",
      "Seed-to-Series A startups making expensive architectural decisions under time pressure",
      "Investors needing technical due diligence before a deal closes",
    ],
    faqs: [
      {
        q: "What's the minimum engagement?",
        a: "Four weeks for ongoing advisory. One week for a discrete architecture review or due diligence report. We don't do one-off calls — we get involved enough to understand the real situation before offering opinions.",
      },
      {
        q: "How is this different from hiring a consultant who sends a slide deck?",
        a: "We stay involved in execution, not just recommendations. We review actual code, sit in on technical interviews, attend planning meetings, and track whether our suggestions are working. If something isn't, we adjust.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
