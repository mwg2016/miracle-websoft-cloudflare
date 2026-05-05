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
        className="rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
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
              color: 'rgba(255,255,255,0.55)',
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
        className="rounded-2xl"
        style={{
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.18)',
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
              color: '#A7F3D0',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: '0.25rem',
            }}
          >
            INTRO · 60 SECONDS
          </p>
          <p style={{ fontSize: '0.85rem', color: '#fff', lineHeight: 1.5, fontWeight: 500 }}>
            Hear directly from {founderIntro.speaker} — the same person who will scope and build your store.
          </p>
        </div>
      </div>
    )
  }

  // default
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, rgba(108,99,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        border: '1px solid rgba(108,99,255,0.22)',
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
            <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>
              {founderIntro.speaker}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.76rem', marginTop: '0.15rem' }}>
              {founderIntro.role}
            </div>
          </div>
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              background: 'rgba(108,99,255,0.15)',
              border: '1px solid rgba(108,99,255,0.3)',
              padding: '0.3rem 0.65rem',
              borderRadius: '999px',
            }}
          >
            FOUNDER INTRO
          </span>
        </div>
      </div>
    </div>
  )
}
