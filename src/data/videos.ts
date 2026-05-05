export interface VideoTestimonial {
  videoId: string
  title: string
  speaker: string
  role?: string
  brand?: string
  metric?: string
  category?: string
  aspect?: '16/9' | '9/16'
}

export const founderIntro: VideoTestimonial = {
  videoId: 'VRPJGMjYCYE',
  title: 'Meet Karam — Founder of Miracle Websoft',
  speaker: 'Karam Singh Mehra',
  role: 'Founder & Lead Shopify Expert',
  aspect: '16/9',
}

export const clientVideos: VideoTestimonial[] = [
  {
    videoId: 'GCoJ7K9UEVM',
    title: 'Shopify client review — store rebuild & ongoing partnership',
    speaker: 'Verified Shopify Client',
    metric: 'Custom build · ongoing',
    category: 'Store Development',
    aspect: '16/9',
  },
  {
    videoId: '0JIg21Q1IjE',
    title: 'Shopify client review — design, dev and conversion lift',
    speaker: 'Verified Shopify Client',
    metric: 'Design + dev · CRO lift',
    category: 'Design & CRO',
    aspect: '16/9',
  },
  {
    videoId: 'c_Ves6zel5E',
    title: 'Shopify client review — communication and delivery',
    speaker: 'Verified Shopify Client',
    metric: 'On-time · on-budget',
    category: 'Custom Features',
    aspect: '16/9',
  },
  {
    videoId: 'mv-2p80wmQU',
    title: 'Quick client shoutout — Miracle Websoft',
    speaker: 'Verified Shopify Client',
    metric: 'Short · 60 sec',
    category: 'Quick Review',
    aspect: '9/16',
  },
  {
    videoId: 'nxVqcIxrWpE',
    title: 'Shopify client review — long-term ecommerce partnership',
    speaker: 'Verified Shopify Client',
    metric: 'Multi-year client',
    category: 'Ongoing Support',
    aspect: '16/9',
  },
]
