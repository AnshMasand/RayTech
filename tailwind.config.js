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
          // Executive Elite Theme
          'primary': '#1a365d',
          'secondary': '#2d3748',
          'accent': '#3182ce',
          'background': '#f7fafc',
          'surface': '#ffffff',
          'surface-elevated': '#ffffff',
          'border': '#e2e8f0',
          'border-subtle': '#f1f5f9',
          
          // Legacy support
          'dark': '#1a365d',
          'neutral': '#ffffff',
          'light': '#f7fafc',
          'card': '#ffffff',
          'muted': '#718096',
        },
      },
      
      backgroundImage: {
        'gradient-primary': 'var(--theme-gradient-primary)',
        'gradient-secondary': 'var(--theme-gradient-secondary)',
        'gradient-accent': 'var(--theme-gradient-accent)',
        'gradient-subtle': 'var(--theme-gradient-subtle)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'premium-mesh': 'linear-gradient(135deg, transparent 0%, rgba(49, 130, 206, 0.02) 100%), linear-gradient(45deg, transparent 40%, rgba(26, 54, 93, 0.03) 60%)',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      boxShadow: {
        'theme-sm': 'var(--theme-shadow-sm)',
        'theme-md': 'var(--theme-shadow-md)',
        'theme-lg': 'var(--theme-shadow-lg)',
        'theme-xl': 'var(--theme-shadow-xl)',
        'theme-glow': 'var(--theme-shadow-glow)',
        'premium': '0 20px 25px -5px rgba(26, 54, 93, 0.1), 0 10px 10px -5px rgba(26, 54, 93, 0.04)',
        'executive': '0 25px 50px -12px rgba(26, 54, 93, 0.25), 0 10px 20px -5px rgba(26, 54, 93, 0.1)',
        'glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      
      animation: {
        // Professional animations
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up-fade': 'slideUpFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        
        // Legacy animations
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      
      keyframes: {
        // Professional keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: 'var(--theme-shadow-glow)' },
          '50%': { boxShadow: '0 0 40px rgba(49, 130, 206, 0.5), 0 0 80px rgba(49, 130, 206, 0.2)' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        
        // Legacy keyframes
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(253, 129, 0, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(253, 129, 0, 0.8), 0 0 40px rgba(253, 129, 0, 0.6)' },
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
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 