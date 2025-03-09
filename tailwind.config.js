/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2', // cyan-600
        },
        'secondary': {
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4f46e5', // indigo-600
        },
        'dark': {
          DEFAULT: '#111827', // gray-900
          light: '#1f2937', // gray-800
          lighter: '#374151', // gray-700
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};