'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Lightbulb, Grid3X3 } from 'lucide-react'

const productCategories = [
  {
    category: 'LED Battens',
    icon: Zap,
    iconColor: 'bg-gradient-to-br from-blue-500 to-teal-500',
    description: 'Energy-saving LED battens with advanced features',
    products: [
      {
        name: '3-IN-1 T5 Batten',
        wattage: '20W-22W',
        lumens: '1700-2100lm',
        badge: 'Tricolour CTC'
      },
      {
        name: 'T5 Batten',
        wattage: '4W-28W',
        lumens: '400-2800lm',
        badge: 'Surface Mount'
      },
      {
        name: 'Emergency Batten',
        wattage: '10W-35W',
        lumens: '1000-2000lm',
        badge: '3-4Hr Backup'
      }
    ]
  },
  {
    category: 'LED Bulbs',
    icon: Lightbulb,
    iconColor: 'bg-gradient-to-br from-orange-500 to-yellow-500',
    description: 'High-efficiency LED bulbs with superior performance',
    products: [
      {
        name: 'Hammer Bulb (MaxGlow)',
        wattage: '26W-45W',
        lumens: '3120-5400lm',
        badge: '120 Lumens/W'
      },
      {
        name: 'Standard LED Bulbs', 
        wattage: '3W-15W',
        lumens: '300-1500lm',
        badge: 'Energy Saving'
      },
      {
        name: 'High Power Bulbs',
        wattage: '18W-50W', 
        lumens: '1800-5000lm',
        badge: 'Industrial'
      }
    ]
  },
  {
    category: 'Panel & Down Lights',
    icon: Grid3X3,
    iconColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    description: 'Slim design panels and downlights for modern spaces',
    products: [
      {
        name: 'LED Panel (Square/Round)',
        wattage: '5W-24W',
        lumens: '300-2160lm',
        badge: 'Slim Design'
      },
      {
        name: 'COB Downlight',
        wattage: '3W-30W',
        lumens: '210-2400lm',
        badge: 'Narrow Beam'
      },
      {
        name: 'Surface Panel (Dazzle)',
        wattage: '6W-20W',
        lumens: '432-1600lm',
        badge: 'Rimless'
      }
    ]
  }
]

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="products" ref={ref} className="py-12 sm:py-16 bg-gradient-to-b from-theme-background to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 premium-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-xs tracking-wide">
              <div className="w-1.5 h-1.5 bg-theme-accent rounded-full animate-pulse"></div>
              PRODUCT PORTFOLIO
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-theme-text-primary">Our LED </span>
              <span className="gradient-text">Products</span>
            </h2>
            
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              High-performance LED lighting solutions for every application
            </p>
          </div>
        </motion.div>

        {/* Compact Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-12">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-theme-border p-4">
                {/* Compact Category Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${category.iconColor} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-theme-text-primary">{category.category}</h3>
                    <p className="text-xs text-theme-text-secondary mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Compact Products List */}
                <div className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <div key={product.name} className="bg-gray-50 p-2.5 rounded-lg hover:bg-theme-accent/5 transition-colors duration-200">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-theme-text-primary flex-1">{product.name}</h4>
                        {(product as any).badge && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-theme-accent/10 text-theme-accent">
                            {(product as any).badge}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3 text-xs text-theme-text-secondary">
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {product.wattage}
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {product.lumens}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Catalog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 max-w-3xl mx-auto border border-theme-border">
            <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-2">
              Need More Details?
            </h3>
            <p className="text-sm text-theme-text-secondary mb-4 max-w-xl mx-auto">
              Access complete specifications and technical data for our entire product range
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link 
                href="/products-catalog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-accent text-white rounded-lg font-semibold text-sm hover:shadow-md transition-all duration-300"
              >
                <Grid3X3 className="w-4 h-4" />
                View Full Catalog
              </Link>
              <div className="flex items-center gap-4 text-xs text-theme-text-secondary">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Street Lights
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  COB Lights
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Emergency
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}