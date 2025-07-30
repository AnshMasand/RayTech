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
        // Current Theme - Professional Teal (Darker)
        'raytech': {
          'dark': '#1a2625',      // Much darker teal base
          'neutral': '#8a9491',   // Muted teal-gray accent
          'light': '#f8f9f8',     // Pure white background
        },
        
        // Theme 1: Corporate Blue (Syska-inspired)
        'corporate': {
          'dark': '#0f1419',      // Deep navy blue
          'neutral': '#3b82f6',   // Professional blue
          'light': '#ffffff',     // Pure white
        },
        
        // Theme 2: Modern Gray (Signify-inspired)
        'modern': {
          'dark': '#111827',      // Charcoal gray
          'neutral': '#6b7280',   // Medium gray
          'light': '#f9fafb',     // Off-white
        },
        
        // Theme 3: Tech Green (Industrial)
        'tech': {
          'dark': '#0f1b0f',      // Deep forest green
          'neutral': '#10b981',   // Emerald green
          'light': '#f0fdf4',     // Light green tint
        },
        
        // Theme 4: Premium Purple (SaaS)
        'premium': {
          'dark': '#1e1b4b',      // Deep indigo
          'neutral': '#8b5cf6',   // Purple accent
          'light': '#faf5ff',     // Light purple tint
        },
        
        // Theme 5: Warm Orange (Energy)
        'energy': {
          'dark': '#1c1917',      // Dark brown
          'neutral': '#f97316',   // Orange accent
          'light': '#fffbeb',     // Warm white
        },
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
          '0%': { boxShadow: '0 0 20px #FD8100' },
          '100%': { boxShadow: '0 0 30px #FD8100, 0 0 40px #FD8100' },
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