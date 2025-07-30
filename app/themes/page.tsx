'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/ThemeContext'
import { Palette, CheckCircle, Building2, Factory, Zap } from 'lucide-react'

export default function ThemesPage() {
  const { availableThemes, currentTheme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-raytech-dark text-raytech-light">
      {/* Header */}
      <div className="bg-raytech-light text-raytech-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Palette className="w-16 h-16 mx-auto mb-6 text-raytech-neutral" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Theme Gallery
            </h1>
            <p className="text-xl text-raytech-dark/70 max-w-3xl mx-auto">
              Explore our collection of professional B2B color schemes inspired by 
              leading technology and manufacturing companies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Current Theme Display */}
      <div className="py-16 bg-raytech-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-raytech-light mb-4">
              Currently Active: {availableThemes[currentTheme]?.name}
            </h2>
            <p className="text-raytech-neutral max-w-2xl mx-auto">
              {availableThemes[currentTheme]?.description}
            </p>
          </motion.div>

          {/* Theme Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(availableThemes).map(([key, theme], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  currentTheme === key 
                    ? 'border-raytech-neutral shadow-2xl scale-105' 
                    : 'border-raytech-neutral/20 hover:border-raytech-neutral/50'
                }`}
                onClick={() => setTheme(key)}
              >
                {/* Theme Preview */}
                <div 
                  className="h-48 p-6 flex flex-col justify-between"
                  style={{ backgroundColor: theme.colors.dark }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.neutral }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.colors.light }}
                      />
                    </div>
                    {currentTheme === key && (
                      <CheckCircle 
                        className="w-6 h-6"
                        style={{ color: theme.colors.neutral }}
                      />
                    )}
                  </div>
                  
                  <div>
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: theme.colors.light }}
                    >
                      {theme.name}
                    </h3>
                    <div className="flex gap-4">
                      <Building2 
                        className="w-5 h-5"
                        style={{ color: theme.colors.neutral }}
                      />
                      <Factory 
                        className="w-5 h-5"
                        style={{ color: theme.colors.neutral }}
                      />
                      <Zap 
                        className="w-5 h-5"
                        style={{ color: theme.colors.neutral }}
                      />
                    </div>
                  </div>
                </div>

                {/* Theme Info */}
                <div 
                  className="p-6"
                  style={{ backgroundColor: theme.colors.light }}
                >
                  <p 
                    className="text-sm mb-3"
                    style={{ color: theme.colors.dark }}
                  >
                    {theme.description}
                  </p>
                  <p 
                    className="text-xs italic"
                    style={{ color: `${theme.colors.dark}80` }}
                  >
                    {theme.inspiration}
                  </p>
                  
                  {/* Color Palette */}
                  <div className="flex gap-2 mt-4">
                    <div className="flex-1 text-center">
                      <div 
                        className="w-full h-8 rounded mb-1"
                        style={{ backgroundColor: theme.colors.dark }}
                      />
                      <span className="text-xs" style={{ color: theme.colors.dark }}>
                        Dark
                      </span>
                    </div>
                    <div className="flex-1 text-center">
                      <div 
                        className="w-full h-8 rounded mb-1 border"
                        style={{ 
                          backgroundColor: theme.colors.neutral,
                          borderColor: theme.colors.dark + '20'
                        }}
                      />
                      <span className="text-xs" style={{ color: theme.colors.dark }}>
                        Neutral
                      </span>
                    </div>
                    <div className="flex-1 text-center">
                      <div 
                        className="w-full h-8 rounded mb-1 border"
                        style={{ 
                          backgroundColor: theme.colors.light,
                          borderColor: theme.colors.dark + '20'
                        }}
                      />
                      <span className="text-xs" style={{ color: theme.colors.dark }}>
                        Light
                      </span>
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {currentTheme === key && (
                  <div className="absolute top-4 right-4">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: theme.colors.neutral }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="py-16 bg-raytech-light text-raytech-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">How to Use Themes</h3>
            <div className="max-w-2xl mx-auto space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-raytech-neutral rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <p>Click on any theme card above to instantly apply it to the entire website</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-raytech-neutral rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <p>Use the theme switcher in the navigation bar to change themes from any page</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-raytech-neutral rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <p>Your theme preference is automatically saved and will persist across sessions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}