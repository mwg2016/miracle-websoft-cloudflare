export type IntentOption = {
  id: string
  label: string
  path: string
  keywords: string[]
}

// Chips shown in the panel. Keep to 6 for visual balance.
export const INTENT_OPTIONS: IntentOption[] = [
  {
    id: 'migration',
    label: 'Migrate my store to Shopify',
    path: '/services/shopify-migration',
    keywords: ['migrate', 'migration', 'woocommerce', 'woo', 'wix', 'bigcommerce', 'magento', 'squarespace', 'switch to shopify', 'move to shopify', 'replatform'],
  },
  {
    id: 'new-store',
    label: 'Build a new Shopify store',
    path: '/services/shopify/development',
    keywords: ['new store', 'build store', 'custom store', 'shopify development', 'new shopify', 'start shopify', 'build shopify', 'theme development', 'custom theme'],
  },
  {
    id: 'cro-speed',
    label: 'Fix speed or conversions',
    path: '/services/shopify-cro-speed',
    keywords: ['speed', 'slow', 'core web vitals', 'cro', 'conversion', 'optimize', 'optimization', 'page speed', 'performance', 'lighthouse'],
  },
  {
    id: 'app',
    label: 'Build a Shopify app',
    path: '/services/shopify-app-development',
    keywords: ['app', 'plugin', 'extension', 'shopify app', 'app development', 'private app', 'public app'],
  },
  {
    id: 'white-label',
    label: 'White-label for my agency',
    path: '/white-label',
    keywords: ['white label', 'whitelabel', 'agency', 'partner', 'subcontract', 'outsource', 'freelancer', 'dev partner'],
  },
  {
    id: 'referral',
    label: 'Refer a client (earn commission)',
    path: '/referral',
    keywords: ['refer', 'referral', 'commission', 'earn', 'partner program', 'affiliate'],
  },
]

// Keyword-only matches (not shown as chips, but the search finds them).
export const KEYWORD_ROUTES: { id: string; keywords: string[]; path: string; label: string }[] = [
  { id: 'careers',    keywords: ['job', 'jobs', 'career', 'careers', 'hiring', 'apply', 'join', 'vacancy', 'vacancies'],     path: '/careers', label: 'Careers' },
  { id: 'work',       keywords: ['portfolio', 'work', 'case study', 'case studies', 'projects', 'examples'],                 path: '/work', label: 'Our work' },
  { id: 'reviews',    keywords: ['review', 'reviews', 'testimonial', 'testimonials', 'rating', 'ratings'],                   path: '/reviews', label: 'Reviews' },
  { id: 'about',      keywords: ['about', 'team', 'founder', 'karam', 'company', 'who are you'],                             path: '/about', label: 'About' },
  { id: 'blog',       keywords: ['blog', 'article', 'articles', 'guide', 'guides'],                                          path: '/blog', label: 'Blog' },
  { id: 'pricing',    keywords: ['pricing', 'price', 'prices', 'plan', 'plans', 'package', 'packages', 'cost', 'budget', 'how much', 'rate', 'rates', 'maintenance', 'monthly'],  path: '/pricing', label: 'Pricing & packages' },
  { id: 'contact',    keywords: ['contact', 'talk', 'quote', 'hire', 'email'],                                                                                                   path: '/contact', label: 'Contact' },
  { id: 'fashion',    keywords: ['fashion', 'clothing', 'apparel', 'boutique', 'womens clothing'],                           path: '/industries/womens-clothing-boutiques', label: 'Fashion / clothing' },
  { id: 'activewear', keywords: ['activewear', 'athleisure', 'sportswear', 'gym wear', 'yoga'],                              path: '/industries/activewear-athleisure', label: 'Activewear' },
  { id: 'streetwear', keywords: ['streetwear', 'urban fashion', 'hype'],                                                     path: '/industries/streetwear-urban-fashion', label: 'Streetwear' },
  { id: 'jewelry',    keywords: ['jewelry', 'jewellery', 'ring', 'necklace'],                                                path: '/services/shopify/jewelry', label: 'Jewelry' },
  { id: 'electronics',keywords: ['electronics', 'gadgets', 'tech products'],                                                 path: '/services/shopify/electronics', label: 'Electronics' },
  { id: 'beauty',     keywords: ['beauty', 'cosmetics', 'skincare', 'makeup'],                                               path: '/services/shopify/health-beauty', label: 'Beauty / skincare' },
  { id: 'tiktok',     keywords: ['tiktok', 'tik tok', 'tiktok shop', 'social commerce'],                                     path: '/blog', label: 'Blog (TikTok guides)' },
  { id: 'bio',        keywords: ['owner bio', 'founder bio', 'about karam'],                                                 path: '/bio/owner', label: 'Founder bio' },
]

export function findMatch(query: string): { path: string; label: string; matchedOn: string } | null {
  const q = query.toLowerCase().trim()
  if (!q) return null

  // Chips first — higher priority, most valuable intent categories
  for (const opt of INTENT_OPTIONS) {
    const hit = opt.keywords.find(k => q.includes(k))
    if (hit) return { path: opt.path, label: opt.label, matchedOn: hit }
  }
  // Then keyword-only routes
  for (const route of KEYWORD_ROUTES) {
    const hit = route.keywords.find(k => q.includes(k))
    if (hit) return { path: route.path, label: route.label, matchedOn: hit }
  }
  return null
}
