# Hashtricks Technologies Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready marketing website for Hashtricks Technologies — 9-service agency and AI systems firm — optimised for lead generation from mid-sized companies.

**Architecture:** Next.js 15 App Router monolith with Tailwind v4 and shadcn/ui for composable components. Static content lives in `lib/data/` (TypeScript), dynamic content (blog, case studies, job postings) lives in Sanity v3 embedded at `/studio`. Contact form posts to a Next API route that emails via Resend. Deployed to Vercel.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Sanity v3, react-hook-form, zod, Resend, Vitest, Playwright.

---

## File Structure

```
hashtricks-website/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── careers/page.tsx
│   │   └── contact/page.tsx
│   ├── studio/[[...tool]]/page.tsx
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── ui/                         # shadcn primitives (button, card, etc.)
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   ├── brand/
│   │   ├── wordmark.tsx
│   │   ├── gradient-mesh.tsx
│   │   └── hash-glyph.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── services-grid.tsx
│       ├── client-strip.tsx
│       ├── why-us.tsx
│       ├── featured-work.tsx
│       ├── process.tsx
│       ├── testimonials.tsx
│       ├── cta-band.tsx
│       ├── service-hero.tsx
│       ├── service-features.tsx
│       ├── faq.tsx
│       └── contact-form.tsx
├── lib/
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── values.ts
│   │   ├── process.ts
│   │   ├── testimonials.ts
│   │   ├── nav.ts
│   │   ├── company.ts
│   │   ├── placeholder-work.ts
│   │   ├── placeholder-blog.ts
│   │   └── placeholder-jobs.ts
│   ├── sanity/
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── image.ts
│   ├── validation/
│   │   └── contact.ts
│   ├── email/
│   │   └── resend.ts
│   └── utils.ts
├── sanity/
│   ├── schemas/
│   │   ├── post.ts
│   │   ├── caseStudy.ts
│   │   ├── jobPosting.ts
│   │   ├── author.ts
│   │   ├── category.ts
│   │   └── index.ts
│   └── sanity.config.ts
├── tests/
│   ├── unit/
│   │   └── contact-validation.test.ts
│   └── e2e/
│       └── smoke.spec.ts
├── public/
│   ├── og/
│   └── icons/
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── vitest.config.ts
├── playwright.config.ts
└── README.md
```

Each file has one responsibility. Sections are small, composable units rendered by page files. Data files are flat TypeScript exports — easy to edit and version-control.

---

## Phase 0: Project Scaffold

### Task 0.1: Initialise Next.js app

**Files:**
- Create: entire `hashtricks-website/` tree

- [ ] **Step 1: Scaffold Next.js**

```bash
cd "/Users/srimanikandanr/My Files/Synergeek/Hashtricks Technologies"
npx create-next-app@latest hashtricks-website \
  --typescript --tailwind --app --eslint \
  --src-dir=false --import-alias "@/*" --use-npm --yes
cd hashtricks-website
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 15 app with Tailwind"
```

### Task 0.2: Install core dependencies

- [ ] **Step 1: Install runtime dependencies**

```bash
npm install framer-motion class-variance-authority clsx tailwind-merge \
  lucide-react @hookform/resolvers react-hook-form zod resend \
  next-sanity @sanity/client @sanity/image-url @portabletext/react sanity
```

- [ ] **Step 2: Install dev dependencies**

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react \
  @testing-library/jest-dom @playwright/test
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install dependencies"
```

### Task 0.3: Configure Tailwind theme with brand tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        primary: { DEFAULT: "#2563EB", fg: "#F9FAFB" },
        secondary: { DEFAULT: "#111827", fg: "#F9FAFB" },
        accent: { DEFAULT: "#22D3EE", fg: "#0B1220" },
        neutral: { DEFAULT: "#F9FAFB" },
        surface: { DEFAULT: "#0B1220", muted: "#111827", border: "#1F2937" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui"],
        mono: ["var(--font-jb-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)",
      },
      boxShadow: {
        "glow-accent": "0 0 0 1px rgba(34,211,238,0.35), 0 8px 40px -10px rgba(34,211,238,0.35)",
      },
      keyframes: {
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: { "gradient-pan": "gradient-pan 12s ease infinite" },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }

html, body {
  background-color: #0B1220;
  color: #F9FAFB;
}

body {
  font-feature-settings: "ss01", "cv11";
  -webkit-font-smoothing: antialiased;
}

.grain::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.05'/></svg>");
  mix-blend-mode: overlay;
  opacity: 0.5;
  z-index: 1;
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure brand tokens and theme"
```

