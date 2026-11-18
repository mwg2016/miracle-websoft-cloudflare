'use client'

import { useRef, useState } from 'react'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import { REVIEW_LIMITS, REVIEW_SERVICES } from '@/lib/reviews/types'

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-1)', marginBottom: '0.45rem',
}
const optionalTag = (
  <span style={{ fontSize: '0.8rem', color: 'var(--text-4)', fontWeight: 400, marginLeft: 4 }}>(optional)</span>
)
const STAR_WORDS = ['', 'Bad', 'Poor', 'Average', 'Great', 'Excellent']
const STAR_COLOURS = ['', '#C0392B', '#E07A25', '#C9A227', '#3D8B5E', '#1F5C43']

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0)
  const shown = hover || value
  return (
    <div role="radiogroup" aria-label="Your rating" style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}
      onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? 's' : ''}: ${STAR_WORDS[n]}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          style={{
            width: 44, height: 44, borderRadius: 5, border: 'none', cursor: 'pointer',
            background: n <= shown ? STAR_COLOURS[shown] : '#DCD6CA',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.12s ease, transform 0.12s ease',
            transform: hover === n ? 'scale(1.06)' : undefined,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.4l-6.1 3.5 1.5-6.8-5.2-4.6 6.9-.7z" />
          </svg>
        </button>
      ))}
      <span style={{ marginLeft: 8, fontSize: '0.95rem', fontWeight: 600, minWidth: 80, color: 'var(--text-2)' }}>
        {STAR_WORDS[shown] || 'Select a rating'}
      </span>
    </div>
  )
}

