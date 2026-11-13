import type { Metadata } from 'next'
import FaqSection from '@/components/ui/FaqSection'
import ServiceResult from '@/components/services/ServiceResult'
import GuaranteeBar from '@/components/services/GuaranteeBar'
import MidPageCta from '@/components/services/MidPageCta'
import RelatedServices from '@/components/services/RelatedServices'
import ServiceHero, { HeroScope, NumberedList, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Migrate to Shopify Without Losing SEO | Miracle Websoft',
  description: 'Move from WooCommerce, Magento, BigCommerce or another platform to Shopify while protecting products, customers, orders, redirects, tracking and SEO.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify-migration' },
  openGraph: {
    title: 'Migrate to Shopify Without Losing SEO | Miracle Websoft',
    description: 'Move from WooCommerce, Magento, BigCommerce or another platform to Shopify while protecting products, customers, orders, redirects, tracking and SEO.',
    url: 'https://miraclewebsoft.com/services/shopify-migration',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrate to Shopify Without Losing SEO | Miracle Websoft',
    description: 'Move from WooCommerce, Magento, BigCommerce or another platform to Shopify while protecting products, customers, orders, redirects, tracking and SEO.',
  },
}

const faqs = [
  { question: 'Will I lose SEO rankings when migrating to Shopify?', answer: 'Not if done correctly. We set up 301 redirects for every old URL, migrate all meta titles and descriptions, preserve your blog content and internal link structure, and monitor rankings for 30 days post-launch.' },
  { question: 'What platforms can you migrate from?', answer: 'WooCommerce, Magento, BigCommerce, Squarespace, Wix, PrestaShop, OpenCart, and custom-built ecommerce platforms. We have completed the most migrations from WooCommerce and Magento, including large stores with 4,000+ products and 8 years of order history.' },
  { question: 'Will I lose any data during the migration?', answer: 'No. We migrate all products (with variants, images and metafields), customers, orders, blog posts, pages, and media files. We also migrate product reviews where the platform and review app technically allow it.' },
  { question: 'How long does a Shopify migration take?', answer: 'A standard migration with 500–2,000 products typically takes 3–6 weeks. Large migrations with 5,000+ products, complex taxonomies, multiple integrations, or a custom theme build alongside the migration may take 8–14 weeks.' },
  { question: 'Do you handle the DNS cutover and go-live?', answer: 'Yes. We manage the entire go-live process — DNS changes, SSL certificate configuration, post-launch redirect verification, and real-time monitoring during the cutover window so the store stays available.' },
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
  'Planned cutover with the old store live until the switch',
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
  { title: 'Data verified before go-live', body: 'Every product, customer record and order is migrated and checked before launch. If anything is missing, we fix it at no cost.' },
  { title: 'Every old URL redirected', body: 'A full 301 map, meta data carried over, and rankings watched for 30 days after launch.' },
  { title: 'Old store live until cutover', body: 'Your current store keeps selling right up to the switch. We manage DNS and monitor the cutover live.' },
  { title: 'Fixed price', body: 'Quoted after we have seen your catalogue and integrations. No hourly billing.' },
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
      'Migrations from WooCommerce, Magento, BigCommerce, Squarespace and more, with full data, redirects and SEO handled.',
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

      <ServiceHero
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: 'Shopify Migrations' }]}
        eyebrow="Shopify migration"
        title={<>Move to Shopify <span className="mw-mark">without losing sales</span> or rankings.</>}
        lede="Products, customers, orders, URLs, tracking and rankings all have to survive the move. We plan it carefully so you get Shopify's easier day-to-day without a messy launch."
        bullets={['Every old URL redirected, meta data carried over', 'Old store keeps selling until the cutover', 'Fixed price, typically 3 to 6 weeks']}
        primary={{ label: 'Book a 15-min migration call', href: '/book' }}
        secondary={{ label: 'Send your store details', href: '/contact' }}
        aside={
          <HeroScope
            label="We migrate from"
            items={['WooCommerce', 'Magento', 'BigCommerce', 'Squarespace and Wix', 'Custom-built platforms']}
            foot="Small-store migrations start from around $1,500. Fixed quote after we see your catalogue."
          />
        }
      />

      <section className="mw-section">
        <div className="mw-container">
          <SectionHead eyebrow="Example migration" title="4,000 products, rankings held." />
          <ServiceResult
            tag="WooCommerce to Shopify"
            metric="0%"
            metricLabel="SEO traffic lost"
            title="Streetwear brand migrated 4,000 products, 15,000 customers and 8 years of order history. Rankings held from day one."
            bullets={[
              '4,000 products with all variants, images and metafields migrated in full',
              '15,000 customer records and complete order history preserved',
              'Redirect map covering every old URL',
              'Custom Shopify theme built to match the existing brand',
            ]}
            duration="5-week project"
            cta={{ label: 'See all our work', href: '/work' }}
          />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="What's migrated"
            title="The data and SEO details that protect the business."
            intro="A good migration is more than moving products. It protects customer history, orders, redirects, tracking, content and the paths search engines already know."
          />
          <NumberedList items={included.map((d) => ({ title: d }))} columns={3} />
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="How it works" title="A typical six-week migration." />
          <ol className="grid grid-cols-1 md:grid-cols-5" style={{ borderTop: '1px solid var(--text-1)' }}>
            {phases.map((p, i) => (
              <li key={p.title} className={i ? 'md:border-l md:pl-5' : ''} style={{ padding: '1.25rem 1rem 1.25rem 0', borderColor: 'var(--border)', borderBottom: '1px solid var(--border)' }}>
                <span className="steps-time" style={{ marginBottom: '0.9rem' }}>{p.week}</span>
                <h3 style={{ fontSize: '1.02rem', marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MidPageCta
        heading="Planning a move to Shopify?"
        sub="Tell us your current platform and store URL on a 15-minute call. We will outline the safest path and what needs protecting before launch."
        btnLabel="Book a 15-min call"
        btnHref="/book"
        secondary={{ label: 'or send a written brief', href: '/contact' }}
      />

      <GuaranteeBar guarantees={guarantees} />

      <FaqSection faqs={faqs} heading="Common questions" />

      <RelatedServices services={related} />
    </>
  )
}
