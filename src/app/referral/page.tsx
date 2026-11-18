import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ReferralCalculator from '@/components/ReferralCalculator'
import ReferralForm from '@/components/ReferralForm'
import FaqSection from '@/components/ui/FaqSection'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
  description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
  alternates: { canonical: 'https://miraclewebsoft.com/referral' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
    description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
    url: 'https://miraclewebsoft.com/referral',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
    description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
  },
}

const steps = [
  { time: 'You, 2 minutes', title: 'Introduce your contact', body: 'Fill in the form below with their details and a short note on what they need. No selling required.' },
  { time: 'Us, within 24 hours', title: 'We handle everything', body: 'We reach out, send a proposal, deliver the project and manage the client relationship end to end.' },
  { time: 'Invoice clears', title: 'You get paid 20%', body: 'Once the client pays, we transfer 20% of the project value to you within 3 business days.' },
]

const personas = [
  { title: 'Freelance designers', body: 'Your client needs a Shopify store but you don’t do development. Refer them and earn while we build.' },
  { title: 'Digital agencies', body: 'A client needs something outside your stack. Keep the relationship and earn on the project.' },
  { title: 'Consultants and advisors', body: 'You advise brands on eCommerce strategy. Pair your advice with a team that can execute it.' },
  { title: 'Content creators', body: 'Your audience includes brand owners. One introduction to the right store can be worth a lot.' },
]

const qualifying = [
  'New Shopify store builds',
  'Platform migrations to Shopify',
  'Theme design and customisation',
  'CRO and speed optimisation',
  'Shopify app development',
  'TikTok Shop integration',
]

const trustPoints = [
  { title: '700+ projects, Top Rated Plus', body: '98% job success on Upwork and 4.9 on Clutch. Your referral goes to a team with a long public track record.' },
  { title: 'Your relationship stays yours', body: 'We never approach your client for future work without your involvement. You stay the trusted advisor.' },
  { title: 'NDAs signed on request', body: 'Need confidentiality covered? We sign an NDA before any project discussion.' },
  { title: 'No cap on referrals', body: 'Refer one client or fifty: 20% on every project, including repeat work from the same client.' },
]

const faqs = [
  {
    q: 'When exactly do I get paid?',
    a: 'Your 20% commission is processed within 3 business days of the client\'s invoice clearing. We pay by bank transfer, PayPal or Razorpay, whichever suits you.',
  },
  {
    q: 'What if the client places more orders in the future?',
    a: 'You earn 20% on every project they do with us — first, second, tenth. Your referral is logged permanently against your name.',
  },
  {
    q: 'Do I need to be an existing Miracle Websoft client?',
    a: 'No. Anyone can refer. You don\'t need to have worked with us before. All you need is a contact who needs Shopify work.',
  },
  {
    q: 'What projects qualify for commission?',
    a: 'Any paid Shopify development project — store builds, migrations, theme work, app development, CRO, TikTok Shop. The minimum project size for commission is $300.',
  },
  {
    q: 'How do I track my referrals?',
    a: 'After you submit the form, we\'ll email you a confirmation. For ongoing tracking, reply to that email and we\'ll keep you updated with a simple status update.',
  },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Referral Program — Earn 20% Commission',
    description:
      'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits.',
    url: 'https://miraclewebsoft.com/referral',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Referral', url: '/referral' },
  ]),
])

export default function ReferralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* ─── HERO ─── */}
      <section style={{ paddingTop: 'clamp(8rem, 12vw, 9.5rem)', paddingBottom: '4.5rem' }}>
        <div className="mw-container grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="mw-eyebrow">Referral partner program</p>
            <h1 className="mw-hero-title" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: '15ch' }}>
              Earn <span className="mw-mark">20%</span> on every Shopify client you refer.
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', maxWidth: '46ch' }}>
              Introduce a brand to Miracle Websoft. We scope, sell and deliver the project, and pay you 20% of what the client pays. You don&apos;t have to do anything else.
            </p>
            <div className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
              <a href="#refer-form" className="mw-btn-accent">Refer a client <ArrowRight size={16} /></a>
              <a href="#calculator" className="mw-btn-outline">Work out your commission</a>
            </div>
          </div>
          <dl className="audit-facts" style={{ marginTop: 0 }}>
            <div><dt>Commission</dt><dd>20%</dd></div>
            <div><dt>Paid</dt><dd>3 days</dd></div>
            <div><dt>Cap</dt><dd>None</dd></div>
          </dl>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">How it works</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Three steps to your first commission.</h2>
          <ol className="steps min-[901px]:!grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps-time">{s.time}</span>
                <h3><span className="mw-num" style={{ marginRight: '0.5rem' }}>{i + 1}</span>{s.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section id="calculator" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="mw-eyebrow">Your potential earnings</p>
            <h2 style={{ maxWidth: '12ch' }}>How much could you earn?</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '40ch' }}>Drag the slider to see your commission on a project of any size. Minimum project value is $300.</p>
          </div>
          <ReferralCalculator />
        </div>
      </section>

      {/* ─── WHO + WHAT QUALIFIES ─── */}
      <section className="mw-section">
        <div className="mw-container grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <p className="mw-eyebrow">Who can refer</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', maxWidth: '16ch', marginBottom: '2rem' }}>Anyone who knows store owners.</h2>
            <ul style={{ borderTop: '1px solid var(--text-1)' }}>
              {personas.map(p => (
                <li key={p.title} style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mw-eyebrow">Qualifying projects</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', maxWidth: '16ch', marginBottom: '2rem' }}>Any paid Shopify work counts.</h2>
            <ul style={{ borderTop: '1px solid var(--text-1)' }}>
              {qualifying.map((q, i) => (
                <li key={q} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>{q}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--text-3)' }}>
              Minimum project value $300. Commission paid within 3 business days of the client invoice clearing.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY YOUR REFERRAL IS SAFE ─── */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">Trust and transparency</p>
          <h2 style={{ maxWidth: '18ch', marginBottom: '3rem' }}>Your name is on the introduction. We treat it that way.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {trustPoints.map((t, i) => (
              <div key={t.title} style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0 2rem' }}>
                <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontSize: '1.05rem', margin: '0.75rem 0 0.5rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.93rem', margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFER FORM ─── */}
      <section id="refer-form" className="mw-section" style={{ background: 'var(--bg-deep)', scrollMarginTop: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Start earning</p>
            <h2 style={{ maxWidth: '12ch' }}>Refer a client today.</h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '40ch' }}>
              Fill in the details. We contact your client within 24 hours and keep you posted by email from there.
            </p>
            <ul className="offer-list">
              <li>20% of the project value, no cap</li>
              <li>Repeat projects from the same client count too</li>
              <li>Paid by bank transfer, PayPal or Razorpay</li>
            </ul>
          </div>
          <ReferralForm />
        </div>
      </section>

      <FaqSection faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} heading="Questions from referral partners" />

      {/* ─── BOTTOM CTA ─── */}
      <section className="mw-ink" style={{ padding: '4.5rem 0' }}>
        <div className="mw-container flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', maxWidth: '18ch' }}>Already have someone in mind?</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#refer-form" className="mw-btn-accent">Refer a client</a>
            <Link href="/bio/owner" className="mw-btn-outline">Talk to Karam first</Link>
          </div>
        </div>
      </section>
    </>
  )
}
