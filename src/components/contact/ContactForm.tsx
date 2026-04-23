'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

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
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '0.4rem',
}

const optionalTag = (
  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>
)

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', storeUrl: '', service: '', message: '', _hp: '', _source: '' })

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const source = {
      page: window.location.pathname,
      referrer: document.referrer || 'direct',
      ...(p.get('utm_source') && { utm_source: p.get('utm_source') }),
      ...(p.get('utm_medium') && { utm_medium: p.get('utm_medium') }),
      ...(p.get('utm_campaign') && { utm_campaign: p.get('utm_campaign') }),
    }
    setForm(f => ({ ...f, _source: JSON.stringify(source) }))
  }, [])

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
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        trackLead('lead_form_submit', { form: 'contact', service: form.service || '(unspecified)' })
        setState('done')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <CheckCircle2 size={26} style={{ color: '#22c55e' }} />
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>Message sent!</h3>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          Check your inbox — we&apos;ve sent you a confirmation with useful links and what happens next.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem' }}>
          Karam will review your store and reply within 24 hours.
        </p>
        <button
          onClick={() => { setState('idle'); setForm(f => ({ name: '', email: '', storeUrl: '', service: '', message: '', _hp: '', _source: f._source })) }}
          style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot */}
      <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)}
        style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Your name *</label>
          <input type="text" required placeholder="Jane Smith"
            value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email address *</label>
          <input type="email" required placeholder="jane@yourbrand.com"
            value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Your Shopify store URL {optionalTag}</label>
        <input type="text" placeholder="yourstore.com or yourstore.myshopify.com"
          value={form.storeUrl} onChange={e => set('storeUrl', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>What do you need help with? {optionalTag}</label>
        <select value={form.service} onChange={e => set('service', e.target.value)}
          style={{ ...inputStyle, appearance: 'none' as const }}>
          <option value="">Select a service...</option>
          <option>Custom Tool Development</option>
          <option>Custom Shopify Development</option>
          <option>Shopify App Development</option>
          <option>Migration to Shopify</option>
          <option>CRO &amp; Speed Optimization</option>
          <option>Free Store Audit</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Tell us about your brand *</label>
        <textarea rows={3} required
          placeholder="What do you sell, what is your biggest challenge right now?"
          value={form.message} onChange={e => set('message', e.target.value)}
          style={{ ...inputStyle, resize: 'none' }} />
      </div>

      {state === 'error' && (
        <p style={{ fontSize: '0.8rem', color: '#f87171', textAlign: 'center' }}>
          Something went wrong. Email us directly at{' '}
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
            Get my free audit <ArrowRight size={15} />
          </span>
        )}
      </button>

      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.6 }}>
        Takes 60 seconds. You&apos;ll get a confirmation email immediately. We respond within 24 hours.
      </p>
    </form>
  )
}
