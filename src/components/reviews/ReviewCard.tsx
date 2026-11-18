import Link from 'next/link'
import { BadgeCheck } from 'lucide-react'
import StarTiles from './StarTiles'
import type { PublicReview } from '@/lib/reviews/types'

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase() || '?'
}

export function formatReviewDate(iso: string, source: PublicReview['source']): string {
  const d = new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso)
  if (Number.isNaN(d.getTime())) return iso
  // Upwork dates are month-precision only.
  return d.toLocaleDateString('en-US', source === 'upwork'
    ? { month: 'short', year: 'numeric', timeZone: 'UTC' }
    : { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

const AVATAR_BG = ['#E9DFCF', '#DDE7DF', '#E7DDE3', '#DCE3EA', '#EFE3D2']

export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const bg = AVATAR_BG[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % AVATAR_BG.length]
  return (
    <span aria-hidden="true" style={{
      width: size, height: size, borderRadius: '50%', background: bg, color: 'var(--text-1)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 600, fontSize: size * 0.38, flexShrink: 0,
    }}>
      {initials(name)}
    </span>
  )
}

export function SourceBadge({ source }: { source: PublicReview['source'] }) {
  return (
    <span className="rv-badge">
      <BadgeCheck size={13} />
      {source === 'upwork' ? 'Verified on Upwork' : 'Verified client'}
    </span>
  )
}

export default function ReviewCard({ review, clamp = true }: { review: PublicReview; clamp?: boolean }) {
  const href = `/reviews/${review.slug}`
  return (
    <article className="rv-card">
      <header className="rv-card-head">
        <Avatar name={review.name} />
        <div style={{ minWidth: 0 }}>
          <div className="rv-name">{review.name}</div>
          <div className="rv-meta">
            {[review.company, review.country].filter(Boolean).join(' · ') || (review.source === 'upwork' ? 'Upwork client' : 'Client')}
          </div>
        </div>
      </header>
      <div className="rv-card-rating">
        <StarTiles rating={review.rating} size={20} />
        <SourceBadge source={review.source} />
        <time dateTime={review.date.slice(0, 10)} className="rv-date">{formatReviewDate(review.date, review.source)}</time>
      </div>
      <h3 className="rv-title"><Link href={href}>{review.title}</Link></h3>
      <p className={clamp ? 'rv-body rv-body--clamp' : 'rv-body'}>{review.body}</p>
      {review.service && <p className="rv-service">Service: {review.service}</p>}
      {review.reply && (
        <div className="rv-reply">
          <div className="rv-reply-head">Reply from Miracle Websoft</div>
          <p className={clamp ? 'rv-body--clamp' : undefined}>{review.reply}</p>
        </div>
      )}
      <footer className="rv-card-foot">
        <Link href={href} className="rv-link">Read review →</Link>
      </footer>
    </article>
  )
}
