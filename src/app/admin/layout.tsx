import type { Metadata } from 'next'
import Link from 'next/link'
import LogoutButton from './LogoutButton'

export const metadata: Metadata = {
  title: 'Admin · Miracle Websoft',
  robots: { index: false, follow: false },
}

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/leads', label: 'Leads' },
  { href: '/admin/outbound', label: 'Outbound clicks' },
  { href: '/admin/attribution', label: 'Attribution' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      <header style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/admin" style={{ textDecoration: 'none', color: '#fff', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Miracle<span style={{ color: '#6C63FF' }}>Websoft</span></span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', padding: '2px 8px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 9999 }}>
              Admin
            </span>
          </Link>
          <nav style={{ display: 'flex', gap: '0.25rem', overflowX: 'auto' }}>
            {NAV.map(item => (
              <Link key={item.href} href={item.href} style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
                borderRadius: 8,
                whiteSpace: 'nowrap',
              }} className="mw-admin-nav">
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link href="/admin/export" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }} className="hover:text-white">
              Export
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        {children}
      </main>
      <style>{`
        .mw-admin-nav:hover { background: rgba(255,255,255,0.05); color: #fff; }
      `}</style>
    </div>
  )
}