### Task 0.4: Wire up fonts and root layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hashtricks.tech"),
  title: { default: "Hashtricks Technologies", template: "%s — Hashtricks Technologies" },
  description: "Custom software and AI-powered systems that help growing businesses operate smarter.",
  openGraph: { type: "website", siteName: "Hashtricks Technologies" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${jbMono.variable}`}>
      <body className="grain font-sans bg-secondary text-neutral antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: wire up fonts and site metadata"
```

### Task 0.5: Add shadcn/ui primitives

- [ ] **Step 1: Initialize shadcn**

```bash
npx shadcn@latest init -d -y
```

Accept defaults (Base color: Slate, CSS variables: yes).

- [ ] **Step 2: Add primitives**

```bash
npx shadcn@latest add button card input textarea select dialog sheet tabs accordion badge separator toast -y
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add shadcn/ui primitives"
```

---

## Phase 1: Static Data Layer

### Task 1.1: Company constants

**Files:**
- Create: `lib/data/company.ts`

- [ ] **Step 1: Create file**

```ts
export const company = {
  name: "Hashtricks Technologies",
  tagline:
    "We build custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter.",
  foundedYear: 2024,
  location: "India",
  teamSize: 10,
  email: "hashtrickstechnologies@gmail.com",
  whatsappNumber: "919677561597",
  whatsappUrl:
    "https://wa.me/919677561597?text=Hi%20Hashtricks%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  bookCallUrl: "https://calendly.com/hashtricks/intro",
  socials: {
    linkedin: "https://www.linkedin.com/company/114703961",
    instagram: "https://www.instagram.com/hashtricks_technologies/",
  },
} as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/company.ts
git commit -m "feat: add company constants"
```

### Task 1.2: Navigation data

**Files:**
- Create: `lib/data/nav.ts`

- [ ] **Step 1: Create file**

```ts
export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "AI / ML Solutions", href: "/services/ai-ml-solutions" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/nav.ts
git commit -m "feat: add navigation data"
```

### Task 1.3: Services data

**Files:**
- Create: `lib/data/services.ts`

- [ ] **Step 1: Create file**

```ts
import {
  Code2, Globe, Smartphone, Sparkles, Workflow, Cloud, Package, PenTool, Compass,
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
    audiences: ["Ops teams with complex workflows", "Companies outgrowing spreadsheets", "Firms replacing legacy tools"],
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
    faqs: [{ q: "Do you design too?", a: "Yes — our design team can own UI/UX or plug into yours." }],
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
    faqs: [{ q: "Native vs React Native?", a: "We recommend based on performance needs and platform features — not dogma." }],
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
    audiences: ["Companies with proprietary data", "Teams replacing manual review", "Support & knowledge orgs"],
    faqs: [{ q: "How do you keep LLM costs predictable?", a: "Caching, model routing, token budgeting, and offline eval before every prompt change." }],
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
    faqs: [{ q: "What kind of ROI should we expect?", a: "Typical engagements save 20–40 hrs/week within the first quarter." }],
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
    audiences: ["Teams without dedicated DevOps", "Companies scaling past single-server", "Post-MVP startups"],
    faqs: [{ q: "Do you support existing infra?", a: "Yes — we can audit, improve, or fully take over operations." }],
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
    audiences: ["Founders with a validated idea", "Companies productizing internal tools", "Post-pilot B2B"],
    faqs: [{ q: "Do you take equity?", a: "No — we're a services firm. Cash engagements only." }],
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
    audiences: ["Early-stage products", "Teams redesigning legacy UIs", "Brands launching digital-first"],
    faqs: [{ q: "Can you work with our existing brand?", a: "Absolutely — we extend existing systems or build from scratch." }],
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
    faqs: [{ q: "Minimum engagement?", a: "4 weeks for advisory, 1 week for a discrete review." }],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/services.ts
git commit -m "feat: add services data"
```

### Task 1.4: Team, values, process, testimonials

**Files:**
- Create: `lib/data/team.ts`, `lib/data/values.ts`, `lib/data/process.ts`, `lib/data/testimonials.ts`

- [ ] **Step 1: Create `lib/data/team.ts`**

```ts
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
};

export const team: TeamMember[] = Array.from({ length: 10 }, (_, i) => ({
  name: `Team Member ${i + 1}`,
  role: i === 0 ? "Founder & CEO" : i === 1 ? "CTO" : "Engineer",
  bio: "Placeholder bio — replace with real content before launch.",
  avatar: `/team/placeholder-${(i % 4) + 1}.jpg`,
}));
```

- [ ] **Step 2: Create `lib/data/values.ts`**

```ts
import { Target, Zap, Users, TrendingUp, type LucideIcon } from "lucide-react";

export type Value = { title: string; body: string; icon: LucideIcon };

export const values: Value[] = [
  { title: "AI-first", body: "AI is in our DNA, not bolted on. We build systems that get smarter over time.", icon: Zap },
  { title: "Senior team", body: "No junior-only squads. Every project has senior engineers on the critical path.", icon: Users },
  { title: "Fast delivery", body: "First usable version in weeks, not quarters. Iterate with your customers in the loop.", icon: TrendingUp },
  { title: "Outcome-driven", body: "We measure success in time saved, revenue unlocked, users retained — not lines of code.", icon: Target },
];
```

- [ ] **Step 3: Create `lib/data/process.ts`**

```ts
export type ProcessStep = { number: string; title: string; body: string };

export const process: ProcessStep[] = [
  { number: "01", title: "Discovery", body: "We map your workflows, users, and constraints. No assumptions." },
  { number: "02", title: "Design", body: "Architecture and UI, validated before we write a line of code." },
  { number: "03", title: "Build", body: "Weekly releases, tight feedback loops, everything owned by you." },
  { number: "04", title: "Scale", body: "We stay on to optimise, harden, and help your team take it forward." },
];
```

- [ ] **Step 4: Create `lib/data/testimonials.ts`**

```ts
export type Testimonial = { quote: string; author: string; role: string; company: string };

export const testimonials: Testimonial[] = [
  { quote: "Hashtricks shipped a working AI triage system in six weeks that now handles 80% of our inbound support volume. The team understood our operations better than our own tooling did.", author: "Placeholder Name", role: "Head of Ops", company: "Placeholder Co." },
  { quote: "They became a genuine extension of our team. Senior engineers, sharp opinions, and a bias for shipping.", author: "Placeholder Name", role: "CTO", company: "Placeholder Co." },
  { quote: "We finally retired three spreadsheets and a legacy tool. The new platform paid for itself in a quarter.", author: "Placeholder Name", role: "COO", company: "Placeholder Co." },
];
```

- [ ] **Step 5: Commit**

```bash
git add lib/data/
git commit -m "feat: add team, values, process, testimonials data"
```

---

## Phase 2: Brand & Layout Chrome

### Task 2.1: Wordmark, GradientMesh, HashGlyph

**Files:**
- Create: `components/brand/wordmark.tsx`, `gradient-mesh.tsx`, `hash-glyph.tsx`

- [ ] **Step 1: Create `components/brand/wordmark.tsx`**

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2 group", className)} aria-label="Hashtricks Technologies home">
      <span className="font-display text-2xl font-bold leading-none bg-brand-gradient bg-clip-text text-transparent">#</span>
      <span className="font-display text-lg font-semibold tracking-tight text-neutral group-hover:text-accent transition-colors">
        Hashtricks
      </span>
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/brand/gradient-mesh.tsx`**

```tsx
import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[720px] w-[1200px] max-w-[140%] rounded-full blur-3xl opacity-40 animate-gradient-pan"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, #2563EB, transparent 70%), radial-gradient(closest-side, #22D3EE, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.25),transparent_60%)]" />
    </div>
  );
}
```

- [ ] **Step 3: Create `components/brand/hash-glyph.tsx`**

```tsx
import { cn } from "@/lib/utils";

