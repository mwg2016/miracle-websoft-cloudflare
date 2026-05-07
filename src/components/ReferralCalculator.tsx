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
    <div style={{
      background: 'linear-gradient(145deg, rgba(108,99,255,0.08) 0%, rgba(16,185,129,0.04) 100%)',
      border: '1px solid rgba(108,99,255,0.2)',
      borderRadius: 24,
      padding: '2.5rem 2rem',
      maxWidth: 560,
      margin: '0 auto',
    }}>
      <p style={{ margin: '0 0 1.5rem', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(108,99,255,0.7)', textAlign: 'center' }}>
        Earnings Calculator
      </p>

      {/* Commission display */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.35rem' }}>
          On a <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>${fmt(value)}</span> project, you earn
        </div>
        <div style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: 'clamp(2.8rem, 8vw, 4rem)',
          fontWeight: 700,
          color: '#10B981',
          lineHeight: 1,
          marginBottom: '0.3rem',
        }}>
          ${fmt(commission)}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>20% commission · paid after client invoice clears</div>
      </div>

      {/* Slider */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ position: 'relative', paddingBottom: '0.5rem' }}>
          <div style={{
            position: 'absolute', top: '50%', left: 0, right: 0,
            height: 4, borderRadius: 9999,
            background: `linear-gradient(to right, #6C63FF ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          <input
            type="range"
            min={500}
            max={25000}
            step={500}
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            style={{
              width: '100%',
              WebkitAppearance: 'none',
              appearance: 'none',
              height: 4,
              background: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
        <style>{`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 22px; height: 22px;
            border-radius: 50%;
            background: #6C63FF;
            border: 3px solid #fff;
            box-shadow: 0 0 0 3px rgba(108,99,255,0.3), 0 4px 12px rgba(108,99,255,0.4);
            cursor: pointer;
          }
          input[type='range']::-moz-range-thumb {
            width: 22px; height: 22px;
            border-radius: 50%;
            background: #6C63FF;
            border: 3px solid #fff;
            box-shadow: 0 0 0 3px rgba(108,99,255,0.3);
            cursor: pointer;
          }
        `}</style>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)' }}>$500</span>
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)' }}>$25,000+</span>
        </div>
      </div>

      {/* Preset buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
        {PRESETS.map(p => (
          <button
            key={p.value}
            onClick={() => setValue(p.value)}
            style={{
              padding: '0.5rem 0.25rem',
              borderRadius: 10,
              border: `1px solid ${value === p.value ? 'rgba(108,99,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
              background: value === p.value ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)',
              color: value === p.value ? 'rgba(180,175,255,0.9)' : 'rgba(255,255,255,0.35)',
              fontSize: '0.72rem', fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
