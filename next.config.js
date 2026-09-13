/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // we use biome for linting
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'imgbb.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {},
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = false
    }
    return config
  },
};

module.exports = nextConfig;
