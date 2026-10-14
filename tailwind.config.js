/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050607',
          900: '#08090b',
          850: '#0c0e12',
          800: '#111318',
          750: '#171a22',
          700: '#1e222d',
          600: '#2a3040',
        },
        surface: {
          base: '#08090b',
          card: '#111318',
          elevated: '#171a22',
          border: '#1f2430',
          'border-light': '#2c3345',
        },
        text: {
          primary: '#f2f2f0',
          secondary: '#969ba5',
          muted: '#656b78',
        },
        accent: {
          DEFAULT: '#8aa8ff',
          hover: '#a3bcff',
          muted: '#8aa8ff20',
          glow: 'rgba(138, 168, 255, 0.15)',
        },
        emerald: {
          subtle: '#10b98120',
          badge: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        tightest: '-0.03em',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(138, 168, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
