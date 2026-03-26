'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

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

const optTag = <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>

interface Props {
  service: string
  heading?: string
  subtext?: string
}

export default function ServiceContactForm({ service, heading, subtext }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', storeUrl: '', budget: '', message: '', _hp: '', _source: '' })

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
    if (form._hp) { setState('done'); return }
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      })
      const data = await res.json()
      setState(data.success ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={28} style={{ color: '#22c55e' }} />
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>Message sent!</h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
          We&apos;ve received your enquiry and will respond within 24 hours with a custom proposal.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
          {heading ?? 'Ready to get started?'}
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          {subtext ?? "Tell us about your project and we'll send you a tailored proposal within 24 hours."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Honeypot */}
        <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)}
          style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Your name *</label>
            <input type="text" required placeholder="Alex Smith"
              value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email address *</label>
            <input type="email" required placeholder="alex@yourbusiness.com"
              value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Website URL {optTag}</label>
            <input type="text" placeholder="yoursite.com"
              value={form.storeUrl} onChange={e => set('storeUrl', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Estimated budget {optTag}</label>
            <select value={form.budget} onChange={e => set('budget', e.target.value)}
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
          <label style={labelStyle}>Tell us about your project *</label>
          <textarea rows={4} required
            placeholder="What do you need built? What's your timeline and any specific requirements?"
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
              Send my project brief <ArrowRight size={15} />
            </span>
          )}
        </button>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Responds within 24 hours', '600+ projects delivered', 'Fixed-price proposals'].map((t, i) => (
            <span key={i} style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={11} style={{ color: '#10B981' }} /> {t}
            </span>
          ))}
        </div>
      </form>
    </div>
  )
}
