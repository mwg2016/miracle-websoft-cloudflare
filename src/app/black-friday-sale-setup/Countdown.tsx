'use client'
import { useSyncExternalStore } from 'react'
import { nextBlackFriday } from './blackFriday'

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000)
  return () => clearInterval(id)
}

// Whole seconds keep the snapshot stable between renders within the same tick.
const getSecond = () => Math.floor(Date.now() / 1000)
const getServerSecond = () => null

export default function Countdown() {
  const second = useSyncExternalStore(subscribe, getSecond, getServerSecond)
  const now = second === null ? null : new Date(second * 1000)

  // Render placeholders on the server so markup matches during hydration.
  const target = now ? nextBlackFriday(now) : null
  const diff = now && target ? Math.max(0, target.getTime() - now.getTime()) : 0
  const units = [
    { l: 'Days', v: now ? Math.floor(diff / 86400000) : null },
    { l: 'Hours', v: now ? Math.floor(diff / 3600000) % 24 : null },
    { l: 'Mins', v: now ? Math.floor(diff / 60000) % 60 : null },
    { l: 'Secs', v: now ? Math.floor(diff / 1000) % 60 : null },
  ]

  return (
    <div>
      <div className="flex gap-2.5" role="timer" aria-live="off" aria-label="Time left until Black Friday">
        {units.map((u) => (
          <div
            key={u.l}
            className="text-center"
            style={{
              minWidth: '64px',
              padding: '0.7rem 0.5rem',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(251,191,36,0.25)',
            }}
          >
            <div
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#FBBF24',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
              }}
            >
              {u.v === null ? '--' : String(u.v).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.64rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.35rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {u.l}
            </div>
          </div>
        ))}
      </div>
      {target && (
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.6rem' }}>
          Black Friday:{' '}
          {target.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      )}
    </div>
  )
}
