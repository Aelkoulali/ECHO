// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '33.33%': { transform: 'translateX(-33.33%)' },
          '66.66%': { transform: 'translateX(-66.66%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        slide: 'slide 9s infinite',
      },
    },
  },
  plugins: [],
};