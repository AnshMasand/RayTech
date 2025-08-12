export interface ThemeConfig {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    surfaceElevated: string
    border: string
    borderSubtle: string
    text: {
      primary: string
      secondary: string
      muted: string
      inverse: string
    }
    gradients: {
      primary: string
      secondary: string
      accent: string
      subtle: string
    }
  }
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
    glow: string
  }
  inspiration: string
  isLight?: boolean
}

export const themes: Record<string, ThemeConfig> = {
  executive: {
    name: 'Executive Elite',
    description: 'Premium corporate design for industry leaders',
    colors: {
      primary: '#1a365d',      // Deep professional navy
      secondary: '#2d3748',     // Sophisticated charcoal
      accent: '#3182ce',        // Corporate blue
      background: '#f7fafc',    // Premium light background
      surface: '#ffffff',       // Pure white surfaces
      surfaceElevated: '#ffffff',
      border: '#e2e8f0',        // Subtle borders
      borderSubtle: '#f1f5f9',  // Very subtle borders
      text: {
        primary: '#1a202c',     // Rich text
        secondary: '#2d3748',   // Secondary text
        muted: '#718096',       // Muted text
        inverse: '#ffffff'      // White text on dark
      },
      gradients: {
        primary: 'linear-gradient(135deg, #1a365d 0%, #2b77ad 100%)',
        secondary: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
        accent: 'linear-gradient(135deg, #3182ce 0%, #63b3ed 100%)',
        subtle: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
      }
    },
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      md: '0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
      lg: '0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)',
      xl: '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.12)',
      glow: '0 0 30px rgba(49, 130, 206, 0.3), 0 0 60px rgba(49, 130, 206, 0.1)'
    },
    inspiration: 'Fortune 500 executive boardroom aesthetic',
    isLight: true
  },
  
  platinum: {
    name: 'Platinum Professional',
    description: 'Ultra-premium design for market leaders',
    colors: {
      primary: '#0f172a',      // Premium dark slate
      secondary: '#1e293b',     // Sophisticated slate
      accent: '#0ea5e9',        // Premium sky blue
      background: '#f8fafc',    // Pristine background
      surface: '#ffffff',       // Pure surfaces
      surfaceElevated: '#ffffff',
      border: '#e2e8f0',        // Clean borders
      borderSubtle: '#f1f5f9',  // Whisper borders
      text: {
        primary: '#020617',     // Deep text
        secondary: '#334155',   // Professional text
        muted: '#64748b',       // Refined muted
        inverse: '#f8fafc'      // Inverse text
      },
      gradients: {
        primary: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
        secondary: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
        accent: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
        subtle: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }
    },
    shadows: {
      sm: '0 2px 4px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)',
      md: '0 8px 16px rgba(15, 23, 42, 0.12), 0 3px 6px rgba(15, 23, 42, 0.08)',
      lg: '0 16px 32px rgba(15, 23, 42, 0.16), 0 6px 12px rgba(15, 23, 42, 0.12)',
      xl: '0 32px 64px rgba(15, 23, 42, 0.24), 0 12px 24px rgba(15, 23, 42, 0.16)',
      glow: '0 0 40px rgba(14, 165, 233, 0.4), 0 0 80px rgba(14, 165, 233, 0.15)'
    },
    inspiration: 'Platinum-tier enterprise design language',
    isLight: true
  }
}

export const defaultTheme = 'executive'
