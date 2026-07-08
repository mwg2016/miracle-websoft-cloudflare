'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: '#fff',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.6)',
  marginBottom: '0.4rem',
}

const optTag = <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>

interface Props {
  service: string
  heading?: string
  subtext?: string
  urlLabel?: string
  urlPlaceholder?: string
  messageLabel?: string
  messagePlaceholder?: string
  buttonLabel?: string
  proofPoints?: string[]
}

export default function ServiceContactForm({
  service,
  heading,
  subtext,
  urlLabel = 'Shopify store URL',
  urlPlaceholder = 'yourstore.com or yourstore.myshopify.com',
  messageLabel = 'What do you want to improve?',
  messagePlaceholder = 'Example: our store is slow, mobile conversion is low, we need to migrate, or we need a custom feature Shopify apps cannot handle.',
  buttonLabel = 'Request My Shopify Plan',
  proofPoints = ['Responds within 24 hours', '650+ projects delivered', 'Fixed-price proposals'],
}: Props) {
  const router = useRouter()
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', storeUrl: '', budget: '', message: '', _hp: '' })

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form._hp) { router.push('/thank-you?form=services'); return }
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          service,
          _source: JSON.stringify({
            ...getEffectiveOrigin(),
            page: window.location.pathname,
            referrer: document.referrer || 'direct',
          }),
        }),
      })
      const data = await res.json()
      if (data.success) {
        trackLead('lead_form_submit', { form: 'services', service })
        router.push('/thank-you?form=services')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          {heading ?? 'Want a clear plan for your Shopify store?'}
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          {subtext ?? "Tell us what is not working and we will reply with practical next steps, likely scope and a fixed-price path forward."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Honeypot */}
        <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)}
          style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service-contact-name" style={labelStyle}>Your name *</label>
            <input id="service-contact-name" name="name" type="text" required placeholder="Alex Smith" autoComplete="name"
              value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="service-contact-email" style={labelStyle}>Email address *</label>
            <input id="service-contact-email" name="email" type="email" required placeholder="alex@yourbusiness.com" autoComplete="email"
              value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service-contact-store-url" style={labelStyle}>{urlLabel} {optTag}</label>
            <input id="service-contact-store-url" name="storeUrl" type="text" placeholder={urlPlaceholder} autoComplete="url"
              value={form.storeUrl} onChange={e => set('storeUrl', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="service-contact-budget" style={labelStyle}>Estimated budget {optTag}</label>
            <select id="service-contact-budget" name="budget" value={form.budget} onChange={e => set('budget', e.target.value)}
              style={{ ...inputStyle, appearance: 'none' as const }}>
              <option value="">Select a range…</option>
              <option>Under $3,000</option>
              <option>$3,000 – $8,000</option>
              <option>$8,000 – $20,000</option>
              <option>$20,000+</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="service-contact-message" style={labelStyle}>{messageLabel} *</label>
          <textarea id="service-contact-message" name="message" rows={4} required
            placeholder={messagePlaceholder}
            value={form.message} onChange={e => set('message', e.target.value)}
            style={{ ...inputStyle, resize: 'none' }} />
        </div>

        {state === 'error' && (
          <p style={{ fontSize: '0.8rem', color: '#f87171', textAlign: 'center' }}>
            Something went wrong. Email us at{' '}
            <a href="mailto:karam@miraclewebsoft.com" style={{ color: '#f87171' }}>karam@miraclewebsoft.com</a>
          </p>
        )}

        <button type="submit" disabled={state === 'sending'} className="mw-btn-primary justify-center w-full"
          style={{ padding: '0.9rem', opacity: state === 'sending' ? 0.7 : 1 }}>
          {state === 'sending' ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending…
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              {buttonLabel} <ArrowRight size={15} />
            </span>
          )}
        </button>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {proofPoints.map((t, i) => (
            <span key={i} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={11} style={{ color: '#10B981' }} /> {t}
            </span>
          ))}
        </div>
      </form>
    </div>
  )
}
