export interface ThemeConfig {
  name: string
  description: string
  colors: {
    dark: string
    neutral: string
    light: string
    card: string
    border: string
    muted: string
    accent?: string
  }
  inspiration: string
  isLight?: boolean
}

export interface ThemeConfig {
  name: string
  description: string
  colors: {
    dark: string
    neutral: string
    light: string
    card: string
    border: string
    muted: string
    accent?: string
  }
  inspiration: string
  isLight?: boolean
}

export const themes: Record<string, ThemeConfig> = {
  corporate: {
    name: 'Corporate Grayblue',
    description: 'Sophisticated grayblue palette for established enterprises',
    colors: {
      dark: '#506e9a',
      neutral: '#ffffff',
      light: '#f8f9fb',
      card: '#5b7ca8',
      border: '#6b8bb5',
      muted: '#344b6d'
    },
    inspiration: 'Professional grayblue - Modern corporate aesthetic',
    isLight: true
  }
}

export const defaultTheme = 'corporate'
