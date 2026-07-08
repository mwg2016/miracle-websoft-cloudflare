import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LeadTracker from '@/components/LeadTracker'
import IntentRouter from '@/components/IntentRouter'
import ClarityInit from '@/components/ClarityInit'
import NavigationProgress from '@/components/layout/NavigationProgress'
import StickyMobileCta from '@/components/layout/StickyMobileCta'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Miracle Websoft - Ecommerce growth and AI technology agency',
}

export const metadata: Metadata = {
  applicationName: 'Miracle Websoft',
  metadataBase: new URL('https://miraclewebsoft.com'),
  title: { default: 'Miracle Websoft — Ecommerce Growth & AI Technology Agency', template: '%s | Miracle Websoft' },
  description: 'Miracle Websoft is an ecommerce growth and AI technology agency. Shopify development, CRO, speed optimization, AI automation, OpenAI integrations and custom web development for global clients.',
  keywords: ['Miracle Websoft', 'ecommerce growth agency', 'Shopify development agency', 'Shopify Plus agency', 'Shopify CRO', 'Shopify speed optimization', 'AI agency', 'AI automation', 'AI business automation', 'custom web development', 'API integration services'],
  authors: [{ name: 'Miracle Websoft', url: 'https://miraclewebsoft.com' }],
  creator: 'Karam Singh Mehra',
  publisher: 'Miracle Websoft',
  category: 'Ecommerce growth and AI technology services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://miraclewebsoft.com',
    siteName: 'Miracle Websoft',
    title: 'Miracle Websoft — Ecommerce Growth & AI Technology Agency',
    description: 'Shopify development, CRO, speed optimization, AI automation and custom web development for ecommerce brands and growing businesses.',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miraclewebsoft',
    creator: '@miraclewebsoft',
    title: 'Miracle Websoft — Ecommerce Growth & AI Technology Agency',
    description: 'Shopify development, CRO, speed optimization, AI automation and custom web development.',
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: 'https://miraclewebsoft.com' },
}

