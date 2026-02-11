const withLinary = require('next-with-linaria');

const nextConfig = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    localeDetection: false,
  }
};

module.exports = withLinary(nextConfig);