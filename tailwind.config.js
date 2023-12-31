/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'regal-blue': '#243c5a',
        'white': "#ffffff",
        'red': "#b91c1c",
        'layout-color': "#3e3e3e",
        'white.100': '#757575',
        'hover-color': '#7ab532',
        'footer-color': "#222222",
        'second-color': "#f5f5f5",
        'first-text': '#333333',
        'second-text': '#606060',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        '48rem': '140'
      },
      animation: {
        'wiggle': '3s linear 1s infinite alternate slidein'
      },
      transitionDuration: {

      }
    },
  },
  plugins: [],
}
