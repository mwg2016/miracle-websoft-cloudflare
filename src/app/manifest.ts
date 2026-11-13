import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Miracle Websoft - Shopify Development & CRO',
    short_name: 'Miracle Websoft',
    description:
      'Shopify development, conversion rate optimisation and speed work for ecommerce brands.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#F4F1EA',
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
