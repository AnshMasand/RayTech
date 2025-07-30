export interface ThemeConfig {
  name: string
  description: string
  colors: {
    dark: string
    neutral: string
    light: string
  }
  inspiration: string
}

export const themes: Record<string, ThemeConfig> = {
  raytech: {
    name: 'Professional Teal',
    description: 'Sophisticated teal-gray palette for manufacturing excellence',
    colors: {
      dark: '#1a2625',
      neutral: '#8a9491', 
      light: '#f8f9f8'
    },
    inspiration: 'Current - Industrial manufacturing aesthetic'
  },
  
  corporate: {
    name: 'Corporate Blue',
    description: 'Trust-inspiring blue palette for established enterprises',
    colors: {
      dark: '#0f1419',
      neutral: '#3b82f6',
      light: '#ffffff'
    },
    inspiration: 'Syska LED, IBM, Microsoft - Corporate reliability'
  },
  
  modern: {
    name: 'Modern Gray',
    description: 'Clean, minimalist gray palette for contemporary businesses',
    colors: {
      dark: '#111827',
      neutral: '#6b7280',
      light: '#f9fafb'
    },
    inspiration: 'Signify (Philips), Apple Business - Modern minimalism'
  },
  
  tech: {
    name: 'Tech Green',
    description: 'Innovation-focused green palette for technology leaders',
    colors: {
      dark: '#0f1b0f',
      neutral: '#10b981',
      light: '#f0fdf4'
    },
    inspiration: 'NVIDIA, Schneider Electric - Technology innovation'
  },
  
  premium: {
    name: 'Premium Purple',
    description: 'Luxury purple palette for premium B2B solutions',
    colors: {
      dark: '#1e1b4b',
      neutral: '#8b5cf6',
      light: '#faf5ff'
    },
    inspiration: 'Stripe, Twilio - Premium SaaS platforms'
  },
  
  energy: {
    name: 'Energy Orange',
    description: 'Dynamic orange palette for energy and innovation',
    colors: {
      dark: '#1c1917',
      neutral: '#f97316',
      light: '#fffbeb'
    },
    inspiration: 'Siemens, GE - Energy and industrial solutions'
  }
}

export const defaultTheme = 'raytech'

export function getThemeClasses(theme: string = defaultTheme) {
  const themeConfig = themes[theme] || themes[defaultTheme]
  
  return {
    dark: `${theme}-dark`,
    neutral: `${theme}-neutral`, 
    light: `${theme}-light`,
    bgDark: `bg-${theme}-dark`,
    bgNeutral: `bg-${theme}-neutral`,
    bgLight: `bg-${theme}-light`,
    textDark: `text-${theme}-dark`,
    textNeutral: `text-${theme}-neutral`,
    textLight: `text-${theme}-light`,
    borderNeutral: `border-${theme}-neutral`,
  }
}