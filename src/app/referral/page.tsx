import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Users, Zap, DollarSign,
  Shield, Star, Briefcase, Palette, Code2, TrendingUp,
  ShoppingBag, Globe, ArrowUpRight,
} from 'lucide-react'
import ReferralCalculator from '@/components/ReferralCalculator'
import ReferralForm from '@/components/ReferralForm'
import { breadcrumb, faqPage, renderJsonLd, webPage } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
  description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
  alternates: { canonical: 'https://www.miraclewebsoft.com/referral' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
    description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
    url: 'https://www.miraclewebsoft.com/referral',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn 20% Commission — Shopify Referral Program | Miracle Websoft',
    description: 'Refer a Shopify client to Miracle Websoft and earn 20% of the project value. No cap, no limits. Join our referral partner program today.',
  },
}

const steps = [
  {
    n: '01',
    icon: <Users size={22} />,
    title: 'Introduce your contact',
    body: 'Fill in the form below with your contact\'s details and a brief note about what they need. That\'s all — no selling required.',
    color: '#6C63FF',
  },
  {
    n: '02',
    icon: <Zap size={22} />,
    title: 'We handle everything',
    body: 'We reach out within 24 hours, send a proposal, deliver the project, and manage the client relationship end-to-end.',
    color: '#10B981',
  },
  {
    n: '03',
    icon: <DollarSign size={22} />,
    title: 'You get paid 20%',
    body: 'Once the client pays their invoice, we transfer 20% of the project value directly to you. No chasing, no admin.',
    color: '#F59E0B',
  },
]

const personas = [
  {
    icon: <Palette size={20} />,
    title: 'Freelance Designers',
    body: 'Your client needs a Shopify store but you don\'t do dev? Refer them and earn while we build.',
    color: '#E1306C',
  },
  {
    icon: <Globe size={20} />,
    title: 'Digital Agencies',
    body: 'Got a client outside your stack? Keep the relationship and earn passive income on every project.',
    color: '#0077B5',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Consultants & Advisors',
    body: 'You advise brands on eCommerce strategy. Pair your advice with a top execution partner.',
    color: '#10B981',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Content Creators',
    body: 'Your audience includes brand owners and entrepreneurs. A single mention can earn you thousands.',
    color: '#F59E0B',
  },
]

const qualifying = [
  { icon: <ShoppingBag size={14} />, label: 'New Shopify Store Builds' },
  { icon: <Code2 size={14} />, label: 'Platform Migrations to Shopify' },
  { icon: <Palette size={14} />, label: 'Theme Design & Customisation' },
  { icon: <Zap size={14} />, label: 'CRO & Speed Optimisation' },
  { icon: <Code2 size={14} />, label: 'Shopify App Development' },
  { icon: <Globe size={14} />, label: 'TikTok Shop Integration' },
]

const trustPoints = [
  {
    icon: <Star size={18} />,
    title: '600+ projects, 4.9★ on Upwork',
    body: 'Top Rated Plus — top 3% globally. Your referral goes to an agency with a proven track record.',
    color: '#F59E0B',
  },
  {
    icon: <Shield size={18} />,
    title: 'Your relationship stays yours',
    body: 'We never approach your client directly for future work without your involvement. You stay the trusted advisor.',
    color: '#6C63FF',
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: 'NDAs signed on request',
    body: 'Need confidentiality covered? We sign NDAs before any project discussion. No questions asked.',
    color: '#10B981',
  },
  {
    icon: <DollarSign size={18} />,
    title: 'No cap. Unlimited referrals.',
    body: 'Refer one client or fifty — 20% on every project. Every repeat order from the same client counts too.',
    color: '#E1306C',
  },
]

const faqs = [
  {
    q: 'When exactly do I get paid?',
    a: 'Your 20% commission is processed within 3 business days of the client\'s invoice clearing. We pay via bank transfer, PayPal, or Razorpay — whichever works for you.',
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
    url: 'https://www.miraclewebsoft.com/referral',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Referral', url: '/referral' },
  ]),
  faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
])

