// Outcome-based Shopify offers, served at /services/<slug> by
// src/app/services/[slug]/page.tsx (alongside dev-services).
//
// Each offer sells one result at a fixed price, timeline and guarantee,
// instead of a technical skill. Rules:
//  - Prices must match /pricing or be "quoted" — never invent a number.
//  - `caseStudy` only from a real project in src/data/jobs.ts.
//  - Don't rename slugs once live (see CLAUDE.md: never delete URLs).

import type { ServiceLandingData } from './ai-services'

const R = {
  speed: { title: 'Shopify Speed Fix', desc: 'A faster mobile store, measured before and after.', href: '/services/shopify-speed-optimization' },
  cro: { title: 'Conversion Audit + Fix', desc: 'Find where shoppers drop off, then fix the biggest leaks.', href: '/services/conversion-rate-optimization' },
  migration: { title: 'Data-Checked Migration', desc: 'Move to Shopify with data checked, old URLs redirected and SEO protected.', href: '/services/shopify-migration' },
  launch: { title: 'Launch-Ready Store', desc: 'A store that takes orders in 7 days, from $600.', href: '/services/shopify-store-launch' },
  checkout: { title: 'Shopify Plus Checkout Upgrade', desc: 'Upsells, delivery dates and custom fields in checkout.', href: '/services/shopify-checkout-customization' },
  global: { title: 'Sell Internationally', desc: 'Native translations, currencies and Markets set up right.', href: '/services/shopify-international-expansion' },
  dedicated: { title: 'Dedicated Shopify Developer', desc: 'Your in-house Shopify developer, without the hire.', href: '/services/dedicated-shopify-developer' },
  care: { title: 'Store Care Plans', desc: 'Updates, health checks and fixes every month, from $99/mo.', href: '/services/shopify/shopify-maintenance' },
}

