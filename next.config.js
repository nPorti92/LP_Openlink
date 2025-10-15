/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Disable the API routes since we're doing static export
  trailingSlash: true,
}

module.exports = nextConfig
