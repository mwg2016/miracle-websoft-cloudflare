import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CalendarClock, Mail, MessageCircle, Phone } from 'lucide-react'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import FaqAccordionClient from '@/components/ui/FaqAccordionClient'
import StickyTabs from '@/app/lp/shopify-cro/StickyTabs'
import Countdown from './Countdown'
import BfStickyCta, { BF_WHATSAPP, UPWORK_URL } from './UpworkCta'
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

const CONTACT = {
  whatsapp: BF_WHATSAPP,
  phone: 'tel:+916239269736',
  phoneLabel: '+91 62392 69736',
  email: 'mailto:karam@miraclewebsoft.com?subject=Black%20Friday%20Sale%20Setup',
  emailLabel: 'karam@miraclewebsoft.com',
}

const contactChannels = [
  { icon: MessageCircle, label: 'WhatsApp', sub: 'Fastest, usually within minutes', href: CONTACT.whatsapp, external: true },
  { icon: CalendarClock, label: 'Book a 15-min call', sub: 'Pick a time that suits you', href: '/book', external: false },
  { icon: Phone, label: 'Call', sub: CONTACT.phoneLabel, href: CONTACT.phone, external: false },
  { icon: Mail, label: 'Email', sub: CONTACT.emailLabel, href: CONTACT.email, external: false },
]

const included = [
  {
    title: 'Banners & announcement bars',
    desc: 'Hero, collection and mobile banners plus a sale bar, matched to your brand.',
  },
  {
    title: 'Sale landing / offer pages',
    desc: 'A dedicated Black Friday page that showcases your deals and converts.',
  },
  {
    title: 'Discount & coupon setup',
    desc: 'Codes, auto-discounts, BOGO and tiered offers, all tested before launch.',
  },
  {
    title: 'Email & SMS campaigns',
    desc: 'Teaser to last-chance sequence, written, designed and scheduled.',
  },
  {
    title: 'Countdown timers',
    desc: 'Store-wide and product-page timers that create real urgency.',
  },
  {
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
    title: 'Tell us about your store',
    you: 'Fill the form, WhatsApp us or book a 15-minute call. Share your store URL and what you want to offer.',
    we: 'We review your store and reply within 24 hours with your Black Friday sale plan.',
  },
  {
    title: 'Approve the sale plan',
    you: 'Confirm your offer, dates and which products are included. Send your logo and any brand guidelines.',
    we: 'We map the full campaign: discounts, pages, banners, email calendar and launch timeline.',
  },
  {
    title: 'Review designs & emails',
    you: 'Check the banners, sale page and email drafts. Request changes in one place.',
    we: 'We build everything on a draft theme / scheduled emails — nothing touches your live store until you approve.',
  },
  {
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
  { id: 'included', label: "What's included" },
  { id: 'banners', label: 'Banners' },
  { id: 'emails', label: 'Email & SMS' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'faq', label: 'FAQ' },
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

const preLaunch = [
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
]

const pad = (n: number) => String(n).padStart(2, '0')

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mw-section-header" style={{ marginBottom: '2.75rem' }}>
      <p className="mw-eyebrow">{eyebrow}</p>
      <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)' }}>{title}</h2>
      {sub && <p style={{ marginTop: '1rem', maxWidth: '60ch' }}>{sub}</p>}
    </div>
  )
}

/** The secondary, off-site option. Always visually below the on-site actions. */
function UpworkNote({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '1rem', textAlign: align }}>
      Prefer to pay through Upwork&apos;s escrow?{' '}
      <a href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="bf-link">
        Buy the same $150 package there <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: '-1px' }} />
      </a>
    </p>
  )
}

function BannerFrame({ label, size, ratio, children }: { label: string; size: string; ratio?: string; children: React.ReactNode }) {
  return (
    <figure className={ratio ? 'flex flex-col h-full' : undefined} style={{ margin: 0 }}>
      <div
        className={ratio ? 'relative aspect-[var(--ar)] lg:aspect-auto lg:flex-1 lg:min-h-0' : undefined}
        style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid var(--border)', ...(ratio ? ({ '--ar': ratio } as React.CSSProperties) : {}) }}
      >
        {children}
      </div>
      <figcaption className="flex flex-wrap justify-between gap-x-3 gap-y-0.5" style={{ marginTop: '0.6rem', fontSize: '0.82rem' }}>
        <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>{label}</span>
        <span className="mw-num">{size}</span>
      </figcaption>
    </figure>
  )
}

