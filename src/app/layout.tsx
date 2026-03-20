import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://miraclewebsoft.com'),
  title: { default: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft', template: '%s | Miracle Websoft' },
  description: 'We build high-converting Shopify stores for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. 600+ projects. Top Rated Plus on Upwork. USA, UK and Australia.',
  keywords: ['Shopify agency', 'clothing brands', 'fashion Shopify', 'Shopify development', 'Shopify migration', 'Shopify CRO', 'Shopify app development'],
  authors: [{ name: 'Miracle Websoft', url: 'https://miraclewebsoft.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://miraclewebsoft.com',
    siteName: 'Miracle Websoft',
    title: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft',
    description: 'We build high-converting Shopify stores for clothing, fashion and apparel brands. 600+ projects. Top Rated Plus on Upwork.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miraclewebsoft',
    creator: '@miraclewebsoft',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://miraclewebsoft.com' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://miraclewebsoft.com/#organization',
      name: 'Miracle Websoft',
      url: 'https://miraclewebsoft.com',
      logo: 'https://miraclewebsoft.com/logo.png',
      description: 'Specialist Shopify development agency for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. Based in India, serving USA, UK and Australia.',
      foundingDate: '2015',
      email: 'karam@miraclewebsoft.com',
      telephone: '+916239269736',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajpura',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'India' },
      ],
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 14 },
      knowsAbout: [
        'Shopify development',
        'Shopify app development',
        'Shopify migration',
        'Shopify CRO',
        'fashion ecommerce',
        'clothing brand websites',
        'Shopify speed optimization',
        'TikTok Shop integration',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shopify Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Shopify Development', url: 'https://miraclewebsoft.com/services/shopify-development-clothing-brands' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify App Development', url: 'https://miraclewebsoft.com/services/shopify-app-development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Migration', url: 'https://miraclewebsoft.com/services/shopify-migration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRO & Speed Optimization', url: 'https://miraclewebsoft.com/services/shopify-cro-speed' } },
        ],
      },
      founder: {
        '@type': 'Person',
        name: 'Karam Singh',
        jobTitle: 'Founder & Shopify Expert',
        url: 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
        sameAs: [
          'https://www.linkedin.com/in/ecommerce-experts/',
          'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
        ],
      },
      sameAs: [
        'https://www.upwork.com/agencies/shopifyexpertsdevelopers/',
        'https://www.shopify.com/partners/directory/partner/miracle-websoft1',
        'https://clutch.co/profile/miracle-websoft',
        'https://www.designrush.com/agency/profile/miracle-websoft',
        'https://in.linkedin.com/company/shopify-experts-miracle-websoft',
        'https://www.facebook.com/miraclewebsoft/',
        'https://www.instagram.com/miracle_websoft/',
        'https://x.com/miraclewebsoft',
        'https://apps.shopify.com/partners/miracle-websoft1',
        'https://www.trustpilot.com/review/miraclewebsoft.com',
        'https://techbehemoths.com/company/miracle-websoft',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '600',
        bestRating: '5',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://miraclewebsoft.com/#website',
      url: 'https://miraclewebsoft.com',
      name: 'Miracle Websoft',
      publisher: { '@id': 'https://miraclewebsoft.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
