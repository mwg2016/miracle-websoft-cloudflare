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
  title: 'Shopify Services for Growth, Speed & Conversions | Miracle Websoft',
  description: 'Shopify development, CRO, speed optimization, migrations and custom apps for merchants who want faster stores, better customer experience and more qualified sales.',
  alternates: { canonical: 'https://miraclewebsoft.com/services' },
}

const accent = '#6c63ff'

// ─── Service groups ───────────────────────────────────────────────────────────

const shopifyCore = [
  {
    icon: ShoppingBag,
    title: 'Custom Shopify Development',
    desc: 'Build or rebuild your Shopify store around faster mobile shopping, clearer product pages and a buying journey that supports more sales.',
    href: '/services/shopify/development',
    badge: 'Most popular',
  },
  {
    icon: Sparkles,
    title: 'Shopify App Development',
    desc: 'Create custom Shopify features that automate manual work, replace expensive app subscriptions and support buying experiences standard apps cannot handle.',
    href: '/services/shopify-app-development',
  },
  {
    icon: ArrowLeftRight,
    title: 'Shopify Migrations',
    desc: 'Move to Shopify from WooCommerce, Magento, BigCommerce or another platform without risking orders, customers, products or SEO visibility.',
    href: '/services/shopify-migration',
  },
  {
    icon: Zap,
    title: 'CRO & Speed Optimisation',
    desc: 'Improve an existing Shopify store by fixing slow pages, confusing buying journeys, app bloat and checkout friction.',
    href: '/services/shopify-cro-speed',
  },
]

const shopifyIndustry = [
  {
    icon: Shirt,
    title: 'Shopify for Clothing Brands',
    desc: 'Fashion-specific Shopify builds — size guides, fit tools, lookbooks, Instagram integration and mobile-first design.',
    href: '/services/shopify/fashion-apparel',
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
    title: 'Shopify for Beauty & Cosmetics',
    desc: 'Shade matching, skincare quiz funnels, subscriptions, ingredient transparency and UGC-powered product pages.',
    href: '/services/shopify/beauty-cosmetics',
  },
  {
    icon: FlaskConical,
    title: 'Shopify for Health & Wellness',
    desc: 'Supplement subscriptions, compliant claims architecture, quiz funnels, lab-result display and replenishment flows.',
    href: '/services/shopify/health-wellness',
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
    desc: 'Business websites, WooCommerce stores and content platforms built cleanly when Shopify is not the right fit.',
    href: '/services/wordpress-development',
  },
  {
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Custom portals, dashboards, automations and web apps that solve business problems your ecommerce stack cannot solve on its own.',
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
        See how this helps <ArrowRight size={12} />
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
      'Shopify development, app development, migrations, CRO, WordPress and custom web applications for merchants and businesses that need measurable outcomes.',
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
              Choose the Shopify service<br />
              <span style={{ color: 'var(--accent)' }}>that fixes the real business problem.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, fontWeight: 300, maxWidth: '540px' }}>
              Whether you need more conversions, a faster store, a safer migration or a custom Shopify feature, start with the outcome you want. Not sure which service fits?{' '}
              <Link href="#find-service" style={{ color: accent, textDecoration: 'none' }}>Answer 3 quick questions below</Link>{' '}
              and we will point you to the right path.
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
              { stat: '98%+', label: 'Upwork job success' },
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
                q: 'Launching, rebranding or replacing a theme that is holding you back?',
                answer: 'You need Custom Shopify Development',
                desc: 'A store built around your brand, products, mobile shoppers and conversion goals.',
                href: '/services/shopify/development',
                color: '#6C63FF',
              },
              {
                q: 'Getting traffic but not enough orders?',
                answer: 'You need CRO & Speed Optimisation',
                desc: 'We fix what slows shoppers down and improve conversion without rebuilding unless it is truly needed.',
                href: '/services/shopify-cro-speed',
                color: '#F59E0B',
              },
              {
                q: 'Stuck on WooCommerce, Magento, BigCommerce or a custom platform?',
                answer: 'You need a Shopify Migration',
                desc: 'Move to Shopify with a careful plan for products, customers, orders, redirects and launch day.',
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
                    View the service <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '1.25rem' }}>
            Still unsure?{' '}
            <Link href="/contact" style={{ color: accent, textDecoration: 'none' }}>Request a free Shopify store review</Link>
            {' '}and we will recommend the right approach for your situation.
          </p>
        </div>
      </section>

      {/* Shopify Core Services */}
      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="SHOPIFY SERVICES"
            title="Shopify services that support revenue"
            sub="From new builds and custom apps to migrations and conversion optimization, every service is planned around speed, customer experience and sales."
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
            title="Industry-specific Shopify guidance"
            sub="Every category has different buyer questions, product structures and trust signals. We use that context to build stronger shopping experiences."
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
            sub="When your business needs a non-Shopify website, customer portal, dashboard or automation, we build that with the same conversion and performance focus."
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
