'use client'
import { cloneElement, isValidElement, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Send, Loader2 } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

type State = 'idle' | 'sending' | 'error'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 500,
  color: 'var(--text-1)',
  marginBottom: '0.45rem',
}

const groupLabel: React.CSSProperties = {
  margin: '0 0 1rem',
  fontFamily: 'var(--font-geist-mono)',
  fontSize: '0.7rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-3)',
}

function fieldId(label: string) {
  return `referral-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  const child = isValidElement<{ id?: string }>(children) ? children : null
  const id = child?.props.id ?? fieldId(label)
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}{required && <span style={{ color: 'var(--accent)', marginLeft: 3 }}>*</span>}</label>
      {child ? cloneElement(child, { id }) : children}
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
    const _source = JSON.stringify({
      ...getEffectiveOrigin(),
      page: window.location.pathname,
      referrer: document.referrer || 'direct',
    })

    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _source }),
      })
      const json = await res.json() as { success?: boolean; error?: string }
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
      className="audit-form-card"
    >
      {/* Honeypot */}
      <input name="_hp" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* Referrer section */}
      <p style={groupLabel}>
        Your details
      </p>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Your name" required>
          <input name="referrerName" type="text" required placeholder="Jane Smith" className="mw-field" />
        </Field>
        <Field label="Your email" required>
          <input name="referrerEmail" type="email" required placeholder="jane@agency.com" className="mw-field" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '1.5rem' }}>
        <Field label="Your phone">
          <input name="referrerPhone" type="tel" placeholder="+1 555 000 0000" className="mw-field" />
        </Field>
        <Field label="Your role">
          <select name="referrerRole" className="mw-field" style={{ cursor: 'pointer' }}>
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
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '1.5rem' }} />

      {/* Client section */}
      <p style={groupLabel}>
        Client you&apos;re referring
      </p>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Client name" required>
          <input name="clientName" type="text" required placeholder="Client or company" className="mw-field" />
        </Field>
        <Field label="Client email" required>
          <input name="clientEmail" type="email" required placeholder="client@brand.com" className="mw-field" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Client phone">
          <input name="clientPhone" type="tel" placeholder="+1 555 000 0000" className="mw-field" />
        </Field>
        <Field label="Project type">
          <select name="projectType" className="mw-field" style={{ cursor: 'pointer' }}>
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
        <Field label="Estimated budget">
          <select name="budget" className="mw-field" style={{ cursor: 'pointer' }}>
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
            className="mw-field" style={{ resize: 'vertical', minHeight: 80, lineHeight: 1.6 }}
          />
        </Field>
      </div>

      {error && (
        <p style={{ margin: '0 0 1rem', fontSize: '0.8rem', color: '#B42318', background: 'rgb(180 35 24 / 0.06)', border: '1px solid rgb(180 35 24 / 0.25)', borderRadius: 6, padding: '0.65rem 1rem' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="mw-btn-accent"
        style={{
          width: '100%',
          cursor: state === 'sending' ? 'not-allowed' : 'pointer',
          opacity: state === 'sending' ? 0.6 : 1,
          fontSize: '1rem',
        }}
      >
        {state === 'sending' ? (
          <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
        ) : (
          <>Submit referral <Send size={15} /></>
        )}
      </button>

      <p style={{ margin: '1rem 0 0', fontSize: '0.8rem', color: 'var(--text-3)' }}>
        We reply within 24 hours. Your referral is logged against your name on submission.
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
