'use client'
import { useEffect, useRef, useState } from 'react'

interface Tab {
  id: string
  label: string
}

export default function StickyTabs({
  tabs,
  accent = '#10B981',
  background = 'rgba(6,78,59,0.96)',
  border = 'rgba(16,185,129,0.25)',
  activeColor = '#fff',
  inactiveColor = 'rgba(255,255,255,0.6)',
}: {
  tabs: Tab[]
  accent?: string
  background?: string
  border?: string
  activeColor?: string
  inactiveColor?: string
}) {
  const [active, setActive] = useState<string>(tabs[0]?.id ?? '')
  const railRef = useRef<HTMLDivElement | null>(null)

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
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [tabs])

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background,
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div className="mw-container" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div
          ref={railRef}
          className="flex gap-1 overflow-x-auto"
          style={{
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                style={{
                  padding: '0.95rem 1.1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: isActive ? activeColor : inactiveColor,
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? `2px solid ${accent}` : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
              >
                {t.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
