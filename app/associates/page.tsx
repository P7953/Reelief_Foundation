'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Handshake } from 'lucide-react'
import Image from 'next/image'

export default function AssociatesPage() {
  const associates = [
    { id: 1, image: '/images/associate-13.png', alt: 'Associate 1' },
    { id: 2, image: '/images/associate-12.png', alt: 'Associate 2' },
    { id: 3, image: '/images/associate-05.png', alt: 'Associate 3' },
    { id: 4, image: '/images/associate-08.png', alt: 'Associate 4' },
    { id: 5, image: '/images/associate-02.png', alt: 'Associate 5' },
    { id: 6, image: '/images/associate-04.png', alt: 'Associate 6' },
    
    
  ]

  return (
    <>
      <PageHeader 
        title="Associates & Partners" 
        subtitle="Building a strong network to serve the community better"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Collaborative Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working together with organizations across sectors to maximize our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {associates.map((associate, index) => (
              <motion.div
                key={associate.id}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200 flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="relative w-52 h-52">
                  <Image
                    src={associate.image}
                    alt={associate.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)' }}>
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Handshake className="w-20 h-20 mx-auto mb-6 text-gray-900" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Join our network of partners and help us create a more inclusive society
            </p>
            <a href="/contact" className="border-2 border-white text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105 active:scale-95">
              Become a Partner
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
