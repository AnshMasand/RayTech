'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check, ChevronDown } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, themeConfig, availableThemes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
        style={{
          backgroundColor: `${themeConfig.colors.light}10`,
          borderColor: `${themeConfig.colors.neutral}33`,
          borderWidth: '1px'
        }}
      >
        <Palette className="w-4 h-4" style={{ color: themeConfig.colors.neutral }} />
        <span className="text-sm font-medium hidden sm:inline" style={{ color: themeConfig.colors.light }}>
          {themeConfig.name}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: themeConfig.colors.neutral }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-80 backdrop-blur-md rounded-xl shadow-2xl z-50 overflow-hidden"
              style={{
                backgroundColor: `${themeConfig.colors.dark}f0`,
                borderColor: `${themeConfig.colors.neutral}33`,
                borderWidth: '1px'
              }}
            >
              <div 
                className="p-4 border-b"
                style={{ borderColor: `${themeConfig.colors.neutral}33` }}
              >
                <h3 className="text-lg font-semibold mb-1" style={{ color: themeConfig.colors.light }}>
                  Choose Theme
                </h3>
                <p className="text-sm" style={{ color: `${themeConfig.colors.neutral}cc` }}>
                  Select a professional color scheme
                </p>
              </div>
              
              <div className="p-2 max-h-96 overflow-y-auto">
                {Object.entries(availableThemes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key)
                      setIsOpen(false)
                    }}
                    className="w-full p-4 rounded-lg transition-all duration-200 group"
                    style={{
                      backgroundColor: currentTheme === key ? `${themeConfig.colors.light}1a` : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${themeConfig.colors.light}1a`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = currentTheme === key ? `${themeConfig.colors.light}1a` : 'transparent'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {/* Color Preview */}
                        <div className="flex gap-1">
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.dark }}
                          />
                          <div 
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.neutral }}
                          />
                          <div 
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: theme.colors.light }}
                          />
                        </div>
                        
                        <div className="text-left">
                          <div className="font-medium" style={{ color: themeConfig.colors.light }}>
                            {theme.name}
                          </div>
                        </div>
                      </div>
                      
                      {currentTheme === key && (
                        <Check className="w-5 h-5" style={{ color: themeConfig.colors.neutral }} />
                      )}
                    </div>
                    
                    <div className="text-xs text-left mb-2" style={{ color: `${themeConfig.colors.neutral}b3` }}>
                      {theme.description}
                    </div>
                    
                    <div className="text-xs text-left italic" style={{ color: `${themeConfig.colors.neutral}80` }}>
                      {theme.inspiration}
                    </div>
                  </button>
                ))}
              </div>
              
              <div 
                className="p-4 border-t"
                style={{ 
                  borderColor: `${themeConfig.colors.neutral}33`,
                  backgroundColor: `${themeConfig.colors.light}0d`
                }}
              >
                <p className="text-xs text-center" style={{ color: `${themeConfig.colors.neutral}99` }}>
                  Theme preference is saved locally
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}