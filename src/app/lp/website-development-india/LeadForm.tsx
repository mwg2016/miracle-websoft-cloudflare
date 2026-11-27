'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'
import { packages, inr } from './packages'

const PICK_EVENT = 'mw:pick-package'
const NOT_SURE = 'Not sure yet, help me choose'

/** Package card button: preselects the package in the form, then scrolls to it. */
export function PickPackage({ slug, label, className }: { slug: string; label: string; className?: string }) {
  return (
    <a
      href="#lead-form"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(PICK_EVENT, { detail: slug }))}
    >
      {label} <ArrowRight size={16} aria-hidden="true" />
    </a>
  )
}

/**
 * Callback form for Indian website leads. Phone first (most buyers want a call or WhatsApp),
 * email is still required because /api/contact sends a confirmation to it.
 * Delivered by email only, like every other form on the site; nothing is stored.
 */
export default function LeadForm() {
  const router = useRouter()
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', pkg: 'business', business: '', _hp: '' })
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  useEffect(() => {
    const onPick = (e: Event) => setForm(f => ({ ...f, pkg: (e as CustomEvent<string>).detail }))
    window.addEventListener(PICK_EVENT, onPick)
    return () => window.removeEventListener(PICK_EVENT, onPick)
  }, [])

  const chosen = packages.find(p => p.slug === form.pkg)
  const pkgLabel = chosen ? `${chosen.name} (${inr(chosen.price)})` : NOT_SURE

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email,
          service: `Website package India: ${pkgLabel}`,
          budget: chosen ? inr(chosen.price) : undefined,
          message: [
            'Callback requested from the India website packages page.',
            `Phone / WhatsApp: ${form.phone}`,
            `Package: ${pkgLabel}`,
            `Business: ${form.business.trim() || '—'}`,
          ].join('\n'),
          _hp: form._hp,
          _source: JSON.stringify({ ...getEffectiveOrigin(), page: window.location.pathname, referrer: document.referrer || 'direct', form: 'lp-website-india' }),
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (!data.success) throw new Error('send failed')
      trackLead('lead_form_submit', { form: 'lp-website-india', service: 'Website package India', package: form.pkg, value: chosen?.price, currency: 'INR' })
      router.push('/thank-you?form=services')
    } catch {
      setState('error')
    }
  }

  const label: React.CSSProperties = { display: 'block', fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-2)' }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="in-name" style={label}>Your name *</label>
          <input id="in-name" className="mw-field" required placeholder="Rahul Sharma" autoComplete="name" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div>
          <label htmlFor="in-phone" style={label}>Mobile / WhatsApp *</label>
          <input
            id="in-phone"
            className="mw-field"
            required
            type="tel"
            inputMode="tel"
            placeholder="98765 43210"
            autoComplete="tel"
            pattern="^(\+?91[\s-]?)?0?[6-9]\d{4}[\s-]?\d{5}$"
            title="10-digit Indian mobile number"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="in-email" style={label}>Email *</label>
        <input id="in-email" className="mw-field" required type="email" placeholder="you@business.com" autoComplete="email" value={form.email} onChange={e => set('email', e.target.value)} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="in-pkg" style={label}>Package</label>
          <select id="in-pkg" className="mw-field" value={form.pkg} onChange={e => set('pkg', e.target.value)}>
            {packages.map(p => <option key={p.slug} value={p.slug}>{p.name} · {inr(p.price)}</option>)}
            <option value="unsure">{NOT_SURE}</option>
          </select>
        </div>
        <div>
          <label htmlFor="in-business" style={label}>Your business <span style={{ color: 'var(--text-4)', fontWeight: 400 }}>(optional)</span></label>
          <input id="in-business" className="mw-field" placeholder="e.g. dental clinic, Ludhiana" value={form.business} onChange={e => set('business', e.target.value)} />
        </div>
      </div>
      <button type="submit" disabled={state === 'sending'} className="mw-btn-accent w-full" style={{ minHeight: 54, fontSize: '1rem' }}>
        {state === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Get a free callback <ArrowRight size={18} /></>}
      </button>
      {state === 'error' && (
        <p role="alert" style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>
          That didn&apos;t go through. Please message us on WhatsApp instead.
        </p>
      )}
      <p style={{ fontSize: '0.78rem', color: 'var(--text-4)', lineHeight: 1.5 }}>
        We call or WhatsApp you within one working day. No spam, no pressure.
      </p>
    </form>
  )
}
