import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  CalendarClock,
  Tag,
  Palette,
  ShoppingCart,
  Zap,
  LayoutTemplate,
  ShieldCheck,
  Timer,
  Sparkles,
  ClipboardList,
  Rocket,
  Search,
} from 'lucide-react'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import StickyTabs from '@/app/lp/shopify-cro/StickyTabs'
import Countdown from './Countdown'
import UpworkStickyCta, { UPWORK_URL } from './UpworkCta'
import { nextBlackFriday, timeLeftLabel } from './blackFriday'
import { breadcrumb, faqPage, renderJsonLd, service, SITE_URL } from '@/lib/jsonld'

const PAGE_URL = `${SITE_URL}/black-friday-sale-setup`
const TITLE = 'Black Friday Sale Setup for Ecommerce Stores — Done For You'
const DESCRIPTION =
  'Done-for-you Black Friday sale setup for Shopify, WooCommerce and any ecommerce store: banners, sale page, discounts, email & SMS campaigns, countdown timers and checkout testing. $150 fixed, delivered in 2 days.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Miracle Websoft` },
  description: DESCRIPTION,
  keywords: [
    'Black Friday sale setup',
    'Black Friday Shopify setup',
    'Black Friday store preparation',
    'Black Friday email campaign',
    'Black Friday banner design',
    'Shopify Black Friday agency',
    'WooCommerce Black Friday',
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const GOLD = '#FBBF24'
const RED = '#EF4444'

const CONTACT = {
  whatsapp: 'https://wa.me/916239269736?text=Hi%20Miracle%20Websoft%2C%20I%20want%20help%20setting%20up%20my%20Black%20Friday%20sale.',
  phone: 'tel:+916239269736',
  phoneLabel: '+91 62392 69736',
  email: 'mailto:karam@miraclewebsoft.com?subject=Black%20Friday%20Sale%20Setup',
  emailLabel: 'karam@miraclewebsoft.com',
  calendly: 'https://calendly.com/karam-4my/15-mints-discussion',
}

const contactChannels = [
  { icon: MessageCircle, label: 'WhatsApp us', sub: 'Fastest — usually minutes', href: CONTACT.whatsapp, external: true },
  { icon: CalendarClock, label: 'Book a 15-min call', sub: 'Pick a time that suits you', href: CONTACT.calendly, external: true },
  { icon: Phone, label: 'Call us', sub: CONTACT.phoneLabel, href: CONTACT.phone, external: false },
  { icon: Mail, label: 'Email us', sub: CONTACT.emailLabel, href: CONTACT.email, external: false },
]

const included = [
  {
    icon: Palette,
    title: 'Banners & announcement bars',
    desc: 'Hero, collection and mobile banners plus a sale bar, matched to your brand.',
  },
  {
    icon: LayoutTemplate,
    title: 'Sale landing / offer pages',
    desc: 'A dedicated Black Friday page that showcases your deals and converts.',
  },
  {
    icon: Tag,
    title: 'Discount & coupon setup',
    desc: 'Codes, auto-discounts, BOGO and tiered offers, all tested before launch.',
  },
  {
    icon: Mail,
    title: 'Email & SMS campaigns',
    desc: 'Teaser to last-chance sequence, written, designed and scheduled.',
  },
  {
    icon: Timer,
    title: 'Countdown timers',
    desc: 'Store-wide and product-page timers that create real urgency.',
  },
  {
    icon: ShoppingCart,
    title: 'Checkout testing & optimization',
    desc: 'Every discount and payment path tested, with friction removed.',
  },
]

// Each send is paired with the store changes (banners, pages, discounts, timers) that switch on alongside it.
const emailSequence = [
  { when: '10 days before', channel: 'Email', name: 'Sale teaser', goal: 'Let subscribers know the sale is coming', live: 'Teaser announcement bar' },
  { when: '7 days before', channel: 'Email + SMS', name: 'Early access opens', goal: 'Subscribers get first pick of the deals', live: 'Early-access discount codes' },
  { when: 'Black Friday', channel: 'Email + SMS', name: 'The sale is live', goal: 'Clear offer, one button to shop', live: 'Banners, sale page, discounts & countdown timers' },
  { when: 'Close (+48 hrs)', channel: 'Email + SMS', name: 'Last chance', goal: 'Final reminder before the sale ends', live: 'Countdown to close, checkout tested with every discount' },
]

const quickAnswers = [
  { q: 'Can you design banners?', a: 'Yes' },
  { q: 'Can you schedule everything?', a: 'Yes' },
  { q: 'Will setup affect my live store?', a: 'No' },
]

const shortDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

// Best-time phases, computed from the upcoming Black Friday so the dates never go stale.
function salePhases(now: Date) {
  const day = 86400000
  const bf = nextBlackFriday(now)
  return [
    { label: 'Early access', when: `${shortDate(new Date(bf.getTime() - 10 * day))}–${shortDate(new Date(bf.getTime() - 7 * day))}`, note: 'Start 7–10 days before Black Friday' },
    { label: 'Main sale', when: shortDate(bf), note: 'Black Friday — everything goes live' },
    { label: 'Close', when: shortDate(new Date(bf.getTime() + 2 * day)), note: '48 hrs after Black Friday' },
  ]
}

const steps = [
  {
    icon: MessageCircle,
    title: 'Tell us about your store',
    you: 'Fill the form, WhatsApp us or book a 15-minute call. Share your store URL and what you want to offer.',
    we: 'We review your store and reply within 24 hours with your Black Friday sale plan.',
  },
  {
    icon: ClipboardList,
    title: 'Approve the sale plan',
    you: 'Confirm your offer, dates and which products are included. Send your logo and any brand guidelines.',
    we: 'We map the full campaign: discounts, pages, banners, email calendar and launch timeline.',
  },
  {
    icon: Palette,
    title: 'Review designs & emails',
    you: 'Check the banners, sale page and email drafts. Request changes in one place.',
    we: 'We build everything on a draft theme / scheduled emails — nothing touches your live store until you approve.',
  },
  {
    icon: Rocket,
    title: 'Launch & relax',
    you: 'Nothing. Watch the orders come in.',
    we: 'Everything is scheduled, so the sale, banners, timers and campaigns switch on at the exact time you chose.',
  },
]

const needFromYou = [
  'Your store URL and staff/collaborator access (we send the request)',
  'The offer: discount %, products or collections included, start & end dates',
  'Your logo, brand colours and fonts (or a link to your current site — we can match it)',
  'Access to your email platform (Klaviyo, Shopify Email, Mailchimp, Omnisend, etc.)',
  'Any product photos or lifestyle images you want featured',
  'Shipping cut-off dates and any free-shipping threshold',
]

const timeline = [
  { when: '2+ weeks out', what: 'Ideal — ready well before early access starts', tone: 'Best' },
  { when: '10–14 days out', what: 'Ready in 2 days, just in time for early access', tone: 'Great' },
  { when: '3–9 days out', what: 'Ready before Black Friday — shorter or no early access', tone: 'Still possible' },
  { when: 'Under 3 days', what: 'Message us on WhatsApp right now', tone: 'Contact now' },
]

const platforms = ['Shopify', 'Shopify Plus', 'WooCommerce', 'BigCommerce', 'Magento / Adobe Commerce', 'Wix & Squarespace', 'Custom stores']

const faqs = [
  {
    question: 'What does your Black Friday sale setup include?',
    answer:
      'Six essentials: Black Friday banners and announcement bars, a sale landing / offer page, discount or coupon setup, email and SMS campaign setup, countdown timers for urgency, and checkout testing and optimization.',
  },
  {
    question: 'Can you design the Black Friday banners?',
    answer:
      'Yes. We design your hero, collection and mobile banners plus the announcement bar, all matched to your brand colours and fonts.',
  },
  {
    question: 'Can you schedule everything?',
    answer:
      'Yes. Discounts, banners, announcement bars, countdown timers and your email and SMS campaigns are scheduled to switch on and off automatically, including the switch back to normal pricing when the sale ends.',
  },
  {
    question: 'Will the setup affect my live store?',
    answer:
      'No. We build on a duplicate/draft theme and scheduled campaigns. Nothing goes live until you approve it, and the switch happens at the exact start time you choose.',
  },
  {
    question: 'How much does it cost?',
    answer: '$150, fixed price, for the complete Black Friday setup, including 1 revision. No hourly billing and no surprises.',
  },
  {
    question: 'When should I book?',
    answer:
      'At least 2 weeks before Black Friday. Delivery takes 2 days, plus 1 revision, so everything is ready well before early access starts 7–10 days before the sale. Closer than that? Message us on WhatsApp and we will fit you in.',
  },
]

const navTabs = [
  { id: 'included', label: "What's Included" },
  { id: 'banners', label: 'Banners' },
  { id: 'emails', label: 'Email & SMS' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'faq', label: 'FAQs' },
]

const jsonLd = renderJsonLd([
  service({
    name: 'Black Friday Sale Setup for Ecommerce Stores',
    description: DESCRIPTION,
    url: '/black-friday-sale-setup',
    serviceType: 'Ecommerce Black Friday campaign setup',
  }),
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to set up a Black Friday sale with Miracle Websoft',
    description: 'Four steps from first contact to a live Black Friday sale.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: `You: ${s.you} Us: ${s.we}`,
    })),
  },
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Black Friday Sale Setup', url: '/black-friday-sale-setup' },
  ]),
  faqPage(faqs),
])

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
      <p className="mw-eyebrow" style={{ color: GOLD }}>{eyebrow}</p>
      <h2 style={{ color: '#fff' }}>{title}</h2>
      {sub && <p style={{ maxWidth: '640px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>{sub}</p>}
    </div>
  )
}

function ContactButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${center ? 'max-w-5xl mx-auto' : ''}`}>
      {contactChannels.map((c) => {
        const Icon = c.icon
        return (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="mw-card flex items-center gap-3"
            style={{ padding: '1rem 1.1rem', textDecoration: 'none' }}
          >
            <span
              className="flex items-center justify-center shrink-0"
              style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(251,191,36,0.12)', color: GOLD }}
            >
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block" style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>{c.label}</span>
              <span className="block truncate" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>{c.sub}</span>
            </span>
          </a>
        )
      })}
    </div>
  )
}

/* ─── Banner mockups — pure CSS so they stay crisp and weightless ──────── */

// With `ratio`, the frame keeps that shape on mobile but stretches to its grid row's height on desktop,
// so tall banners line up with their neighbours (children should be a `fill` Image).
function BannerFrame({ label, size, ratio, children }: { label: string; size: string; ratio?: string; children: React.ReactNode }) {
  return (
    <figure className={ratio ? 'flex flex-col h-full' : undefined} style={{ margin: 0 }}>
      <div
        className={ratio ? 'relative aspect-[var(--ar)] lg:aspect-auto lg:flex-1 lg:min-h-0' : undefined}
        style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.10)', ...(ratio ? ({ '--ar': ratio } as React.CSSProperties) : {}) }}
      >
        {children}
      </div>
      <figcaption className="flex justify-between gap-2" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>{label}</span>
        <span style={{ color: 'rgba(255,255,255,0.45)' }}>{size}</span>
      </figcaption>
    </figure>
  )
}

function BannerShowcase() {
  // 8:3 hero beside a 1:1 post — 8fr / 3fr columns make them the same height.
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[8fr_3fr] gap-6">
      {/* Desktop hero */}
      <div>
        <BannerFrame label="Website hero banner" size="1920 × 800 · desktop">
          <Image src="/black-friday/hero-desktop.webp" alt="Black Friday sneaker sale website hero banner — up to 70% off" width={1600} height={600} style={{ display: 'block', width: '100%', height: 'auto' }} />
        </BannerFrame>
      </div>

      {/* Instagram post */}
      <BannerFrame label="Social post" size="1080 × 1080 · Instagram / Facebook">
        <Image src="/black-friday/social-post.webp" alt="Black Friday 40% off social post with code BF40" width={1000} height={1000} style={{ display: 'block', width: '100%', height: 'auto' }} />
      </BannerFrame>

      {/* Announcement bar */}
      <div className="lg:col-span-2">
        <BannerFrame label="Announcement bar + countdown" size="Full width · all pages">
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center"
            style={{ background: '#000', padding: '0.75rem 1rem', fontSize: '0.82rem', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}
          >
            <span style={{ color: GOLD }}>⚡ BLACK FRIDAY</span>
            <span>Up to 50% off + free shipping over $75</span>
            <span style={{ background: RED, padding: '0.15rem 0.6rem', borderRadius: 6 }}>ENDS IN 02:14:36</span>
          </div>
        </BannerFrame>
      </div>

      {/* Columns sized so the tall story / mobile banners roughly match the email + collection stack */}
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_0.55fr_0.66fr] gap-6">
      <div className="flex flex-col gap-6">
      {/* Email header */}
      <BannerFrame label="Email header" size="600 × 300 · Klaviyo / Mailchimp">
        <Image src="/black-friday/email-header.webp" alt="VIP early access Black Friday email header" width={1000} height={500} style={{ display: 'block', width: '100%', height: 'auto' }} />
      </BannerFrame>

      {/* Collection banner */}
      <BannerFrame label="Collection banner" size="1600 × 500 · sale collection">
        <Image src="/black-friday/collection-banner.webp" alt="Black Friday best-sellers collection banner — 30% off headphones" width={1000} height={367} style={{ display: 'block', width: '100%', height: 'auto' }} />
      </BannerFrame>
      </div>

      {/* Story */}
      <BannerFrame label="Story / Reel cover" size="1080 × 1920 · IG / TikTok" ratio="800 / 1421">
        <Image src="/black-friday/story.webp" alt="Black Friday last chance deals story / reel cover" fill sizes="(min-width: 1024px) 300px, 100vw" style={{ objectFit: 'cover' }} />
      </BannerFrame>

      {/* Mobile banner */}
      <BannerFrame label="Mobile hero banner" size="750 × 1000 · mobile" ratio="800 / 1179">
        <Image src="/black-friday/hero-mobile.webp" alt="Black Friday spend more, save more mobile hero banner" fill sizes="(min-width: 1024px) 360px, 100vw" style={{ objectFit: 'cover' }} />
      </BannerFrame>
      </div>
    </div>
  )
}

export default function BlackFridaySaleSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-20"
        style={{
          background: '#050505',
          backgroundImage:
            'radial-gradient(ellipse at 80% 30%, rgba(239,68,68,0.16) 0%, transparent 55%), radial-gradient(ellipse at 10% 85%, rgba(251,191,36,0.10) 0%, transparent 50%)',
        }}
      >
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 mb-5 px-3 py-1.5"
                style={{
                  background: 'rgba(251,191,36,0.10)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  color: GOLD,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                <Sparkles size={12} /> BLACK FRIDAY SALE SETUP · DONE FOR YOU
              </div>
              <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                Your Complete Black Friday Setup — <span style={{ color: GOLD }}>Done Before the Rush Hits.</span>
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '1.08rem',
                  lineHeight: 1.75,
                  marginBottom: '1.75rem',
                  maxWidth: '580px',
                  fontWeight: 300,
                }}
              >
                Discounts, sale pages, <strong style={{ color: '#fff', fontWeight: 600 }}>banner design</strong>,{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>email &amp; SMS campaigns</strong>, countdown timers
                and checkout testing — for Shopify, WooCommerce and any ecommerce brand. One team,{' '}
                <strong style={{ color: '#fff', fontWeight: 600 }}>$150 fixed</strong>, delivered in 2 days.
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.6rem', fontWeight: 600, letterSpacing: '0.06em' }}>
                  TIME LEFT TO PREPARE
                </p>
                <Countdown />
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <a href="#emails" className="mw-btn-primary" style={{ background: GOLD, borderColor: GOLD, color: '#000' }}>
                  Get My Black Friday Plan <ArrowRight size={16} />
                </a>
                <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" data-upwork-cta className="mw-btn-primary bf-upwork-pulse" style={{ background: GOLD, borderColor: GOLD, color: '#000' }}>
                  Book Service <ArrowRight size={16} />
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
                {['650+ ecommerce projects', 'Since 2015', 'Top Rated Plus · Upwork', 'Verified Shopify Partner'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                    <CheckCircle2 size={14} style={{ color: GOLD }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <div
              id="lead-form"
              className="rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                padding: '2rem',
                boxShadow: '0 30px 80px -30px rgba(251,191,36,0.25)',
                scrollMarginTop: '6rem',
              }}
            >
              <div
                className="inline-flex items-center gap-2 mb-3 px-2.5 py-1"
                style={{
                  background: 'rgba(251,191,36,0.12)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  borderRadius: '999px',
                  fontSize: '0.68rem',
                  color: GOLD,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                FREE PLAN · REPLY IN 24 HOURS
              </div>
              <ServiceContactForm
                service="Black Friday Sale Setup (LP)"
                heading="Get your Black Friday sale plan"
                subtext="Tell us your store and offer. We reply with your launch plan — $150 fixed, delivered in 2 days."
                urlLabel="Store URL"
                urlPlaceholder="yourstore.com"
                messageLabel="What do you need help with?"
                messagePlaceholder="Example: full Black Friday setup — 30% off sitewide, banners, 6 emails in Klaviyo. Sale starts Nov 27."
                buttonLabel="Get My Black Friday Plan"
                fixedPrice="$150"
              />
            </div>
          </div>
        </div>
      </section>

      <StickyTabs tabs={navTabs} accent="#fff" background="#FBB605" border="#FBB605" activeColor="#000" inactiveColor="#000" />

      {/* ─── WHAT'S INCLUDED ─────────────────────────────────────────────── */}
      <section id="included" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: '#0a0a0a', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.75rem' }}>
            <p className="flex items-center gap-2" style={{ fontSize: '0.7rem', color: GOLD, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Sparkles size={14} /> What&apos;s included
            </p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', marginTop: '0.5rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
              6 Black Friday essentials. One price: $150.
            </h2>

            {/* 3×2 on desktop, 2 columns on tablet, 1 on mobile; #2A2A2A line between rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {included.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="py-6 border-t border-[#2A2A2A] [&:nth-child(-n+1)]:border-t-0 sm:[&:nth-child(-n+2)]:border-t-0 lg:[&:nth-child(-n+3)]:border-t-0"
                  >
                    <Icon size={24} strokeWidth={1.75} style={{ color: GOLD, marginBottom: '0.75rem' }} />
                    <h3 style={{ fontSize: '0.72rem', color: GOLD, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      {f.title}
                    </h3>
                    <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                )
              })}
            </div>

            {/* Info strip */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-5" style={{ borderTop: '1px solid #2A2A2A' }}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <span style={{ color: GOLD, fontWeight: 700 }}>For:</span>{' '}Shopify, WooCommerce &amp; any store
                <span style={{ color: 'rgba(255,255,255,0.3)' }}> · </span>
                <span style={{ color: GOLD, fontWeight: 700 }}>Delivery:</span>{' '}2 days, 1 revision
                <span style={{ color: 'rgba(255,255,255,0.3)' }}> · </span>
                <strong style={{ color: '#fff' }}>Book now: {timeLeftLabel(new Date())}</strong>
              </p>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-upwork-cta
                className="mw-btn-primary bf-upwork-pulse shrink-0 self-start md:self-auto"
                style={{ background: GOLD, borderColor: GOLD, color: '#000' }}
              >
                Buy on Upwork <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANNERS ─────────────────────────────────────────────────────── */}
      <section id="banners" style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#070707', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="BANNER & CREATIVE DESIGN"
            title="Sale banners designed for every placement"
            sub="Sample styles below. Yours are designed in your brand colours and fonts, sized for desktop, mobile, email and social — with source files included."
          />
          <BannerShowcase />
        </div>
      </section>

      {/* ─── EMAILS ──────────────────────────────────────────────────────── */}
      <section id="emails" style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#0a0a0a', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="EMAIL CAMPAIGNS — WRITTEN, DESIGNED & SENT"
            title="Your Black Friday email calendar, handled"
            sub="Your email and SMS campaigns set up and scheduled in your platform — Klaviyo, Shopify Email, Mailchimp, Omnisend and more — timed with the banners, sale page, discounts and countdown timers going live on your store."
          />
          <div className="max-w-4xl mx-auto">
            {/* Best time to run the sale */}
            <div className="rounded-2xl" style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.25)', padding: '1.25rem 1.25rem 1rem', marginBottom: '1.5rem' }}>
              <p className="flex items-center gap-2" style={{ fontSize: '0.7rem', color: GOLD, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                <CalendarClock size={14} /> Best time to run your sale
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {salePhases(new Date()).map((p, i) => (
                  <div key={p.label} className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 26, height: 26, borderRadius: 999, background: GOLD, color: '#000', fontWeight: 800, fontSize: '0.75rem' }}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block" style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>
                        {p.label} <span style={{ color: GOLD }}>· {p.when}</span>
                      </span>
                      <span className="block" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{p.note}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ol className="flex flex-col gap-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {emailSequence.map((e, i) => (
                <li
                  key={e.name}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_150px_1fr] gap-x-4 gap-y-1 items-center mw-card"
                  style={{ padding: '1rem 1.25rem' }}
                >
                  <span
                    className="flex items-center justify-center sm:row-span-1 row-span-2"
                    style={{ width: 30, height: 30, borderRadius: 999, background: 'rgba(251,191,36,0.14)', color: GOLD, fontWeight: 800, fontSize: '0.8rem' }}
                  >
                    {i + 1}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span style={{ color: GOLD, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}>{e.when}</span>
                    <span className="self-start" style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.06em', color: '#fff', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '0.1rem 0.5rem' }}>
                      {e.channel.toUpperCase()}
                    </span>
                  </span>
                  <span className="col-start-2 sm:col-start-auto">
                    <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.93rem' }}>{e.name}</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem' }}> — {e.goal}</span>
                    <span className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                      <Zap size={12} className="shrink-0" style={{ color: GOLD }} /> On your store: {e.live}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            {/* Quick answers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" style={{ marginTop: '1.5rem' }}>
              {quickAnswers.map((qa) => (
                <div key={qa.q} className="mw-card flex items-center justify-between gap-3" style={{ padding: '0.85rem 1.1rem' }}>
                  <span style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 500 }}>{qa.q}</span>
                  <span
                    className="shrink-0"
                    style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.06em', padding: '0.2rem 0.6rem', borderRadius: 6, background: qa.a === 'Yes' ? 'rgba(16,185,129,0.15)' : 'rgba(251,191,36,0.14)', color: qa.a === 'Yes' ? '#10B981' : GOLD }}
                  >
                    {qa.a.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center" style={{ fontSize: '0.85rem', marginTop: '1.25rem' }}>
              Everything is built on a draft theme and scheduled — nothing touches your live store until you approve it.
            </p>

            <div className="flex justify-center" style={{ marginTop: '1.5rem' }}>
              <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" data-upwork-cta className="mw-btn-primary bf-upwork-pulse" style={{ background: GOLD, borderColor: GOLD, color: '#000' }}>
                Book Service on Upwork <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how-it-works" style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#070707', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="HOW IT WORKS"
            title="4 simple steps to a live Black Friday sale"
            sub="Clear about what you do and what we do at every step. Most of the work is ours."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="mw-card" style={{ padding: '1.5rem' }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
                    <span
                      className="flex items-center justify-center"
                      style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(251,191,36,0.12)', color: GOLD }}
                    >
                      <Icon size={20} />
                    </span>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255,255,255,0.08)' }}>0{i + 1}</span>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.9rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.7rem' }}>
                    <strong style={{ color: '#fff' }}>You:</strong> {s.you}
                  </p>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                    <strong style={{ color: GOLD }}>We:</strong> {s.we}
                  </p>
                </div>
              )
            })}
          </div>

          {/* When to start */}
          <div className="max-w-4xl mx-auto" style={{ marginTop: '3rem' }}>
            <h3 className="flex items-center gap-2 justify-center" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.25rem' }}>
              <Timer size={18} style={{ color: GOLD }} /> When should you start?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {timeline.map((t) => (
                <div key={t.when} className="mw-card flex items-start gap-3" style={{ padding: '1rem 1.15rem' }}>
                  <span
                    className="shrink-0"
                    style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', padding: '0.25rem 0.55rem', borderRadius: 6, background: t.tone === 'Contact now' ? RED : 'rgba(251,191,36,0.14)', color: t.tone === 'Contact now' ? '#fff' : GOLD, marginTop: 2 }}
                  >
                    {t.tone.toUpperCase()}
                  </span>
                  <span>
                    <span className="block" style={{ color: '#fff', fontWeight: 600, fontSize: '0.92rem' }}>{t.when}</span>
                    <span className="block" style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)' }}>{t.what}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHECKLIST ───────────────────────────────────────────────────── */}
      <section id="checklist" style={{ paddingTop: '5rem', paddingBottom: '4rem', background: '#0a0a0a', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="mw-eyebrow" style={{ color: GOLD }}>GETTING STARTED</p>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>What we need from you</h2>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                That&apos;s it — six things. Don&apos;t have them all yet? Send what you have and we&apos;ll help with the rest,
                including choosing the right offer.
              </p>
              <ul className="flex flex-col gap-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {needFromYou.map((n) => (
                  <li key={n} className="flex items-start gap-2.5" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)' }}>
                    <CheckCircle2 size={18} className="shrink-0" style={{ color: GOLD, marginTop: 2 }} /> {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.75rem' }}>
              <h3 className="flex items-center gap-2" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                <ShieldCheck size={18} style={{ color: GOLD }} /> Our pre-launch checklist
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Discount codes tested',
                  'Automatic discounts stacked right',
                  'Sale page live on schedule',
                  'Banners on desktop & mobile',
                  'Countdown timers synced',
                  'Emails scheduled & tested',
                  'Checkout tested on mobile',
                  'Payment methods verified',
                  'Pixels & GA4 firing',
                  'Inventory & stock alerts',
                  'Shipping cut-offs shown',
                  'Speed check passed',
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2" style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.75)' }}>
                    <CheckCircle2 size={15} className="shrink-0" style={{ color: '#10B981' }} /> {c}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '1.5rem', paddingTop: '1.25rem' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.6rem', fontWeight: 600, letterSpacing: '0.06em' }}>
                  PLATFORMS WE SET UP
                </p>
                <div className="flex flex-wrap gap-2">
                  {platforms.map((p) => (
                    <span key={p} style={{ fontSize: '0.78rem', color: '#fff', padding: '0.3rem 0.7rem', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)' }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', background: '#070707', borderTop: '1px solid rgba(255,255,255,0.05)', scrollMarginTop: '5rem' }}
      >
        <div className="mw-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="mw-eyebrow" style={{ color: GOLD }}>FREQUENTLY ASKED</p>
              <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Black Friday setup questions, answered</h2>
            </div>
            <FaqAccordionClient faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          background: `radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.25), transparent 60%), #000`,
          textAlign: 'center',
          borderTop: '1px solid rgba(251,191,36,0.2)',
        }}
      >
        <div className="mw-container">
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD, fontWeight: 700, marginBottom: '1rem' }}>
            BLACK FRIDAY IS CLOSER THAN IT LOOKS
          </p>
          <h2 style={{ color: '#fff', maxWidth: '760px', margin: '0 auto 1.25rem', letterSpacing: '-0.02em' }}>
            Make this your biggest sales weekend yet.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Banners, sale page, discounts, emails &amp; SMS, timers and checkout — handled by one team for $150, delivered in 2 days. Slots fill up fast
            in November.
          </p>
          <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: '2.5rem' }}>
            <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" data-upwork-cta className="mw-btn-primary bf-upwork-pulse" style={{ background: GOLD, color: '#000', borderColor: GOLD }}>
              Get My Black Friday Plan <ArrowRight size={16} />
            </a>
            <Link href="/work" className="mw-btn-outline">
              <Search size={16} /> See our work
            </Link>
          </div>
          <ContactButtons center />
        </div>
      </section>

      <UpworkStickyCta />
    </>
  )
}
