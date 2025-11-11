'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Saptrishi Foundation Logo" 
              width={250} 
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-orange transition-colors font-medium"
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  About Us
                </Link>
                <Link href="/vision-mission" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Vision & Mission
                </Link>
                <Link href="/impact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Impact
                </Link>
                <Link href="/testimonials" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  Testimonials
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/initiatives" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  Our Initiatives
                </Link>
                <Link href="/associates" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Associates
                </Link>
                <Link href="/news-events" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  News & Events
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-orange transition-colors font-medium flex items-center gap-1">
                Get Involved
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/volunteer" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-t-lg">
                  Become a Volunteer
                </Link>
                <Link href="/donate" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Donate
                </Link>
                <Link href="/membership" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange">
                  Divyang Membership
                </Link>
                <Link href="/suggestions" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary-orange rounded-b-lg">
                  Suggestions
                </Link>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-primary-orange transition-colors font-medium"
            >
              Contact
            </Link>
            
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
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 bg-white border-t max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase">About</p>
                <Link href="/about" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/vision-mission" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Vision & Mission
                </Link>
                <Link href="/impact" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Impact
                </Link>
                <Link href="/testimonials" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Testimonials
                </Link>
              </div>

              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase">Programs</p>
                <Link href="/initiatives" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Our Initiatives
                </Link>
                <Link href="/associates" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Associates
                </Link>
                <Link href="/news-events" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  News & Events
                </Link>
              </div>

              <div className="border-b border-gray-100">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase">Get Involved</p>
                <Link href="/volunteer" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Become a Volunteer
                </Link>
                <Link href="/donate" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Donate
                </Link>
                <Link href="/membership" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Divyang Membership
                </Link>
                <Link href="/suggestions" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange block" onClick={() => setIsMobileMenuOpen(false)}>
                  Suggestions
                </Link>
              </div>

              <Link 
                href="/contact" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-orange transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-4">
                <a 
                  href="https://rzp.io/l/saptrishifoundation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
