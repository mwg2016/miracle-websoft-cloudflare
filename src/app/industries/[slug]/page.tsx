import { notFound } from 'next/navigation'
import { industries } from '@/data/industries'
import type { Metadata } from 'next'
import IndustryLayout from '@/components/industry/IndustryLayout'

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
  return <IndustryLayout industry={industry} />
}
