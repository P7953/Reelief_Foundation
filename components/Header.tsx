'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50)
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not near top - hide navbar
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setExpandedSection(null)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-custom max-w-full">
        <div className="flex items-center justify-between py-3 md:py-4 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 min-w-0 group">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="Saptrishi Foundation Logo" 
                  width={60} 
                  height={60}
                  className="object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform group-hover:scale-110 duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-primary-yellow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xl sm:text-2xl md:text-[28px] font-bold text-primary-orange leading-none" style={{ fontFamily: "'Playfair Display', serif" }} >
                    Saptrishi
                </span>
                <span className="text-xl sm:text-2xl md:text-[28px] font-bold text-primary-orange leading-none" style={{ fontFamily: "'Playfair Display', serif" }} >
                    Foundation
                </span>
              </div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-orange transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* Who We Are */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                Who We Are
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  About
                </Link>
                <Link href="/vision-mission" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Vision & Mission
                </Link>
                <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Contact Us
                </Link>
                <Link href="/our-team" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  Our Team
                </Link>
              </div>
            </div>

            {/* Your Contribution */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                Your Contribution
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/membership" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  Enroll for Divyang Membership
                </Link>
                <Link href="/volunteer" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Become a Volunteer
                </Link>
                <Link href="/associates" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Associates With
                </Link>
                <Link href="/testimonials" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  Testimonials
                </Link>
              </div>
            </div>

            {/* What We Do */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                What We Do
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/initiatives" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-lg">
                  Our Initiatives
                </Link>
              </div>
            </div>

            {/* Our Offering */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                Our Offering
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/media-gallery" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  Media Gallery
                </Link>
                <Link href="/news-events" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  News & Events
                </Link>
                <Link href="/downloads" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  Download
                </Link>
              </div>
            </div>
            
            <a 
              href="https://rzp.io/l/saptrishifoundation" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Donate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Donate Button - Below Logo */}
        <div className="lg:hidden px-4 pb-3">
          <a
            href="https://rzp.io/l/saptrishifoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary-orange text-white font-semibold py-3 px-6 rounded-xl hover:bg-orange-600 transition-all shadow-md text-lg"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="lg:hidden bg-white border-t max-h-[calc(100vh-80px)] overflow-y-auto"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-1 py-4">
                <Link 
                  href="/" 
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium rounded-lg mx-2"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                {/* Who We Are Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleSection('whoWeAre')}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium rounded-lg mx-2 flex items-center justify-between"
                  >
                    Who We Are
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        expandedSection === 'whoWeAre' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'whoWeAre' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-2 space-y-1">
                          <Link 
                            href="/about" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            About
                          </Link>
                          <Link 
                            href="/vision-mission" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Vision & Mission
                          </Link>
                          <Link 
                            href="/contact" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Contact Us
                          </Link>
                          <Link 
                            href="/our-team" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Our Team
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Your Contribution Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleSection('contribution')}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium rounded-lg mx-2 flex items-center justify-between"
                  >
                    Your Contribution
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        expandedSection === 'contribution' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'contribution' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-2 space-y-1">
                          <Link 
                            href="/membership" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Enroll for Divyang Membership
                          </Link>
                          <Link 
                            href="/volunteer" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Become a Volunteer
                          </Link>
                          <Link 
                            href="/associates" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Associates With
                          </Link>
                          <Link 
                            href="/testimonials" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Testimonials
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* What We Do Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleSection('whatWeDo')}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium rounded-lg mx-2 flex items-center justify-between"
                  >
                    What We Do
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        expandedSection === 'whatWeDo' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'whatWeDo' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-2 space-y-1">
                          <Link 
                            href="/initiatives" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Our Initiatives
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Our Offering Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => toggleSection('offering')}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium rounded-lg mx-2 flex items-center justify-between"
                  >
                    Our Offering
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${
                        expandedSection === 'offering' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'offering' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 ml-2 space-y-1">
                          <Link 
                            href="/media-gallery" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Media Gallery
                          </Link>
                          <Link 
                            href="/news-events" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            News & Events
                          </Link>
                          <Link 
                            href="/downloads" 
                            className="block px-6 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-primary-orange rounded-lg ml-2 transition-colors" 
                            onClick={closeMobileMenu}
                          >
                            Download
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="px-4 pt-4">
                  <a 
                    href="https://rzp.io/l/saptrishifoundation" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block"
                    onClick={closeMobileMenu}
                  >
                    Donate
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
