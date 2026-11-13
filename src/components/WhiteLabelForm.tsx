'use client'
import { cloneElement, isValidElement, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Send, Loader2, Shield } from 'lucide-react'
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
  return `white-label-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
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

export default function WhiteLabelForm() {
  const router = useRouter()
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  const [nda, setNda] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('sending')
    setError('')

    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries()) as Record<string, string>
    data.ndaRequired = nda ? 'true' : 'false'
    const _source = JSON.stringify({
      ...getEffectiveOrigin(),
      page: window.location.pathname,
      referrer: document.referrer || 'direct',
    })

    try {
      const res = await fetch('/api/whitelabel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _source }),
      })
      const json = await res.json() as { success?: boolean; error?: string }
      if (json.success) {
        trackLead('lead_form_submit', { form: 'white_label', engagement_type: data.engagementType || '(unspecified)' })
        formRef.current?.reset()
        setNda(false)
        router.push('/thank-you?form=white_label')
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

      {/* Agency info */}
      <p style={groupLabel}>
        Your agency
      </p>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Company name" required>
          <input name="companyName" type="text" required placeholder="Acme Digital Agency" className="mw-field" />
        </Field>
        <Field label="Your name" required>
          <input name="contactName" type="text" required placeholder="John Smith" className="mw-field" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '1.5rem' }}>
        <Field label="Work email" required>
          <input name="email" type="email" required placeholder="john@acmeagency.com" className="mw-field" />
        </Field>
        <Field label="Agency website">
          <input name="website" type="url" placeholder="https://acmeagency.com" className="mw-field" />
        </Field>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '1.5rem' }} />

      {/* Engagement */}
      <p style={groupLabel}>
        Engagement details
      </p>
      <div className="grid sm:grid-cols-2" style={{ gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Engagement type">
          <select name="engagementType" className="mw-field" style={{ cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>Per Project (Fixed Price)</option>
            <option>Hourly</option>
            <option>Monthly Retainer</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Volume / hours estimate">
          <select name="volume" className="mw-field" style={{ cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>1 project to start</option>
            <option>2–5 projects/month</option>
            <option>10–20 hrs/month</option>
            <option>20–40 hrs/month</option>
            <option>40+ hrs/month (dedicated)</option>
          </select>
        </Field>
      </div>
      <div style={{ marginBottom: '1.25rem' }}>
        <Field label="Project / requirements">
          <textarea
            name="description"
            rows={4}
            placeholder="Describe what you need — project type, tech stack, client industry, timeline, or anything else that's relevant…"
            className="mw-field" style={{ resize: 'vertical', minHeight: 100, lineHeight: 1.6 }}
          />
        </Field>
      </div>

      {/* NDA checkbox */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
          padding: '1rem 1.1rem',
          background: 'var(--bg)',
          border: `1px solid ${nda ? 'var(--text-1)' : 'var(--border-hover)'}`,
          borderRadius: 6,
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}>
          <div style={{
            width: 18, height: 18, borderRadius: 3, flexShrink: 0, marginTop: 2,
            background: nda ? 'var(--text-1)' : 'var(--bg-raised)',
            border: `1.5px solid ${nda ? 'var(--text-1)' : 'var(--border-hover)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {nda && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4L4 7.5L10 1" stroke="var(--bg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <input
            type="checkbox"
            checked={nda}
            onChange={e => setNda(e.target.checked)}
            className="sr-only"
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Shield size={14} style={{ color: 'var(--text-2)' }} />
              <span style={{ fontSize: '0.83rem', fontWeight: 600, color: 'var(--text-1)' }}>Send NDA before sharing brief</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.5 }}>We&apos;ll send a mutual NDA for signing before discussing any project details.</p>
          </div>
        </label>
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
        {state === 'sending'
          ? <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
          : <>Get a private quote <Send size={15} /></>
        }
      </button>

      <p style={{ margin: '1rem 0 0', fontSize: '0.8rem', color: 'var(--text-3)' }}>
        We reply within 24 hours. Strictly confidential. NDA signed on request.
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
