# Ina Conteh — Portfolio

Developer · Designer · Motion. Built to the [system plan](#system-plan-map): a fast, statically generated portfolio that turns visitors into enquiries.

**Stack:** Next.js 15 (App Router, TypeScript) · Tailwind CSS 4 + design tokens · Motion for React · MDX case studies validated with Zod · Resend (contact) · Vercel Analytics.

## Run it

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint && npm run typecheck
```

## Content

- **Case studies:** one MDX file per project in `content/projects/`. Frontmatter is validated at build time (`lib/content.ts`), so a typo fails the build instead of shipping. Body sections: `## Problem`, `## Process`, `## Outcome`.
  - `tags`: any of `code`, `design`, `motion`; the first tag is the project's headline discipline.
  - `featured: true` puts a project in the home-page hero cards (keep it to 3).
  - `role` and `year` are optional and appear in the facts row when set.
- **Profile, skills, tools, timeline:** `lib/site.ts`.
- **CV:** `public/Ina.pdf`.
- **Media:** `public/`. Videos are H.264 with `+faststart`, and each has a poster frame (used when reduced motion is on).

## Contact form

`POST /api/contact` validates with Zod, drops honeypot submissions, rate-limits to 5 per IP per hour, verifies Cloudflare Turnstile when it's configured, and sends via Resend.

| Env var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Enables Resend delivery. **Without it the form falls back to the existing EmailJS account in the browser.** |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Recipient and sender (sender must be on a domain verified in Resend). |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Turns on the Turnstile check when both are set. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for the sitemap, OG tags and structured data. |

## System plan map

| Req | Where |
| --- | --- |
| FR-1 Home: intro loop, pitch, featured work | `app/page.tsx` |
| FR-2 Work filter kept in URL (`/work?tag=`) | `app/work/page.tsx`, `components/WorkFilter.tsx` |
| FR-3 Case studies | `app/work/[slug]/page.tsx`, `content/projects/*.mdx` |
| FR-4 About, skills, CV | `app/about/page.tsx` (CV also in the footer and mobile menu on every page) |
| FR-5 Contact | `components/ContactForm.tsx`, `app/api/contact/route.ts` |
| FR-6 Meta + social image | per-page `metadata`, `app/opengraph-image.jpg` |
| FR-7 Reduced motion | `MotionConfig reducedMotion="user"`, CSS media query, `AutoVideo` poster fallback |
| FR-8 Lab | `app/lab/page.tsx` |
| NFR-3 SEO | static HTML, `app/sitemap.ts`, `app/robots.ts`, Person JSON-LD in `app/layout.tsx` |
| NFR-4 Privacy | Vercel Analytics (cookieless), strict CSP in `next.config.ts` |
