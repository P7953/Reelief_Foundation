import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New Neutral Color Palette
        "neutral-lightest": "#F5F6F7",
        "neutral-light": "#C1C4C8",
        "neutral-dark": "#7B7F85",
        "neutral-darkest": "#2B2E33",

        // Existing Hub Colors (for backward compatibility)
        "hub-blue": "#2563eb",
        "hub-terracotta": "#c36a4b",
        "hub-yellow": "#f6d167",
        "hub-white": "#ffffff",
        "hub-green": "#3ADC49",
        "hub-cream": "#FFFDD0",
        "hub-grey": "#7B7F85", // Added for consistency

        primary: {
          yellow: '#FAEF35',
          orange: '#FF6B35',
        },
        accent: {
          pink: '#FF5E5E',
          blue: '#607AFF',
          green: '#3ADC49',
          purple: '#CA5DFF',
        }
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
      borderRadius: {
        "xl": "1.5rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "full": "9999px",
      },
      animation: {
        'bounce-slow': 'bounce 1s cubic-bezier(0.04, 0.35, 0, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 75%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-30px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
