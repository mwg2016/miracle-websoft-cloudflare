import YouTubeEmbed from './YouTubeEmbed'
import type { VideoTestimonial } from '@/data/videos'
import { Star } from 'lucide-react'

interface Props {
  videos: VideoTestimonial[]
  theme?: 'dark' | 'green'
  cardBg?: string
  metricColor?: string
}

export default function VideoTestimonialGrid({
  videos,
  theme = 'dark',
  cardBg,
  metricColor,
}: Props) {
  const bg =
    cardBg ?? (theme === 'green' ? 'rgba(0,0,0,0.32)' : 'rgba(255,255,255,0.03)')
  const border = theme === 'green' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)'
  const accent = metricColor ?? '#10B981'

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((v) => (
        <div
          key={v.videoId}
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: bg,
            border: `1px solid ${border}`,
          }}
        >
          <YouTubeEmbed
            videoId={v.videoId}
            title={v.title}
            aspect={v.aspect ?? '16/9'}
            rounded="0"
          />
          <div style={{ padding: '0.7rem 0.95rem' }}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="flex items-center gap-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={9} style={{ color: '#FBBF24', fill: '#FBBF24' }} />
                  ))}
                </div>
                {v.metric && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      color: accent,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    · {v.metric}
                  </span>
                )}
              </div>
              {v.category && (
                <span
                  style={{
                    fontSize: '0.58rem',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {v.category}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
