'use client'

import Link from 'next/link'
import { Factory, Mail, Phone, MapPin, Award, Shield, TrendingUp, Globe, FileText, Users, Building2 } from 'lucide-react'
import { useThemeClasses } from '@/lib/ThemeContext'

const footerSections = {
  products: {
    title: 'Product Lines',
    links: [
      { name: 'Commercial Indoor', href: '/products/commercial-indoor' },
      { name: 'Industrial & Warehouse', href: '/products/industrial' },
      { name: 'Outdoor Infrastructure', href: '/products/outdoor' },
      { name: 'Custom Solutions', href: '/products/custom' },
    ]
  },
  industries: {
    title: 'Industries Served',
    links: [
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Warehousing & Logistics', href: '/industries/warehousing' },
      { name: 'Retail & Commercial', href: '/industries/retail' },
      { name: 'Infrastructure', href: '/industries/infrastructure' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Technical Documentation', href: '/resources/technical' },
      { name: 'ROI Calculator', href: '/calculator' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Certifications', href: '/certifications' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Raytech', href: '/about' },
      { name: 'Manufacturing Facility', href: '/manufacturing' },
      { name: 'Quality Standards', href: '/quality' },
      { name: 'Sustainability', href: '/sustainability' },
    ]
  },
}

const certifications = [
  { icon: Shield, text: 'ISO 9001:2015', description: 'Quality Management' },
  { icon: Award, text: 'BIS Certified', description: 'Bureau of Indian Standards' },
  { icon: Factory, text: 'Make in India', description: 'Manufacturing Excellence' },
  { icon: TrendingUp, text: 'Debt-Free Operations', description: 'Financial Stability' },
]

const companyStats = [
  { value: '50,000', label: 'sq ft Manufacturing Facility' },
  { value: '120K', label: 'LED Boards Daily Capacity' },
  { value: '15+', label: 'Quality Test Protocols' },
  { value: '99.8%', label: 'Operational Uptime' },
]

export default function Footer() {
  const { styles, colors } = useThemeClasses()
  
  return (
    <footer className="text-raytech-light" style={styles.bgDark}>
      {/* Company Stats Bar */}
      <div className="border-b border-raytech-neutral/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyStats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-raytech-neutral mb-1">{stat.value}</div>
                <div className="text-sm text-raytech-neutral/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-raytech-neutral rounded-lg flex items-center justify-center">
                <span className="text-raytech-dark font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-raytech-light">Raytech LED</div>
                <div className="text-sm text-raytech-neutral">Manufacturing Excellence</div>
              </div>
            </div>
            
            <p className="text-raytech-neutral mb-8 leading-relaxed">
              Leading LED manufacturing facility delivering professional lighting solutions 
              for commercial and industrial applications. Strategic manufacturing partner 
              to Syska LED since 2024.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-raytech-neutral/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-raytech-neutral" />
                </div>
                <div>
                  <div className="text-sm text-raytech-neutral/80">Business Inquiries</div>
                  <a href="tel:+919876543210" className="text-raytech-light hover:text-raytech-neutral transition-colors font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-raytech-neutral/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-raytech-neutral" />
                </div>
                <div>
                  <div className="text-sm text-raytech-neutral/80">Email</div>
                  <a href="mailto:business@raytechled.com" className="text-raytech-light hover:text-raytech-neutral transition-colors font-medium">
                    business@raytechled.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-raytech-neutral/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-raytech-neutral" />
                </div>
                <div>
                  <div className="text-sm text-raytech-neutral/80">Manufacturing Facility</div>
                  <div className="text-raytech-light">
                    Industrial Area, Phase 2<br />
                    Gurugram, Haryana 122001, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold text-raytech-light mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-raytech-neutral hover:text-raytech-light transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="py-12 border-t border-raytech-neutral/20">
          <h3 className="text-xl font-semibold text-raytech-light text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-raytech-neutral/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <cert.icon className="w-8 h-8 text-raytech-neutral" />
                </div>
                <div className="font-semibold text-raytech-light text-sm mb-1">{cert.text}</div>
                <div className="text-xs text-raytech-neutral/80">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Banner */}
        <div className="py-8 border-t border-raytech-neutral/20">
          <div className="bg-raytech-neutral/10 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Building2 className="w-6 h-6 text-raytech-neutral" />
              <span className="text-lg font-semibold text-raytech-light">Strategic Manufacturing Partner</span>
            </div>
            <p className="text-raytech-neutral text-sm">
              Authorized manufacturing partner to Syska LED • Delivering quality LED solutions across India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-raytech-neutral/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-raytech-neutral">
              <span>© 2024 Raytech LED Manufacturing Pvt. Ltd. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-raytech-light transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-raytech-light transition-colors">
                  Terms of Service
                </Link>
                <Link href="/quality" className="hover:text-raytech-light transition-colors">
                  Quality Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-raytech-neutral" />
              <span className="text-raytech-neutral">Made in India</span>
              <span className="text-raytech-neutral">•</span>
              <span className="text-raytech-neutral">Engineered for Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 