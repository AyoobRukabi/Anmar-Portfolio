'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/language'

export default function Navigation() {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: t('nav.home'), section: null },
    { href: '/#work', label: t('nav.work'), section: 'work' },
    { href: '/#about', label: t('nav.about'), section: 'about' },
    { href: '/#contact', label: t('nav.contact'), section: 'contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string | null) => {
    if (section) {
      e.preventDefault()
      const element = document.getElementById(section)
      if (element) {
        const offset = 80 // Account for fixed nav height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-display font-bold text-yellow hover:opacity-80 transition-opacity"
          >
            ANMAR
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 lg:gap-12 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className="relative text-white hover:text-yellow transition-colors duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Language Switcher */}
            <li className="flex gap-2 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                  language === 'en'
                    ? 'bg-yellow text-black'
                    : 'text-white hover:text-yellow'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fi')}
                className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                  language === 'fi'
                    ? 'bg-yellow text-black'
                    : 'text-white hover:text-yellow'
                }`}
              >
                FI
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-yellow block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-yellow block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-yellow block"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.section)}
                      className="text-3xl font-display text-white hover:text-yellow transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsMobileMenuOpen(false)
                    }}
                    className={`px-6 py-2 text-lg font-medium transition-colors rounded ${
                      language === 'en'
                        ? 'bg-yellow text-black'
                        : 'text-white border border-white hover:border-yellow hover:text-yellow'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('fi')
                      setIsMobileMenuOpen(false)
                    }}
                    className={`px-6 py-2 text-lg font-medium transition-colors rounded ${
                      language === 'fi'
                        ? 'bg-yellow text-black'
                        : 'text-white border border-white hover:border-yellow hover:text-yellow'
                    }`}
                  >
                    FI
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
