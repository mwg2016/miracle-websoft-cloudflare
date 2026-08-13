import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/data/industries'
import { breadcrumb, faqPage, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Industry Guides for Fashion & Apparel Brands',
  description:
    "Explore Shopify development guides for women's clothing, activewear, streetwear, sustainable fashion, kidswear, plus-size apparel, menswear, luxury fashion and online boutiques.",
  alternates: { canonical: 'https://www.miraclewebsoft.com/industries' },
  openGraph: {
    title: 'Shopify Industry Guides | Miracle Websoft',
    description:
      'Industry-specific Shopify development guidance for fashion, apparel, activewear, streetwear, kidswear, plus-size, menswear and boutique ecommerce brands.',
    url: 'https://www.miraclewebsoft.com/industries',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What industries does Miracle Websoft specialise in?',
    answer:
      "Miracle Websoft specialises in Shopify development for fashion and apparel ecommerce, including women's clothing, activewear, streetwear, sustainable fashion, kidswear, plus-size apparel, menswear, occasion wear and multi-brand boutiques.",
  },
  {
    question: 'Why do fashion brands need industry-specific Shopify development?',
    answer:
      'Fashion shoppers need fast mobile browsing, strong product photography, size and fit guidance, returns clarity, lookbooks, product drops, social commerce and advanced filtering. Generic Shopify themes rarely handle all of those workflows well.',
  },
  {
    question: 'Can Miracle Websoft build stores outside fashion and apparel?',
    answer:
      'Yes. Miracle Websoft also builds Shopify stores for beauty, health, home, food, electronics, jewelry, sports, pet supplies, B2B, subscription and print-on-demand brands. Fashion and apparel is the deepest topical cluster on this site.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Industry Guides - Miracle Websoft',
    description:
      'Collection of industry-specific Shopify development guides for fashion and apparel ecommerce brands.',
    url: 'https://www.miraclewebsoft.com/industries',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
  ]),
  itemList({
    name: 'Shopify industry guides',
    description: 'Fashion and apparel Shopify development guides by Miracle Websoft.',
    items: industries.map((industry) => ({
      name: industry.title,
      url: `/industries/${industry.slug}`,
      description: industry.metaDescription,
    })),
  }),
  faqPage(faqs),
])

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <section
        className="pt-32 pb-16"
        style={{
          background: '#0a0a0a',
          backgroundImage:
            'radial-gradient(ellipse at 70% 35%, rgba(108,99,255,0.16) 0%, transparent 58%), radial-gradient(ellipse at 20% 90%, rgba(16,185,129,0.08) 0%, transparent 46%)',
        }}
      >
        <div className="mw-container">
          <div style={{ maxWidth: '760px' }}>
            <p className="mw-eyebrow">Industry Shopify guides</p>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>
              Shopify development for fashion, apparel and high-growth DTC brands.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 300, maxWidth: '650px' }}>
              Every ecommerce vertical has different buying behaviour. These guides explain the Shopify architecture, product-page features,
              filtering, merchandising and conversion systems each type of fashion brand needs to sell better online.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {[
              { stat: `${industries.length}`, label: 'Industry guides' },
              { stat: '600+', label: 'Shopify projects' },
              { stat: '10+', label: 'Years on Shopify' },
              { stat: '98%+', label: 'Upwork job success' },
            ].map((item) => (
              <div key={item.label} style={{ background: '#080808', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem', maxWidth: '680px' }}>
            <p className="mw-eyebrow">Choose your vertical</p>
            <h2 style={{ color: '#fff' }}>Find the Shopify playbook closest to your brand.</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: '0.75rem' }}>
              Each page covers customer intent, common conversion leaks, required Shopify features and practical answers to questions buyers
              and founders ask before rebuilding a store.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="mw-card group"
                style={{ padding: '1.35rem', textDecoration: 'none', display: 'block' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.7rem' }}>
                      Shopify industry guide
                    </p>
                    <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '0.55rem' }}>
                      {industry.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.83rem', lineHeight: 1.65 }}>
                      {industry.subtext}
                    </p>
                  </div>
                  <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0, marginTop: '0.2rem' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid gap-5 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="mw-card" style={{ padding: '1.4rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.7rem', lineHeight: 1.35 }}>
                  {faq.question}
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.86rem', lineHeight: 1.75 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
