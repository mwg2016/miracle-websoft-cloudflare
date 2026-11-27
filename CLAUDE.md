# Miracle Websoft — miraclewebsoft.com

Next.js 16 App Router · Tailwind CSS v4 · TypeScript · self-hosted on a CloudPanel VPS (Node 24 + PM2, `output: 'standalone'`)

## Stack
- `src/app/` — pages (App Router, server components by default)
- `src/components/` — shared components (`'use client'` only where needed for interactivity)
- `public/` — static files (`robots.txt`, `llms.txt`)

## Hosting (VPS)
- Live folder: `/home/miraclewebsoft/htdocs/miraclewebsoft.com` (a git clone of `main`).
- PM2 runs `.next/standalone/server.js` via `ecosystem.config.js` on `127.0.0.1:3008`; CloudPanel's nginx (Node.js site, app port 3008) terminates SSL and proxies to it.
- Secrets live in `.env.local` in the live folder (never committed); `ecosystem.config.js` loads them into PM2:
  `BREVO_API_KEY`, `BREVO_FROM_EMAIL` (verified Brevo sender), `ADMIN_NOTIFY_EMAIL` (lead inbox), `ADMIN_SECRET` (random string, signs admin cookies), `ADMIN_PASSWORD_HASH` (`salt:hash`, see `src/lib/admin/auth.ts`).
  After changing `.env.local`: `pm2 reload ecosystem.config.js --update-env`.

## Deploy
Pushing to `main` runs `.github/workflows/deploy.yml` (needs repo secrets `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`). Manual equivalent, in the live folder:
```bash
git pull origin main
npm ci
npm run build
rm -rf .next/standalone/public .next/standalone/.next/static
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
pm2 startOrReload ecosystem.config.js --update-env && pm2 save
```

## Git workflow and deployment safety
- Use configured SSH or a credential helper; never place tokens in remote URLs or logs. Keep the existing remote configuration unless authorized.
- Pushing to `main` triggers production deployment. Do not push to main, run live deploy commands or change hosting settings without explicit approval. Use a review branch and small commits.
- The manual deployment commands above are reference only; run them only in the verified live folder with approval and a rollback plan.

## Key notes
- Tailwind v4: `@import "tailwindcss"` + `@theme {}` in globals.css — no `tailwind.config`
- This is Next.js 16 — some APIs differ from older versions. Check `node_modules/next/dist/docs/` if unsure.
- Form emails (`/api/contact`, `/api/careers`, `/api/referral`, `/api/whitelabel`) send via Brevo's HTTP API (`src/lib/email.ts`), not SMTP.
- `images.unoptimized: true` in `next.config.ts` — originals are served as-is (left over from the Workers build; could be switched to Next's built-in optimizer now that this runs on Node).

## Legacy full stack / business-software services
- Data in `src/data/dev-services.ts`, rendered at `/services/<slug>` by `src/app/services/[slug]/page.tsx` (same `ServiceLandingPage` template as AI services). Existing static folders under `/services` take precedence, so adding a slug never changes an existing URL.
- `caseStudy` is optional — only fill it from a real project in `src/data/jobs.ts`; never invent client results.
- Shopify is the current primary positioning. Preserve legacy URLs by default; remove them from promotional navigation where approved. Any merge, redirect, noindex or deletion needs traffic/backlink evidence and explicit approval.

## Reviews
- Public `/reviews` and `/reviews/[slug]` show the Upwork reviews from `src/data/jobs.ts` (`src/lib/reviews/upwork.ts`, slugs `upwork-<jobId>`), with Review JSON-LD tied to `#organization` (`src/lib/reviews/schema.ts`).
- On the VPS there is no review database: `getDb()` in `src/lib/reviews/db.ts` returns `null`, so `/reviews/write` submissions fail and `/admin/reviews` shows a "not configured" notice. The "Write a review" links are hidden with CSS at the end of `globals.css`. The D1-era schema is kept in `migrations/` in case storage is re-added (e.g. SQLite).
- `/share` lists services with share buttons + captions (`src/data/share.ts`).

## No database for leads, by design
- `appendLead`/`appendOutbound` (`src/lib/admin/store.ts`) are intentionally no-ops, and `readLeads`/`readOutbound` always return `[]` — there is no database behind them. Every form submission is only ever delivered as an email via Brevo (`src/lib/email.ts`); nothing is persisted server-side.
- The admin dashboard (`src/app/admin/**` — leads, outbound, attribution, export) still renders but will always show empty, since it reads from the same no-op store. It's dead UI kept around in case a real store gets wired back in later.
- Resumes are never stored either — the careers form only emails the resume as an attachment on the notification sent to `ADMIN_NOTIFY_EMAIL` (`src/app/api/careers/route.ts`).
- The admin login rate limiter (`src/lib/admin/auth.ts`) is an in-memory `Map` — it resets whenever PM2 restarts the app. `ADMIN_PASSWORD_HASH` is the real gate.
- If real lead storage is wanted later, wire a database (e.g. SQLite) into `store.ts` — the function signatures were kept stable for exactly that.

## AI search and SEO work
- Read `docs/MIRACLE-WEBSOFT-AI-SEARCH-PLAYBOOK.md` before any SEO, GEO, AEO or content task. It is the single strategy, prompt library and SEO progress record.
- Start with Prompt 00 (audit only); execute only the next explicitly approved phase. Keep Shopify as the primary business identity. Preserve working routes and verify all claims. Never guarantee AI recommendations.
- Review the completed metadata history in the playbook before touching titles/descriptions. Do not repeat previously completed work without evidence.
- Use existing job data and authorized records for case studies; never invent client outcomes. Preserve the email-only lead architecture; analytics changes must not silently introduce a database or capture personal data.
- Run relevant tests and record actual outcomes, blockers and rollback steps in the playbook. Obtain approval before publishing or deploying.
