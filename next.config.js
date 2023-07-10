/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  env: {
    SERVERLESS_ENDPOINT: process.env.SERVERLESS_ENDPOINT,
    SERVERLESS_SITE_COUNTER_FUNCTION:
      process.env.SERVERLESS_SITE_COUNTER_FUNCTION,
  },
};

module.exports = nextConfig;
