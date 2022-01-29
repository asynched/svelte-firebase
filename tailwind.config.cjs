module.exports = {
  content: ['./index.html', './src/**/*.svelte'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
