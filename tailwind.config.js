/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#090A10',
          surface: '#0F131E',
          card: '#131826',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#64748B',
        },
        brand: {
          cyan: '#00E5FF',
          sky: '#38BDF8',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          emerald: '#10B981',
          coral: '#F43F5E',
          amber: '#F59E0B',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(0, 229, 255, 0.25)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.25)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
        'bento': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'bento-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          'from': { backgroundPosition: '0 0' },
          'to': { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}