'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

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

export default function NewsCard({ title, excerpt, date, image, slug, delay = 0, content, onReadMore }: NewsCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="aspect-video bg-gradient-to-br from-primary-yellow to-primary-orange relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-6xl">
            📰
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-orange transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <button 
          onClick={onReadMore}
          className="inline-flex items-center gap-2 text-primary-orange font-semibold hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}
