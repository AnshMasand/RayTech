'use client'

import { motion } from 'framer-motion'
import { Factory, ArrowRight, CheckCircle, Zap, Award, Building } from 'lucide-react'
import Link from 'next/link'

const badges = [
  { icon: Factory, label: 'SOTA Factory', color: 'orange' },
  { icon: Zap, label: 'Financially Strong', color: 'teal' },
  { icon: Award, label: 'Syska Partner', color: 'orange' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-theme-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 subtle-grid" />
      </div>

      {/* Orange Banner */}
      <div className="w-full bg-gradient-primary text-center py-2 relative z-10">
        <span className="text-sm font-medium text-theme-light">
          Strategic Partner to Syska LED since 2024
        </span>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
                      <div className="text-center space-y-8">
            
            {/* Power Button Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-24 h-12 bg-theme-neutral rounded-full flex items-center justify-center led-glow">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 text-theme-neutral">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2M21 14C21 17.9 17.9 21 14 21H13V22C13 22.6 12.6 23 12 23S11 22.6 11 22V21H10C6.1 21 3 17.9 3 14C3 10.1 6.1 7 10 7H14C17.9 7 21 10.1 21 14Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="gradient-text">Illuminate</span>
                <br />
                <span className="text-theme-light">Your Future</span>
              </h1>
              <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-theme-muted mb-8">
                State-of-the-art LED solutions engineered for excellence. Trusted
                <br />
                by Syska. Built for India.
              </p>
            </motion.div>

            {/* Badge Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-theme-neutral"
                  style={{
                    backgroundColor: badge.color === 'orange' 
                      ? `var(--theme-neutral)20` 
                      : `var(--theme-accent)20`
                  }}
                >
                  <badge.icon 
                    className="w-5 h-5"
                    style={{
                      color: badge.color === 'orange' ? 'var(--theme-neutral)' : 'var(--theme-accent)'
                    }}
                  />
                  <span className="font-medium text-theme-light">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/products"
                className="theme-button-primary inline-flex items-center justify-center px-8 py-4 text-lg group"
              >
                Explore Our Range
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/calculator"
                className="theme-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Calculate Savings
              </Link>
            </motion.div>


          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent" 
        style={{ backgroundImage: `linear-gradient(to top, var(--theme-dark), transparent)` }}
      />
    </section>
  )
}