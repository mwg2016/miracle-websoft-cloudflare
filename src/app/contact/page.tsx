import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { CheckCircle2, ExternalLink, MessageCircle, Mail, Linkedin } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'
import ContactForm from '@/components/contact/ContactForm'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'
import { getPlanBySlug } from '@/lib/pricing'
import FounderIntro from '@/components/ui/FounderIntro'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import { clientVideos } from '@/data/videos'

const contactFaqs = [
  { question: 'How do I get started with Miracle Websoft?', answer: 'Fill in the contact form or message us on WhatsApp. We reply within 24 hours. If your project is a good fit, we schedule a 30-minute discovery call, then send a detailed proposal with clear scope, timeline, and fixed pricing. No vague estimates.' },
  { question: 'What is included in the free consultation?', answer: 'A practical review of your Shopify store, website, AI automation idea or custom software need. We look for the clearest business blocker, likely scope and next steps before recommending paid work.' },
  { question: 'Do you work on a fixed price or hourly basis?', answer: 'Fixed price on all projects. We send a detailed proposal before any work begins. You know exactly what you are paying before we start. No hourly billing, no surprise invoices.' },
  { question: 'How long does it take to get a proposal?', answer: 'After our discovery call, we typically send a full proposal within 2–3 business days. For smaller projects or straightforward audits, it is often the same day.' },
  { question: 'Do you sign NDAs?', answer: 'Yes. We sign NDAs on request before any discovery or audit work begins. All client information is treated as strictly confidential.' },
  { question: 'Do you work with brands outside the USA/UK/Australia?', answer: 'Yes. Our primary markets are the United States, Canada, United Kingdom, Australia and Europe. All communication is in English, and we work across time zones.' },
]

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Contact Miracle Websoft',
  description: 'Tell us what is not working in your Shopify store, website, AI workflow or custom software project. Get practical fixed-price next steps from Miracle Websoft.',
  alternates: { canonical: 'https://miraclewebsoft.com/contact' },
  openGraph: {
    title: 'Book a Free Consultation | Miracle Websoft',
    description: 'Shopify development, CRO, speed optimization, AI automation and custom web development consultation.',
    url: 'https://miraclewebsoft.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Consultation | Miracle Websoft',
    description: 'Get practical next steps for Shopify, CRO, speed, AI automation or custom web development.',
  },
}

