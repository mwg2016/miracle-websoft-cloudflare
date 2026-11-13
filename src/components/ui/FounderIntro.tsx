import YouTubeEmbed from './YouTubeEmbed'
import { founderIntro } from '@/data/videos'

interface Props {
  variant?: 'default' | 'compact' | 'cro-lp'
  caption?: string
}

export default function FounderIntro({ variant = 'default', caption }: Props) {
  if (variant === 'compact') {
    return (
      <div
        className="rounded-lg"
        style={{
          background: 'rgb(var(--ink-rgb) / 0.04)',
          border: '1px solid rgb(var(--ink-rgb) / 0.08)',
          padding: '1rem',
        }}
      >
        <YouTubeEmbed
          videoId={founderIntro.videoId}
          title={founderIntro.title}
          aspect="16/9"
          rounded="12px"
        />
        {caption !== '' && (
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-3)',
              marginTop: '0.75rem',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            {caption ?? `Watch a 60-second intro from ${founderIntro.speaker}.`}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'cro-lp') {
    return (
      <div
        className="rounded-lg"
        style={{
          background: 'rgb(23 21 15 / 0.12)',
          border: '1px solid rgb(var(--ink-rgb) / 0.18)',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        <YouTubeEmbed
          videoId={founderIntro.videoId}
          title={founderIntro.title}
          aspect="16/9"
          rounded="0"
        />
        <div style={{ padding: '1rem 1.25rem' }}>
          <p
            style={{
              fontSize: '0.7rem',
              color: 'var(--text-3)',
              fontFamily: 'var(--font-geist-mono)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '0.25rem',
            }}
          >
            INTRO · 60 SECONDS
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-1)', lineHeight: 1.5, fontWeight: 500 }}>
            Hear directly from {founderIntro.speaker} — the same person who will scope and build your store.
          </p>
        </div>
      </div>
    )
  }

  // default
  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        background: 'var(--bg-raised)',
        border: '1px solid var(--border)',
      }}
    >
      <YouTubeEmbed
        videoId={founderIntro.videoId}
        title={founderIntro.title}
        aspect="16/9"
        rounded="0"
      />
      <div style={{ padding: '1.25rem 1.5rem' }}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div style={{ color: 'var(--text-1)', fontSize: '0.92rem', fontWeight: 600 }}>
              {founderIntro.speaker}
            </div>
            <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', marginTop: '0.15rem' }}>
              {founderIntro.role}
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              color: 'var(--text-3)',
            }}
          >
            FOUNDER INTRO
          </span>
        </div>
      </div>
    </div>
  )
}
