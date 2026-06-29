import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, Mail, Clock, MessageCircle, ArrowRight, ArrowUpRight, Briefcase, Sparkles, BookOpen, Wrench, Loader2 } from 'lucide-react'
import OutboundRedirect from '@/components/OutboundRedirect'
import { CHANNEL_LABEL, isOutboundUrlSafe, type OutboundChannel } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your message has been received. We\'ll be in touch within 24 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://miraclewebsoft.com/thank-you' },
}

type FormKey = 'contact' | 'services' | 'careers' | 'referral' | 'white_label'

const COPY: Record<FormKey, { eyebrow: string; heading: string; body: string; steps: { icon: typeof Mail; title: string; desc: string }[] }> = {
  contact: {
    eyebrow: 'Message received',
    heading: 'Thanks — we\'re on it.',
    body: 'Karam will personally review your store and reply within 24 hours with next steps. A confirmation email is already on its way.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Already sent. If you don\'t see it, check your spam folder.' },
      { icon: Clock, title: 'We review your brand', desc: 'Karam looks at your store and prepares specific recommendations — usually within a few hours.' },
      { icon: MessageCircle, title: 'We reach out', desc: 'You\'ll hear back within 24 hours with a tailored plan and any questions we have.' },
    ],
  },
  services: {
    eyebrow: 'Project brief received',
    heading: 'Got it — we\'ll build your proposal.',
    body: 'We\'ll review your requirements and send a tailored proposal with timeline and pricing within 24 hours.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Already sent. Reply directly if you\'d like to add anything.' },
      { icon: Clock, title: 'Scope & estimate', desc: 'We map out the work, timelines, and a fixed-price proposal — usually same day.' },
      { icon: MessageCircle, title: 'Custom proposal in your inbox', desc: 'Within 24 hours you\'ll have a clear plan to review.' },
    ],
  },
  careers: {
    eyebrow: 'Application received',
    heading: 'Thanks for applying.',
    body: 'We review every application personally. If your background fits an open role, you\'ll hear from us within 3–5 business days.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Sent — keep an eye on your inbox over the next few days.' },
      { icon: Clock, title: 'Personal review', desc: 'Our team reviews every CV ourselves — no auto-rejection, no ATS bots.' },
      { icon: MessageCircle, title: 'We get back to you', desc: 'Expect a response within 3–5 business days, even if the answer is "not this time".' },
    ],
  },
  referral: {
    eyebrow: 'Referral received',
    heading: 'Thanks for the introduction.',
    body: 'We\'ll reach out to your client within 24 hours and keep you in the loop at every step. Your commission is logged.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Sent to you with the referral details on file.' },
      { icon: Clock, title: 'We contact your client', desc: 'Within 24 hours, with a friendly intro that mentions you sent us their way.' },
      { icon: MessageCircle, title: 'You stay informed', desc: 'We update you on call dates, signed deals, and commission milestones.' },
    ],
  },
  white_label: {
    eyebrow: 'Enquiry received',
    heading: 'Thanks — your brief is private and secure.',
    body: 'We\'ll review your requirements and reply within 24 hours. If you requested an NDA, we\'ll send that first before discussing project details.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Sent privately to your work email. Discussions stay confidential.' },
      { icon: Clock, title: 'NDA (if requested)', desc: 'We\'ll send a mutual NDA for signing before we open the brief.' },
      { icon: MessageCircle, title: 'Private quote within 24 hours', desc: 'Tailored pricing for your engagement type — project, hourly, or retainer.' },
    ],
  },
}

const DEFAULT: typeof COPY[FormKey] = {
  eyebrow: 'Message received',
  heading: 'Thank you.',
  body: 'We\'ve received your message and will get back to you within 24 hours.',
  steps: [
    { icon: Mail, title: 'Confirmation email', desc: 'Check your inbox in a moment for a confirmation.' },
    { icon: Clock, title: 'We review your message', desc: 'Karam personally reviews every enquiry that comes in.' },
    { icon: MessageCircle, title: 'You hear back', desc: 'Expect a reply within 24 hours.' },
  ],
}

