/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keep your original fonts, they fit the PDF's sci-fi theme well
        display: ['"Orbitron"', 'sans-serif'], 
        body: ['"Rajdhani"', 'sans-serif'],
      },
      colors: {
        sutra: {
          dark: '#050214',   // The PDF's deep background color
          purple: '#8b5cf6', // The neon purple accent
          pink: '#d946ef',   // The pink glow
          cyan: '#06b6d4',   // The cyan tech lines
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3)' },
        }
      }
    },
  },
  plugins: [],
}