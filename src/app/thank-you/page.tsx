import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Mail, Clock, MessageCircle, ArrowRight, ArrowUpRight } from 'lucide-react'
import OutboundRedirect from '@/components/OutboundRedirect'
import { CHANNEL_LABEL, isOutboundUrlSafe, type OutboundChannel } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your message has been received. We\'ll be in touch within 24 hours.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://miraclewebsoft.com/thank-you' },
}

type FormKey = 'contact' | 'services' | 'careers' | 'referral' | 'white_label' | 'audit' | 'call'

const COPY: Record<FormKey, { eyebrow: string; heading: string; body: string; steps: { icon: typeof Mail; title: string; desc: string }[] }> = {
  audit: {
    eyebrow: 'Teardown requested',
    heading: 'Your teardown is in the queue.',
    body: 'We\'ll record a 5-minute video walkthrough of your store and email it to you within 48 hours, with the fixes ranked by likely impact.',
    steps: [
      { icon: Clock, title: 'We go through your store', desc: 'On a real phone and on desktop: speed, product page, cart and checkout path.' },
      { icon: Mail, title: 'Video lands in your inbox', desc: 'Within 48 hours. Check spam if you don\'t see it, it comes from karam@miraclewebsoft.com.' },
      { icon: MessageCircle, title: 'You decide what\'s next', desc: 'Fix the items yourself, or reply and we\'ll send a fixed quote. No follow-up sequence.' },
    ],
  },
  call: {
    eyebrow: 'Call booked',
    heading: 'See you on the call.',
    body: 'The calendar invite is on its way. If you send your store URL beforehand, we\'ll come with specific observations instead of generic questions.',
    steps: [
      { icon: Mail, title: 'Calendar invite', desc: 'Sent by Calendly to the email you used. Reschedule from the invite if needed.' },
      { icon: Clock, title: 'We look at your store first', desc: 'Reply to the invite with your URL and the one thing you most want to fix.' },
      { icon: MessageCircle, title: 'A fixed quote after the call', desc: 'If there\'s work worth doing, you\'ll have scope and price within 24 hours.' },
    ],
  },
  contact: {
    eyebrow: 'Message received',
    heading: 'Thanks — we\'re on it.',
    body: 'Karam will personally review your store and reply within 24 hours with next steps. A confirmation email is already on its way.',
    steps: [
      { icon: Mail, title: 'Confirmation email', desc: 'Already sent. If you don\'t see it, check your spam folder.' },
      { icon: Clock, title: 'We review your brand', desc: 'Karam reads your brief and looks at your store before replying.' },
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
  { eyebrow: 'See our work', title: 'Case studies', desc: 'Shopify builds, migrations and fixes, with what clients said after.', href: '/case-studies' },
  { eyebrow: 'Proof', title: 'Client reviews', desc: 'Every Upwork review, unedited and linked to its project.', href: '/reviews' },
  { eyebrow: 'Read & learn', title: 'Blog', desc: 'Shopify CRO, speed, migration and development guides for store owners.', href: '/blog' },
  { eyebrow: 'Talk sooner', title: 'Book a 15-min call', desc: 'Skip the email back-and-forth and pick a time that suits you.', href: '/book' },
]

function Explore({ intro }: { intro: string }) {
  return (
    <section style={{ padding: '0 0 6rem' }}>
      <div className="mw-container">
        <p className="mw-eyebrow">While you wait</p>
        <p style={{ color: 'var(--text-3)', maxWidth: '56ch', marginBottom: '1.5rem' }}>{intro}</p>
        <ul className="ty-explore">
          {EXPLORE.map(item => (
            <li key={item.href}>
              <Link href={item.href}>
                <span className="mw-num">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ArrowRight size={16} className="ty-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const TY_CSS = `
.ty-explore { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--text-1); }
.ty-explore li + li { border-left: 1px solid var(--border); }
.ty-explore a { display: flex; flex-direction: column; gap: 0.45rem; height: 100%; padding: 1.25rem 1.25rem 1.5rem 0; }
.ty-explore li + li a { padding-left: 1.25rem; }
.ty-explore h3 { font-size: 1.3rem; }
.ty-explore p { font-size: 0.9rem; color: var(--text-3); }
.ty-explore a:hover h3 { text-decoration: underline; text-underline-offset: 3px; }
.ty-arrow { color: var(--text-4); margin-top: auto; }
.ty-explore a:hover .ty-arrow { color: var(--accent); }
@media (max-width: 900px) { .ty-explore { grid-template-columns: 1fr 1fr; } .ty-explore li:nth-child(3) { border-left: 0; } .ty-explore li:nth-child(3) a { padding-left: 0; } .ty-explore li:nth-child(n+3) { border-top: 1px solid var(--border); } }
@media (max-width: 560px) { .ty-explore { grid-template-columns: 1fr; } .ty-explore li + li { border-left: 0; border-top: 1px solid var(--border); } .ty-explore li + li a { padding-left: 0; } }
.ty-steps { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 900px) { .ty-steps { grid-template-columns: 1fr; } .ty-steps li, .ty-steps li + li { padding-left: 0; border-left: 0; border-bottom: 1px solid var(--border); padding-bottom: 1.5rem; } }
.ty-bar { height: 2px; background: var(--border); overflow: hidden; margin: 2rem 0; max-width: 28rem; }
.ty-bar span { display: block; height: 100%; width: 100%; background: var(--text-1); transform-origin: left; animation: ty-fill 0.7s linear forwards; }
@keyframes ty-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) { .ty-bar span { animation: none; } }
`

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
    const appChannel = channelLabel === 'Email' || channelLabel === 'Phone'
    return (
      <>
        <OutboundRedirect to={sp.to} channel={channelKey} />
        <section style={{ padding: 'clamp(8rem, 12vw, 10rem) 0 4.5rem' }}>
          <div className="mw-container">
            <p className="mw-eyebrow">Forwarding you</p>
            <h1 className="mw-hero-title">Opening {channelLabel}&hellip;</h1>
            <div className="ty-bar" aria-hidden="true"><span /></div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', maxWidth: '50ch', marginBottom: '1.75rem' }}>
              {appChannel ? `Your ${channelLabel.toLowerCase()} app should open in a moment.` : `${channelLabel} should open in a moment.`} If nothing happens, use the button.
            </p>
            <a href={sp.to} rel="noopener noreferrer" className="mw-btn-primary">
              Continue to {channelLabel} <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
        <Explore intro="If it opened in another app or tab, here's what most visitors look at next." />
        <style dangerouslySetInnerHTML={{ __html: TY_CSS }} />
      </>
    )
  }

  // ── Form-submission mode ──────────────────────────────────────────────
  const key = (sp.form && sp.form in COPY ? sp.form : '') as FormKey | ''
  const copy = key ? COPY[key] : DEFAULT

  return (
    <>
      <section style={{ padding: 'clamp(8rem, 12vw, 10rem) 0 4rem' }}>
        <div className="mw-container">
          <p className="mw-eyebrow">{copy.eyebrow}</p>
          <h1 className="mw-hero-title" style={{ maxWidth: '18ch' }}>{copy.heading}</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', maxWidth: '54ch', marginTop: '1.25rem' }}>{copy.body}</p>
        </div>
      </section>

      <section style={{ padding: '0 0 5rem' }}>
        <div className="mw-container">
          <p className="mw-num" style={{ marginBottom: '1rem' }}>WHAT HAPPENS NEXT</p>
          <ol className="steps ty-steps">
            {copy.steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps-time">Step 0{i + 1}</span>
                <h3 style={{ fontSize: '1.2rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-3)' }}>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Explore intro="No pressure, but here's what most people look at next." />

      <section style={{ padding: '0 0 6rem' }}>
        <div className="mw-container">
          <p style={{ fontSize: '0.95rem', color: 'var(--text-3)', marginBottom: '1.25rem' }}>
            Need to add something or change a detail? Email{' '}
            <a href="mailto:karam@miraclewebsoft.com" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>karam@miraclewebsoft.com</a>
          </p>
          <Link href="/" className="mw-btn-outline">Back to home <ArrowRight size={15} /></Link>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{ __html: TY_CSS }} />
    </>
  )
}
