'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Factory, TrendingUp, Shield, Zap, Download, ArrowRight } from 'lucide-react'

const manufacturingStats = [
  {
    value: '99.8%',
    unit: 'precision',
    label: 'Manufacturing Accuracy',
    color: 'text-theme-neutral'
  },
  {
    value: '46+',
    unit: 'machines',
    label: 'Advanced Equipment',
    color: 'text-theme-neutral'
  },
  {
    value: '15+',
    unit: 'points',
    label: 'Quality Validation',
    color: 'text-theme-neutral'
  },
  {
    value: '100%',
    unit: 'tested',
    label: 'Product Certification',
    color: 'text-theme-neutral'
  },
]

const productionSteps = [
  {
    title: 'Precision Assembly',
    description: 'Advanced automation with laser-guided accuracy',
    icon: '⚙️'
  },
  {
    title: 'Surface Mount Technology',
    description: 'High-precision component placement and integration',
    icon: '🔬'
  },
  {
    title: 'Power Integration',
    description: 'Intelligent driver systems and testing protocols',
    icon: '⚡'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive validation and performance testing',
    icon: '✨'
  }
]


export default function FactoryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-theme-primary to-theme-secondary">
      <div className="container mx-auto px-4">
        
        {/* Manufacturing Excellence Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Precision</span>
            <span className="gradient-text"> Manufacturing</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto mb-12 px-4">
            State-of-the-art production facilities engineered for excellence
            <br />
            Where technology meets craftsmanship
          </p>
        </motion.div>

        {/* Factory Visual & Tour */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-theme-background/95 p-8 sm:p-10 lg:p-12 text-center mb-12 max-w-6xl mx-auto rounded-2xl border shadow-xl"
          style={{ borderColor: 'var(--theme-border)' }}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Factory className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          
          <div className="mb-8">
            <span className="text-sm text-theme-text-secondary font-medium">⏱️ 2,134 hrs continuous runtime</span>
          </div>
          
          <button className="theme-button-primary px-8 py-4 text-lg font-semibold">
            360° Virtual Factory Tour
          </button>
        </motion.div>

        {/* Manufacturing Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 px-4">
          {manufacturingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm mb-1 text-white/80 font-medium">{stat.unit}</div>
              <div className="text-white/90 font-medium text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Production Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Production Excellence
          </h3>
          
          <div className="text-center mb-8">
            <span className="text-white/80">Click to explore our manufacturing excellence</span>
            <br />
            <button className="theme-button-secondary px-6 py-3 mt-4">
              Start Tour
            </button>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {productionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-gradient-to-br from-white to-theme-background/95 p-5 sm:p-6 rounded-2xl border shadow-lg"
                style={{ borderColor: 'var(--theme-border)' }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-theme-primary bg-gradient-to-br from-theme-primary/10 to-theme-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-theme-text-primary mb-1">{step.title}</h4>
                  <p className="text-theme-text-secondary text-sm sm:text-base">{step.description}</p>
                </div>
                {index < productionSteps.length - 1 && (
                  <div className="w-px h-12 bg-theme-neutral ml-8" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="theme-button-primary px-8 py-4 font-semibold inline-flex items-center gap-2">
              Download Factory Data Sheet
              <Download className="w-5 h-5" />
            </button>
            <p className="text-white/80 mt-4">Get detailed specifications and certifications</p>
          </div>
        </motion.div>

        {/* Case Study - Warehouse Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-white to-theme-background/95 p-8 sm:p-10 lg:p-12 text-center max-w-6xl mx-auto rounded-2xl border shadow-xl" style={{ borderColor: 'var(--theme-border)' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-theme-text-primary mb-4">Warehouse Transformation</h3>
            <p className="text-theme-text-secondary mb-8 sm:mb-12">Chennai Industrial Park</p>
            
            {/* Before/After Visual */}
            <div className="relative mb-12">
              <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-8 relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  💡➡️⚡
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-theme-text-secondary text-xs sm:text-sm font-medium">
                  Traditional Lighting<br />Fluorescent T8
                </div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-theme-text-primary text-xs sm:text-sm font-semibold">
                  Raytech High-Bay LED
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="grid grid-cols-2 gap-6 sm:gap-12">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary mb-2">⚡ 68%</div>
                <div className="text-theme-text-secondary text-sm sm:text-base">Energy Saved</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary mb-2">₹4.2L</div>
                <div className="text-theme-text-secondary text-sm sm:text-base">Yearly Savings</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Excellence Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white to-theme-background/95 p-10 sm:p-12 lg:p-16 max-w-4xl mx-auto rounded-2xl border shadow-xl" style={{ borderColor: 'var(--theme-border)' }}>
            <div className="space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center mx-auto shadow-theme-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-theme-text-primary">
                Crafted to Perfection
              </h3>
              
              <p className="text-lg sm:text-xl text-theme-text-secondary leading-relaxed px-4 sm:px-0">
                Every component is meticulously engineered, tested, and validated to deliver lighting solutions that exceed expectations. Our commitment to excellence is evident in every detail.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 pt-4">
                <div className="px-3 sm:px-4 py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                  Precision Engineering
                </div>
                <div className="px-3 sm:px-4 py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                  Quality Assurance
                </div>
                <div className="px-3 sm:px-4 py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                  Performance Excellence
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}