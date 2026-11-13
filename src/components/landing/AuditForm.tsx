'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

const PROBLEMS = [
  'Traffic but not enough sales',
  'Store feels slow on mobile',
  'Need a redesign or new store',
  'Moving to Shopify from another platform',
  'Something else',
]

/**
 * The low-commitment lead form: store URL + email is all we strictly need.
 * Posts to /api/contact so the lead lands in the same inbox as every other form.
 */
export default function AuditForm({ variant = 'light', source = 'audit' }: { variant?: 'light' | 'ink'; source?: string }) {
  const router = useRouter()
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({ storeUrl: '', email: '', name: '', problem: PROBLEMS[0], _hp: '' })
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim() || form.email.split('@')[0],
          email: form.email,
          storeUrl: form.storeUrl,
          service: 'Free store teardown',
          message: `Free 5-minute store teardown requested.\nStore: ${form.storeUrl}\nMain problem: ${form.problem}`,
          _hp: form._hp,
          _source: JSON.stringify({ ...getEffectiveOrigin(), page: window.location.pathname, referrer: document.referrer || 'direct', form: source }),
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (!data.success) throw new Error('send failed')
      trackLead('lead_form_submit', { form: 'audit', service: 'Free store teardown', problem: form.problem })
      router.push('/thank-you?form=audit')
    } catch {
      setState('error')
    }
  }

  const ink = variant === 'ink'
  const label: React.CSSProperties = { display: 'block', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-2)' }
  const field = ink ? 'mw-field mw-field--ink' : 'mw-field'

  return (
    <form onSubmit={submit} className="grid gap-4">
      <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor={`${source}-url`} style={label}>Your store URL</label>
        <input id={`${source}-url`} className={field} required placeholder="yourstore.com" inputMode="url" autoComplete="url" value={form.storeUrl} onChange={e => set('storeUrl', e.target.value)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${source}-email`} style={label}>Email for the video</label>
          <input id={`${source}-email`} className={field} required type="email" placeholder="you@brand.com" autoComplete="email" value={form.email} onChange={e => set('email', e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${source}-name`} style={label}>First name <span style={{ color: 'var(--text-4)', fontWeight: 400 }}>(optional)</span></label>
          <input id={`${source}-name`} className={field} placeholder="Alex" autoComplete="given-name" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor={`${source}-problem`} style={label}>What should we look at first?</label>
        <select id={`${source}-problem`} className={field} value={form.problem} onChange={e => set('problem', e.target.value)}>
          {PROBLEMS.map(p => <option key={p}>{p}</option>)}
        </select>
      </div>
      <button type="submit" disabled={state === 'sending'} className="mw-btn-accent w-full" style={{ minHeight: 54, fontSize: '1rem' }}>
        {state === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Send me the teardown <ArrowRight size={18} /></>}
      </button>
      {state === 'error' && (
        <p role="alert" style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>
          That didn&apos;t go through. Try again, or email karam@miraclewebsoft.com with your store URL.
        </p>
      )}
      <p style={{ fontSize: '0.78rem', color: 'var(--text-4)', lineHeight: 1.5 }}>
        No call needed, no sales sequence. One video, ranked fixes, and you decide what to do with them.
      </p>
    </form>
  )
}
