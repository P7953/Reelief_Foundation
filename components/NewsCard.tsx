'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image?: string
  slug: string
  delay?: number
  content?: string
  onReadMore?: () => void
}

export default function NewsCard({ title, excerpt, date, image, delay = 0, onReadMore }: NewsCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Image area */}
      <div className="aspect-video relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-6xl"
            style={{ background: GRADIENT }}
          >
            📰
          </div>
        )}
        {/* Top gradient bar overlay */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRADIENT }} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit"
          style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)', color: '#38bdf8' }}
        >
          <Calendar size={12} />
          {date}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-sky-500 transition-colors leading-snug flex-1">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-5 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <button
          onClick={onReadMore}
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:gap-3 transition-all duration-200 mt-auto"
        >
          Read More <ArrowRight size={15} />
        </button>
      </div>
    </motion.div>
  )
}
