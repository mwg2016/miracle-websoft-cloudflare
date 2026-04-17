// Shared JSON-LD schema builders.
// All URLs are absolute — required for crawlers to resolve unambiguously.

export const SITE_URL = 'https://miraclewebsoft.com'
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

const PUBLISHER_REF = { '@id': ORG_ID }
const AUTHOR = {
  '@type': 'Person',
  name: 'Karam Singh Mehra',
  url: `${SITE_URL}/bio/owner`,
  jobTitle: 'Founder & Lead Shopify Expert',
  sameAs: [
    'https://www.linkedin.com/in/ecommerce-experts/',
    'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
  ],
} as const

export type Crumb = { name: string; url?: string }

export function breadcrumb(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: c.url.startsWith('http') ? c.url : `${SITE_URL}${c.url}` } : {}),
    })),
  }
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function service(args: {
  name: string
  description: string
  url: string
  serviceType?: string
  areaServed?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    url: args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`,
    ...(args.serviceType ? { serviceType: args.serviceType } : {}),
    provider: PUBLISHER_REF,
    areaServed: (args.areaServed ?? ['United States', 'United Kingdom', 'Australia', 'India']).map(
      (name) => ({ '@type': 'Country', name })
    ),
  }
}

export function webPage(args: {
  name: string
  description: string
  url: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': args.type ?? 'WebPage',
    name: args.name,
    description: args.description,
    url: args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: PUBLISHER_REF,
  }
}

export function article(args: {
  title: string
  description: string
  url: string
  datePublished: string
  tag?: string
  body?: string[]
}) {
  const fullUrl = args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: args.title,
    description: args.description,
    url: fullUrl,
    mainEntityOfPage: fullUrl,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    author: AUTHOR,
    publisher: PUBLISHER_REF,
    image: `${SITE_URL}/icon-512.png`,
    inLanguage: 'en',
    ...(args.tag ? { articleSection: args.tag } : {}),
    ...(args.body && args.body.length ? { articleBody: args.body.join('\n\n') } : {}),
  }
}

export function itemList(args: {
  name: string
  description?: string
  items: { name: string; url: string; description?: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: args.name,
    ...(args.description ? { description: args.description } : {}),
    numberOfItems: args.items.length,
    itemListElement: args.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
      name: it.name,
      ...(it.description ? { description: it.description } : {}),
    })),
  }
}

export function person(args: {
  name: string
  url: string
  jobTitle?: string
  description?: string
  image?: string
  sameAs?: string[]
  worksFor?: { name: string; url: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: args.name,
    url: args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`,
    ...(args.jobTitle ? { jobTitle: args.jobTitle } : {}),
    ...(args.description ? { description: args.description } : {}),
    ...(args.image ? { image: args.image } : {}),
    ...(args.sameAs?.length ? { sameAs: args.sameAs } : {}),
    ...(args.worksFor
      ? {
          worksFor: {
            '@type': 'Organization',
            name: args.worksFor.name,
            url: args.worksFor.url,
          },
        }
      : {}),
  }
}

export function jobPosting(args: {
  title: string
  description: string
  datePosted: string
  employmentType: string
  url: string
  validThrough?: string
  experienceRequirements?: string
  skills?: string[]
  qualifications?: string[]
  responsibilities?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: args.title,
    description: args.description,
    datePosted: args.datePosted,
    validThrough: args.validThrough,
    employmentType: args.employmentType,
    url: args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Miracle Websoft',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chandigarh',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
    },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: 'IN' },
    directApply: true,
    ...(args.experienceRequirements
      ? { experienceRequirements: args.experienceRequirements }
      : {}),
    ...(args.skills?.length ? { skills: args.skills.join(', ') } : {}),
    ...(args.qualifications?.length ? { qualifications: args.qualifications.join('; ') } : {}),
    ...(args.responsibilities?.length ? { responsibilities: args.responsibilities.join('; ') } : {}),
  }
}

export function softwareApplication(args: {
  name: string
  description: string
  url: string
  category?: string
  operatingSystem?: string
  priceRange?: string
  rating?: { value: string; count: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: args.name,
    description: args.description,
    url: args.url.startsWith('http') ? args.url : `${SITE_URL}${args.url}`,
    applicationCategory: args.category ?? 'BusinessApplication',
    operatingSystem: args.operatingSystem ?? 'Web',
    ...(args.priceRange
      ? {
          offers: {
            '@type': 'Offer',
            price: args.priceRange,
            priceCurrency: 'USD',
          },
        }
      : {}),
    ...(args.rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: args.rating.value,
            ratingCount: args.rating.count,
            bestRating: '5',
          },
        }
      : {}),
  }
}

export function renderJsonLd(schema: unknown | unknown[]) {
  const payload = Array.isArray(schema) ? schema : [schema]
  return JSON.stringify(payload.length === 1 ? payload[0] : { '@context': 'https://schema.org', '@graph': payload })
}
