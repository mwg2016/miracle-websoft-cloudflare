import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Custom Shopify Development for Clothing Brands | Miracle Websoft',
  description:
    'Bespoke Shopify and Shopify Plus development for clothing brands. USA, UK, Australia.',
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

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-dark)] text-white"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}
      >
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: undefined }, { label: 'Custom Shopify Development' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY DEVELOPMENT</span>
            <h1 className="text-white mb-6">Custom Shopify Development for Clothing Brands</h1>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              Bespoke Shopify stores designed from scratch for clothing, fashion and apparel brands.
              Not a template. Not a theme store. A store built around how your customers shop.
            </p>
            <Link href="/contact" className="mw-btn-primary">
              Get a Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 className="text-[var(--color-text-primary)]">Everything in every build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--color-off-white)] rounded-lg p-4">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <span className="text-sm text-[var(--color-text-primary)]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ProcessSteps />
      <CtaBanner />
    </>
  )
}
