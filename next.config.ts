import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'image.thum.io' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'farmersatelier.com' },
      { protocol: 'https', hostname: 'www.otaa.com' },
      { protocol: 'https', hostname: 'buddhatrends.com' },
      { protocol: 'https', hostname: 'momifa.com' },
    ],
  },
  compress: true,
  async redirects() {
    return [
      // ─── Homepage variants ───────────────────────────────────────────────
      { source: '/home', destination: '/', permanent: true },

      // ─── About ───────────────────────────────────────────────────────────
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/who-we-are', destination: '/about', permanent: true },
      { source: '/founder-story-karam-sing', destination: '/about', permanent: true },
      { source: '/awards-and-achievements', destination: '/about', permanent: true },

      // ─── Contact ─────────────────────────────────────────────────────────
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/request-quote', destination: '/contact', permanent: true },
      { source: '/book-a-shopify-consultation-schedule-an-appointment-miracle-websoft', destination: '/contact', permanent: true },
      { source: '/career', destination: '/contact', permanent: true },
      { source: '/bank-details', destination: '/contact', permanent: true },

      // ─── Case Studies ────────────────────────────────────────────────────
      { source: '/case-studio', destination: '/case-studies', permanent: true },
      { source: '/our-reviews', destination: '/case-studies', permanent: true },
      { source: '/nathan-james', destination: '/case-studies', permanent: true },
      { source: '/memori-sentimental', destination: '/case-studies', permanent: true },
      { source: '/animeal', destination: '/case-studies', permanent: true },
      { source: '/rxbar-packaging-redesign-a-bold-case-study-refresh-by-our-creative-studio', destination: '/case-studies', permanent: true },

      // ─── Blog ────────────────────────────────────────────────────────────
      { source: '/blog-website-setup', destination: '/blog', permanent: true },
      { source: '/how-to-show-recently-viewed-products-in-shopify-step-by-step-guide', destination: '/blog', permanent: true },
      { source: '/built-a-custom-shopify-section-with-ai-no-code-needed-game-changer-for-store-owners', destination: '/blog', permanent: true },
      { source: '/shopify-may-2025-updates-every-merchant-should-know', destination: '/blog', permanent: true },
      { source: '/\uD83D\uDD25-shopify-may-2025-updates-every-merchant-should-know', destination: '/blog', permanent: true },
      { source: '/get-started-with-the-pc-builder-shopify-app-full-setup-walkthrough', destination: '/blog', permanent: true },
      { source: '/reimagining-sunchips-a-passion-project-by-miracle-websoft', destination: '/case-studies', permanent: true },
      { source: '/start-your-online-business-10000-only-free-server-and-domain', destination: '/blog', permanent: true },
      { source: '/blog/page/:num', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/about', permanent: true },

      // ─── Privacy & Terms ─────────────────────────────────────────────────
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-policy-pc-builder', destination: '/privacy', permanent: true },
      { source: '/privacy-policy-engraving-app', destination: '/privacy', permanent: true },
      { source: '/privacy-policy-social-auto-post', destination: '/privacy', permanent: true },
      { source: '/sections-warehouse-privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-condition', destination: '/terms', permanent: true },
      { source: '/terms-and-conditions-pc-builder', destination: '/terms', permanent: true },
      { source: '/terms-of-service-for-social-auto-post', destination: '/terms', permanent: true },

      // ─── Clothing brands page → canonical development page ───────────────
      { source: '/services/shopify-development-clothing-brands', destination: '/services/shopify/development', permanent: true },

      // ─── Services → Shopify Development ──────────────────────────────────
      { source: '/shopify-store-setup', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-e-commerce-service-packages', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-maintenance-support-by-shopify-development-agency', destination: '/services/shopify/development', permanent: true },
      { source: '/psd-to-shopify-developments', destination: '/services/shopify/development', permanent: true },
      { source: '/theme-customization', destination: '/services/shopify/development', permanent: true },
      { source: '/white-label-shopify-development-2', destination: '/services/shopify/development', permanent: true },
      { source: '/white-label-wordpress-development', destination: '/services/shopify/development', permanent: true },
      { source: '/white-label-website-design', destination: '/services/shopify/development', permanent: true },

      { source: '/shopify-business-skills-professional-training', destination: '/services/shopify/development', permanent: true },
      { source: '/fashion-apparel', destination: '/services/shopify/development', permanent: true },
      { source: '/beauty-cosmetics', destination: '/services/shopify/development', permanent: true },
      { source: '/food-beverages', destination: '/services/shopify/development', permanent: true },
      { source: '/food-beverages-2', destination: '/services/shopify/development', permanent: true },
      { source: '/health-nutrition', destination: '/services/shopify/development', permanent: true },
      { source: '/health-nutrition-new', destination: '/services/shopify/development', permanent: true },
      { source: '/pet-industry', destination: '/services/shopify/development', permanent: true },
      { source: '/shoes-page', destination: '/services/shopify/development', permanent: true },
      { source: '/wine-page', destination: '/services/shopify/development', permanent: true },
      { source: '/section', destination: '/services/shopify/development', permanent: true },
      { source: '/shop', destination: '/services/shopify/development', permanent: true },
      { source: '/expert-shopify-development-partner-for-digital-agencies', destination: '/services/shopify/development', permanent: true },
      { source: '/Expert', destination: '/services/shopify/development', permanent: true },

      // ─── Services → App Development ──────────────────────────────────────
      { source: '/ai-auto-post', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-app-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-app-development-trusted-shopify-development-agency', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-add-ons-plugins-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/custom-pc-builder-for-shopify', destination: '/services/shopify-app-development', permanent: true },
      { source: '/ai-shopify-theme-sections-builder', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-product-engraving', destination: '/services/shopify-app-development', permanent: true },
      { source: '/pc-builder-documentation', destination: '/services/shopify-app-development', permanent: true },
      { source: '/apps-2', destination: '/services/shopify-app-development', permanent: true },
      { source: '/our-public-apps', destination: '/services/shopify-app-development', permanent: true },

      // ─── Services → CRO & Speed ───────────────────────────────────────────
      { source: '/conversion-optimization', destination: '/services/shopify-cro-speed', permanent: true },
      { source: '/shopify-speed-optimization', destination: '/services/shopify-cro-speed', permanent: true },

      // ─── Services → Migration ─────────────────────────────────────────────
      { source: '/migration-to-shopify', destination: '/services/shopify-migration', permanent: true },

      // ─── Old shopify-services/* sub-pages (specific first, wildcard last) ─
      { source: '/shopify-services/custom-shopify-app-development-private-public', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-api-custom-endpoint-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-speed-performance-optimization-service', destination: '/services/shopify-cro-speed', permanent: true },
      { source: '/shopify-services/product-information-management-pim-integration', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/erp-integration-for-shopify-netsuite-sap-etc', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/3pl-warehouse-management-system-wms-integration', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-training-for-merchants-staff', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-services/accessibility-wcag-ada-compliance-audit-remediation', destination: '/services/shopify-cro-speed', permanent: true },
      { source: '/shopify-services/shopify-for-print-on-demand-pod-businesses', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-for-digital-products-downloads', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-plus-functions-scripts-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-development-for-beauty-cosmetics-brands', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-services/klaviyo-email-sms-marketing-automation-setup', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/crm-integration-for-shopify-salesforce-hubspot', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-store-redesign-modernization', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-services/shopify-for-food-beverage-brands', destination: '/services/shopify/development', permanent: true },
      { source: '/shopify-services/shopify-plus-launchpad-automation-for-sales-events', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/advanced-product-customizer-personalizer', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/:path*', destination: '/services/shopify/development', permanent: true },

      // ─── Portfolio (wildcard patterns) ───────────────────────────────────
      { source: '/portfolio-items/:path*', destination: '/case-studies', permanent: true },
      { source: '/portfolio_tags/:path*', destination: '/case-studies', permanent: true },
      { source: '/portfolio_category/:path*', destination: '/case-studies', permanent: true },
      { source: '/portfolio_skills/:path*', destination: '/case-studies', permanent: true },
      { source: '/portfolio/:path*', destination: '/case-studies', permanent: true },
      { source: '/portfolio', destination: '/case-studies', permanent: true },

      // ─── Old product/shop pages ───────────────────────────────────────────
      { source: '/product/:path*', destination: '/services/shopify/development', permanent: true },
      { source: '/product-category/:path*', destination: '/services/shopify/development', permanent: true },

      // ─── Industries ──────────────────────────────────────────────────────
      // Index page (no /industries/page.tsx exists)
      { source: '/industries', destination: '/services', permanent: true },
      // Slug mismatches — redirect to the correct industry page
      { source: '/industries/kidswear-childrens-clothing', destination: '/industries/kids-children-clothing', permanent: true },
      { source: '/industries/luxury-fashion', destination: '/industries/occasion-wear-luxury-fashion', permanent: true },
      { source: '/industries/bridal-occasion-wear', destination: '/industries/occasion-wear-luxury-fashion', permanent: true },
      { source: '/industries/plus-size-fashion', destination: '/industries/plus-size-inclusive-apparel', permanent: true },
      // No matching industry page — send to relevant service
      { source: '/industries/accessories-jewellery', destination: '/services/shopify/development', permanent: true },
      { source: '/industries/footwear-shoes', destination: '/services/shopify/development', permanent: true },
      { source: '/industries/swimwear-beachwear', destination: '/services/shopify/development', permanent: true },

      // ─── Misc old pages ───────────────────────────────────────────────────
      { source: '/the-studio', destination: '/case-studies', permanent: true },

      // ─── WordPress / old CMS paths ────────────────────────────────────────
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-sitemap-index.xsl', destination: '/', permanent: true },
      { source: '/xmlrpc.php', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
