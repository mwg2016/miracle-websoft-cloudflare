'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { jobs, jobTitle, fixTypos, CATEGORIES, type JobCategory } from '@/data/jobs'

const INITIAL = 40
type Filter = JobCategory | 'All' | 'Reviewed'

export default function WorkList() {
  const [active, setActive] = useState<Filter>('All')
  const [expanded, setExpanded] = useState(false)

  const filtered =
    active === 'All' ? jobs
    : active === 'Reviewed' ? jobs.filter(j => j.review)
    : jobs.filter(j => j.category === active)

  const tabs: { key: Filter; count: number }[] = [
    { key: 'All', count: jobs.length },
    { key: 'Reviewed', count: jobs.filter(j => j.review).length },
    ...CATEGORIES.map(c => ({ key: c as Filter, count: jobs.filter(j => j.category === c).length })).filter(t => t.count),
  ]

  return (
    <>
      <div className="flex flex-wrap gap-1 mb-6" role="tablist" aria-label="Filter projects">
        {tabs.map(t => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === t.key}
            onClick={() => { setActive(t.key); setExpanded(false) }}
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '4px',
              border: '1px solid',
              borderColor: active === t.key ? 'var(--text-1)' : 'var(--border)',
              background: active === t.key ? 'var(--text-1)' : 'transparent',
              color: active === t.key ? 'var(--bg)' : 'var(--text-2)',
              cursor: 'pointer',
            }}
          >
            {t.key === 'Reviewed' ? 'With a review' : t.key} <span style={{ opacity: 0.6, fontFamily: 'var(--font-geist-mono)', fontSize: '0.78rem' }}>{t.count}</span>
          </button>
        ))}
      </div>

      <ol className={`work-list${expanded ? ' is-open' : ''}`}>
        {filtered.map((job, i) => (
          <li key={job.id} className={i >= INITIAL ? 'work-more' : undefined}>
            <Link href={`/work/${job.id}`}>
              <div>
                <h3 className="work-title">{jobTitle(job)}</h3>
                <p className="work-desc">{fixTypos(job.description)}</p>
                {job.review && <p className="work-quote">&ldquo;{job.review}&rdquo;</p>}
              </div>
              <span className="mw-num work-cat">{job.category}</span>
              <span className="mw-num work-date">{job.completedDate}</span>
              <span className="mw-num work-rating" aria-label={`Rated ${job.rating.toFixed(1)} out of 5`}>★ {job.rating.toFixed(1)}</span>
              <ArrowRight size={16} className="work-arrow" />
            </Link>
          </li>
        ))}
      </ol>

      {filtered.length > INITIAL && !expanded && (
        <button className="mw-btn-outline" style={{ marginTop: '1.75rem' }} onClick={() => setExpanded(true)}>
          Show all {filtered.length} projects
        </button>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
.work-list { border-top: 1px solid var(--text-1); }
.work-list li { border-bottom: 1px solid var(--border); }
.work-list .work-more { display: none; }
.work-list.is-open .work-more { display: block; }
.work-list a { display: grid; grid-template-columns: 1fr 9.5rem 5rem 3.5rem 1rem; gap: 1.25rem; align-items: baseline; padding: 1.15rem 0.25rem; transition: background .15s ease; }
.work-list a:hover { background: var(--bg-raised); }
.work-title { font-family: var(--font-geist); font-size: 1rem; font-weight: 600; letter-spacing: 0; color: var(--text-1); line-height: 1.4; }
.work-desc { font-size: 0.88rem; color: var(--text-3); margin-top: 0.2rem; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.work-quote { margin-top: 0.5rem; font-family: var(--font-playfair); font-size: 1.02rem; color: var(--text-1); max-width: 70ch; }
.work-arrow { color: var(--text-4); align-self: center; transition: color .15s ease, transform .15s ease; }
.work-list a:hover .work-arrow { color: var(--accent); transform: translateX(2px); }
@media (max-width: 860px) {
  .work-list a { grid-template-columns: 1fr 1rem; row-gap: 0.4rem; }
  .work-cat, .work-date, .work-rating { grid-column: 1; display: inline; }
  .work-list a > div { grid-column: 1; }
  .work-arrow { grid-column: 2; grid-row: 1; }
  .work-cat { grid-row: 2; }
  .work-date, .work-rating { display: none; }
  .work-desc { -webkit-line-clamp: 2; }
}
` }} />
    </>
  )
}
