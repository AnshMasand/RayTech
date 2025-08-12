'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Factory, TrendingUp, Shield, Zap, Download, ArrowRight } from 'lucide-react'

const manufacturingStats = [
  {
    value: '120K',
    unit: 'boards/day',
    label: 'Production Capacity',
    color: 'text-theme-neutral'
  },
  {
    value: '50,000',
    unit: 'sq ft',
    label: 'Factory Area',
    color: 'text-theme-neutral'
  },
  {
    value: '15+',
    unit: 'per product',
    label: 'Quality Tests',
    color: 'text-theme-neutral'
  },
  {
    value: '99.8%',
    unit: 'operational',
    label: 'Uptime',
    color: 'text-theme-neutral'
  },
]

const productionSteps = [
  {
    title: 'SMT Line',
    description: 'Automated surface-mount technology',
    icon: '🔧'
  },
  {
    title: 'Photogoniometer',
    description: 'Precision light measurement',
    icon: '💡'
  },
  {
    title: 'Aging Racks',
    description: '48-hour burn-in testing',
    icon: '⏱️'
  },
  {
    title: 'Quality Control',
    description: 'Multi-point inspection',
    icon: '✅'
  }
]

const financialMetrics = [
  {
    value: '0.08',
    label: 'Equity Ratio',
    description: 'Strong financial\nposition',
    icon: '📊'
  },
  {
    value: 'A-',
    label: 'Credit Rating',
    description: 'Infomerics rating',
    icon: '🏆'
  },
  {
    value: '3+',
    label: 'Years of Growth',
    description: 'Since FY 2022-23',
    icon: '🛡️'
  },
  {
    value: '42%',
    label: 'Revenue Growth',
    description: 'YoY growth rate',
    icon: '📈'
  }
]

export default function FactoryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-12 bg-theme-dark">
      <div className="container mx-auto px-4">
        
        {/* Manufacturing Excellence Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text-orange">State-of-the-</span>
            <span className="gradient-text">Art Manufacturing</span>
          </h2>
          <p className="text-xl text-theme-muted max-w-4xl mx-auto mb-12">
            Tour our advanced facility where innovation meets precision
            <br />
            engineering
          </p>
        </motion.div>

        {/* Factory Visual & Tour */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-theme-card p-12 text-center mb-12 max-w-6xl mx-auto rounded-2xl border"
          style={{ borderColor: 'var(--theme-border)' }}
        >
          <div className="w-24 h-24 rounded-2xl bg-theme-neutral flex items-center justify-center mx-auto mb-8 led-glow">
            <Factory className="w-12 h-12 text-theme-dark" />
          </div>
          
          <div className="mb-8">
            <span className="text-sm text-theme-muted">⏱️ 2,134 hrs continuous runtime</span>
          </div>
          
          <button className="theme-button-primary px-8 py-4 text-lg font-semibold">
            360° Virtual Factory Tour
          </button>
        </motion.div>

        {/* Manufacturing Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {manufacturingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-theme-neutral mb-2">
                {stat.value}
              </div>
              <div className="text-sm mb-1" style={{ color: 'var(--theme-neutral)' }}>{stat.unit}</div>
              <div className="text-theme-light font-medium">{stat.label}</div>
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
          <h3 className="text-3xl font-bold text-theme-light text-center mb-12">
            Production Excellence
          </h3>
          
          <div className="text-center mb-8">
            <span className="text-theme-muted">Click to explore our manufacturing excellence</span>
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
                className="flex items-center gap-6 bg-theme-card p-6 rounded-2xl border"
                style={{ borderColor: 'var(--theme-border)' }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-theme-neutral flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-theme-light mb-1">{step.title}</h4>
                  <p className="text-theme-muted">{step.description}</p>
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
            <p className="text-theme-muted mt-4">Get detailed specifications and certifications</p>
          </div>
        </motion.div>

        {/* Case Study - Warehouse Transformation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-theme-card p-12 text-center max-w-6xl mx-auto rounded-2xl border" style={{ borderColor: 'var(--theme-border)' }}>
            <h3 className="text-3xl font-bold text-theme-light mb-4">Warehouse Transformation</h3>
            <p className="text-theme-muted mb-12">Chennai Industrial Park</p>
            
            {/* Before/After Visual */}
            <div className="relative mb-12">
              <div className="w-full h-64 rounded-lg mb-8 relative overflow-hidden" style={{ 
                background: `linear-gradient(to right, var(--theme-card), #ffffff33)` 
              }}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  💡➡️⚡
                </div>
                <div className="absolute bottom-4 left-4 text-theme-muted text-sm">
                  Traditional Lighting<br />Fluorescent T8
                </div>
                <div className="absolute bottom-4 right-4 text-theme-light text-sm">
                  Raytech High-Bay LED
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-5xl font-bold text-theme-neutral mb-2">⚡ 68%</div>
                <div className="text-theme-light">Energy Saved</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--theme-neutral)' }}>₹ ₹4.2L</div>
                <div className="text-theme-light">Yearly Savings</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <h3 className="text-5xl lg:text-6xl font-bold mb-16 text-center">
            <span className="gradient-text-orange">Financial </span>
            <span className="gradient-text">Excellence</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {financialMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="bg-theme-card p-6 text-center rounded-2xl border"
                style={{ borderColor: 'var(--theme-border)' }}
              >
                <div className="text-2xl mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--theme-neutral)' }}>{metric.value}</div>
                <div className="text-theme-light font-medium mb-2 whitespace-pre-line">{metric.label}</div>
                <div className="text-sm text-theme-muted whitespace-pre-line">{metric.description}</div>
              </motion.div>
            ))}
          </div>

          {/* CFO Message */}
          <div className="bg-theme-card p-8 max-w-4xl mx-auto rounded-2xl border" style={{ borderColor: 'var(--theme-border)' }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-theme-dark">
                CFO
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-theme-light mb-2">A Message from Our CFO</h4>
                <p className="text-theme-muted italic mb-4">
                  "We've built Raytech on a foundation of financial discipline. By funding our
                  state-of-the-art facility and expansion through operational cash flow, we
                  ensure stability for our partners and continuous innovation for our customers."
                </p>
                <p className="text-sm text-theme-muted">— Chief Financial Officer, Raytech LED</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partnership with Syska */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <h3 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-theme-light">Strategic Partnership with</span>
            <br />
            <span className="text-theme-neutral">Syska </span>
            <span className="gradient-text">LED</span>
          </h3>
          <p className="text-xl text-theme-muted mb-12 max-w-4xl mx-auto">
            Combining manufacturing excellence with market leadership since
            <br />
            2024
          </p>
          
          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="w-24 h-24 rounded-full bg-theme-neutral flex items-center justify-center font-bold text-xl text-theme-dark">
              Raytech
            </div>
            <div className="text-4xl">🤝</div>
            <div className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl" style={{ backgroundColor: 'var(--theme-neutral)', color: 'var(--theme-dark)' }}>
              Syska
            </div>
          </div>
          
          <button className="theme-button-primary px-8 py-4 font-semibold inline-flex items-center gap-2">
            View Partnership Case Study
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}