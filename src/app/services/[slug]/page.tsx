import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceLandingPage from '@/components/services/ServiceLandingPage'
import { devServices, getDevService } from '@/data/dev-services'
import { breadcrumb, renderJsonLd, service } from '@/lib/jsonld'

// Full stack / integration / business-software services. Existing static
// folders under /services (shopify, ai, custom-web-development, …) take
// precedence over this dynamic segment, so no existing URL changes.

type Params = { slug: string }

export const dynamicParams = false

export async function generateStaticParams() {
  return devServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const data = getDevService(slug)
  if (!data) return {}
  const url = `https://miraclewebsoft.com/services/${slug}`
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: data.metaTitle, description: data.metaDescription, url, type: 'website' },
    twitter: { card: 'summary_large_image', title: data.metaTitle, description: data.metaDescription },
  }
}

export default async function DevServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const data = getDevService(slug)
  if (!data) notFound()

  const path = `/services/${slug}`
  const jsonLd = renderJsonLd([
    service({ name: data.h1, description: data.subtext, url: path, serviceType: data.serviceType }),
    // FAQPage schema is emitted by <FaqSection> inside the template.
    breadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: data.h1, url: path },
    ]),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceLandingPage
        data={data}
        breadcrumbItems={[{ label: 'Services', href: '/services' }, { label: data.h1 }]}
        primaryCta={{ label: 'Free technical consultation', href: '/book' }}
        secondaryCta={{ label: 'Send a written brief', href: '#get-quote' }}
        deliverablesIntro="Every project starts with a written scope and a fixed price. You get working software, the source code in your own repository, and documentation."
        midCta={{
          heading: 'Not sure what you need yet?',
          sub: 'Book a free technical consultation. We will look at what you have, tell you the simplest way to get there, and what it would cost.',
          btnLabel: 'Book a free consultation',
          btnHref: '/book',
          secondary: { label: 'or send a written brief', href: '#get-quote' },
        }}
        urlLabel="Current website, app or tool (if any)"
        urlPlaceholder="yourcompany.com, app URL or tool name"
        messageLabel="What should it do?"
        messagePlaceholder="Example: we pay for 25 CRM seats and use a fraction of it; or our Laravel app is slow and the original developer is gone; or we need Moodle enrollments created from WooCommerce orders."
      />
    </>
  )
}
