import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'WooCommerce to Shopify Migration | Magento to Shopify | Miracle Websoft',
  description:
    'Migrate to Shopify with zero data loss and zero SEO traffic drop.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-migration' },
}

const included = [
  'Full product catalog migration — all variants, images and metafields',
  'Complete customer data migration — names, addresses, order history',
  'All historical order data preserved',
  'SEO URL redirects — 301s for every changed URL',
  'Meta titles and descriptions migrated',
  'Blog posts and pages migrated',
  'Zero downtime cutover process',
  'DNS management and SSL configuration',
  'Post-migration QA and testing',
  'Google Search Console verification',
  'GA4 and tracking setup',
  '30-day post-launch monitoring',
]

export default function MigrationPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[var(--color-dark)] text-white"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}
      >
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: undefined }, { label: 'Shopify Migrations' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY MIGRATION</span>
            <h1 className="text-white mb-6">WooCommerce to Shopify Migration</h1>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              We migrate clothing brands from WooCommerce, Magento, BigCommerce and other platforms
              to Shopify. Zero data loss. Zero SEO traffic drop. Zero downtime.
            </p>
            <Link href="/contact" className="mw-btn-primary">
              Get a migration quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mw-section">
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">WHAT&apos;S MIGRATED</span>
            <h2 className="text-[var(--color-text-primary)]">Everything. No exceptions.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {included.map((item, i) => (
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