export const shopifyOffers: ServiceLandingData[] = [
  // ─── Dedicated developer ───────────────────────────────────────────────────
  {
    slug: 'dedicated-shopify-developer',
    metaTitle: 'Hire a Dedicated Shopify Developer (Monthly Retainer) | Miracle Websoft',
    metaDescription:
      'A dedicated Shopify developer for your store on a monthly retainer: theme changes, new features, integrations, A/B tests and speed fixes. Same developer every month, cancel anytime. From $299/mo.',
    eyebrow: 'DEDICATED SHOPIFY DEVELOPER',
    h1: 'Hire a dedicated Shopify developer, without the in-house hire',
    subtext:
      'One Shopify developer who knows your store, your theme and your apps, working through your list every month. No recruiting, no onboarding a new freelancer for every task, and no long contract.',
    serviceType: 'Dedicated Shopify developer retainer',
    offer: {
      promise: 'The same Shopify developer on your store every month, shipping from your task list.',
      price: 'From $299/mo',
      priceNote: '4 dev hours a month on Care+. Pro is $500/mo for 8 hours. Part-time or full-time developers are quoted to your hours.',
      timeline: 'Onboarded within 48 hours of the first invoice',
      guarantee: 'No lock-in. Cancel any month, and unused hours roll over (up to the plan limit).',
      includes: [
        'One named developer who learns your store',
        'Theme changes, features, integrations and A/B tests',
        'Monthly speed and health check',
        'Email reply within 24 hours on weekdays (Slack on Pro)',
      ],
    },
    problem: {
      title: 'Every small change becomes a hiring project',
      body: 'A banner fix, a new landing page, an app that broke the cart. You post a job, wait for proposals, explain the store again to someone new, and hope they do not leave a mess in the theme. Hiring a full-time Shopify developer is slow and expensive for the amount of work most stores have.',
    },
    solution: {
      title: 'A developer who already knows your store',
      body: 'You get a named Shopify developer on a monthly plan. They learn your theme, apps and integrations once, then work through your task list every month. Small requests get done the same week, bigger features get a written scope, and the store gets better instead of more patched.',
    },
    benefits: [
      'Same developer every month, not a new freelancer per task',
      'Changes shipped the same week, not after a hiring round',
      'Cancel or change plans any month, no long contract',
      'A store that gets better each month, not more patched',
      'Costs a fraction of a full-time hire',
      'You own all code, in your theme or repository',
    ],
    deliverables: [
      'Onboarding: store, theme, apps and integrations reviewed',
      'Shared task board with priorities you set',
      'Theme edits, new sections and landing pages',
      'Feature builds, app integrations and bug fixes',
      'A/B test implementation and speed upkeep',
      'Monthly report: what shipped, hours used, what is next',
    ],
    process: [
      {
        title: 'Pick hours that fit',
        body: 'Care+ (4 hrs), Pro (8 hrs), or a part-time or full-time developer for bigger roadmaps. You can change plans any month.',
      },
      {
        title: 'Onboard once',
        body: 'Your developer reviews the store, theme, apps and integrations, takes a backup and sets up a task board with you.',
      },
      {
        title: 'Ship every week',
        body: 'You add tasks; we estimate, build on a duplicate theme, and publish once you approve. Bigger features get a written scope first.',
      },
      {
        title: 'Monthly review',
        body: 'A short report of what shipped, hours used and what we suggest next, so the plan keeps paying for itself.',
      },
    ],
    caseStudy: {
      tag: 'Long-term Shopify retainer',
      metric: '2,942',
      metricLabel: 'hours on one retainer',
      title: 'Multi-year Shopify development retainer for an ecommerce brand: new features, third-party integrations, A/B tests and performance work, with consistent 5-star ratings.',
      bullets: [
        'New feature builds and third-party integrations',
        'A/B test implementations and performance upkeep',
        'Also: a 10-month retainer for Trima covering theme upkeep, features and monthly performance reviews',
      ],
      duration: 'Multi-year engagement',
      href: '/work/web-development-long-retainer-2025',
    },
    faqs: [
      {
        question: 'Is it really the same developer every month?',
        answer: 'Yes. You get a named developer who learns your store. If they are ever away, a teammate covers with their notes, so nothing has to be explained twice.',
      },
      {
        question: 'How is this different from hiring a freelancer per task?',
        answer: 'You skip the posting, interviewing and re-explaining for every task. One developer keeps context on your theme and apps, which makes each change faster and safer.',
      },
      {
        question: 'Can I get a full-time dedicated Shopify developer?',
        answer: 'Yes. Beyond the Care+ and Pro plans, we provide part-time and full-time dedicated developers for brands with a steady roadmap. These are quoted to the hours you need.',
      },
      {
        question: 'What if I do not use all my hours?',
        answer: 'Unused hours roll over to the next month, up to 2 hours on Care+ and 4 hours on Pro.',
      },
      {
        question: 'Is there a minimum contract?',
        answer: 'No. Plans are billed monthly and you can cancel, upgrade or downgrade any month.',
      },
    ],
    formHeading: 'Get a dedicated Shopify developer',
    formSubtext: 'Send your store URL and the kind of work you have each month. We will suggest the right plan and introduce your developer.',
    related: [R.care, R.cro, R.speed],
  },

  // ─── Shopify Plus checkout ─────────────────────────────────────────────────
  {
    slug: 'shopify-checkout-customization',
    metaTitle: 'Shopify Plus Checkout Customization & Extensions | Miracle Websoft',
    metaDescription:
      'Add upsells, delivery date pickers, custom fields and trust signals to your Shopify Plus checkout with Checkout UI Extensions and Shopify Functions. Fixed price per feature.',
    eyebrow: 'SHOPIFY PLUS CHECKOUT UPGRADE',
    h1: 'Shopify Plus checkout customization that sells more and asks the right questions',
    subtext:
      'In-checkout upsells, delivery date selectors, custom order fields, trust content and discount or shipping rules, built natively with Checkout UI Extensions and Shopify Functions so they survive Shopify updates.',
    serviceType: 'Shopify Plus checkout extensibility development',
    offer: {
      promise: 'New checkout features, live and native, without breaking the checkout you rely on.',
      price: 'Fixed price per feature',
      priceNote: 'Quoted within 24 hours of seeing your checkout and requirements.',
      timeline: 'Typically 1–2 weeks per feature',
      guarantee: 'Built and tested on a development store first. Nothing goes live on your checkout until you sign it off.',
      includes: [
        'Checkout UI Extensions',
        'Shopify Functions for discounts, shipping and payments',
        'Migration from checkout.liquid and Scripts',
        'Tested across devices and payment methods',
      ],
    },
    problem: {
      title: 'Checkout is where the money is, and it is the hardest page to change',
      body: 'checkout.liquid and Shopify Scripts are retired, and many app-based checkout tweaks are slow or fragile. Brands still need upsells, delivery dates, gift notes and custom rules at the exact moment the customer is paying.',
    },
    solution: {
      title: 'Native checkout extensions, built the Shopify way',
      body: 'We build each feature with Checkout UI Extensions and Shopify Functions, so it looks native, loads fast and keeps working as Shopify updates checkout. Every feature is tested on a development store before it touches your live checkout.',
    },
    benefits: [
      'Higher order value from in-checkout upsells',
      'Fewer support emails with delivery dates and order notes captured at checkout',
      'Discount, shipping and payment rules that match your business',
      'Native look and speed, with no fragile scripts',
      'Safe migration off checkout.liquid and Shopify Scripts',
      'Fixed price per feature',
    ],
    deliverables: [
      'Checkout review and feature scope',
      'Checkout UI Extensions (upsells, fields, content blocks)',
      'Shopify Functions (discounts, shipping, payment customisation)',
      'Validation rules and error states',
      'QA on a development store, then live deployment',
      'Documentation and admin settings handover',
    ],
    process: [
      { title: 'Review your checkout', body: 'We look at your current checkout, apps and any checkout.liquid or Scripts logic that needs replacing.' },
      { title: 'Fixed price per feature', body: 'Each feature is scoped with how it will look and behave, and priced before work starts.' },
      { title: 'Build on a dev store', body: 'Extensions and Functions are built and tested on a development store across devices and payment methods.' },
      { title: 'Go live and monitor', body: 'Deployed to your live checkout after sign-off, then monitored for errors in the first days of orders.' },
    ],
    caseStudy: {
      tag: 'Shopify Plus checkout',
      metric: '3',
      metricLabel: 'checkout features shipped',
      title: 'An in-checkout upsell widget, a delivery date selector and a validated custom order note, built with Checkout UI Extensions and Shopify Functions. Rated 5.0.',
      bullets: [
        'In-checkout upsell widget',
        'Delivery date selector',
        'Custom order note field with character validation',
      ],
      duration: 'Completed Dec 2025',
      href: '/work/shopify-plus-checkout-3-features-2025',
    },
    faqs: [
      {
        question: 'Do I need Shopify Plus for checkout customization?',
        answer: 'Checkout UI Extensions in the information, shipping and payment steps require Shopify Plus. Some Shopify Functions (such as custom discounts) and thank-you or order status page extensions work on other plans. We will tell you what is possible on your plan before quoting.',
      },
      {
        question: 'Can you migrate our checkout.liquid or Shopify Scripts?',
        answer: 'Yes. We map what your current customizations do, rebuild the supported parts with Checkout UI Extensions and Functions, and tell you plainly about anything that cannot be reproduced.',
      },
      {
        question: 'Will it slow down checkout?',
        answer: 'Native extensions are rendered by Shopify and are designed to be fast. That is one of the main reasons to use them instead of scripts injected by apps.',
      },
    ],
    formHeading: 'Upgrade your checkout',
    formSubtext: 'Tell us which checkout features you need and your Shopify plan. You get a fixed price per feature within 24 hours.',
    related: [R.cro, R.global, R.dedicated],
  },

  // ─── International ─────────────────────────────────────────────────────────
  {
    slug: 'shopify-international-expansion',
    metaTitle: 'Shopify International Expansion: Markets, Translation & Multi-Currency | Miracle Websoft',
    metaDescription:
      'Sell in new countries with Shopify Markets: native translations, local currencies, domains, pricing and duties set up correctly. Migrate from Langify or Weglot with existing translations exported and checked.',
    eyebrow: 'SELL INTERNATIONALLY ON SHOPIFY',
    h1: 'Shopify international expansion: sell in new countries without a second store',
    subtext:
      'Shopify Markets, native translations, local currencies, domains and pricing set up properly, plus migration off translation apps like Langify with every translated string exported and checked.',
    serviceType: 'Shopify international expansion and localisation',
    offer: {
      promise: 'Your store selling in a new market, in the local language and currency.',
      price: 'Fixed price per market',
      priceNote: 'Quoted after we review your catalogue, languages and current translation setup.',
      timeline: 'Typically 1–3 weeks per market',
      guarantee: 'No lost translations. Every existing translation is exported and checked before anything is switched over.',
      includes: [
        'Shopify Markets, currencies and domains',
        'Native translations for products, pages and theme',
        'Migration from Langify, Weglot and similar apps',
        'Hreflang and international SEO checks',
      ],
    },
    problem: {
      title: 'International orders are there, but the store only speaks one language',
      body: 'Visitors from other countries see the wrong currency, untranslated pages and surprise duties at checkout, so they leave. Translation apps add scripts and monthly fees, and switching away from them feels risky.',
    },
    solution: {
      title: 'One store, set up properly for every market',
      body: 'We configure Shopify Markets, local currencies and pricing, domains or subfolders, and native translations for products, collections, pages, metafields and theme strings. If you use a translation app today, we migrate the content to Shopify native translations first and verify it.',
    },
    benefits: [
      'Shoppers see their language and currency automatically',
      'One store to manage instead of several',
      'Lower app fees after moving to native translations',
      'International SEO with correct hreflang and URLs',
      'Market-specific pricing, duties and payment methods',
      'Existing translations kept, not re-done',
    ],
    deliverables: [
      'Market plan: countries, languages, currencies, domains',
      'Shopify Markets configuration',
      'Native translations for catalogue, pages and theme',
      'Translation app migration and verification',
      'Market-specific pricing, shipping and duties setup',
      'Hreflang and international SEO checks',
    ],
    process: [
      { title: 'Plan the markets', body: 'We agree which countries, languages and currencies to launch, and how URLs should be structured for SEO.' },
      { title: 'Export and protect', body: 'Existing translations and settings are exported and backed up before anything changes.' },
      { title: 'Configure and translate', body: 'Markets, currencies, pricing and native translations are set up and checked page by page.' },
      { title: 'Launch and verify', body: 'We test each market as a local shopper would, from browsing through checkout, then switch it on.' },
    ],
    caseStudy: {
      tag: 'Translation migration',
      metric: '0',
      metricLabel: 'translations lost',
      title: 'Moved a multilingual Shopify store from the Langify app to Shopify native translations, keeping all translated content across hundreds of products, pages, metafields and theme strings with zero downtime. Rated 5.0.',
      bullets: [
        'Hundreds of products, pages and metafields migrated',
        'Theme strings carried over to native translations',
        'Zero downtime during the switch',
      ],
      duration: 'Completed Apr 2026',
      href: '/work/langify-to-shopify-native-2026',
    },
    faqs: [
      {
        question: 'Do I need Shopify Plus to sell internationally?',
        answer: 'No. Shopify Markets, multiple currencies and native translations are available on standard plans. Plus adds options such as expansion stores and more control over market-specific checkout.',
      },
      {
        question: 'Can you move us off Langify or Weglot?',
        answer: 'Yes. We export existing translations, import them into Shopify native translations, check them, and only then remove the app.',
      },
      {
        question: 'Do you write the translations?',
        answer: 'We set up the structure and migrate existing translations. New translations can be machine-generated and reviewed by your team or a translator, and we load them into the store.',
      },
    ],
    formHeading: 'Plan your next market',
    formSubtext: 'Tell us which countries you want to sell in and how translations work today. We will reply with a plan and fixed price.',
    related: [R.migration, R.checkout, R.dedicated],
  },

  // ─── Launch-ready store ────────────────────────────────────────────────────
  {
    slug: 'shopify-store-launch',
    metaTitle: 'Launch a Shopify Store in 7 Days, from $600 | Miracle Websoft',
    metaDescription:
      'A launch-ready Shopify store, live and taking orders in 7 days for $600, or a custom-designed, conversion-tuned store in 10–14 days for $1,000. Fixed price, mobile-first, payments and shipping tested.',
    eyebrow: 'LAUNCH-READY SHOPIFY STORE',
    h1: 'Shopify store setup: live and taking orders in 7 days',
    subtext:
      'Products, payments, taxes, shipping and a mobile-first theme set up and tested, so you launch with a store that sells instead of a half-finished project.',
    serviceType: 'Shopify store setup and launch',
    offer: {
      promise: 'A store that is live and ready to take real orders, at a fixed price.',
      price: '$600',
      priceNote: 'Basic Store, 7 days. Advanced Store with custom design, conversion-tuned product pages and email flows: $1,000 in 10–14 days.',
      timeline: 'Live in 7 days (Basic) or 10–14 days (Advanced), counted from when we have your products, branding and store access',
      guarantee: 'Full deposit refund if we have not started development. After that, we keep working until the store matches the agreed scope.',
      includes: [
        'Theme set up for your brand, mobile first',
        'Up to 15 products (Basic) or 30 (Advanced)',
        'Payments, taxes and shipping tested with a live order',
        'Basic SEO and post-launch support',
      ],
    },
    problem: {
      title: 'Launch dates slip while the store sits half-built',
      body: 'Theme settings, product imports, shipping zones, taxes, payment testing and mobile layout all take longer than expected. Weeks go by without a single order.',
    },
    solution: {
      title: 'A fixed scope that ends in a live store',
      body: 'We set up the theme, products, collections, payments, taxes and shipping, test checkout with a real order, and check every page on real phones. You get a store that is ready to sell on a fixed date, at a fixed price.',
    },
    benefits: [
      'Selling in days, not months',
      'Fixed price agreed up front',
      'Checkout, payments and shipping tested with a real order',
      'Designed and checked on real phones first',
      'SEO basics in place from launch day',
      'Easy to manage yourself after handover',
    ],
    deliverables: [
      'Theme setup and brand styling',
      'Products, variants and collections',
      'Payments, taxes and shipping zones',
      'Navigation, policies and key pages',
      'Mobile QA and a live test order',
      'Handover walkthrough and post-launch support',
    ],
    process: [
      { title: 'Send your brand and products', body: 'Logo, colours, product details and images. We send a short checklist so nothing is missed.' },
      { title: 'Build the store', body: 'Theme, products, collections, pages, payments, taxes and shipping, set up on a schedule we share with you.' },
      { title: 'Test like a customer', body: 'We place a real test order, check every page on phones and fix anything that feels off.' },
      { title: 'Launch and hand over', body: 'We go live with you, walk you through running the store, and stay on for post-launch support.' },
    ],
    caseStudy: {
      tag: 'Store build',
      metric: '5.0',
      metricLabel: 'client rating',
      title: 'Flowers A Million: a complete, mobile-first Shopify store for an occasion florist, with custom sections they can merchandise themselves and no paid apps added. “Great work and delivered exactly what was asked.”',
      bullets: [
        'Custom homepage and collection sections editable without code',
        'Mobile-first product pages with sticky add-to-cart',
        'Streamlined cart and checkout for gifting orders',
      ],
      duration: 'Completed Jul 2025',
      href: '/work/shopify-ecomerce-store-2025',
    },
    faqs: [
      {
        question: 'What is the difference between Basic and Advanced?',
        answer: 'Basic ($600, 7 days) is a properly configured premium theme with up to 15 products. Advanced ($1,000, 10–14 days) adds a custom-designed homepage and product page, conversion-tuned product pages, up to 30 products and Klaviyo or Mailchimp welcome and abandoned-cart flows.',
      },
      {
        question: 'What do I need to provide?',
        answer: 'Your logo, brand colours, product information and images, and access to your Shopify account. We send a checklist at kickoff.',
      },
      {
        question: 'Are Shopify and app fees included?',
        answer: 'No. Shopify’s subscription and any paid apps are billed by them directly. We tell you in advance about any paid app we recommend.',
      },
    ],
    formHeading: 'Launch your store',
    formSubtext: 'Tell us what you sell and when you want to launch. We will confirm the plan and a launch date within 24 hours.',
    related: [R.migration, R.care, R.cro],
  },
]

export function getShopifyOffer(slug: string): ServiceLandingData | undefined {
  return shopifyOffers.find((s) => s.slug === slug)
}
