import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ServiceHero, { ServiceTable, SectionHead } from '@/components/services/ServiceHero'
import { breadcrumb, itemList, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Shopify Services: Pick the Result You Need | Miracle Websoft',
  description: 'Dedicated Shopify services at fixed prices: launch a store in 7 days, speed fixes, conversion fixes, data-checked migration, Plus checkout, international and a dedicated developer.',
  alternates: { canonical: 'https://miraclewebsoft.com/services' },
  openGraph: {
    title: 'Shopify Services: Pick the Result You Need | Miracle Websoft',
    description: 'Dedicated Shopify services at fixed prices: launch a store in 7 days, speed fixes, conversion fixes, data-checked migration, Plus checkout, international and a dedicated developer.',
    url: 'https://miraclewebsoft.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Services: Pick the Result You Need | Miracle Websoft',
    description: 'Dedicated Shopify services at fixed prices: launch a store in 7 days, speed fixes, conversion fixes, data-checked migration, Plus checkout, international and a dedicated developer.',
  },
}

type Svc = { title: string; desc: string; href: string; price?: string }

// ─── Service groups ───────────────────────────────────────────────────────────

const shopifyCore: Svc[] = [
  {
    title: 'Shopify Services',
    desc: 'Store development, Shopify Plus, theme customization, custom features, app integration, maintenance, APIs and custom apps.',
    href: '/services/shopify',
  },
  {
    title: 'Custom Shopify Development',
    desc: 'Build or rebuild your Shopify store around faster mobile shopping, clearer product pages and a buying journey that supports more sales.',
    href: '/services/shopify/development',
    price: 'From $600',
  },
  {
    title: 'Shopify App Development',
    desc: 'Create custom Shopify features that automate manual work, replace expensive app subscriptions and support buying experiences standard apps cannot handle.',
    href: '/services/shopify-app-development',
    price: 'From $1,500',
  },
  {
    title: 'Shopify Migrations',
    desc: 'Move to Shopify from WooCommerce, Magento, BigCommerce or another platform without risking orders, customers, products or SEO visibility.',
    href: '/services/shopify-migration',
    price: 'Fixed quote',
  },
  {
    title: 'Shopify Custom Features',
    desc: 'Build bundles, quizzes, product tools, configurators, portals and store logic that standard apps cannot handle.',
    href: '/services/shopify/custom-features',
    price: 'From $1,500',
  },
]

// Outcome-based Shopify offers: one result, fixed price, timeline and guarantee.
const shopifyOutcomes: Svc[] = [
  {
    title: 'Launch-Ready Shopify Store',
    desc: 'Live and taking orders in 7 days, with payments, taxes, shipping and mobile layout tested.',
    href: '/services/shopify-store-launch',
    price: 'From $600',
  },
  {
    title: 'Dedicated Shopify Developer',
    desc: 'The same Shopify developer on your store every month, working through your task list. Cancel anytime.',
    href: '/services/dedicated-shopify-developer',
    price: 'From $299/mo',
  },
  {
    title: 'Shopify Plus Checkout Upgrade',
    desc: 'Upsells, delivery date pickers and custom fields in checkout, built with native extensions and Functions.',
    href: '/services/shopify-checkout-customization',
    price: 'Fixed price per feature',
  },
  {
    title: 'Sell Internationally',
    desc: 'Shopify Markets, local currencies and native translations, including migration off Langify or Weglot.',
    href: '/services/shopify-international-expansion',
    price: 'Fixed price per market',
  },
]

const growthServices: Svc[] = [
  {
    title: 'Conversion Audit + Fix',
    desc: 'Find where shoppers drop off between product page and checkout, then fix the biggest leaks at a fixed price.',
    href: '/services/conversion-rate-optimization',
    price: 'Free teardown first',
  },
  {
    title: 'Shopify Speed Fix Sprint',
    desc: 'Faster revenue pages on mobile, measured before and after. No measurable improvement, no fee.',
    href: '/services/shopify-speed-optimization',
    price: 'Fixed quote after teardown',
  },
  {
    title: 'CRO & Speed Combined',
    desc: 'A focused program for stores that need faster pages and clearer buying journeys in the same engagement.',
    href: '/services/shopify-cro-speed',
    price: 'Fixed quote after teardown',
  },
]

const aiCore: Svc[] = [
  {
    title: 'AI Services',
    desc: 'AI business automation, workflow automation, OpenAI integrations, chatbots, internal tools, agents and consulting.',
    href: '/services/ai',
  },
  {
    title: 'AI Business Automation',
    desc: 'Automate repetitive operations, reporting, support workflows and lead handling with practical AI systems.',
    href: '/services/ai/ai-business-automation',
  },
  {
    title: 'OpenAI Integrations',
    desc: 'Add OpenAI-powered search, drafting, extraction, support or workflow features to your website, app or internal tool.',
    href: '/services/ai/openai-integrations',
  },
  {
    title: 'AI Chatbots & Support',
    desc: 'AI chatbots and customer support automation grounded in approved policies, product data and escalation rules.',
    href: '/services/ai/ai-chatbots',
  },
]

