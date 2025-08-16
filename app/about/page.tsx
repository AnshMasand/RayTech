'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Factory, Users, Award, Globe, Building } from 'lucide-react'
import Navbar from '@/components/Navbar'


export default function AboutPage() {
  const headerRef = useRef(null)
  const statsRef = useRef(null)
  const partnersRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const partnersInView = useInView(partnersRef, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-background to-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={headerRef} className="py-16 sm:py-20 lg:py-24 mt-20 sm:mt-24 bg-gradient-to-b from-theme-background to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 premium-pattern opacity-20"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide mb-8">
              <Building className="w-4 h-4" />
              ABOUT US
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-text-primary mb-8 leading-tight">
              About
              <span className="block gradient-text">RayTech</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-theme-text-secondary max-w-4xl mx-auto mb-12">
              One of India's largest LED manufacturing facilities, delivering innovation, quality, and excellence in LED technology.
            </p>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-theme-accent mb-2">2.2M</div>
                <div className="text-sm font-medium text-theme-text-secondary">Units Monthly Capacity</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-theme-accent mb-2">46+</div>
                <div className="text-sm font-medium text-theme-text-secondary">Advanced Machines</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-theme-accent mb-2">100%</div>
                <div className="text-sm font-medium text-theme-text-secondary">In-House Manufacturing</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Strengths */}
      <section ref={statsRef} className="py-12 sm:py-16 bg-gradient-to-b from-theme-primary to-theme-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose RayTech
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Industry-leading capabilities that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Manufacturing</h3>
              <p className="text-white/80 text-sm">State-of-the-art machinery and 11 conveyor lines ensuring precision and scale</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Excellence</h3>
              <p className="text-white/80 text-sm">Rigorous quality control and R&D team ensuring industry-leading standards</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategic Location</h3>
              <p className="text-white/80 text-sm">Mumbai facility with 60,000 sq ft capacity and expansion potential</p>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Strategic Partnership */}
      <section ref={partnersRef} className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary mb-4">
              Strategic Partnership
            </h2>
            <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-theme-background to-theme-accent/5 rounded-2xl p-8 border border-theme-border text-center">
              <div className="mb-6">
                <div className="w-48 h-16 mx-auto relative">
                  <Image
                    src="/images/logo/syska.png"
                    alt="SYSKA LED Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-theme-text-primary mb-4">
                Powering Innovation Together
              </h3>
              
              <p className="text-theme-text-secondary mb-6">
                Since 2022, our partnership with SYSKA LED combines manufacturing excellence with market leadership.
              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-theme-primary to-theme-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Discover our state-of-the-art facility and meet our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#factory"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-theme-primary rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                <Factory className="w-5 h-5" />
                Tour Our Facility
              </Link>
              <Link 
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}