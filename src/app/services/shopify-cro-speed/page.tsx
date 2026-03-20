import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Shopify CRO and Speed Optimization for Fashion Brands | Miracle Websoft',
  description:
    'Conversion rate optimization and speed improvements for clothing brands.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-cro-speed' },
}

const deliverables = [
  'Full Lighthouse audit — mobile and desktop',
  'Core Web Vitals improvement plan',
  'Image compression and next-gen format conversion',
  'JavaScript bundle analysis and reduction',
  'Critical CSS extraction and inlining',
  'Third-party script audit and deferral',
  'Product page conversion audit',
  'Checkout flow analysis and fixes',
  'Add-to-cart rate optimization',
  'Homepage and collection page CRO',
  'A/B test setup and analysis',
  'Monthly performance reporting',
]

export default function CROSpeedPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-dark)] text-white"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}
      >
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: undefined }, { label: 'CRO & Speed Optimization' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">CRO & SPEED</span>
            <h1 className="text-white mb-6">Shopify CRO and Speed Optimization for Fashion Brands</h1>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              Your store is already getting traffic. We make sure more of it converts.
              Average results: 42% conversion increase, 1.2s mobile load time.
            </p>
            <Link href="/contact" className="mw-btn-primary">
              Get a free CRO audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT&apos;S INCLUDED</span>
            <h2 className="text-[var(--color-text-primary)]">A complete CRO and speed programme</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[var(--color-off-white)] rounded-lg p-4">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <span className="text-sm text-[var(--color-text-primary)]">{item}</span>
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
