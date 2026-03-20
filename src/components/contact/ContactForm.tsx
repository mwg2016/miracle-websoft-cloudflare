'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: '#fff',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em',
} as const

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '', email: '', storeUrl: '', service: '', message: '', _hp: '',
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
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setState(data.success ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={28} style={{ color: '#22c55e' }} />
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>Message received!</h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          We&apos;ll review your store and get back to you within 24 hours with a detailed audit — no strings attached.
        </p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', storeUrl: '', service: '', message: '', _hp: '' }) }}
          style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="_hp"
        value={form._hp}
        onChange={e => set('_hp', e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Your name *</label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email address *</label>
          <input
            type="email"
            required
            placeholder="jane@yourbrand.com"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Your Shopify store URL</label>
        <input
          type="url"
          placeholder="yourstore.myshopify.com"
          value={form.storeUrl}
          onChange={e => set('storeUrl', e.target.value)}
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>What do you need help with? *</label>
        <select
          required
          value={form.service}
          onChange={e => set('service', e.target.value)}
          style={{ ...inputStyle, appearance: 'none' as const }}
        >
          <option value="">Select a service...</option>
          <option>Custom Shopify Development</option>
          <option>Shopify App Development</option>
          <option>Migration to Shopify</option>
          <option>CRO &amp; Speed Optimization</option>
          <option>Free Store Audit</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Tell us about your brand *</label>
        <textarea
          rows={4}
          required
          placeholder="What do you sell, who are your customers, what is your biggest challenge?"
          value={form.message}
          onChange={e => set('message', e.target.value)}
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>

      {state === 'error' && (
        <p style={{ fontSize: '0.8rem', color: '#f87171', textAlign: 'center' }}>
          Something went wrong. Please email us directly at karam@miraclewebsoft.com
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="mw-btn-primary justify-center w-full py-4"
        style={{ opacity: state === 'sending' ? 0.7 : 1 }}
      >
        {state === 'sending' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
            Sending…
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Send message — get free audit <ArrowRight size={16} />
          </span>
        )}
      </button>

      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
        We respond within 24 hours. Your info is never shared or sold. No spam, ever.
      </p>
    </form>
  )
}
