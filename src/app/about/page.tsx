import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Star, Award } from 'lucide-react'
import TrustProfiles from '@/components/home/TrustProfiles'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'About Miracle Websoft — Shopify Agency for Fashion Brands',
  description: 'Miracle Websoft is a Top Rated Plus Shopify agency on Upwork with 600+ projects and 98% job success. Based in India, serving USA, UK and Australia since 2015.',
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
  { value: '16', label: 'Team Members' },
]

const certifications = [
  { name: 'Shopify Verified Partner', year: '2024', issuer: 'Shopify' },
  { name: 'Shopify Foundations Certified', year: '2023', issuer: 'Shopify' },
  { name: 'Upwork Top Rated Plus', year: '2020', issuer: 'Upwork' },
]

const testimonials = [
  {
    quote: 'I am happy to recommend Karam Singh, who runs a Shopify agency and is an expert Shopify developer. He has strong knowledge of Shopify development and always delivers quality work.',
    name: 'Satinder Singh',
    source: 'LinkedIn Recommendation',
  },
  {
    quote: 'Karam helped me out tremendously by recommending and installing a new theme and main page layout for my site. Very professional and responsive.',
    name: 'Susan D.',
    source: 'LinkedIn Recommendation',
  },
]


const jsonLd = renderJsonLd([
  webPage({
    name: 'About Miracle Websoft — Shopify agency for fashion brands',
    description:
      'Top Rated Plus Shopify agency on Upwork — 600+ projects, 98% job success, a 16-person team serving USA, UK and Australia since 2015.',
    url: 'https://miraclewebsoft.com/about',
    type: 'AboutPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]),
])

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container" style={{ paddingBottom: '5rem' }}>
        <div className="mb-8"><Breadcrumb items={[{ label: 'About' }]} /></div>

        {/* Hero */}
        <div className="max-w-3xl mb-14">
          <span className="mw-eyebrow">About Us</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>
            A Shopify agency built exclusively<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>for fashion brands.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>
            Miracle Websoft is a Shopify development agency founded in 2015 by Karam Singh Mehra, based in Chandigarh, India. We serve clothing, fashion and apparel brands across the USA, UK and Australia — and we do one thing exceptionally well.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontWeight: 300 }}>
            600+ Shopify projects. 98% job success on Upwork. Top Rated Plus status (top 3% globally). A team of 16 specialists who have worked with brands across every fashion vertical — from DTC activewear startups to luxury occasion wear labels.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map(s => (
            <div key={s.label} className="mw-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>What we stand for</h2>
            <ul className="flex flex-col gap-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>Certifications</h2>
            <div className="flex flex-col gap-3">
              {certifications.map(c => (
                <div key={c.name} className="flex items-start gap-3">
                  <Award size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff' }}>{c.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{c.issuer} · {c.year}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>Languages spoken</h3>
              <div className="flex gap-2 flex-wrap">
                {['English', 'Hindi', 'Punjabi'].map(l => (
                  <span key={l} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="mb-14">
          <p className="mw-eyebrow">The Founder</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '1.5rem' }}>Meet the person<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>behind the work.</em></h2>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem', maxWidth: '560px' }}>
            <div className="flex items-start gap-4">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.3rem' }}>K</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Karam Singh Mehra</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>Founder & Lead Shopify Expert</div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Star size={11} style={{ color: '#14a800' }} />
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>Top Rated Plus · Shopify Verified Partner · 10+ years</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                  Karam founded Miracle Websoft in 2015 after years of freelance Shopify work. He personally leads every project — clients communicate directly with him, not an account manager. Based in Chandigarh, India.
                </p>
                <div className="flex gap-3">
                  <a href={outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', padding: '0.3rem 0.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px' }} className="hover:text-white hover:border-white/30 transition-all">
                    <ExternalLink size={11} /> Upwork
                  </a>
                  <a href={outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', padding: '0.3rem 0.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px' }} className="hover:text-white hover:border-white/30 transition-all">
                    <ExternalLink size={11} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-14">
          <p className="mw-eyebrow">Client Feedback</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '1.5rem' }}>What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300, fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{t.source}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a href={outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }} className="hover:text-white transition-colors">
              <ExternalLink size={12} /> Read 600+ reviews on Upwork
            </a>
          </div>
        </div>

      </div>

      <TrustProfiles />

      <div className="mw-container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Work with us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
