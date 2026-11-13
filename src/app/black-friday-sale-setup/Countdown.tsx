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
      <div className="bf-count" role="timer" aria-live="off" aria-label="Time left until Black Friday">
        {units.map((u) => (
          <div key={u.l}>
            <span className="bf-count-v">{u.v === null ? '--' : String(u.v).padStart(2, '0')}</span>
            <span className="bf-count-l">{u.l}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.6rem', minHeight: '1.3em' }}>
        {target && (
          <>Black Friday: {target.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</>
        )}
      </p>
    </div>
  )
}
