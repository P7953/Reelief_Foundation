'use client'

import Link from 'next/link'
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-5">Saptrishi Foundation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A pioneering initiative in India offering an integrated one-stop solution for all individuals with disabilities.
            </p>

            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100080244490383"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a 
                href="https://www.instagram.com/saptrishi_foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://x.com/SaptrishiF1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              <a 
                href="https://www.youtube.com/channel/UCiSuDYU4NfCrQz7F7fD97sg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/in/saptrishi-foundation-29b073230/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">About Us</Link></li>
              <li><Link href="/vision-mission" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Vision & Mission</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Testimonials</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-5">Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/initiatives" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Our Initiatives</Link></li>
              <li><Link href="/associates" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Associates</Link></li>
              <li><Link href="/news-events" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">News & Events</Link></li>
              <li><Link href="/downloads" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Downloads</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold mb-5">Get Involved</h3>
            <ul className="space-y-3">
              <li><Link href="/volunteer" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Become a Volunteer</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Donate Now</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Divyang Membership</Link></li>
              <li><Link href="/suggestions" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Suggestions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary-orange transition-colors inline-block">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-br from-primary-yellow via-primary-orange to-orange-600">
        <div className="w-full py-5">
          <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white text-xl text-center md:text-left">
              © {currentYear} Saptrishi Foundation. All rights reserved.
            </p>

            <div className="flex gap-6 text-l">
              <Link href="/privacy" className="text-white hover:opacity-80 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:opacity-80 transition">
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}
