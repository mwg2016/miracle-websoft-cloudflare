import Link from 'next/link'
import { jobs } from '@/data/jobs'

const featured = jobs.filter(j => j.featured).slice(0, 4)

const CATEGORY_COLORS: Record<string, string> = {
  'Store Development': '#6C63FF',
  'Store Redesign':    '#8B5CF6',
  'Custom Features':   '#3B82F6',
  'Design & Figma':    '#EC4899',
  'Migration':         '#10B981',
  'Shopify Plus':      '#F59E0B',
  'Speed & CRO':       '#EF4444',
  'Ongoing Support':   '#06B6D4',
}

export default function RecentWork() {
  return (
    <section style={{ paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Verified Work History
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '0.5rem' }}>
              Recent Projects on Upwork
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.95rem' }}>
              600+ completed · 99% Job Success · All verified
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            View all 600+ projects →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(job => {
            const color = CATEGORY_COLORS[job.category] ?? '#6C63FF'
            return (
              <div
                key={job.id}
                className="flex flex-col rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Category */}
                <span
                  className="inline-block self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: color + '18', color, border: `1px solid ${color}30` }}
                >
                  {job.category}
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#F59E0B', fontSize: '0.75rem' }}>★</span>
                  ))}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, marginBottom: '0.6rem', fontFamily: 'var(--font-sans), system-ui, sans-serif', flex: 1 }}>
                  {job.title}
                </h3>

                {/* Review */}
                {job.review && (
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55, fontStyle: 'italic', marginBottom: '0.75rem' }}>
                    "{job.review.length > 90 ? job.review.slice(0, 90) + '…' : job.review}"
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>{job.completedDate}</span>
                  <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700, letterSpacing: '0.06em' }}>✓ UPWORK</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Upwork insight badges */}
        <div className="flex flex-wrap gap-3 mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)', alignSelf: 'center', marginRight: '0.5rem' }}>
            Clients say:
          </span>
          {['Committed to Quality · 98', 'Collaborative · 88', 'Reliable · 79', 'Clear Communicator · 75'].map(label => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.18)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.60)' }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.7rem' }}>✓</span>
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
