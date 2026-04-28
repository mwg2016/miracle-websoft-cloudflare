'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Send, Loader2 } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

type State = 'idle' | 'sending' | 'error'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  color: '#fff',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
  marginBottom: '0.45rem',
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}{required && <span style={{ color: '#6C63FF', marginLeft: 3 }}>*</span>}</label>
      {children}
    </div>
  )
}

export default function ReferralForm() {
  const router = useRouter()
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    setError('')

    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries()) as Record<string, string>

    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        trackLead('lead_form_submit', { form: 'referral', project_type: data.projectType || '(unspecified)' })
        formRef.current?.reset()
        router.push('/thank-you?form=referral')
      } else {
        throw new Error(json.error || 'Failed to send')
      }
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: '2rem 1.75rem',
        maxWidth: 560,
        margin: '0 auto',
      }}
    >
      {/* Honeypot */}
      <input name="_hp" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* Referrer section */}
      <p style={{ margin: '0 0 1.25rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(108,99,255,0.7)' }}>
        Your Details
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Your Name" required>
          <input name="referrerName" type="text" required placeholder="Jane Smith" style={inputStyle} />
        </Field>
        <Field label="Your Email" required>
          <input name="referrerEmail" type="email" required placeholder="jane@agency.com" style={inputStyle} />
        </Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
        <Field label="Your Phone">
          <input name="referrerPhone" type="tel" placeholder="+1 555 000 0000" style={inputStyle} />
        </Field>
        <Field label="Your Role">
          <select name="referrerRole" style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>Freelancer / Designer</option>
            <option>Digital Agency</option>
            <option>Consultant / Advisor</option>
            <option>Content Creator</option>
            <option>eCommerce Brand</option>
            <option>Other</option>
          </select>
        </Field>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

      {/* Client section */}
      <p style={{ margin: '0 0 1.25rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(16,185,129,0.7)' }}>
        Client You&apos;re Referring
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Client Name" required>
          <input name="clientName" type="text" required placeholder="Client or company" style={inputStyle} />
        </Field>
        <Field label="Client Email" required>
          <input name="clientEmail" type="email" required placeholder="client@brand.com" style={inputStyle} />
        </Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Client Phone">
          <input name="clientPhone" type="tel" placeholder="+1 555 000 0000" style={inputStyle} />
        </Field>
        <Field label="Project Type">
          <select name="projectType" style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>New Shopify Store</option>
            <option>Migration to Shopify</option>
            <option>Theme Design & Customisation</option>
            <option>Shopify App Development</option>
            <option>CRO & Speed Optimisation</option>
            <option>TikTok Shop Integration</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>
      <div style={{ marginBottom: '0.85rem' }}>
        <Field label="Estimated Budget">
          <select name="budget" style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>Under $500</option>
            <option>$500 – $2,000</option>
            <option>$2,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <Field label="Notes (optional)">
          <textarea
            name="notes"
            rows={3}
            placeholder="Any context about the client or project that would help us…"
            style={{ ...inputStyle, resize: 'vertical', minHeight: 80, lineHeight: 1.6 }}
          />
        </Field>
      </div>

      {error && (
        <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 10, padding: '0.65rem 1rem' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        style={{
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
          padding: '1rem',
          background: state === 'sending' ? 'rgba(108,99,255,0.5)' : 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
          color: '#fff', fontWeight: 700, fontSize: '0.95rem',
          borderRadius: 14, border: 'none',
          cursor: state === 'sending' ? 'not-allowed' : 'pointer',
          boxShadow: state === 'sending' ? 'none' : '0 8px 28px rgba(108,99,255,0.35)',
          transition: 'all 0.2s',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        {state === 'sending' ? (
          <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
        ) : (
          <><Send size={16} /> Submit Referral</>
        )}
      </button>

      <p style={{ margin: '1rem 0 0', textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)' }}>
        We reply within 24 hours · Your commission is logged on submission
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
