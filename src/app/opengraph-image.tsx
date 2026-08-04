import { ImageResponse } from 'next/og'
import { LOGO_PNG_BASE64 } from '@/lib/logo-base64'

export const alt = 'Miracle Websoft - Ecommerce growth and AI technology agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const logoSrc = `data:image/png;base64,${LOGO_PNG_BASE64}`

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt=""
              width="116"
              height="48"
              style={{ width: 116, height: 48, objectFit: 'contain' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: 0 }}>Miracle Websoft</span>
              <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.68)' }}>Ecommerce growth and AI technology agency</span>
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
            650+ projects
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', maxWidth: 880 }}>
          <div style={{ color: '#A7A3FF', fontSize: 24, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 22 }}>
            Shopify, CRO, speed, AI automation and custom software
          </div>
          <div style={{ fontSize: 74, lineHeight: 1.03, fontWeight: 850, letterSpacing: 0 }}>
            Build faster stores and smarter operations.
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', gap: 18, color: 'rgba(255,255,255,0.72)', fontSize: 24 }}>
          <span>Top Rated Plus on Upwork</span>
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>-</span>
          <span>15,000+ hours delivered</span>
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>-</span>
          <span>USA, Canada, UK, Australia, Europe</span>
        </div>
      </div>
    ),
    size
  )
}
