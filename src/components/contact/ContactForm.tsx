'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Loader2, CheckCircle2, Tag } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'
import { getPlanBySlug, type PricingPlan } from '@/lib/pricing'

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

const optionalTag = (
  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>
)

export default function ContactForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)
  const [form, setForm] = useState({ name: '', email: '', storeUrl: '', service: '', message: '', _hp: '', _source: '' })

  useEffect(() => {
    // Capture full attribution (first-touch UTM + cookies + click context).
    // The page where the form sits is also the click_page for the submit.
    const source = {
      ...getEffectiveOrigin(),
      page: window.location.pathname,
      referrer: document.referrer || 'direct',
    }
    setForm(f => ({ ...f, _source: JSON.stringify(source) }))
  }, [])

  useEffect(() => {
    const plan = getPlanBySlug(searchParams.get('package'))
    if (!plan) return
    setSelectedPlan(plan)
    const prefillMessage =
      plan.type === 'build'
        ? `Hi Karam, I'd like to start with the ${plan.name} package (${plan.price}). Please review my store/brand details below and send next steps for the discovery call.\n\nA bit about my brand: `
        : `Hi Karam, I'd like to sign up for the ${plan.name} maintenance plan (${plan.price}). Here's a bit about my Shopify store and what I'd want help with each month: `
    setForm(f => ({
      ...f,
      service: plan.priceLabel,
      message: f.message || prefillMessage,
    }))
  }, [searchParams])

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
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0.04) 100%)',
            border: '1px solid rgba(108,99,255,0.3)',
            borderRadius: '14px',
            padding: '1rem 1.1rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
          }}
        >
          <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
              <Tag size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} /> Selected plan
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.15rem' }}>
              {selectedPlan.name} <span style={{ color: 'var(--accent)' }}>· {selectedPlan.price}</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
              {selectedPlan.type === 'build'
                ? 'No payment yet — we\'ll send a written proposal first. 50% only after you approve.'
                : 'No payment yet — we\'ll confirm scope, then start with month 1 invoice.'}
            </div>
            <Link href="/pricing" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px', marginTop: '0.4rem', display: 'inline-block' }}>
              Change plan
            </Link>
          </div>
        </div>
      )}

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

      {!selectedPlan && (
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
      )}

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
            {selectedPlan ? `Confirm ${selectedPlan.name} & send` : 'Send Message'} <ArrowRight size={15} />
          </span>
        )}
      </button>

      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.6 }}>
        {selectedPlan
          ? 'No payment now. You\'ll get a confirmation email immediately, then a written proposal within 24 hours.'
          : 'Takes 60 seconds. You\'ll get a confirmation email immediately. We respond within 24 hours.'}
      </p>
    </form>
  )
}
