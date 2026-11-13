'use client'
import { useEffect, useState } from 'react'

interface Tab {
  id: string
  label: string
}

// In-page section nav that sticks under the fixed site header.
// Paper bar, ink labels, accent underline on the active section; optional CTA on the right (desktop).
export default function StickyTabs({
  tabs,
  top = 64,
  cta,
}: {
  tabs: Tab[]
  /** Distance from the top of the viewport — the fixed header's height. */
  top?: number
  cta?: { href: string; label: string }
}) {
  const [active, setActive] = useState<string>(tabs[0]?.id ?? '')

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null)

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [tabs])

  return (
    <div
      style={{
        position: 'sticky',
        top,
        zIndex: 30,
        background: 'rgb(244 241 234 / 0.94)',
        backdropFilter: 'saturate(1.4) blur(12px)',
        WebkitBackdropFilter: 'saturate(1.4) blur(12px)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="mw-container flex items-center justify-between gap-4">
        <nav aria-label="On this page" className="flex gap-1 overflow-x-auto -mx-1" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                aria-current={isActive ? 'true' : undefined}
                style={{
                  padding: '0.9rem 0.75rem',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--text-1)' : 'var(--text-3)',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'color 0.15s, border-color 0.15s',
                }}
              >
                {t.label}
              </a>
            )
          })}
        </nav>
        {cta && (
          <a href={cta.href} className="mw-btn-accent hidden md:inline-flex shrink-0" style={{ minHeight: 38, padding: '0.5rem 1rem', fontSize: '0.84rem' }}>
            {cta.label} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  )
}