const shopifyIndustry: Svc[] = [
  {
    title: 'Shopify for Clothing Brands',
    desc: 'Fashion-specific Shopify builds — size guides, fit tools, lookbooks, Instagram integration and mobile-first design.',
    href: '/services/shopify/fashion-apparel',
  },
  {
    title: 'Shopify for Electronics',
    desc: 'Complex variant trees, spec comparison tables, B2B wholesale and high-SKU catalogue architecture.',
    href: '/services/shopify/electronics',
  },
  {
    title: 'Shopify for Beauty & Cosmetics',
    desc: 'Shade matching, skincare quiz funnels, subscriptions, ingredient transparency and UGC-powered product pages.',
    href: '/services/shopify/beauty-cosmetics',
  },
  {
    title: 'Shopify for Health & Wellness',
    desc: 'Supplement subscriptions, compliant claims architecture, quiz funnels, lab-result display and replenishment flows.',
    href: '/services/shopify/health-wellness',
  },
  {
    title: 'Shopify for Jewelry',
    desc: 'Luxury positioning, custom engraving flows, ring size guides, high-res zoom and premium checkout experiences.',
    href: '/services/shopify/jewelry',
  },
  {
    title: 'Shopify for Food & Beverage',
    desc: 'Subscription delivery, allergen display, date pickers, age verification and corporate gifting flows.',
    href: '/services/shopify/food-beverage',
  },
  {
    title: 'Shopify for Home & Furniture',
    desc: 'Room visualisation, custom configurators, freight shipping, swatch requests and trade account portals.',
    href: '/services/shopify/home-decor',
  },
  {
    title: 'Shopify for Sports & Fitness',
    desc: 'Supplement subscriptions, gym B2B ordering, equipment bundles and performance-gear size guides.',
    href: '/services/shopify/sports-fitness',
  },
  {
    title: 'Shopify for Pet Supplies',
    desc: 'Breed filtering, pet food subscriptions, portion calculators and vet-approval trust signals.',
    href: '/services/shopify/pets',
  },
  {
    title: 'Shopify B2B & Wholesale',
    desc: 'Wholesale catalogues, company accounts, customer-specific pricing and reorder flows alongside your retail store.',
    href: '/services/shopify/b2b-wholesale',
  },
  {
    title: 'Shopify for Subscription & DTC',
    desc: 'Subscription products, bundles and retention flows for direct-to-consumer brands.',
    href: '/services/shopify/subscription-dtc',
  },
  {
    title: 'Shopify for Print on Demand',
    desc: 'Personalised products, print-on-demand app integrations and order routing.',
    href: '/services/shopify/print-on-demand',
  },
]

const otherServices: Svc[] = [
  {
    title: 'Custom Web Development',
    desc: 'Custom portals, dashboards, automations and web apps that solve business problems your ecommerce stack cannot solve on its own.',
    href: '/services/custom-web-development',
    price: 'From $1,500',
  },
  {
    title: 'WordPress Development',
    desc: 'Business websites, WooCommerce stores and content platforms built cleanly when Shopify is not the right fit.',
    href: '/services/wordpress-development',
  },
]

const fullStackServices: Svc[] = [
  {
    title: 'Custom Software (Stop Renting, Start Owning)',
    desc: 'Custom alternatives to CRM, ERP, invoicing, inventory and SaaS tools. One-time build, no per-user licence fees for your own software.',
    href: '/services/custom-software-development',
    price: 'Fixed quote',
  },
  {
    title: 'Full Stack Web Application Development',
    desc: 'React, Node.js, Laravel and PHP applications: dashboards, admin panels, portals and SaaS, plus modernising existing systems.',
    href: '/services/full-stack-development',
    price: 'From $1,500',
  },
  {
    title: 'API Integration & Backend Development',
    desc: 'REST, GraphQL and webhook integrations between CRMs, ERPs, LMSs, ecommerce, payment, subscription and shipping platforms.',
    href: '/services/api-integration',
  },
  {
    title: 'CRM Development & SuiteCRM',
    desc: 'SuiteCRM modules, workflows, reports and performance tuning, or a custom CRM you own.',
    href: '/services/crm-development',
  },
  {
    title: 'Moodle LMS Development',
    desc: 'Moodle plugins and themes, enrollment and permissions, REST web services and WordPress integration.',
    href: '/services/moodle-development',
  },
  {
    title: 'Laravel & PHP Development',
    desc: 'New Laravel apps and APIs, Yii2 customization, legacy PHP upgrades and performance fixes.',
    href: '/services/laravel-development',
  },
  {
    title: 'WordPress Plugin Development',
    desc: 'Custom WordPress plugins and WooCommerce extensions that replace paid add-ons and connect to your systems.',
    href: '/services/wordpress-plugin-development',
  },
  {
    title: 'Maintenance, Bug Fixing & Support',
    desc: 'Debugging, WordPress and Shopify speed work, PHP and API troubleshooting, updates and ongoing technical support.',
    href: '/services/website-maintenance',
  },
]

