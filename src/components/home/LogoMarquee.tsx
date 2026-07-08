const brands = [
  { name: 'Farmers Atelier', flag: '🇦🇹' },
  { name: 'OTAA',             flag: '🇦🇺' },
  { name: 'Shirtonomy',       flag: '🇸🇪' },
  { name: 'Buddha Trends',    flag: '🇺🇸' },
  { name: 'Momifa',           flag: '🇺🇸' },
  { name: 'Esparda',          flag: '🇮🇳' },
  { name: 'Shopify Plus',     flag: '◆' },
  { name: 'AI Automation',    flag: '◆' },
  { name: '650+ Projects',    flag: '✓' },
  { name: '15,000+ Hours',    flag: '✓' },
  { name: 'Verified Partner', flag: '✓' },
  { name: 'Top Rated · Upwork', flag: '★' },
  { name: 'Clutch · 4.9',     flag: '★' },
]

export default function LogoMarquee() {
  const row = [...brands, ...brands]

  return (
    <section
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, var(--bg-deep) 0%, transparent 8%, transparent 92%, var(--bg-deep) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div className="mw-container" style={{ marginBottom: '1.25rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-4)',
            textAlign: 'center',
          }}
        >
          Trusted by brands across <span style={{ color: 'var(--text-2)' }}>USA · Canada · UK · Australia · Europe</span>
        </p>
      </div>
      <div className="marquee-track">
        {row.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0 2.5rem',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: '1.2rem',
              fontWeight: 500,
              color: 'var(--text-2)',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '0.95rem', color: 'var(--accent)', fontFamily: 'var(--font-geist-mono), monospace' }}>{b.flag}</span>
            <span>{b.name}</span>
            <span style={{ marginLeft: '2.5rem', color: 'var(--text-4)' }}>—</span>
          </div>
        ))}
      </div>
    </section>
  )
}
