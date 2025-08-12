'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Indoor Lighting', href: '/products/indoor' },
      { name: 'Outdoor Lighting', href: '/products/outdoor' },
      { name: 'Industrial Lighting', href: '/products/industrial' },
    ],
  },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech Vault', href: '/tech-vault' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-xl' : 'backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled 
          ? `var(--theme-dark)F2` // 95% opacity 
          : `var(--theme-dark)E6`, // 90% opacity
        borderBottom: isScrolled ? '1px solid #333333' : '1px solid transparent'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center led-glow bg-theme-neutral">
              <span className="font-bold text-xl text-theme-dark">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-theme-light">Raytech</span>
              <span className="text-sm -mt-1 text-theme-muted">LED Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 transition-colors duration-200 font-medium text-theme-light"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--theme-neutral)'
                    item.dropdown && setOpenDropdown(item.name)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--theme-light)'
                    setOpenDropdown(null)
                  }}
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
                    style={{ backgroundColor: 'var(--theme-card)', borderColor: 'var(--theme-border)' }}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 transition-colors duration-200 text-sm text-theme-light"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `var(--theme-neutral)1A`
                          e.currentTarget.style.color = 'var(--theme-neutral)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                          e.currentTarget.style.color = 'var(--theme-light)'
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Get Quote Button */}
            <div className="flex items-center space-x-4">
              <button className="theme-button-primary px-6 py-2.5 text-sm font-semibold">
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-theme-light"
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
          className="fixed inset-0 top-20 backdrop-blur-md lg:hidden"
          style={{ backgroundColor: `var(--theme-dark)F2` }}
        >
          <div className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg font-medium text-theme-light transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-light)'}
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
                        className="block py-2 text-sm transition-colors duration-200"
                        style={{ color: 'var(--theme-muted)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--theme-neutral)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--theme-muted)'}
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
              className="theme-button-primary w-full px-6 py-3 text-lg font-semibold mt-6"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}