const toRows = (list: Svc[]) => list.map((x) => ({ name: x.title, line: x.desc, price: x.price, href: x.href }))

// Non-Shopify pages: listed once, in small print, at the bottom.
const otherDev = [
  ...aiCore.slice(0, 1),
  ...fullStackServices,
  ...otherServices,
  { title: 'Website development (US/UK/AU)', desc: '', href: '/website-development' },
].filter((x, i, all) => all.findIndex((y) => y.href === x.href) === i)

const groups = [
  { id: 'shopify-outcomes', eyebrow: 'Shopify outcomes', title: 'One result, a fixed price, a guarantee.', items: shopifyOutcomes },
  { id: 'shopify-services', eyebrow: 'Shopify', title: 'Build, rebuild and extend your store.', items: shopifyCore },
  { id: 'cro-performance', eyebrow: 'CRO & speed', title: 'More orders from the traffic you already have.', items: growthServices },
]

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
    items: [...shopifyOutcomes, ...shopifyCore, ...growthServices, ...shopifyIndustry].map((s) => ({
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

      <ServiceHero
        eyebrow="Shopify services"
        title={<>Shopify development services, <span className="mw-mark">picked by the result you need.</span></>}
        lede="Everything here is Shopify. One result per project, a fixed price, and a guarantee. 700+ projects since 2016."
        aside={
          <aside className="audit-form-card" style={{ boxShadow: 'none' }} aria-label="Which service do I need?">
            <p className="mw-num" style={{ marginBottom: '0.75rem' }}>WHICH ONE DO I NEED?</p>
            <ul id="find-service">
              {[
                { q: 'Getting traffic but not enough orders?', a: 'Conversion rate optimisation', href: '/services/conversion-rate-optimization' },
                { q: 'Launching, rebranding or stuck with a bad theme?', a: 'Shopify store development', href: '/services/shopify/development' },
                { q: 'Moving from WooCommerce, Magento or Wix?', a: 'Shopify migration', href: '/services/shopify-migration' },
                { q: 'Need a Shopify developer every month?', a: 'Dedicated Shopify developer', href: '/services/dedicated-shopify-developer' },
              ].map((item) => (
                <li key={item.href} style={{ borderTop: '1px solid var(--border)' }}>
                  <Link href={item.href} className="group flex items-start justify-between gap-4" style={{ padding: '0.85rem 0' }}>
                    <span>
                      <span style={{ display: 'block', color: 'var(--text-3)', fontSize: '0.86rem', lineHeight: 1.45 }}>{item.q}</span>
                      <span style={{ display: 'block', color: 'var(--text-1)', fontSize: '0.98rem', fontWeight: 600, marginTop: '0.2rem' }}>{item.a}</span>
                    </span>
                    <ArrowUpRight size={17} className="shrink-0 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-4)', marginTop: 4 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        }
      />

      <nav aria-label="Service categories" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="flex gap-6 overflow-x-auto" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            {[...groups.map((g) => ({ label: g.eyebrow, href: `#${g.id}` })), { label: 'By industry', href: '#industry-shopify' }].map((item) => (
              <a key={item.href} href={item.href} className="shrink-0 mw-num hover:text-[var(--text-1)]" style={{ color: 'var(--text-2)' }}>
                {item.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {groups.map((g, i) => (
        <section key={g.id} id={g.id} className="mw-section" style={{ borderTop: i ? '1px solid var(--border)' : undefined, scrollMarginTop: 96 }}>
          <div className="mw-container">
            <SectionHead eyebrow={g.eyebrow} title={g.title} />
            <ServiceTable items={toRows(g.items)} />
          </div>
        </section>
      ))}

      <section id="industry-shopify" className="mw-section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)', scrollMarginTop: 96 }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="Shopify by industry"
            title="Every category sells differently."
            intro="Different buyer questions, product structures and trust signals. These pages cover what we build for each."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10" style={{ borderTop: '1px solid var(--text-1)' }}>
            {shopifyIndustry.map((s) => (
              <li key={s.href} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link href={s.href} className="group block" style={{ padding: '1.1rem 0' }}>
                  <span className="flex items-center justify-between gap-3">
                    <span style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.2rem', color: 'var(--text-1)', letterSpacing: '-0.01em' }}>{s.title.replace('Shopify for ', '')}</span>
                    <ArrowUpRight size={16} className="shrink-0 transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--text-4)' }} />
                  </span>
                  <span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-3)', lineHeight: 1.55, marginTop: '0.3rem' }}>{s.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Not promoted: kept so these pages stay linked for SEO and existing visitors. */}
      <section id="other-development" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: 96 }}>
        <div className="mw-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-3)', lineHeight: 1.8 }}>
            <span className="mw-num" style={{ marginRight: '0.75rem' }}>OTHER DEVELOPMENT WORK</span>
            {[...otherDev].map((x, i) => (
              <span key={x.href}>
                {i > 0 && ' · '}
                <Link href={x.href} className="underline underline-offset-4">{x.title}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  )
}