function BannerShowcase() {
  // 8:3 hero beside a 1:1 post — 8fr / 3fr columns make them the same height.
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[8fr_3fr] gap-6">
      <div>
        <BannerFrame label="Website hero banner" size="1920 × 800 · desktop">
          <Image src="/black-friday/hero-desktop.webp" alt="Black Friday sneaker sale website hero banner — up to 70% off" width={1600} height={600} style={{ display: 'block', width: '100%', height: 'auto' }} />
        </BannerFrame>
      </div>
      <BannerFrame label="Social post" size="1080 × 1080 · Instagram / Facebook">
        <Image src="/black-friday/social-post.webp" alt="Black Friday 40% off social post with code BF40" width={1000} height={1000} style={{ display: 'block', width: '100%', height: 'auto' }} />
      </BannerFrame>

      {/* Sample announcement bar — this is a mock of a client's storefront, so it keeps a sale-style look. */}
      <div className="lg:col-span-2">
        <BannerFrame label="Announcement bar + countdown" size="Full width · all pages">
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center"
            style={{ background: '#111', padding: '0.75rem 1rem', fontSize: '0.82rem', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}
          >
            <span style={{ color: '#FBBF24' }}>BLACK FRIDAY</span>
            <span>Up to 50% off + free shipping over $75</span>
            <span style={{ background: '#D92D20', padding: '0.15rem 0.6rem', borderRadius: 4, fontVariantNumeric: 'tabular-nums' }}>ENDS IN 02:14:36</span>
          </div>
        </BannerFrame>
      </div>

      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-[1fr_0.55fr_0.66fr] gap-6">
        <div className="flex flex-col gap-6">
          <BannerFrame label="Email header" size="600 × 300 · Klaviyo / Mailchimp">
            <Image src="/black-friday/email-header.webp" alt="VIP early access Black Friday email header" width={1000} height={500} style={{ display: 'block', width: '100%', height: 'auto' }} />
          </BannerFrame>
          <BannerFrame label="Collection banner" size="1600 × 500 · sale collection">
            <Image src="/black-friday/collection-banner.webp" alt="Black Friday best-sellers collection banner — 30% off headphones" width={1000} height={367} style={{ display: 'block', width: '100%', height: 'auto' }} />
          </BannerFrame>
        </div>
        <BannerFrame label="Story / Reel cover" size="1080 × 1920 · IG / TikTok" ratio="800 / 1421">
          <Image src="/black-friday/story.webp" alt="Black Friday last chance deals story / reel cover" fill sizes="(min-width: 1024px) 300px, 100vw" style={{ objectFit: 'cover' }} />
        </BannerFrame>
        <BannerFrame label="Mobile hero banner" size="750 × 1000 · mobile" ratio="800 / 1179">
          <Image src="/black-friday/hero-mobile.webp" alt="Black Friday spend more, save more mobile hero banner" fill sizes="(min-width: 1024px) 360px, 100vw" style={{ objectFit: 'cover' }} />
        </BannerFrame>
      </div>
    </div>
  )
}

