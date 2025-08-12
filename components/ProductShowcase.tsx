'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Sun, Lightbulb, Factory, ArrowRight } from 'lucide-react'

const productCategories = [
  {
    category: 'LED Bulbs',
    icon: Lightbulb,
    iconColor: 'bg-gradient-orange-yellow',
    description: 'Professional LED bulb manufacturing with RDL assembly',
    products: [
      {
        name: 'Standard Bulbs',
        wattage: '3W-15W',
        lumens: '300-1500lm',
        badge: 'SMT + Assembly'
      },
      {
        name: 'RDL Bulbs', 
        wattage: '5W-20W',
        lumens: '500-2000lm',
        badge: 'Advanced Testing'
      },
      {
        name: 'High Wattage',
        wattage: '18W-50W', 
        lumens: '1800-5000lm',
        badge: 'Industrial Grade'
      }
    ]
  },
  {
    category: 'LED Battens',
    icon: Sun,
    iconColor: 'bg-gradient-teal-blue',
    description: 'Automated batten production with aging conveyors',
    products: [
      {
        name: 'Standard Battens',
        wattage: '18W-36W',
        lumens: '1800-3600lm'
      },
      {
        name: 'Emergency Battens',
        wattage: '20W-40W',
        lumens: '2000-4000lm'
      },
      {
        name: 'Weatherproof',
        wattage: '24W-48W',
        lumens: '2400-4800lm'
      }
    ]
  },
  {
    category: 'TVP Tubes',
    icon: Factory,
    iconColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    description: 'Complete TVP tube manufacturing with frame machines',
    products: [
      {
        name: 'T8 LED Tubes',
        wattage: '9W-22W',
        lumens: '900-2200lm'
      },
      {
        name: 'T5 LED Tubes',
        wattage: '8W-18W',
        lumens: '800-1800lm'
      },
      {
        name: 'Industrial Tubes',
        wattage: '20W-40W',
        lumens: '2000-4000lm'
      }
    ]
  }
]

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-theme-background to-white relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide">
              <div className="w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
              PRODUCT PORTFOLIO
            </div>
            
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-theme-text-primary">Exceptional </span>
              <span className="gradient-text">Lighting</span>
            </h2>
            
            <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"></div>
            
            <p className="text-xl lg:text-2xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
              Meticulously crafted illumination solutions. <span className="font-semibold text-theme-text-primary">Engineered for perfection.</span>
            </p>
          </div>
        </motion.div>

        {/* Premium Product Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-24">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="executive-card bg-gradient-to-b from-white to-theme-background/30 p-6 lg:p-8 xl:p-10 h-full hover:shadow-executive transition-all duration-500 hover:-translate-y-2">
                {/* Category Header */}
                <div className="text-center mb-10">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-3xl ${category.iconColor} flex items-center justify-center mx-auto shadow-theme-lg group-hover:shadow-theme-glow transition-all duration-300`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-accent rounded-full border-2 border-white shadow-theme-sm"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-theme-text-primary mb-3 tracking-tight">{category.category}</h3>
                  <p className="text-theme-text-secondary font-medium">Precision Engineered</p>
                </div>

                {/* Products List */}
                <div className="space-y-5">
                  {category.products.map((product, productIndex) => (
                    <div key={product.name} className="bg-gradient-to-br from-theme-background to-theme-accent/[0.02] p-5 rounded-2xl border border-theme-border last:mb-0 hover:bg-theme-accent/[0.08] hover:border-theme-accent/20 transition-all duration-300 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-theme-text-primary">{product.name}</h4>
                        {(product as any).badge && (
                          <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-primary text-white shadow-theme-sm">
                            {(product as any).badge}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-1.5 text-theme-text-secondary font-medium">
                          <div className="w-2 h-2 bg-theme-accent rounded-full ring-2 ring-theme-accent/20"></div>
                          <span className="text-sm">{product.wattage}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-theme-text-secondary font-medium">
                          <div className="w-2 h-2 bg-theme-primary rounded-full ring-2 ring-theme-primary/20"></div>
                          <span className="text-sm">{product.lumens}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Category CTA */}
                <div className="mt-8 pt-6 border-t border-theme-border-subtle">
                  <button className="w-full theme-button-secondary py-3 text-sm font-semibold">
                    View {category.category} Range
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium 3D Configurator Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="executive-card p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-secondary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-12">
              {/* 3D Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-4xl bg-gradient-primary flex items-center justify-center shadow-executive group-hover:shadow-theme-glow transition-all duration-300">
                    <span className="text-5xl font-black text-white tracking-tight">3D</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full border-3 border-white shadow-theme-md animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide">
                  <div className="w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
                  DESIGN STUDIO
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold text-theme-text-primary leading-tight">
                  Tailored Lighting
                  <span className="gradient-text block">Solutions</span>
                </h3>
                
                <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full"></div>
                
                <p className="text-xl lg:text-2xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed font-light">
                  Collaborate with our team to create lighting that perfectly complements
                  <span className="font-semibold text-theme-text-primary"> your vision and space</span>
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button className="theme-button-secondary px-8 py-4 text-sm font-semibold">
                  Indoor Lighting
                </button>
                <button className="theme-button-secondary px-8 py-4 text-sm font-semibold">
                  Outdoor Systems
                </button>
                <button className="theme-button-secondary px-8 py-4 text-sm font-semibold">
                  Industrial Solutions
                </button>
              </div>
              
              <div className="pt-6">
                <button className="theme-button-primary px-12 py-5 text-xl font-bold group relative overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}