export function HashGlyph({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("inline-block font-mono text-accent", className)}>
      #
    </span>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/brand
git commit -m "feat: add brand components"
```

### Task 2.2: Header with responsive nav

**Files:**
- Create: `components/layout/header.tsx`, `components/layout/mobile-nav.tsx`

- [ ] **Step 1: Create `components/layout/mobile-nav.tsx`**

```tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-secondary border-surface-border">
        <nav className="flex flex-col gap-6 pt-10" aria-label="Mobile">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg text-neutral">
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-brand-gradient text-primary-fg mt-4">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">Book a Call</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 2: Create `components/layout/header.tsx`**

```tsx
import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { mainNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border/60 bg-secondary/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-neutral/80 hover:text-neutral transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-brand-gradient text-primary-fg hover:opacity-90">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">Book a Call</a>
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/header.tsx components/layout/mobile-nav.tsx
git commit -m "feat: add Header and MobileNav"
```

### Task 2.3: Footer

**Files:**
- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Create file**

```tsx
import Link from "next/link";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { Wordmark } from "@/components/brand/wordmark";
import { footerSections } from "@/lib/data/nav";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="border-t border-surface-border/60 bg-secondary mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <Wordmark />
          <p className="text-sm text-neutral/60 max-w-xs">Custom software and AI-powered systems for growing businesses.</p>
          <div className="flex gap-3">
            <a href={company.socials.linkedin} aria-label="LinkedIn" className="text-neutral/60 hover:text-accent"><Linkedin className="h-5 w-5" /></a>
            <a href={company.socials.instagram} aria-label="Instagram" className="text-neutral/60 hover:text-accent"><Instagram className="h-5 w-5" /></a>
            <a href={`mailto:${company.email}`} aria-label="Email" className="text-neutral/60 hover:text-accent"><Mail className="h-5 w-5" /></a>
            <a href={company.whatsappUrl} aria-label="WhatsApp" className="text-neutral/60 hover:text-accent"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-neutral mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral/60 hover:text-neutral transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold text-neutral mb-4">Contact</h3>
          <address className="not-italic space-y-2 text-sm text-neutral/60">
            <p>{company.location}</p>
            <p><a href={`mailto:${company.email}`} className="hover:text-neutral">{company.email}</a></p>
            <p><a href={company.whatsappUrl} className="hover:text-neutral">WhatsApp</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-surface-border/60">
        <div className="container py-6 text-xs text-neutral/40 flex justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Founded {company.foundedYear}</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: add Footer"
```

### Task 2.4: Marketing layout

**Files:**
- Create: `app/(marketing)/layout.tsx`
- Delete: default `app/page.tsx`

- [ ] **Step 1: Create file**

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Remove default home**

```bash
rm app/page.tsx || true
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add marketing layout group"
```

---

## Phase 3: Home Page Sections

### Task 3.1: Hero

**Files:**
- Create: `components/sections/hero.tsx`

- [ ] **Step 1: Create file**

```tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/brand/gradient-mesh";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { company } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="relative isolate">
      <GradientMesh />
      <div className="container pt-28 pb-24 md:pt-40 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
            <HashGlyph /> AI-powered systems for growing businesses
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            We build custom software and{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">AI-powered systems</span>{" "}
            that help businesses operate smarter.
          </h1>
          <p className="mt-6 text-lg text-neutral/70 max-w-2xl">
            Reduce manual work, scale efficiently, and unlock the leverage AI gives your team. We design, build, and deploy — end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand-gradient text-primary-fg hover:opacity-90">
              <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-surface-border">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat: add Hero section"
```

### Task 3.2: ClientStrip, ServicesGrid, WhyUs, FeaturedWork, Process, Testimonials, CtaBand

**Files:**
- Create: `components/sections/client-strip.tsx`, `services-grid.tsx`, `why-us.tsx`, `featured-work.tsx`, `process.tsx`, `testimonials.tsx`, `cta-band.tsx`

- [ ] **Step 1: Create `components/sections/client-strip.tsx`**

```tsx
export function ClientStrip() {
  const placeholders = Array.from({ length: 6 }, (_, i) => `Client ${i + 1}`);
  return (
    <section className="border-y border-surface-border/60 py-10">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral/50">Trusted by teams at</p>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {placeholders.map((label) => (
            <div key={label} className="text-center font-mono text-sm text-neutral/40">{label}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/services-grid.tsx`**

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function ServicesGrid() {
  return (
    <section className="container py-24" id="services">
      <div className="max-w-2xl">
        <p className="text-sm text-accent font-mono"><HashGlyph /> services</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">What we build</h2>
        <p className="mt-4 text-neutral/70 text-lg">Nine capabilities, one senior team. Pick what you need — we'll bring the rest.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-muted p-6 transition-all hover:shadow-glow-accent hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-brand-gradient/10 border border-accent/20 grid place-items-center text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-neutral/40 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral/60">{service.short}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/why-us.tsx`**

```tsx
import { values } from "@/lib/data/values";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function WhyUs() {
  return (
    <section className="container py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-accent font-mono"><HashGlyph /> why hashtricks</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Built for the teams that ship.</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral/60">{v.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/sections/featured-work.tsx`**

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HashGlyph } from "@/components/brand/hash-glyph";

const featured = [
  { slug: "placeholder-1", title: "AI Triage for Support Ops", industry: "SaaS", metric: "80% volume automated" },
  { slug: "placeholder-2", title: "Inventory Forecasting Platform", industry: "Retail", metric: "32% fewer stockouts" },
  { slug: "placeholder-3", title: "B2B Sales Copilot", industry: "Manufacturing", metric: "3x pipeline created" },
];

export function FeaturedWork() {
  return (
    <section className="container py-24">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="max-w-2xl">
          <p className="text-sm text-accent font-mono"><HashGlyph /> featured work</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Outcomes, not output.</h2>
        </div>
        <Link href="/work" className="text-sm text-neutral/70 hover:text-accent inline-flex items-center gap-1">
          See all work <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group rounded-2xl border border-surface-border bg-surface-muted overflow-hidden transition hover:shadow-glow-accent hover:-translate-y-0.5"
          >
            <div className="aspect-[4/3] bg-brand-gradient/10 border-b border-surface-border grid place-items-center">
              <span className="font-mono text-sm text-accent/60">case study preview</span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral/50">{item.industry}</p>
              <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="mt-1 text-sm text-neutral/60">{item.metric}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `components/sections/process.tsx`**

```tsx
import { process } from "@/lib/data/process";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Process() {
  return (
    <section className="container py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-accent font-mono"><HashGlyph /> how we work</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">A process that compounds.</h2>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {process.map((step) => (
          <li key={step.number} className="relative rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
            <span className="font-mono text-xs text-accent">{step.number}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-neutral/60">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/sections/testimonials.tsx`**

```tsx
import { testimonials } from "@/lib/data/testimonials";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Testimonials() {
  return (
    <section className="container py-24">
      <div className="max-w-2xl">
        <p className="text-sm text-accent font-mono"><HashGlyph /> testimonials</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Partnerships, not transactions.</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
            <p className="text-neutral/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6">
              <p className="font-semibold text-neutral">{t.author}</p>
              <p className="text-sm text-neutral/50">{t.role}, {t.company}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create `components/sections/cta-band.tsx`**

```tsx
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";

export function CtaBand() {
  return (
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-brand-gradient/5 p-10 md:p-16 text-center">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.2),transparent_60%)]" />
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Ready to build?</h2>
        <p className="mt-4 text-neutral/70 max-w-2xl mx-auto">Tell us what you're working on. We'll show you what we'd build.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-brand-gradient text-primary-fg hover:opacity-90">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-surface-border">
            <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Commit**

```bash
git add components/sections/
git commit -m "feat: add home page sections"
```

### Task 3.3: Compose home page

**Files:**
- Create: `app/(marketing)/page.tsx`

- [ ] **Step 1: Create file**

```tsx
import { Hero } from "@/components/sections/hero";
import { ClientStrip } from "@/components/sections/client-strip";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <ServicesGrid />
      <WhyUs />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
```

- [ ] **Step 2: Run dev and manually verify**

```bash
npm run dev
```

Expected: http://localhost:3000 renders full home page with all sections, no console errors.

- [ ] **Step 3: Commit**

```bash
git add app/\(marketing\)/page.tsx
git commit -m "feat: compose home page"
```

---

## Phase 4: Services Pages

### Task 4.1: Services overview

**Files:**
- Create: `app/(marketing)/services/page.tsx`

- [ ] **Step 1: Create file**

```tsx
import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description: "Nine capabilities — custom software, AI, cloud, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="container pt-24 pb-12">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Services</h1>
        <p className="mt-4 text-lg text-neutral/70 max-w-2xl">
          From a fractional CTO hour to a full SaaS product build — senior engineers, design-led, AI-native.
        </p>
      </div>
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/\(marketing\)/services/page.tsx
git commit -m "feat: add services overview page"
```

### Task 4.2: ServiceHero, ServiceFeatures, Faq sections

**Files:**
- Create: `components/sections/service-hero.tsx`, `service-features.tsx`, `faq.tsx`

- [ ] **Step 1: Create `components/sections/service-hero.tsx`**

```tsx
import { GradientMesh } from "@/components/brand/gradient-mesh";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import type { Service } from "@/lib/data/services";

export function ServiceHero({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <section className="relative isolate">
      <GradientMesh />
      <div className="container pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
            <HashGlyph /> services / {service.slug}
          </div>
          <div className="mt-6 flex items-start gap-4">
            <div className="h-14 w-14 shrink-0 rounded-xl bg-brand-gradient/10 border border-accent/20 grid place-items-center text-accent">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">{service.title}</h1>
          </div>
          <p className="mt-6 text-lg text-neutral/70">{service.long}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand-gradient text-primary-fg hover:opacity-90">
              <a href={company.bookCallUrl} target="_blank" rel="noreferrer">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-surface-border">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/service-features.tsx`**

```tsx
import type { Service } from "@/lib/data/services";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Badge } from "@/components/ui/badge";

export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="container py-16 space-y-20">
      <div>
        <p className="text-sm text-accent font-mono"><HashGlyph /> what we do</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Capabilities</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {service.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-accent font-mono"><HashGlyph /> stack</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Tools we reach for</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {service.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="border-surface-border text-neutral/70 font-mono text-xs">{tech}</Badge>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-accent font-mono"><HashGlyph /> built for</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Who this is for</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {service.audiences.map((a) => (
            <li key={a} className="rounded-xl border border-surface-border bg-surface-muted/50 p-4 text-sm text-neutral/70">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/faq.tsx`**

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HashGlyph } from "@/components/brand/hash-glyph";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="container py-16">
      <p className="text-sm text-accent font-mono"><HashGlyph /> faq</p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
      <Accordion type="single" collapsible className="mt-10 max-w-3xl">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-surface-border">
            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
            <AccordionContent className="text-neutral/70">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/
git commit -m "feat: add service detail sections"
```

### Task 4.3: Service detail page

**Files:**
- Create: `app/(marketing)/services/[slug]/page.tsx`

- [ ] **Step 1: Create file**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/lib/data/services";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <Faq items={service.faqs} />
      <CtaBand />
    </>
  );
}
```

- [ ] **Step 2: Run dev and verify each service route**

```bash
npm run dev
```

Check `/services/custom-software` through `/services/consulting` — each should render with its own content. `/services/does-not-exist` should 404.

- [ ] **Step 3: Commit**

```bash
git add app/\(marketing\)/services/\[slug\]/page.tsx
git commit -m "feat: add dynamic service detail page"
```

---

## Phase 5: About, Work, Blog, Careers (pre-CMS)

### Task 5.1: About page

**Files:**
- Create: `app/(marketing)/about/page.tsx`

- [ ] **Step 1: Create file**

```tsx
import type { Metadata } from "next";
import { team } from "@/lib/data/team";
import { values } from "@/lib/data/values";
import { company } from "@/lib/data/company";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { GradientMesh } from "@/components/brand/gradient-mesh";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we believe, and how we work at Hashtricks Technologies.",
};

export default function AboutPage() {
  const stats = [
    { label: "Founded", value: company.foundedYear },
    { label: "Team", value: `${company.teamSize}+` },
    { label: "Projects", value: "25+" },
    { label: "Countries served", value: "5+" },
  ];
  return (
    <>
      <section className="relative isolate">
        <GradientMesh />
        <div className="container pt-24 pb-16 md:pt-32 md:pb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
            <HashGlyph /> about
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            A senior team, building AI-native software from {company.location}.
          </h1>
          <p className="mt-6 text-lg text-neutral/70">
            Founded in {company.foundedYear}, Hashtricks Technologies is a team of {company.teamSize} engineers, designers, and strategists. We partner with mid-sized companies to build custom software and AI systems that reduce manual work and unlock new leverage.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <p className="text-sm text-accent font-mono"><HashGlyph /> what we believe</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">Values</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral/60">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container py-16">
        <p className="text-sm text-accent font-mono"><HashGlyph /> team</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">The people</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-4">
              <div className="aspect-square rounded-xl bg-brand-gradient/10 border border-surface-border grid place-items-center">
                <span className="font-display text-2xl text-accent/60">{member.name.split(" ").map((p) => p[0]).join("")}</span>
              </div>
              <h3 className="mt-4 font-semibold text-sm">{member.name}</h3>
              <p className="text-xs text-neutral/50">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6">
              <p className="font-display text-3xl md:text-5xl font-bold bg-brand-gradient bg-clip-text text-transparent">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/\(marketing\)/about/page.tsx
git commit -m "feat: add about page"
```

### Task 5.2: Work listing and detail (placeholder)

**Files:**
- Create: `lib/data/placeholder-work.ts`, `app/(marketing)/work/page.tsx`, `app/(marketing)/work/[slug]/page.tsx`

- [ ] **Step 1: Create `lib/data/placeholder-work.ts`**

```ts
export type WorkItem = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metric: string;
  services: string[];
};

export const placeholderWork: WorkItem[] = [
  { slug: "placeholder-1", title: "AI Triage for Support Ops", industry: "SaaS", summary: "Classified and routed 80% of inbound tickets with an evaluated LLM pipeline.", metric: "80% volume automated", services: ["AI / ML Solutions", "AI Automation"] },
  { slug: "placeholder-2", title: "Inventory Forecasting Platform", industry: "Retail", summary: "Custom forecasting models wired into ERP for 42 stock-keeping categories.", metric: "32% fewer stockouts", services: ["Custom Software", "AI / ML Solutions"] },
  { slug: "placeholder-3", title: "B2B Sales Copilot", industry: "Manufacturing", summary: "Agent-driven research and outreach assistant, integrated with HubSpot.", metric: "3x pipeline created", services: ["AI / ML Solutions", "Web Development"] },
];
```

- [ ] **Step 2: Create `app/(marketing)/work/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from Hashtricks Technologies.",
};

export default function WorkPage() {
  return (
    <>
      <section className="container pt-24 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
          <HashGlyph /> work
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Case studies</h1>
        <p className="mt-4 text-lg text-neutral/70 max-w-2xl">Selected engagements. Each one shipped, measured, and maintained.</p>
      </section>

      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholderWork.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group rounded-2xl border border-surface-border bg-surface-muted overflow-hidden transition hover:shadow-glow-accent hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] bg-brand-gradient/10 border-b border-surface-border grid place-items-center">
                <span className="font-mono text-sm text-accent/60">case study preview</span>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral/50">{item.industry}</p>
                <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral/60">{item.summary}</p>
                <p className="mt-3 text-xs font-mono text-accent">{item.metric}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-neutral/70 group-hover:text-accent">
                  Read case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
```

- [ ] **Step 3: Create `app/(marketing)/work/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { placeholderWork } from "@/lib/data/placeholder-work";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { CtaBand } from "@/components/sections/cta-band";

export function generateStaticParams() {
  return placeholderWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = placeholderWork.find((w) => w.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = placeholderWork.find((w) => w.slug === slug);
  if (!item) notFound();
  return (
    <>
      <section className="container pt-24 pb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
          <HashGlyph /> case study / {item.industry}
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">{item.title}</h1>
        <p className="mt-4 text-lg text-neutral/70">{item.summary}</p>
      </section>
      <section className="container pb-16 max-w-3xl space-y-8">
        <p className="font-mono text-accent">{item.metric}</p>
        <p className="text-neutral/70">Placeholder case study body. Replace with real narrative, diagrams, outcomes, and testimonial before launch.</p>
      </section>
      <CtaBand />
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/\(marketing\)/work lib/data/placeholder-work.ts
git commit -m "feat: add work listing and detail (placeholder pre-CMS)"
```

### Task 5.3: Blog listing and post (placeholder)

**Files:**
- Create: `lib/data/placeholder-blog.ts`, `app/(marketing)/blog/page.tsx`, `app/(marketing)/blog/[slug]/page.tsx`

- [ ] **Step 1: Create `lib/data/placeholder-blog.ts`**

```ts
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
  { slug: "evaluating-llms-in-production", title: "Evaluating LLMs in Production", excerpt: "How we build offline evals that catch regressions before your customers do.", date: "2026-03-15", readingTime: "8 min", author: "Hashtricks Team", tags: ["AI", "Engineering"] },
  { slug: "ship-fast-without-tech-debt", title: "Ship Fast Without Tech Debt", excerpt: "A playbook for moving quickly without poisoning your codebase.", date: "2026-02-20", readingTime: "6 min", author: "Hashtricks Team", tags: ["Engineering"] },
];
```

- [ ] **Step 2: Create `app/(marketing)/blog/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { placeholderBlog } from "@/lib/data/placeholder-blog";
import { HashGlyph } from "@/components/brand/hash-glyph";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on building software and AI systems.",
};

export default function BlogPage() {
  return (
    <section className="container pt-24 pb-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
        <HashGlyph /> blog
      </div>
      <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Notes from the team</h1>
      <p className="mt-4 text-lg text-neutral/70 max-w-2xl">Sharp takes on AI, product, and software engineering.</p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {placeholderBlog.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-surface-border bg-surface-muted/50 p-6 transition hover:shadow-glow-accent hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              {post.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold group-hover:text-accent transition-colors">{post.title}</h2>
            <p className="mt-2 text-sm text-neutral/60">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-neutral/50">
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} · {post.readingTime}</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `app/(marketing)/blog/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { placeholderBlog } from "@/lib/data/placeholder-blog";

export function generateStaticParams() {
  return placeholderBlog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderBlog.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = placeholderBlog.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <article className="container pt-24 pb-24 max-w-3xl">
      <div className="flex items-center gap-2 text-xs font-mono text-accent">
        {post.tags.map((t) => <span key={t}>#{t}</span>)}
      </div>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">{post.title}</h1>
      <p className="mt-4 text-sm text-neutral/50">
        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readingTime} · {post.author}
      </p>
      <p className="mt-10 text-neutral/70">Placeholder post body. Real content will be migrated to Sanity in Phase 7.</p>
    </article>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/\(marketing\)/blog lib/data/placeholder-blog.ts
git commit -m "feat: add blog listing and post (placeholder pre-CMS)"
```

### Task 5.4: Careers page

**Files:**
- Create: `lib/data/placeholder-jobs.ts`, `app/(marketing)/careers/page.tsx`

- [ ] **Step 1: Create `lib/data/placeholder-jobs.ts`**

```ts
export type JobPosting = {
  slug: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
};

export const placeholderJobs: JobPosting[] = [
  { slug: "senior-fullstack", title: "Senior Full-stack Engineer", location: "Remote (India)", type: "Full-time", summary: "Own end-to-end features in TypeScript, Next.js, and Postgres." },
  { slug: "ai-engineer", title: "AI Engineer", location: "Remote (India)", type: "Full-time", summary: "Build LLM-powered features, agents, and evaluation pipelines." },
];
```

- [ ] **Step 2: Create `app/(marketing)/careers/page.tsx`**

```tsx
import type { Metadata } from "next";
import { placeholderJobs } from "@/lib/data/placeholder-jobs";
import { company } from "@/lib/data/company";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build AI-powered software with a senior, remote-first team.",
};

export default function CareersPage() {
  return (
    <section className="container pt-24 pb-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
        <HashGlyph /> careers
      </div>
      <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold tracking-tight">Work with us</h1>
      <p className="mt-4 text-lg text-neutral/70 max-w-2xl">We're a small, senior team shipping AI-native software to mid-sized companies. If that sounds like your kind of engineering, say hi.</p>

      <div className="mt-14 grid gap-6">
        {placeholderJobs.map((job) => (
          <div key={job.slug} className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-semibold">{job.title}</h2>
              <p className="mt-1 text-sm text-neutral/60">{job.summary}</p>
              <p className="mt-2 text-xs font-mono text-accent">{job.location} · {job.type}</p>
            </div>
            <Button asChild variant="outline" className="border-surface-border">
              <a href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(job.title)}`}>Apply</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/\(marketing\)/careers lib/data/placeholder-jobs.ts
git commit -m "feat: add careers page"
```

---

## Phase 6: Contact — validation (TDD) + form + API

### Task 6.1: Contact validation schema (test-first)

**Files:**
- Create: `vitest.config.ts`, `lib/validation/contact.ts`, `tests/unit/contact-validation.test.ts`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", globals: true },
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
});
```

- [ ] **Step 2: Add npm scripts to `package.json`**

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Write failing test** `tests/unit/contact-validation.test.ts`

```ts
import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation/contact";

describe("contactSchema", () => {
  const valid = {
    name: "Alex Example",
    email: "alex@example.com",
    company: "ExampleCo",
    service: "custom-software",
    message: "Hi, we'd like to discuss building a custom tool.",
    honeypot: "",
  };

  it("accepts a fully valid submission", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects missing name", () => {
    expect(contactSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
  });

  it("rejects a malformed email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "too short" }).success).toBe(false);
  });

  it("rejects a submission with a filled honeypot (bot)", () => {
    expect(contactSchema.safeParse({ ...valid, honeypot: "I am a bot" }).success).toBe(false);
  });

  it("accepts missing optional company", () => {
    const { company: _c, ...rest } = valid;
    expect(contactSchema.safeParse(rest).success).toBe(true);
  });
});
```

- [ ] **Step 4: Run test — expect to fail**

```bash
npm test
```

Expected: fails — `lib/validation/contact` not found.

- [ ] **Step 5: Implement schema** `lib/validation/contact.ts`

```ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  company: z.string().max(100).optional(),
  service: z.string().min(1, "Pick a service"),
  message: z.string().min(10, "Tell us a little more (10+ characters)").max(2000),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

- [ ] **Step 6: Run test — expect to pass**

```bash
npm test
```

Expected: all 6 tests pass.

- [ ] **Step 7: Commit**

```bash
git add lib/validation/contact.ts tests/unit/contact-validation.test.ts vitest.config.ts package.json
git commit -m "feat: add contact form validation schema with tests"
```

### Task 6.2: Resend wrapper

**Files:**
- Create: `lib/email/resend.ts`

- [ ] **Step 1: Create file**

```ts
import { Resend } from "resend";
import { company } from "@/lib/data/company";
import type { ContactInput } from "@/lib/validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(input: ContactInput) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  return resend.emails.send({
    from: "Hashtricks Site <noreply@hashtricks.tech>",
    to,
    replyTo: input.email,
    subject: `New enquiry — ${input.service} — ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Company: ${input.company ?? "—"}`,
      `Service: ${input.service}`,
      "",
      "Message:",
      input.message,
    ].join("\n"),
  });
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/email/resend.ts
git commit -m "feat: add Resend email wrapper"
```

### Task 6.3: `/api/contact` route

**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create file**

```ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email/resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact email failed", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "feat: add /api/contact route"
```

### Task 6.4: Contact form + page

**Files:**
- Create: `components/sections/contact-form.tsx`, `app/(marketing)/contact/page.tsx`

- [ ] **Step 1: Create `components/sections/contact-form.tsx`**

```tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("submitting");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

      <Field label="Name" error={errors.name?.message}>
        <Input {...register("name")} placeholder="Your name" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <Input type="email" {...register("email")} placeholder="you@company.com" />
      </Field>
      <Field label="Company" error={errors.company?.message}>
        <Input {...register("company")} placeholder="Your company" />
      </Field>
      <Field label="Service you're interested in" error={errors.service?.message}>
        <select
          className="w-full h-10 rounded-md border border-surface-border bg-secondary px-3 text-sm"
          {...register("service")}
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </Field>
      <Field label="Project brief" error={errors.message?.message}>
        <Textarea rows={5} {...register("message")} placeholder="Tell us what you're trying to build, and any constraints." />
      </Field>

      <Button type="submit" disabled={status === "submitting"} className="bg-brand-gradient text-primary-fg hover:opacity-90">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      {status === "success" && <p className="text-sm text-accent">Thanks — we'll get back to you within one business day.</p>}
      {status === "error" && <p className="text-sm text-red-400">Something went wrong. Email us directly or try WhatsApp.</p>}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-neutral/80">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Create `app/(marketing)/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import { MessageCircle, Mail } from "lucide-react";
import { company } from "@/lib/data/company";
import { ContactForm } from "@/components/sections/contact-form";
import { HashGlyph } from "@/components/brand/hash-glyph";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call or send us your project brief.",
};

export default function ContactPage() {
  return (
    <section className="container pt-24 pb-24 grid gap-12 md:grid-cols-2">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-surface-border/80 px-3 py-1 text-xs text-neutral/70">
          <HashGlyph /> contact
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">Let's build.</h1>
        <p className="mt-4 text-lg text-neutral/70">Book a call, WhatsApp us, or fill the form. We reply within one business day.</p>

        <div className="mt-8 space-y-3">
          <Button asChild className="bg-brand-gradient text-primary-fg hover:opacity-90 w-full md:w-auto">
            <a href={company.bookCallUrl} target="_blank" rel="noreferrer">Book a discovery call</a>
          </Button>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="border-surface-border">
              <a href={company.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="border-surface-border">
              <a href={`mailto:${company.email}`}>
                <Mail className="mr-2 h-4 w-4" /> {company.email}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-surface-muted/50 p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/\(marketing\)/contact components/sections/contact-form.tsx
git commit -m "feat: add contact page and form"
```

---

## Phase 7: Sanity CMS Integration

### Task 7.1: Sanity project setup

- [ ] **Step 1: Create Sanity project**

```bash
npx sanity@latest init --env --project-default
```

Name: `hashtricks-website`, dataset: `production`. This writes `SANITY_*` env vars to `.env` (do not commit).

- [ ] **Step 2: Create `.env.example`**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
RESEND_API_KEY=
CONTACT_TO_EMAIL=hashtrickstechnologies@gmail.com
```

- [ ] **Step 3: Commit**

```bash
git add .env.example sanity.config.ts sanity
git commit -m "chore: initialise Sanity project"
```

### Task 7.2: Sanity schemas

**Files:**
- Create: `sanity/schemas/author.ts`, `category.ts`, `post.ts`, `caseStudy.ts`, `jobPosting.ts`, `index.ts`

- [ ] **Step 1: Create `sanity/schemas/author.ts`**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "avatar", type: "image", options: { hotspot: true } }),
  ],
});
```

- [ ] **Step 2: Create `sanity/schemas/category.ts`**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
  ],
});
```

- [ ] **Step 3: Create `sanity/schemas/post.ts`**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "cover", type: "image", options: { hotspot: true } }),
    defineField({ name: "author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "categories", type: "array", of: [{ type: "reference", to: [{ type: "category" }] }] }),
    defineField({ name: "publishedAt", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
  ],
});
```

- [ ] **Step 4: Create `sanity/schemas/caseStudy.ts`**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client", type: "string" }),
    defineField({ name: "industry", type: "string" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "metric", type: "string", description: "e.g. '80% volume automated'" }),
    defineField({ name: "cover", type: "image", options: { hotspot: true } }),
    defineField({ name: "services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "challenge", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "solution", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "outcomes", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "stack", type: "array", of: [{ type: "string" }] }),
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
});
```

- [ ] **Step 5: Create `sanity/schemas/jobPosting.ts`**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string", options: { list: ["Full-time", "Part-time", "Contract"] } }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
  ],
});
```

- [ ] **Step 6: Create `sanity/schemas/index.ts`**

```ts
import author from "./author";
import category from "./category";
import post from "./post";
import caseStudy from "./caseStudy";
import jobPosting from "./jobPosting";

