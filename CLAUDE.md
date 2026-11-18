# Miracle Websoft — miraclewebsoft.com

Next.js 16 App Router · Tailwind CSS v4 · TypeScript · deployed to Cloudflare Workers via `@opennextjs/cloudflare`

## Stack
- `src/app/` — pages (App Router, server components by default)
- `src/components/` — shared components (`'use client'` only where needed for interactivity)
- `public/` — static files (`robots.txt`, `llms.txt`)

## One-time Cloudflare setup (run once per account)
```bash
npx wrangler login

# Secrets (never commit these — set per environment)
npx wrangler secret put BREVO_API_KEY
npx wrangler secret put ADMIN_SECRET
npx wrangler secret put ADMIN_PASSWORD_HASH
npx wrangler secret put ADMIN_NOTIFY_EMAIL       # inbox that receives lead notifications
npx wrangler secret put BREVO_FROM_EMAIL         # must be a verified sender in Brevo
```
One D1 database for customer reviews (the only persisted data):
```bash
npx wrangler d1 create mw-reviews                         # paste database_id into wrangler.jsonc
npx wrangler d1 migrations apply mw-reviews --remote      # creates the reviews table
npx wrangler d1 migrations apply mw-reviews --local       # same, for `npm run dev`
```
Leads are still email-only — see "No database for leads, by design" below.

## Deploy
```bash
npm run cf:build     # opennextjs-cloudflare build — bundles the Worker into .open-next/
npm run cf:deploy    # build + wrangler deploy
```

## Push to GitHub
```bash
git remote set-url origin https://mwg2016:<TOKEN>@github.com/mwg2016/miracle-websoft-cloudflare.git
git push origin main
git remote set-url origin https://github.com/mwg2016/miracle-websoft-cloudflare.git
```

## Key notes
- Tailwind v4: `@import "tailwindcss"` + `@theme {}` in globals.css — no `tailwind.config`
- This is Next.js 16 — some APIs differ from older versions. Check `node_modules/next/dist/docs/` if unsure.
- Form emails (`/api/contact`, `/api/careers`, `/api/referral`, `/api/whitelabel`) send via Brevo's HTTP API (`src/lib/email.ts`), not SMTP — Cloudflare Workers restricts raw TCP sockets, which nodemailer needed.
- `images.unoptimized: true` in `next.config.ts` — the Workers adapter doesn't run Next's Node-based image optimizer. Revisit with a Cloudflare Images loader if optimization becomes worth the setup.

## Full stack / business-software services
- Data in `src/data/dev-services.ts`, rendered at `/services/<slug>` by `src/app/services/[slug]/page.tsx` (same `ServiceLandingPage` template as AI services). Existing static folders under `/services` take precedence, so adding a slug never changes an existing URL.
- `caseStudy` is optional — only fill it from a real project in `src/data/jobs.ts`; never invent client results.
- Don't delete or rename existing URLs; hide pages from nav instead if they're no longer promoted.

## Reviews (D1)
- Submit at `/reviews/write` → `POST /api/reviews` stores it as `pending` in D1 (`REVIEWS_DB`, schema in `migrations/`) and emails `ADMIN_NOTIFY_EMAIL`.
- Moderate at `/admin/reviews` (approve / reject / unpublish / delete / public reply) via `/api/admin/reviews/[id]`.
- Public `/reviews` and `/reviews/[slug]` show approved D1 reviews merged with the Upwork reviews from `src/data/jobs.ts` (`src/lib/reviews/upwork.ts`, slugs `upwork-<jobId>`). Each page emits Review JSON-LD tied to `#organization` (`src/lib/reviews/schema.ts`).
- If the D1 binding is missing, reads fall back to Upwork-only instead of crashing.
- `/share` lists services with share buttons + captions (`src/data/share.ts`).

## No database for leads, by design
- `appendLead`/`appendOutbound` (`src/lib/admin/store.ts`) are intentionally no-ops, and `readLeads`/`readOutbound` always return `[]` — there is no KV/R2/D1 behind them. Every form submission is only ever delivered as an email via Brevo (`src/lib/email.ts`); nothing is persisted server-side.
- The admin dashboard (`src/app/admin/**` — leads, outbound, attribution, export) still renders but will always show empty, since it reads from the same no-op store. It's dead UI kept around in case a real store gets wired back in later.
- Resumes are never stored either — the careers form only emails the resume as an attachment on the notification sent to `ADMIN_NOTIFY_EMAIL` (`src/app/api/careers/route.ts`).
- The admin login rate limiter (`src/lib/admin/auth.ts`) is an in-memory `Map` — on Workers this only limits within a single isolate and resets whenever Cloudflare recycles it. Not a strong guarantee; `ADMIN_PASSWORD_HASH` is the real gate.
- If real lead storage is wanted later, re-add a KV namespace (or D1) binding in `wrangler.jsonc` and rewire `store.ts` — the function signatures were kept stable for exactly that.
