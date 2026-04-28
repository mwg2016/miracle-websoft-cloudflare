'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Send, Loader2, Shield } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

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
      const json = await res.json()
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
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24,
        padding: '2.25rem 2rem',
        maxWidth: 620,
        margin: '0 auto',
      }}
    >
      {/* Honeypot */}
      <input name="_hp" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* Agency info */}
      <p style={{ margin: '0 0 1.25rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(108,99,255,0.7)' }}>
        Your Agency
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Company Name" required>
          <input name="companyName" type="text" required placeholder="Acme Digital Agency" style={inputStyle} />
        </Field>
        <Field label="Your Name" required>
          <input name="contactName" type="text" required placeholder="John Smith" style={inputStyle} />
        </Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
        <Field label="Work Email" required>
          <input name="email" type="email" required placeholder="john@acmeagency.com" style={inputStyle} />
        </Field>
        <Field label="Agency Website">
          <input name="website" type="url" placeholder="https://acmeagency.com" style={inputStyle} />
        </Field>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

      {/* Engagement */}
      <p style={{ margin: '0 0 1.25rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(16,185,129,0.7)' }}>
        Engagement Details
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <Field label="Engagement Type">
          <select name="engagementType" style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>Per Project (Fixed Price)</option>
            <option>Hourly</option>
            <option>Monthly Retainer</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Volume / Hours Estimate">
          <select name="volume" style={{ ...inputStyle, cursor: 'pointer' }}>
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
        <Field label="Project / Requirements">
          <textarea
            name="description"
            rows={4}
            placeholder="Describe what you need — project type, tech stack, client industry, timeline, or anything else that's relevant…"
            style={{ ...inputStyle, resize: 'vertical', minHeight: 100, lineHeight: 1.65 }}
          />
        </Field>
      </div>

      {/* NDA checkbox */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
          padding: '1rem 1.1rem',
          background: nda ? 'rgba(108,99,255,0.08)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${nda ? 'rgba(108,99,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: 12,
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}>
          <div style={{
            width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
            background: nda ? '#6C63FF' : 'rgba(255,255,255,0.06)',
            border: `1.5px solid ${nda ? '#6C63FF' : 'rgba(255,255,255,0.2)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {nda && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4L4 7.5L10 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <input
            type="checkbox"
            checked={nda}
            onChange={e => setNda(e.target.checked)}
            style={{ display: 'none' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Shield size={13} style={{ color: nda ? '#6C63FF' : 'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize: '0.83rem', fontWeight: 600, color: nda ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}>Send NDA before sharing brief</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>We&apos;ll send a mutual NDA for signing before discussing any project details.</p>
          </div>
        </label>
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
        {state === 'sending'
          ? <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
          : <><Send size={16} /> Get a Private Quote</>
        }
      </button>

      <p style={{ margin: '1rem 0 0', textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)' }}>
        We reply within 24 hours · Strictly confidential · NDA signed on request
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
