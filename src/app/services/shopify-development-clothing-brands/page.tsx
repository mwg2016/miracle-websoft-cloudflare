import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'

export const metadata: Metadata = {
  title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
  description: 'Bespoke Shopify and Shopify Plus development for clothing and fashion brands. Custom themes, mobile-first builds, sub-1.5s load times. USA, UK, Australia.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-development-clothing-brands' },
}

const features = [
  'Custom theme design — no templates, no generic layouts',
  'Mobile-first build — 375px is the primary canvas',
  'Sub-1.5s load time target on every project',
  'Shopify Plus builds for scaling brands',
  'Advanced product filtering and collection architecture',
  'Size guides and fit recommendation tools',
  'Wishlist, saved items and product comparison',
  'Instagram and TikTok Shop integration',
  'Klaviyo and email platform integration',
  'Custom checkout flows',
  'Full QA across all devices and browsers',
  'Ongoing support and optimisation',
]

const faqs = [
  {
    question: 'What is custom Shopify development?',
    answer: 'Custom Shopify development means building your store without using pre-made templates. Every layout, interaction and feature is designed specifically for your brand and how your customers shop — not copied from a theme library.',
  },
  {
    question: 'Do you use themes or build from scratch?',
    answer: 'It depends on the project and budget. For some brands we build a fully custom theme from a blank canvas. For others we heavily customise an existing theme as a starting point. We always recommend the right approach for your goals — we will never oversell a full custom build if a theme customisation achieves the same result.',
  },
  {
    question: 'What is Shopify Plus and do I need it?',
    answer: 'Shopify Plus is Shopify\'s enterprise tier (from ~$2,300/month). It unlocks custom checkout extensibility, Shopify Functions, higher API limits, B2B wholesale features, and dedicated support. Most brands need it once they exceed $1M/year in revenue or require checkout customisations not available on standard Shopify.',
  },
  {
    question: 'How long does a custom Shopify build take?',
    answer: 'A standard custom theme build takes 4–8 weeks depending on scope. Complex projects with custom apps, third-party integrations or Shopify Plus checkout features typically take 10–16 weeks. We give a clear timeline in every proposal.',
  },
  {
    question: 'Do you work on existing stores or only new builds?',
    answer: 'Both. We do full rebuilds, redesigns of live stores, and targeted improvements (product pages, checkout, speed) on existing Shopify stores without a full rebuild.',
  },
  {
    question: 'What happens after launch?',
    answer: 'We offer ongoing support and optimisation packages. Most clients work with us on a retained basis — monthly CRO testing, new feature development, Shopify platform updates, and performance monitoring.',
  },
  {
    question: 'How much does a custom Shopify store cost?',
    answer: 'Custom Shopify theme builds typically start from $3,000–$5,000 for a focused fashion brand. Complex builds with custom apps and Shopify Plus features range from $10,000–$30,000+. We always provide a fixed-price proposal before any work begins — no hourly billing.',
  },
]

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services' }, { label: 'Custom Shopify Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY DEVELOPMENT</span>
            <h1 style={{ color: '#fff', marginBottom: '1.5rem' }}>Custom Shopify Development for Clothing Brands</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '580px', fontWeight: 300 }}>
              Bespoke Shopify stores designed from scratch for clothing, fashion and apparel brands. Not a template. Not a theme store. A store built around how your customers shop.
            </p>
            <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Get a Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(24px,3vw,36px)' }}>Everything in every build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessSteps />
      <ClientPortfolio />
      <FaqSection faqs={faqs} heading="Custom Shopify development — common questions" />
      <CtaBanner />
    </>
  )
}
