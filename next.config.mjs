/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove any output configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // SEO optimizations
  async headers() {
    return [
      {
        source: '/podcast',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
    ]
  },
  // Remove the distDir configuration as it's causing issues
  // distDir: process.env.BUILD_DIR || '.next',
}

export default nextConfig
