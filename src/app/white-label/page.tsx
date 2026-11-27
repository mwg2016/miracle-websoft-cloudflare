import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import WhiteLabelForm from '@/components/WhiteLabelForm'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'White Label Shopify Team for Agencies | Miracle Websoft',
  description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
  alternates: { canonical: 'https://miraclewebsoft.com/white-label' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'White Label Shopify Team for Agencies | Miracle Websoft',
    description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
    url: 'https://miraclewebsoft.com/white-label',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label Shopify Team for Agencies | Miracle Websoft',
    description: 'Scale your agency with NDA protected white label Shopify development, migrations, apps, CRO, speed optimization and flexible ongoing technical support.',
  },
}

const models = [
  {
    title: 'Per project',
    sub: 'Fixed scope, fixed price',
    from: 'From $500',
    description: 'For one-off builds, migrations or feature additions. We quote within 24 hours of receiving the brief.',
    includes: [
      'Written scope of work',
      'Fixed price, agreed up front',
      'Delivery to an agreed timeline',
      'Code handover or direct deploy',
      '7 days of post-launch support',
    ],
    ideal: 'Agencies with occasional Shopify work or one specific client project in hand.',
  },
  {
    title: 'Hourly',
    sub: 'Flexible, billed weekly',
    from: 'From $25/hr',
    description: 'Hours billed weekly. Good for ongoing tweaks, support, feature work, or trying us out on something small.',
    includes: [
      'Minimum 10 hrs/week',
      'Weekly time reports',
      'Slack or email communication',
      'Your choice of PM tool',
      'Pause or scale any week',
    ],
    ideal: 'Agencies with a steady stream of smaller Shopify tasks or store maintenance.',
  },
  {
    title: 'Monthly retainer',
    sub: 'Reserved capacity, priority queue',
    from: 'From $1,500/mo',
    description: 'Team capacity reserved for your agency every month. Same people, priority over ad-hoc requests.',
    includes: [
      '20 dedicated hours/week',
      'Same team, every month',
      'Priority over ad-hoc requests',
      'Monthly planning call',
      'Roll over unused hours (up to 10)',
    ],
    ideal: 'Agencies with consistent Shopify volume who need a reliable dev partner on call.',
  },
]

const steps = [
  { title: 'Share the brief privately', body: 'Send the client brief under NDA. We reply with scope, timeline and price within 24 hours.' },
  { title: 'We build, quietly', body: 'Work happens inside your PM tools. Code, assets and updates go to you, in your voice.' },
  { title: 'You deliver and invoice', body: 'You present to the client, take the credit and bill at your rate. We never contact them.' },
]

const services = [
  'Custom Shopify store builds',
  'Platform migrations to Shopify',
  'Theme design and customisation',
  'Shopify app development',
  'CRO and speed optimisation',
  'TikTok Shop integration',
  'Ongoing support and maintenance',
  'Headless / Hydrogen builds',
]

const portfolio = [
  { name: 'Corridor NYC', category: 'Menswear', location: 'USA', desc: 'Full theme rebuild and custom product builder', href: 'https://corridornyc.com' },
  { name: 'Klarity London', category: 'Fine jewelry', location: 'UK', desc: 'Custom configurator and Shopify app integration', href: 'https://klarity.london' },
  { name: 'VKTRY', category: 'Sports', location: 'USA', desc: 'Custom landing pages and checkout work', href: 'https://vktry.com' },
  { name: 'Afnan Perfumes', category: 'Fragrance', location: 'UK', desc: 'WooCommerce to Shopify migration, 5k+ SKUs', href: 'https://afnanperfumes.co.uk' },
  { name: 'Phone Loops', category: 'Tech', location: 'Canada', desc: 'Subscriptions and TikTok Shop integration', href: 'https://phoneloops.com' },
  { name: 'Nathan James', category: 'Furniture', location: 'USA', desc: 'Bulk variant importer and custom room builder', href: 'https://nathanjamesfurniture.com' },
  { name: 'Amuerte Gin', category: 'Spirits', location: 'Belgium', desc: 'Age gate and international shipping rules', href: 'https://amuertegin.com' },
]

