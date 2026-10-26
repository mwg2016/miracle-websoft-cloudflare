import type { Metadata } from 'next'
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
  BarChart3,
  LayoutTemplate,
  ShieldCheck,
  Timer,
  Sparkles,
  ClipboardList,
  Rocket,
  Search,
  LifeBuoy,
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
  'End-to-end Black Friday sale setup for Shopify, WooCommerce and any ecommerce brand: discounts, sale pages, banner design, email campaigns, speed checks and launch-day support.'

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

const addOns = [
  { icon: LifeBuoy, label: 'Launch-day monitoring' },
  { icon: Zap, label: 'Speed check' },
  { icon: Tag, label: 'Automatic discounts stacked right' },
  { icon: BarChart3, label: 'Pixels & GA4 firing' },
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
    we: 'We review your store and reply within 24 hours with a plan and a fixed-price quote.',
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
    we: 'We switch the sale on at the exact time, send the campaigns, monitor the store and send you a results report.',
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
  { when: '6+ weeks out', what: 'Ideal start — plan offer, design, build, full email sequence', tone: 'Best' },
  { when: '3–5 weeks out', what: 'Comfortable — full setup with time for revisions', tone: 'Great' },
  { when: '1–2 weeks out', what: 'Express — core setup: discounts, banners, sale page, key emails', tone: 'Still possible' },
  { when: 'Under 1 week', what: 'Rush — essentials only. Message us on WhatsApp right now', tone: 'Contact now' },
]

const platforms = ['Shopify', 'Shopify Plus', 'WooCommerce', 'BigCommerce', 'Magento / Adobe Commerce', 'Wix & Squarespace', 'Custom stores']

