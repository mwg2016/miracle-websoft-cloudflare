// JSON-LD for reviews. Every review is a schema.org Review whose itemReviewed
// is the site-wide Organization node (same @id as the graph in app/layout.tsx),
// so search engines and AI crawlers tie each review — and the aggregate — to
// Miracle Websoft rather than to an anonymous entity.

import { ORG_ID, SITE_URL } from '@/lib/jsonld'
import type { PublicReview, RatingStats } from './types'

const ORG_REF = {
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': ORG_ID,
  name: 'Miracle Websoft',
  url: SITE_URL,
  image: `${SITE_URL}/icon-512.png`,
}

export function reviewUrl(slug: string): string {
  return `${SITE_URL}/reviews/${slug}`
}

function isoDate(d: string): string {
  return d.slice(0, 10)
}

export function reviewSchema(r: PublicReview, opts: { withContext?: boolean; itemReviewed?: boolean } = {}) {
  const url = reviewUrl(r.slug)
  return {
    ...(opts.withContext ? { '@context': 'https://schema.org' } : {}),
    '@type': 'Review',
    '@id': `${url}#review`,
    url,
    name: r.title,
    headline: r.title,
    reviewBody: r.body,
    datePublished: isoDate(r.date),
    inLanguage: 'en',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: r.name,
      ...(r.company ? { worksFor: { '@type': 'Organization', name: r.company } } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: r.source === 'upwork' ? 'Upwork' : 'Miracle Websoft',
      ...(r.source === 'upwork' ? { url: 'https://www.upwork.com' } : { '@id': ORG_ID }),
    },
    ...(opts.itemReviewed === false ? {} : { itemReviewed: ORG_REF }),
    ...(r.service ? { about: { '@type': 'Service', name: r.service, provider: { '@id': ORG_ID } } } : {}),
    ...(r.reply
      ? {
          comment: {
            '@type': 'Comment',
            text: r.reply,
            author: { '@id': ORG_ID },
          },
        }
      : {}),
  }
}

export function aggregateRatingSchema(stats: RatingStats) {
  return {
    '@type': 'AggregateRating',
    ratingValue: stats.average.toFixed(1),
    reviewCount: stats.count,
    ratingCount: stats.count,
    bestRating: 5,
    worstRating: 1,
  }
}

/** /reviews index: the Organization with its aggregate + a list of reviews. */
export function reviewsIndexSchema(reviews: PublicReview[], stats: RatingStats) {
  return {
    ...ORG_REF,
    aggregateRating: aggregateRatingSchema(stats),
    // Embedding every review is fine for a few dozen; cap so the payload
    // stays small as the list grows — each review also has its own page.
    review: reviews.slice(0, 50).map(r => reviewSchema(r, { itemReviewed: false })),
  }
}
