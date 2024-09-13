/** @type {import('next').NextConfig} */

// next.config.js
const shouldAnalyzeBundles = process.env.ANALYZE === 'true';

const nextConfig = {
    images: {
      domains: ['i.ytimg.com'], // Add 'i.ytimg.com' to the array of allowed domains
    },
  };
  
  if (shouldAnalyzeBundles) {
    const withNextBundleAnalyzer =
      require('next-bundle-analyzer')(/* options come there */);
    module.exports = withNextBundleAnalyzer(nextConfig);
  }else{
    module.exports = nextConfig;
  }

