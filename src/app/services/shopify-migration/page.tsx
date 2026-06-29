import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import WhyUs from '@/components/home/WhyUs'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Move to Shopify Without Losing Orders, Customers or SEO',
  description: 'Shopify migration service for merchants moving from WooCommerce, Magento, BigCommerce or custom platforms. Preserve products, orders, customers, URLs and SEO.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-migration' },
}

const faqs = [
  { question: 'Will I lose SEO rankings when migrating to Shopify?', answer: 'Not if done correctly. We set up 301 redirects for every old URL, migrate all meta titles and descriptions, preserve your blog content and internal link structure, and monitor rankings for 30 days post-launch. Across all our completed migrations, we have a zero SEO traffic loss record.' },
  { question: 'What platforms can you migrate from?', answer: 'WooCommerce, Magento, BigCommerce, Squarespace, Wix, PrestaShop, OpenCart, and custom-built ecommerce platforms. We have completed the most migrations from WooCommerce and Magento, including large stores with 4,000+ products and 8 years of order history.' },
  { question: 'Will I lose any data during the migration?', answer: 'No. We migrate all products (with variants, images and metafields), customers, orders, blog posts, pages, and media files. We also migrate product reviews where the platform and review app technically allow it.' },
  { question: 'How long does a Shopify migration take?', answer: 'A standard migration with 500–2,000 products typically takes 3–6 weeks. Large migrations with 5,000+ products, complex taxonomies, multiple integrations, or a custom theme build alongside the migration may take 8–14 weeks.' },
  { question: 'Do you handle the DNS cutover and go-live?', answer: 'Yes. We manage the entire go-live process — DNS changes, SSL certificate configuration, post-launch redirect verification, and real-time monitoring during the cutover window to ensure zero downtime.' },
  { question: 'Can I keep my existing theme design after migrating?', answer: 'Your old platform\'s theme cannot run on Shopify, but we can match your existing design in a new Shopify theme or build something improved. Both are included in our migration proposals.' },
  { question: 'How much does a Shopify migration cost?', answer: 'Migrations start from approximately $1,500 for a small store. Large migrations with thousands of products, customer data, and a theme build typically range from $5,000–$15,000. We always quote a fixed price after understanding your full scope.' },
]

const included = [
  'Full product catalog — all variants, images and metafields',
  'Complete customer data — names, addresses, order history',
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

const phases = [
  { week: 'Week 1',    title: 'Discovery & Audit',      desc: 'Full catalog audit, URL mapping, redirect plan, data export test' },
  { week: 'Week 2–3',  title: 'Data Migration',         desc: 'Products, customers, orders, blog, reviews transferred and verified' },
  { week: 'Week 3–4',  title: 'Theme & Design',         desc: 'Shopify theme built or matched to your existing brand design' },
  { week: 'Week 5',    title: 'QA & Testing',           desc: 'Cross-device QA, checkout flows, redirect checks, speed audit' },
  { week: 'Week 6',    title: 'Go-Live & Monitoring',   desc: 'DNS cutover, SSL config, real-time monitoring for 30 days' },
]

const guarantees = [
  { icon: '🔒', title: 'Zero Data Loss — Guaranteed', body: 'Every product, customer record, and order is migrated and verified before go-live. If anything is missing, we fix it at no cost.' },
  { icon: '📈', title: 'Zero SEO Traffic Drop — Guaranteed', body: 'We have a perfect record across all migrations. If rankings drop due to our migration work, we keep working until they recover.' },
  { icon: '⚡', title: 'Zero Downtime Cutover', body: 'Your old store stays live right up to the cutover window. We manage DNS and monitor in real-time so there is no gap in availability.' },
]

const related = [
  { title: 'CRO & Speed Optimisation', desc: 'Improve conversions and page speed on your new Shopify store.', href: '/services/shopify-cro-speed' },
  { title: 'Custom Shopify Development', desc: 'Build a fully custom Shopify theme for your new store.', href: '/services/shopify/development' },
  { title: 'Shopify App Development', desc: 'Replace paid apps with custom private Shopify apps.', href: '/services/shopify-app-development' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Shopify Migration',
    description:
      'Zero-downtime migrations from WooCommerce, Magento, BigCommerce, Squarespace and more — full data, SEO preserved.',
    url: '/services/shopify-migration',
    serviceType: 'Ecommerce platform migration',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify Migration', url: '/services/shopify-migration' },
  ]),
])

export default function MigrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Migrations' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">SHOPIFY MIGRATION</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>Move to Shopify Without Putting Your Sales at Risk</h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '580px', fontWeight: 300 }}>
              Switching platforms can feel risky because your products, orders, customers, URLs, tracking and rankings all matter. We plan the move carefully so your team gets Shopify&apos;s easier management without a messy launch.
            </p>
            {/* Trust strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['Zero data loss', 'Zero SEO drop', 'Zero downtime', 'Fixed-price quote'].map(t => (
                <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                  <span style={{ color: '#10B981', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
            <Link href="/contact" className="mw-btn-primary">
              Get a Migration Plan <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Result */}
      <section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>Real Migration Result</p>
          <ServiceResult
            tag="WooCommerce → Shopify"
            tagColor="#10B981"
            metric="0%"
            metricLabel="SEO Traffic Lost"
            title="Streetwear brand migrated 4,000 products, 15,000 customers and 8 years of order history — rankings held on day one."
            bullets={[
              '4,000 products with all variants, images, and metafields migrated in full',
              '15,000 customer records and complete order history preserved',
              'URL redirect map covering every old URL — Google rankings held from day one',
              'Custom Shopify theme built to match the existing brand aesthetic',
            ]}
            duration="5-week project"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      {/* What's included */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>What&apos;s Migrated</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>The data and SEO details that protect the business</h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '560px', lineHeight: 1.7 }}>A good Shopify migration is more than moving products. It protects customer history, order records, redirects, tracking, content and the paths search engines already understand.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase timeline */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>A proven 6-week process</h2>
          </div>
          <div className="flex flex-col gap-0">
            {phases.map((p, i) => (
              <div key={i} className="flex gap-5 pb-6" style={{ position: 'relative' }}>
                {/* Line */}
                {i < phases.length - 1 && (
                  <div style={{ position: 'absolute', left: '19px', top: '36px', width: '2px', height: 'calc(100% - 8px)', background: 'rgba(108,99,255,0.20)' }} />
                )}
                {/* Node */}
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent)' }}>{i + 1}</span>
                </div>
                <div className="pt-1.5">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.06em' }}>{p.week}</span>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{p.title}</span>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div style={{ paddingTop: '3rem' }}>
        <MidPageCta
          heading="Planning a move to Shopify?"
          sub="Send your current platform and store URL. We will outline the safest migration path and what needs to be protected before launch."
          btnLabel="Get My Migration Plan"
        />
      </div>

      {/* Guarantees */}
      <GuaranteeBar guarantees={guarantees} />

      <WhyUs />

      <FaqSection faqs={faqs} heading="Shopify migration — common questions" />

      <RelatedServices services={related} />

      <CtaBanner />
    </>
  )
}
