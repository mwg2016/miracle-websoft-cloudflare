import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Clock, Eye } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ReviewForm from '@/components/reviews/ReviewForm'
import { SITE_URL } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Write a Review of Miracle Websoft',
  description: 'Worked with Miracle Websoft on your Shopify store? Share your experience. Every review is checked against a real project before it is published.',
  alternates: { canonical: `${SITE_URL}/reviews/write` },
  // Form page: keep it out of the index so it doesn't compete with /reviews.
  robots: { index: false, follow: true },
}

export default function WriteReviewPage() {
  return (
    <section style={{ paddingTop: 'clamp(7.5rem, 11vw, 9rem)', paddingBottom: '5rem', background: 'var(--bg-deep)' }}>
      <div className="mw-container" style={{ maxWidth: 1040 }}>
        <div className="mb-6"><Breadcrumb items={[{ label: 'Reviews', href: '/reviews' }, { label: 'Write a review' }]} /></div>
        <div className="rv-detail-grid">
          <div className="rv-card" style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}>
            <p className="mw-eyebrow">Write a review</p>
            <h1 style={{ fontSize: 'clamp(32px, 4.2vw, 52px)', marginBottom: '0.5rem' }}>How was working with us?</h1>
            <p style={{ color: 'var(--text-2)', marginBottom: '1.75rem', maxWidth: '54ch' }}>
              Your honest review helps other store owners decide, and tells us what to keep doing (or fix).
            </p>
            <ReviewForm />
          </div>
          <aside className="rv-aside">
            <div className="rv-panel">
              <div className="rv-panel-title">How reviews work</div>
              <ul className="rv-howto">
                <li><ShieldCheck size={18} /><span><strong>Verified first.</strong> We check each review against a real client project before it goes live.</span></li>
                <li><Clock size={18} /><span><strong>Published within ~1 business day</strong> once approved.</span></li>
                <li><Eye size={18} /><span><strong>Your email stays private.</strong> Only your name, company and country are shown.</span></li>
              </ul>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '1rem' }}>
                We publish negative reviews too. We only reject spam, abuse, or reviews we can&apos;t tie to a real project.
              </p>
              <Link href="/reviews" className="rv-link" style={{ display: 'inline-block', marginTop: '0.8rem' }}>← Back to all reviews</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
