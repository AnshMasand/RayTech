'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Target, TrendingUp, Globe, Building, Users, Zap, Award, Factory, Home } from 'lucide-react'
import Navbar from '@/components/Navbar'

const marketStats = [
  {
    value: '$5.0B',
    label: 'Indian LED Market',
    sublabel: '2024 Market Size',
    icon: Globe
  },
  {
    value: '9.2%',
    label: 'Annual Growth Rate',
    sublabel: 'CAGR to 2030',
    icon: TrendingUp
  },
  {
    value: 'Leading',
    label: 'Market Position',
    sublabel: 'Strategic Growth',
    icon: Target
  },
  {
    value: 'Pan-India',
    label: 'Distribution Network',
    sublabel: 'Growing Presence',
    icon: Building
  }
]


const scalePhase = {
  phase: 'Scale',
  target: 'Manufacturing Excellence',
  timeline: 'Strategic Phase',
  description: 'Establish manufacturing excellence and expand OEM partnerships',
  color: 'from-blue-500 to-cyan-500'
}

const marketSegments = [
  { name: 'Residential', percentage: 40, color: 'bg-blue-500' },
  { name: 'Commercial', percentage: 30, color: 'bg-green-500' },
  { name: 'Industrial', percentage: 15, color: 'bg-yellow-500' },
  { name: 'Outdoor/Infrastructure', percentage: 15, color: 'bg-purple-500' }
]

const businessModel = {
  oem: 70,
  brand: 30,
  description: 'Balanced OEM-Brand model leveraging manufacturing expertise while building consumer brand presence'
}

export default function VisionPage() {
  const headerRef = useRef(null)
  const statsRef = useRef(null)
  const modelRef = useRef(null)
  const scaleRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const modelInView = useInView(modelRef, { once: true, amount: 0.3 })
  const scaleInView = useInView(scaleRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-primary via-theme-secondary to-theme-primary">
      <Navbar />

      {/* Hero Section */}
      <section ref={headerRef} className="py-12 sm:py-16 lg:py-20 mt-20 sm:mt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm tracking-wide mb-8">
              <Zap className="w-4 h-4" />
              VISION 2030
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Illuminating
              <span className="block gradient-text">India's Future</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From a manufacturing startup to India's leading LED solutions provider.
            </p>

            {/* Vision Statement */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                To democratize high-quality LED lighting across India by combining world-class manufacturing 
                with strategic partnerships, creating sustainable value for customers, partners, and stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section ref={statsRef} className="py-10 sm:py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              India's rapidly growing LED lighting market
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-5xl mx-auto">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-white/70 text-xs">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Market Segments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-6">Market Segments</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="space-y-3">
                {marketSegments.map((segment, index) => (
                  <div key={segment.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${segment.color}`}></div>
                      <span className="text-white font-medium text-sm">{segment.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-white/20 rounded-full h-1.5">
                        <motion.div 
                          className={`h-1.5 rounded-full ${segment.color}`}
                          initial={{ width: 0 }}
                          animate={statsInView ? { width: `${segment.percentage}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-white font-bold w-10 text-right text-sm">{segment.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Model */}
      <section ref={modelRef} className="py-10 sm:py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={modelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Business Model
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Hybrid OEM-Brand approach
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Business Model Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={modelInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 text-center">Revenue Mix</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(59 130 246)"
                    strokeWidth="8"
                    strokeDasharray={`${businessModel.oem * 2.51} ${(100 - businessModel.oem) * 2.51}`}
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={modelInView ? { strokeDasharray: `${businessModel.oem * 2.51} ${(100 - businessModel.oem) * 2.51}` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgb(16 185 129)"
                    strokeWidth="8"
                    strokeDasharray={`${businessModel.brand * 2.51} ${(100 - businessModel.brand) * 2.51}`}
                    strokeDashoffset={-businessModel.oem * 2.51}
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={modelInView ? { strokeDasharray: `${businessModel.brand * 2.51} ${(100 - businessModel.brand) * 2.51}` } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">Hybrid</div>
                    <div className="text-xs text-white/70">Model</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white">OEM Partnerships</span>
                  </div>
                  <span className="text-white font-bold">Primary</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white">RayLighting Brand</span>
                  </div>
                  <span className="text-white font-bold">Growing</span>
                </div>
              </div>
            </motion.div>

            {/* Model Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={modelInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Factory className="w-5 h-5" />
                  Core Model: OEM Focus
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Strategic partnerships with SYSKA and other leading brands. Leverage our 
                  in-house SMT capabilities for customization and rapid scalability.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Brand Building: RayLighting™
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Premium strategy targeting urban branded segments. 
                  Growing brand presence across India.
                </p>
              </div>

              <div className="bg-gradient-accent rounded-xl p-4">
                <h4 className="text-base font-bold text-white mb-2">Strategic Advantage</h4>
                <p className="text-white/90 text-xs leading-relaxed">
                  {businessModel.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scale Framework */}
      <section ref={scaleRef} className="py-10 sm:py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scaleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Scale Framework
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Strategic roadmap to establish market leadership
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={scaleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              {/* Phase Header */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${scalePhase.color} flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-xl">1</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4">{scalePhase.phase}</h3>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-white mb-1">{scalePhase.target}</div>
                <div className="text-white/70 text-base">{scalePhase.timeline}</div>
              </div>
              
              <p className="text-white/80 text-center leading-relaxed text-base mb-6">{scalePhase.description}</p>
              
              {/* Key Initiatives */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2 text-sm">Manufacturing Excellence</h4>
                  <ul className="text-white/80 text-xs space-y-1">
                    <li>• Expand in-house SMT capabilities</li>
                    <li>• Implement quality control systems</li>
                    <li>• Optimize production efficiency</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2 text-sm">Strategic Partnerships</h4>
                  <ul className="text-white/80 text-xs space-y-1">
                    <li>• Strengthen SYSKA partnership</li>
                    <li>• Secure additional OEM clients</li>
                    <li>• Build long-term relationships</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-6">
              Be part of India's LED lighting revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/#team"
                className="theme-button-primary px-6 py-3 font-semibold text-sm"
              >
                Meet Our Team
              </Link>
              <Link 
                href="/#factory"
                className="theme-button-secondary px-6 py-3 font-semibold text-sm"
              >
                Tour Our Facility
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}