const whyUs = [
  { title: 'NDA before the brief', body: 'We sign a mutual NDA before you share client details, briefs or assets.' },
  { title: 'We never contact your client', body: 'The relationship is yours. All communication goes through you unless you say otherwise.' },
  { title: 'Deliverables under your brand', body: 'Code, reports and write-ups delivered under your agency name if you need it.' },
  { title: 'Your tools, your workflow', body: 'Asana, Jira, ClickUp, Notion, Linear. Slack or email for daily updates.' },
  { title: 'Start within 48 hours', body: 'Once scope is agreed, work starts within 48 hours. No long onboarding cycle.' },
  { title: 'Shopify is most of what we do', body: '700+ projects since 2016, by an in-house team in India.' },
]

const techStack = ['Shopify Liquid', 'React / Next.js', 'Shopify Hydrogen', 'Shopify App Bridge', 'Node.js', 'GraphQL / REST API', 'Figma', 'Git / GitHub']

const faqs = [
  {
    q: 'Do you sign NDAs?',
    a: 'Yes — always, before any brief is shared. We send a mutual NDA the same day you request one. Your client details, project specs, and business information stay strictly confidential.',
  },
  {
    q: 'Can you communicate directly with my client if needed?',
    a: 'Only if you explicitly want us to, and only under your agency brand. By default all communication goes through you so your client never knows we exist.',
  },
  {
    q: 'What is the minimum engagement?',
    a: 'For per-project work there\'s no minimum — one project is fine. For hourly, we ask for a minimum of 10 hours per week. For retainers, the entry point is 20 hours per week.',
  },
  {
    q: 'How fast can you start?',
    a: 'Once the brief is received and scope is agreed, we can start work within 48 hours. For retainer partners, capacity is pre-reserved so work starts the same day.',
  },
  {
    q: 'Do you use our project management tools?',
    a: 'Yes. We work inside Asana, Jira, ClickUp, Notion, Basecamp, Linear — wherever your team already operates. We also use Slack, Teams, or email for day-to-day comms.',
  },
  {
    q: 'What time zones do you cover?',
    a: 'Our team in Rajpura, Punjab (near Chandigarh) covers significant overlap with USA (EST/PST), UK, and Australia. We also have flexible hours to cover early/late standups across time zones.',
  },
]

const jsonLd = renderJsonLd([
  service({
    name: 'White Label Shopify Development',
    description:
      'Silent Shopify development partner for agencies — build under your brand per project, hourly, or on a monthly retainer. NDA always signed.',
    url: '/white-label',
    serviceType: 'White label Shopify development',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'White Label', url: '/white-label' },
  ]),
])