export const schemaTypes = [author, category, post, caseStudy, jobPosting];
```

- [ ] **Step 7: Update `sanity.config.ts`**

```ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Hashtricks CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
  basePath: "/studio",
});
```

- [ ] **Step 8: Embed Studio at `/studio`**

Create `app/studio/[[...tool]]/page.tsx`:

```tsx
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

- [ ] **Step 9: Commit**

```bash
git add sanity app/studio
git commit -m "feat: add Sanity schemas and embedded Studio"
```

### Task 7.3: Sanity client and queries

**Files:**
- Create: `lib/sanity/client.ts`, `lib/sanity/image.ts`, `lib/sanity/queries.ts`

- [ ] **Step 1: Create `lib/sanity/client.ts`**

```ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-01-01",
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});
```

- [ ] **Step 2: Create `lib/sanity/image.ts`**

```ts
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: unknown) {
  return builder.image(source as never);
}
```

- [ ] **Step 3: Create `lib/sanity/queries.ts`**

```ts
import { groq } from "next-sanity";
import { sanityClient } from "./client";

const postsListQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current, title, excerpt, publishedAt,
    "author": author->name, cover,
    "categories": categories[]->title
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title, excerpt, publishedAt, body, cover,
    "author": author->{name, role, avatar},
    "categories": categories[]->title
  }
`;

const caseStudiesListQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    "slug": slug.current, title, industry, summary, metric, cover, services
  }
`;

const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    title, industry, summary, metric, cover, services, stack,
    challenge, solution, outcomes, testimonial
  }
`;

const jobsActiveQuery = groq`
  *[_type == "jobPosting" && active == true] | order(_createdAt desc) {
    "slug": slug.current, title, location, type, summary
  }
`;

export function getPosts() { return sanityClient.fetch(postsListQuery); }
export function getPost(slug: string) { return sanityClient.fetch(postBySlugQuery, { slug }); }
export function getCaseStudies() { return sanityClient.fetch(caseStudiesListQuery); }
export function getCaseStudy(slug: string) { return sanityClient.fetch(caseStudyBySlugQuery, { slug }); }
export function getActiveJobs() { return sanityClient.fetch(jobsActiveQuery); }
```

- [ ] **Step 4: Commit**

```bash
git add lib/sanity
git commit -m "feat: add Sanity client and queries"
```

### Task 7.4: Wire blog, work, careers to Sanity with fallback

**Files:**
- Modify: `app/(marketing)/blog/page.tsx`, `app/(marketing)/blog/[slug]/page.tsx`, `app/(marketing)/work/page.tsx`, `app/(marketing)/work/[slug]/page.tsx`, `app/(marketing)/careers/page.tsx`

- [ ] **Step 1: Update blog listing**

Replace the static `placeholderBlog` import with a fetch + fallback at the top of the component:

```tsx
import { getPosts } from "@/lib/sanity/queries";
import { placeholderBlog } from "@/lib/data/placeholder-blog";

