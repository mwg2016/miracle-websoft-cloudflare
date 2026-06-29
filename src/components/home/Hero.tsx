import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden mw-noise mw-grid"
      style={{
        background: 'var(--bg)',
        backgroundImage:
          'radial-gradient(ellipse 75% 55% at 78% 35%, rgba(108,99,255,0.16) 0%, transparent 65%), radial-gradient(ellipse 60% 45% at 8% 90%, rgba(108,99,255,0.08) 0%, transparent 60%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
      }}
    >
      <div className="mw-container relative" style={{ zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.55fr) minmax(0, 1fr)',
            gap: '4rem',
            alignItems: 'end',
          }}
          className="hero-grid"
        >
          {/* LEFT: editorial headline + CTAs */}
          <div>
            <div className="mw-rise mw-rise-1" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <span className="mw-num">/01 — For Shopify store owners ready to grow</span>
            </div>

            <h1
              className="mw-rise mw-rise-2"
              style={{
                color: '#fff',
                marginBottom: '2rem',
                fontWeight: 500,
              }}
            >
              Make your Shopify store<br />
              faster, clearer and<br />
              <span className="mw-italic mw-italic--accent">more profitable.</span>
            </h1>

            <p
              className="mw-rise mw-rise-3"
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'var(--text-2)',
                lineHeight: 1.55,
                maxWidth: '560px',
                marginBottom: '2.75rem',
                fontWeight: 400,
              }}
            >
              If your store is slow, hard to manage, or getting traffic that does not turn into sales, we help you fix the real blockers. Custom Shopify development, CRO, speed optimization, migrations and private apps from a Shopify specialist with 600+ projects delivered since 2015.
            </p>

            <div className="mw-rise mw-rise-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <Link href="/contact" className="mw-btn-primary" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
                Get Your Free Shopify Store Review <ArrowRight size={16} />
              </Link>
              <Link href="/work" className="mw-btn-outline" style={{ fontSize: '0.95rem', padding: '1.05rem 1.85rem' }}>
                See Revenue-Focused Work
              </Link>
            </div>
            <p className="mw-rise mw-rise-5" style={{ fontSize: '0.78rem', color: 'var(--text-4)', fontFamily: 'var(--font-geist-mono), monospace', letterSpacing: '0.04em' }}>
              Written recommendations &nbsp;·&nbsp; no pressure &nbsp;·&nbsp; reply within 24h
            </p>
          </div>

          {/* RIGHT: editorial proof card */}
          <aside className="mw-rise mw-rise-3 hero-aside" style={{ alignSelf: 'end' }}>
            <div
              style={{
                position: 'relative',
                padding: '1.75rem',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Accent corner notch */}
              <div style={{ position: 'absolute', top: '-1px', right: '-1px', padding: '0.4rem 0.7rem', background: 'var(--accent)', color: '#fff', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'var(--font-geist-mono), monospace', borderTopRightRadius: '20px', borderBottomLeftRadius: '12px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Sparkles size={11} /> Live</span>
              </div>

              <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-4)', fontFamily: 'var(--font-geist-mono), monospace', marginBottom: '1.25rem' }}>
                What merchants rely on us for
              </div>

              {/* Stat stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { v: '600+', l: 'Stores, fixes and Shopify projects delivered' },
                  { v: '98%+', l: 'Upwork job-success score' },
                  { v: '4.9 ★', l: 'Client review average across public profiles' },
                  { v: '10+ yrs', l: 'Focused Shopify execution since 2015' },
                ].map((s) => (
                  <div key={s.l} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.1rem' }}>
                    <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', fontWeight: 500, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      {s.v}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', textAlign: 'right', maxWidth: '180px', lineHeight: 1.4 }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                <span className="mw-pill mw-pill--accent" style={{ fontSize: '0.7rem', padding: '0.3rem 0.65rem' }}>Shopify Verified Partner</span>
                <span className="mw-pill" style={{ fontSize: '0.7rem', padding: '0.3rem 0.65rem' }}>Top Rated Plus · Upwork</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom marker — editorial */}
        <div className="mw-rise mw-rise-6" style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.75rem' }}>
          <span className="mw-num">USA · UK · AU · IN</span>
          <span className="mw-num" style={{ color: 'var(--text-3)' }}>Scroll to see how we improve stores ↓</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-aside {
            order: 2;
          }
        }
      `}</style>
    </section>
  )
}
