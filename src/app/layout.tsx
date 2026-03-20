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
  description: 'We build high-converting Shopify stores for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. USA, UK and Australia.',
  keywords: ['Shopify agency', 'clothing brands', 'fashion Shopify', 'Shopify development'],
  openGraph: { type: 'website', locale: 'en_US', url: 'https://miraclewebsoft.com', siteName: 'Miracle Websoft' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