type PostCard = { slug: string; title: string; excerpt: string; date: string; tags: string[] };

export default async function BlogPage() {
  const cmsPosts = (await getPosts().catch(() => [])) as any[];
  const posts: PostCard[] = cmsPosts.length
    ? cmsPosts.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.publishedAt, tags: p.categories ?? [] }))
    : placeholderBlog.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date, tags: p.tags }));
  // ...render using `posts`
}
```

Replace the render block that iterates `placeholderBlog` with one that iterates `posts` using the PostCard shape above.

- [ ] **Step 2: Update blog detail**

```tsx
import { getPost } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import { placeholderBlog } from "@/lib/data/placeholder-blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cms = await getPost(slug).catch(() => null);
  const fallback = placeholderBlog.find((p) => p.slug === slug);
  const post = cms ?? fallback;
  return post ? { title: post.title, description: (post as any).excerpt } : {};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cms = await getPost(slug).catch(() => null);
  const fallback = placeholderBlog.find((p) => p.slug === slug);
  const post = cms ?? fallback;
  if (!post) notFound();
  return (
    <article className="container pt-24 pb-24 max-w-3xl prose prose-invert">
      <h1>{post.title}</h1>
      {cms?.body ? <PortableText value={cms.body} /> : <p>Placeholder post body.</p>}
    </article>
  );
}
```

- [ ] **Step 3: Same pattern for `/work/page.tsx` and `/work/[slug]/page.tsx`**

Fetch `getCaseStudies()` / `getCaseStudy(slug)` with fallback to `placeholderWork`.

- [ ] **Step 4: Same pattern for `/careers/page.tsx`**

Fetch `getActiveJobs()` with fallback to `placeholderJobs`.

- [ ] **Step 5: Run build to verify**

```bash
npm run build
```

Expected: build succeeds; routes compile.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: wire blog, work, careers to Sanity with placeholder fallback"
```

