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
  // Remove the distDir configuration as it's causing issues
  // distDir: process.env.BUILD_DIR || '.next',
}

export default nextConfig
