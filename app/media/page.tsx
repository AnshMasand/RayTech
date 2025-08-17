'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Calendar, BookOpen, Newspaper, ArrowRight, Camera, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function MediaPage() {
  const headerRef = useRef(null)
  const eventsRef = useRef(null)
  const blogsRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.3 })
  const blogsInView = useInView(blogsRef, { once: true, amount: 0.3 })

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
              <Camera className="w-4 h-4" />
              MEDIA CENTER
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-text-primary mb-8 leading-tight">
              News, Events &
              <span className="block gradient-text">Insights</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-theme-text-secondary max-w-4xl mx-auto mb-12">
              Stay updated with RayTech's latest developments, industry insights, and company events as we continue to illuminate the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary mb-4">
              Events & Announcements
            </h2>
            <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
              Discover our latest company events, product launches, and industry participation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Empty State for Events */}
            <div className="bg-gradient-to-br from-theme-background to-theme-accent/5 rounded-2xl p-12 border border-theme-border text-center">
              <div className="w-20 h-20 rounded-2xl bg-theme-accent/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-theme-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-theme-text-primary mb-4">
                Coming Soon
              </h3>
              
              <p className="text-theme-text-secondary mb-6 max-w-md mx-auto">
                Stay tuned for exciting updates about our upcoming events, product launches, and industry participation.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-theme-border/50">
                  <div className="w-8 h-8 rounded-lg bg-theme-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-4 h-4 text-theme-accent" />
                  </div>
                  <h4 className="font-semibold text-theme-text-primary text-sm mb-1">Product Launches</h4>
                  <p className="text-xs text-theme-text-secondary">New LED innovations</p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-theme-border/50">
                  <div className="w-8 h-8 rounded-lg bg-theme-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-4 h-4 text-theme-accent" />
                  </div>
                  <h4 className="font-semibold text-theme-text-primary text-sm mb-1">Industry Events</h4>
                  <p className="text-xs text-theme-text-secondary">Trade shows & conferences</p>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-theme-border/50">
                  <div className="w-8 h-8 rounded-lg bg-theme-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Newspaper className="w-4 h-4 text-theme-accent" />
                  </div>
                  <h4 className="font-semibold text-theme-text-primary text-sm mb-1">Company News</h4>
                  <p className="text-xs text-theme-text-secondary">Latest announcements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section ref={blogsRef} className="py-12 sm:py-16 bg-gradient-to-b from-theme-background to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary mb-4">
              Insights & Articles
            </h2>
            <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
              Expert insights on LED technology, industry trends, and manufacturing excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={blogsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Empty State for Blogs */}
            <div className="bg-white rounded-2xl p-12 border border-theme-border text-center shadow-theme-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-theme-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-theme-text-primary mb-4">
                Blog Articles Coming Soon
              </h3>
              
              <p className="text-theme-text-secondary mb-6 max-w-md mx-auto">
                We're preparing insightful articles about LED technology, manufacturing processes, and industry innovations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="bg-theme-background rounded-xl p-6 border border-theme-border">
                  <div className="w-12 h-12 rounded-xl bg-theme-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-theme-primary" />
                  </div>
                  <h4 className="font-bold text-theme-text-primary mb-2">Technical Articles</h4>
                  <p className="text-sm text-theme-text-secondary mb-4">Deep dives into LED technology, manufacturing processes, and quality standards</p>
                  <div className="flex items-center gap-2 text-theme-accent text-sm font-medium">
                    <span>Coming Soon</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="bg-theme-background rounded-xl p-6 border border-theme-border">
                  <div className="w-12 h-12 rounded-xl bg-theme-accent/10 flex items-center justify-center mb-4">
                    <Newspaper className="w-6 h-6 text-theme-accent" />
                  </div>
                  <h4 className="font-bold text-theme-text-primary mb-2">Industry Insights</h4>
                  <p className="text-sm text-theme-text-secondary mb-4">Market trends, sustainability initiatives, and future of LED lighting</p>
                  <div className="flex items-center gap-2 text-theme-accent text-sm font-medium">
                    <span>Coming Soon</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
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
              Stay Connected
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Don't miss out on our latest updates, events, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:raytech@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-theme-primary rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Subscribe to Updates
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <Camera className="w-5 h-5" />
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}