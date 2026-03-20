import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProblemSection from '@/components/home/ProblemSection'
import IndustryGrid from '@/components/home/IndustryGrid'
import ServicesOverview from '@/components/home/ServicesOverview'
import StatsRow from '@/components/home/StatsRow'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import TrustProfiles from '@/components/home/TrustProfiles'
import Testimonials from '@/components/home/Testimonials'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft',
  description:
    'We build high-converting Shopify stores for clothing, fashion and apparel brands. Custom development, app builds, migrations and CRO. USA, UK and Australia.',
  keywords: ['Shopify agency clothing brands', 'fashion Shopify development', 'apparel Shopify'],
  alternates: { canonical: 'https://miraclewebsoft.com' },
  openGraph: {
    title: 'Shopify Agency for Clothing & Fashion Brands | Miracle Websoft',
    description: 'We build high-converting Shopify stores for clothing and fashion brands.',
    url: 'https://miraclewebsoft.com',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <IndustryGrid />
      <ServicesOverview />
      <StatsRow />
      <WhyUs />
      <ProcessSteps />
      <Testimonials />
      <TrustProfiles />
      <CtaBanner />
    </>
  )
}
