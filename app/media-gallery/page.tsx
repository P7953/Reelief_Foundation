'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Newspaper, X } from 'lucide-react'
import { useState } from 'react'

export default function MediaGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const mediaImages = [
    {
      src: '/images/Media/Atma Nirbhar Divyang ABhiyan (1).JPG',
      alt: 'Atma Nirbhar Divyang ABhiyan (1)',
      title: 'Atma Nirbhar Divyang ABhiyan.',
    },
    {
      src: '/images/Media/Atma Nirbhar Divyang ABhiyan (2).JPG',
      alt: 'Atma Nirbhar Divyang ABhiyan (2)',
      title: 'Atma Nirbhar Divyang ABhiyan.',
    },
    {
      src: '/images/Media/Blanket Distribution (2).jpeg',
      alt: 'Blanket Distribution (2)',
      title: 'Blanket Distribution.',
    },
    {
      src: '/images/Media/Blanket Distribution.jpeg',
      alt: 'Blanket Distribution',
      title: 'Blanket Distribution.',
    },
    {
      src: '/images/Media/Body & Sexual Awareness Camp (1).jpeg',
      alt: 'Body & Sexual Awareness Camp (1)',
      title: 'Body & Sexual Awareness Camp.',
    },
    {
      src: '/images/Media/Body & Sexual Awareness Camp (2).jpeg',
      alt: 'Body & Sexual Awareness Camp (2)',
      title: 'Body & Sexual Awareness Camp.',
    },
    {
      src: '/images/Media/Durga Tekdi.jpeg',
      alt: 'Durga Tekdi',
      title: 'Durga Tekdi Program.',
    },
    {
      src: '/images/Media/Homeopathy camp  (1).jpg',
      alt: 'Homeopathy camp  (1)',
      title: 'Homeopathy camp.',
    },
    {
      src: '/images/Media/Homeopathy camp  (2).jpg',
      alt: 'Homeopathy camp  (2)',
      title: 'Homeopathy camp.',
    },
    {
      src: '/images/Media/Homeopathy camp  (3).jpg',
      alt: 'Homeopathy camp  (3)',
      title: 'Homeopathy camp.',
    },
    {
      src: '/images/Media/Homeopathy camp  (4).jpg',
      alt: 'Homeopathy camp  (4)',
      title: 'Homeopathy camp.',
    },
    {
      src: '/images/Media/IIT Bombay.jpg',
      alt: 'IIT Bombay',
      title: 'IIT Bombay Presentation.',
    },
    {
      src: '/images/Media/Legal Guardianship (2).JPG',
      alt: 'Legal Guardianship (2)',
      title: 'Legal Guardianship.',
    },
    {
      src: '/images/Media/Legal Guardianship.JPG',
      alt: 'Legal Guardianship',
      title: 'Legal Guardianship.',
    },
    {
      src: '/images/Media/Lighthouse 8th feb 25.jpeg',
      alt: 'Lighthouse 8th feb 25',
      title: 'Lighthouse 8th feb 25.',
    },
    {
      src: '/images/Media/Puple Jallosh.jpg',
      alt: 'Puple Jallosh',
      title: 'Puple Jallosh.',
    },
    {
      src: '/images/Media/Purple (2).jpg',
      alt: 'Purple (2)',
      title: 'Purple.',
    },
    {
      src: '/images/Media/Purple.jpg',
      alt: 'Purple',
      title: 'Purple.',
    },
    {
      src: '/images/Media/Shrikant (1).jpeg',
      alt: 'Shrikant (1)',
      title: 'Shrikant Movie.',
    },
    {
      src: '/images/Media/Shrikant (2).jpeg',
      alt: 'Shrikant (2)',
      title: 'Shrikant Movie.',
    },
    {
      src: '/images/Media/Shrikant (3).jpeg',
      alt: 'Shrikant (3)',
      title: 'Shrikant Movie.',
    },
    {
      src: '/images/Media/Sitare Zameen PAr (1).jpeg',
      alt: 'Sitare Zameen PAr (1)',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare Zameen PAr (1).jpg',
      alt: 'Sitare Zameen PAr (1)',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare Zameen PAr (2).JPG',
      alt: 'Sitare Zameen PAr (2)',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare Zameen PAr (2).jpeg',
      alt: 'Sitare Zameen PAr (2)',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare Zameen PAr (3).jpeg',
      alt: 'Sitare Zameen PAr (3)',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare Zameen par.JPG',
      alt: 'Sitare Zameen par',
      title: 'Sitare Zameen Par Movie show.',
    },
    {
      src: '/images/Media/Sitare.JPG',
      alt: 'Sitare',
      title: 'Sitare Zameen Par Movie show.',
    },
  ]

  return (
    <>
      <PageHeader 
        title="Media Gallery" 
        subtitle="Our journey through the Photos"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Newspaper className="text-white" size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Photo's
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Various activities Photos taken by Saptrishi Foundation.
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm">Click to view full size</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <Image
              src={mediaImages[selectedImage].src}
              alt={mediaImages[selectedImage].alt}
              width={1200}
              height={1500}
              className="object-contain max-h-[90vh] w-auto"
            />
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-lg font-semibold">
              {mediaImages[selectedImage].title}
            </p>
            <p className="text-white/70 text-sm mt-2">
              {selectedImage + 1} / {mediaImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-yellow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
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
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/95 mb-10">
              Follow us on social media for the latest updates and news about our work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/news-events"
                className="px-8 py-4 bg-white text-primary-orange rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <span>View News & Events</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
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
