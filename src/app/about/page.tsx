import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Miracle Websoft — Shopify Agency for Fashion Brands',
  description: 'Miracle Websoft is a Shopify development agency specialising in clothing, fashion and apparel brands. Based in India, serving USA, UK and Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/about' },
}

const values = [
  'Fashion-only focus — we only work with clothing and apparel brands',
  'Performance first — every store targets sub-1.5s mobile load times',
  'Conversion built in — CRO thinking in every layout decision',
  'Direct communication — you work with the people building your store',
  'Zero-risk migrations — no data loss, no SEO traffic drop, ever',
]

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'About' }]} /></div>
        <div className="max-w-3xl mx-auto">
          <span className="mw-eyebrow">About Us</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>
            A Shopify agency built exclusively<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>for fashion brands.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
            Miracle Websoft is a Shopify development agency based in India, serving clothing, fashion and apparel brands in the USA, UK and Australia. We do one thing and we do it exceptionally well — Shopify development for fashion.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
            Most agencies work across dozens of industries. We do not. By focusing exclusively on fashion and apparel, we have built deep expertise in what makes clothing brands convert.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
            We have worked with over 50 fashion brands — from DTC activewear startups to luxury occasion wear labels — and we bring that knowledge to every project.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>What we stand for</h2>
            <ul className="flex flex-col gap-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="mw-btn-primary">Work with us <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
