/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this for static export
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'saptrishifoundation.in',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;