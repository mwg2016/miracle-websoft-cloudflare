import { ImageResponse } from 'next/og'
import { LOGO_PNG_BASE64 } from '@/lib/logo-base64'

export const alt = 'Miracle Websoft - Shopify development and CRO agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Matches the site: warm paper, ink type, one orange signal. Satori can't use
// CSS variables or next/font, so values are inlined and the serif falls back to Georgia.
export default async function Image() {
  const logoSrc = `data:image/png;base64,${LOGO_PNG_BASE64}`
  const ink = '#17150F'
  const muted = 'rgba(23,21,15,0.62)'

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F4F1EA', color: ink, padding: '64px 72px', fontFamily: 'Georgia, serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={logoSrc} alt="" width="96" height="40" style={{ width: 96, height: 40, objectFit: 'contain' }} />
            <span style={{ fontSize: 32, letterSpacing: -0.5 }}>Miracle Websoft</span>
          </div>
          <div style={{ display: 'flex', fontFamily: 'monospace', fontSize: 20, letterSpacing: 2, color: muted }}>SHOPIFY · CRO · SPEED</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2.5, maxWidth: 980 }}>
            More orders from the traffic you already have.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `2px solid ${ink}`, paddingTop: 26 }}>
          <div style={{ display: 'flex', gap: 34, fontFamily: 'Arial, sans-serif', fontSize: 24, color: muted }}>
            <span>700+ projects</span>
            <span>Top Rated Plus on Upwork</span>
          </div>
          <div style={{ display: 'flex', background: '#E04F25', color: '#fff', fontFamily: 'Arial, sans-serif', fontSize: 24, fontWeight: 700, padding: '14px 22px', borderRadius: 6, whiteSpace: 'nowrap' }}>
            Free store teardown →
          </div>
        </div>
      </div>
    ),
    size,
  )
}
