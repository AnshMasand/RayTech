/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          'dark': '#506e9a',      // Primary grayblue background
          'neutral': '#ffffff',   // White accent
          'light': '#f8f9fb',     // Light background
          'card': '#5b7ca8',      // Lighter grayblue cards
          'border': '#6b8bb5',    // Grayblue borders
          'muted': '#344b6d',     // Darker grayblue text
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--theme-neutral) 0%, var(--theme-accent, var(--theme-neutral)) 100%)',
        'gradient-primary-light': 'linear-gradient(135deg, var(--theme-neutral) 0%, color-mix(in srgb, var(--theme-neutral) 70%, white) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(253, 129, 0, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(253, 129, 0, 0.8), 0 0 40px rgba(253, 129, 0, 0.6)' },
        },
        'glow-teal': {
          '0%': { boxShadow: '0 0 20px rgba(0, 194, 204, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 194, 204, 0.8), 0 0 40px rgba(0, 194, 204, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 