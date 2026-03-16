/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  publicRuntimeConfig: {
    foo: 'hellyeah',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['sharp'],
};

module.exports = nextConfig;
