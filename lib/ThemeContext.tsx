'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { themes, defaultTheme, type ThemeConfig } from './themes'

interface ThemeContextType {
  currentTheme: string
  setTheme: (theme: string) => void
  themeConfig: ThemeConfig
  availableThemes: Record<string, ThemeConfig>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('raytech-theme')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  const setTheme = (theme: string) => {
    if (themes[theme]) {
      setCurrentTheme(theme)
      localStorage.setItem('raytech-theme', theme)
      
      // Update CSS custom properties for dynamic theming
      const root = document.documentElement
      const themeConfig = themes[theme]
      
      root.style.setProperty('--theme-dark', themeConfig.colors.dark)
      root.style.setProperty('--theme-neutral', themeConfig.colors.neutral)
      root.style.setProperty('--theme-light', themeConfig.colors.light)
    }
  }

  const value = {
    currentTheme,
    setTheme,
    themeConfig: themes[currentTheme],
    availableThemes: themes,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Hook to get theme-aware classes and styles
export function useThemeClasses() {
  const { currentTheme, themeConfig } = useTheme()
  
  return {
    // Background classes (Tailwind compatible)
    bgDark: `bg-${currentTheme}-dark`,
    bgNeutral: `bg-${currentTheme}-neutral`,
    bgLight: `bg-${currentTheme}-light`,
    
    // Text classes (Tailwind compatible)
    textDark: `text-${currentTheme}-dark`,
    textNeutral: `text-${currentTheme}-neutral`,
    textLight: `text-${currentTheme}-light`,
    
    // Border classes (Tailwind compatible)
    borderNeutral: `border-${currentTheme}-neutral`,
    borderDark: `border-${currentTheme}-dark`,
    
    // CSS-in-JS styles for dynamic usage
    styles: {
      bgDark: { backgroundColor: themeConfig.colors.dark },
      bgNeutral: { backgroundColor: themeConfig.colors.neutral },
      bgLight: { backgroundColor: themeConfig.colors.light },
      textDark: { color: themeConfig.colors.dark },
      textNeutral: { color: themeConfig.colors.neutral },
      textLight: { color: themeConfig.colors.light },
      borderNeutral: { borderColor: themeConfig.colors.neutral },
      borderDark: { borderColor: themeConfig.colors.dark },
    },
    
    // Utility
    theme: currentTheme,
    colors: themeConfig.colors,
  }
}