---

## Phase 8: SEO, 404, Sitemap, Analytics

### Task 8.1: Sitemap, robots, 404, Vercel Analytics

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Install analytics**

```bash
npm install @vercel/analytics
```

- [ ] **Step 2: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { getPosts, getCaseStudies } from "@/lib/sanity/queries";

const base = "https://hashtricks.tech";
const staticPaths = ["", "/services", "/about", "/work", "/blog", "/careers", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getPosts().catch(() => [])) as any[];
  const cases = (await getCaseStudies().catch(() => [])) as any[];
  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.publishedAt ?? Date.now()) })),
    ...cases.map((c) => ({ url: `${base}/work/${c.slug}`, lastModified: new Date() })),
  ];
}
```

- [ ] **Step 3: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/studio"] },
    sitemap: "https://hashtricks.tech/sitemap.xml",
  };
}
```

- [ ] **Step 4: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container py-32 text-center">
      <p className="font-mono text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold">Page not found</h1>
      <p className="mt-4 text-neutral/70">That URL doesn't exist — let's get you home.</p>
      <Button asChild className="mt-8 bg-brand-gradient text-primary-fg"><Link href="/">Back to home</Link></Button>
    </div>
  );
}
```

- [ ] **Step 5: Add Analytics to root layout**

Edit `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";
// inside <body>, after {children}:
<Analytics />
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add sitemap, robots, 404, and analytics"
```

---

## Phase 9: Testing & Quality Gates

### Task 9.1: Playwright smoke suite

**Files:**
- Create: `playwright.config.ts`, `tests/e2e/smoke.spec.ts`
- Modify: `package.json`

- [ ] **Step 1: Install Playwright browsers**

```bash
npx playwright install --with-deps chromium
```

- [ ] **Step 2: Create `playwright.config.ts`**

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL: "http://localhost:3000" },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

- [ ] **Step 3: Create `tests/e2e/smoke.spec.ts`**

```ts
import { test, expect } from "@playwright/test";

