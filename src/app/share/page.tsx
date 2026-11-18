import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ShareButtons from '@/components/share/ShareButtons'
import CopyCaption from '@/components/share/CopyCaption'
import { shareItems, type ShareItem } from '@/data/share'
import { breadcrumb, itemList, renderJsonLd, webPage, SITE_URL } from '@/lib/jsonld'

const TITLE = 'Share Miracle Websoft: Shopify & AI Services | Miracle Websoft'
const DESCRIPTION = 'Know a brand that needs Shopify, CRO or AI help? Share any Miracle Websoft service on Facebook, LinkedIn, X, WhatsApp or email in one click, with a ready-made caption.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/share` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/share`, type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const GROUPS: { key: ShareItem['group']; label: string }[] = [
  { key: 'Shopify', label: 'Shopify services' },
  { key: 'Growth', label: 'Growth & optimization' },
  { key: 'AI', label: 'AI services' },
  { key: 'Web', label: 'Web development' },
  { key: 'Company', label: 'About us' },
]

export default function SharePage() {
  const schema = [
    webPage({ name: 'Share Miracle Websoft services', description: DESCRIPTION, url: '/share', type: 'CollectionPage' }),
    itemList({
      name: 'Miracle Websoft services to share',
      items: shareItems.map(i => ({ name: i.title, url: i.href, description: i.caption })),
    }),
    breadcrumb([{ name: 'Home', url: '/' }, { name: 'Share', url: '/share' }]),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(schema) }} />

      <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="mw-container">
          <div className="mb-8"><Breadcrumb items={[{ label: 'Share' }]} /></div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
            <div>
              <p className="mw-eyebrow">Spread the word</p>
              <h1 className="mw-hero-title" style={{ maxWidth: '16ch' }}>
                Know someone who needs <span className="mw-mark">a better store?</span>
              </h1>
              <p style={{ marginTop: '1.25rem', fontSize: '1.08rem', maxWidth: '54ch', color: 'var(--text-2)' }}>
                Share any of our services with a friend, client or your network in one click. Every link comes with a
                ready-to-post caption you can copy.
              </p>
            </div>
            <div className="rv-panel">
              <div className="rv-panel-title">Share Miracle Websoft</div>
              <ShareButtons
                url={SITE_URL}
                text="Miracle Websoft: Shopify development, CRO and AI automation for ecommerce brands. 700+ projects delivered."
                hashtags={['Shopify', 'Ecommerce']}
                contentType="site"
                labels
              />
              <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '1rem' }}>
                Referring a paying client? <Link href="/referral" className="rv-link">Join the referral program</Link> and get rewarded.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
        <div className="mw-container">
          <nav className="rv-chips" aria-label="Jump to group" style={{ marginBottom: '2rem' }}>
            {GROUPS.map(g => <a key={g.key} href={`#share-${g.key.toLowerCase()}`} className="rv-chip">{g.label}</a>)}
          </nav>

          {GROUPS.map(g => {
            const items = shareItems.filter(i => i.group === g.key)
            if (!items.length) return null
            return (
              <div key={g.key} id={`share-${g.key.toLowerCase()}`} style={{ marginBottom: '3rem', scrollMarginTop: '6rem' }}>
                <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', marginBottom: '1.25rem' }}>{g.label}</h2>
                <div className="rv-grid">
                  {items.map(item => {
                    const url = `${SITE_URL}${item.href}`
                    return (
                      <article key={item.href} className="rv-card">
                        <div className="flex items-start justify-between gap-3">
                          <h3 style={{ fontSize: '1.05rem' }}>{item.title}</h3>
                          <Link href={item.href} className="rv-link inline-flex items-center gap-1" style={{ whiteSpace: 'nowrap' }} aria-label={`View ${item.title}`}>
                            View <ArrowUpRight size={13} />
                          </Link>
                        </div>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.6, flex: 1 }}>{item.caption}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-4)' }}>{item.hashtags.map(h => `#${h}`).join(' ')}</p>
                        <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                          <ShareButtons url={url} text={item.caption} hashtags={item.hashtags} contentType="service" size="sm" />
                          <div><CopyCaption text={`${item.caption}\n\n${url}\n\n${item.hashtags.map(h => `#${h}`).join(' ')}`} /></div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section style={{ padding: '4rem 0 5rem' }}>
        <div className="mw-container">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end" style={{ borderTop: '1px solid var(--text-1)', paddingTop: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', marginBottom: '0.75rem' }}>Worked with us already?</h2>
              <p style={{ color: 'var(--text-3)', maxWidth: '54ch' }}>A short review helps other store owners more than any share. It takes two minutes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/reviews/write" className="mw-btn-accent">Write a review <ArrowRight size={15} /></Link>
              <Link href="/reviews" className="mw-btn-outline">Read reviews</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
