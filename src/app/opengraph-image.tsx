import { ImageResponse } from 'next/og'

export const alt = 'Miracle Websoft - Shopify development agency for ecommerce brands'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          color: '#ffffff',
          padding: '72px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 78% 22%, rgba(108,99,255,0.42), transparent 34%), radial-gradient(circle at 18% 84%, rgba(16,185,129,0.22), transparent 30%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 14,
                background: '#6C63FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                fontWeight: 800,
              }}
            >
              M
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: 0 }}>Miracle Websoft</span>
              <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.68)' }}>Shopify development agency since 2015</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              padding: '12px 18px',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 999,
              color: '#10B981',
              fontSize: 20,
              fontWeight: 700,
              background: 'rgba(16,185,129,0.10)',
            }}
          >
            600+ projects
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', maxWidth: 880 }}>
          <div style={{ color: '#A7A3FF', fontSize: 24, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 22 }}>
            Custom Shopify stores, apps, migrations and CRO
          </div>
          <div style={{ fontSize: 74, lineHeight: 1.03, fontWeight: 850, letterSpacing: 0 }}>
            Build a faster, higher-converting Shopify store.
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', gap: 18, color: 'rgba(255,255,255,0.72)', fontSize: 24 }}>
          <span>Top Rated Plus on Upwork</span>
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>-</span>
          <span>Shopify Verified Partner</span>
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>-</span>
          <span>USA, UK, Australia</span>
        </div>
      </div>
    ),
    size
  )
}
