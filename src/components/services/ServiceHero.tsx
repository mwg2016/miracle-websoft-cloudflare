import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'

type Cta = { label: string; href: string }
type BreadcrumbItem = { label: string; href?: string }

export const TEARDOWN_CTA: Cta = { label: 'Get a free store teardown', href: '/free-store-audit' }
export const BOOK_CTA: Cta = { label: 'Book a 15-min call', href: '/book' }

export const DEFAULT_PROOF: ReactNode[] = [
  <><strong>4.9★</strong> on Clutch</>,
  <><strong>Top Rated Plus</strong> on Upwork</>,
  <><strong>700+</strong> projects since 2015</>,
]

interface Props {
  breadcrumbItems?: BreadcrumbItem[]
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  /** Short scannable facts under the lede (e.g. scope, timeline). */
  bullets?: string[]
  primary?: Cta
  secondary?: Cta | null
  proof?: ReactNode[]
  /** Right-hand column (sample artefact, steps, price card…). */
  aside?: ReactNode
}

/**
 * Shared hero for /services/** pages: one promise, one primary action
 * (free teardown), one secondary (15-min call), and proof next to the buttons.
 */
export default function ServiceHero({
  breadcrumbItems,
  eyebrow,
  title,
  lede,
  bullets,
  primary = TEARDOWN_CTA,
  secondary = BOOK_CTA,
  proof = DEFAULT_PROOF,
  aside,
}: Props) {
  const isHash = (href: string) => href.startsWith('#')
  return (
    <section style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="mw-container" style={{ paddingTop: '1.5rem' }}>
        {breadcrumbItems && (
          <div style={{ marginBottom: '2rem' }}>
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}
        <div className={aside ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 lg:gap-16 items-center' : ''}>
          <div style={{ maxWidth: aside ? undefined : '52rem' }}>
            <p className="mw-eyebrow">{eyebrow}</p>
            <h1 className="mw-hero-title" style={{ maxWidth: '20ch' }}>{title}</h1>
            <p className="home-lede" style={{ maxWidth: '54ch' }}>{lede}</p>
            {bullets && bullets.length > 0 && (
              <ul className="offer-list" style={{ marginTop: '1.5rem', gap: '0.55rem' }}>
                {bullets.map((b) => <li key={b} style={{ fontSize: '0.95rem' }}>{b}</li>)}
              </ul>
            )}
            <div className="flex flex-col sm:flex-row gap-3" style={{ marginTop: '2rem' }}>
              {isHash(primary.href) ? (
                <a href={primary.href} className="mw-btn-accent" style={{ minHeight: 52, padding: '0 1.4rem', fontSize: '0.98rem' }}>
                  {primary.label} <ArrowRight size={17} />
                </a>
              ) : (
                <Link href={primary.href} className="mw-btn-accent" style={{ minHeight: 52, padding: '0 1.4rem', fontSize: '0.98rem' }}>
                  {primary.label} <ArrowRight size={17} />
                </Link>
              )}
              {secondary && (isHash(secondary.href) ? (
                <a href={secondary.href} className="mw-btn-outline" style={{ minHeight: 52, padding: '0 1.4rem', fontSize: '0.98rem' }}>
                  {secondary.label}
                </a>
              ) : (
                <Link href={secondary.href} className="mw-btn-outline" style={{ minHeight: 52, padding: '0 1.4rem', fontSize: '0.98rem' }}>
                  {secondary.label}
                </Link>
              ))}
            </div>
            {proof.length > 0 && (
              <ul className="home-proof">
                {proof.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}
          </div>
          {aside}
        </div>
      </div>
    </section>
  )
}

/** Hairline "how it starts" card used as a hero aside. */
export function HeroSteps({ label = 'How this starts', steps }: { label?: string; steps: { title: string; body: string }[] }) {
  return (
    <aside className="audit-form-card" aria-label={label} style={{ boxShadow: 'none' }}>
      <p className="mw-num" style={{ marginBottom: '0.75rem' }}>{label.toUpperCase()}</p>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title} style={{ display: 'grid', gridTemplateColumns: '2.25rem 1fr', padding: '0.95rem 0', borderTop: '1px solid var(--border)' }}>
            <span className="mw-num" style={{ paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
            <span>
              <span style={{ display: 'block', color: 'var(--text-1)', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.35 }}>{s.title}</span>
              <span style={{ display: 'block', color: 'var(--text-3)', fontSize: '0.86rem', lineHeight: 1.5, marginTop: '0.2rem' }}>{s.body}</span>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  )
}

/** Plain section heading block: eyebrow + h2 + optional intro, left-aligned. */
export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="mw-section-header">
      <p className="mw-eyebrow">{eyebrow}</p>
      <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>{title}</h2>
      {intro && <p style={{ marginTop: '1rem', fontSize: '1.02rem', maxWidth: '60ch' }}>{intro}</p>}
    </div>
  )
}

/** Numbered hairline list — replaces icon-tile card grids. */
export function NumberedList({ items, columns = 2 }: { items: { title: string; body?: ReactNode }[]; columns?: 1 | 2 | 3 }) {
  const cols = columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : ''
  return (
    <ol className={`grid grid-cols-1 ${cols} gap-x-10`} style={{ borderTop: '1px solid var(--text-1)' }}>
      {items.map((it, i) => (
        <li key={it.title} style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr', padding: '1.35rem 0', borderBottom: '1px solid var(--border)' }}>
          <span className="mw-num" style={{ paddingTop: 3 }}>{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3 style={{ fontSize: '1.08rem', marginBottom: it.body ? '0.4rem' : 0 }}>{it.title}</h3>
            {it.body && <p style={{ fontSize: '0.93rem', color: 'var(--text-2)' }}>{it.body}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Final quote section: copy + proof on the left, the existing ServiceContactForm on the right. */
export function QuoteSection({ eyebrow = 'Prefer a written quote?', title, body, children }: { eyebrow?: string; title: ReactNode; body: ReactNode; children: ReactNode }) {
  return (
    <section id="get-quote" className="mw-section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)' }}>
      <div className="mw-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="mw-eyebrow">{eyebrow}</p>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', marginBottom: '1.25rem' }}>{title}</h2>
            <p style={{ fontSize: '1.02rem', maxWidth: '46ch' }}>{body}</p>
            <dl className="stats" style={{ marginTop: '2rem', maxWidth: 420 }}>
              <div><dt>Projects since 2015</dt><dd style={{ fontSize: '2.2rem' }}>700+</dd></div>
              <div><dt>Clutch rating</dt><dd style={{ fontSize: '2.2rem' }}>4.9</dd></div>
            </dl>
            <p style={{ marginTop: '1.5rem', fontSize: '0.92rem', color: 'var(--text-3)' }}>
              Not ready to write it up?{' '}
              <Link href="/free-store-audit" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>Get a free teardown</Link>
              {' '}or{' '}
              <Link href="/book" style={{ color: 'var(--text-1)', textDecoration: 'underline', textUnderlineOffset: 3 }}>book a 15-min call</Link>.
            </p>
          </div>
          <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 8, padding: 'clamp(1.25rem,3vw,2.25rem)' }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Hairline scope card used as a hero aside: a short list plus a footnote. */
export function HeroScope({ label = 'Typical scope', items, foot }: { label?: string; items: string[]; foot?: ReactNode }) {
  return (
    <aside className="audit-form-card" aria-label={label} style={{ boxShadow: 'none' }}>
      <p className="mw-num" style={{ marginBottom: '0.75rem' }}>{label.toUpperCase()}</p>
      <ul>
        {items.map((it) => (
          <li key={it} style={{ display: 'grid', gridTemplateColumns: '1.5rem 1fr', padding: '0.8rem 0', borderTop: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text-1)', lineHeight: 1.45 }}>
            <span aria-hidden style={{ color: 'var(--text-4)' }}>–</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      {foot && <p style={{ borderTop: '1px solid var(--border)', paddingTop: '0.85rem', fontSize: '0.86rem', color: 'var(--text-3)' }}>{foot}</p>}
    </aside>
  )
}

/** Editorial service index (same pattern as the homepage service table). */
export function ServiceTable({ items }: { items: { name: string; line: string; price?: string; href: string }[] }) {
  return (
    <ul className="svc-table">
      {items.map((s, i) => (
        <li key={s.href}>
          <Link href={s.href}>
            <span className="mw-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="svc-name">{s.name}</span>
            <span className="svc-line">{s.line}</span>
            <span className="svc-price">{s.price ?? ''}</span>
            <ArrowUpRight size={18} className="svc-arrow" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Three (or so) hairline columns: title, small mono tag, description, short list. */
export function TypeColumns({ items }: { items: { title: string; tag?: string; desc: string; examples?: string[] }[] }) {
  return (
    <div className={`grid grid-cols-1 ${items.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`} style={{ borderTop: '1px solid var(--text-1)' }}>
      {items.map((t, i) => (
        <div key={t.title} className={i ? 'md:border-l md:pl-8' : ''} style={{ padding: '1.5rem 1.5rem 1.5rem 0', borderColor: 'var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-baseline justify-between gap-3 flex-wrap" style={{ marginBottom: '0.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 400, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{t.title}</h3>
            {t.tag && <span className="svc-price" style={{ whiteSpace: 'nowrap' }}>{t.tag}</span>}
          </div>
          <p style={{ fontSize: '0.93rem', marginBottom: t.examples ? '1rem' : 0 }}>{t.desc}</p>
          {t.examples && (
            <ul className="offer-list" style={{ marginTop: 0, gap: '0.4rem' }}>
              {t.examples.map((ex) => <li key={ex} style={{ fontSize: '0.9rem' }}>{ex}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
