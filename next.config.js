/** @type {import('next').NextConfig} */
const nextConfig = {
    // Compress output
    compress: true,
    
    // Optimize images
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'placeholder.com',
        },
        {
          protocol: 'https',
          hostname: '**.placeholder.com',
        },
        {
          protocol: 'http',
          hostname: 'placeholder.com',
        },
        {
          protocol: 'http',
          hostname: '**.placeholder.com',
        },
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
    },
    
    // Enable experimental features
    experimental: {
      serverActions: true,
      optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
    
    // Performance optimizations
    poweredByHeader: false,
    reactStrictMode: true,
    
    // Headers for caching and performance
    async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' },
            { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
            { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
            // Cache API responses
            { key: 'Cache-Control', value: 'public, s-maxage=60, stale-while-revalidate=300' },
          ],
        },
        {
          source: '/:path*',
          headers: [
            { key: 'X-DNS-Prefetch-Control', value: 'on' },
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          ],
        },
        {
          source: '/images/:path*',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
        {
          source: '/_next/static/:path*',
          headers: [
            { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;