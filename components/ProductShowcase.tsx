'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Sun, Lightbulb, Factory, ArrowRight } from 'lucide-react'

const productCategories = [
  {
    category: 'Indoor',
    icon: Sun,
    iconColor: 'bg-gradient-orange-yellow',
    description: 'Comprehensive LED solutions for every lighting need',
    products: [
      {
        name: 'Panel Lights',
        wattage: '18W-48W',
        lumens: '2000-5000lm',
        badge: 'Syska Co-built'
      },
      {
        name: 'Downlights', 
        wattage: '5W-24W',
        lumens: '500-2400lm',
        badge: 'Syska Co-built'
      },
      {
        name: 'Track Lights',
        wattage: '10W-30W', 
        lumens: '1000-3000lm',
        badge: 'Syska Co-built'
      }
    ]
  },
  {
    category: 'Outdoor',
    icon: Lightbulb,
    iconColor: 'bg-gradient-teal-blue',
    description: 'Comprehensive LED solutions for every lighting need',
    products: [
      {
        name: 'Street Lights',
        wattage: '30W-150W',
        lumens: '3000-18000lm'
      },
      {
        name: 'Flood Lights',
        wattage: '20W-200W',
        lumens: '2000-24000lm'
      },
      {
        name: 'Solar LED',
        wattage: '15W-60W',
        lumens: '1500-7000lm'
      }
    ]
  },
  {
    category: 'Industrial',
    icon: Factory,
    iconColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    description: 'Comprehensive LED solutions for every lighting need',
    products: [
      {
        name: 'High-Bay Lights',
        wattage: '50W-300W',
        lumens: '6000-36000lm'
      },
      {
        name: 'Linear Lights',
        wattage: '20W-80W',
        lumens: '2400-9600lm'
      },
      {
        name: 'Explosion Proof',
        wattage: '40W-120W',
        lumens: '4800-14400lm'
      }
    ]
  }
]

export default function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-12 bg-theme-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-theme-neutral">Our </span>
            <span className="text-theme-light">Product </span>
            <span className="gradient-text">Range</span>
          </h2>
          <p className="text-xl text-theme-muted max-w-3xl mx-auto">
            Comprehensive LED solutions for every lighting need
          </p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-theme-card p-8 group hover:scale-105 transition-transform duration-300 rounded-2xl border"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl ${category.iconColor} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-theme-light mb-2">{category.category}</h3>
              </div>

              {/* Products List */}
              <div className="space-y-6">
                {category.products.map((product, productIndex) => (
                  <div key={product.name} className="border-b border-theme-border last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-theme-light">{product.name}</h4>
                      {(product as any).badge && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: 'var(--theme-neutral)', color: 'var(--theme-dark)' }}>
                          {(product as any).badge}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between text-sm text-theme-muted">
                      <span>⚡ {product.wattage}</span>
                      <span>💡 {product.lumens}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Configurator Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-theme-card p-12 max-w-4xl mx-auto rounded-2xl border" style={{ borderColor: 'var(--theme-border)' }}>
            {/* 3D Icon */}
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="text-3xl font-bold text-theme-dark">3D</span>
            </div>
            
            <h3 className="text-3xl font-bold text-theme-light mb-4">
              Build Your Custom Fixture
            </h3>
            <p className="text-xl text-theme-muted mb-8 max-w-2xl mx-auto">
              Use our 3D configurator to design and visualize your
              <br />
              perfect lighting solution
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="theme-button-secondary px-6 py-3">
                Explore Indoor
              </button>
              <button className="theme-button-secondary px-6 py-3">
                Explore Outdoor  
              </button>
              <button className="theme-button-secondary px-6 py-3">
                Explore Industrial
              </button>
            </div>
            
            <button className="theme-button-primary px-8 py-4 text-lg font-semibold">
              Launch Configurator
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}