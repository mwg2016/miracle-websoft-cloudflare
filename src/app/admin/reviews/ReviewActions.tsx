'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import type { ReviewStatus } from '@/lib/reviews/types'

const BTN: React.CSSProperties = {
  fontSize: '0.78rem', fontWeight: 600, padding: '0.42rem 0.8rem', borderRadius: 8, cursor: 'pointer',
  border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.04)', color: '#fff',
}
const VARIANT: Record<string, React.CSSProperties> = {
  approve: { background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.4)', color: '#34D399' },
  reject: { background: 'rgba(239,68,68,0.12)', borderColor: 'rgba(239,68,68,0.35)', color: '#F87171' },
  neutral: {},
  danger: { background: 'transparent', borderColor: 'rgba(239,68,68,0.3)', color: 'rgba(248,113,113,0.85)' },
}

async function call(id: string, method: 'PATCH' | 'DELETE', body?: unknown) {
  const res = await fetch(`/api/admin/reviews/${encodeURIComponent(id)}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({})) as { ok?: boolean; error?: string }
  if (!res.ok || !data.ok) throw new Error(data.error || `Request failed (${res.status})`)
}

export function ReviewActions({ id, status, afterDelete }: { id: string; status: ReviewStatus; afterDelete?: string }) {
  const router = useRouter()
  const [pending, start] = useTransition()
  const [error, setError] = useState('')

  const run = (fn: () => Promise<void>) => start(async () => {
    setError('')
    try {
      await fn()
      router.refresh()
    } catch (e) {
      setError((e as Error).message)
    }
  })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center', opacity: pending ? 0.6 : 1 }}>
      {status !== 'approved' && (
        <button type="button" disabled={pending} style={{ ...BTN, ...VARIANT.approve }} onClick={() => run(() => call(id, 'PATCH', { status: 'approved' }))}>
          ✓ Approve
        </button>
      )}
      {status !== 'rejected' && (
        <button type="button" disabled={pending} style={{ ...BTN, ...VARIANT.reject }} onClick={() => run(() => call(id, 'PATCH', { status: 'rejected' }))}>
          {status === 'approved' ? 'Unpublish' : '✕ Reject'}
        </button>
      )}
      {status !== 'pending' && (
        <button type="button" disabled={pending} style={BTN} onClick={() => run(() => call(id, 'PATCH', { status: 'pending' }))}>
          Move to pending
        </button>
      )}
      <button
        type="button"
        disabled={pending}
        style={{ ...BTN, ...VARIANT.danger }}
        onClick={() => {
          if (!confirm('Delete this review permanently? This cannot be undone.')) return
          run(async () => {
            await call(id, 'DELETE')
            if (afterDelete) router.push(afterDelete)
          })
        }}
      >
        Delete
      </button>
      {error && <span style={{ fontSize: '0.75rem', color: '#F87171' }}>{error}</span>}
    </div>
  )
}

export function ReplyEditor({ id, initial }: { id: string; initial: string }) {
  const router = useRouter()
  const [value, setValue] = useState(initial)
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  async function save() {
    setState('saving')
    try {
      await call(id, 'PATCH', { reply: value })
      setState('saved')
      router.refresh()
      setTimeout(() => setState('idle'), 2000)
    } catch {
      setState('error')
    }
  }

  return (
    <div>
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={4}
        maxLength={2000}
        placeholder="Write a public reply (shown under the review once it's approved)…"
        style={{
          width: '100%', background: 'rgba(255,255,255,0.04)', color: '#fff', border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: 10, padding: '0.75rem 0.9rem', fontSize: '0.9rem', fontFamily: 'inherit', resize: 'vertical',
        }}
      />
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '0.5rem' }}>
        <button type="button" onClick={save} disabled={state === 'saving' || value === initial} style={{ ...BTN, opacity: value === initial ? 0.5 : 1 }}>
          {state === 'saving' ? 'Saving…' : 'Save reply'}
        </button>
        {initial && (
          <button type="button" onClick={() => { setValue(''); }} style={{ ...BTN, ...VARIANT.danger }}>Clear</button>
        )}
        {state === 'saved' && <span style={{ fontSize: '0.78rem', color: '#34D399' }}>Saved</span>}
        {state === 'error' && <span style={{ fontSize: '0.78rem', color: '#F87171' }}>Save failed</span>}
      </div>
    </div>
  )
}
