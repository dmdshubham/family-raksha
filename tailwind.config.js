/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#667eea',
        },
        indigo: {
          600: '#764ba2',
        },
      },
    },
  },
  plugins: [],
}
