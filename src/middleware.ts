import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_COOKIE_NAME, verifySession } from '@/lib/admin/cookie'

// Forwards x-pathname so the root layout can hide public chrome on /admin.
function withPathname(req: NextRequest) {
  const headers = new Headers(req.headers)
  headers.set('x-pathname', req.nextUrl.pathname)
  return NextResponse.next({ request: { headers } })
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isAdminArea = pathname.startsWith('/admin') || pathname.startsWith('/api/admin')

  if (!isAdminArea) {
    return withPathname(req)
  }

  // Login & logout endpoints are public.
  if (pathname === '/admin/login' || pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
    return withPathname(req)
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
  return withPathname(req)
}

export const config = {
  // Match everything except Next internals + static files. We set x-pathname
  // on every request and only auth-gate the admin paths above.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|icon.svg|apple-icon.png).*)'],
}
