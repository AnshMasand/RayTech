'use client'

import Link from 'next/link'
import { Factory, Mail, Phone, MapPin, Award, Shield, TrendingUp, Globe } from 'lucide-react'

const footerSections = {
  products: {
    title: 'Products',
    links: [
      { name: 'Indoor Lighting', href: '/products/indoor' },
      { name: 'Outdoor Lighting', href: '/products/outdoor' },
      { name: 'Industrial Lighting', href: '/products/industrial' },
      { name: 'Build Your Fixture', href: '/configurator' },
    ]
  },
  solutions: {
    title: 'Solutions', 
    links: [
      { name: 'Retail', href: '/solutions/retail' },
      { name: 'Warehousing', href: '/solutions/warehousing' },
      { name: 'Smart City', href: '/solutions/smart-city' },
      { name: 'Case Studies', href: '/case-studies' },
    ]
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Tech Vault', href: '/tech-vault' },
      { name: 'Blog & Insights', href: '/blog' },
      { name: 'BIS Certificates', href: '/certificates' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Factory Tour', href: '/factory-tour' },
      { name: 'CSR Initiatives', href: '/csr' },
      { name: 'Contact', href: '/contact' },
    ]
  },
}

const certifications = [
  { icon: '📋', text: 'BIS Approved', description: '' },
  { icon: '🇮🇳', text: 'Make in India', description: '' },
  { icon: '📊', text: 'ISO Certified', description: '' },
]

export default function Footer() {
  return (
    <footer className="bg-theme-dark text-theme-light">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-theme-neutral rounded-full led-glow flex items-center justify-center">
                <span className="font-bold text-lg sm:text-xl text-theme-dark">R</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-theme-light">Raytech LED</div>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-theme-muted mb-6 sm:mb-8 leading-relaxed">
              State-of-the-art LED manufacturing
              <br />
              facility delivering innovative lighting
              <br />
              solutions. Strategic partner to Syska
              <br />
              LED.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-theme-muted" />
                <div>
                  <a href="tel:+919876543210" className="text-sm sm:text-base text-theme-light transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-light)'}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-theme-muted" />
                <div>
                  <a href="mailto:info@raytech.net.in" className="text-sm sm:text-base text-theme-light transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-light)'}>
                    info@raytech.net.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-theme-muted mt-0.5" />
                <div className="text-sm sm:text-base text-theme-light">
                  Industrial Area, Phase 2<br />
                  Gurugram, Haryana 122001
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-base sm:text-lg font-semibold text-theme-light mb-4 sm:mb-6">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-theme-muted transition-colors duration-200 text-sm"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-muted)'}
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
        <div className="py-8 sm:py-12 border-t border-theme-border">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{cert.icon}</span>
                <span className="text-sm sm:text-base text-theme-neutral font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-theme-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-xs sm:text-sm text-theme-muted text-center sm:text-left">
              © 2025 Raytech LED. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}