const EXPLORE = [
  { icon: Briefcase, eyebrow: 'See our work', title: 'Case studies', desc: 'Real Shopify builds, migrations and CRO wins from stores across multiple categories.', href: '/case-studies', accent: '#6C63FF' },
  { icon: Sparkles, eyebrow: 'What we do', title: 'Services', desc: 'Custom development, app builds, migrations, CRO & speed work.', href: '/services', accent: '#10B981' },
  { icon: BookOpen, eyebrow: 'Read & learn', title: 'Blog', desc: 'Shopify CRO, speed, migration and development guides for store owners.', href: '/blog', accent: '#F59E0B' },
  { icon: Wrench, eyebrow: 'Free tool', title: 'PC Builder', desc: 'A working demo of a custom Shopify product configurator.', href: '/tools/pc-builder', accent: '#EC4899' },
]

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ form?: string; to?: string; channel?: string }> }) {
  const sp = await searchParams

  // Block direct hits — only valid via form submission (?form=) or outbound redirect (?to=).
  const hasOutbound = !!sp.to && isOutboundUrlSafe(sp.to)
  const hasForm = !!sp.form && sp.form in COPY
  if (!hasOutbound && !hasForm) {
    notFound()
  }

  // ── Outbound interstitial mode ────────────────────────────────────────
  if (sp.to && isOutboundUrlSafe(sp.to)) {
    const channelKey = (sp.channel || 'external') as OutboundChannel
    const channelLabel = CHANNEL_LABEL[channelKey] ?? CHANNEL_LABEL.external
    return (
      <div style={{ background: '#0a0a0a', minHeight: 'calc(100vh - 80px)' }}>
        <OutboundRedirect to={sp.to} channel={channelKey} />

        <section style={{ position: 'relative', overflow: 'hidden', padding: '7rem 0 4rem' }}>
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.18), transparent 55%)',
          }} />
          <div className="mw-container" style={{ position: 'relative', textAlign: 'center', maxWidth: 720 }}>
            <div style={{
              width: 78, height: 78, borderRadius: '50%',
              background: 'rgba(108,99,255,0.12)',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.75rem',
              boxShadow: '0 0 0 8px rgba(108,99,255,0.04), 0 12px 40px rgba(108,99,255,0.18)',
            }}>
              <Loader2 size={32} style={{ color: '#6C63FF', animation: 'mw-spin 1s linear infinite' }} />
            </div>
            <span className="mw-eyebrow" style={{ color: '#6C63FF' }}>Connecting you</span>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Opening {channelLabel}…
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 2rem' }}>
              Hold tight — we&apos;re forwarding you to {channelLabel}. If nothing happens in a moment, use the button below.
            </p>
            <a
              href={sp.to}
              rel="noopener noreferrer"
              className="mw-btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Continue to {channelLabel} <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* While you wait — same explore grid, helps if the redirect target opens in another app */}
        <section style={{ padding: '0 0 6rem' }}>
          <div className="mw-container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="mw-eyebrow">While you wait</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>
                Have a look around
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto' }}>
                {channelLabel === 'Email' || channelLabel === 'Phone' ? `Your ${channelLabel.toLowerCase()} app should have opened.` : `${channelLabel} should be loading in another tab.`} Here&apos;s what most visitors check next.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem', maxWidth: 1100, margin: '0 auto' }}>
              {EXPLORE.map(item => {
                const Icon = item.icon
                return (
                  <Link key={item.href} href={item.href} className="mw-explore-card" style={{
                    display: 'flex', flexDirection: 'column',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 18, padding: '1.5rem 1.4rem',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 12,
                        background: `${item.accent}20`, border: `1px solid ${item.accent}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={18} style={{ color: item.accent }} />
                      </div>
                      <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
                    </div>
                    <span style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                      {item.eyebrow}
                    </span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes mw-spin { to { transform: rotate(360deg); } }
          .mw-explore-card:hover {
            background: rgba(255,255,255,0.04) !important;
            border-color: rgba(255,255,255,0.18) !important;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    )
  }

  // ── Form-submission mode ──────────────────────────────────────────────
  const key = (sp.form && sp.form in COPY ? sp.form : '') as FormKey | ''
  const copy = key ? COPY[key] : DEFAULT

  return (
    <div style={{ background: '#0a0a0a', minHeight: 'calc(100vh - 80px)' }}>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '7rem 0 4.5rem' }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.18), transparent 55%)',
        }} />
        <div className="mw-container" style={{ position: 'relative', textAlign: 'center', maxWidth: 720 }}>
          <div style={{
            width: 78, height: 78, borderRadius: '50%',
            background: 'rgba(16,185,129,0.12)',
            border: '1px solid rgba(16,185,129,0.3)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.75rem',
            boxShadow: '0 0 0 8px rgba(16,185,129,0.04), 0 12px 40px rgba(16,185,129,0.18)',
          }}>
            <CheckCircle2 size={36} style={{ color: '#10B981' }} />
          </div>
          <span className="mw-eyebrow" style={{ color: '#10B981' }}>{copy.eyebrow}</span>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            {copy.heading}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            {copy.body}
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 5rem' }}>
        <div className="mw-container" style={{ maxWidth: 980 }}>
          <div style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 1.75rem' }}>
              What happens next
            </p>
            <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {copy.steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <li key={i} style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 16,
                    padding: '1.25rem 1.25rem 1.4rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.85rem' }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 10,
                        background: 'rgba(108,99,255,0.14)',
                        border: '1px solid rgba(108,99,255,0.25)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={15} style={{ color: '#6C63FF' }} />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>
                        STEP {i + 1}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.4rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0, fontWeight: 300 }}>{s.desc}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 6rem' }}>
        <div className="mw-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">While you wait</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>
              Have a look around
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto' }}>
              No pressure — but here&apos;s what most visitors check next.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.1rem', maxWidth: 1100, margin: '0 auto' }}>
            {EXPLORE.map(item => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="mw-explore-card" style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 18, padding: '1.5rem 1.4rem',
                  textDecoration: 'none', transition: 'all 0.25s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12,
                      background: `${item.accent}20`, border: `1px solid ${item.accent}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={18} style={{ color: item.accent }} />
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <span style={{ fontSize: '0.66rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                    {item.eyebrow}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 7rem' }}>
        <div className="mw-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.25rem' }}>
            Need to send another message or change something? Email{' '}
            <a href="mailto:karam@miraclewebsoft.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              karam@miraclewebsoft.com
            </a>
          </p>
          <Link href="/" className="mw-btn-outline" style={{ display: 'inline-flex' }}>
            Back to home <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <style>{`
        .mw-explore-card:hover {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.18) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}
