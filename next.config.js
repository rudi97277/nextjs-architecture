/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: config => {
    config.snapshot = {
      ...(config.snapshot ?? {}),
      managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@next)/]
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  },
  distDir: 'dist',
  images: {
    domains: ['']
  },
  env: {
    BASEURL: 'https://example.com',
  },
  async rewrites() {
    return {}
  }
}

module.exports = nextConfig
