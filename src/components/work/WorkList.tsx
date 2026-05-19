'use client'
import { useState } from 'react'
import Link from 'next/link'
import { jobs, CATEGORIES, type JobCategory } from '@/data/jobs'

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < full ? '#F59E0B' : 'rgba(255,255,255,0.15)', fontSize: '0.8rem' }}>★</span>
      ))}
      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginLeft: '2px' }}>{rating.toFixed(1)}</span>
    </div>
  )
}

const CATEGORY_COLORS: Record<JobCategory, string> = {
  'Store Development': '#6C63FF',
  'Store Redesign':    '#8B5CF6',
  'Migration':         '#10B981',
  'Custom Features':   '#3B82F6',
  'Shopify Plus':      '#F59E0B',
  'Speed & CRO':       '#EF4444',
  'Design & Figma':    '#EC4899',
  'Ongoing Support':   '#06B6D4',
}

export default function WorkList() {
  const [active, setActive] = useState<JobCategory | 'All'>('All')

  const filtered = active === 'All' ? jobs : jobs.filter(j => j.category === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive('All')}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{
            background: active === 'All' ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
            color: active === 'All' ? '#fff' : 'rgba(255,255,255,0.55)',
            border: active === 'All' ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          All ({jobs.length})
        </button>
        {CATEGORIES.map(cat => {
          const count = jobs.filter(j => j.category === cat).length
          if (!count) return null
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: active === cat ? CATEGORY_COLORS[cat] + '22' : 'rgba(255,255,255,0.05)',
                color: active === cat ? CATEGORY_COLORS[cat] : 'rgba(255,255,255,0.55)',
                border: active === cat ? `1px solid ${CATEGORY_COLORS[cat]}55` : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      {/* Count */}
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
        Showing {filtered.length} verified project{filtered.length !== 1 ? 's' : ''}
        {active !== 'All' ? ` in ${active}` : ' across all categories'}
      </p>

      {/* Job cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(job => (
          <Link
            key={job.id}
            href={`/work/${job.id}`}
            style={{ textDecoration: 'none' }}
          >
          <div
            className="flex flex-col rounded-2xl p-5 transition-all h-full"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
          >
            {/* Category badge + rating */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <span
                className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: CATEGORY_COLORS[job.category] + '18',
                  color: CATEGORY_COLORS[job.category],
                  border: `1px solid ${CATEGORY_COLORS[job.category]}30`,
                }}
              >
                {job.category}
              </span>
              <StarRating rating={job.rating} />
            </div>

            {/* Title */}
            <h3
              className="mb-2"
              style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', lineHeight: 1.4, fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
            >
              {job.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '0.75rem', flex: 1 }}>
              {job.description}
            </p>

            {/* Review quote */}
            {job.review && (
              <blockquote
                className="rounded-xl px-4 py-3 mb-3"
                style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '2px solid var(--accent)' }}
              >
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, fontStyle: 'italic' }}>
                  "{job.review}"
                </p>
              </blockquote>
            )}

            {/* Tags + date */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {job.tags.map(tag => (
                <span
                  key={tag}
                  style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999, padding: '0.15rem 0.5rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.6)' }}>{job.completedDate}</span>
              <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600, letterSpacing: '0.05em' }}>✓ VERIFIED</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 500 }}>Details →</span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}