export default function WhiteLabelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">White-label Shopify for agencies</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '14ch' }}>
              White-label Shopify development: your agency&apos;s <span className="mw-mark">quiet Shopify team.</span>
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '46ch' }}>
              We build under your brand. You keep the client, the credit and the margin.
              Hire us per project, by the hour or on a monthly retainer. No lock-in.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <a href="#quote-form" className="mw-btn-accent">Get a private quote <ArrowRight size={16} /></a>
              <Link href="/book" className="mw-btn-outline">Book a 15-min call</Link>
            </div>
            <ul className="home-proof">
              <li><strong>700+</strong> projects</li>
              <li><strong>Top Rated Plus</strong> on Upwork</li>
              <li><strong>Top Rated Plus</strong> on Upwork</li>
            </ul>
          </div>

          <div className="audit-form-card">
            <p className="mw-num" style={{ marginBottom: '0.75rem' }}>HOW IT WORKS</p>
            <ol className="book-agenda">
              {steps.map((s, i) => (
                <li key={s.title} style={{ padding: '1.1rem 0' }}>
                  <span className="mw-num" style={{ paddingTop: '0.2rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.92rem', margin: 0 }}>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '1rem' }}>
              Your client never knows we exist unless you want them to.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Engagement models</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Hire us the way that fits your agency.</h2>
          <div className="grid md:grid-cols-3" style={{ borderTop: '1px solid var(--text-1)' }}>
            {models.map((m, i) => (
              <div
                key={m.title}
                className={i > 0 ? 'md:border-l md:pl-6 border-t md:border-t-0' : ''}
                style={{ padding: '1.75rem 1.5rem 1.75rem 0', borderColor: 'var(--border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <p className="mw-num" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>{m.from.toUpperCase()}</p>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400, fontSize: '1.75rem', letterSpacing: '-0.02em' }}>{m.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', margin: '0.2rem 0 0' }}>{m.sub}</p>
                </div>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{m.description}</p>
                <ul className="offer-list" style={{ marginTop: '0.25rem', gap: '0.55rem' }}>
                  {m.includes.map(item => <li key={item} style={{ fontSize: '0.92rem' }}>{item}</li>)}
                </ul>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>Ideal for:</strong> {m.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">What we deliver</p>
            <h2 style={{ maxWidth: '14ch' }}>Every Shopify job your clients ask for.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '40ch' }}>
              One team for builds, migrations, apps and ongoing work, so you don&apos;t juggle three freelancers per client.
            </p>
          </div>
          <div>
            <ul className="grid sm:grid-cols-2 gap-x-8" style={{ borderTop: '1px solid var(--text-1)' }}>
              {services.map((s, i) => (
                <li key={s} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mw-num" style={{ margin: '2rem 0 0.75rem' }}>TECH STACK</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map(t => <span key={t} className="mw-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section className="mw-section">
        <div className="mw-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="mw-eyebrow">Our work</p>
              <h2 style={{ maxWidth: '16ch' }}>Brands we&apos;ve built for.</h2>
              <p style={{ marginTop: '1rem', maxWidth: '50ch' }}>
                A sample of public projects. Much of our agency work is delivered under NDA and isn&apos;t listed anywhere.
              </p>
            </div>
            <Link href="/work" className="mw-btn-outline" style={{ alignSelf: 'flex-start' }}>See all work <ArrowRight size={15} /></Link>
          </div>
          <ul className="svc-table">
            {portfolio.map((p, i) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-name">{p.name}</span>
                  <span className="svc-line">{p.desc}</span>
                  <span className="svc-price">{p.category} · {p.location}</span>
                  <ArrowUpRight size={18} className="svc-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Why agencies work with us</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Built to make you look good in front of your client.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {whyUs.map((w, i) => (
              <div key={w.title} style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0 2rem' }}>
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: '0.75rem 0 0.5rem' }}>{w.title}</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE FORM ─── */}
      <section id="quote-form" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Get started</p>
            <h2 style={{ maxWidth: '12ch' }}>Get a private quote.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '40ch' }}>
              Tell us what you need. We reply with a proposal, timeline and price within 24 hours. Tick the NDA box and we&apos;ll send one before you share any details.
            </p>
            <ul className="offer-list">
              <li>Reply within 24 hours</li>
              <li>Mutual NDA on request, before the brief</li>
              <li>No obligation, no sales sequence</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-3)', marginTop: '2rem' }}>
              Rather talk first? <Link href="/book" className="underline underline-offset-4" style={{ color: 'var(--text-1)' }}>Book a 15-minute call</Link>.
            </p>
          </div>
          <WhiteLabelForm />
        </div>
      </section>

      <FaqSection faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} heading="Common questions from agencies" />

      {/* ─── BOTTOM CTA ─── */}
      <section className="mw-ink" style={{ padding: '4.5rem 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '20ch' }}>Send a brief. Get a price within 24 hours.</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#quote-form" className="mw-btn-accent">Get a private quote</a>
            <Link href="/bio/owner" className="mw-btn-outline">Talk to Karam directly</Link>
          </div>
        </div>
      </section>
    </>
  )
}
