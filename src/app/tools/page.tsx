import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Layers, Search, Package, Grid3X3,
  MessageCircle, Bot, Clock, Globe,
  ExternalLink, ArrowUpRight, ArrowRight,
  Zap, DollarSign, Calendar, CheckCircle2,
  Code2, Sparkles, Users, Cpu, ShoppingCart, BarChart2,
  Chrome, Puzzle, MousePointerClick,
} from 'lucide-react'
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
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(108,99,255,0.15)',
    badgeBorder: 'rgba(108,99,255,0.3)',
    accentGradient: 'linear-gradient(90deg, #6c63ff, #a78bfa)',
    accentBorder: 'rgba(108,99,255,0.2)',
    accentCardBg: 'rgba(108,99,255,0.04)',
    title: 'Shopify Theme Detector',
    url: 'https://themedetectorapp.com/',
    urlLabel: 'themedetectorapp.com',
    budget: '$300',
    timeline: '7 days',
    desc: 'Detects the exact Shopify theme any store is running — plus installed apps, product count and collections. No login, no API key, 100% free.',
    features: [
      { icon: Layers, label: 'Theme Detection', desc: 'Identify any Shopify theme via JS object analysis' },
      { icon: Search, label: 'App Detection', desc: 'Recognises 65+ apps via script signatures' },
      { icon: Package, label: 'Product Count', desc: 'Uses public products.json endpoint' },
      { icon: Grid3X3, label: 'Collections', desc: 'Counts published collections instantly' },
    ],
  },
  {
    badge: 'Chrome Extension',
    badgeColor: '#fbbf24',
    badgeBg: 'rgba(251,191,36,0.12)',
    badgeBorder: 'rgba(251,191,36,0.3)',
    accentGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
    accentBorder: 'rgba(251,191,36,0.2)',
    accentCardBg: 'rgba(251,191,36,0.03)',
    title: 'Shopify Theme Detector — Chrome Extension',
    url: 'https://chromewebstore.google.com/detail/shopify-theme-detector/ilmiphgaadpgclojkoghokmcfoehnlmn',
    urlLabel: 'Chrome Web Store',
    budget: 'Free',
    timeline: '7 days',
    desc: 'One-click Chrome extension that detects the Shopify theme, installed apps and store data on any storefront — straight from your browser toolbar. No tab switching, no pasting URLs.',
    features: [
      { icon: MousePointerClick, label: 'One-click Detect', desc: 'Theme + apps surface the moment you open the popup' },
      { icon: Chrome, label: 'Toolbar Icon', desc: 'Pin once, works on every Shopify storefront you visit' },
      { icon: Search, label: 'App Recognition', desc: 'Recognises 65+ Shopify apps via script signatures' },
      { icon: Puzzle, label: 'Store Data', desc: 'Product count, collections and theme version at a glance' },
    ],
  },
  {
    badge: 'Live SaaS',
    badgeColor: '#34d399',
    badgeBg: 'rgba(52,211,153,0.12)',
    badgeBorder: 'rgba(52,211,153,0.3)',
    accentGradient: 'linear-gradient(90deg, #059669, #34d399)',
    accentBorder: 'rgba(52,211,153,0.15)',
    accentCardBg: 'rgba(52,211,153,0.03)',
    title: 'WA Auto-Reply',
    url: 'https://www.whatsappautomaticreply.com/',
    urlLabel: 'whatsappautomaticreply.com',
    budget: '$500',
    timeline: '7 days',
    desc: 'AI-powered WhatsApp auto-reply tool. Handles customer messages 24/7 with Claude AI, keyword triggers, working hours, number filtering and 8 language support.',
    features: [
      { icon: Bot, label: 'Claude AI Replies', desc: 'Powered by Anthropic Claude for natural responses' },
      { icon: MessageCircle, label: 'Keyword Triggers', desc: 'Custom keyword-based auto-response rules' },
      { icon: Clock, label: 'Working Hours', desc: 'Set active hours and scheduling' },
      { icon: Globe, label: '8 Languages', desc: 'Multi-language support out of the box' },
    ],
  },
  {
    badge: 'Shopify App',
    badgeColor: '#38bdf8',
    badgeBg: 'rgba(56,189,248,0.12)',
    badgeBorder: 'rgba(56,189,248,0.3)',
    accentGradient: 'linear-gradient(90deg, #0284c7, #38bdf8)',
    accentBorder: 'rgba(56,189,248,0.2)',
    accentCardBg: 'rgba(56,189,248,0.03)',
    title: 'PC Builder',
    url: 'https://apps.shopify.com/pc-builder-mw',
    urlLabel: 'pcbuilderapp.com',
    dedicatedPage: '/tools/pc-builder',
    budget: '$9.99/mo',
    timeline: '14-day trial',
    desc: 'Interactive PC configurator for Shopify stores. Lets customers build compatible PCs step by step and checkout in one click — with real-time compatibility validation and AI-powered component fill.',
    features: [
      { icon: Cpu, label: 'Compatibility Engine', desc: 'Real-time CPU socket, RAM, power and form factor validation' },
      { icon: ShoppingCart, label: 'Bundle Checkout', desc: 'Full PC build added to cart in one click' },
      { icon: Sparkles, label: 'AI-Powered Fill', desc: 'Auto-populate component data and compatibility notes' },
      { icon: BarChart2, label: 'Order Analytics', desc: 'Track builds, configs, conversion rates and AOV per widget' },
    ],
  },
  {
    badge: 'This Website',
    badgeColor: '#fb923c',
    badgeBg: 'rgba(251,146,60,0.12)',
    badgeBorder: 'rgba(251,146,60,0.3)',
    accentGradient: 'linear-gradient(90deg, #ea580c, #fb923c)',
    accentBorder: 'rgba(251,146,60,0.15)',
    accentCardBg: 'rgba(251,146,60,0.03)',
    title: 'miraclewebsoft.com',
    url: 'https://miraclewebsoft.com',
    urlLabel: 'miraclewebsoft.com',
    budget: '$200',
    timeline: '5 days',
    desc: 'The website you\'re on right now — built by our team in 5 days. Next.js, Tailwind CSS, full SEO setup, contact form, blog, case studies, 20+ pages. All for $200.',
    features: [
      { icon: Code2, label: 'Next.js 16', desc: 'App Router, SSR, standalone output' },
      { icon: Sparkles, label: '20+ Pages', desc: 'Services, industries, blog, case studies' },
      { icon: Users, label: 'Full SEO', desc: 'Structured data, sitemap, meta tags' },
      { icon: CheckCircle2, label: 'Contact Form', desc: 'Web3Forms integration for leads' },
    ],
  },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 'From $200',
    timeline: '3–5 days',
    color: '#fb923c',
    colorBg: 'rgba(251,146,60,0.08)',
    colorBorder: 'rgba(251,146,60,0.25)',
    desc: 'Landing pages, portfolio sites, single-purpose web tools and simple calculators.',
    examples: ['Business website', 'Portfolio site', 'Simple web tool', 'Landing page with CTA'],
  },
  {
    name: 'Growth',
    price: 'From $300',
    timeline: '5–7 days',
    color: '#a78bfa',
    colorBg: 'rgba(108,99,255,0.08)',
    colorBorder: 'rgba(108,99,255,0.3)',
    popular: true,
    desc: 'Single-feature SaaS tools, Shopify utility apps, API-powered detectors and scrapers.',
    examples: ['Shopify store analyser', 'URL checker / detector', 'API wrapper tool', 'Browser extension'],
  },
  {
    name: 'Advanced',
    price: 'From $500',
    timeline: '7 days',
    color: '#34d399',
    colorBg: 'rgba(52,211,153,0.06)',
    colorBorder: 'rgba(52,211,153,0.2)',
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
      <section
        className="pt-32 pb-20"
        style={{
          background: '#0a0a0a',
          backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(108,99,255,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(52,211,153,0.08) 0%, transparent 50%)',
        }}
      >
        <div className="mw-container">
          <span className="mw-eyebrow">TOOL DEVELOPMENT</span>
          <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>
            We build digital tools.<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Fast. Affordable. Live.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: '540px', marginBottom: '2.5rem' }}>
            From idea to live product in 5–7 days. We&apos;ve already shipped 3 tools used by thousands.
            Tell us what you need — we&apos;ll price it, build it and launch it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#get-quote" className="mw-btn-primary">
              Get a quote <ArrowRight size={16} />
            </a>
            <a href="#tools" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)',
              padding: '0.65rem 1.4rem', borderRadius: '8px', fontWeight: 500,
              fontSize: '0.9rem', textDecoration: 'none',
            }}>
              See what we&apos;ve built
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '1.75rem 1.5rem', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                  {s.value}<span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools we've built */}
      <section id="tools" className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">LIVE & SHIPPED</span>
            <h2 style={{ color: '#fff' }}>Tools we&apos;ve already<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>built and launched.</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Every tool here was built in under 7 days on a tight budget. Proof that speed and quality aren&apos;t opposites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {builtTools.map((tool) => (
              <div
                key={tool.title}
                style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: `1px solid ${tool.accentBorder}`,
                  background: tool.accentCardBg,
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{ height: '3px', background: tool.accentGradient }} />
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Badge + meta */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: tool.badgeColor,
                      background: tool.badgeBg, border: `1px solid ${tool.badgeBorder}`,
                      padding: '0.2rem 0.55rem', borderRadius: '999px',
                    }}>
                      {tool.badge}
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                        <DollarSign size={10} style={{ color: tool.badgeColor }} />{tool.budget}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                        <Zap size={10} style={{ color: tool.badgeColor }} />{tool.timeline}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>
                    {tool.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                    {tool.desc}
                  </p>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {tool.features.map(({ icon: Icon, label, desc }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <Icon size={13} style={{ color: tool.badgeColor, marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{label}</span>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginLeft: '0.35rem' }}>— {desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link href={outboundHref('external', tool.url)} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      background: tool.badgeColor, color: '#000',
                      padding: '0.5rem 1rem', borderRadius: '7px',
                      fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
                    }}>
                      Visit <ExternalLink size={11} />
                    </Link>
                    {'dedicatedPage' in tool && tool.dedicatedPage && (
                      <Link href={tool.dedicatedPage} style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        border: `1px solid ${tool.badgeBorder}`, color: tool.badgeColor,
                        padding: '0.5rem 1rem', borderRadius: '7px',
                        fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none',
                      }}>
                        Learn more <ArrowRight size={11} />
                      </Link>
                    )}
                    <Link href={outboundHref('external', tool.url)} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)',
                      padding: '0.5rem 1rem', borderRadius: '7px',
                      fontWeight: 500, fontSize: '0.8rem', textDecoration: 'none',
                    }}>
                      {tool.urlLabel} <ArrowUpRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mw-section" style={{ background: '#0d0d0d' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PRICING</span>
            <h2 style={{ color: '#fff' }}>Simple pricing.<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>No surprises.</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '440px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Fixed-price quotes only. You know the cost before we start. No hourly billing, no scope creep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: `1px solid ${tier.colorBorder}`,
                  background: tier.colorBg,
                  display: 'flex', flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: 'var(--accent)', color: '#fff',
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', padding: '0.2rem 0.55rem', borderRadius: '999px',
                  }}>
                    Most popular
                  </div>
                )}
                <div style={{ height: '3px', background: `linear-gradient(90deg, ${tier.color}, ${tier.color}88)` }} />
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, marginBottom: '0.4rem' }}>
                    {tier.name}
                  </p>
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>{tier.price}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    <Calendar size={12} style={{ color: tier.color }} />
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{tier.timeline} delivery</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                    {tier.desc}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {tier.examples.map((ex) => (
                      <div key={ex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={13} style={{ color: tier.color, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{ex}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#get-quote" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                    background: tier.color, color: '#000',
                    padding: '0.7rem 1.25rem', borderRadius: '8px',
                    fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                  }}>
                    Get a quote <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            All prices in USD · Fixed-price only · Source code included · Free post-launch support
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mw-section" style={{ background: '#0a0a0a' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">PROCESS</span>
            <h2 style={{ color: '#fff' }}>From idea to live<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>in under a week.</em></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.n} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px', padding: '1.75rem',
              }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em',
                  color: 'var(--accent)', marginBottom: '0.9rem',
                  fontFamily: 'monospace',
                }}>
                  {step.n}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section id="get-quote" style={{ background: '#0d0d0d', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-start">

            {/* Left — context */}
            <div>
              <span className="mw-eyebrow">GET A QUOTE</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>
                Have a tool idea?<br />
                <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>Tell us. We&apos;ll build it.</em>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2.5rem' }}>
                Send us a quick message. We&apos;ll scope it, price it and tell you if we can ship it in 7 days.
                No commitment, no fluff.
              </p>

              {/* Quick facts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: Zap, text: 'Fixed-price quote within 24 hours' },
                  { icon: Calendar, text: 'Most tools live in 5–7 days' },
                  { icon: DollarSign, text: 'Starting from $200 — no hidden fees' },
                  { icon: CheckCircle2, text: 'Source code handed over on delivery' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Icon size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.9rem 1.25rem', borderRadius: '14px',
                  background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)',
                  textDecoration: 'none', maxWidth: '340px',
                }}>
                <MessageCircle size={18} style={{ color: '#25D366', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>Prefer WhatsApp?</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Message Karam directly — replies within an hour</div>
                </div>
                <span style={{ marginLeft: 'auto', fontSize: '0.68rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px', background: '#25D366', color: '#fff', flexShrink: 0 }}>Chat</span>
              </a>
            </div>

            {/* Right — form */}
            <div style={{ position: 'sticky', top: '7rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2rem' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(108,99,255,0.3),rgba(108,99,255,0.1))', border: '2px solid rgba(108,99,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>K</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>Tell Karam your idea</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Founder · quotes within 24 h · fixed price</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  No commitment · Fixed pricing · Source code included
                </div>
                <ContactForm />
              </div>
              <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
                {['🔒 SSL encrypted', '📄 NDA on request', '✓ No spam ever'].map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
