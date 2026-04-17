import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import type { Metadata } from 'next'
import IndustryLayout from '@/components/industry/IndustryLayout'
import { breadcrumb, faqPage, renderJsonLd, service } from '@/lib/jsonld'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) return {}
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `https://miraclewebsoft.com/industries/${industry.slug}` },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) notFound()

  const url = `/industries/${industry.slug}`
  const jsonLd = renderJsonLd([
    service({
      name: industry.h1,
      description: industry.subtext,
      url,
      serviceType: `Shopify development for ${industry.title}`,
    }),
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Industries', url: '/industries' },
      { name: industry.title, url },
    ]),
    faqPage(industry.faqs),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <IndustryLayout industry={industry} />
    </>
  )
}
