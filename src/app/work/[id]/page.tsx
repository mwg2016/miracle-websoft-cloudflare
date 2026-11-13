import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { jobs, jobTitle, fixTypos, jobNarrative, workFaqs, isIndexableJob } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'
import FaqSection from '@/components/ui/FaqSection'

const UPWORK_FREELANCER = outboundHref('upwork', 'https://www.upwork.com/freelancers/shopifydeveloperupwork')

interface Props {
  params: Promise<{ id: string }>
}

// Meta description is composed so it does NOT duplicate the on-page overview
// (a self-duplicate adds no indexing value).
function metaDescription(job: (typeof jobs)[0]): string {
  const name = job.company || job.client
  const lead = `${job.category}${name ? ` for ${name}` : ''} — verified Shopify project by Miracle Websoft, ${job.completedDate}. `
  const room = Math.max(0, 158 - lead.length)
  const detail = job.description.length > room
    ? `${job.description.slice(0, Math.max(0, room - 1)).trimEnd()}…`
    : job.description
  return (lead + detail).slice(0, 160)
}

export async function generateStaticParams() {
  return jobs.map(job => ({ id: job.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const job = jobs.find(j => j.id === id)
  if (!job) return {}

  const title = `${jobTitle(job)} — Verified Shopify Project | Miracle Websoft`
  const description = metaDescription(job)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `https://miraclewebsoft.com/work/${id}`,
    },
    ...(isIndexableJob(job) ? {} : { robots: { index: false, follow: true } }),
  }
}

function CaseStudySection({ title, body }: { title: string; body?: string }) {
  if (!body) return null
  return (
    <div className="wd-block">
      <h2 className="wd-h2">{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function JsonLd({ job }: { job: (typeof jobs)[0] }) {
  const cs = job.caseStudy
  const schema: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: jobTitle(job),
      description: jobNarrative(job),
      ...(job.tags.length ? { keywords: job.tags.join(', ') } : {}),
      ...(cs?.screenshots?.length ? { image: cs.screenshots.map(s => `https://miraclewebsoft.com${s.src}`) } : {}),
      provider: {
        '@type': 'Organization',
        name: 'Miracle Websoft',
        url: 'https://miraclewebsoft.com',
        founder: { '@type': 'Person', name: 'Karam Singh' },
      },
      serviceType: job.category,
      areaServed: 'Worldwide',
      url: `https://miraclewebsoft.com/work/${job.id}`,
    },
  ]

  if (job.review && job.rating >= 4) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'Review',
      reviewBody: job.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: job.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: job.completedDate,
      author: { '@type': 'Person', name: job.client || 'Verified Upwork Client' },
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Miracle Websoft',
        url: 'https://miraclewebsoft.com',
      },
    })
  }

  // BreadcrumbList for AEO
  schema.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://miraclewebsoft.com' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://miraclewebsoft.com/work' },
      { '@type': 'ListItem', position: 3, name: jobTitle(job), item: `https://miraclewebsoft.com/work/${job.id}` },
    ],
  })

  // NOTE: the FAQPage schema for this project is emitted by the visible
  // <FaqSection> at the bottom of the page (so on-page content and schema stay
  // in sync). It is intentionally NOT duplicated here.

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function JobPage({ params }: Props) {
  const { id } = await params
  const job = jobs.find(j => j.id === id)
  if (!job) notFound()

  const displayTitle = jobTitle(job)
  const cs = job.caseStudy
  const techList = cs?.techStack?.length ? cs.techStack : job.tags
  const clientName = job.company && job.company !== job.client ? job.company : job.client
  const relatedJobs = jobs
    .filter(j => j.id !== job.id && j.category === job.category && j.rating >= 4.5)
    .slice(0, 3)
  const stars = Math.round(job.rating)

  return (
    <>
      <JsonLd job={job} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '3rem' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Work', href: '/work' }, { label: displayTitle }]} /></div>
          <p className="mw-eyebrow">{job.category} · Upwork project</p>
          <h1 className="mw-hero-title" style={{ maxWidth: '22ch' }}>{displayTitle}</h1>
          <dl className="wd-facts">
            <div><dt>Completed</dt><dd>{job.completedDate}</dd></div>
            {clientName && <div><dt>Client</dt><dd>{clientName}</dd></div>}
            {job.rating > 0 && <div><dt>Client rating</dt><dd>{job.rating.toFixed(1)} / 5</dd></div>}
            <div><dt>Category</dt><dd>{job.category}</dd></div>
          </dl>
        </div>
      </section>

      {job.review && (
        <section style={{ background: 'var(--bg-deep)', padding: 'clamp(3rem, 6vw, 4.5rem) 0' }}>
          <div className="mw-container">
            <figure style={{ maxWidth: '56rem' }}>
              <div className="review-stars" aria-label={`${job.rating} out of 5 stars`}>{'★'.repeat(stars)}<span style={{ color: 'var(--border-hover)' }}>{'★'.repeat(5 - stars)}</span></div>
              <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--text-1)', marginTop: '1rem' }}>
                &ldquo;{job.review}&rdquo;
              </blockquote>
              <figcaption className="mw-num" style={{ marginTop: '1.25rem' }}>
                {job.client || 'Verified Upwork client'} · Upwork review · {job.completedDate}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="mw-section" style={{ paddingTop: '4rem' }}>
        <div className="mw-container grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">
          <article className="wd-body">
            <div className="wd-block">
              <h2 className="wd-h2">Project overview</h2>
              <p>{fixTypos(job.description)}</p>
            </div>

            {job.devNotes && (
              <div className="wd-block">
                <h2 className="wd-h2">How we built it</h2>
                {fixTypos(job.devNotes).split(/\n{2,}/).map(p => p.trim()).filter(Boolean).map((para, i) => <p key={i}>{para}</p>)}
              </div>
            )}

            {cs && (
              <>
                <CaseStudySection title="About the client" body={cs.clientContext} />
                <CaseStudySection title="The challenge" body={cs.challenge} />
                <CaseStudySection title="What we built" body={cs.approach} />
                <CaseStudySection title="Process" body={cs.process} />
                <CaseStudySection title="Outcome" body={cs.outcome} />
                {cs.screenshots && cs.screenshots.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: '2rem' }}>
                    {cs.screenshots.map(shot => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" className="w-full h-auto" style={{ border: '1px solid var(--border)', borderRadius: '6px' }} />
                    ))}
                  </div>
                )}
              </>
            )}

            <div className="wd-block">
              <h2 className="wd-h2">Skills &amp; technologies</h2>
              <p className="mw-num" style={{ lineHeight: 1.9 }}>{techList.join('  ·  ')}</p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="mw-card" style={{ padding: '1.5rem' }}>
              <p className="mw-num" style={{ marginBottom: '0.75rem' }}>NEED SOMETHING SIMILAR?</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', marginBottom: '1.25rem' }}>
                Start with a free 5-minute video teardown of your store, or talk it through with Karam.
              </p>
              <Link href="/free-store-audit" className="mw-btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Get a free teardown <ArrowRight size={15} /></Link>
              <Link href="/book" className="mw-btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '0.6rem' }}>Book a 15-min call</Link>
            </div>
            <dl className="wd-side">
              <div><dt>Shopify projects since 2015</dt><dd>650+</dd></div>
              <div><dt>Upwork job success</dt><dd>98%</dd></div>
              <div><dt>Upwork status</dt><dd>Top Rated Plus</dd></div>
            </dl>
            <a href={UPWORK_FREELANCER} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1" style={{ fontSize: '0.9rem', color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              See this on our Upwork profile <ArrowUpRight size={13} />
            </a>
          </aside>
        </div>
      </section>

      {relatedJobs.length > 0 && (
        <section style={{ paddingBottom: '5rem' }}>
          <div className="mw-container">
            <p className="mw-eyebrow">More {job.category.toLowerCase()} work</p>
            <ul className="wd-related">
              {relatedJobs.map(rel => (
                <li key={rel.id}>
                  <Link href={`/work/${rel.id}`}>
                    <span className="mw-num">{rel.completedDate}</span>
                    <h3>{jobTitle(rel)}</h3>
                    <p>{fixTypos(rel.description).slice(0, 110)}…</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/work" className="inline-flex items-center gap-1.5" style={{ marginTop: '1.5rem', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-1)' }}>
              <ArrowLeft size={14} /> All projects
            </Link>
          </div>
        </section>
      )}

      <FaqSection faqs={workFaqs(job)} heading="Questions about this project" eyebrow="FAQ" />

      <style dangerouslySetInnerHTML={{ __html: `
.wd-facts { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 2.25rem; border-top: 1px solid var(--text-1); border-bottom: 1px solid var(--border); max-width: 64rem; }
.wd-facts div { padding: 1rem 1.25rem 1rem 0; }
.wd-facts div + div { padding-left: 1.25rem; border-left: 1px solid var(--border); }
.wd-facts dt { font-family: var(--font-geist-mono); font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-4); }
.wd-facts dd { font-family: var(--font-playfair); font-size: clamp(1.1rem, 1.8vw, 1.4rem); color: var(--text-1); margin-top: 0.25rem; overflow-wrap: anywhere; }
@media (max-width: 700px) { .wd-facts { grid-template-columns: 1fr 1fr; } .wd-facts div:nth-child(3) { padding-left: 0; border-left: 0; } .wd-facts div:nth-child(n+3) { border-top: 1px solid var(--border); } }
.wd-body { max-width: 68ch; }
.wd-block { margin-bottom: 2.5rem; }
.wd-h2 { font-size: clamp(1.4rem, 2.2vw, 1.75rem); margin-bottom: 0.85rem; }
.wd-body p { color: var(--text-2); font-size: 1.02rem; line-height: 1.8; }
.wd-body p + p { margin-top: 1rem; }
.wd-side { border-top: 1px solid var(--text-1); }
.wd-side div { display: flex; justify-content: space-between; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.wd-side dt { color: var(--text-3); }
.wd-side dd { font-weight: 600; color: var(--text-1); }
.wd-related { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--text-1); margin-top: 1.5rem; }
.wd-related li + li { border-left: 1px solid var(--border); }
.wd-related a { display: block; padding: 1.25rem 1.25rem 1.25rem 0; height: 100%; }
.wd-related li + li a { padding-left: 1.25rem; }
.wd-related a:hover h3 { text-decoration: underline; text-underline-offset: 3px; }
.wd-related h3 { font-size: 1.15rem; margin: 0.5rem 0; }
.wd-related p { font-size: 0.9rem; color: var(--text-3); }
@media (max-width: 760px) { .wd-related { grid-template-columns: 1fr; } .wd-related li + li { border-left: 0; border-top: 1px solid var(--border); } .wd-related li + li a { padding-left: 0; } }
` }} />
    </>
  )
}