const css = `
.bf-tag { display: inline-flex; align-items: stretch; border: 1px solid var(--text-1); border-radius: 4px; overflow: hidden; font-family: var(--font-geist-mono); font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.5rem; }
.bf-tag span { padding: 0.35rem 0.65rem; }
.bf-tag span:first-child { background: var(--text-1); color: var(--bg); }
.bf-count { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: 26rem; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); }
.bf-count > div { padding: 0.8rem 0 0.7rem; }
.bf-count > div + div { padding-left: 1rem; border-left: 1px solid var(--border); }
.bf-count-v { display: block; font-family: var(--font-playfair); font-size: clamp(2rem, 3.4vw, 2.6rem); line-height: 1; letter-spacing: -0.02em; color: var(--text-1); font-variant-numeric: tabular-nums; }
.bf-count-l { display: block; font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); margin-top: 0.4rem; }
.bf-link { color: var(--text-1); font-weight: 500; text-decoration: underline; text-decoration-color: var(--border-hover); text-underline-offset: 3px; }
.bf-link:hover { text-decoration-color: var(--text-1); }
.bf-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--text-1); }
.bf-grid > div { padding: 1.5rem 1.5rem 1.75rem 0; border-bottom: 1px solid var(--border); }
.bf-grid > div:not(:nth-child(3n+1)) { padding-left: 1.5rem; border-left: 1px solid var(--border); }
.bf-grid h3 { font-size: 1.1rem; margin: 0.9rem 0 0.4rem; }
.bf-grid p { font-size: 0.95rem; }
@media (max-width: 900px) {
  .bf-grid { grid-template-columns: 1fr 1fr; }
  .bf-grid > div:not(:nth-child(3n+1)) { padding-left: 0; border-left: 0; }
  .bf-grid > div:nth-child(even) { padding-left: 1.5rem; border-left: 1px solid var(--border); }
}
@media (max-width: 560px) {
  .bf-grid { grid-template-columns: 1fr; }
  .bf-grid > div:nth-child(even) { padding-left: 0; border-left: 0; }
}
.bf-strip { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.25rem 2rem; padding-top: 1.5rem; }
.bf-strip dl { display: flex; flex-wrap: wrap; gap: 0.5rem 2rem; font-size: 0.92rem; }
.bf-strip dt { font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
.bf-strip dd { color: var(--text-1); font-weight: 500; }
.bf-rows { border-top: 1px solid var(--text-1); }
.bf-rows > li { display: grid; grid-template-columns: 9.5rem 1fr; gap: 0.35rem 1.5rem; padding: 1.25rem 0; border-bottom: 1px solid var(--border); }
.bf-rows .when { font-family: var(--font-geist-mono); font-size: 0.78rem; letter-spacing: 0.04em; color: var(--text-1); padding-top: 0.2rem; }
.bf-rows .chan { display: block; font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); margin-top: 0.3rem; }
.bf-rows h3 { font-size: 1.05rem; }
.bf-rows p { font-size: 0.92rem; margin-top: 0.2rem; }
.bf-rows .live { font-size: 0.86rem; color: var(--text-3); margin-top: 0.45rem; }
.bf-rows .live b { font-weight: 500; color: var(--text-2); }
@media (max-width: 560px) { .bf-rows > li { grid-template-columns: 1fr; } }
.bf-phases { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 2.5rem; }
.bf-phases > div { padding: 1rem 1rem 1rem 0; }
.bf-phases > div + div { padding-left: 1.25rem; border-left: 1px solid var(--border); }
.bf-phases dt { font-family: var(--font-geist-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
.bf-phases dd { font-family: var(--font-playfair); font-size: clamp(1.3rem, 2.2vw, 1.7rem); color: var(--text-1); margin-top: 0.2rem; }
.bf-phases dd + dd { font-family: var(--font-geist); font-size: 0.85rem; color: var(--text-3); margin-top: 0.15rem; }
@media (max-width: 640px) {
  .bf-phases { grid-template-columns: 1fr; }
  .bf-phases > div + div { padding-left: 0; border-left: 0; border-top: 1px solid var(--border); }
}
.bf-qa { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 2rem; margin-top: 2rem; }
.bf-qa > div { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--border); font-size: 0.92rem; color: var(--text-2); }
.bf-qa b { font-family: var(--font-geist-mono); font-size: 0.75rem; letter-spacing: 0.08em; color: var(--forest); font-weight: 600; }
@media (max-width: 760px) { .bf-qa { grid-template-columns: 1fr; } }
.bf-steps li p { font-size: 0.92rem; margin-top: 0.6rem; }
.bf-steps li p b { color: var(--text-1); font-weight: 600; }
.bf-when { border-top: 1px solid var(--text-1); }
.bf-when li { display: grid; grid-template-columns: 9.5rem 11rem 1fr; gap: 0.25rem 1.5rem; padding: 1rem 0; border-bottom: 1px solid var(--border); align-items: baseline; font-size: 0.95rem; }
.bf-when .tone { font-family: var(--font-geist-mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-3); }
.bf-when .tone.is-now { color: var(--accent); font-weight: 600; }
.bf-when .t { color: var(--text-1); font-weight: 600; }
.bf-when .w { color: var(--text-2); }
@media (max-width: 640px) { .bf-when li { grid-template-columns: 1fr; } }
.bf-checks { display: grid; grid-template-columns: 1fr 1fr; gap: 0 1.5rem; border-top: 1px solid var(--border); }
.bf-checks li { display: flex; gap: 0.6rem; align-items: baseline; padding: 0.7rem 0; border-bottom: 1px solid var(--border); font-size: 0.92rem; color: var(--text-2); }
.bf-checks li::before { content: "✓"; color: var(--forest); font-weight: 700; font-size: 0.85rem; }
@media (max-width: 560px) { .bf-checks { grid-template-columns: 1fr; } }
.bf-channels { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--border); margin-top: 3rem; }
.bf-channels a { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1.25rem 1.25rem 1.25rem 0; color: var(--text-1); }
.bf-channels a + a { padding-left: 1.25rem; border-left: 1px solid var(--border); }
.bf-channels a:hover .lbl { text-decoration: underline; text-underline-offset: 3px; }
.bf-channels .lbl { display: block; font-weight: 600; font-size: 0.95rem; }
.bf-channels .sub { display: block; font-size: 0.82rem; color: var(--text-3); margin-top: 0.15rem; }
@media (max-width: 900px) {
  .bf-channels { grid-template-columns: 1fr 1fr; }
  .bf-channels a + a { padding-left: 0; border-left: 0; }
  .bf-channels a:nth-child(even) { padding-left: 1.25rem; border-left: 1px solid var(--border); }
  .bf-channels a:nth-child(n+3) { border-top: 1px solid var(--border); }
}
@media (max-width: 480px) {
  .bf-channels { grid-template-columns: 1fr; }
  .bf-channels a:nth-child(even) { padding-left: 0; border-left: 0; }
  .bf-channels a + a { border-top: 1px solid var(--border); }
}
`

