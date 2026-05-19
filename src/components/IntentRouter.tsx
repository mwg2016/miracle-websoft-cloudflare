'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, Sparkles, ArrowRight } from 'lucide-react'
import { INTENT_OPTIONS, findMatch } from '@/lib/intent-map'
import { trackLead } from '@/lib/analytics'

export default function IntentRouter() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [noMatch, setNoMatch] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => inputRef.current?.focus(), 120)
    return () => { document.removeEventListener('keydown', onKey); clearTimeout(t) }
  }, [open])

  function close() { setOpen(false); setNoMatch(false); setQuery('') }

  function handleChipClick(optId: string, label: string, path: string) {
    trackLead('intent_chip_click', { intent: optId, label, routed_to: path })
    close()
    router.push(path)
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    const match = findMatch(query)
    if (match) {
      trackLead('intent_search', { query: query.trim(), matched: true, routed_to: match.path, matched_on: match.matchedOn })
      close()
      router.push(match.path)
    } else {
      trackLead('intent_search', { query: query.trim(), matched: false })
      setNoMatch(true)
    }
  }

  return (
    <>
      {/* Floating button (always visible when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mw-intent-fab"
          aria-label="What are you looking for?"
        >
          <Sparkles size={16} />
          <span className="mw-intent-fab-label">What are you looking for?</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <>
          <div onClick={close} className="mw-intent-backdrop" aria-hidden="true" />
          <div className="mw-intent-panel" role="dialog" aria-label="Site navigation assistant">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={15} style={{ color: '#6C63FF' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>What are you looking for?</span>
              </div>
              <button onClick={close} aria-label="Close"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: 4, display: 'flex' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.6)', margin: '0 0 0.9rem', lineHeight: 1.6 }}>
              Pick one and we&apos;ll take you there.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {INTENT_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleChipClick(opt.id, opt.label, opt.path)}
                  className="mw-intent-chip"
                >
                  <span>{opt.label}</span>
                  <ArrowRight size={13} style={{ color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '1rem 0 0.75rem' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
              <span style={{ fontSize: '0.66rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Or</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
            </div>

            <form onSubmit={handleSearch}>
              <div style={{ position: 'relative' }}>
                <Search size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)' }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setNoMatch(false) }}
                  placeholder="Type what you need…"
                  className="mw-intent-input"
                />
              </div>
            </form>

            {noMatch && (
              <p style={{ margin: '0.7rem 0 0', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                No exact match.{' '}
                <a href="/services" style={{ color: '#6C63FF', textDecoration: 'none' }}>Browse services</a>
                {' '}or{' '}
                <a href="/contact" style={{ color: '#6C63FF', textDecoration: 'none' }}>talk to Karam</a>.
              </p>
            )}
          </div>
        </>
      )}

      <style>{`
        .mw-intent-fab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9998;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.75rem 1.2rem;
          background: linear-gradient(135deg, #6C63FF 0%, #5245d8 100%);
          color: #fff;
          border: none;
          border-radius: 9999px;
          box-shadow: 0 10px 32px rgba(108,99,255,0.45);
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: var(--font-sans), system-ui, sans-serif;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .mw-intent-fab:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(108,99,255,0.55); }
        .mw-intent-fab-label { white-space: nowrap; }
        @media (max-width: 480px) {
          .mw-intent-fab { padding: 0.7rem; }
          .mw-intent-fab-label { display: none; }
        }

        .mw-intent-backdrop {
          position: fixed; inset: 0;
          z-index: 9998;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: mw-intent-fade 0.18s ease-out;
        }

        .mw-intent-panel {
          position: fixed;
          z-index: 9999;
          bottom: 20px;
          right: 20px;
          width: 380px;
          max-width: calc(100vw - 40px);
          background: linear-gradient(145deg, #121218 0%, #0a0a10 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          padding: 1.35rem 1.35rem 1.5rem;
          font-family: var(--font-sans), system-ui, sans-serif;
          animation: mw-intent-slide-up 0.22s ease-out;
        }
        @media (max-width: 640px) {
          .mw-intent-panel {
            bottom: 0; left: 0; right: 0;
            width: auto;
            max-width: none;
            border-radius: 24px 24px 0 0;
            max-height: 85vh;
            overflow-y: auto;
            padding: 1.25rem 1.25rem 1.75rem;
          }
        }

        .mw-intent-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0.72rem 0.95rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: rgba(255,255,255,0.85);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s, border-color 0.15s, transform 0.1s;
          font-family: inherit;
          line-height: 1.3;
        }
        .mw-intent-chip:hover {
          background: rgba(108,99,255,0.12);
          border-color: rgba(108,99,255,0.35);
        }
        .mw-intent-chip:active { transform: scale(0.99); }

        .mw-intent-input {
          width: 100%;
          padding: 0.7rem 1rem 0.7rem 32px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 0.82rem;
          outline: none;
          font-family: inherit;
          transition: border-color 0.15s;
        }
        .mw-intent-input:focus { border-color: rgba(108,99,255,0.4); }
        .mw-intent-input::placeholder { color: rgba(255,255,255,0.3); }

        @keyframes mw-intent-slide-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mw-intent-fade {
          from { opacity: 0; } to { opacity: 1; }
        }
      `}</style>
    </>
  )
}
