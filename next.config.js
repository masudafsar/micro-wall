/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        minimumCacheTTL: 20,
        protocol: 'https',
        hostname: '*.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;
