'use client'
import { useState } from 'react'

const PRESETS = [
  { label: '$1k project', value: 1000 },
  { label: '$3k project', value: 3000 },
  { label: '$5k project', value: 5000 },
  { label: '$10k project', value: 10000 },
]

function fmt(n: number) {
  return n.toLocaleString('en-US')
}

export default function ReferralCalculator() {
  const [value, setValue] = useState(5000)
  const commission = Math.round(value * 0.2)
  const pct = ((value - 500) / (25000 - 500)) * 100

  return (
    <div className="audit-form-card">
      <p className="mw-num" style={{ marginBottom: '1.5rem' }}>EARNINGS CALCULATOR</p>

      <div style={{ paddingBottom: '1.5rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.95rem', color: 'var(--text-2)', marginBottom: '0.5rem' }}>
          On a <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>${fmt(value)}</strong> project, you earn
        </div>
        <div style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: 'clamp(3rem, 8vw, 4.5rem)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          color: 'var(--forest)',
          lineHeight: 1,
        }} aria-live="polite">
          ${fmt(commission)}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginTop: '0.5rem' }}>20% commission, paid after the client invoice clears</div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', height: 24, display: 'flex', alignItems: 'center' }}>
          <div style={{
            position: 'absolute', top: '50%', left: 0, right: 0,
            height: 2,
            background: `linear-gradient(to right, var(--text-1) ${pct}%, var(--border-hover) ${pct}%)`,
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }} />
          <input
            type="range"
            min={500}
            max={25000}
            step={500}
            value={value}
            aria-label="Project value in US dollars"
            onChange={e => setValue(Number(e.target.value))}
            className="ref-range"
            style={{
              width: '100%',
              WebkitAppearance: 'none',
              appearance: 'none',
              height: 24,
              background: 'transparent',
              cursor: 'pointer',
              position: 'relative',
              margin: 0,
            }}
          />
        </div>
        <style>{`
          .ref-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px; height: 20px;
            border-radius: 50%;
            background: var(--accent);
            border: 3px solid var(--bg-raised);
            box-shadow: 0 0 0 1px var(--accent);
            cursor: pointer;
          }
          .ref-range::-moz-range-thumb {
            width: 20px; height: 20px;
            border-radius: 50%;
            background: var(--accent);
            border: 3px solid var(--bg-raised);
            box-shadow: 0 0 0 1px var(--accent);
            cursor: pointer;
          }
        `}</style>
        <div className="mw-num" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem' }}>
          <span>$500</span>
          <span>$25,000+</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: '0.5rem' }}>
        {PRESETS.map(p => {
          const active = value === p.value
          return (
            <button
              key={p.value}
              type="button"
              onClick={() => setValue(p.value)}
              aria-pressed={active}
              style={{
                padding: '0.6rem 0.25rem',
                borderRadius: 6,
                border: `1px solid ${active ? 'var(--text-1)' : 'var(--border-hover)'}`,
                background: active ? 'var(--text-1)' : 'transparent',
                color: active ? 'var(--bg)' : 'var(--text-2)',
                fontSize: '0.8rem', fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s, border-color 0.15s',
              }}
            >
              {p.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
