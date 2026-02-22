"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface NavLink {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Who We Are",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Vision & Mission", href: "/vision-mission" },
        { name: "Our Team", href: "/our-team" },
      ],
    },
    {
      name: "Your Contribution",
      href: "/volunteer",
      dropdown: [
        { name: "Become a Volunteer", href: "/volunteer" },
        { name: "Associate With Us", href: "/associates" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Job Openings", href: "/job-openings" },
      ],
    },
    {
      name: "Our Work",
      href: "/initiatives",
      dropdown: [
        { name: "Our Initiatives", href: "/initiatives" },
        { name: "Media Gallery", href: "/media-gallery" },
        { name: "News & Events", href: "/news-events" },
      ],
    },
    { name: "Contact US", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6 pt-4">
      {/* Main Header */}
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-3 border backdrop-blur-md transition-all duration-300
        ${isScrolled
            ? "bg-white/95 shadow-md border-sky-200"
            : "bg-white/80 border-sky-100"
          }`}
      >
        {/* Logo + Brand (Hover animation on name → logo zooms) */}
        <div className="flex items-center gap-3 group cursor-pointer">

          {/* Animated Logo */}
          <motion.div
            className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"

          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: '80%',
                border: '2px solid #38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.85)',
                boxShadow: '0 0 0 3px rgba(56,189,248,0.15)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/Logo.PNG"
                alt="Reelief Foundation Logo"
                width={50}
                height={50}
                priority
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <Link
            href="/"
            className="text-xl font-bold text-neutral-900"
          >
            REELIEF <span className="text-sky-400">FOUNDATION</span>
          </Link>

        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-l font-semibold text-slate-700 hover:text-sky-500 transition-colors"
                aria-haspopup={!!link.dropdown}
                aria-expanded={activeDropdown === link.name}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop Donate Button */}
        <Link href="/donate" className="hidden md:block">
          <button className="w-full mt-2 bg-sky-300 text-white px-2 py-1 rounded-xl text-lg font-bold shadow-lg transition-transform hover:bg-sky-600 over:scale-105">
            Donate Now
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl border border-neutral-200 p-6"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div
                    className="flex justify-between items-center py-2 font-semibold text-neutral-800 cursor-pointer"
                    onClick={() =>
                      link.dropdown
                        ? setMobileExpanded(
                          mobileExpanded === link.name ? null : link.name
                        )
                        : setMobileMenuOpen(false)
                    }
                  >
                    {link.dropdown ? (
                      <span>{link.name}</span>
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}

                    {link.dropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${mobileExpanded === link.name ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && mobileExpanded === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2 text-sm text-slate-600 hover:text-sky-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full mt-4 text-white py-3 rounded-2xl font-bold shadow-lg text-base" style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)' }}>
                  Donate Now
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
