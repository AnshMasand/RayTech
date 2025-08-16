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
    <section id="products" ref={ref} className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-theme-background to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 premium-pattern opacity-30"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide">
              <div className="w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
              PRODUCT PORTFOLIO
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-theme-text-primary">Exceptional </span>
              <span className="gradient-text">Lighting</span>
            </h2>
            
            <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"></div>
            
            <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
              Meticulously crafted illumination solutions. <span className="font-semibold text-theme-text-primary">Engineered for perfection.</span>
            </p>
          </div>
        </motion.div>

        {/* Premium Product Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="executive-card bg-gradient-to-b from-white to-theme-background/30 p-4 sm:p-5 lg:p-6 h-full hover:shadow-executive transition-all duration-500 hover:-translate-y-2">
                {/* Category Header */}
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl ${category.iconColor} flex items-center justify-center mx-auto shadow-theme-lg group-hover:shadow-theme-glow transition-all duration-300`}>
                      <category.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-accent rounded-full border-2 border-white shadow-theme-sm"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-text-primary mb-2 sm:mb-3 tracking-tight">{category.category}</h3>
                  <p className="text-sm sm:text-base text-theme-text-secondary font-medium">Precision Engineered</p>
                </div>

                {/* Products List */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {category.products.map((product, productIndex) => (
                    <div key={product.name} className="bg-gradient-to-br from-theme-background to-theme-accent/[0.02] p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl border border-theme-border last:mb-0 hover:bg-theme-accent/[0.08] hover:border-theme-accent/20 transition-all duration-300 shadow-sm">
                      <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <h4 className="text-sm sm:text-base lg:text-lg font-bold text-theme-text-primary">{product.name}</h4>
                        {(product as any).badge && (
                          <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full bg-gradient-primary text-white shadow-theme-sm">
                            {(product as any).badge}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <div className="flex items-center gap-1 sm:gap-1.5 text-theme-text-secondary font-medium">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-theme-accent rounded-full ring-2 ring-theme-accent/20"></div>
                          <span className="text-xs sm:text-sm">{product.wattage}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5 text-theme-text-secondary font-medium">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-theme-primary rounded-full ring-2 ring-theme-primary/20"></div>
                          <span className="text-xs sm:text-sm">{product.lumens}</span>
                        </div>
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-theme-primary/10 to-theme-accent/10 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto border border-theme-border">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary mb-4">
              Explore Our Complete Product Range
            </h3>
            <p className="text-base sm:text-lg text-theme-text-secondary mb-8 max-w-2xl mx-auto">
              Access detailed specifications, technical data, and comprehensive information about our entire LED lighting portfolio
            </p>
            <Link 
              href="/products-catalog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent text-white rounded-full font-bold text-sm sm:text-base hover:shadow-theme-glow transition-all duration-300 hover:scale-105"
            >
              <Grid3X3 className="w-5 h-5" />
              View Full Product Catalog
            </Link>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-theme-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Street Lights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>COB Lights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Emergency Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}