# Hashtricks Technologies — Website Design Spec

**Date:** 2026-04-17
**Status:** Approved for implementation

## 1. Purpose & Goals

Marketing website for Hashtricks Technologies, a 10-person India-based custom software and AI systems firm founded in 2024. Primary goal: generate qualified leads from mid-sized companies. Primary CTA: book a discovery call. Secondary CTA: WhatsApp chat.

**Tagline:** *"We build custom software and AI-powered systems that reduce manual work and help growing businesses operate smarter."*

## 2. Audience

- **Primary:** Mid-sized company decision-makers evaluating technology partners for custom software and AI initiatives.
- **Secondary:** Candidates (careers page), existing clients (case studies).

## 3. Site Structure

```
/                              Home
/services                      Services overview
/services/custom-software
/services/web-development
/services/mobile-development
/services/ai-ml-solutions
/services/ai-automation
/services/cloud-devops
/services/saas-development
/services/ui-ux-design
/services/consulting
/about                         Company story, mission, team
/work                          Case studies listing
/work/[slug]                   Individual case study
/blog                          Blog listing
/blog/[slug]                   Individual post
/careers                       Open positions
/contact                       Contact form + book-a-call + WhatsApp
/studio                        Sanity Studio (CMS admin)
```

Every page has a sticky header (wordmark, nav, "Book a Call" CTA) and a footer (links, social, contact, newsletter signup).

## 4. Brand & Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#2563EB` | CTAs, links, highlights |
| `--secondary` | `#111827` | Main background (dark theme) |
| `--accent` | `#22D3EE` | Gradient accents, hover, glow |
| `--neutral` | `#F9FAFB` | Primary text on dark bg |

Supporting gray scale derived from charcoal for borders, muted text, surfaces.

### Theme

Dark-first. No light-mode toggle in v1.

### Typography

- **Headings:** Geist or Inter (variable, tight tracking, large hero sizes)
- **Body:** Inter
- **Mono:** JetBrains Mono (code/technical touches)

### Wordmark

Text-based: **`#` Hashtricks** (hash glyph plays on the name). Replaces logo until logo is ready.

### Signature Visual Elements

- Animated gradient mesh in hero background (blue → cyan)
- `#` glyph used as decorative motif (dividers, bullets)
- Card hover: cyan border glow
- Subtle grain/noise texture overlay for depth

### Component Kit

Tailwind + shadcn/ui primitives (Button, Card, Dialog, Input, Sheet, Tabs, Accordion). Framer Motion for scroll reveal, hover, and page-transition animations.

## 5. Page Content Outlines

### Home (`/`)

1. Hero — tagline headline, sub-headline, dual CTA (Book a Call / WhatsApp), animated gradient background
2. Client logos strip (placeholders)
3. Services grid — 9 cards with icons, link to sub-pages
4. Why Hashtricks — 4 value props (AI-first, senior team, fast delivery, outcome-driven)
5. Featured case studies — 3 cards
6. Process — 4-step visual (Discovery → Design → Build → Scale)
7. Testimonials carousel
8. CTA band — "Ready to build?" + Book a Call / WhatsApp
9. Footer

### Service sub-page (`/services/[slug]`)

Template: hero (service title) · What we do · Tech stack · Who it's for · Relevant case studies · CTA · FAQs.

### About (`/about`)

Mission · Story (founded 2024, India) · Values · Team grid (10 members, placeholder photos) · Stats · CTA.

### Work (`/work` + `/work/[slug]`)

- Listing: filterable grid (by industry/service)
- Detail: cover · client · industry · challenge · solution · tech stack · outcomes · testimonial · next case study

### Blog (`/blog` + `/blog/[slug]`)

- Listing: featured post + tag-filterable grid
- Detail: cover · title · author · date · reading time · body · related posts

### Careers (`/careers`)

Intro · Culture · Benefits · Open positions list → apply via email.

### Contact (`/contact`)

Form (name, email, company, service interested in, project brief) · Book a Call embed (Calendly placeholder) · WhatsApp button · Email · Address · Social links.

## 6. Services (content)

Nine services, each with its own sub-page from the same template:

1. Custom Software Development
2. Web Application Development
3. Mobile App Development
4. AI / ML Solutions (LLM apps, agents, automation)
5. AI-Powered Process Automation
6. Cloud & DevOps
7. SaaS Product Development
8. UI/UX Design
9. Consulting / Tech Advisory

## 7. Company Details (footer / about)

- **Founded:** 2024
- **Location:** India
- **Team size:** 10
- **Email:** hashtrickstechnologies@gmail.com
- **WhatsApp:** +91 96775 61597
- **LinkedIn:** https://www.linkedin.com/company/114703961
- **Instagram:** https://www.instagram.com/hashtricks_technologies/

## 8. Tech Architecture

### Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- Sanity v3 (headless CMS)
- react-hook-form + zod (form validation)
- Resend (contact form → email delivery)
- next-sitemap + next-seo
- Vercel (hosting) + Vercel Analytics

### Folder Structure

```
hashtricks-website/
├── app/
│   ├── (marketing)/
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
│   ├── studio/[[...tool]]/page.tsx   # Sanity Studio embed
│   ├── api/contact/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                # shadcn primitives
│   ├── layout/            # Header, Footer, Nav, MobileMenu
│   ├── sections/          # Hero, ServicesGrid, Testimonials, Process, CTA
│   └── brand/             # Wordmark, GradientMesh, HashGlyph
├── lib/
│   ├── sanity/            # client, queries, image url builder
│   ├── data/              # services, team, values, process, testimonials
│   └── utils.ts
├── sanity/
│   └── schemas/           # post, caseStudy, jobPosting, author, category
├── public/
└── ...config
```

### Content Ownership

| Content | Source | Edited by |
|---|---|---|
| Services (copy, features, tech) | `lib/data/services.ts` | Developer |
| Team, values, process | `lib/data/` | Developer |
| Blog posts | Sanity | Non-dev via Studio |
| Case studies | Sanity | Non-dev via Studio |
| Job postings | Sanity | Non-dev via Studio |
| Testimonials | Sanity (Phase 2); static in v1 | Non-dev once migrated |

### Contact Form Flow

`<form>` → `POST /api/contact` → zod validate → Resend email to `hashtrickstechnologies@gmail.com` → success toast. Rate-limited by IP (simple in-memory or Upstash if deployed). Honeypot field for bot protection.

### SEO

- Per-page metadata via Next `generateMetadata`
- Open Graph + Twitter card images (static + dynamic for blog/case studies)
- `sitemap.xml` and `robots.txt` auto-generated
- JSON-LD: Organization on home, BlogPosting on blog posts, BreadcrumbList where relevant

## 9. Testing

- **Vitest** — utilities and form validation (zod schemas)
- **Playwright** — one smoke test per key route (loads, no console errors, primary CTA visible)
- **Lighthouse CI** target: performance ≥ 90, accessibility ≥ 95, best practices ≥ 95, SEO ≥ 95

## 10. Deployment

- Vercel, auto-deploy from `main`
- Sanity Studio embedded at `/studio`
- Environment variables: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`

## 11. Out of Scope (v1)

- Light mode toggle
- Multi-language (i18n)
- E-commerce / payments
- User authentication
- Newsletter double-opt-in (simple subscribe in v1)
- Advanced blog features (comments, search beyond tags)
- 3D / heavy motion (no react-three-fiber)

## 12. Placeholders to Replace Post-Launch

- Logo (currently text wordmark)
- About page long-form copy
- Case studies (2–3 real ones)
- Client testimonials
- Team bios and photos
- Client logos for trust strip
- Calendly (or chosen scheduling tool) booking link
