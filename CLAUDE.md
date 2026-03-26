# Miracle Websoft — miraclewebsoft.com

Next.js 16 App Router · Tailwind CSS v4 · TypeScript · `output: standalone` · PM2 on port 3200

## Stack
- `src/app/` — pages (App Router, server components by default)
- `src/components/` — shared components (`'use client'` only where needed for interactivity)
- `public/` — static files (`robots.txt`, `llms.txt`)

## Deploy
```bash
npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
pm2 restart miraclewebsoft
# If process doesn't exist yet:
# PORT=3200 pm2 start .next/standalone/server.js --name miraclewebsoft
```

## Push to GitHub
```bash
git remote set-url origin https://mwg2016:<TOKEN>@github.com/mwg2016/miracle-websoft.git
git push origin main
git remote set-url origin https://github.com/mwg2016/miracle-websoft.git
```

## Key notes
- Tailwind v4: `@import "tailwindcss"` + `@theme {}` in globals.css — no `tailwind.config`
- This is Next.js 16 — some APIs differ from older versions. Check `node_modules/next/dist/docs/` if unsure.
- Contact form submissions go to `/api/contact` → Web3Forms. Set `WEB3FORMS_KEY` env var to activate email delivery.
