// The verified Upwork reviews that already live in src/data/jobs.ts, mapped
// into the same shape as website-submitted reviews so both render (and get
// schema) the same way. These are always "approved" — they come from Upwork.

import { jobs, jobTitle, fixTypos } from '@/data/jobs'
import type { PublicReview } from './types'

const MONTHS: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
}

/** 'Feb 2026' → '2026-02-01' */
function monthToIso(s: string): string {
  const [mon, year] = s.split(' ')
  return MONTHS[mon] && /^\d{4}$/.test(year ?? '') ? `${year}-${MONTHS[mon]}-01` : '2024-01-01'
}

export const upworkReviews: PublicReview[] = jobs
  .filter(j => j.review && j.rating >= 4.0)
  .map(j => {
    const body = fixTypos(j.review!.trim())
    return {
      slug: `upwork-${j.id}`,
      source: 'upwork' as const,
      rating: j.rating,
      // Upwork reviews have no title of their own; the project name is more
      // useful than repeating the first line of the review.
      title: jobTitle(j),
      body,
      name: j.client || 'Verified Upwork client',
      company: j.company,
      service: j.category,
      date: monthToIso(j.completedDate),
      projectUrl: `/work/${j.id}`,
    }
  })

export function upworkProjectTitle(slug: string): string | undefined {
  const id = slug.replace(/^upwork-/, '')
  const job = jobs.find(j => j.id === id)
  return job ? jobTitle(job) : undefined
}
