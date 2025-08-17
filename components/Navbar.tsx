'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
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
  { name: 'Media', href: '/media' },
  { name: 'Careers', href: '/careers' },
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
              <a 
                href="https://wa.me/+919892048600?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20Raytech%20LED%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-primary px-6 lg:px-8 py-2.5 lg:py-3 text-xs lg:text-sm font-semibold tracking-wide"
              >
                Get Quote
              </a>
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[98] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-[5rem] sm:top-[6rem] lg:hidden z-[99]"
              style={{ maxHeight: 'calc(100vh - 5rem)' }}
            >
              <div className="mx-4 bg-white rounded-2xl shadow-2xl border border-theme-border overflow-hidden">
                {/* Navigation Items */}
                <div className="max-h-[60vh] overflow-y-auto py-2">
                  {navItems.map((item, index) => (
                    <div key={item.name} className="px-1">
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 mx-2 rounded-xl text-base text-theme-text-primary hover:bg-theme-accent/8 active:bg-theme-accent/12 transition-colors duration-200 font-semibold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </Link>
                      {item.dropdown && (
                        <div className="ml-6 mr-2 mb-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 rounded-lg text-sm text-theme-text-secondary hover:text-theme-primary hover:bg-theme-accent/5 active:bg-theme-accent/8 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {index < navItems.length - 1 && (
                        <div className="mx-4 my-2 border-b border-theme-border/30" />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="p-4 border-t border-theme-border bg-theme-background/50">
                  <a 
                    href="https://wa.me/+919892048600?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20Raytech%20LED%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-button-primary w-full px-6 py-3.5 text-base font-semibold block text-center rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}