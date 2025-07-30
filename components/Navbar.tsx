'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import { useThemeClasses } from '@/lib/ThemeContext'

const navItems = [
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Indoor Lighting', href: '/products/indoor' },
      { name: 'Outdoor Lighting', href: '/products/outdoor' },
      { name: 'Industrial Lighting', href: '/products/industrial' },
      { name: 'Custom Solutions', href: '/products/custom' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    dropdown: [
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Warehousing', href: '/industries/warehousing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Infrastructure', href: '/industries/infrastructure' },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'About', href: '/about' },
  { name: 'Themes', href: '/themes' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { styles, colors } = useThemeClasses()

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-lg border-b' : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled ? `${colors.light}f0` : `${colors.light}e6`,
        borderColor: isScrolled ? `${colors.neutral}33` : 'transparent'
      }}
    >
      {/* Partner Ribbon */}
      <div className="text-xs py-2 text-center font-medium" style={{ ...styles.bgDark, ...styles.textLight }}>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full animate-pulse" style={styles.bgNeutral}></span>
          Strategic Manufacturing Partner to Syska LED • ISO 9001:2015 Certified
        </span>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={styles.bgDark}>
              <span className="font-bold text-lg" style={styles.textLight}>R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold" style={styles.textDark}>Raytech LED</span>
              <span className="text-xs -mt-1" style={styles.textNeutral}>Manufacturing Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 transition-colors duration-200 font-medium hover:opacity-80"
                  style={styles.textDark}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-56 backdrop-blur-md rounded-lg shadow-xl border overflow-hidden"
                    style={{
                      backgroundColor: `${colors.light}f0`,
                      borderColor: `${colors.neutral}33`
                    }}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 transition-colors duration-200 text-sm hover:opacity-80"
                        style={styles.textDark}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${colors.light}80`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Theme Switcher, Contact & CTA */}
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <Link
                href="/contact"
                className="transition-colors duration-200 font-medium hover:opacity-80"
                style={styles.textDark}
              >
                Contact
              </Link>
              <button 
                className="px-6 py-2.5 font-semibold rounded-lg transition-colors duration-300 shadow-sm hover:opacity-90"
                style={{ ...styles.bgDark, ...styles.textLight }}
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            style={styles.textDark}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 top-[88px] backdrop-blur-md lg:hidden"
          style={{ backgroundColor: `${colors.dark}f0` }}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 transition-colors duration-200 hover:opacity-80"
                  style={styles.textLight}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm transition-colors duration-200 hover:opacity-80"
                        style={styles.textNeutral}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              className="w-full px-6 py-3 font-semibold rounded-full transition-colors duration-300 hover:opacity-90"
              style={{ ...styles.bgNeutral, ...styles.textDark }}
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
} 