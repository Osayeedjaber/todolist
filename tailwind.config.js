/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'], // Using Orbitron font
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#03071E',
        'glass-light': 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(255, 255, 255, 0.03)',
        'neon-blue': '#4dd0e1',
        'light-bg': '#F0F0F0',
        'task-bg': '#0F172A',
        'task-hover': '#1E293B',
        'input-bg': 'rgba(255, 255, 255, 0.05)',
        'input-border': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '35px',
      },
      boxShadow: {
        'glass': '0 6px 18px rgba(0,0,0,0.25)',
        'input': 'inset 0 2px 4px 0 rgba(0,0,0,0.1)',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.8rem',
        'base': '1rem',
        'lg': '1.15rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      padding: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
      },
      margin: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
      },
      borderRadius: {
        'lg': '0.6rem',
        'xl': '0.8rem',
        '2xl': '1rem',
        'md': '0.4rem',
      },
      maxWidth: {
        'md': '42rem',
      },
      spacing: {
        '5': '1.25rem',
        '7': '1.75rem',
      }
    },
  },
  plugins: [],
}
