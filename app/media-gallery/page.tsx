'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Newspaper, X } from 'lucide-react'
import { useState } from 'react'

export default function MediaGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // TODO: Add your image filenames here after downloading from Google Drive
  // and placing them in /public/images/media-gallery/
  const mediaImages = [
    {
      src: '/images/mediagallery/20250108_114647amByGPSMapCamera.jpg',
      alt: 'Saptrishi Foundation Media Coverage',
      title: 'Community Outreach Program',
      description: 'Supporting the differently abled community through dedicated initiatives'
    },
    {
      src: '/images/mediagallery/7.jpeg',
      alt: 'Saptrishi Foundation Event',
      title: 'Foundation Activities',
      description: 'Making a difference in the lives of people with disabilities'
    },
    {
      src: '/images/mediagallery/IMG-20231016-WA0003.jpg',
      alt: 'Saptrishi Foundation News',
      title: 'Media Recognition',
      description: 'Press coverage highlighting our impactful work'
    },
    {
      src: '/images/mediagallery/IMG-20250120-WA0005.jpg',
      alt: 'Foundation Initiative',
      title: 'Support Programs',
      description: 'Empowering individuals through comprehensive support services'
    },
    {
      src: '/images/mediagallery/IMG_0433.JPG',
      alt: 'Community Event',
      title: 'Community Engagement',
      description: 'Building inclusive communities through collaborative efforts'
    },
    {
      src: '/images/mediagallery/IMG_0444.JPG',
      alt: 'Foundation Work',
      title: 'Social Impact',
      description: 'Creating positive change in the community'
    },
    {
      src: '/images/mediagallery/IMG_20231228_170831.jpg',
      alt: 'Press Coverage',
      title: 'News Highlights',
      description: 'Media recognition of our dedication to social welfare'
    },
    {
      src: '/images/mediagallery/IMG_20250117_121637.jpg',
      alt: 'Foundation Activities',
      title: 'Program Implementation',
      description: 'Delivering essential services to those in need'
    },
    {
      src: '/images/mediagallery/IMG_20250119_113232.jpg',
      alt: 'Community Support',
      title: 'Assistance Programs',
      description: 'Providing vital support to the differently abled'
    },
    {
      src: '/images/mediagallery/IMG_20250622_110907.jpg',
      alt: 'Foundation Event',
      title: 'Awareness Campaign',
      description: 'Raising awareness about disability rights and support'
    },
    {
      src: '/images/mediagallery/IMG_20250622_180621.jpg',
      alt: 'Media Feature',
      title: 'Press Recognition',
      description: 'Celebrating our contribution to the community'
    },
    {
      src: '/images/mediagallery/IMG_4103.JPG',
      alt: 'Foundation Initiative',
      title: 'Service Delivery',
      description: 'Implementing programs for community development'
    },
    {
      src: '/images/mediagallery/IMG_4128.JPG',
      alt: 'Community Work',
      title: 'Outreach Activities',
      description: 'Extending our reach to serve more beneficiaries'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2024-06-07 at 11.07.01 AM (1).jpeg',
      alt: 'Foundation News',
      title: 'Media Coverage',
      description: 'Press coverage of our social initiatives'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2024-08-22 at 11.25.44 AM.jpeg',
      alt: 'Community Event',
      title: 'Social Welfare',
      description: 'Working towards inclusive community development'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-04-05 at 1.39.59 PM (1).jpeg',
      alt: 'Foundation Activity',
      title: 'Support Services',
      description: 'Providing comprehensive assistance to beneficiaries'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-04-28 at 5.50.55 PM.jpeg',
      alt: 'Press Feature',
      title: 'News Recognition',
      description: 'Media highlighting our impactful community work'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-04-28 at 5.51.02 PM.jpeg',
      alt: 'Foundation Program',
      title: 'Initiative Spotlight',
      description: 'Showcasing our dedication to social causes'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-07-15 at 1.20.57 PM.jpeg',
      alt: 'Community Service',
      title: 'Public Outreach',
      description: 'Engaging with communities to create awareness'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-08-04 at 12.15.23 PM.jpeg',
      alt: 'Foundation Event',
      title: 'Program Activities',
      description: 'Implementing targeted support initiatives'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-08-04 at 12.15.58 PM.jpeg',
      alt: 'Media Coverage',
      title: 'Press Highlights',
      description: 'Recognition of our contribution to society'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-09-29 at 12.13.03 PM (1).jpeg',
      alt: 'Foundation Work',
      title: 'Community Impact',
      description: 'Making meaningful difference in people\'s lives'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-06 at 1.09.31 PM.jpeg',
      alt: 'Social Initiative',
      title: 'Welfare Programs',
      description: 'Supporting vulnerable communities through our programs'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-06 at 10.46.59 PM.jpeg',
      alt: 'Foundation Coverage',
      title: 'Media Recognition',
      description: 'Press coverage of our social welfare activities'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-07 at 2.50.40 PM (1).jpeg',
      alt: 'Community Program',
      title: 'Service Initiatives',
      description: 'Delivering essential services to the community'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-07 at 2.51.16 PM.jpeg',
      alt: 'Foundation Activity',
      title: 'Support Programs',
      description: 'Providing comprehensive support to beneficiaries'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-07 at 2.51.35 PM.jpeg',
      alt: 'Press Feature',
      title: 'News Highlights',
      description: 'Media recognition of our impactful work'
    },
    {
      src: '/images/mediagallery/WhatsApp Image 2025-10-07 at 2.51.40 PM (1).jpeg',
      alt: 'Foundation Event',
      title: 'Community Engagement',
      description: 'Building stronger, more inclusive communities'
    }
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
