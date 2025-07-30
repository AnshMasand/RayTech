'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Building2, Factory, Warehouse, ArrowRight, CheckCircle, Zap, Eye, Thermometer } from 'lucide-react'
import { useThemeClasses } from '@/lib/ThemeContext'

const productCategories = [
  {
    category: 'Commercial Indoor',
    icon: Building2,
    description: 'Office buildings, retail spaces, hospitality',
    applications: ['Offices', 'Retail', 'Hotels', 'Healthcare'],
    keyProducts: [
      { 
        name: 'LED Panel Lights', 
        specs: { wattage: '18W-48W', lumens: '2000-5000lm', cri: '80+', lifespan: '50,000hrs' },
        features: ['Flicker-free', 'Dimmable', 'Emergency backup']
      },
      { 
        name: 'Recessed Downlights', 
        specs: { wattage: '5W-24W', lumens: '500-2400lm', cri: '80+', lifespan: '50,000hrs' },
        features: ['Anti-glare', 'Multiple beam angles', 'Fire-rated']
      },
    ],
    certifications: ['BIS', 'Energy Star'],
  },
  {
    category: 'Industrial & Warehouse',
    icon: Warehouse,
    description: 'Manufacturing facilities, warehouses, logistics',
    applications: ['Factories', 'Warehouses', 'Cold Storage', 'Logistics'],
    keyProducts: [
      { 
        name: 'High-Bay LED Lights', 
        specs: { wattage: '100W-300W', lumens: '15000-45000lm', cri: '70+', lifespan: '60,000hrs' },
        features: ['Motion sensors', 'Daylight harvesting', 'Robust design']
      },
      { 
        name: 'Linear LED Systems', 
        specs: { wattage: '40W-120W', lumens: '5000-15000lm', cri: '70+', lifespan: '60,000hrs' },
        features: ['Modular design', 'Easy maintenance', 'IP65 rated']
      },
    ],
    certifications: ['BIS', 'ATEX', 'IP65'],
  },
  {
    category: 'Outdoor Infrastructure',
    icon: Factory,
    description: 'Street lighting, area lighting, architectural',
    applications: ['Streets', 'Parking', 'Facades', 'Landscapes'],
    keyProducts: [
      { 
        name: 'Street Light Systems', 
        specs: { wattage: '60W-200W', lumens: '8000-28000lm', cri: '70+', lifespan: '60,000hrs' },
        features: ['Smart controls', 'Surge protection', 'Weather resistant']
      },
      { 
        name: 'Flood Light Arrays', 
        specs: { wattage: '50W-500W', lumens: '6000-65000lm', cri: '70+', lifespan: '60,000hrs' },
        features: ['Asymmetric optics', 'Multiple mounting', 'Corrosion resistant']
      },
    ],
    certifications: ['BIS', 'IP66', 'IK08'],
  },
]

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { styles, colors } = useThemeClasses()

  return (
    <section ref={ref} className="py-20" style={styles.bgLight}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xl max-w-3xl mx-auto" style={{ color: `${colors.dark}b3` }}>
            Engineered for commercial and industrial applications with proven performance, 
            energy efficiency, and long-term reliability.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden"
              style={{ borderColor: `${colors.neutral}33` }}
            >
              <div className="p-8">
                {/* Category Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={styles.bgDark}>
                      <category.icon className="w-8 h-8" style={styles.textLight} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={styles.textDark}>{category.category}</h3>
                      <p style={{ color: `${colors.dark}99` }}>{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm mb-2" style={{ color: `${colors.dark}99` }}>Applications</div>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {category.applications.map((app) => (
                        <span 
                          key={app} 
                          className="px-3 py-1 text-xs rounded-full"
                          style={{ 
                            backgroundColor: `${colors.neutral}33`,
                            color: colors.dark
                          }}
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {category.keyProducts.map((product, productIndex) => (
                    <div 
                      key={product.name} 
                      className="rounded-lg p-6 border"
                      style={{ 
                        backgroundColor: `${colors.light}80`,
                        borderColor: `${colors.neutral}1a`
                      }}
                    >
                      <h4 className="text-lg font-semibold mb-3" style={styles.textDark}>{product.name}</h4>
                      
                      {/* Technical Specs */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4" style={styles.textNeutral} />
                          <span className="text-sm" style={{ color: `${colors.dark}b3` }}>{product.specs.wattage}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" style={styles.textNeutral} />
                          <span className="text-sm" style={{ color: `${colors.dark}b3` }}>{product.specs.lumens}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-4 h-4" style={styles.textNeutral} />
                          <span className="text-sm" style={{ color: `${colors.dark}b3` }}>CRI {product.specs.cri}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" style={styles.textNeutral} />
                          <span className="text-sm" style={{ color: `${colors.dark}b3` }}>{product.specs.lifespan}</span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={styles.bgNeutral}></div>
                            <span className="text-sm" style={{ color: `${colors.dark}b3` }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications & CTA */}
                <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: `${colors.neutral}33` }}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm" style={{ color: `${colors.dark}99` }}>Certifications:</span>
                    <div className="flex gap-2">
                      {category.certifications.map((cert) => (
                        <span 
                          key={cert} 
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: `${colors.dark}1a`,
                            color: colors.dark
                          }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/products/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 px-6 py-2 font-medium rounded-lg transition-colors duration-300 hover:opacity-90"
                    style={{ ...styles.bgDark, ...styles.textLight }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl p-8 text-center" style={styles.bgDark}>
            <h3 className="text-2xl font-bold mb-4" style={styles.textLight}>
              Need Custom Solutions?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={styles.textNeutral}>
              Our engineering team can design custom LED solutions tailored to your specific requirements, 
              from concept to manufacturing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-colors duration-300 hover:opacity-90"
              style={{ ...styles.bgLight, ...styles.textDark }}
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 