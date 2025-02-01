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
            'lato': ['Lato', 'sans-serif'],
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
            'glass': '20px',
          },
          boxShadow: {
            'glass': '0 4px 12px rgba(0,0,0,0.2)',
            'input': 'inset 0 1px 3px 0 rgba(0,0,0,0.1)',
          },
          fontSize: {
            'xs': '0.7rem',
            'sm': '0.75rem',
            'base': '0.9rem',
            'lg': '1rem',
            'xl': '1.1rem',
            '2xl': '1.3rem',
          },
          padding: {
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
          },
          margin: {
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
          },
          borderRadius: {
            'lg': '0.5rem',
            'xl': '0.6rem',
            '2xl': '0.8rem',
            'md': '0.3rem',
          },
          maxWidth: {
            'md': '36rem',
          },
          spacing: {
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '7': '1.75rem',
          }
        },
      },
      plugins: [],
    }
