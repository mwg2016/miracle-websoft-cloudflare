import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/data/industries'
import { breadcrumb, faqPage, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Industry Guides for Fashion & Apparel Brands | Miracle Websoft',
  description:
    "Explore Shopify development guides for women's clothing, activewear, streetwear, sustainable fashion, kidswear, plus-size apparel, menswear, luxury fashion and online boutiques.",
  alternates: { canonical: 'https://miraclewebsoft.com/industries' },
  openGraph: {
    title: 'Shopify Industry Guides | Miracle Websoft',
    description:
      'Industry-specific Shopify development guidance for fashion, apparel, activewear, streetwear, kidswear, plus-size, menswear and boutique ecommerce brands.',
    url: 'https://miraclewebsoft.com/industries',
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
    url: 'https://miraclewebsoft.com/industries',
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
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="mw-eyebrow">Industry Shopify guides</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(36px, 4.8vw, 62px)', maxWidth: '18ch' }}>
              Shopify development for fashion, apparel and <span className="mw-mark">DTC brands.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '54ch' }}>
              Every ecommerce vertical has different buying behaviour. These guides explain the Shopify architecture, product-page features,
              filtering, merchandising and conversion systems each type of fashion brand needs to sell better online.
            </p>
          </div>
          <dl className="audit-facts" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 0 }}>
            <div><dt>Guides</dt><dd>{industries.length}</dd></div>
            <div><dt>Projects</dt><dd>700+</dd></div>
            <div><dt>Since</dt><dd>2015</dd></div>
          </dl>
        </div>
      </section>

      <section className="mw-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '4.5rem' }}>
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Choose your vertical</p>
              <h2 style={{ maxWidth: '18ch' }}>Find the playbook closest to your brand.</h2>
            </div>
            <p style={{ maxWidth: '44ch', fontSize: '0.95rem' }}>
              Each page covers customer intent, common conversion leaks, required Shopify features and the questions founders ask before rebuilding a store.
            </p>
          </div>

          <ul className="svc-table">
            {industries.map((industry, i) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className="ind-row">
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-name">{industry.title}</span>
                  <span className="svc-line">{industry.subtext}</span>
                  <ArrowRight size={18} className="svc-arrow" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style>{`
          .svc-table a.ind-row { grid-template-columns: 2.5rem 1fr 1.6fr 1.5rem; }
          @media (max-width: 860px) {
            .svc-table a.ind-row { grid-template-columns: 2rem 1fr 1.25rem; }
          }
        `}</style>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">FAQ</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '14ch' }}>Before you pick a guide</h2>
          </div>
          <dl style={{ borderTop: '1px solid var(--text-1)' }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <dt><h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{faq.question}</h3></dt>
                <dd><p style={{ maxWidth: '62ch' }}>{faq.answer}</p></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </>
  )
}
