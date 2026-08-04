// Hand-maintained until `npm run cf:typegen` (wrangler types) regenerates this
// from wrangler.jsonc against a real Cloudflare account.
/// <reference types="@cloudflare/workers-types" />
interface CloudflareEnv {
  LEADS_KV: KVNamespace
  RESUMES_R2: R2Bucket
  ASSETS: Fetcher
  RESEND_API_KEY?: string
  RESEND_FROM_EMAIL?: string
  ADMIN_NOTIFY_EMAIL?: string
  ADMIN_SECRET?: string
  ADMIN_PASSWORD_HASH?: string
}
