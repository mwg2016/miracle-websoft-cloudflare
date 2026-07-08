import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miracle Websoft - Ecommerce Growth & AI Technology Agency',
    short_name: 'Miracle Websoft',
    description:
      'Ecommerce growth and AI technology agency for Shopify development, CRO, speed optimization, AI automation and custom web development.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6C63FF',
    categories: ['business', 'productivity', 'shopping'],
    lang: 'en',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
