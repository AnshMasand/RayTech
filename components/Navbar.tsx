'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '/#products',
    dropdown: [
      { name: 'LED Bulbs', href: '/#products' },
      { name: 'LED Battens', href: '/#products' },
      { name: 'TVP Tubes', href: '/#products' },
    ],
  },
  { name: 'Factory', href: '/#factory' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
  { name: 'Vision', href: '/vision' },
  { name: 'Contact', href: 'mailto:raytech@gmail.com' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl shadow-executive' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: isScrolled 
          ? `rgba(255, 255, 255, 0.9)` 
          : `rgba(26, 54, 93, 0.6)`,
        borderBottom: isScrolled ? '1px solid var(--theme-border)' : '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center shadow-theme-lg group-hover:shadow-theme-glow transition-all duration-300 overflow-hidden ${
                isScrolled 
                  ? 'bg-white border border-theme-border' 
                  : 'bg-white/95 backdrop-blur-sm'
              }`}>
                <Image 
                  src="/raytech-logo.png" 
                  alt="RayTech Logo" 
                  width={48} 
                  height={48}
                  className="object-contain filter drop-shadow-sm sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px]"
                />
              </div>
              <div className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-gradient-secondary border-white' 
                  : 'bg-gradient-primary border-white/90'
              }`}></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-theme-primary' : 'text-white'
              }`}>RayTech</span>
              <span className={`text-[8px] sm:text-[9px] lg:text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-theme-text-secondary' : 'text-white/80'
              }`}>Global Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isScrolled 
                      ? 'text-theme-text-primary hover:text-theme-primary hover:bg-theme-accent/10' 
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="text-xs lg:text-sm font-semibold tracking-wide">{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 duration-300" />}
                </Link>
                
                {/* Premium Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-theme-surface backdrop-blur-xl rounded-2xl shadow-executive border border-theme-border overflow-hidden"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-theme-text-secondary hover:text-theme-primary hover:bg-theme-accent/5 group"
                        >
                          <span className="text-sm font-medium">{subItem.name}</span>
                          <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Premium CTA Button */}
            <div className="flex items-center ml-4 lg:ml-6 pl-4 lg:pl-6 border-l border-theme-border/30">
              <button className="theme-button-primary px-6 lg:px-8 py-2.5 lg:py-3 text-xs lg:text-sm font-semibold tracking-wide">
                Get Quote
              </button>
            </div>
          </div>

          {/* Premium Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-theme-primary hover:bg-theme-accent/10' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 top-16 sm:top-20 lg:top-24 backdrop-blur-xl lg:hidden bg-white/98 border-t border-theme-border shadow-xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-1.5 sm:space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-theme-text-primary hover:bg-theme-accent/8 active:bg-theme-accent/12 transition-colors duration-200 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-50" />
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 sm:ml-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm text-theme-text-secondary hover:text-theme-primary hover:bg-theme-accent/5 active:bg-theme-accent/8 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="p-3 sm:p-4 lg:p-6 border-t border-theme-border bg-gradient-to-b from-white to-theme-background/50">
              <button 
                className="theme-button-primary w-full px-4 sm:px-6 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}