const WHATSAPP_URL = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent('Hi Karam, how are you? I need help with Shopify, AI automation or a website project.')}`)
const EMAIL_URL = outboundHref('email', 'mailto:karam@miraclewebsoft.com?subject=Project%20consultation')
const LINKEDIN_URL = outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')

const auditItems = [
  'Page speed & Core Web Vitals score',
  'Mobile UX — what is breaking on small screens',
  'Conversion blockers on your product pages',
  'Checkout flow — where shoppers drop off',
  'SEO health — titles, canonicals, structured data',
  'Quick-win list — prioritised by revenue impact',
]

const reviews = [
  {
    stars: 5,
    quote: 'Karam helped us rebuild our store from scratch. Conversion rate went up 48% within 60 days. He communicates directly, delivers what he promises, and genuinely knows Shopify for fashion.',
    name: 'Verified Upwork Client',
    context: 'Activewear brand · USA',
  },
  {
    stars: 5,
    quote: 'We migrated from WooCommerce with zero SEO traffic loss. Karam mapped all our old URLs, handled the data migration, and we launched on time. Zero issues post-launch.',
    name: 'Verified Upwork Client',
    context: 'Streetwear brand · UK',
  },
  {
    stars: 5,
    quote: 'I am happy to recommend Karam Singh. He has strong knowledge of Shopify development and always delivers quality work. Very professional and responsive.',
    name: 'Satinder Singh',
    context: 'LinkedIn Recommendation',
  },
]

const platforms = [
  { name: 'Upwork', badge: 'Top Rated Plus', sub: '600+ reviews · 98%+ JSS', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/'), color: '#14a800' },
  { name: 'Shopify Partners', badge: 'Verified Partner', sub: 'Official directory listing', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1'), color: '#96bf48' },
  { name: 'Clutch', badge: 'Verified Reviews', sub: 'B2B ratings platform', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft'), color: '#e63329' },
  { name: 'DesignRush', badge: 'Top Agency', sub: 'Agency directory', href: outboundHref('external', 'https://www.designrush.com/agency/profile/miracle-websoft'), color: '#6c63ff' },
]

const jsonLd = renderJsonLd([
  webPage({
    name: 'Contact Miracle Websoft - free consultation',
    description:
      'Book a free consultation for Shopify development, CRO, speed optimization, AI automation or custom web development. Response within 24 hours.',
    url: 'https://miraclewebsoft.com/contact',
    type: 'ContactPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]),
])

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const params = await searchParams
  const plan = getPlanBySlug(params?.package)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="mw-container">
          <div className="mb-6"><Breadcrumb items={plan ? [{ label: 'Pricing', href: '/pricing' }, { label: plan.name }] : [{ label: 'Contact' }]} /></div>

          {/* Top bar — quick trust strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-12" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { val: '650+', label: 'Projects completed' },
              { val: '15k+', label: 'Hours delivered' },
              { val: 'Top 3%', label: 'Globally on Upwork' },
              { val: '< 24 h', label: 'Response time' },
              { val: '10+', label: 'Years experience' },
            ].map(s => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span style={{ fontFamily: 'var(--font-playfair),Georgia,serif', fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>{s.val}</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{s.label}</span>
              </div>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', borderRadius: '9999px', background: '#25D366', color: '#fff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>
                <MessageCircle size={14} /> WhatsApp us
              </a>
              <a href={EMAIL_URL}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={14} /> Email us
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', borderRadius: '9999px', background: '#0A66C2', color: '#fff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-16 items-start">

            {/* ── Left ─────────────────────────────────────────── */}
            <div>
              {plan ? (
                <>
                  <span className="mw-eyebrow">You picked the {plan.name} plan</span>
                  <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(30px,4.5vw,52px)', lineHeight: 1.1, marginBottom: '1rem' }}>
                    Tell us about your brand —<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>we&apos;ll take it from here.</em>
                  </h1>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300, maxWidth: '520px' }}>
                    No payment yet. Send the form and Karam will personally reply within 24 hours with next steps — a short discovery call, a written proposal with full scope, and a clear timeline. You only pay if you approve the proposal.
                  </p>
                </>
              ) : (
                <>
                  <span className="mw-eyebrow">Get a practical expert view</span>
                  <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(30px,4.5vw,52px)', lineHeight: 1.1, marginBottom: '1rem' }}>
                    Tell us what is not working —<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>we&apos;ll show you what to fix.</em>
                  </h1>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300, maxWidth: '500px' }}>
                    Whether you need more conversions, a faster store, AI automation, a custom web application or a full rebuild, tell Karam what is happening and he will reply personally with clear next steps. No pressure, no generic sales pitch.
                  </p>
                </>
              )}

              {/* Audit checklist OR what happens next */}
              <div style={{ marginBottom: '2.5rem' }}>
                {plan ? (
                  <>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>What happens after you submit</p>
                    <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        { n: '1', t: 'Confirmation email — instant', d: 'You\'ll get a copy of your enquiry in your inbox right away.' },
                        { n: '2', t: 'Personal reply within 24 hours', d: 'Karam reads every enquiry and replies with any clarifying questions.' },
                        { n: '3', t: 'Short discovery call', d: '30-minute call to align on goals, timeline, and any custom needs.' },
                        { n: '4', t: 'Written proposal — fixed price', d: `Full scope and timeline for the ${plan.name} plan. You only pay after you approve.` },
                      ].map(s => (
                        <li key={s.n} className="flex items-start gap-3">
                          <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)' }}>{s.n}</span>
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: '0.15rem' }}>{s.t}</div>
                            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{s.d}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                ) : (
                  <>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>What we will look for</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {auditItems.map(item => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Founder intro video */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>
                  ▶ A 60-second hello before you reach out
                </p>
                <FounderIntro caption="" />
              </div>

              {/* Video reviews */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>
                  ▶ Watch real client reviews
                </p>
                <VideoTestimonialGrid videos={clientVideos.slice(0, 3)} theme="dark" />
              </div>

              {/* Reviews */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>What clients say</p>
                <div className="flex flex-col gap-3">
                  {reviews.map((r, i) => (
                    <div key={i} style={{ padding: '1rem 1.25rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                        {[...Array(r.stars)].map((_, j) => <span key={j} style={{ color: '#FFB800', fontSize: '0.7rem' }}>★</span>)}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '0.5rem' }}>
                        &ldquo;{r.quote}&rdquo;
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>{r.name}</span>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>·</span>
                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>{r.context}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <a href={outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/')} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}
                  className="hover:text-white transition-colors">
                  <ExternalLink size={11} /> Read all 600+ reviews on Upwork
                </a>
              </div>

              {/* Platform badges */}
              <div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.9rem' }}>Verified on</p>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map(p => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center justify-between"
                      style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff', marginBottom: '1px' }}>{p.name}</div>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>{p.sub}</div>
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}35`, flexShrink: 0, marginLeft: '0.5rem' }}>{p.badge}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right — Form (shown first on mobile so it's visible at a glance) ─ */}
            {/* sticky only at lg+, where it shares a row with the taller left column;
                on mobile each column is its own grid row so sticky has no slack to
                move within — some mobile browsers mis-render that as a fixed overlay,
                so it's kept static below lg entirely. */}
            <div className="order-first lg:order-last lg:sticky lg:top-28">
              {/* Form card */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2rem' }}>
                {/* Karam avatar + headline */}
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(108,99,255,0.3),rgba(108,99,255,0.1))', border: '2px solid rgba(108,99,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>K</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{plan ? `Confirm your ${plan.name} plan` : 'Request your project plan'}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Founder · replies personally within 24 h</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {plan ? 'No payment yet · Proposal first · Fixed pricing' : 'No obligation · Reply within 24 h · Fixed-price quotes'}
                </div>

                <ContactForm />
              </div>

              {/* Micro trust row */}
              <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
                {['🔒 SSL encrypted', '📄 NDA on request', '✓ No spam ever'].map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaqSection faqs={contactFaqs} heading="Before you reach out" eyebrow="FAQ" />
    </>
  )
}
