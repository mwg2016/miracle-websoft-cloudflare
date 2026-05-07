import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShoppingBag, Cpu, Sparkles, Zap, ArrowLeftRight,
  Shirt, Dumbbell, PawPrint, FlaskConical, Gem, UtensilsCrossed, Sofa,
  Globe, Code2,
} from 'lucide-react'
import CtaBanner from '@/components/home/CtaBanner'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'All Services | Miracle Websoft',
  description: 'Full service offering from Miracle Websoft — Shopify development, app development, migrations, CRO, WordPress and custom web application development.',
  alternates: { canonical: 'https://miraclewebsoft.com/services' },
}

const accent = '#6c63ff'

// ─── Service groups ───────────────────────────────────────────────────────────

const shopifyCore = [
  {
    icon: ShoppingBag,
    title: 'Custom Shopify Development',
    desc: 'Bespoke Shopify stores built from scratch — no templates, no theme stores. Custom themes, complex integrations, Shopify Plus builds.',
    href: '/services/shopify/development',
    badge: 'Most popular',
  },
  {
    icon: Sparkles,
    title: 'Shopify App Development',
    desc: 'Private and public Shopify apps — custom admin tools, storefront extensions, Shopify Functions and third-party integrations.',
    href: '/services/shopify-app-development',
  },
  {
    icon: ArrowLeftRight,
    title: 'Shopify Migrations',
    desc: 'Zero-downtime migrations from WooCommerce, Magento, BigCommerce or any platform — SEO preserved, data intact.',
    href: '/services/shopify-migration',
  },
  {
    icon: Zap,
    title: 'CRO & Speed Optimisation',
    desc: 'Sub-1.5s load times, Core Web Vitals improvements, A/B testing and conversion rate optimisation for existing Shopify stores.',
    href: '/services/shopify-cro-speed',
  },
]

const shopifyIndustry = [
  {
    icon: Shirt,
    title: 'Shopify for Clothing Brands',
    desc: 'Fashion-specific Shopify builds — size guides, fit tools, lookbooks, Instagram integration and mobile-first design.',
    href: '/services/shopify/development',
    badge: 'Speciality',
  },
  {
    icon: Cpu,
    title: 'Shopify for Electronics',
    desc: 'Complex variant trees, spec comparison tables, B2B wholesale and high-SKU catalogue architecture.',
    href: '/services/shopify/electronics',
  },
  {
    icon: FlaskConical,
    title: 'Shopify for Health & Beauty',
    desc: 'Subscription boxes, ingredient transparency, quiz funnels, loyalty programmes and compliance-safe product pages.',
    href: '/services/shopify/health-beauty',
  },
  {
    icon: Gem,
    title: 'Shopify for Jewelry',
    desc: 'Luxury positioning, custom engraving flows, ring size guides, high-res zoom and premium checkout experiences.',
    href: '/services/shopify/jewelry',
  },
  {
    icon: UtensilsCrossed,
    title: 'Shopify for Food & Beverage',
    desc: 'Subscription delivery, allergen display, date pickers, age verification and corporate gifting flows.',
    href: '/services/shopify/food-beverage',
  },
  {
    icon: Sofa,
    title: 'Shopify for Home & Furniture',
    desc: 'Room visualisation, custom configurators, freight shipping, swatch requests and trade account portals.',
    href: '/services/shopify/home-decor',
  },
  {
    icon: Dumbbell,
    title: 'Shopify for Sports & Fitness',
    desc: 'Supplement subscriptions, gym B2B ordering, equipment bundles and performance-gear size guides.',
    href: '/services/shopify/sports-fitness',
  },
  {
    icon: PawPrint,
    title: 'Shopify for Pet Supplies',
    desc: 'Breed filtering, pet food subscriptions, portion calculators and vet-approval trust signals.',
    href: '/services/shopify/pets',
  },
]

const otherServices = [
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Custom WordPress themes, WooCommerce stores, membership & LMS platforms and corporate sites — built without page-builder bloat.',
    href: '/services/wordpress-development',
  },
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Bespoke web applications in React, Next.js, Node.js and Laravel — SaaS platforms, APIs, dashboards and marketplace systems.',
    href: '/services/custom-web-development',
  },
]

// ─── Reusable card ────────────────────────────────────────────────────────────

