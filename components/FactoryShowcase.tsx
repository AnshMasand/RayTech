'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Factory, Shield, Award, TrendingUp, Users, Zap, CheckCircle, Download, ArrowRight } from 'lucide-react'
import { useThemeClasses } from '@/lib/ThemeContext'

const manufacturingStats = [
  { 
    icon: Factory,
    label: 'Manufacturing Capacity', 
    value: '120,000', 
    unit: 'LED boards/day',
    description: 'Automated SMT production lines'
  },
  { 
    icon: Shield,
    label: 'Quality Assurance', 
    value: '15+', 
    unit: 'test protocols',
    description: 'Per product validation'
  },
  { 
    icon: TrendingUp,
    label: 'Operational Efficiency', 
    value: '99.8%', 
    unit: 'uptime',
    description: 'Continuous production capability'
  },
  { 
    icon: Users,
    label: 'Engineering Team', 
    value: '50+', 
    unit: 'specialists',
    description: 'R&D and quality engineers'
  },
]

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', status: 'Certified' },
  { name: 'BIS Certification', description: 'Bureau of Indian Standards', status: 'Approved' },
  { name: 'Make in India', description: 'Government Initiative', status: 'Registered' },
  { name: 'Energy Star', description: 'Energy Efficiency Program', status: 'Partner' },
]

const capabilities = [
  {
    title: 'Advanced SMT Lines',
    description: 'State-of-the-art surface mount technology with automated optical inspection',
    specs: ['Pick & Place: 45,000 CPH', 'Accuracy: ±0.05mm', 'Component Range: 0201-50mm']
  },
  {
    title: 'Photometric Testing',
    description: 'Precision light measurement and optical characterization laboratory',
    specs: ['Integrating Sphere: 2m diameter', 'Goniophotometer: Type C', 'Spectroradiometer: Class A']
  },
  {
    title: 'Environmental Testing',
    description: 'Comprehensive reliability and durability validation chambers',
    specs: ['Temperature: -40°C to +85°C', 'Humidity: 10% to 95% RH', 'Vibration: IEC 60068-2-6']
  },
  {
    title: 'Quality Control',
    description: 'Multi-stage inspection and testing protocols for every product',
    specs: ['Incoming QC: 100% inspection', 'In-process: Statistical control', 'Final test: Automated systems']
  },
]

export default function FactoryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { styles, colors } = useThemeClasses()

  return (
    <section ref={ref} className="py-20" style={{ ...styles.bgDark, ...styles.textLight }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={styles.textLight}>
            Manufacturing Excellence
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={styles.textNeutral}>
            Our 50,000 sq ft state-of-the-art facility combines advanced automation, 
            rigorous quality control, and continuous innovation to deliver world-class LED solutions.
          </p>
        </motion.div>

        {/* Manufacturing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {manufacturingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="backdrop-blur-sm rounded-xl p-6 border"
              style={{
                backgroundColor: `${colors.light}1a`,
                borderColor: `${colors.neutral}33`
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colors.neutral}33` }}
                >
                  <stat.icon className="w-6 h-6" style={styles.textNeutral} />
                </div>
                <div className="text-sm font-medium" style={styles.textNeutral}>{stat.label}</div>
              </div>
              <div className="text-3xl font-bold mb-1" style={styles.textLight}>
                {stat.value}
              </div>
              <div className="text-sm mb-2" style={styles.textNeutral}>{stat.unit}</div>
              <div className="text-xs" style={{ color: `${colors.neutral}b3` }}>{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12" style={styles.textLight}>Core Manufacturing Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: `${colors.light}0d`,
                  borderColor: `${colors.neutral}1a`
                }}
              >
                <h4 className="text-xl font-semibold mb-3" style={styles.textLight}>{capability.title}</h4>
                <p className="mb-4" style={styles.textNeutral}>{capability.description}</p>
                <div className="space-y-2">
                  {capability.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={styles.textNeutral} />
                      <span className="text-sm" style={{ color: `${colors.neutral}cc` }}>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12" style={styles.textLight}>Certifications & Compliance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="backdrop-blur-sm rounded-lg p-6 text-center border"
                style={{
                  backgroundColor: `${colors.light}1a`,
                  borderColor: `${colors.neutral}33`
                }}
              >
                <Award className="w-12 h-12 mx-auto mb-4" style={styles.textNeutral} />
                <h4 className="font-semibold mb-2" style={styles.textLight}>{cert.name}</h4>
                <p className="text-sm mb-3" style={{ color: `${colors.neutral}cc` }}>{cert.description}</p>
                <span 
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: `${colors.neutral}33`,
                    color: colors.neutral
                  }}
                >
                  <CheckCircle className="w-3 h-3" />
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="rounded-2xl p-8 text-center border"
          style={{
            backgroundColor: `${colors.light}1a`,
            borderColor: `${colors.neutral}33`
          }}
        >
          <Factory className="w-16 h-16 mx-auto mb-6" style={styles.textNeutral} />
          <h3 className="text-2xl font-bold mb-4" style={styles.textLight}>
            Schedule a Factory Visit
          </h3>
          <p className="mb-8 max-w-2xl mx-auto" style={styles.textNeutral}>
            Experience our manufacturing excellence firsthand. Tour our facility, meet our engineering team, 
            and see how we maintain the highest quality standards in LED production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-colors duration-300 hover:opacity-90"
              style={{ ...styles.bgLight, ...styles.textDark }}
            >
              <Download className="w-5 h-5" />
              Download Facility Brochure
            </button>
            <button 
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 font-semibold rounded-lg transition-all duration-300"
              style={{ 
                borderColor: colors.neutral,
                color: colors.neutral
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.neutral
                e.currentTarget.style.color = colors.dark
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = colors.neutral
              }}
            >
              Schedule Visit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 