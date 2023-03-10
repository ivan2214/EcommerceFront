/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1440px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '2560px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        purple: {
          700: '#6F1AB6',
        },
      },
    },
  },
  plugins: [],
}
