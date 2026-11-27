/**
 * Single source of truth for public company credentials.
 *
 * Only add a value here once it is verified against an external record, and
 * note the source + date. Pages should import from here instead of
 * hard-coding numbers, so a change is made once. Claims register and
 * verification notes live in docs/MIRACLE-WEBSOFT-AI-SEARCH-PLAYBOOK.md.
 *
 * Deliberately NOT here (unverified or contradicted, do not publish):
 *  - a Clutch rating: Clutch profile shows "Not yet reviewed" (checked 2026-11-27)
 *  - hours delivered: no verifiable source
 *  - agency Job Success Score: only the founder's JSS is readable
 */
export const COMPANY = {
  name: 'Miracle Websoft',
  url: 'https://miraclewebsoft.com',
  /** Owner-confirmed 2026-11-27; matches Upwork agency profile and Clutch. */
  foundedYear: 2016,
  /** Upwork: 789 total jobs (founder profile). Shopify Partner Directory: "over 700 projects". */
  projects: '700+',
  founder: {
    name: 'Karam Singh Mehra',
    url: 'https://miraclewebsoft.com/bio/owner',
    upworkUrl: 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de',
    linkedinUrl: 'https://www.linkedin.com/in/ecommerce-experts/',
  },
  address: {
    locality: 'Rajpura',
    region: 'Punjab',
    postalCode: '140702',
    country: 'IN',
    display: 'Rajpura, Punjab, India',
  },
  upwork: {
    agencyUrl: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/',
    badge: 'Top Rated Plus',
    /** Founder profile, checked 2026-11-27. */
    earnings: '$600K+',
    jobs: '780+',
    founderJobSuccess: '99%',
  },
  shopifyPartner: {
    url: 'https://www.shopify.com/partners/directory/partner/miracle-websoft1',
    /** Directory shows "Partner since 2019" (checked 2026-11-27). */
    since: 2019,
  },
  clutchUrl: 'https://clutch.co/profile/miracle-websoft',
  /** Owner-confirmed 2026-11-27 (external profiles show ranges: 1–10, 10–49, 11–50). */
  teamSize: 15,
  verifiedOn: '2026-11-27',
} as const

/** "since 2016" style helper for copy. */
export const SINCE = `since ${COMPANY.foundedYear}`
