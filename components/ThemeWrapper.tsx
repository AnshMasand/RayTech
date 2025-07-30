'use client'

import { useThemeClasses } from '@/lib/ThemeContext'
import { ReactNode } from 'react'

interface ThemeWrapperProps {
  children: ReactNode
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const theme = useThemeClasses()
  
  return (
    <div className={`${theme.bgDark} ${theme.textLight} min-h-screen`}>
      {children}
    </div>
  )
}