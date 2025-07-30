'use client'

import { motion } from 'framer-motion'
import { Factory, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useThemeClasses } from '@/lib/ThemeContext'

const manufacturingMetrics = [
  { value: '50,000', label: 'sq ft Manufacturing' },
  { value: '120K', label: 'Boards/Day Capacity' },
  { value: '99.8%', label: 'Operational Uptime' },
  { value: '15+', label: 'Quality Tests' },
]

export default function Hero() {
  const { styles, colors } = useThemeClasses()

  return (
    <section className="relative overflow-hidden" style={{ ...styles.bgLight, ...styles.textDark }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23354544' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Partnership Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{
                  backgroundColor: `${colors.dark}1a`,
                  borderColor: `${colors.dark}33`
                }}
              >
                <CheckCircle className="w-4 h-4" style={styles.textDark} />
                <span className="text-sm font-medium">Strategic Partner to Syska LED</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Professional LED
                  <br />
                  <span style={styles.textNeutral}>Manufacturing</span>
                  <br />
                  Excellence
                </h1>
                <p className="text-xl max-w-xl leading-relaxed" style={{ color: `${colors.dark}b3` }}>
                  State-of-the-art LED solutions engineered for commercial and industrial applications.
                  Delivering reliable, energy-efficient lighting systems with proven performance.
                </p>
              </div>



              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 group hover:opacity-90"
                  style={{ ...styles.bgDark, ...styles.textLight }}
                >
                  View Product Catalog
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
                  style={{
                    borderColor: colors.dark,
                    color: colors.dark
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.dark
                    e.currentTarget.style.color = colors.light
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = colors.dark
                  }}
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Visual/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Factory Visual */}
              <div className="rounded-2xl p-8 text-center" style={styles.bgDark}>
                <Factory className="w-24 h-24 mx-auto mb-4" style={styles.textNeutral} />
                <h3 className="text-xl font-semibold mb-2" style={styles.textLight}>
                  Advanced Manufacturing Facility
                </h3>
                <p className="text-sm mb-6" style={styles.textNeutral}>
                  State-of-the-art production facility with automated SMT lines
                </p>

                {/* Manufacturing Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {manufacturingMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="backdrop-blur-sm rounded-lg p-4 border text-center"
                      style={{
                        backgroundColor: `${colors.light}1a`,
                        borderColor: `${colors.neutral}33`
                      }}
                    >
                      <div className="text-xl font-bold mb-1" style={styles.textLight}>
                        {metric.value}
                      </div>
                      <div className="text-xs" style={{ color: `${colors.neutral}cc` }}>
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 