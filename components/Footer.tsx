"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* About */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold">Reelief Foundation</h3>
            <p className="text-neutral-300 leading-relaxed text-sm">
              Improving lives through compassion, empowerment, and sustainable
              action. Working alongside communities to restore dignity and create
              opportunities since 2010.
            </p>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://www.facebook.com/profile.php?id=100080244490383", icon: Facebook },
                { href: "https://www.instagram.com/saptrishi_foundation/", icon: Instagram },
                { href: "https://www.youtube.com/channel/UCiSuDYU4NfCrQz7F7fD97sg", icon: Youtube },
                { href: "https://www.linkedin.com/in/saptrishi-foundation-29b073230/", icon: Linkedin },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral-300 hover:text-sky-400">Home</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-sky-400">About Us</Link></li>
              <li><Link href="/vision-mission" className="text-neutral-300 hover:text-sky-400">Vision & Mission</Link></li>
              <li><Link href="/testimonials" className="text-neutral-300 hover:text-sky-400">Testimonials</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/initiatives" className="text-neutral-300 hover:text-sky-400">Our Initiatives</Link></li>
              <li><Link href="/news-events" className="text-neutral-300 hover:text-sky-400">News & Events</Link></li>
              <li><Link href="/media-gallery" className="text-neutral-300 hover:text-sky-400">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/volunteer" className="text-neutral-300 hover:text-sky-400">Become a Volunteer</Link></li>
              <li><Link href="/donate" className="text-neutral-300 hover:text-sky-400">Donate Now</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-sky-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Registered NGO</li>
              <li>80G Tax Exemption Available</li>
              <li>Email: info@reelieffoundation.org</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>
                <Link href="/privacy" className="hover:text-sky-400">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-sky-400">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-sky-100 via-sky-200 to-cyan-100">
        <div className="w-full py-5">
          <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-900 text-base md:text-lg text-center md:text-left font-medium">
              © 2026 Reelief Foundation. All rights reserved.
            </p>
            <div className="text-slate-900 text-base md:text-lg font-serif flex gap-6">
              <p>
                Developed by{" "}
                <Link
                  href="https://vortechzy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-sky-600 transition"
                >
                  Vortechzy Technologies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
