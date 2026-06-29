'use client'
import { useState } from 'react'
import { Lock, Loader2 } from 'lucide-react'

export default function LoginForm({ next }: { next?: string }) {
  const [password, setPassword] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.ok) {
        window.location.href = next && next.startsWith('/admin') ? next : '/admin'
      } else {
        setState('error')
        setError(data.error || 'Login failed')
      }
    } catch {
      setState('error')
      setError('Network error — try again')
    }
  }

  return (
    <form onSubmit={onSubmit} style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 18,
      padding: '2rem 1.75rem',
    }}>
      <label htmlFor="admin-password" style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
        Password
      </label>
      <div style={{ position: 'relative' }}>
        <Lock size={14} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)' }} />
        <input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '0.85rem 1rem 0.85rem 2.4rem',
            fontSize: '0.9rem',
            color: '#fff',
            outline: 'none',
          }}
        />
      </div>
      {state === 'error' && (
        <p style={{ marginTop: '0.85rem', fontSize: '0.8rem', color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: 8, padding: '0.55rem 0.85rem' }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'sending'}
        style={{
          width: '100%', marginTop: '1.25rem',
          padding: '0.9rem',
          background: state === 'sending' ? 'rgba(108,99,255,0.5)' : 'linear-gradient(135deg, #6C63FF 0%, #5245d8 100%)',
          color: '#fff', fontWeight: 600, fontSize: '0.9rem',
          borderRadius: 10, border: 'none',
          cursor: state === 'sending' ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
        }}
      >
        {state === 'sending' ? <><Loader2 size={15} style={{ animation: 'mw-spin 1s linear infinite' }} /> Signing in…</> : 'Sign in'}
      </button>
      <style>{`@keyframes mw-spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  )
}
