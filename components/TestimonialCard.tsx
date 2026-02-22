'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image?: string
  delay?: number
}

export default function TestimonialCard({ name, role, content, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Quote icon with gradient */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shadow-sm"
        style={{ background: GRADIENT }}
      >
        <Quote className="text-white" size={22} />
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-6 italic leading-relaxed flex-1">
        &quot;{content}&quot;
      </p>

      {/* Divider */}
      <div
        className="w-12 h-0.5 mb-5 rounded-full"
        style={{ background: GRADIENT }}
      />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow"
          style={{ background: GRADIENT }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-sky-500 font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
