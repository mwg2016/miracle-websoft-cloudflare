import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_COOKIE_NAME, verifySession } from '@/lib/admin/cookie'

function generateNonce() {
  const arr = new Uint8Array(16)
  crypto.getRandomValues(arr)
  return btoa(String.fromCharCode(...arr))
}

function buildCsp(nonce: string) {
  return [
    "default-src 'self'",
    // 'strict-dynamic' lets nonce'd scripts load further scripts; modern browsers
    // ignore the host-source list when strict-dynamic is present, older ones use it.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' https: data:",
    "connect-src 'self' https://www.google.com https://www.googleadservices.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://www.googletagmanager.com https://*.googletagmanager.com https://*.facebook.com https://*.facebook.net https://*.clarity.ms https://c.bing.com",
    "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://td.doubleclick.net https://*.facebook.com",
    "media-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "require-trusted-types-for 'script'",
    "trusted-types * 'allow-duplicates'",
    "upgrade-insecure-requests",
  ].join('; ')
}

// Forwards x-pathname (so layout can hide chrome on /admin) and x-nonce (so
// layout can stamp the per-request nonce on every inline / external script).
// Forwarding Content-Security-Policy as a request header tells Next.js to
// also stamp its own framework scripts with the same nonce.
function withRequestHeaders(req: NextRequest, nonce: string, csp: string) {
  const headers = new Headers(req.headers)
  headers.set('x-pathname', req.nextUrl.pathname)
  headers.set('x-nonce', nonce)
  headers.set('Content-Security-Policy', csp)
  return NextResponse.next({ request: { headers } })
}

function applySecurityHeaders(response: NextResponse, csp: string) {
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const nonce = generateNonce()
  const csp = buildCsp(nonce)

  const passThrough = () => applySecurityHeaders(withRequestHeaders(req, nonce, csp), csp)

  const isAdminArea = pathname.startsWith('/admin') || pathname.startsWith('/api/admin')
  if (!isAdminArea) {
    return passThrough()
  }

  // Login & logout endpoints are public.
  if (pathname === '/admin/login' || pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
    return passThrough()
  }

  const secret = process.env.ADMIN_SECRET
  if (!secret) {
    return new NextResponse('Admin disabled (ADMIN_SECRET not set)', { status: 503 })
  }

  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value
  const ok = await verifySession(token, secret)
  if (!ok) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
    }
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }
  return passThrough()
}

export const config = {
  // Match everything except Next internals + static files. We set x-pathname
  // on every request and only auth-gate the admin paths above.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|icon.svg|apple-icon.png).*)'],
}
