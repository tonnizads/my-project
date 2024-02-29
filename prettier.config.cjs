/** @type {import('prettier').Config} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-organize-imports',
  ],
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  endOfLine: 'auto',
  singleAttributePerLine: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
}

module.exports = config
