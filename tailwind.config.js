/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6F82FF',
          DEFAULT: '#1fb6ff',
          dark: '#4151B7',
          black: '#000000',
          white: '#FFFFFF',
        },
        secondary: {
          light: '#b3c7f9',
          DEFAULT: '#5a67d8',
          dark: '#3c4f9d',
          white: '#F4F4F4',
        },
        accent: {
          light: '#BCC5FF',
          DEFAULT: '#667eea',
          dark: '#3B447F',
        },
        neutral: {
          light: '#e2e8f0',
          DEFAULT: '#cbd5e0',
          dark: '#718096',
        },
      },
    },
  },
  plugins: [],
};
