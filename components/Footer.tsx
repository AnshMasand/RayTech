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
      { name: 'ROI Calculator', href: '/calculator' },
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
  { icon: '🛡️', text: 'Financially Strong', description: '' },
  { icon: '📋', text: 'BIS Approved', description: '' },
  { icon: '🇮🇳', text: 'Make in India', description: '' },
  { icon: '📊', text: 'ISO Certified', description: '' },
]

export default function Footer() {
  return (
    <footer className="bg-theme-dark text-theme-light">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-theme-neutral rounded-full led-glow flex items-center justify-center">
                <span className="font-bold text-xl text-theme-dark">R</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-theme-light">Raytech LED</div>
              </div>
            </div>
            
            <p className="text-theme-muted mb-8 leading-relaxed">
              State-of-the-art LED manufacturing
              <br />
              facility delivering innovative lighting
              <br />
              solutions. Strategic partner to Syska
              <br />
              LED.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-theme-muted" />
                <div>
                  <a href="tel:+919876543210" className="text-theme-light transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-light)'}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-theme-muted" />
                <div>
                  <a href="mailto:info@raytechled.com" className="text-theme-light transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-light)'}>
                    info@raytechled.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-theme-muted mt-0.5" />
                <div className="text-theme-light">
                  Industrial Area, Phase 2<br />
                  Gurugram, Haryana 122001
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold text-theme-light mb-6">{section.title}</h3>
              <ul className="space-y-3">
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
        <div className="py-12 border-t border-theme-border">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-theme-neutral font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-theme-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-theme-muted">
              © 2024 Raytech LED. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <div className="flex items-center gap-2 text-sm text-theme-muted">
              <span>Powered by</span>
              <span className="text-theme-neutral">Claude</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}