export default function ReviewForm() {
  const startedAt = useRef(0)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    rating: 0, title: '', body: '', name: '', email: '', company: '', website: '', country: '', service: '', consent: false, _hp: '',
  })
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    if (!startedAt.current) startedAt.current = Date.now()
    setForm(f => ({ ...f, [k]: v }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const fail = (msg: string) => { setError(msg); setState('error') }
    if (!form.rating) return fail('Please choose a star rating.')
    if (form.body.trim().length < REVIEW_LIMITS.bodyMin) return fail(`Please write at least ${REVIEW_LIMITS.bodyMin} characters about your experience.`)
    if (!form.title.trim()) return fail('Please give your review a title.')
    if (!form.name.trim()) return fail('Please add your name.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return fail('Please enter a valid email address.')
    if (!form.consent) return fail('Please confirm the review is your own genuine experience.')

    setState('sending'); setError('')
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _t: startedAt.current ? Date.now() - startedAt.current : 0 }),
      })
      const data = await res.json() as { ok?: boolean; error?: string }
      if (res.ok && data.ok) {
        setState('done')
        try {
          const w = window as unknown as { gtag?: (...a: unknown[]) => void }
          w.gtag?.('event', 'review_submit', { rating: form.rating })
        } catch {}
      } else {
        fail(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      fail('Network error. Please try again.')
    }
  }

  if (state === 'done') {
    return (
      <div className="rv-card" role="status">
        <CheckCircle2 size={32} color="var(--forest)" />
        <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}>Thank you for your review.</h2>
        <p style={{ color: 'var(--text-2)', maxWidth: '52ch' }}>
          We check every review to confirm it&apos;s from a real client before it goes live. Yours will appear on the
          reviews page once it&apos;s approved, usually within one business day.
        </p>
      </div>
    )
  }

  const bodyLen = form.body.trim().length

  return (
    <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={form._hp} onChange={e => set('_hp', e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

      <div>
        <span style={labelStyle}>Rate your experience *</span>
        <StarPicker value={form.rating} onChange={n => set('rating', n)} />
      </div>

      <div>
        <label htmlFor="rv-body" style={labelStyle}>Tell us about your experience *</label>
        <textarea id="rv-body" rows={6} required maxLength={REVIEW_LIMITS.bodyMax} className="mw-field" style={{ resize: 'vertical' }}
          placeholder="What did we work on, how was the communication, and what changed for your store afterwards?"
          value={form.body} onChange={e => set('body', e.target.value)} />
        <div style={{ fontSize: '0.78rem', color: bodyLen < REVIEW_LIMITS.bodyMin ? 'var(--text-4)' : 'var(--forest)', marginTop: 4 }}>
          {bodyLen < REVIEW_LIMITS.bodyMin ? `${REVIEW_LIMITS.bodyMin - bodyLen} more characters needed` : `${bodyLen} characters`}
        </div>
      </div>

      <div>
        <label htmlFor="rv-title" style={labelStyle}>Give your review a title *</label>
        <input id="rv-title" required maxLength={REVIEW_LIMITS.title} className="mw-field"
          placeholder="e.g. Fast, clear and our conversion rate went up"
          value={form.title} onChange={e => set('title', e.target.value)} />
      </div>

      <div>
        <label htmlFor="rv-service" style={labelStyle}>Which service did you use? {optionalTag}</label>
        <select id="rv-service" className="mw-field" value={form.service} onChange={e => set('service', e.target.value)}>
          <option value="">Select a service…</option>
          {REVIEW_SERVICES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rv-name" style={labelStyle}>Your name *</label>
          <input id="rv-name" required autoComplete="name" maxLength={REVIEW_LIMITS.name} className="mw-field"
            placeholder="Jane Smith" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div>
          <label htmlFor="rv-email" style={labelStyle}>Email *</label>
          <input id="rv-email" type="email" required autoComplete="email" maxLength={REVIEW_LIMITS.email} className="mw-field"
            placeholder="jane@yourbrand.com" value={form.email} onChange={e => set('email', e.target.value)} />
          <div style={{ fontSize: '0.75rem', color: 'var(--text-4)', marginTop: 4 }}>Never shown publicly. Used only to verify you&apos;re a client.</div>
        </div>
        <div>
          <label htmlFor="rv-company" style={labelStyle}>Company / store name {optionalTag}</label>
          <input id="rv-company" autoComplete="organization" maxLength={REVIEW_LIMITS.company} className="mw-field"
            placeholder="Your Brand Co." value={form.company} onChange={e => set('company', e.target.value)} />
        </div>
        <div>
          <label htmlFor="rv-country" style={labelStyle}>Country {optionalTag}</label>
          <input id="rv-country" autoComplete="country-name" maxLength={REVIEW_LIMITS.country} className="mw-field"
            placeholder="United States" value={form.country} onChange={e => set('country', e.target.value)} />
        </div>
      </div>

      <div>
        <label htmlFor="rv-website" style={labelStyle}>Store URL {optionalTag}</label>
        <input id="rv-website" autoComplete="url" maxLength={REVIEW_LIMITS.website} className="mw-field"
          placeholder="yourstore.com" value={form.website} onChange={e => set('website', e.target.value)} />
        <div style={{ fontSize: '0.75rem', color: 'var(--text-4)', marginTop: 4 }}>Helps us verify your project. Not shown publicly.</div>
      </div>

      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-2)', cursor: 'pointer' }}>
        <input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} style={{ marginTop: 4 }} />
        <span>I confirm this review is based on my own genuine experience with Miracle Websoft, and I agree to it being published with my name.</span>
      </label>

      {state === 'error' && error && (
        <p role="alert" style={{ fontSize: '0.85rem', color: '#B42318' }}>{error}</p>
      )}

      <button type="submit" disabled={state === 'sending'} className="mw-btn-accent justify-center w-full"
        style={{ padding: '1rem', opacity: state === 'sending' ? 0.7 : 1 }}>
        {state === 'sending'
          ? <span className="inline-flex items-center gap-2"><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Submitting…</span>
          : <span className="inline-flex items-center gap-2">Submit review <ArrowRight size={15} /></span>}
      </button>
    </form>
  )
}
