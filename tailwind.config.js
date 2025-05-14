/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#4A90E2',
        'mint-green': '#7ED6C1',
        'warm-yellow': '#FBC531',
        'light-gray': '#F5F6FA',
        'coral': '#FF6B6B',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 