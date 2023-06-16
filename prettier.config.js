module.exports = {
    semi: false,
    trailingComma: 'es5',
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
}
