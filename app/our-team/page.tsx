'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the passionate people driving Saptrishi Foundation"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary-orange font-semibold mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Team Spotlight.
            </h2>
          </motion.div>
        </div>
        <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
         <div className="w-full flex justify-center">
            <img
            src="/images/ComingSoon.png"
            alt="Coming Soon"
            className="w-[800px] md:w-[800px] lg:w-[1000px] object-contain"
            />
         </div>
        </section>

            
      </section>
    </>
  )
}
