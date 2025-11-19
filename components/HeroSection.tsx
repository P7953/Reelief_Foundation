'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [showDots, setShowDots] = useState(true)

  

  

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 bg-[url('/images/Background.gif')] bg-cover bg-center overflow-hidden">


      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Contribution can <br />
          change someone&apos;s life
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pioneer initiative in India for integrated one stop solution for all types of Person with Disabilities and their families
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-800 rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  )
}
