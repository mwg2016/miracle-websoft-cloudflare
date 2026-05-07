'use client'
import { useState } from 'react'
import { PlayCircle } from 'lucide-react'

interface Props {
  videoId: string
  title: string
  aspect?: '16/9' | '9/16' | '1/1'
  thumbnail?: string
  onPlay?: () => void
  rounded?: string
  showCaption?: boolean
}

export default function YouTubeEmbed({
  videoId,
  title,
  aspect = '16/9',
  thumbnail,
  onPlay,
  rounded = '16px',
  showCaption = false,
}: Props) {
  const [loaded, setLoaded] = useState(false)
  // hqdefault.jpg is the only YouTube thumbnail size guaranteed to exist for
  // every video. maxresdefault/sddefault 404 for non-HD uploads — using hq
  // by default keeps the console clean.
  const thumb =
    thumbnail ||
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspect.replace('/', ' / '),
        borderRadius: rounded,
        overflow: 'hidden',
        background: '#000',
        border: '1px solid rgba(255,255,255,0.1)',
        cursor: loaded ? 'default' : 'pointer',
      }}
      onClick={() => {
        if (!loaded) {
          setLoaded(true)
          onPlay?.()
        }
      }}
      role={loaded ? undefined : 'button'}
      aria-label={loaded ? undefined : `Play video: ${title}`}
      tabIndex={loaded ? -1 : 0}
      onKeyDown={(e) => {
        if (!loaded && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          setLoaded(true)
          onPlay?.()
        }
      }}
    >
      {!loaded ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // hqdefault is universal but a caller may pass a custom thumbnail
              // (e.g. maxresdefault) — fall back to mqdefault as a last resort.
              const img = e.currentTarget
              const fallback = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
              if (img.src !== fallback) img.src = fallback
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.55) 100%)',
              transition: 'background 0.25s',
            }}
          />
          {/* Play button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(255,0,0,0.92)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.55), 0 0 0 6px rgba(255,255,255,0.12)',
              transition: 'transform 0.2s',
            }}
          >
            <PlayCircle size={36} style={{ color: '#fff', fill: 'transparent' }} />
            <span
              style={{
                position: 'absolute',
                left: '52%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                width: 0,
                height: 0,
                borderLeft: '14px solid #fff',
                borderTop: '9px solid transparent',
                borderBottom: '9px solid transparent',
                marginLeft: '2px',
              }}
            />
          </div>
          {showCaption && (
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '14px',
                right: '14px',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 600,
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              }}
            >
              {title}
            </div>
          )}
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
            background: '#000',
          }}
        />
      )}
    </div>
  )
}
