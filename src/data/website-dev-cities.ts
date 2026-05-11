export type CountryCode = 'us' | 'uk' | 'au'

export interface Country {
  code: CountryCode
  slug: string
  name: string
  shortName: string
  adjective: string
  currency: 'USD' | 'GBP' | 'AUD'
  currencySymbol: '$' | '£' | 'A$'
  tld: '.com' | '.co.uk' | '.com.au'
  phonePrefix: string
  paymentLocal: string
}

export const countries: Record<CountryCode, Country> = {
  us: {
    code: 'us',
    slug: 'us',
    name: 'the United States',
    shortName: 'USA',
    adjective: 'American',
    currency: 'USD',
    currencySymbol: '$',
    tld: '.com',
    phonePrefix: '+1',
    paymentLocal: 'Stripe + PayPal',
  },
  uk: {
    code: 'uk',
    slug: 'uk',
    name: 'the United Kingdom',
    shortName: 'UK',
    adjective: 'British',
    currency: 'GBP',
    currencySymbol: '£',
    tld: '.co.uk',
    phonePrefix: '+44',
    paymentLocal: 'Stripe + GoCardless',
  },
  au: {
    code: 'au',
    slug: 'au',
    name: 'Australia',
    shortName: 'AU',
    adjective: 'Australian',
    currency: 'AUD',
    currencySymbol: 'A$',
    tld: '.com.au',
    phonePrefix: '+61',
    paymentLocal: 'Stripe + Afterpay',
  },
}

export interface City {
  slug: string
  name: string
  country: CountryCode
  region: string
  introSentence: string
  localBusinessExamples: [string, string, string]
  nearbyAreas: string[]
}

// Phase 1 — 10 hero cities, hand-curated.
// Phase 2 will extend this to 150.
export const cities: City[] = [
  // ── United States ────────────────────────────────────────────────────────
  {
    slug: 'new-york',
    name: 'New York',
    country: 'us',
    region: 'New York',
    introSentence:
      'New York small businesses compete in one of the densest markets in the world — a sharp, fast, mobile-first website is the difference between a found business and an ignored one.',
    localBusinessExamples: ['Brooklyn pizzerias', 'Manhattan dental practices', 'Queens auto shops'],
    nearbyAreas: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Jersey City'],
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    country: 'us',
    region: 'California',
    introSentence:
      'Los Angeles businesses live or die on visual identity — your website needs to look as good as your storefront, your studio, or your menu, on every device.',
    localBusinessExamples: ['Silver Lake cafes', 'Beverly Hills med-spas', 'Santa Monica fitness studios'],
    nearbyAreas: ['Hollywood', 'Santa Monica', 'Long Beach', 'Pasadena', 'Glendale', 'Burbank'],
  },
  {
    slug: 'chicago',
    name: 'Chicago',
    country: 'us',
    region: 'Illinois',
    introSentence:
      'Chicago is a city of neighbourhoods, and your website needs to show up the moment someone searches for a service in theirs — not a generic city-wide listing.',
    localBusinessExamples: ['Wicker Park restaurants', 'Lincoln Park dentists', 'Lakeview salons'],
    nearbyAreas: ['Wicker Park', 'Lincoln Park', 'Lakeview', 'Logan Square', 'River North', 'Evanston'],
  },
  {
    slug: 'houston',
    name: 'Houston',
    country: 'us',
    region: 'Texas',
    introSentence:
      'Houston is the fourth-largest city in the US and a small business doing $500k a year here is still effectively invisible online — a well-built site fixes that fast.',
    localBusinessExamples: ['Montrose restaurants', 'Heights barber shops', 'Sugar Land trades'],
    nearbyAreas: ['Montrose', 'The Heights', 'Sugar Land', 'Katy', 'The Woodlands', 'Pearland'],
  },

  // ── United Kingdom ───────────────────────────────────────────────────────
  {
    slug: 'london',
    name: 'London',
    country: 'uk',
    region: 'Greater London',
    introSentence:
      'London small businesses compete on speed and trust — a slow, generic website loses to whatever ranks above it on Google before the customer even looks at the brand.',
    localBusinessExamples: ['Shoreditch cafes', 'Mayfair clinics', 'Camden independent retailers'],
    nearbyAreas: ['Shoreditch', 'Camden', 'Hackney', 'Clapham', 'Mayfair', 'Islington'],
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    country: 'uk',
    region: 'Greater Manchester',
    introSentence:
      'Manchester has one of the fastest-growing small business scenes in the UK — Northern Quarter cafes, Salford studios, Didsbury clinics all need a website that does the selling for them.',
    localBusinessExamples: ['Northern Quarter cafes', 'Didsbury clinics', 'Salford creative studios'],
    nearbyAreas: ['Northern Quarter', 'Didsbury', 'Chorlton', 'Salford', 'Ancoats', 'Altrincham'],
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    country: 'uk',
    region: 'West Midlands',
    introSentence:
      'Birmingham trades, retailers and food businesses lose work daily to better-ranked competitors — most of the time the only difference is the website.',
    localBusinessExamples: ['Digbeth restaurants', 'Solihull dentists', 'Jewellery Quarter retailers'],
    nearbyAreas: ['Digbeth', 'Jewellery Quarter', 'Solihull', 'Edgbaston', 'Moseley', 'Sutton Coldfield'],
  },

  // ── Australia ────────────────────────────────────────────────────────────
  {
    slug: 'sydney',
    name: 'Sydney',
    country: 'au',
    region: 'New South Wales',
    introSentence:
      'Sydney small businesses pay premium rent and premium wages — your website should match, not look like a free template thrown together by a cousin in 2014.',
    localBusinessExamples: ['Bondi cafes', 'Surry Hills salons', 'Manly fitness studios'],
    nearbyAreas: ['Bondi', 'Surry Hills', 'Manly', 'Parramatta', 'Newtown', 'Chatswood'],
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    country: 'au',
    region: 'Victoria',
    introSentence:
      'Melbourne is one of the most design-conscious cities in the world — a website that looks generic costs you customers before they walk through the door.',
    localBusinessExamples: ['Fitzroy cafes', 'St Kilda boutiques', 'South Yarra clinics'],
    nearbyAreas: ['Fitzroy', 'St Kilda', 'South Yarra', 'Brunswick', 'Richmond', 'Carlton'],
  },
  {
    slug: 'brisbane',
    name: 'Brisbane',
    country: 'au',
    region: 'Queensland',
    introSentence:
      'Brisbane is growing fast and so is its small business scene — Fortitude Valley, West End, Paddington each have their own searches, and your site needs to win them.',
    localBusinessExamples: ['Fortitude Valley bars', 'West End cafes', 'Paddington retailers'],
    nearbyAreas: ['Fortitude Valley', 'West End', 'Paddington', 'New Farm', 'South Brisbane', 'Newstead'],
  },
]

export function getCity(country: string, slug: string): City | undefined {
  return cities.find((c) => c.country === country && c.slug === slug)
}

export function citiesInCountry(country: CountryCode): City[] {
  return cities.filter((c) => c.country === country)
}
