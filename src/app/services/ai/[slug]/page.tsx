import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import { aiServices, getAiService } from '@/data/ai-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

type Params = { slug: string }

export async function generateStaticParams() {
  return aiServices.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const data = getAiService(slug)
  if (!data) return {}

  const url = `https://miraclewebsoft.com/services/ai/${slug}`
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
  }
}

export default async function AiServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const data = getAiService(slug)
  if (!data) notFound()

  const path = `/services/ai/${slug}`
  const jsonLd = renderJsonLd([
    service({
      name: data.h1,
      description: data.subtext,
      url: path,
      serviceType: data.serviceType,
      areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Europe', 'India'],
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'AI Services', url: '/services/ai' },
      { name: data.h1, url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceLandingPage
        data={data}
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'AI Services', href: '/services/ai' },
          { label: data.h1 },
        ]}
      />
    </>
  )
}
