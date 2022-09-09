/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ['images.unsplash.com','cdn-icons-png.flaticon.com'],
},
}

module.exports = nextConfig