export default function ReferralPage() {
  return (
    <div style={{
      background: 'linear-gradient(170deg, #0a0a0a 0%, #0d0a1a 45%, #080e0a 100%)',
      minHeight: '100vh',
      paddingTop: '5rem',
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      {/* Background glow */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', left: '30%', width: 800, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(108,99,255,0.09) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '15%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="mw-container" style={{ textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
            <span style={{
              fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(108,99,255,0.9)', background: 'rgba(108,99,255,0.1)',
              border: '1px solid rgba(108,99,255,0.25)', borderRadius: 9999, padding: '0.3rem 0.9rem',
            }}>
              Referral Partner Program
            </span>
          </div>

          {/* Big commission number */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(5rem, 18vw, 9rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6C63FF 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 0.9,
              display: 'block',
            }}>20%</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            color: '#fff',
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Earn on every Shopify client you refer
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: 520,
            margin: '0 auto 2.5rem',
            fontWeight: 300,
          }}>
            Introduce a brand or business to Miracle Websoft. We close the project, deliver 5-star results, and pay you 20% of the project value — with zero effort on your part.
          </p>

          {/* Trust stats */}
          <div style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: '0 2rem',
            marginBottom: '2.5rem',
            padding: '1rem 2rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
          }}>
            {[
              { val: '20%', label: 'Commission' },
              { val: '600+', label: 'Projects done' },
              { val: '98%+', label: 'Success rate' },
              { val: '10+', label: 'Years' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '1.35rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div>
            <a href="#refer-form" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              borderRadius: 9999, textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(108,99,255,0.4)',
            }}>
              Refer a Client Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">How it works</span>
            <h2>Three steps to your first commission</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>No contracts, no minimums. Just introduce your contact and we handle the rest.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {steps.map(s => (
              <div key={s.n} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '2rem 1.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Step number watermark */}
                <div style={{
                  position: 'absolute', top: -8, right: 16,
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: '4.5rem', fontWeight: 700,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1, userSelect: 'none',
                }}>{s.n}</div>

                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${s.color}15`, border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: s.color, marginBottom: '1.25rem',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Your potential earnings</span>
            <h2>How much can you earn?</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Drag the slider to see your commission on any project size.</p>
          </div>
          <ReferralCalculator />
        </div>
      </section>

      {/* ─── WHO SHOULD REFER ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Who can refer</span>
            <h2>Perfect for anyone with eCommerce contacts</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {personas.map(p => (
              <div key={p.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 18,
                padding: '1.75rem 1.5rem',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: `${p.color}12`, border: `1px solid ${p.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: p.color, marginBottom: '1rem',
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT QUALIFIES ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24, padding: '2.5rem 2rem',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="mw-eyebrow" style={{ display: 'block' }}>Qualifying projects</span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', margin: 0 }}>Any Shopify work counts</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.7rem' }}>
                {qualifying.map(q => (
                  <div key={q.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.9rem 1rem',
                    background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)',
                    borderRadius: 12,
                  }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 8,
                      background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#10B981', flexShrink: 0,
                    }}>
                      {q.icon}
                    </div>
                    <span style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>{q.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '1.5rem 0 0', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                Minimum project value $300 · Commission paid within 3 business days of client invoice clearing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY YOUR REFERRAL IS SAFE ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Trust & transparency</span>
            <h2>Why your referral is in safe hands</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Your reputation is on the line when you refer. Here&apos;s why partners keep sending us clients.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {trustPoints.map(t => (
              <div key={t.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 18,
                padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.75rem',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${t.color}12`, border: `1px solid ${t.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: t.color,
                }}>
                  {t.icon}
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', margin: 0 }}>{t.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REFER FORM ─── */}
      <section id="refer-form" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem', scrollMarginTop: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">Start earning</span>
            <h2>Refer a client today</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Fill in the details below. We&apos;ll reach out to your client within 24 hours and handle everything from here.
            </p>
          </div>
          <ReferralForm />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mw-section-header">
            <span className="mw-eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>

          <div style={{ maxWidth: 660, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map(f => (
              <div key={f.q} style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '1.4rem 1.6rem',
              }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{f.q}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
        <div className="mw-container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(16,185,129,0.07) 100%)',
            border: '1px solid rgba(108,99,255,0.2)',
            borderRadius: 24,
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto',
          }}>
            <div style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}>
              Already have someone<br />in mind?
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Take 2 minutes to fill in the form. We&apos;ll do the rest.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="#refer-form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.9rem 1.75rem',
                background: 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
                color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                borderRadius: 9999, textDecoration: 'none',
                boxShadow: '0 8px 28px rgba(108,99,255,0.4)',
              }}>
                Refer a Client
                <ArrowRight size={15} />
              </a>
              <Link href="/bio/owner" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 1.75rem',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 9999, textDecoration: 'none',
              }}>
                Talk to Karam first
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.18)' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>miraclewebsoft.com</Link>
          {' '}· Shopify Agency · Referral Program
        </p>
      </div>
    </div>
  )
}
