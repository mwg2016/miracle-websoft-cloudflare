import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
    // ── Organisation ──────────────────────────────────────────────────────────
    {
      '@type': 'ProfessionalService',
      '@id': 'https://miraclewebsoft.com/#organization',
      name: 'Miracle Websoft',
      url: 'https://miraclewebsoft.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://miraclewebsoft.com/icon-512.png',
        width: 512,
        height: 512,
      },
      description: 'Specialist Shopify development agency for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. Based in India, serving USA, UK and Australia.',
      foundingDate: '2015',
      email: 'karam@miraclewebsoft.com',
      telephone: '+916239269736',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'India' },
      ],
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 16 },
      knowsAbout: [
        'Shopify development', 'Shopify app development', 'Shopify migration',
        'Shopify CRO', 'fashion ecommerce', 'clothing brand websites',
        'Shopify speed optimization', 'TikTok Shop integration',
        'white label Shopify development', 'Shopify agency',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shopify Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Shopify Development',    url: 'https://miraclewebsoft.com/services/shopify/development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify App Development',       url: 'https://miraclewebsoft.com/services/shopify-app-development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Migration',             url: 'https://miraclewebsoft.com/services/shopify-migration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRO & Speed Optimization',     url: 'https://miraclewebsoft.com/services/shopify-cro-speed' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'White Label Shopify Development', url: 'https://miraclewebsoft.com/white-label' } },
        ],
      },
      founder: {
        '@type': 'Person',
        name: 'Karam Singh Mehra',
        jobTitle: 'Founder & Lead Shopify Expert',
        url: 'https://miraclewebsoft.com/bio/owner',
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

    // ── WebSite + SearchAction (enables Google Sitelinks Search Box) ──────────
    {
      '@type': 'WebSite',
      '@id': 'https://miraclewebsoft.com/#website',
      url: 'https://miraclewebsoft.com',
      name: 'Miracle Websoft',
      description: 'Shopify agency for clothing and fashion brands — custom development, migrations, app development, and CRO.',
      publisher: { '@id': 'https://miraclewebsoft.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://miraclewebsoft.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },

    // ── SiteNavigationElement — helps Google understand site structure ─────────
    {
      '@type': 'ItemList',
      '@id': 'https://miraclewebsoft.com/#navigation',
      name: 'Main Navigation',
      itemListElement: [
        { '@type': 'SiteLinksSearchBox', position: 1, url: 'https://miraclewebsoft.com', name: 'Miracle Websoft' },
        { '@type': 'ListItem', position: 2,  item: { '@id': 'https://miraclewebsoft.com/services',                                     name: 'Services' } },
        { '@type': 'ListItem', position: 3,  item: { '@id': 'https://miraclewebsoft.com/case-studies',                                  name: 'Case Studies' } },
        { '@type': 'ListItem', position: 4,  item: { '@id': 'https://miraclewebsoft.com/about',                                         name: 'About' } },
        { '@type': 'ListItem', position: 5,  item: { '@id': 'https://miraclewebsoft.com/blog',                                          name: 'Blog' } },
        { '@type': 'ListItem', position: 6,  item: { '@id': 'https://miraclewebsoft.com/contact',                                       name: 'Contact' } },
        { '@type': 'ListItem', position: 7,  item: { '@id': 'https://miraclewebsoft.com/careers',                                       name: 'Careers' } },
        { '@type': 'ListItem', position: 8,  item: { '@id': 'https://miraclewebsoft.com/white-label',                                   name: 'White Label Development' } },
        { '@type': 'ListItem', position: 9,  item: { '@id': 'https://miraclewebsoft.com/referral',                                      name: 'Referral Program' } },
        { '@type': 'ListItem', position: 10, item: { '@id': 'https://miraclewebsoft.com/services/shopify/development',  name: 'Shopify Development' } },
        { '@type': 'ListItem', position: 11, item: { '@id': 'https://miraclewebsoft.com/services/shopify-app-development',              name: 'Shopify App Development' } },
        { '@type': 'ListItem', position: 12, item: { '@id': 'https://miraclewebsoft.com/services/shopify-migration',                    name: 'Shopify Migration' } },
        { '@type': 'ListItem', position: 13, item: { '@id': 'https://miraclewebsoft.com/services/shopify-cro-speed',                    name: 'CRO & Speed Optimisation' } },
      ],
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
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=854778784223732&ev=PageView&noscript=1" alt="" />
        </noscript>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* ── Analytics (deferred – no render-blocking) ──────────────────── */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YT1GLKW8L5" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YT1GLKW8L5');`}</Script>
        <Script id="clarity" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","mbw7qvm2wb");`}</Script>
        <Script id="meta-pixel" strategy="lazyOnload">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','854778784223732');fbq('track','PageView');`}</Script>
      </body>
    </html>
  )
}
