const withLinary = require('next-with-linaria');
const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {};
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(withLinary(nextConfig));
