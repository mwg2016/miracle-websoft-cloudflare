import Link from 'next/link'
import StarTiles from './StarTiles'
import { ratingLabel, type RatingStats } from '@/lib/reviews/types'

/** Trustpilot-style header block: score, label, stars, count + distribution bars. */
export default function RatingSummary({ stats, activeRating }: { stats: RatingStats; activeRating?: number }) {
  return (
    <div className="rv-summary">
      <div className="rv-summary-score">
        <div className="rv-score-num">{stats.average.toFixed(1)}</div>
        <div>
          <div className="rv-score-label">{ratingLabel(stats.average)}</div>
          <StarTiles rating={stats.average} size={26} />
          <div className="rv-score-count">Based on {stats.count.toLocaleString('en-US')} review{stats.count === 1 ? '' : 's'}</div>
        </div>
      </div>
      <ul className="rv-dist" aria-label="Rating distribution">
        {[5, 4, 3, 2, 1].map(star => {
          const n = stats.distribution[star - 1]
          const pct = stats.count ? Math.round((n / stats.count) * 100) : 0
          const active = activeRating === star
          return (
            <li key={star}>
              <Link
                href={active ? '/reviews' : `/reviews?rating=${star}`}
                className={`rv-dist-row${active ? ' is-active' : ''}`}
                aria-label={`${star}-star reviews: ${n} (${pct}%)${active ? ', filter active' : ''}`}
                scroll={false}
              >
                <span className="rv-dist-label">{star}-star</span>
                <span className="rv-dist-bar"><span style={{ width: `${pct}%` }} /></span>
                <span className="rv-dist-pct">{pct}%</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
