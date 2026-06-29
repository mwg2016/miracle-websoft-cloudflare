import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miracle Websoft - Shopify Development Agency',
    short_name: 'Miracle Websoft',
    description:
      'Shopify development agency building custom stores, Shopify Plus builds, apps, migrations, CRO, and speed optimization for ecommerce brands.',
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
