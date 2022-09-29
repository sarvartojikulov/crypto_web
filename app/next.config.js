/* eslint-disable */
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    externalDir: true,
  },
  i18n,
  NEXT_TELEGRAM_TOKEN: process.env.NEXT_TELEGRAM_TOKEN,
});
