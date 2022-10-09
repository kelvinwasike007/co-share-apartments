/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte, ts}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('home.jpg')"
      }),
    },
  },
  plugins: [require('daisyui')],
}
