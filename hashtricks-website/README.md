# Hashtricks Technologies Website

Marketing site for Hashtricks Technologies — Next.js 16 App Router, Tailwind CSS v4, Framer Motion, Resend.

## Local development

```bash
cp .env.example .env.local      # add RESEND_API_KEY if testing the contact form
npm install
npm run dev                     # http://localhost:3000
```

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — brand tokens in `app/globals.css` via `@theme`
- **Framer Motion** — hero animation
- **shadcn-style UI primitives** — `components/ui/*`
- **react-hook-form + zod** — contact form validation
- **Resend** — contact form → email (requires `RESEND_API_KEY`)

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Content ownership

| Content | Source |
| --- | --- |
| Company info, tagline, socials | `lib/data/company.ts` |
| Navigation | `lib/data/nav.ts` |
| Services (9) | `lib/data/services.ts` |
| Team | `lib/data/team.ts` |
| Values / process / testimonials | `lib/data/{values,process,testimonials}.ts` |
| Case studies (placeholder) | `lib/data/placeholder-work.ts` |
| Blog posts (placeholder) | `lib/data/placeholder-blog.ts` |
| Job postings (placeholder) | `lib/data/placeholder-jobs.ts` |

All content is code-managed for v1. A headless CMS (Sanity) is planned — see `docs/superpowers/plans/` for the roadmap.

## Environment variables

```
RESEND_API_KEY=         # from https://resend.com — required for contact form delivery
CONTACT_TO_EMAIL=       # defaults to hashtrickstechnologies@gmail.com
```

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo on Vercel — framework auto-detects as Next.js.
3. Set env vars in Project → Settings → Environment Variables.
4. Deploy. Sitemap and robots are auto-generated at `/sitemap.xml` and `/robots.txt`.

## Placeholders to replace before launch

- Logo (text wordmark is in place)
- About long-form copy and real team bios/photos
- Real case studies in `lib/data/placeholder-work.ts` (or migrate to Sanity)
- Real testimonials in `lib/data/testimonials.ts`
- Client logos in the trust strip (`components/sections/client-strip.tsx`)
- Calendly booking link in `lib/data/company.ts` → `bookCallUrl`