const navigationItems = [
  { name: 'Home', url: 'https://miraclewebsoft.com' },
  { name: 'Services', url: 'https://miraclewebsoft.com/services' },
  { name: 'AI Services', url: 'https://miraclewebsoft.com/services/ai' },
  { name: 'Shopify Services', url: 'https://miraclewebsoft.com/services/shopify' },
  { name: 'Shopify Development', url: 'https://miraclewebsoft.com/services/shopify/development' },
  { name: 'Shopify App Development', url: 'https://miraclewebsoft.com/services/shopify-app-development' },
  { name: 'Shopify Migration', url: 'https://miraclewebsoft.com/services/shopify-migration' },
  { name: 'Conversion Rate Optimization', url: 'https://miraclewebsoft.com/services/conversion-rate-optimization' },
  { name: 'Shopify Speed Optimization', url: 'https://miraclewebsoft.com/services/shopify-speed-optimization' },
  { name: 'CRO & Speed Optimisation', url: 'https://miraclewebsoft.com/services/shopify-cro-speed' },
  { name: 'Custom Web Development', url: 'https://miraclewebsoft.com/services/custom-web-development' },
  { name: 'Industries', url: 'https://miraclewebsoft.com/industries' },
  { name: 'Pricing', url: 'https://miraclewebsoft.com/pricing' },
  { name: 'Work', url: 'https://miraclewebsoft.com/work' },
  { name: 'Reviews', url: 'https://miraclewebsoft.com/reviews' },
  { name: 'Case Studies', url: 'https://miraclewebsoft.com/case-studies' },
  { name: 'Resources', url: 'https://miraclewebsoft.com/resources' },
  { name: 'Blog', url: 'https://miraclewebsoft.com/blog' },
  { name: 'About', url: 'https://miraclewebsoft.com/about' },
  { name: 'Contact', url: 'https://miraclewebsoft.com/contact' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Organisation ──────────────────────────────────────────────────────────
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://miraclewebsoft.com/#organization',
      name: 'Miracle Websoft',
      alternateName: ['Miracle Websoft Pvt Ltd', 'Miracle Websoft Shopify Agency', 'Miracle Websoft AI Agency'],
      legalName: 'Miracle Websoft',
      url: 'https://miraclewebsoft.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://miraclewebsoft.com/icon-512.png',
        width: 512,
        height: 512,
        caption: 'Miracle Websoft logo',
      },
      image: 'https://miraclewebsoft.com/icon-512.png',
      slogan: 'Ecommerce growth and AI technology partner.',
      description: 'Miracle Websoft is an ecommerce growth and AI technology agency building Shopify stores, CRO improvements, speed optimization, AI automation, OpenAI integrations and custom web applications. Based in India, serving the USA, Canada, UK, Australia and Europe since 2015.',
      foundingDate: '2015',
      email: 'karam@miraclewebsoft.com',
      telephone: '+916239269736',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'karam@miraclewebsoft.com',
          telephone: '+916239269736',
          availableLanguage: ['English', 'Hindi', 'Punjabi'],
          areaServed: ['US', 'CA', 'GB', 'AU', 'EU', 'IN'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Place', name: 'Europe' },
        { '@type': 'Country', name: 'India' },
      ],
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 16 },
      knowsAbout: [
        'Shopify development', 'Shopify Plus development', 'Shopify app development', 'Shopify migration',
        'Shopify CRO', 'Shopify speed optimization', 'Shopify SEO', 'Shopify support',
        'AI automation', 'AI business automation', 'OpenAI integrations', 'AI chatbots',
        'AI customer support', 'AI internal tools', 'AI agents', 'AI website development',
        'custom web development', 'API integration services', 'fashion ecommerce',
        'TikTok Shop integration', 'white label Shopify development', 'ecommerce growth',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ecommerce Growth, AI and Web Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Services',                    url: 'https://miraclewebsoft.com/services/ai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Business Automation',        url: 'https://miraclewebsoft.com/services/ai/ai-business-automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'OpenAI Integrations',           url: 'https://miraclewebsoft.com/services/ai/openai-integrations' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Services',              url: 'https://miraclewebsoft.com/services/shopify' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Shopify Development',    url: 'https://miraclewebsoft.com/services/shopify/development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Plus Development',      url: 'https://miraclewebsoft.com/services/shopify/shopify-plus-development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify App Development',       url: 'https://miraclewebsoft.com/services/shopify-app-development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Migration',             url: 'https://miraclewebsoft.com/services/shopify-migration' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversion Rate Optimization',  url: 'https://miraclewebsoft.com/services/conversion-rate-optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Speed Optimization',    url: 'https://miraclewebsoft.com/services/shopify-speed-optimization' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRO & Speed Optimization',     url: 'https://miraclewebsoft.com/services/shopify-cro-speed' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Development',        url: 'https://miraclewebsoft.com/services/custom-web-development' } },
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
        'https://x.com/KaramSingh35',
        'https://apps.shopify.com/partners/miracle-websoft1',
        'https://www.trustpilot.com/review/miraclewebsoft.com',
        'https://techbehemoths.com/company/miracle-websoft',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '650',
        bestRating: '5',
      },
    },

    // ── WebSite + SearchAction (enables Google Sitelinks Search Box) ──────────
    {
      '@type': 'WebSite',
      '@id': 'https://miraclewebsoft.com/#website',
      url: 'https://miraclewebsoft.com',
      name: 'Miracle Websoft',
      description: 'Miracle Websoft — ecommerce growth and AI technology agency. Shopify development, CRO, speed optimization, AI automation and custom web development.',
      publisher: { '@id': 'https://miraclewebsoft.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://miraclewebsoft.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },

    // ── Navigation ItemList — helps crawlers understand canonical site structure.
    {
      '@type': 'ItemList',
      '@id': 'https://miraclewebsoft.com/#navigation',
      name: 'Main Navigation',
      itemListElement: navigationItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebPage',
          '@id': item.url,
          url: item.url,
          name: item.name,
        },
      })),
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers()
  const pathname = h.get('x-pathname') ?? ''
  const nonce = h.get('x-nonce') ?? undefined
  const isAdmin = pathname.startsWith('/admin')

  return (
    <html lang="en">
      <head>
        {/* Trusted Types default policy — must run before any script that touches innerHTML. */}
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: "if(window.trustedTypes&&trustedTypes.createPolicy){try{trustedTypes.createPolicy('default',{createHTML:s=>s,createScript:s=>s,createScriptURL:s=>s})}catch(e){}}",
          }}
        />
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
        <NavigationProgress />
        <ClarityInit />
        <Script id="gtm-init" nonce={nonce} strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PSP2DJDW');`}</Script>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSP2DJDW" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <LeadTracker />
        {!isAdmin && <Header />}
        {isAdmin ? children : <main id="main-content">{children}</main>}
        {!isAdmin && (
          <>
            <Footer />
            <IntentRouter />
            <StickyMobileCta />
          </>
        )}

        {/* ── Analytics (deferred – no render-blocking) ──────────────────── */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YT1GLKW8L5" nonce={nonce} strategy="lazyOnload" />
        <Script id="ga-init" nonce={nonce} strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YT1GLKW8L5');`}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18095762557" nonce={nonce} strategy="lazyOnload" />
        <Script id="gads-init" nonce={nonce} strategy="lazyOnload">{`gtag('config','AW-18095762557');`}</Script>
        <Script id="meta-pixel" nonce={nonce} strategy="lazyOnload">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','854778784223732');fbq('track','PageView');`}</Script>
      </body>
    </html>
  )
}
