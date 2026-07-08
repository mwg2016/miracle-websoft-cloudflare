import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Code2, Gauge, Puzzle, ShoppingBag, Workflow } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CtaBanner from '@/components/home/CtaBanner'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, itemList, renderJsonLd, service, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Services by Top Rated Shopify Experts',
  description:
    'Shopify services for ecommerce brands: store development, Shopify Plus, theme customization, custom features, app integration, migration, maintenance, API and private apps.',
  alternates: { canonical: 'https://miraclewebsoft.com/services/shopify' },
  openGraph: {
    title: 'Shopify Services by Top Rated Shopify Experts | Miracle Websoft',
    description:
      'Shopify development, Shopify Plus, theme customization, custom features, app integration, migration, maintenance, APIs and private apps.',
    url: 'https://miraclewebsoft.com/services/shopify',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Services by Top Rated Shopify Experts | Miracle Websoft',
    description:
      'Shopify development, Shopify Plus, custom features, integrations, migrations, maintenance and API development.',
  },
}

const shopifyServices = [
  {
    title: 'Shopify Store Development',
    desc: 'Custom Shopify stores, redesigns and launch-ready ecommerce experiences built for conversion and easy management.',
    href: '/services/shopify/development',
    icon: ShoppingBag,
  },
  {
    title: 'Shopify Plus Development',
    desc: 'Shopify Plus builds, B2B, checkout extensions, Functions, Markets, expansion stores and enterprise integrations.',
    href: '/services/shopify/shopify-plus-development',
    icon: Code2,
  },
  {
    title: 'Shopify Theme Customization',
    desc: 'Theme sections, product pages, collection templates, checkout-adjacent UX and custom storefront improvements.',
    href: '/services/shopify/theme-customization',
    icon: Workflow,
  },
  {
    title: 'Shopify Custom Features',
    desc: 'Build the specific buying flow, configurator, bundle, quiz, portal or workflow that standard apps cannot handle.',
    href: '/services/shopify/custom-features',
    icon: Puzzle,
  },
  {
    title: 'Shopify App Integration',
    desc: 'Integrate Klaviyo, Gorgias, ReCharge, Yotpo, ERPs, CRMs, fulfilment, analytics, marketplaces and custom APIs.',
    href: '/services/shopify/app-integration',
    icon: Puzzle,
  },
  {
    title: 'Shopify Migration',
    desc: 'Move from WooCommerce, Magento, BigCommerce or custom platforms with data, redirects and launch checks handled.',
    href: '/services/shopify-migration',
    icon: Workflow,
  },
  {
    title: 'Shopify Maintenance',
    desc: 'Ongoing support, theme updates, app checks, speed monitoring, product changes and long-term improvement retainers.',
    href: '/services/shopify/shopify-maintenance',
    icon: Gauge,
  },
  {
    title: 'Shopify API & Private Apps',
    desc: 'Custom Shopify APIs, private apps, admin tools, storefront integrations, webhooks and automation for unique operations.',
    href: '/services/shopify/api-private-apps',
    icon: Code2,
  },
]

const faqs = [
  {
    question: 'What Shopify services do you provide?',
    answer: 'We provide Shopify store development, Shopify Plus development, theme customization, custom features, app integration, migration, maintenance, API development and private apps.',
  },
  {
    question: 'Do you work with existing Shopify stores?',
    answer: 'Yes. We work on new builds, redesigns, feature development, CRO, speed optimization, app cleanup, migration support and ongoing maintenance for existing stores.',
  },
  {
    question: 'Can you work as a long-term Shopify partner?',
    answer: 'Yes. Many clients retain us for ongoing feature work, technical support, speed improvements, CRO, app integrations and campaign support after the first project.',
  },
  {
    question: 'Do you serve clients outside India?',
    answer: 'Yes. Our primary markets are the United States, Canada, United Kingdom, Australia and Europe, and all communication is in English.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Shopify Services - Miracle Websoft',
    description:
      'Shopify development, Shopify Plus, theme customization, custom features, app integration, migrations, maintenance, APIs and private apps.',
    url: 'https://miraclewebsoft.com/services/shopify',
  }),
  service({
    name: 'Shopify Services',
    description:
      'Shopify development, Shopify Plus, theme customization, custom features, app integrations, migrations, maintenance and private apps.',
    url: '/services/shopify',
    serviceType: 'Shopify development agency',
    areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify Services', url: '/services/shopify' },
  ]),
  itemList({
    name: 'Shopify services offered by Miracle Websoft',
    items: shopifyServices.map((item) => ({
      name: item.title,
      url: item.href,
      description: item.desc,
    })),
  }),
])

export default function ShopifyServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: 'linear-gradient(135deg, rgba(108,99,255,0.16), transparent 46%), linear-gradient(315deg, rgba(16,185,129,0.08), transparent 38%)' }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Services' }]} />
          </div>
          <div className="max-w-3xl">
            <span className="mw-eyebrow">Shopify Services</span>
            <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem' }}>
              Shopify Development, Optimization and Long-Term Support
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '650px', fontWeight: 300 }}>
              Miracle Websoft helps Shopify merchants build faster stores, improve conversions, add custom features, integrate business systems and maintain a stronger ecommerce platform over time.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {['650+ projects completed', '15,000+ hours delivered', 'Top Rated Shopify Experts', 'Global clients'].map((item) => (
                <span key={item} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                  <CheckCircle2 size={13} style={{ color: '#10B981' }} /> {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="mw-btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/work" className="mw-btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">Shopify Capabilities</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,46px)' }}>Choose the Shopify service that matches the blocker</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {shopifyServices.map(({ icon: Icon, ...item }) => (
              <Link key={item.href} href={item.href} className="mw-card group" style={{ padding: '1.5rem', minHeight: 220, textDecoration: 'none' }}>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span style={{ width: 42, height: 42, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.22)' }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </span>
                  <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.35)' }} className="group-hover:text-white transition-colors" />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: '0.65rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.65 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} heading="Shopify services - common questions" />
      <CtaBanner />
    </>
  )
}
