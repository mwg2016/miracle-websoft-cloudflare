import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot, BrainCircuit, Gauge, MessageSquare, ShoppingBag, Cpu, Sparkles, Zap, ArrowLeftRight,
  Shirt, Dumbbell, PawPrint, FlaskConical, Gem, UtensilsCrossed, Sofa,
  Globe, Code2,
} from 'lucide-react'
import CtaBanner from '@/components/home/CtaBanner'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify, AI & Ecommerce Growth Services | Miracle Websoft',
  description: 'Explore Shopify development, CRO, store speed, AI automation and custom web services designed to improve ecommerce revenue, operations and growth.',
  alternates: { canonical: 'https://miraclewebsoft.com/services' },
  openGraph: {
    title: 'Shopify, AI & Ecommerce Growth Services | Miracle Websoft',
    description: 'Explore Shopify development, CRO, store speed, AI automation and custom web services designed to improve ecommerce revenue, operations and growth.',
    url: 'https://miraclewebsoft.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify, AI & Ecommerce Growth Services | Miracle Websoft',
    description: 'Explore Shopify development, CRO, store speed, AI automation and custom web services designed to improve ecommerce revenue, operations and growth.',
  },
}

const accent = '#6c63ff'

// ─── Service groups ───────────────────────────────────────────────────────────

const shopifyCore = [
  {
    icon: ShoppingBag,
    title: 'Shopify Services',
    desc: 'Store development, Shopify Plus, theme customization, custom features, app integration, maintenance, APIs and private apps.',
    href: '/services/shopify',
    badge: 'Core',
  },
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
    icon: Sparkles,
    title: 'Shopify Custom Features',
    desc: 'Build bundles, quizzes, product tools, configurators, portals and store logic that standard apps cannot handle.',
    href: '/services/shopify/custom-features',
  },
]

const growthServices = [
  {
    icon: Zap,
    title: 'Conversion Rate Optimization',
    desc: 'Improve buyer journeys with Microsoft Clarity review, heatmap analysis, product page optimization, checkout fixes and testing.',
    href: '/services/conversion-rate-optimization',
    badge: 'CRO',
  },
  {
    icon: Gauge,
    title: 'Shopify Speed Optimization',
    desc: 'Improve Core Web Vitals, PageSpeed, LCP, CLS, INP, image delivery, app bloat and mobile performance.',
    href: '/services/shopify-speed-optimization',
    badge: 'Performance',
  },
  {
    icon: Zap,
    title: 'CRO & Speed Combined',
    desc: 'A focused program for stores that need faster pages and clearer buying journeys in the same engagement.',
    href: '/services/shopify-cro-speed',
  },
]

