"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Home.jpeg"
          alt="Reelief Foundation community work"
          fill
          priority
          className="object-cover object-center"
        />

        {/* FIX 1: Sky Blue gradient overlay — left side darker for text readability, right side lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/85 via-sky-900/60 to-sky-800/30" />

        {/* FIX 2: Subtle bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
        <div className="max-w-2xl space-y-7 text-white">

          {/* FIX 3: Sky Blue tagline pill with animated dot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest font-semibold bg-sky-500/20 border border-sky-300/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            ONE TEAM • ONE MISSION
          </motion.div>

          {/* FIX 4: Headline — tightened to 2 lines, no awkward breaks */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.15] tracking-tight"
          >
            Healing Communities.{" "}
            <span className="text-sky-300 italic font-serif">
              Empowering Lives.
            </span>
            <br />
            <span className="text-white">Since 2010.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl"
          >
            Reelief Foundation works alongside communities to improve lives
            through compassion, empowerment, and sustainable action — restoring
            dignity, creating opportunities, and driving lasting change.
          </motion.p>

          {/* FIX 5: CTAs — "Join Our Movement" button made clearly visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link href="/donate">
              <button className="bg-sky-300 hover:bg-sky-600 active:bg-sky-700 text-white px-9 py-4 rounded-full font-semibold text-base shadow-lg shadow-sky-500/30 transition-all duration-200 hover:scale-105 active:scale-95">
                Donate Now
              </button>
            </Link>

            {/* FIX 6: Outline button — now has solid white bg on hover so it's clearly readable */}
            <Link href="/volunteer">
              <button className="border-2 border-white text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105 active:scale-95">
                Join Our Movement
              </button>
            </Link>
          </motion.div>

          {/* FIX 7: Trust line — includes registration number placeholder for credibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Green verified dot */}
            <span className="flex items-center gap-1.5 text-sm text-white/75">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Registered NGO
            </span>
            <span className="text-white/30">•</span>
            <span className="text-sm text-white/75">80G Tax Benefits Available</span>
            <span className="text-white/30">•</span>
            {/* FIX 8: Reg number shown inline for credibility — update with real number */}
            <span className="text-sm text-white/75">Reg. No: MH/XXXXX/2010</span>
          </motion.div>

        </div>
      </div>

      {/* FIX 9: Scroll indicator at bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>

    </section>
  )
}