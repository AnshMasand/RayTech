'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Factory, ArrowRight, CheckCircle, Zap, Award, Building, Power } from 'lucide-react'
import Link from 'next/link'

const badges = [
  { icon: Factory, label: 'Innovation', color: 'orange' },
  { icon: Zap, label: 'Excellence', color: 'teal' },
  { icon: Award, label: 'Leadership', color: 'orange' },
]

export default function Hero() {
  const [isPowerOn, setIsPowerOn] = useState(false)
  
  return (
    <section className={`relative min-h-[90vh] overflow-hidden transition-all duration-1000 ${
      isPowerOn ? 'bg-gradient-primary' : 'bg-gradient-to-b from-gray-900 to-black'
    }`}>
      {/* Background Pattern */}
      <AnimatePresence>
        {isPowerOn && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 premium-pattern" />
            <div className="absolute inset-0 executive-mesh" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Banner */}
      <div className={`w-full text-center py-2.5 sm:py-3 relative z-10 transition-all duration-700 ${
        isPowerOn 
          ? 'bg-gradient-accent shadow-theme-md' 
          : 'bg-gray-800/50'
      }`}>
        <div className="container mx-auto px-4">
          <span className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-700 ${
            isPowerOn ? 'text-white' : 'text-gray-500'
          }`}>
            Precision • Innovation • Excellence
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            
            {/* Premium Power Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <button
                onClick={() => setIsPowerOn(!isPowerOn)}
                className="relative inline-block"
                aria-label="Power switch"
              >
                {/* Switch Track */}
                <div className={`relative w-28 h-14 sm:w-32 sm:h-16 rounded-full transition-all duration-700 hover:scale-105 ${
                  isPowerOn 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30' 
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg'
                }`}>
                  
                  {/* OFF/ON Labels */}
                  <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 pointer-events-none">
                    <span className={`text-[10px] sm:text-xs font-bold transition-all duration-500 select-none ${
                      isPowerOn ? 'text-white/30' : 'text-gray-400'
                    }`}>OFF</span>
                    <span className={`text-[10px] sm:text-xs font-bold transition-all duration-500 select-none ${
                      isPowerOn ? 'text-white' : 'text-gray-600'
                    }`}>ON</span>
                  </div>
                  
                  {/* Sliding Thumb */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      x: isPowerOn ? 64 : 4,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30 
                    }}
                    className="absolute top-1 sm:top-1.5"
                  >
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isPowerOn 
                        ? 'bg-white shadow-lg' 
                        : 'bg-gray-700 shadow-inner'
                    }`}>
                      <Power className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${
                        isPowerOn 
                          ? 'text-blue-600' 
                          : 'text-gray-500'
                      }`} />
                    </div>
                  </motion.div>
                  
                  {/* Inner glow track when on */}
                  <AnimatePresence>
                    {isPowerOn && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-full overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Outer glow effect when on */}
                  <AnimatePresence>
                    {isPowerOn && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 -z-10"
                      >
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Status indicator dot */}
                <div className="absolute -top-1 -right-1">
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-700 ${
                    isPowerOn 
                      ? 'bg-green-500 shadow-sm shadow-green-500/50 animate-pulse' 
                      : 'bg-red-500 shadow-sm'
                  }`} />
                </div>
              </button>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] sm:leading-[0.8] tracking-tighter">
                  <span className={`transition-all duration-1000 ${
                    isPowerOn 
                      ? 'gradient-text glow-text drop-shadow-xl' 
                      : 'text-gray-600'
                  }`}>Future</span>
                  <br />
                  <span className={`font-extralight transition-all duration-1000 ${
                    isPowerOn 
                      ? 'text-white drop-shadow-lg' 
                      : 'text-gray-700'
                  }`}>Illuminated</span>
                </h1>
                <div className={`h-1 w-24 mx-auto rounded-full transition-all duration-700 ${
                  isPowerOn 
                    ? 'bg-gradient-accent opacity-60' 
                    : 'bg-gray-700 opacity-30'
                }`}></div>
              </div>
              
              <p className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4 sm:px-0 transition-all duration-700 ${
                isPowerOn 
                  ? 'text-white/95' 
                  : 'text-gray-600'
              }`}>
                Crafting exceptional <span className={`font-semibold transition-colors duration-700 ${
                  isPowerOn ? 'text-white' : 'text-gray-500'
                }`}>LED solutions</span> with precision engineering and thoughtful design.
                <br className="hidden lg:block" />
                <span className={`transition-colors duration-700 ${
                  isPowerOn ? 'text-white/80' : 'text-gray-700'
                }`}>Quality that speaks for itself.</span>
              </p>
            </motion.div>

            {/* Professional Badge Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 lg:gap-6"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className={`executive-card backdrop-blur inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 hover:shadow-theme-xl transition-all duration-300 ${
                    isPowerOn 
                      ? 'bg-white/95' 
                      : 'bg-gray-800/50 opacity-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-700 ${
                    isPowerOn
                      ? badge.color === 'orange' ? 'bg-gradient-accent shadow-theme-sm' : 'bg-gradient-secondary shadow-theme-sm'
                      : 'bg-gray-700'
                  }`}>
                    <badge.icon className={`w-4 h-4 transition-colors duration-700 ${
                      isPowerOn ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                  <span className={`font-semibold text-xs sm:text-sm lg:text-base tracking-wide transition-colors duration-700 ${
                    isPowerOn ? 'text-theme-text-primary' : 'text-gray-400'
                  }`}>
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center pt-6 sm:pt-8 px-4 sm:px-0"
            >
              <Link
                href="/products"
                className={`inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold group relative overflow-hidden transition-all duration-700 rounded-xl ${
                  isPowerOn 
                    ? 'theme-button-primary' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
                }`}
                style={{ pointerEvents: isPowerOn ? 'auto' : 'none' }}
              >
                <span className="relative z-10">Explore Solutions</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link
                href="/calculator"
                className={`inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg lg:text-xl font-semibold transition-all duration-700 rounded-xl ${
                  isPowerOn 
                    ? 'theme-button-secondary' 
                    : 'bg-gray-800/50 text-gray-600 border-gray-700 cursor-not-allowed opacity-50'
                }`}
                style={{ pointerEvents: isPowerOn ? 'auto' : 'none' }}
              >
                ROI Calculator
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="pt-12 border-t border-theme-text-inverse/20"
            >
              <p className={`text-xs sm:text-sm font-medium tracking-wider uppercase px-4 sm:px-0 text-center transition-all duration-700 ${
                isPowerOn ? 'text-white/70' : 'text-gray-700'
              }`}>
                Engineered for Excellence • Built to Last • Designed to Inspire
              </p>
            </motion.div>


          </div>
        </div>
      </div>

      {/* Premium Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-theme-background via-theme-primary/10 to-transparent" 
        />
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full transition-all duration-700 ${
          isPowerOn 
            ? 'bg-gradient-accent opacity-40' 
            : 'bg-gray-700 opacity-20'
        }`}></div>
      </div>
    </section>
  )
}