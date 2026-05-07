// Shared bits used by admin pages.

import type React from 'react'

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '1.25rem 1.4rem',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function Stat({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <Card>
      <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', lineHeight: 1, marginBottom: sub ? '0.4rem' : 0 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)' }}>{sub}</div>}
    </Card>
  )
}

export function Bar({ label, count, max, accent = '#6C63FF' }: { label: string; count: number; max: number; accent?: string }) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0
  return (
    <div style={{ marginBottom: '0.6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.3rem' }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>{label}</span>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontVariantNumeric: 'tabular-nums' }}>{count}</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: accent, transition: 'width 0.3s' }} />
      </div>
    </div>
  )
}

export function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: 0 }}>{children}</h2>
      {sub && <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', margin: '0.2rem 0 0' }}>{sub}</p>}
    </div>
  )
}

export function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: '3rem 1.5rem',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: 'rgba(255,255,255,0.6)',
      background: 'rgba(255,255,255,0.02)',
      border: '1px dashed rgba(255,255,255,0.08)',
      borderRadius: 14,
    }}>
      {children}
    </div>
  )
}

export function fmtTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}
