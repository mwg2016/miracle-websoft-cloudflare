import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { breadcrumb, itemList, renderJsonLd, softwareApplication, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

const WHATSAPP_URL = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent('Hi Karam, I have a tool idea I\'d like to discuss.')}`)

export const metadata: Metadata = {
  title: 'Custom Tool Development — Fast & Affordable | Miracle Websoft',
  description: 'We build digital tools, SaaS apps and web products in 5–7 days. From $200. See our live tools and get a quote for your idea.',
  alternates: { canonical: 'https://miraclewebsoft.com/tools' },
  openGraph: {
    title: 'Custom Tool Development — Fast & Affordable | Miracle Websoft',
    description: 'We build digital tools in 5–7 days from $200. See our live tools.',
    url: 'https://miraclewebsoft.com/tools',
    type: 'website',
  },
}

const builtTools = [
  {
    badge: 'Live Tool',
    title: 'Shopify Theme Detector',
    url: 'https://themedetectorapp.com/',
    urlLabel: 'themedetectorapp.com',
    budget: '$300',
    timeline: '7 days',
    desc: 'Detects the exact Shopify theme any store is running — plus installed apps, product count and collections. No login, no API key, 100% free.',
    features: [
      { label: 'Theme Detection', desc: 'Identify any Shopify theme via JS object analysis' },
      { label: 'App Detection', desc: 'Recognises 65+ apps via script signatures' },
      { label: 'Product Count', desc: 'Uses public products.json endpoint' },
      { label: 'Collections', desc: 'Counts published collections instantly' },
    ],
  },
  {
    badge: 'Chrome Extension',
    title: 'Shopify Theme Detector — Chrome Extension',
    url: 'https://chromewebstore.google.com/detail/shopify-theme-detector/ilmiphgaadpgclojkoghokmcfoehnlmn',
    urlLabel: 'Chrome Web Store',
    budget: 'Free',
    timeline: '7 days',
    desc: 'One-click Chrome extension that detects the Shopify theme, installed apps and store data on any storefront — straight from your browser toolbar. No tab switching, no pasting URLs.',
    features: [
      { label: 'One-click Detect', desc: 'Theme + apps surface the moment you open the popup' },
      { label: 'Toolbar Icon', desc: 'Pin once, works on every Shopify storefront you visit' },
      { label: 'App Recognition', desc: 'Recognises 65+ Shopify apps via script signatures' },
      { label: 'Store Data', desc: 'Product count, collections and theme version at a glance' },
    ],
  },
  {
    badge: 'Live SaaS',
    title: 'WA Auto-Reply',
    url: 'https://www.whatsappautomaticreply.com/',
    urlLabel: 'whatsappautomaticreply.com',
    budget: '$500',
    timeline: '7 days',
    desc: 'AI-powered WhatsApp auto-reply tool. Handles customer messages 24/7 with Claude AI, keyword triggers, working hours, number filtering and 8 language support.',
    features: [
      { label: 'Claude AI Replies', desc: 'Powered by Anthropic Claude for natural responses' },
      { label: 'Keyword Triggers', desc: 'Custom keyword-based auto-response rules' },
      { label: 'Working Hours', desc: 'Set active hours and scheduling' },
      { label: '8 Languages', desc: 'Multi-language support out of the box' },
    ],
  },
  {
    badge: 'Shopify App',
    title: 'Miracle PC Builder',
    url: 'https://apps.shopify.com/pc-builder-mw',
    urlLabel: 'Shopify App Store',
    dedicatedPage: '/tools/pc-builder',
    budget: '$9.99/mo',
    timeline: '14-day trial',
    desc: 'Interactive PC configurator for Shopify stores. Lets customers build compatible PCs step by step and checkout in one click — with real-time compatibility validation and AI-powered component fill.',
    features: [
      { label: 'Compatibility Engine', desc: 'Real-time CPU socket, RAM, power and form factor validation' },
      { label: 'Bundle Checkout', desc: 'Full PC build added to cart in one click' },
      { label: 'AI-Powered Fill', desc: 'Auto-populate component data and compatibility notes' },
      { label: 'Order Analytics', desc: 'Track builds, configs, conversion rates and AOV per widget' },
    ],
  },
  {
    badge: 'This Website',
    title: 'miraclewebsoft.com',
    url: 'https://miraclewebsoft.com',
    urlLabel: 'miraclewebsoft.com',
    budget: '$200',
    timeline: '5 days',
    desc: 'The website you\'re on right now — built by our team in 5 days. Next.js, Tailwind CSS, full SEO setup, contact form, blog, case studies, 20+ pages. All for $200.',
    features: [
      { label: 'Next.js 16', desc: 'App Router, SSR, standalone output' },
      { label: '20+ Pages', desc: 'Services, industries, blog, case studies' },
      { label: 'Full SEO', desc: 'Structured data, sitemap, meta tags' },
      { label: 'Contact Form', desc: 'Lead forms delivered by email' },
    ],
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 'From $200',
    timeline: '3–5 days',
    desc: 'Landing pages, portfolio sites, single-purpose web tools and simple calculators.',
    examples: ['Business website', 'Portfolio site', 'Simple web tool', 'Landing page with CTA'],
  },
  {
    name: 'Growth',
    price: 'From $300',
    timeline: '5–7 days',
    popular: true,
    desc: 'Single-feature SaaS tools, Shopify utility apps, API-powered detectors and scrapers.',
    examples: ['Shopify store analyser', 'URL checker / detector', 'API wrapper tool', 'Browser extension'],
  },
  {
    name: 'Advanced',
    price: 'From $500',
    timeline: '7 days',
    desc: 'SaaS with user auth, subscriptions, AI integration, automation and multi-feature apps.',
    examples: ['AI-powered automation', 'WhatsApp / SMS bots', 'SaaS with billing', 'Multi-platform integrations'],
  },
]

const processSteps = [
  { n: '01', title: 'Share your idea', desc: 'Tell us what you want to build — a quick message is enough. We respond within 24 hours.' },
  { n: '02', title: 'We scope it', desc: 'We send a fixed-price proposal with timeline, stack and deliverables. No hidden costs.' },
  { n: '03', title: 'We build it', desc: 'Development starts immediately. You get daily updates. Most tools ship in 5–7 days.' },
  { n: '04', title: 'You go live', desc: 'We deploy it, hand over the code, and support you post-launch. Done.' },
]

const stats = [
  { value: '5–7', unit: 'days', label: 'Typical build time' },
  { value: '$200', unit: '+', label: 'Starting budget' },
  { value: '5', unit: '', label: 'Live tools shipped' },
  { value: '1000s', unit: '', label: 'Users across tools' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Custom Tool Development — Miracle Websoft',
    description:
      'We build digital tools, SaaS apps and web products in 5–7 days starting from $200. See our live tools and get a quote.',
    url: 'https://miraclewebsoft.com/tools',
    type: 'CollectionPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools' },
  ]),
  ...builtTools.map((t) =>
    softwareApplication({
      name: t.title,
      description: t.desc,
      url: t.url,
      category: 'BusinessApplication',
    })
  ),
  itemList({
    name: 'Tools shipped by Miracle Websoft',
    items: builtTools.map((t) => {
      const dedicated = (t as { dedicatedPage?: string }).dedicatedPage
      return {
        name: t.title,
        url: dedicated ? `https://miraclewebsoft.com${dedicated}` : t.url,
        description: t.desc,
      }
    }),
  }),
])

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="mw-eyebrow">Tool development</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
              Small tools, <span className="mw-mark">shipped in a week.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>
              From idea to live product in 5–7 days. Below are five we&apos;ve already shipped. Tell us what you need and we&apos;ll price it, build it and launch it.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <a href="#get-quote" className="mw-btn-accent">Get a fixed quote <ArrowRight size={16} /></a>
              <a href="#tools" className="mw-btn-outline">See what we&apos;ve built</a>
            </div>
          </div>
          <dl className="audit-facts" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 0 }}>
            {stats.map((s, i) => (
              <div key={s.label} style={i === 2 ? { paddingLeft: 0, borderLeft: 0, borderTop: '1px solid var(--border)' } : i === 3 ? { borderTop: '1px solid var(--border)' } : undefined}>
                <dt>{s.label}</dt>
                <dd>{s.value}{s.unit && <span style={{ fontSize: '0.6em', color: 'var(--text-3)', marginLeft: '0.2em' }}>{s.unit}</span>}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tools we've built */}
      <section id="tools" className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Live &amp; shipped</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '1rem' }}>Tools we&apos;ve already built and launched.</h2>
          <p style={{ maxWidth: '52ch', marginBottom: '3rem' }}>
            Every tool here was built in under two weeks on a tight budget. Click through and use them.
          </p>

          <ol style={{ borderTop: '1px solid var(--text-1)' }}>
            {builtTools.map((tool, i) => (
              <li key={tool.title} className="grid lg:grid-cols-[3rem_1.1fr_1fr] gap-x-8 gap-y-5" style={{ padding: '2.25rem 0', borderBottom: '1px solid var(--border)' }}>
                <span className="mw-num" style={{ paddingTop: '0.4rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2" style={{ marginBottom: '0.75rem' }}>
                    <span className="mw-pill">{tool.badge}</span>
                    <span className="mw-num">{tool.budget} · {tool.timeline}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontSize: 'clamp(1.5rem, 2.4vw, 1.9rem)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                    {tool.title}
                  </h3>
                  <p style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>{tool.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={outboundHref('external', tool.url)} target="_blank" rel="noopener noreferrer" className="mw-btn-primary" style={{ minHeight: 42, padding: '0.6rem 1rem' }}>
                      Visit {tool.urlLabel} <ArrowUpRight size={14} />
                    </Link>
                    {'dedicatedPage' in tool && tool.dedicatedPage && (
                      <Link href={tool.dedicatedPage} className="mw-btn-outline" style={{ minHeight: 42, padding: '0.6rem 1rem' }}>
                        Learn more <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
                <ul style={{ borderTop: '1px solid var(--border)', alignSelf: 'start' }}>
                  {tool.features.map(({ label, desc }) => (
                    <li key={label} style={{ padding: '0.7rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-1)' }}>{label}</span>
                      <span style={{ color: 'var(--text-3)' }}> — {desc}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Pricing</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '1rem' }}>Fixed prices. You know the cost before we start.</h2>
          <p style={{ maxWidth: '52ch', marginBottom: '3rem' }}>
            No hourly billing and no scope creep. Every quote is a fixed price with a delivery date.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="mw-card"
                style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem', ...(tier.popular ? { borderColor: 'var(--text-1)' } : {}) }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
                  <span className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)' }}>{tier.name}</span>
                  {tier.popular && <span className="mw-pill mw-pill--accent" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>Most popular</span>}
                </div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.4rem', letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--text-1)' }}>{tier.price}</div>
                <div className="mw-num" style={{ marginTop: '0.4rem', marginBottom: '1.25rem' }}>{tier.timeline} delivery</div>
                <p style={{ fontSize: '0.92rem', marginBottom: '1.25rem' }}>{tier.desc}</p>
                <ul className="offer-list" style={{ marginTop: 0, marginBottom: '1.75rem', gap: '0.5rem', flex: 1 }}>
                  {tier.examples.map((ex) => <li key={ex} style={{ fontSize: '0.9rem' }}>{ex}</li>)}
                </ul>
                <a href="#get-quote" className={tier.popular ? 'mw-btn-primary' : 'mw-btn-outline'}>
                  Get a quote <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <p className="mw-num" style={{ marginTop: '1.75rem', color: 'var(--text-3)' }}>
            USD · Fixed price only · Source code included · Post-launch support
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mw-section">
        <div className="mw-container">
          <p className="mw-eyebrow">Process</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>From idea to live in under a week.</h2>
          <ol className="steps">
            {processSteps.map((step) => (
              <li key={step.n}>
                <span className="steps-time">Step {step.n}</span>
                <h3>{step.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inline quote form */}
      <section id="get-quote" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-start">
            <div>
              <p className="mw-eyebrow">Get a quote</p>
              <h2 style={{ maxWidth: '14ch', marginBottom: '1.25rem' }}>Have a tool idea? Tell us.</h2>
              <p style={{ fontSize: '1.05rem', maxWidth: '44ch' }}>
                A short message is enough. We&apos;ll scope it, price it and tell you honestly whether it can ship in 7 days.
              </p>
              <ul className="offer-list">
                <li>Fixed-price quote within 24 hours</li>
                <li>Most tools live in 5–7 days</li>
                <li>From $200, no hidden fees</li>
                <li>Source code handed over on delivery</li>
              </ul>
              <p style={{ marginTop: '2.25rem', fontSize: '0.95rem' }}>
                Prefer to chat?{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-1)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Message Karam on WhatsApp
                </a>{' '}
                or{' '}
                <Link href="/book" style={{ color: 'var(--text-1)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>book a 15-min call</Link>.
              </p>
            </div>

            <div className="audit-form-card">
              <p className="mw-num" style={{ marginBottom: '0.4rem' }}>TELL KARAM YOUR IDEA</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                Founder replies personally · fixed price · NDA on request
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
