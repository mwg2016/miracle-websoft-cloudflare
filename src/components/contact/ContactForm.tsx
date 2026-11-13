'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Loader2 } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'
import { getPlanBySlug } from '@/lib/pricing'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 500,
  color: 'var(--text-1)',
  marginBottom: '0.45rem',
}

const optionalTag = (
  <span style={{ fontSize: '0.8rem', color: 'var(--text-4)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>
)

export default function ContactForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedPlan = getPlanBySlug(searchParams.get('package'))
  const prefillMessage = selectedPlan
    ? selectedPlan.type === 'build'
      ? `Hi Karam, I'd like to start with the ${selectedPlan.name} package (${selectedPlan.price}). Please review my store/brand details below and send next steps for the discovery call.\n\nA bit about my brand: `
      : `Hi Karam, I'd like to sign up for the ${selectedPlan.name} maintenance plan (${selectedPlan.price}). Here's a bit about my website or Shopify store and what I'd want help with each month: `
    : ''
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    storeUrl: '',
    service: selectedPlan?.priceLabel ?? '',
    message: prefillMessage,
    _hp: '',
  })

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          _source: JSON.stringify({
            ...getEffectiveOrigin(),
            page: window.location.pathname,
            referrer: document.referrer || 'direct',
          }),
        }),
      })
      const data = await res.json() as { success?: boolean }
      if (data.success) {
        trackLead('lead_form_submit', { form: 'contact', service: form.service || '(unspecified)' })
        router.push('/thank-you?form=contact')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot */}
      <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)}
        style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {selectedPlan && (
        <div style={{ border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)', borderRadius: '6px', padding: '0.9rem 1rem', background: 'var(--bg)' }}>
          <div className="mw-num" style={{ marginBottom: '0.3rem' }}>SELECTED PLAN</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-1)' }}>
              {selectedPlan.name} <span style={{ fontFamily: 'var(--font-geist-mono)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-2)' }}>· {selectedPlan.price}</span>
            </div>
            <Link href="/pricing" style={{ fontSize: '0.82rem', color: 'var(--text-2)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Change plan
            </Link>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-3)', lineHeight: 1.5, marginTop: '0.3rem' }}>
            {selectedPlan.type === 'build'
              ? 'No payment yet. We send a written proposal first; 50% only after you approve.'
              : 'No payment yet. We confirm scope, then start with the month 1 invoice.'}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Your name *</label>
          <input id="contact-name" name="name" type="text" required placeholder="Jane Smith" autoComplete="name"
            value={form.name} onChange={e => set('name', e.target.value)} className="mw-field" />
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email address *</label>
          <input id="contact-email" name="email" type="email" required placeholder="jane@yourbrand.com" autoComplete="email"
            value={form.email} onChange={e => set('email', e.target.value)} className="mw-field" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-store-url" style={labelStyle}>Website, store or workflow URL {optionalTag}</label>
        <input id="contact-store-url" name="storeUrl" type="text" placeholder="yourstore.com, yourstore.myshopify.com or tool name" autoComplete="url"
          value={form.storeUrl} onChange={e => set('storeUrl', e.target.value)} className="mw-field" />
      </div>

      {!selectedPlan && (
        <div>
          <label htmlFor="contact-service" style={labelStyle}>What do you need help with? {optionalTag}</label>
          <select id="contact-service" name="service" value={form.service} onChange={e => set('service', e.target.value)}
            className="mw-field">
            <option value="">Select a service...</option>
            <option>Improve my current Shopify store</option>
            <option>Build or redesign a Shopify store</option>
            <option>Custom Shopify app or feature</option>
            <option>Move my store to Shopify</option>
            <option>Conversion rate optimization</option>
            <option>Shopify speed optimization</option>
            <option>AI business automation</option>
            <option>OpenAI integration or AI chatbot</option>
            <option>Custom web application or portal</option>
            <option>Not sure yet</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Tell us about your business challenge *</label>
        <textarea id="contact-message" name="message" rows={5} required
          placeholder="What do you sell, what is your biggest challenge right now, and what result would make this project successful?"
          value={form.message} onChange={e => set('message', e.target.value)}
          className="mw-field" style={{ resize: 'vertical' }} />
      </div>

      {state === 'error' && (
        <p style={{ fontSize: '0.8rem', color: '#B42318', textAlign: 'center' }}>
          Something went wrong. Email us directly at{' '}
          <a href="mailto:karam@miraclewebsoft.com" style={{ color: '#B42318', textDecoration: 'underline' }}>karam@miraclewebsoft.com</a>
        </p>
      )}

      <button type="submit" disabled={state === 'sending'} className="mw-btn-accent justify-center w-full"
        style={{ padding: '1rem', opacity: state === 'sending' ? 0.7 : 1 }}>
        {state === 'sending' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending…
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            {selectedPlan ? `Confirm ${selectedPlan.name} & send` : 'Send my brief'} <ArrowRight size={15} />
          </span>
        )}
      </button>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', lineHeight: 1.6 }}>
        {selectedPlan
          ? 'No payment now. You\'ll get a confirmation email immediately, then a written proposal within 24 hours.'
          : 'Takes a minute. You get a confirmation email straight away and a personal reply from Karam within 24 hours. NDA on request.'}
      </p>
    </form>
  )
}
