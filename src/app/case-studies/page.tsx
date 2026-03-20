import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Shopify Results for Fashion Brands',
  description: 'See how we have helped clothing and fashion brands improve speed, conversions and revenue on Shopify.',
  alternates: { canonical: 'https://miraclewebsoft.com/case-studies' },
}

const caseStudies = [
  { tag: 'Activewear', title: 'Activewear brand increases conversions by 48% after TikTok Shop integration', result: '+48% conversion rate', detail: 'Built a full TikTok Shop integration, product drop system with waitlists and countdown timers, and rebuilt mobile product pages from scratch.' },
  { tag: "Women's Fashion", title: "Women's boutique cuts cart abandonment by 35% with new checkout flow", result: '-35% cart abandonment', detail: 'Rebuilt checkout flow, added size guide with fit recommendations, and integrated Klaviyo abandoned cart sequences.' },
  { tag: 'Migration', title: 'Streetwear brand migrates from WooCommerce with zero SEO traffic loss', result: '0% SEO traffic drop', detail: 'Full WooCommerce to Shopify migration — 4,000 products, 15,000 customers, 8 years of order history. All SEO URLs preserved.' },
  { tag: 'Speed', title: 'Luxury fashion store achieves 1.1s mobile load time after speed overhaul', result: '1.1s mobile load time', detail: 'Complete Lighthouse audit, image optimisation, JavaScript elimination, critical CSS inlining and Shopify theme rebuild.' },
]

export default function CaseStudiesPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8"><Breadcrumb items={[{ label: 'Case Studies' }]} /></div>
        <div className="mb-12">
          <span className="mw-eyebrow">Case Studies</span>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff' }}>Real results for<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>fashion brands.</em></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {caseStudies.map((cs, i) => (
            <div key={i} className="mw-card" style={{ padding: '2rem' }}>
              <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(108,99,255,0.15)', color: 'var(--accent)', marginBottom: '1.25rem' }}>{cs.tag}</span>
              <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.5 }}>{cs.title}</h2>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>{cs.result}</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300 }}>{cs.detail}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="mw-btn-primary">Get similar results for your brand <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