const routes = ["/", "/services", "/services/custom-software", "/about", "/work", "/blog", "/careers", "/contact"];

for (const route of routes) {
  test(`${route} loads with primary CTA`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(route);
    await expect(page).toHaveTitle(/Hashtricks/);
    await expect(page.getByRole("link", { name: /hashtricks/i }).first()).toBeVisible();
    expect(errors, `console errors on ${route}`).toHaveLength(0);
  });
}
```

- [ ] **Step 4: Add npm script**

Edit `package.json`:

```json
"test:e2e": "playwright test"
```

- [ ] **Step 5: Run tests**

```bash
npm run test:e2e
```

Expected: all 8 route tests pass.

- [ ] **Step 6: Commit**

```bash
git add playwright.config.ts tests/e2e/smoke.spec.ts package.json
git commit -m "test: add Playwright smoke suite"
```

---

## Phase 10: Deploy

### Task 10.1: README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create file**

```md
# Hashtricks Technologies Website

Marketing site for Hashtricks Technologies — Next.js 15, Tailwind v4, Sanity CMS, Resend.

## Local development

1. Copy `.env.example` to `.env.local` and fill in values.
2. `npm install`
3. `npm run dev`
4. Studio: http://localhost:3000/studio

## Scripts

- `dev` — local dev server
- `build` / `start` — production build
- `test` — unit tests (Vitest)
- `test:e2e` — Playwright smoke tests
- `lint` — ESLint

## Deploying

- Vercel. Connect repo, set env vars, deploy.
- Required env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.

## Content ownership

- Static (dev-edited): services, team, values, process — `lib/data/`.
- CMS (non-dev): blog, case studies, careers — Sanity Studio at `/studio`.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README"
```

### Task 10.2: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

Create a new GitHub repo, add as remote, push `main`.

- [ ] **Step 2: Import on Vercel**

Vercel dashboard → Add New → Project → Import the repo → Framework auto-detected (Next.js).

- [ ] **Step 3: Set env vars on Vercel**

Add each value from `.env.example` under Project → Settings → Environment Variables.

- [ ] **Step 4: Verify production**

- Home loads with hero
- `/services/*` loads for all 9 services
- Contact form sends email to `hashtrickstechnologies@gmail.com`
- `/studio` loads the Sanity Studio
- `sitemap.xml` and `robots.txt` load

---

## Post-Launch Placeholders To Replace

- Logo (replace text wordmark)
- About long-form copy and real team member names/bios/photos
- At least 3 real case studies in Sanity
- Real client testimonials in Sanity
- Real client logos in the trust strip
- Calendly (or equivalent) booking link in `company.bookCallUrl`
- First 2–3 blog posts in Sanity
- Real open job postings in Sanity
- Organization JSON-LD (optional SEO polish — add with Next's `Script` component when ready)
