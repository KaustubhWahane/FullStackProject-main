/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      colors: {
        richChocolate: '#5D4037',
        creamyVanilla: '#FFF9C4',
        warmBeige: "#D2B48C",
      },
      animation: {
        pulse0112: 'pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite',
      },
      keyframes: {
        pulse0112: {
          '0%, 100%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