function ServiceCard({ icon: Icon, title, desc, href, badge }: {
  icon: React.ElementType
  title: string
  desc: string
  href: string
  badge?: string
}) {
  return (
    <Link href={href} className="group block mw-card" style={{ padding: '1.75rem', textDecoration: 'none', position: 'relative', transition: 'border-color 0.25s' }}>
      {badge && (
        <span style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>
          {badge}
        </span>
      )}
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.1rem', transition: 'background 0.2s' }}>
        <Icon size={17} style={{ color: accent }} />
      </div>
      <h3 style={{ fontSize: '0.975rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.1rem' }}>{desc}</p>
      <span style={{ fontSize: '0.78rem', color: accent, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
        Learn more <ArrowRight size={12} />
      </span>
    </Link>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <span className="mw-eyebrow">{eyebrow}</span>
      <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: sub ? '0.6rem' : 0 }}>{title}</h2>
      {sub && <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}>{sub}</p>}
    </div>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = renderJsonLd([
  webPage({
    name: 'All Services — Miracle Websoft',
    description:
      'Full service offering — Shopify development, app development, migrations, CRO, WordPress and custom web applications.',
    url: 'https://miraclewebsoft.com/services',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]),
  itemList({
    name: 'Services offered by Miracle Websoft',
    items: [...shopifyCore, ...shopifyIndustry, ...otherServices].map((s) => ({
      name: s.title,
      url: s.href,
      description: s.desc,
    })),
  }),
])

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: '#0a0a0a', backgroundImage: 'radial-gradient(ellipse at 65% 45%, rgba(108,99,255,0.14) 0%, transparent 58%)' }}>
        <div className="mw-container">
          <div className="max-w-2xl">
            <span className="mw-eyebrow">ALL SERVICES</span>
            <h1 style={{ color: '#fff', marginBottom: '1.25rem' }}>
              600+ Projects Delivered.<br />
              <span style={{ color: 'var(--accent)' }}>Find the Right Service for Your Store.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 300, maxWidth: '540px' }}>
              From custom Shopify builds to migrations, apps, and speed optimisation. Not sure which service fits?{' '}
              <Link href="#find-service" style={{ color: accent, textDecoration: 'none' }}>Answer 3 quick questions below</Link>{' '}
              and we&apos;ll point you to the right one.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {[
              { stat: '600+', label: 'Projects delivered' },
              { stat: '98%', label: 'Upwork job success' },
              { stat: '10+', label: 'Years on Shopify' },
              { stat: '24h', label: 'Proposal turnaround' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#080808', padding: '1.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.stat}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Which service do I need? */}
      <section id="find-service" style={{ background: '#080808', paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="mw-eyebrow">FIND YOUR SERVICE</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(20px,2.5vw,28px)' }}>Not sure which service you need?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                q: 'Starting from scratch or rebuilding?',
                answer: 'You need Custom Shopify Development',
                desc: 'A new store built around your brand, product structure, and customers.',
                href: '/services/shopify/development',
                color: '#6C63FF',
              },
              {
                q: 'Have an existing Shopify store that isn\'t converting?',
                answer: 'You need CRO & Speed Optimisation',
                desc: 'We fix what\'s slowing your store down and increase conversions — no full rebuild.',
                href: '/services/shopify-cro-speed',
                color: '#F59E0B',
              },
              {
                q: 'On WooCommerce, Magento, or another platform?',
                answer: 'You need a Shopify Migration',
                desc: 'Move to Shopify with zero data loss, zero SEO drop, and zero downtime.',
                href: '/services/shopify-migration',
                color: '#10B981',
              },
            ].map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: 'none' }} className="group">
                <div className="rounded-2xl p-5 h-full flex flex-col transition-all" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}25` }}>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: '0.75rem' }}>{item.q}</p>
                  <p style={{ fontWeight: 700, color: item.color, fontSize: '0.9rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>{item.answer}</p>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.55, flex: 1 }}>{item.desc}</p>
                  <div className="flex items-center gap-1.5 mt-3" style={{ color: item.color, fontSize: '0.75rem', fontWeight: 600 }}>
                    Learn more <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.25rem' }}>
            Still unsure?{' '}
            <Link href="/contact" style={{ color: accent, textDecoration: 'none' }}>Send us a message</Link>
            {' '}and we&apos;ll recommend the right approach for your situation — free.
          </p>
        </div>
      </section>

      {/* Shopify Core Services */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="SHOPIFY SERVICES"
            title="Shopify development & optimisation"
            sub="Core Shopify services — from new store builds and custom apps to migrations and conversion optimisation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shopifyCore.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Shopify by Industry */}
      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="SHOPIFY BY INDUSTRY"
            title="Industry-specific Shopify builds"
            sub="Every industry has different product structures, buying journeys and technical requirements. We specialise across all of them."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shopifyIndustry.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="WEB DEVELOPMENT"
            title="Beyond Shopify"
            sub="When the project calls for WordPress, a custom React app, a Node.js API or a Laravel backend — we build those too."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {otherServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