const aiCore = [
  {
    icon: BrainCircuit,
    title: 'AI Services',
    desc: 'AI business automation, workflow automation, OpenAI integrations, chatbots, internal tools, agents and consulting.',
    href: '/services/ai',
    badge: 'New',
  },
  {
    icon: Bot,
    title: 'AI Business Automation',
    desc: 'Automate repetitive operations, reporting, support workflows and lead handling with practical AI systems.',
    href: '/services/ai/ai-business-automation',
  },
  {
    icon: Sparkles,
    title: 'OpenAI Integrations',
    desc: 'Add OpenAI-powered search, drafting, extraction, support or workflow features to your website, app or internal tool.',
    href: '/services/ai/openai-integrations',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Support',
    desc: 'AI chatbots and customer support automation grounded in approved policies, product data and escalation rules.',
    href: '/services/ai/ai-chatbots',
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
    icon: Code2,
    title: 'Custom Web Development',
    desc: 'Custom portals, dashboards, automations and web apps that solve business problems your ecommerce stack cannot solve on its own.',
    href: '/services/custom-web-development',
    badge: 'Software',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Business websites, WooCommerce stores and content platforms built cleanly when Shopify is not the right fit.',
    href: '/services/wordpress-development',
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
    <Link href={href} className="group mw-card h-full" style={{ padding: '1.35rem', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
      <div className="flex items-start justify-between gap-3" style={{ marginBottom: '1rem' }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
          <Icon size={17} style={{ color: accent }} />
        </div>
        {badge ? (
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 7px', borderRadius: 999, background: `${accent}16`, color: accent, border: `1px solid ${accent}28`, whiteSpace: 'nowrap' }}>
            {badge}
          </span>
        ) : (
          <ArrowRight size={15} style={{ color: 'rgba(255,255,255,0.32)' }} className="group-hover:text-white transition-colors" />
        )}
      </div>
      <h3 style={{ fontSize: '0.975rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem', flex: 1 }}>{desc}</p>
      <span style={{ fontSize: '0.76rem', color: accent, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, marginTop: 'auto' }}>
        Open service <ArrowRight size={12} />
      </span>
    </Link>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1fr] gap-5 items-end" style={{ marginBottom: '2rem' }}>
      <div>
        <span className="mw-eyebrow">{eyebrow}</span>
        <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,34px)', marginBottom: 0 }}>{title}</h2>
      </div>
      {sub && <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300, maxWidth: '620px', lineHeight: 1.65, marginBottom: '0.2rem' }}>{sub}</p>}
    </div>
  )
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const jsonLd = renderJsonLd([
  webPage({
    name: 'All Services — Miracle Websoft',
    description:
      'Shopify development, CRO, performance optimization, AI automation, OpenAI integrations, WordPress and custom web applications for merchants and businesses that need measurable outcomes.',
    url: 'https://miraclewebsoft.com/services',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]),
  itemList({
    name: 'Services offered by Miracle Websoft',
    items: [...shopifyCore, ...growthServices, ...aiCore, ...shopifyIndustry, ...otherServices].map((s) => ({
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-end">
            <div className="max-w-3xl">
              <span className="mw-eyebrow">ALL SERVICES</span>
              <h1 style={{ color: '#fff', marginBottom: '1.1rem' }}>
                Choose the growth service<br />
                <span style={{ color: 'var(--accent)' }}>that fixes the real business problem.</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.04rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '640px' }}>
                Whether you need a better Shopify store, more conversions, faster pages, AI automation or custom business software, start with the outcome you want. Not sure which service fits?{' '}
                <Link href="#find-service" style={{ color: accent, textDecoration: 'none' }}>Answer 3 quick questions below</Link>{' '}
                and we will point you to the right path.
              </p>
            </div>

            <aside className="mw-card" style={{ padding: '1.25rem' }} aria-label="Recommended service paths">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontWeight: 700, marginBottom: '0.9rem' }}>Start here</p>
              <div className="flex flex-col">
                {[
                  { label: 'Build or improve a Shopify store', href: '/services/shopify', detail: 'Development, migrations, custom apps' },
                  { label: 'Increase sales from existing traffic', href: '/services/conversion-rate-optimization', detail: 'CRO, speed, checkout and product pages' },
                  { label: 'Automate manual business work', href: '/services/ai', detail: 'OpenAI integrations and workflow automation' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-4" style={{ padding: '0.85rem 0', textDecoration: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <span>
                      <span style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 650, lineHeight: 1.35 }}>{item.label}</span>
                      <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.74rem', lineHeight: 1.45, marginTop: '0.2rem' }}>{item.detail}</span>
                    </span>
                    <ArrowRight size={15} style={{ color: accent, flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {[
              { stat: '650+', label: 'Projects delivered' },
              { stat: '15k+', label: 'Hours delivered' },
              { stat: '10+', label: 'Years on Shopify' },
              { stat: '24h', label: 'Proposal turnaround' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#080808', padding: '1rem 1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.55rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.stat}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Service categories" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="flex gap-2 overflow-x-auto" style={{ paddingTop: '0.9rem', paddingBottom: '0.9rem' }}>
            {[
              { label: 'Find service', href: '#find-service' },
              { label: 'Shopify', href: '#shopify-services' },
              { label: 'CRO & speed', href: '#cro-performance' },
              { label: 'AI automation', href: '#ai-services' },
              { label: 'Industries', href: '#industry-shopify' },
              { label: 'Web development', href: '#web-development' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="shrink-0" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.035)', borderRadius: 999, padding: '0.55rem 0.85rem', fontSize: '0.78rem', fontWeight: 600 }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

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
                answer: 'You need Shopify Services',
                desc: 'A store built around your brand, products, mobile shoppers and conversion goals.',
                href: '/services/shopify',
                color: '#6C63FF',
              },
              {
                q: 'Getting traffic but not enough orders?',
                answer: 'You need Conversion Rate Optimization',
                desc: 'We fix what slows shoppers down and improve conversion without rebuilding unless it is truly needed.',
                href: '/services/conversion-rate-optimization',
                color: '#F59E0B',
              },
              {
                q: 'Repeating manual work across tools, reports, support or operations?',
                answer: 'You need AI Automation',
                desc: 'We connect your systems and build practical AI workflows with human review where it matters.',
                href: '/services/ai',
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
            <Link href="/contact" style={{ color: accent, textDecoration: 'none' }}>Book a free consultation</Link>
            {' '}and we will recommend the right approach for your situation.
          </p>
        </div>
      </section>

      {/* Shopify Core Services */}
      <section id="shopify-services" style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem' }}>
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

      {/* CRO and Performance */}
      <section id="cro-performance" style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="CRO & PERFORMANCE"
            title="Improve conversions and speed"
            sub="For stores with traffic but not enough orders, we fix friction through user journey analysis, Microsoft Clarity, heatmaps, checkout improvements, Core Web Vitals and PageSpeed optimization."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {growthServices.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section id="ai-services" style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <SectionHeader
            eyebrow="AI SERVICES"
            title="Automate work and build smarter tools"
            sub="AI should save time, improve customer experience or make a workflow measurably better. We build AI automation, OpenAI integrations, chatbots and internal tools around real operations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiCore.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Shopify by Industry */}
      <section id="industry-shopify" style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
      <section id="web-development" style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