const faqs = [
  {
    question: 'What does your Black Friday sale setup service include?',
    answer:
      'Everything needed to run a Black Friday sale end to end: offer and discount configuration, a sale landing page and collections, countdown timers and announcement bars, banner and social creative design, a full email campaign sequence (written, designed, segmented and sent), cart and checkout improvements, speed checks, tracking verification and launch-day monitoring with a post-sale report.',
  },
  {
    question: 'Which ecommerce platforms do you support?',
    answer:
      'Shopify and Shopify Plus are our specialty, and we also set up Black Friday sales on WooCommerce, BigCommerce, Magento / Adobe Commerce, Wix, Squarespace and custom-built stores.',
  },
  {
    question: 'How early should I start preparing for Black Friday?',
    answer:
      'Ideally 6 weeks before Black Friday, which leaves time to plan the offer, design creatives, build pages and warm up your email list. 3–5 weeks is comfortable. With 1–2 weeks we can still deliver the core setup, and under a week we offer a rush essentials package — contact us on WhatsApp straight away.',
  },
  {
    question: 'Do you design the Black Friday banners?',
    answer:
      'Yes. We design desktop and mobile hero banners, announcement bars, collection banners, email headers, Instagram/Facebook posts and stories, and ad creatives — all matched to your brand and sized correctly for each placement. You get the source files too.',
  },
  {
    question: 'Do you write and send the email campaigns for us?',
    answer:
      'Yes. We write the copy, design the emails, segment your list (VIPs, past buyers, engaged subscribers), schedule the sends and monitor results. We work in Klaviyo, Shopify Email, Mailchimp, Omnisend and most other email platforms. A typical Black Friday sequence is 7–8 emails from teaser to last chance and thank-you.',
  },
  {
    question: 'Will my live store be affected while you build the sale?',
    answer:
      'No. We build on a duplicate/draft theme and scheduled campaigns. Nothing goes live until you approve it, and the switch happens at the exact start time you choose.',
  },
  {
    question: 'How much does a Black Friday sale setup cost?',
    answer:
      'Every store is different, so we give a fixed-price quote after a quick look at your store — no hourly billing and no surprises. You can choose the full end-to-end setup or just the parts you need, such as banners only or emails only.',
  },
  {
    question: 'Can you set up the sale to start and end automatically?',
    answer:
      'Yes. Discounts, banners, announcement bars, countdown timers and theme changes are scheduled to switch on and off automatically — including the switch back to normal pricing when the sale ends.',
  },
  {
    question: 'Will my store handle the extra Black Friday traffic?',
    answer:
      'We run a speed and readiness check before the sale — compressing images, removing unused apps and scripts, and testing the checkout on mobile — so pages stay fast under load. A developer is on standby through the weekend to fix anything quickly.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer:
      'Your store URL, collaborator access, the offer you want to run (discount, products and dates), your logo and brand colours, and access to your email platform. If you are unsure about the offer, we will recommend one based on your margins and past sales.',
  },
  {
    question: 'Can you help decide what discount or offer to run?',
    answer:
      'Yes. We recommend offer structures that protect your margins — for example tiered spend-and-save, gift-with-purchase, bundles or early access for subscribers — rather than defaulting to a deep sitewide discount.',
  },
  {
    question: 'How do I contact you quickly?',
    answer:
      'WhatsApp is fastest: +91 62392 69736. You can also book a 15-minute call, email karam@miraclewebsoft.com, or fill the form on this page — we reply within 24 hours, usually much sooner during Black Friday season.',
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

function BannerFrame({ label, size, children }: { label: string; size: string; children: React.ReactNode }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.10)' }}>{children}</div>
      <figcaption className="flex justify-between gap-2" style={{ marginTop: '0.6rem', fontSize: '0.8rem' }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>{label}</span>
        <span style={{ color: 'rgba(255,255,255,0.45)' }}>{size}</span>
      </figcaption>
    </figure>
  )
}

const display: React.CSSProperties = { fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95, textTransform: 'uppercase' }

function BannerShowcase() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Desktop hero */}
      <div className="lg:col-span-2">
        <BannerFrame label="Website hero banner" size="1920 × 800 · desktop">
          <div
            className="flex items-center justify-between gap-4"
            style={{
              aspectRatio: '1920 / 800',
              padding: '6% 7%',
              background: `radial-gradient(circle at 85% 50%, rgba(239,68,68,0.45), transparent 55%), linear-gradient(120deg, #050505 40%, #1c0a0a)`,
            }}
          >
            <div>
              <div style={{ color: GOLD, fontSize: 'clamp(0.55rem, 1.2vw, 0.8rem)', fontWeight: 700, letterSpacing: '0.25em' }}>
                THIS WEEKEND ONLY
              </div>
              <div style={{ ...display, color: '#fff', fontSize: 'clamp(1.6rem, 5vw, 3.6rem)', marginTop: '0.4rem' }}>
                Black<br />Friday
              </div>
              <span
                className="inline-block"
                style={{ marginTop: '0.9rem', background: GOLD, color: '#000', fontWeight: 800, fontSize: 'clamp(0.55rem, 1.1vw, 0.8rem)', padding: '0.5em 1.2em', borderRadius: 999 }}
              >
                SHOP THE SALE →
              </span>
            </div>
            <div className="text-right">
              <div style={{ ...display, color: GOLD, fontSize: 'clamp(2.2rem, 8vw, 6rem)' }}>50%</div>
              <div style={{ ...display, color: '#fff', fontSize: 'clamp(0.9rem, 2.4vw, 1.8rem)' }}>Off everything</div>
            </div>
          </div>
        </BannerFrame>
      </div>

      {/* Instagram post */}
      <BannerFrame label="Social post" size="1080 × 1080 · Instagram / Facebook">
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{ aspectRatio: '1 / 1', background: GOLD, padding: '10%' }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.3em', color: '#000' }}>BLACK FRIDAY</div>
          <div style={{ ...display, color: '#000', fontSize: 'clamp(3rem, 9vw, 5rem)', margin: '0.4rem 0' }}>40%<br />Off</div>
          <div style={{ background: '#000', color: GOLD, fontWeight: 800, fontSize: '0.72rem', padding: '0.45rem 1rem', borderRadius: 999 }}>
            CODE: BF40
          </div>
        </div>
      </BannerFrame>

      {/* Announcement bar */}
      <div className="lg:col-span-3">
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

      <div className="flex flex-col gap-6">
      {/* Email header */}
      <BannerFrame label="Email header" size="600 × 300 · Klaviyo / Mailchimp">
        <div
          className="flex flex-col justify-center"
          style={{ aspectRatio: '2 / 1', padding: '8%', background: `linear-gradient(135deg, #111 0%, #2a0d0d 100%)` }}
        >
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>VIP EARLY ACCESS</div>
          <div style={{ ...display, color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginTop: '0.35rem' }}>
            You&apos;re in <span style={{ color: GOLD }}>first.</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: '0.5rem' }}>Shop Black Friday 24 hours before everyone else.</div>
        </div>
      </BannerFrame>

      {/* Collection banner */}
      <BannerFrame label="Collection banner" size="1600 × 500 · sale collection">
        <div
          className="flex items-center justify-between gap-3"
          style={{ aspectRatio: '16 / 7', padding: '6% 8%', background: `linear-gradient(90deg, ${RED} 0%, #7f1d1d 100%)` }}
        >
          <div>
            <div style={{ ...display, color: '#fff', fontSize: 'clamp(1.3rem, 3.5vw, 1.9rem)' }}>Black Friday<br />Best-Sellers</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem', marginTop: '0.4rem' }}>Free gift on orders over $150</div>
          </div>
          <div style={{ ...display, color: GOLD, fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}>-30%</div>
        </div>
      </BannerFrame>
      </div>

      {/* Story */}
      <BannerFrame label="Story / Reel cover" size="1080 × 1920 · IG / TikTok">
        <div
          className="flex flex-col items-center justify-between text-center"
          style={{ aspectRatio: '9 / 12', padding: '10% 8%', background: `linear-gradient(180deg, #1e1b4b 0%, #000 70%)` }}
        >
          <div style={{ color: '#A5B4FC', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.3em' }}>BLACK FRIDAY</div>
          <div style={{ ...display, color: '#fff', fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
            Last<br />Chance<br /><span style={{ color: GOLD }}>Deals</span>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.5rem 1.1rem', borderRadius: 999 }}>
            SWIPE UP · SHOP NOW
          </div>
        </div>
      </BannerFrame>

      {/* Mobile banner */}
      <BannerFrame label="Mobile hero banner" size="750 × 1000 · mobile">
        <div
          className="flex flex-col justify-end"
          style={{ aspectRatio: '9 / 12', padding: '10% 8%', background: `radial-gradient(circle at 50% 25%, rgba(251,191,36,0.35), transparent 50%), #070707` }}
        >
          <div style={{ ...display, color: GOLD, fontSize: 'clamp(2rem, 6vw, 2.8rem)' }}>Black<br />Friday</div>
          <div style={{ ...display, color: '#fff', fontSize: '1.3rem', marginTop: '0.3rem' }}>Spend more,<br />save more</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', marginTop: '0.6rem' }}>$100 → 15% · $200 → 25% · $300 → 35%</div>
          <span style={{ marginTop: '0.9rem', background: '#fff', color: '#000', fontWeight: 800, fontSize: '0.72rem', padding: '0.6rem', borderRadius: 8, textAlign: 'center' }}>
            SHOP NOW
          </span>
        </div>
      </BannerFrame>
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
                <strong style={{ color: '#fff', fontWeight: 600 }}>email campaigns written and sent</strong>, speed
                checks and launch-day support — for Shopify, WooCommerce and any ecommerce brand. One team, one
                fixed price, one place to reach us.
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
                subtext="Tell us your store and offer. We reply with a launch plan and a fixed-price quote — no obligation."
                urlLabel="Store URL"
                urlPlaceholder="yourstore.com"
                messageLabel="What do you need help with?"
                messagePlaceholder="Example: full Black Friday setup — 30% off sitewide, banners, 6 emails in Klaviyo. Sale starts Nov 27."
                buttonLabel="Get My Black Friday Plan"
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
              6 Black Friday essentials. One fixed price.
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

            {/* Add-ons */}
            <div className="flex flex-wrap items-center gap-2 py-5" style={{ borderTop: '1px solid #2A2A2A' }}>
              <span style={{ fontSize: '0.7rem', color: GOLD, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: '0.35rem' }}>
                Add-ons
              </span>
              {addOns.map((a) => {
                const Icon = a.icon
                return (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-1.5 rounded-full"
                    style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.04)', border: '1px solid #2A2A2A', padding: '0.3rem 0.75rem' }}
                  >
                    <Icon size={13} style={{ color: GOLD }} /> {a.label}
                  </span>
                )
              })}
            </div>

            {/* Info strip */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-5" style={{ borderTop: '1px solid #2A2A2A' }}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                <span style={{ color: GOLD, fontWeight: 700 }}>For:</span>{' '}Shopify, WooCommerce &amp; any store
                <span style={{ color: 'rgba(255,255,255,0.3)' }}> · </span>
                <span style={{ color: GOLD, fontWeight: 700 }}>Delivery:</span>{' '}5–7 days, rush available
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <p className="mw-eyebrow" style={{ color: GOLD }}>FREQUENTLY ASKED</p>
              <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Black Friday setup questions, answered</h2>
              <FaqAccordionClient faqs={faqs} />
            </div>
            <div>
              <div
                className="lg:sticky rounded-2xl"
                style={{
                  top: '6rem',
                  background: 'linear-gradient(160deg, rgba(251,191,36,0.10) 0%, rgba(255,255,255,0.04) 100%)',
                  border: '1px solid rgba(251,191,36,0.25)',
                  padding: '1.75rem',
                }}
              >
                <div
                  className="inline-flex items-center gap-2 mb-3 px-2.5 py-1"
                  style={{ background: 'rgba(251,191,36,0.18)', borderRadius: '999px', fontSize: '0.66rem', color: GOLD, fontWeight: 700, letterSpacing: '0.08em' }}
                >
                  STILL HAVE QUESTIONS?
                </div>
                <ServiceContactForm
                  service="Black Friday Sale Setup (LP - FAQ sidebar)"
                  heading="Ask us anything"
                  subtext="Drop your store URL and question. We reply within 24 hours — usually much faster."
                  urlLabel="Store URL"
                  urlPlaceholder="yourstore.com"
                  messageLabel="Your question"
                  messagePlaceholder="Example: can you set up just the banners and emails?"
                  buttonLabel="Send My Question"
                />
              </div>
            </div>
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
            Offer, pages, banners, emails and launch support — handled by one team at a fixed price. Slots fill up fast
            in November.
          </p>
          <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: '2.5rem' }}>
            <a href="#emails" className="mw-btn-primary" style={{ background: GOLD, color: '#000', borderColor: GOLD }}>
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
