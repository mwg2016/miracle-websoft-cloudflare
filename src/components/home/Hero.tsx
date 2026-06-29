import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Star } from 'lucide-react'

const storeProblems = [
  'Slow mobile store',
  'Traffic but few sales',
  'Messy apps or theme',
  'Migration to Shopify',
]

const reviewSteps = [
  'Send your store URL and tell us what feels stuck.',
  'Karam reviews speed, product pages, apps and checkout friction.',
  'You get clear next steps, even if you only need small fixes.',
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden mw-noise mw-grid"
      style={{
        background: 'linear-gradient(135deg, #10100f 0%, #090909 48%, #101116 100%)',
        backgroundImage:
          'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 38%), linear-gradient(315deg, rgba(108,99,255,0.12) 0%, transparent 42%)',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.25rem',
        paddingBottom: '2.75rem',
      }}
    >
      <div className="mw-container relative" style={{ zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.38fr) minmax(320px, 0.86fr)',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="hero-grid"
        >
          <div>
            <div className="mw-rise mw-rise-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1.35rem', padding: '0.42rem 0.8rem', borderRadius: '999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 16px rgba(16,185,129,0.75)' }} />
              <span style={{ color: 'rgba(255,255,255,0.74)', fontSize: '0.76rem', fontWeight: 600 }}>Friendly Shopify help from Karam and team</span>
            </div>

            <h1
              className="mw-rise mw-rise-2"
              style={{
                color: '#fff',
                marginBottom: '1.25rem',
                fontWeight: 500,
                maxWidth: '760px',
              }}
            >
              Your Shopify store<br />
              should feel easy<br />
              <span className="mw-italic mw-italic--accent">to buy from.</span>
            </h1>

            <p
              className="mw-rise mw-rise-3"
              style={{
                fontSize: 'clamp(1.02rem, 1.35vw, 1.2rem)',
                color: 'var(--text-2)',
                lineHeight: 1.64,
                maxWidth: '620px',
                marginBottom: '1.1rem',
                fontWeight: 400,
              }}
            >
              If your site is slow, confusing on mobile, hard to update, or getting visitors who do not buy, we will help you understand what is wrong and what to fix first. No pressure, no confusing tech talk, just practical Shopify advice.
            </p>

            <div className="mw-rise mw-rise-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.45rem' }}>
              {storeProblems.map((problem) => (
                <span key={problem} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.48rem 0.72rem', borderRadius: '999px', background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.72)', fontSize: '0.8rem', lineHeight: 1 }}>
                  <CheckCircle2 size={13} style={{ color: '#10B981' }} />
                  {problem}
                </span>
              ))}
            </div>

            <div className="mw-rise mw-rise-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <Link href="/contact" className="mw-btn-primary" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
                Get a Free Store Review <ArrowRight size={16} />
              </Link>
              <Link href="/work" className="mw-btn-outline" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
                See Recent Shopify Work
              </Link>
            </div>
            <p className="mw-rise mw-rise-5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.6 }}>
              You will hear back within 24 hours with honest next steps. If your store only needs a few quick fixes, we will tell you that.
            </p>
          </div>

          <aside className="mw-rise mw-rise-3 hero-aside" style={{ paddingTop: '0.2rem' }}>
            <div
              style={{
                position: 'relative',
                padding: '1.5rem',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.055)',
                border: '1px solid rgba(255,255,255,0.11)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.34)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.35rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(108,99,255,0.35), rgba(16,185,129,0.18))', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 800 }}>K</span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    Karam Singh
                    <Sparkles size={13} style={{ color: '#FBBF24' }} />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.56)', fontSize: '0.78rem', lineHeight: 1.45 }}>
                    Founder & Shopify expert. Replies personally.
                  </p>
                </div>
              </div>

              <div style={{ padding: '1.1rem', borderRadius: '14px', background: 'rgba(10,10,10,0.45)', border: '1px solid rgba(255,255,255,0.07)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#FBBF24', marginBottom: '0.7rem' }} aria-label="Five star review">
                  {[1, 2, 3, 4, 5].map((item) => <Star key={item} size={13} fill="currentColor" />)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', lineHeight: 1.65, fontStyle: 'italic' }}>
                  &ldquo;Very professional and responsive. Karam helped us improve the site and made the process easy to understand.&rdquo;
                </p>
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.42)', fontWeight: 700, letterSpacing: '0.11em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  What happens next
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.72rem' }}>
                  {reviewSteps.map((step, i) => (
                    <div key={step} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(16,185,129,0.13)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.68rem', fontWeight: 800 }}>
                        {i + 1}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.66)', fontSize: '0.82rem', lineHeight: 1.55 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1rem' }}>
                {[
                  { v: '600+', l: 'Shopify projects' },
                  { v: '98%+', l: 'Job success' },
                ].map((s) => (
                  <div key={s.l} style={{ padding: '0.85rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.7rem', marginTop: '0.22rem' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                <span className="mw-pill mw-pill--accent" style={{ fontSize: '0.7rem', padding: '0.34rem 0.65rem' }}>Shopify Verified Partner</span>
                <span className="mw-pill" style={{ fontSize: '0.7rem', padding: '0.34rem 0.65rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><MessageCircle size={11} /> Direct reply</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mw-rise mw-rise-6 hero-trust-row" style={{ marginTop: '2.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.78rem' }}>Serving Shopify merchants in the USA, UK, Australia and worldwide</span>
          <span style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.78rem' }}>No hard sell. Just clear next steps.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-aside {
            order: 2;
            padding-top: 0 !important;
          }
          .hero-trust-row {
            align-items: flex-start !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}
