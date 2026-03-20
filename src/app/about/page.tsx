import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Miracle Websoft — Shopify Agency for Fashion Brands',
  description: 'Miracle Websoft is a Top Rated Plus Shopify agency on Upwork with 600+ projects and 98% job success. Based in India, serving USA, UK and Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/about' },
}

const values = [
  'Fashion-only focus — we only work with clothing and apparel brands',
  'Performance first — every store targets sub-1.5s mobile load times',
  'Conversion built in — CRO thinking in every layout decision',
  'Direct communication — you work with the people building your store',
  'Zero-risk migrations — no data loss, no SEO traffic drop, ever',
]

const stats = [
  { value: '600+', label: 'Projects Completed' },
  { value: '98%', label: 'Upwork Job Success' },
  { value: '10+', label: 'Years Experience' },
  { value: '$500K+', label: 'Earned on Upwork' },
]

const profiles = [
  {
    name: 'Upwork — Top Rated Plus',
    desc: 'Top 3% globally · 600+ jobs · 98% JSS',
    href: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/',
    accent: '#14a800',
  },
  {
    name: 'Shopify Partner Directory',
    desc: 'Verified Shopify Partner since 2015',
    href: 'https://www.shopify.com/partners/directory/partner/miracle-websoft1',
    accent: '#96bf48',
  },
  {
    name: 'Clutch',
    desc: 'B2B verified client reviews',
    href: 'https://clutch.co/profile/miracle-websoft',
    accent: '#e63329',
  },
  {
    name: 'DesignRush',
    desc: 'Top Shopify development agency',
    href: 'https://www.designrush.com/agency/profile/miracle-websoft',
    accent: '#6c63ff',
  },
  {
    name: 'Trustpilot',
    desc: '5-star verified customer reviews',
    href: 'https://www.trustpilot.com/review/miraclewebsoft.com',
    accent: '#00b67a',
  },
  {
    name: 'Shopify App Store',
    desc: 'Browse our published Shopify apps',
    href: 'https://apps.shopify.com/partners/miracle-websoft1',
    accent: '#96bf48',
  },
]

const socials = [
  { name: 'LinkedIn', href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft' },
  { name: 'Instagram', href: 'https://www.instagram.com/miracle_websoft/' },
  { name: 'Facebook', href: 'https://www.facebook.com/miraclewebsoft/' },
  { name: 'X / Twitter', href: 'https://x.com/miraclewebsoft' },
  { name: 'GitHub', href: 'https://github.com/mwg2016' },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'About' }]} /></div>
        <div className="max-w-3xl">
          <span className="mw-eyebrow">About Us</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>
            A Shopify agency built exclusively<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>for fashion brands.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
            Miracle Websoft is a Shopify development agency based in India, serving clothing, fashion and apparel brands in the USA, UK and Australia. We do one thing and we do it exceptionally well — Shopify development for fashion.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
            Founded in 2015 by Karam Singh, a Shopify Plus expert ranked in the Top 3% globally on Upwork, we have completed over 600 projects with a 98% job success rate. Our team of 14 specialists focuses exclusively on fashion and apparel — bringing deep industry knowledge to every build.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map(s => (
            <div key={s.label} className="mw-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Values */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>What we stand for</h2>
            <ul className="flex flex-col gap-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem' }}>Founder</h2>
            <div className="flex items-start gap-4 mb-4">
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(108,99,255,0.2)', border: '1px solid rgba(108,99,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>K</span>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>Karam Singh</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Founder & Shopify Plus Expert</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(20,168,0,0.15)', color: '#14a800', border: '1px solid rgba(20,168,0,0.3)' }}>
                <Star size={10} /> Top Rated Plus on Upwork
              </span>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)', border: '1px solid rgba(108,99,255,0.3)' }}>
                Shopify Partner
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <a href="https://www.upwork.com/freelancers/~0108a0862ff3e2f2de" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}
                className="hover:text-white transition-colors">
                <ExternalLink size={12} /> Upwork Profile
              </a>
              <a href="https://www.linkedin.com/in/ecommerce-experts/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}
                className="hover:text-white transition-colors">
                <ExternalLink size={12} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Platform profiles */}
        <div className="mb-12">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>Find us on</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {profiles.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between mw-card"
                style={{ padding: '1.25rem 1.5rem' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{p.desc}</div>
                </div>
                <ExternalLink size={13} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} className="group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Social */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>Follow us</h2>
          <div className="flex flex-wrap gap-2">
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ padding: '0.5rem 1.1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 500 }}
                className="hover:text-white hover:border-white/30 transition-all">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Work with us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