export default function BlackFridaySaleSetupPage() {
  const now = new Date()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <style>{css}</style>

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="bf-tag">
              <span>BFCM {nextBlackFriday(now).getFullYear()}</span>
              <span>Black Friday sale setup · done for you</span>
            </p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
              Your whole Black Friday sale, <span className="mw-mark">set up before the rush.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '48ch' }}>
              Banners, sale page, discounts, email &amp; SMS campaigns, countdown timers and checkout testing, for Shopify,
              WooCommerce and any ecommerce store. One team, <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>$150 fixed</strong>,
              delivered in 2 days.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>Time left to prepare</p>
              <Countdown />
            </div>

            <div className="flex flex-wrap gap-3 items-center" style={{ marginTop: '1.75rem' }}>
              <a href="#lead-form" className="mw-btn-accent">
                Get my Black Friday plan <ArrowRight size={16} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="mw-btn-outline">
                <MessageCircle size={16} /> WhatsApp us
              </a>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '1rem' }}>
              Rather talk it through? <Link href="/book" className="bf-link">Book a 15-min call</Link>.
            </p>
            <UpworkNote />

            <p style={{ fontSize: '0.88rem', color: 'var(--text-3)', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', maxWidth: '60ch' }}>
              <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>700+</strong> ecommerce projects since 2015 ·{' '}
              Top Rated Plus on Upwork · Shopify Partner
            </p>
          </div>

          <div id="lead-form" className="audit-form-card" style={{ scrollMarginTop: '8rem' }}>
            <p className="mw-num" style={{ marginBottom: '1.25rem' }}>FREE PLAN · REPLY WITHIN 24 HOURS</p>
            <ServiceContactForm
              service="Black Friday Sale Setup (LP)"
              heading="Get your Black Friday sale plan"
              subtext="Tell us your store and offer. We reply with your launch plan: $150 fixed, delivered in 2 days."
              urlLabel="Store URL"
              urlPlaceholder="yourstore.com"
              messageLabel="What do you need help with?"
              messagePlaceholder="Example: full Black Friday setup — 30% off sitewide, banners, 6 emails in Klaviyo. Sale starts Nov 27."
              buttonLabel="Get my Black Friday plan"
              fixedPrice="$150"
            />
          </div>
        </div>
      </section>

      <StickyTabs tabs={navTabs} cta={{ href: '#lead-form', label: 'Get my plan · $150' }} />

      {/* ─── WHAT'S INCLUDED ─────────────────────────────────────────────── */}
      <section id="included" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <SectionHead eyebrow="What's included" title="Six Black Friday essentials. One price: $150." />
          <div className="bf-grid">
            {included.map((f, i) => (
              <div key={f.title}>
                <span className="mw-num">{pad(i + 1)}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="bf-strip">
            <dl>
              <div><dt>For</dt><dd>Shopify, WooCommerce &amp; any store</dd></div>
              <div><dt>Delivery</dt><dd>2 days, 1 revision</dd></div>
              <div><dt>Book now</dt><dd style={{ color: 'var(--accent-hover)' }}>{timeLeftLabel(now)}</dd></div>
            </dl>
            <a href="#lead-form" className="mw-btn-accent">Get my Black Friday plan <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* ─── BANNERS ─────────────────────────────────────────────────────── */}
      <section id="banners" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="Banner & creative design"
            title="Sale banners for every placement."
            sub="Sample styles below. Yours are designed in your brand colours and fonts, sized for desktop, mobile, email and social, with source files included."
          />
          <BannerShowcase />
        </div>
      </section>

      {/* ─── EMAILS ──────────────────────────────────────────────────────── */}
      <section id="emails" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="Email & SMS, written, designed and sent"
            title="Your Black Friday email calendar, handled."
            sub="Campaigns set up and scheduled in your platform (Klaviyo, Shopify Email, Mailchimp, Omnisend and more), timed with the banners, sale page, discounts and timers going live on your store."
          />

          <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Best time to run your sale</p>
          <dl className="bf-phases">
            {salePhases(now).map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.when}</dd>
                <dd>{p.note}</dd>
              </div>
            ))}
          </dl>

          <ol className="bf-rows">
            {emailSequence.map((e) => (
              <li key={e.name}>
                <span className="when">
                  {e.when}
                  <span className="chan">{e.channel}</span>
                </span>
                <div>
                  <h3>{e.name}</h3>
                  <p>{e.goal}</p>
                  <p className="live"><b>On your store:</b> {e.live}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="bf-qa">
            {quickAnswers.map((qa) => (
              <div key={qa.q}>
                <span>{qa.q}</span>
                <b>{qa.a.toUpperCase()}</b>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '1.25rem', color: 'var(--text-3)' }}>
            Everything is built on a draft theme and scheduled. Nothing touches your live store until you approve it.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="mw-section" style={{ borderTop: '1px solid var(--border)', scrollMarginTop: '7rem' }}>
        <div className="mw-container">
          <SectionHead
            eyebrow="How it works"
            title="Four steps to a live Black Friday sale."
            sub="What you do and what we do at every step. Most of the work is ours."
          />
          <ol className="steps bf-steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps-time">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p><b>You:</b> {s.you}</p>
                <p><b>We:</b> {s.we}</p>
              </li>
            ))}
          </ol>

          <div style={{ marginTop: '4.5rem', maxWidth: '58rem' }}>
            <h3 style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', marginBottom: '1.25rem' }}>When should you start?</h3>
            <ul className="bf-when">
              {timeline.map((t) => (
                <li key={t.when}>
                  <span className={`tone${t.tone === 'Contact now' ? ' is-now' : ''}`}>{t.tone}</span>
                  <span className="t">{t.when}</span>
                  <span className="w">
                    {t.tone === 'Contact now' ? (
                      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="bf-link">{t.what}</a>
                    ) : t.what}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CHECKLIST ───────────────────────────────────────────────────── */}
      <section id="checklist" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '7rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="mw-eyebrow">Getting started</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', marginBottom: '1rem' }}>What we need from you.</h2>
            <p style={{ marginBottom: '0.5rem', maxWidth: '52ch' }}>
              Six things. Don&apos;t have them all yet? Send what you have and we&apos;ll help with the rest, including choosing the right offer.
            </p>
            <ul className="offer-list" style={{ marginTop: '1.5rem' }}>
              {needFromYou.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Our pre-launch checklist</h3>
            <ul className="bf-checks">
              {preLaunch.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="mw-num" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', margin: '2rem 0 0.75rem' }}>Platforms we set up</p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => <span key={p} className="mw-pill">{p}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="mw-section" style={{ scrollMarginTop: '7rem' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div>
            <p className="mw-eyebrow">Frequently asked</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.6vw, 48px)', maxWidth: '12ch' }}>Black Friday setup, answered.</h2>
          </div>
          <FaqAccordionClient faqs={faqs} />
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="mw-ink" style={{ padding: 'clamp(4.5rem, 8vw, 6.5rem) 0' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <div>
              <p className="mw-eyebrow">Black Friday is {nextBlackFriday(now).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              <h2 style={{ fontSize: 'clamp(32px, 4.4vw, 58px)', maxWidth: '16ch' }}>Make this your biggest sales weekend yet.</h2>
              <p style={{ marginTop: '1.25rem', maxWidth: '52ch', fontSize: '1.05rem' }}>
                Banners, sale page, discounts, email &amp; SMS, timers and checkout, handled by one team for $150 and delivered in 2 days.
                Slots fill up fast in November.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <a href="#lead-form" className="mw-btn-accent">Get my Black Friday plan <ArrowRight size={16} /></a>
                <Link href="/work" className="mw-btn-outline">See our work</Link>
              </div>
              <UpworkNote />
            </div>
          </div>

          <nav className="bf-channels" aria-label="Other ways to reach us">
            {contactChannels.map((c) => {
              const Icon = c.icon
              return (
                <a key={c.label} href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <Icon size={18} style={{ color: 'var(--text-3)', marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="lbl">{c.label}</span>
                    <span className="sub truncate">{c.sub}</span>
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      </section>

      <BfStickyCta />
    </>
  )
}
