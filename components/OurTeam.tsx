'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Factory, TrendingUp, Star, Building } from 'lucide-react'

const leadership = [
  {
    name: 'Ashok Nagpal',
    role: 'Chairman',
    description: '50 YRS Manufacturing & Retail; Ex-Minister Rainwear. Oversees Ops Excellence.',
    icon: Building,
    experience: '50+ Years Experience',
    specialty: 'Operations & Strategy'
  },
  {
    name: 'Dhiraj Nagpal', 
    role: 'Chief Executive Officer',
    description: 'Grew SYSKA channel to ₹40 cr. Drives sales & channels.',
    icon: TrendingUp,
    experience: 'Revenue Growth Expert',
    specialty: 'Sales & Business Development'
  },
  {
    name: 'Sanjay Jain',
    role: 'Chief Marketing Officer', 
    description: 'Magnet Telelink founder; Retail format veteran. Builds consumer brand.',
    icon: Star,
    experience: 'Brand Building Expert',
    specialty: 'Marketing & Consumer Brands'
  }
]

const factoryTeam = [
  {
    name: 'Tirthkar Rajendra Dabgar',
    role: 'Production Manager',
    age: 30,
    experience: '3+ Years at RayTech',
    previousCompany: 'Lumisence Pvt Ltd (2 years)',
    specialty: 'Manufacturing Operations'
  },
  {
    name: 'Satyam Sarat Khuntia',
    role: 'Quality Control Manager', 
    age: 25,
    experience: '3+ Years at RayTech',
    previousCompany: 'Reynolds India Pvt Ltd (1 year)',
    specialty: 'Quality Assurance'
  },
  {
    name: 'Riddhi Jagdish Sakharekar',
    role: 'Assembly Line Manager',
    age: 25, 
    experience: '3+ Years at RayTech',
    previousCompany: 'Multiplast Pvt Ltd (6 months)',
    specialty: 'SMT & Assembly'
  },
  {
    name: 'Swarup Prakash Botekar',
    role: 'Operations Manager',
    age: 30,
    experience: '3+ Years at RayTech',
    previousCompany: 'Amazon Pvt Ltd (1 year)',
    specialty: 'Process Optimization'
  }
]

export default function OurTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="team" ref={ref} className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-theme-background/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 premium-pattern opacity-20"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-accent/10 text-theme-accent font-semibold text-sm tracking-wide">
              <Users className="w-4 h-4" />
              OUR TEAM
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-theme-text-primary">Experienced </span>
              <span className="gradient-text">Leadership</span>
            </h2>
            
            <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full"></div>
            
            <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
              From startup vision to manufacturing excellence. <span className="font-semibold text-theme-text-primary">Meet the team driving innovation.</span>
            </p>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary mb-3 sm:mb-4">Promoters</h3>
            <p className="text-base sm:text-lg text-theme-text-secondary">Visionary leaders with decades of industry expertise</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="executive-card bg-gradient-to-b from-white to-theme-background/30 p-6 sm:p-8 h-full hover:shadow-executive transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Avatar & Icon */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="relative mb-4 sm:mb-6 mx-auto w-20 h-20 sm:w-24 sm:h-24">
                      {/* Professional Avatar Placeholder */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-theme-lg">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-theme-primary/20 to-theme-accent/20 flex items-center justify-center">
                          <Users className="w-8 h-8 sm:w-10 sm:h-10 text-theme-primary opacity-60" />
                        </div>
                      </div>
                      {/* Role Icon Badge */}
                      <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-theme-md">
                        <leader.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl font-bold text-theme-text-primary mb-2">{leader.name}</h4>
                    <div className="text-sm sm:text-base text-theme-accent font-semibold mb-3 sm:mb-4">{leader.role}</div>
                  </div>

                  {/* Experience Badges */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-theme-accent/10 rounded-full">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-theme-accent" />
                      <span className="text-xs sm:text-sm font-semibold text-theme-text-primary">{leader.experience}</span>
                    </div>
                    <div className="text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-theme-primary/10 to-theme-accent/10 rounded-lg sm:rounded-xl border border-theme-border">
                      <span className="text-xs sm:text-sm font-medium text-theme-text-secondary">{leader.specialty}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-theme-text-secondary text-xs sm:text-sm leading-relaxed text-center">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Factory Management Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary mb-3 sm:mb-4">The Core Team</h3>
            <p className="text-base sm:text-lg text-theme-text-secondary">Experienced factory managers driving execution excellence</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {factoryTeam.map((manager, index) => (
              <motion.div
                key={manager.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className="group"
              >
                <div className="executive-card bg-gradient-to-b from-white to-theme-background/30 p-4 sm:p-6 h-full hover:shadow-executive transition-all duration-500 hover:-translate-y-1">
                  
                  {/* Avatar */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="relative mb-3 sm:mb-4 mx-auto w-16 h-16 sm:w-20 sm:h-20">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-theme-md">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-theme-primary/10 to-theme-accent/10 flex items-center justify-center">
                          <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-theme-primary opacity-60" />
                        </div>
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-accent rounded-full border-2 border-white shadow-theme-sm flex items-center justify-center">
                        <span className="text-[10px] sm:text-xs font-bold text-white">{manager.age}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-theme-text-primary mb-1">{manager.name}</h4>
                    <div className="text-theme-accent font-semibold text-xs sm:text-sm mb-2 sm:mb-3">{manager.role}</div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-theme-accent/10 rounded-lg">
                      <span className="text-[10px] sm:text-xs font-semibold text-theme-primary">{manager.experience}</span>
                    </div>
                    
                    <div className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-theme-primary/5 to-theme-accent/5 rounded-lg border border-theme-border">
                      <span className="text-[10px] sm:text-xs font-medium text-theme-text-secondary">Previous: {manager.previousCompany}</span>
                    </div>
                    
                    <div className="text-center px-2 sm:px-3 py-1.5 sm:py-2 bg-white rounded-lg shadow-sm border border-theme-border/50">
                      <span className="text-[10px] sm:text-xs font-semibold text-theme-text-primary">{manager.specialty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Values Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-theme-border-subtle"
        >
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-text-primary">
              From Startup to Scale
            </h4>
            <p className="text-base sm:text-lg text-theme-text-secondary leading-relaxed">
              Since our JV with SYSKA in 2022, we've built a world-class manufacturing facility and assembled a team of industry veterans. 
              <span className="font-semibold text-theme-text-primary"> Our combined experience spans decades in LED technology, manufacturing excellence, and consumer brand building.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                Strategic Partnerships
              </div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                Manufacturing Excellence
              </div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-theme-accent/10 rounded-full text-theme-accent font-semibold text-xs sm:text-sm">
                Innovation Focus
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}