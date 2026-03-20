import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'

export const metadata: Metadata = {
  title: 'WooCommerce to Shopify Migration | Magento to Shopify | Miracle Websoft',
  description:
    'Migrate to Shopify with zero data loss and zero SEO traffic drop.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-migration' },
}

const faqs = [
  {
    question: 'Will I lose SEO rankings when migrating to Shopify?',
    answer: 'Not if done correctly. We set up 301 redirects for every old URL, migrate all meta titles and descriptions, preserve your blog content and internal link structure, and monitor rankings for 30 days post-launch. Across all our completed migrations, we have a zero SEO traffic loss record.',
  },
  {
    question: 'What platforms can you migrate from?',
    answer: 'WooCommerce, Magento, BigCommerce, Squarespace, Wix, PrestaShop, OpenCart, and custom-built ecommerce platforms. We have completed the most migrations from WooCommerce and Magento, including large stores with 4,000+ products and 8 years of order history.',
  },
  {
    question: 'Will I lose any data during the migration?',
    answer: 'No. We migrate all products (with variants, images and metafields), customers, orders, blog posts, pages, and media files. We also migrate product reviews where the platform and review app technically allow it.',
  },
  {
    question: 'How long does a Shopify migration take?',
    answer: 'A standard migration with 500–2,000 products typically takes 3–6 weeks. Large migrations with 5,000+ products, complex taxonomies, multiple integrations, or a custom theme build alongside the migration may take 8–14 weeks.',
  },
  {
    question: 'Do you handle the DNS cutover and go-live?',
    answer: 'Yes. We manage the entire go-live process — DNS changes, SSL certificate configuration, post-launch redirect verification, and real-time monitoring during the cutover window to ensure zero downtime.',
  },
  {
    question: 'Can I keep my existing Shopify theme after migrating?',
    answer: 'You will need a Shopify theme — your old platform\'s theme cannot be used on Shopify. We can customise an existing Shopify theme to match your current design, or build a custom theme as part of the migration. Both options are included in our migration proposals.',
  },
  {
    question: 'How much does a Shopify migration cost?',
    answer: 'Migrations start from approximately $1,500 for a small store. Large migrations with thousands of products, customer data, and a theme build typically range from $5,000–$15,000. We always quote a fixed price after understanding your full scope.',
  },
]

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
      <FaqSection faqs={faqs} heading="Shopify migration — common questions" />
      <CtaBanner />
    </>
  )
}
