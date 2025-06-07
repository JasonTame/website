const rules = {
  printWidth: 140,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'all',
  bracketSameLine: true,
}

const config = {
  importOrder: ['^astro:', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  ...rules,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
}

export default config
