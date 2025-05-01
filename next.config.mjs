/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the static export option
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['v0.dev'],
    unoptimized: true,
  },
  // This ensures the "out" directory is used for the build
  distDir: process.env.BUILD_DIR || '.next',
}

export default nextConfig
