'use client'

import { useState, useSyncExternalStore } from 'react'
import { Check, Link2, Mail, Share2 } from 'lucide-react'

type Props = {
  /** Absolute URL to share. */
  url: string
  /** Short headline / post text. */
  text: string
  /** Optional hashtags (no #), used by X. */
  hashtags?: string[]
  /** GA4 content_type for the share event. */
  contentType?: string
  size?: 'sm' | 'md'
  /** Show text labels next to the icons. */
  labels?: boolean
}

// Brand marks as inline SVG — lucide no longer ships brand icons.
const ICONS = {
  facebook: 'M13.5 21v-7.5h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z',
  x: 'M17.8 3h3.1l-6.8 7.7 8 10.3h-6.3l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5z',
  whatsapp: 'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.2-1.4-.6-.5-1-1.2-1.3-1.7-.1-.2 0-.4.1-.5l.4-.4.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z',
  telegram: 'M21.4 4.2 2.9 11.3c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.8-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.3-1.5zM9.7 14.3l-.4 4-1.6-4.9 9.8-6.2-7.8 7.1z',
  reddit: 'M22 12.1a2.2 2.2 0 0 0-3.7-1.6 10.8 10.8 0 0 0-5.7-1.8l1-4.6 3.2.7a1.6 1.6 0 1 0 .2-1l-3.6-.8a.5.5 0 0 0-.6.4l-1.1 5.2a10.8 10.8 0 0 0-5.8 1.8A2.2 2.2 0 1 0 3.5 14a4.3 4.3 0 0 0 0 .7c0 3.3 3.8 6 8.5 6s8.5-2.7 8.5-6a4.3 4.3 0 0 0 0-.7 2.2 2.2 0 0 0 1.5-1.9zM7.5 13.6a1.6 1.6 0 1 1 1.6 1.6 1.6 1.6 0 0 1-1.6-1.6zm9 4.2a5.6 5.6 0 0 1-4.5 1.4 5.6 5.6 0 0 1-4.5-1.4.4.4 0 0 1 .6-.6 4.9 4.9 0 0 0 3.9 1.1 4.9 4.9 0 0 0 3.9-1.1.4.4 0 1 1 .6.6zm-.4-2.6a1.6 1.6 0 1 1 1.6-1.6 1.6 1.6 0 0 1-1.6 1.6z',
} as const

type Network = keyof typeof ICONS

const NETWORKS: { id: Network; label: string; href: (u: string, t: string, h: string[]) => string }[] = [
  { id: 'facebook', label: 'Facebook', href: (u) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}` },
  { id: 'linkedin', label: 'LinkedIn', href: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}` },
  { id: 'x', label: 'X', href: (u, t, h) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}${h.length ? `&hashtags=${encodeURIComponent(h.join(','))}` : ''}` },
  { id: 'whatsapp', label: 'WhatsApp', href: (u, t) => `https://wa.me/?text=${encodeURIComponent(`${t} ${u}`)}` },
  { id: 'telegram', label: 'Telegram', href: (u, t) => `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}` },
  { id: 'reddit', label: 'Reddit', href: (u, t) => `https://www.reddit.com/submit?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}` },
]

const noopSubscribe = () => () => {}

function track(method: string, contentType: string, url: string) {
  try {
    const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void }
    ;(w.dataLayer = w.dataLayer || []).push({ event: 'share', method, content_type: contentType, item_id: url })
    w.gtag?.('event', 'share', { method, content_type: contentType, item_id: url })
  } catch {}
}

export default function ShareButtons({ url, text, hashtags = [], contentType = 'page', size = 'md', labels = false }: Props) {
  const [copied, setCopied] = useState(false)
  // false on the server, real value after hydration — no effect needed.
  const canNative = useSyncExternalStore(
    noopSubscribe,
    () => typeof navigator.share === 'function',
    () => false,
  )

  const dim = size === 'sm' ? 34 : 40
  const icon = size === 'sm' ? 16 : 18

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = url
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    track('copy_link', contentType, url)
    setTimeout(() => setCopied(false), 2000)
  }

  async function nativeShare() {
    try {
      await navigator.share({ title: text, text, url })
      track('native', contentType, url)
    } catch {}
  }

  const btnClass = `share-btn${labels ? ' share-btn--label' : ''}`
  const btnStyle = labels ? undefined : { width: dim, height: dim }

  return (
    <div className="share-row">
      {NETWORKS.map(n => (
        <a
          key={n.id}
          href={n.href(url, text, hashtags)}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={btnClass}
          style={btnStyle}
          aria-label={`Share on ${n.label}`}
          title={`Share on ${n.label}`}
          onClick={() => track(n.id, contentType, url)}
        >
          <svg width={icon} height={icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={ICONS[n.id]} /></svg>
          {labels && <span>{n.label}</span>}
        </a>
      ))}
      <a
        href={`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`}
        className={btnClass}
        style={btnStyle}
        aria-label="Share by email"
        title="Share by email"
        onClick={() => track('email', contentType, url)}
      >
        <Mail size={icon} aria-hidden="true" />
        {labels && <span>Email</span>}
      </a>
      <button type="button" onClick={copy} className={btnClass} style={btnStyle} aria-label="Copy link" title="Copy link">
        {copied ? <Check size={icon} aria-hidden="true" /> : <Link2 size={icon} aria-hidden="true" />}
        {labels && <span>{copied ? 'Copied!' : 'Copy link'}</span>}
        <span className="sr-only" aria-live="polite">{copied ? 'Link copied' : ''}</span>
      </button>
      {canNative && (
        <button type="button" onClick={nativeShare} className={btnClass} style={btnStyle} aria-label="More sharing options" title="More…">
          <Share2 size={icon} aria-hidden="true" />
          {labels && <span>More</span>}
        </button>
      )}
    </div>
  )
}
