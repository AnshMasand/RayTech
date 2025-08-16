'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building, Users, Award, Zap, Factory, TrendingUp, Globe, Target, Briefcase } from 'lucide-react'
import Navbar from '@/components/Navbar'


const keyLeadership = [
  {
    name: 'Dhiraj Nagpal',
    role: 'Director',
    image: '/images/people/dhiraj.png',
    company: 'Nagpal Group',
    description: 'Director of Fastlink Connections Private Ltd, a Company with net worth of 82 Cr and pioneer in Samsung Mobile distribution in south Mumbai catering to more than 300 outlets.',
    additionalInfo: 'A group Co, Swiftlink Connections Pvt Ltd is currently authorized distributor of Syska LED for South Mumbai and western suburbs catering to around 500 dealers.'
  },
  {
    name: 'Sanjay Jain',
    role: 'Founding Director',
    image: '/images/people/sanjay.png',
    company: 'Magnet Group',
    description: 'Founder Director in Magnet Telelink Private Limited which operates Retail Chain under the name Magnet Telelink Pvt Ltd and is a renowned name in the industry circles for mobile retail outlets since last 23 years.',
    additionalInfo: ''
  }
]


const factoryTeam = [
  {
    name: 'Tirthkar Rajendra Dabgar',
    role: 'Production Manager',
    experience: '3+ Years at RayTech',
    previousCompany: 'Lumisence Pvt Ltd (2 years)',
    specialty: 'Manufacturing Operations',
    image: '/images/people/Tirthkar.jpeg'
  },
  {
    name: 'Satyam Sarat Khuntia',
    role: 'Quality Control Manager', 
    experience: '3+ Years at RayTech',
    previousCompany: 'Reynolds India Pvt Ltd (1 year)',
    specialty: 'Quality Assurance',
    image: '/images/people/Satyam.jpeg'
  },
  {
    name: 'Riddhi Jagdish Sakharekar',
    role: 'Assembly Line Manager',
    experience: '3+ Years at RayTech',
    previousCompany: 'Multiplast Pvt Ltd (6 months)',
    specialty: 'SMT & Assembly',
    image: '/images/people/Riddhi.jpeg'
  },
  {
    name: 'Swarup Prakash Botekar',
    role: 'Operations Manager',
    experience: '3+ Years at RayTech',
    previousCompany: 'Amazon Pvt Ltd (1 year)',
    specialty: 'Process Optimization',
    image: '/images/people/Swarup.jpeg'
  }
]

export default function TeamPage() {
  const headerRef = useRef(null)
  const leadershipRef = useRef(null)
  const teamRef = useRef(null)
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
  const leadershipInView = useInView(leadershipRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })

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
              <Users className="w-4 h-4" />
              OUR TEAM
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-text-primary mb-8 leading-tight">
              Meet Our
              <span className="block gradient-text">Expert Team</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-theme-text-secondary max-w-3xl mx-auto mb-12">
              Industry veterans and skilled professionals driving excellence in LED manufacturing
            </p>
            
            {/* Team Strength Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-theme-accent mb-2">15+</div>
                <div className="text-sm font-medium text-theme-text-secondary">Years Combined Experience</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-theme-accent mb-2">6</div>
                <div className="text-sm font-medium text-theme-text-secondary">Key Team Members</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-theme-accent mb-2">3+</div>
                <div className="text-sm font-medium text-theme-text-secondary">Years at RayTech</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-theme-border/50 hover:shadow-theme-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-theme-accent mb-2">100%</div>
                <div className="text-sm font-medium text-theme-text-secondary">Commitment to Quality</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Leadership */}
      <section ref={leadershipRef} className="py-12 sm:py-16 bg-gradient-to-b from-theme-primary to-theme-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Proven track record in business excellence and strategic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {keyLeadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-theme-accent font-semibold mb-2">{leader.role}</p>
                  <p className="text-sm text-white/80 mb-4">{leader.company}</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {leader.description.length > 150 ? leader.description.substring(0, 150) + '...' : leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Team */}
      <section ref={teamRef} className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary mb-4">
              Production Team
            </h2>
            <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
              Skilled professionals ensuring manufacturing excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {factoryTeam.map((manager, index) => (
              <motion.div
                key={manager.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-b from-theme-background to-white rounded-2xl p-4 sm:p-6 h-full border border-theme-border hover:shadow-theme-md transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Avatar */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="relative mb-3 sm:mb-4 mx-auto w-16 h-16 sm:w-20 sm:h-20">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-theme-md">
                        <Image
                          src={manager.image}
                          alt={manager.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-theme-text-primary mb-1">{manager.name}</h4>
                    <div className="text-theme-accent font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{manager.role}</div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-theme-accent/10 rounded-lg">
                      <span className="text-[10px] sm:text-xs font-semibold text-theme-accent">{manager.experience}</span>
                    </div>
                    
                    <div className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-theme-primary/10 rounded-lg">
                      <span className="text-[10px] sm:text-xs font-semibold text-theme-primary">{manager.specialty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Strength Summary */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-theme-primary to-theme-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Our Team Stands Out
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-theme-accent mb-2">Proven Experience</div>
                <p className="text-white/80 text-sm">Industry veterans with deep expertise in LED manufacturing and business operations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-theme-accent mb-2">Quality Focus</div>
                <p className="text-white/80 text-sm">Dedicated professionals ensuring every product meets the highest standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-theme-accent mb-2">Innovation Drive</div>
                <p className="text-white/80 text-sm">Forward-thinking approach to manufacturing and technology advancement</p>
              </div>
            </div>
            <Link 
              href="/#factory"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-theme-primary rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              <Factory className="w-5 h-5" />
              See Our Team in Action
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}