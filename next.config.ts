import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  async redirects() {
    return [
      // Old homepage variants
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },

      // Old about page
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },

      // Old services index
      { source: '/services', destination: '/services/shopify-development-clothing-brands', permanent: true },
      { source: '/services/', destination: '/services/shopify-development-clothing-brands', permanent: true },

      // Old shopify-services sub-pages → new service pages
      { source: '/shopify-services/custom-shopify-app-development-private-public', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/custom-shopify-app-development-private-public/', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-api-custom-endpoint-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-api-custom-endpoint-development/', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/shopify-speed-performance-optimization-service', destination: '/services/shopify-cro-speed', permanent: true },
      { source: '/shopify-services/shopify-speed-performance-optimization-service/', destination: '/services/shopify-cro-speed', permanent: true },
      { source: '/shopify-services/product-information-management-pim-integration', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/product-information-management-pim-integration/', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-services/:path*', destination: '/services/shopify-development-clothing-brands', permanent: true },

      // Old standalone service pages
      { source: '/shopify-app-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-app-development/', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-store-setup', destination: '/services/shopify-development-clothing-brands', permanent: true },
      { source: '/shopify-store-setup/', destination: '/services/shopify-development-clothing-brands', permanent: true },
      { source: '/shopify-add-ons-plugins-development', destination: '/services/shopify-app-development', permanent: true },
      { source: '/shopify-add-ons-plugins-development/', destination: '/services/shopify-app-development', permanent: true },

      // Old blog posts → blog index
      { source: '/how-to-show-recently-viewed-products-in-shopify-step-by-step-guide', destination: '/blog', permanent: true },
      { source: '/how-to-show-recently-viewed-products-in-shopify-step-by-step-guide/', destination: '/blog', permanent: true },

      // Old category / archive pages → blog
      { source: '/category/:path*', destination: '/blog', permanent: true },

      // Old product/shop pages → services
      { source: '/product/:path*', destination: '/services/shopify-development-clothing-brands', permanent: true },
      { source: '/product-category/:path*', destination: '/services/shopify-development-clothing-brands', permanent: true },
    ]
  },
}

export default nextConfig
