'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  FileText,
  Lightbulb,
  Sun,
  Factory,
  Eye,
  ChevronRight
} from 'lucide-react'

const productCategories = [
  {
    name: 'LED Battens',
    icon: Sun,
    color: 'bg-gradient-to-br from-blue-500 to-teal-500',
    products: ['3-IN-1 T5 Batten', 'T5 Batten', 'Emergency Batten']
  },
  {
    name: 'LED Bulbs',
    icon: Lightbulb,
    color: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    products: ['Hammer Bulb (MaxGlow)', 'Standard LED Bulbs']
  },
  {
    name: 'Panel Lights',
    icon: Factory,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    products: ['2x2 Panel', 'Square Panel', 'Round Panel']
  },
  {
    name: 'Down Lights',
    icon: Eye,
    color: 'bg-gradient-to-br from-green-500 to-emerald-500',
    products: ['Round Downlight', 'Square Downlight', 'COB Downlight']
  },
  {
    name: 'Street Lights',
    icon: Sun,
    color: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    products: ['LED Street Light', 'Pole Mounted', 'Industrial Grade']
  }
]

export default function ProductsCatalog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  const handlePdfLoad = () => {
    setPdfLoaded(true)
  }

  const handlePdfError = () => {
    setPdfError(true)
  }

  const downloadPdf = () => {
    const link = document.createElement('a')
    link.href = '/pdf/RayTech_Products.pdf'
    link.download = 'RayTech_Products_Catalog.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-background to-white">
      <Navbar />
      
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-theme-primary to-theme-secondary py-12 sm:py-16 mt-20 sm:mt-24"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end mb-6">
            <button
              onClick={downloadPdf}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download PDF</span>
            </button>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Product Catalog
              </h1>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                Complete LED lighting specifications and technical details
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-6 sm:py-8 border-b border-theme-border"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-4 text-center">
            Product Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-3 shadow-theme-sm hover:shadow-theme-md transition-all duration-300 border border-theme-border hover:border-theme-accent/20">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-theme-text-primary mb-1 text-xs sm:text-sm">
                    {category.name}
                  </h3>
                  <div className="text-xs text-theme-accent">
                    {category.products.length} products
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-6 sm:py-8"
      >
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-theme-lg border border-theme-border overflow-hidden">
            {/* PDF Viewer Header */}
            <div className="bg-gradient-to-r from-theme-background to-theme-accent/5 p-3 sm:p-4 border-b border-theme-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-theme-text-primary text-sm">RayTech Products Catalog</h3>
                    <p className="text-xs text-theme-text-secondary">Complete product specifications</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {!pdfLoaded && !pdfError && (
                    <div className="flex items-center gap-2 text-theme-text-secondary">
                      <div className="w-4 h-4 border-2 border-theme-accent border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">Loading...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* PDF Container */}
            <div className="relative bg-gray-100 min-h-[70vh]">
              {!pdfError ? (
                <iframe
                  src="/pdf/RayTech_Products.pdf"
                  className="w-full h-full min-h-[70vh]"
                  onLoad={handlePdfLoad}
                  onError={handlePdfError}
                  title="RayTech Products Catalog"
                />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-theme-text-primary mb-2">
                    PDF Viewer Not Available
                  </h3>
                  <p className="text-theme-text-secondary mb-4 max-w-sm text-sm">
                    Your browser doesn't support embedded PDF viewing. Please download the catalog to view it.
                  </p>
                  <button
                    onClick={downloadPdf}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent text-white rounded-full font-medium hover:shadow-theme-glow transition-all duration-300 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Catalog
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
              <h3 className="text-base font-bold text-blue-900 mb-2">Technical Specifications</h3>
              <p className="text-blue-700 text-xs leading-relaxed">
                Detailed electrical specifications, photometric data, and installation guidelines.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <h3 className="text-base font-bold text-green-900 mb-2">Quality Certifications</h3>
              <p className="text-green-700 text-xs leading-relaxed">
                Certified for quality and safety standards including IP ratings and energy efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}