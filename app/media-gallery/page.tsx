'use client'

import PageHeader from '@/components/PageHeader'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'

export default function MediaGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const mediaImages = [
    {
      src: '/images/Media/Awareness.jpeg',
      alt: 'Awareness',
      title: 'Awareness',
    },
    {
      src: '/images/Media/Candle.jpeg',
      alt: 'Candle',
      title: 'Candle Light Vigil',
    },
    {
      src: '/images/Media/Checkup.jpeg',
      alt: 'Checkup',
      title: 'Health Checkup',
    },
    {
      src: '/images/Media/Health.jpeg',
      alt: 'Health',
      title: 'Health Camp',
    },
    {
      src: '/images/Media/Health2.jpeg',
      alt: 'Health Camp 2',
      title: 'Health Camp 2',
    },
    {
      src: '/images/Media/Health3.jpeg',
      alt: 'Health Camp 3',
      title: 'Health Camp 3',
    },
    {
      src: '/images/Media/Health4.jpeg',
      alt: 'Health Camp 4',
      title: 'Health Camp 4',
    },
    {
      src: '/images/Media/Health5.jpeg',
      alt: 'Health Camp 5',
      title: 'Health Camp 5',
    },
    {
      src: '/images/Media/HIV.jpeg',
      alt: 'HIV Awareness',
      title: 'HIV Awareness',
    },
    {
      src: '/images/Media/HIV2.jpeg',
      alt: 'HIV Awareness 2',
      title: 'HIV Awareness 2',
    },
  ]

  const goNext = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % mediaImages.length)
  }

  const goPrev = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + mediaImages.length) % mediaImages.length)
  }

  return (
    <>
      <PageHeader
        title="Media Gallery"
        subtitle="Our journey through the Photos"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              style={{ background: GRADIENT }}
            >
              <Images className="text-white" size={40} strokeWidth={1.5} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Photo Gallery
            </h2>

            {/* Gradient underline */}
            <div
              className="w-24 h-1 mx-auto mb-6 rounded-full"
              style={{ background: GRADIENT }}
            />

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Various activities captured by{' '}
              <span className="font-semibold text-sky-500">Reelief Foundation</span> — moments of
              impact, care, and community.
            </p>
          </motion.div>

          {/* Media Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mediaImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 border border-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(130, 214, 250, 0.85) 0%, rgba(165, 173, 248, 0.5) 25%, transparent 100%)' }}
                  />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg drop-shadow">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                      <span className="inline-block w-4 h-px bg-white/60" />
                      Click to view full size
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center z-10 border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center z-10 border border-white/20"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center z-10 border border-white/20"
              onClick={(e) => { e.stopPropagation(); goNext() }}
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              className="relative max-w-5xl w-full flex flex-col items-center gap-4"
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ maxHeight: '80vh' }}>
                <Image
                  src={mediaImages[selectedImage].src}
                  alt={mediaImages[selectedImage].alt}
                  width={1200}
                  height={1500}
                  className="object-contain max-h-[78vh] w-auto mx-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Caption bar */}
              <div
                className="px-6 py-3 rounded-full text-white text-sm font-semibold shadow-lg flex items-center gap-3"
                style={{ background: GRADIENT }}
              >
                <span>{mediaImages[selectedImage].title}</span>
                <span className="opacity-60">|</span>
                <span className="opacity-80">{selectedImage + 1} / {mediaImages.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden" style={{ background: GRADIENT }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Follow us on social media for the latest updates and news about our work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/news-events"
                className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <span>View News &amp; Events</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/60 rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
