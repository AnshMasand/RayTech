'use client'

import Link from 'next/link'
import { Factory, Mail, Phone, MapPin, Award, Shield, TrendingUp, Globe } from 'lucide-react'

const footerSections = {
  products: {
    title: 'Products',
    links: [
      { name: 'LED Battens', href: '/#products' },
      { name: 'LED Bulbs', href: '/#products' },
      { name: 'Panel & Down Lights', href: '/#products' },
      { name: 'View Full Catalog', href: '/products-catalog' },
    ]
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Our Vision', href: '/vision' },
      { name: 'Factory Tour', href: '/#factory' },
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
        <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-theme-neutral rounded-full led-glow flex items-center justify-center">
                <span className="font-bold text-base text-theme-dark">R</span>
              </div>
              <div>
                <div className="text-lg font-bold text-theme-light">Raytech LED</div>
              </div>
            </div>
            
            <p className="text-xs text-theme-muted mb-4 leading-relaxed">
              State-of-the-art LED manufacturing facility delivering innovative lighting solutions. Strategic partner to Syska LED.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-theme-muted" />
                <div>
                  <a href="tel:+919892048600" className="text-xs text-theme-light hover:text-theme-neutral transition-colors">
                    +91 98920 48600
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-theme-muted" />
                <div>
                  <a href="mailto:info@raytech.net.in" className="text-xs text-theme-light hover:text-theme-neutral transition-colors">
                    info@raytech.net.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-theme-muted mt-0.5" />
                <div className="text-xs text-theme-light">
                  Ground Floor, Gala No 13G<br />
                  Thacker Industrial Estate<br />
                  N M Joshi Road, Chinchpokli West<br />
                  Mumbai, Maharashtra 400011
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-theme-light mb-3">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-theme-muted hover:text-theme-neutral transition-colors duration-200 text-xs"
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
        <div className="py-4 sm:py-6 border-t border-theme-border">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-base">{cert.icon}</span>
                <span className="text-xs text-theme-neutral font-medium">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-3 sm:py-4 border-t border-theme-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="text-[10px] sm:text-xs text-theme-muted text-center sm:text-left">
              © 2025 Raytech LED. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}