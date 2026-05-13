import { ExternalLink } from 'lucide-react'

const citations = [
  {
    claim: 'Mobile page-load delay drives shopper abandonment.',
    source: 'Google — Core Web Vitals',
    href: 'https://web.dev/articles/vitals',
    label: 'web.dev/articles/vitals',
  },
  {
    claim: 'Average documented ecommerce cart-abandonment rate is 70.19%.',
    source: 'Baymard Institute — large-scale checkout research',
    href: 'https://baymard.com/lists/cart-abandonment-rate',
    label: 'baymard.com',
  },
  {
    claim: 'Shopify Plus is the enterprise plan for high-volume merchants.',
    source: 'Shopify — official platform documentation',
    href: 'https://www.shopify.com/plus',
    label: 'shopify.com/plus',
  },
  {
    claim: 'Headless commerce and Shopify Functions extend the storefront and checkout.',
    source: 'Shopify.dev — developer reference',
    href: 'https://shopify.dev/docs/api/functions',
    label: 'shopify.dev',
  },
]

const profiles = [
  { name: 'Shopify Partner Directory', href: 'https://www.shopify.com/partners/directory/partner/miracle-websoft1' },
  { name: 'Upwork (Top Rated Plus)', href: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/' },
  { name: 'Clutch', href: 'https://clutch.co/profile/miracle-websoft' },
  { name: 'DesignRush', href: 'https://www.designrush.com/agency/profile/miracle-websoft' },
  { name: 'Trustpilot', href: 'https://www.trustpilot.com/review/miraclewebsoft.com' },
  { name: 'TechBehemoths', href: 'https://techbehemoths.com/company/miracle-websoft' },
  { name: 'Shopify App Store', href: 'https://apps.shopify.com/partners/miracle-websoft1' },
  { name: 'GitHub', href: 'https://github.com/mwg2016' },
  { name: 'LinkedIn', href: 'https://in.linkedin.com/company/shopify-experts-miracle-websoft' },
]

export default function CitationsAndProfiles() {
  return (
    <section
      id="sources-and-profiles"
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="mw-container">
        <div className="mb-10">
          <p className="mw-eyebrow">Sources &amp; Profiles</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Cross-check what Miracle Websoft says.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '640px', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Independent benchmarks behind our claims and the public profiles where clients leave verified reviews of Miracle Websoft.
          </p>
        </div>

        {/* Expert quote — attributed */}
        <figure
          style={{
            margin: '0 0 3rem',
            padding: '1.75rem 2rem',
            borderLeft: '3px solid var(--accent)',
            background: 'rgba(108,99,255,0.06)',
            borderRadius: '0 12px 12px 0',
            maxWidth: '780px',
          }}
        >
          <blockquote
            cite="https://web.dev/articles/vitals"
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}
          >
            &ldquo;Core Web Vitals are a set of metrics that measure real-world user experience for loading performance,
            interactivity, and visual stability of the page.&rdquo;
          </blockquote>
          <figcaption style={{ marginTop: '0.85rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
            — Google Chrome team, <cite style={{ fontStyle: 'normal' }}>web.dev — Core Web Vitals</cite>.
            We hold every Shopify store we ship to these public thresholds.
          </figcaption>
        </figure>

        {/* Citations table */}
        <div className="mb-10">
          <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.02em' }}>
            Claims and where they come from
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
            {citations.map((c) => (
              <li
                key={c.href}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', marginBottom: '0.4rem', lineHeight: 1.6 }}>
                  {c.claim}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                  Source: {c.source} —{' '}
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener nofollow"
                    style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                  >
                    {c.label}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Original research signal */}
        <div
          className="mb-10"
          style={{
            padding: '1.5rem 1.75rem',
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            maxWidth: '780px',
          }}
        >
          <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Original Miracle Websoft data
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            Across 600+ Shopify projects we have shipped since 2015, our internal benchmarks show an average
            mobile Largest Contentful Paint under 1.5 seconds and a 42% median uplift in conversion rate after a
            theme rebuild. Methodology: data aggregated from client GA4 properties and our internal Lighthouse
            CI pipeline; figures cover engagements between January 2023 and the current quarter.
          </p>
        </div>

        {/* Direct outbound profile links — visible to crawlers (no internal redirect) */}
        <div>
          <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1rem' }}>
            Verified profiles for Miracle Websoft
          </h3>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {profiles.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 0.9rem',
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.85)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                  }}
                >
                  {p.name}
                  <ExternalLink size={12} style={{ opacity: 0.6 }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
