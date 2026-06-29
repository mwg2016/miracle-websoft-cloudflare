'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Top progress bar that animates while the App Router fetches the next page.
// Pages on this site are all dynamic (CSP nonce forces SSR per request), so
// navigation has noticeable latency. We show a thin bar between click and
// the new pathname committing.
export default function NavigationProgress() {
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeRef = useRef(false)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const tailRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const stop = useCallback(() => {
    if (!activeRef.current) return
    activeRef.current = false
    if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null }
    if (safetyRef.current) { clearTimeout(safetyRef.current); safetyRef.current = null }
    setProgress(100)
    tailRef.current = setTimeout(() => {
      setActive(false)
      setProgress(0)
    }, 220)
  }, [])

  const start = useCallback(() => {
    if (activeRef.current) return
    activeRef.current = true
    setActive(true)
    setProgress(8)
    tickRef.current = setInterval(() => {
      setProgress((p) => (p >= 88 ? p : p + (92 - p) * 0.06))
    }, 220)
    safetyRef.current = setTimeout(() => stop(), 12000)
  }, [stop])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as HTMLElement | null)?.closest('a') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href')
      const target = link.getAttribute('target')
      if (!href) return
      if (target && target !== '_self') return
      if (link.hasAttribute('download')) return
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return
      let url: URL
      try { url = new URL(href, window.location.href) } catch { return }
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname && url.search === window.location.search) return
      start()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [start])

  // Pathname changing means the server response committed.
  useEffect(() => {
    const commitTimer = activeRef.current ? setTimeout(stop, 0) : null
    return () => {
      if (commitTimer) clearTimeout(commitTimer)
      if (tailRef.current) clearTimeout(tailRef.current)
    }
  }, [pathname, stop])

  if (!active) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: '#6C63FF',
          boxShadow: '0 0 8px rgba(108,99,255,0.65), 0 0 4px rgba(108,99,255,0.45)',
          transition: 'width 0.22s ease-out',
        }}
      />
    </div>
  )
}
