import Link from 'next/link'
import { Star, ExternalLink, CheckCircle2, TrendingUp, Clock } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

const platforms = [
  {
    name: 'Upwork',
    badge: 'Top Rated Plus',
    badgeColor: '#14a800',
    href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/'),
    description: 'Top 3% of all Shopify agencies globally',
    stats: [
      { icon: Star, value: '98%', label: 'Job Success Score' },
      { icon: CheckCircle2, value: '600+', label: 'Projects Completed' },
      { icon: TrendingUp, value: '$500K+', label: 'Total Earned' },
      { icon: Clock, value: '10+ yrs', label: 'Experience' },
    ],
    accent: '#14a800',
    large: true,
  },
  {
    name: 'Shopify Partner',
    badge: 'Verified Partner',
    badgeColor: '#96bf48',
    href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1'),
    description: 'Official Shopify Partner since 2015',
    accent: '#96bf48',
    large: false,
  },
  {
    name: 'DesignRush',
    badge: 'Listed Agency',
    badgeColor: '#6c63ff',
    href: outboundHref('external', 'https://www.designrush.com/agency/profile/miracle-websoft'),
    description: 'Shopify development & e-commerce experts',
    accent: '#6c63ff',
    large: false,
  },
  {
    name: 'Clutch',
    badge: 'Verified Reviews',
    badgeColor: '#e63329',
    href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft'),
    description: 'Client-verified B2B service provider',
    accent: '#e63329',
    large: false,
  },
  {
    name: 'Trustpilot',
    badge: '5★ Reviews',
    badgeColor: '#00b67a',
    href: outboundHref('external', 'https://www.trustpilot.com/review/miraclewebsoft.com'),
    description: 'Verified customer reviews',
    accent: '#00b67a',
    large: false,
  },
  {
    name: 'TechBehemoths',
    badge: 'Verified Agency',
    badgeColor: '#4a9eff',
    href: outboundHref('external', 'https://techbehemoths.com/company/miracle-websoft'),
    description: 'Global IT agency directory',
    accent: '#4a9eff',
    large: false,
  },
]

const socials = [
  { name: 'LinkedIn', href: outboundHref('linkedin', 'https://in.linkedin.com/company/shopify-experts-miracle-websoft'), icon: LinkedInIcon },
  { name: 'Instagram', href: outboundHref('external', 'https://www.instagram.com/miracle_websoft/'), icon: InstagramIcon },
  { name: 'Facebook', href: outboundHref('external', 'https://www.facebook.com/miraclewebsoft/'), icon: FacebookIcon },
  { name: 'X / Twitter', href: outboundHref('external', 'https://x.com/miraclewebsoft'), icon: XIcon },
  { name: 'GitHub', href: outboundHref('external', 'https://github.com/mwg2016'), icon: GitHubIcon },
]

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export default function TrustProfiles() {
  const featured = platforms[0]
  const rest = platforms.slice(1)

  return (
    <section style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-12">
          <p className="mw-eyebrow">Find Us On</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.1 }}>
            Trusted across every<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>major platform.</em>
          </h2>
        </div>

        {/* Upwork featured card */}
        <Link href={featured.href} target="_blank" rel="noopener noreferrer" className="block mb-5 group">
          <div className="mw-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: `radial-gradient(ellipse at top right, ${featured.accent}12, transparent 70%)`, pointerEvents: 'none' }} />
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>Upwork</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: `${featured.accent}22`, color: featured.accent, border: `1px solid ${featured.accent}40` }}>{featured.badge}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 0 }}>{featured.description}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                {featured.stats!.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                        <Icon size={13} style={{ color: featured.accent }} />
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-playfair), Georgia, serif' }}>{stat.value}</span>
                      </div>
                      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, letterSpacing: '0.05em' }}>{stat.label}</p>
                    </div>
                  )
                })}
              </div>
              <ExternalLink size={16} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} className="hidden lg:block group-hover:text-white transition-colors" />
            </div>
          </div>
        </Link>

        {/* Other platforms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {rest.map((p) => (
            <Link key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="mw-card h-full" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', background: `radial-gradient(ellipse at top right, ${p.accent}10, transparent 70%)`, pointerEvents: 'none' }} />
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{p.name}</span>
                  <ExternalLink size={12} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} className="group-hover:text-white transition-colors mt-0.5" />
                </div>
                <span style={{ display: 'inline-block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}35`, marginBottom: '0.6rem' }}>{p.badge}</span>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Social links */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Follow Us</p>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link key={name} href={href} target="_blank" rel="noopener noreferrer"
                className="social-pill flex items-center gap-2"
              >
                <Icon />
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Shopify App Store */}
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.4rem' }}>Shopify App Store</p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Browse our published Shopify apps</p>
            </div>
            <Link href={outboundHref('shopify_apps', 'https://apps.shopify.com/partners/miracle-websoft1')} target="_blank" rel="noopener noreferrer" className="mw-btn-outline" style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.25rem', fontSize: '0.82rem' }}>
              View Our Apps <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
