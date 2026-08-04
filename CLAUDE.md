# Miracle Websoft — miraclewebsoft.com

Next.js 16 App Router · Tailwind CSS v4 · TypeScript · deployed to Cloudflare Workers via `@opennextjs/cloudflare`

## Stack
- `src/app/` — pages (App Router, server components by default)
- `src/components/` — shared components (`'use client'` only where needed for interactivity)
- `public/` — static files (`robots.txt`, `llms.txt`)

## One-time Cloudflare setup (run once per account)
```bash
npx wrangler login
npx wrangler kv namespace create LEADS_KV        # paste the returned id into wrangler.jsonc
npm run cf:typegen                               # regenerates cloudflare-env.d.ts against the real bindings

# Secrets (never commit these — set per environment)
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put ADMIN_SECRET
npx wrangler secret put ADMIN_PASSWORD_HASH
npx wrangler secret put ADMIN_NOTIFY_EMAIL       # inbox that receives lead notifications
npx wrangler secret put RESEND_FROM_EMAIL        # must be on a domain verified in Resend
```

## Deploy
```bash
npm run cf:build     # opennextjs-cloudflare build — bundles the Worker into .open-next/
npm run cf:deploy    # build + wrangler deploy
```
Local dev (`npm run dev`) proxies real KV bindings via miniflare — see `initOpenNextCloudflareForDev()` at the bottom of `next.config.ts`.

## Push to GitHub
```bash
git remote set-url origin https://mwg2016:<TOKEN>@github.com/mwg2016/miracle-websoft.git
git push origin main
git remote set-url origin https://github.com/mwg2016/miracle-websoft.git
```

## Key notes
- Tailwind v4: `@import "tailwindcss"` + `@theme {}` in globals.css — no `tailwind.config`
- This is Next.js 16 — some APIs differ from older versions. Check `node_modules/next/dist/docs/` if unsure.
- Form emails (`/api/contact`, `/api/careers`, `/api/referral`, `/api/whitelabel`) send via Resend (`src/lib/email.ts`), not SMTP — Cloudflare Workers restricts raw TCP sockets, which nodemailer needed.
- `images.unoptimized: true` in `next.config.ts` — the Workers adapter doesn't run Next's Node-based image optimizer. Revisit with a Cloudflare Images loader if optimization becomes worth the setup.

## Admin lead/outbound storage
- Leads and outbound-click records live in the `LEADS_KV` KV namespace, keyed `lead:<isoTimestamp>:<id>` / `outbound:<isoTimestamp>:<id>` (`src/lib/admin/store.ts`) — the timestamp prefix keeps `list()` ordering chronological with no separate index to keep in sync.
- Resumes are never stored (no R2/database) — the careers form only emails the resume as an attachment on the notification sent to `ADMIN_NOTIFY_EMAIL` (`src/app/api/careers/route.ts`). The lead record just keeps the filename for reference.
- The admin login rate limiter is also KV-backed (`ratelimit:admin-login:<ip>` keys, `src/lib/admin/auth.ts`) — a Worker has no shared process memory across isolates, so the old in-memory `Map` would have silently stopped limiting anything.
- Local dev and production share the same KV namespace by default (unlike the old `data/dev` vs `data/prod` filesystem split) — if you want isolation, create a second KV namespace and point `wrangler.jsonc`'s dev environment at it.
