'use client'

import PageHeader from '@/components/PageHeader'
import TestimonialCard from '@/components/TestimonialCard'
import VideoEmbed from '@/components/VideoEmbed'
import { motion } from 'framer-motion'
import { Heart, Users, Award } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'A woman with a special child',
      role: 'Parent of Differently Abled Child',
      content: 'I came to know about Saptrishi Foundation and I came to know that they help special children. They help for getting the pension, obtaining UDID card and obtaining benefit of Niramaya Health Insurance. Then Saptrishi Foundation helped me a lot. As one of my son is small, I could not often go to offices or take him there with me.'
    },
    {
      name: 'A senior citizen',
      role: 'Person with Disability',
      content: 'My certificate has been issued with their cooperation. They also took efforts on my behalf to obtain financial assistance from the Municipal Corporation. Saptrishi Foundation has helped a lot for obtaining disability certificate and I have obtained this certificate with their support. Saptrishi Foundation has helped for the differently-abled (Divyang) certificate.'
    }
  ]

  const parentFeedback = {
    title: 'Feedback from Workshops & Health Camps',
    description: 'Saptrishi Foundation organizes various health check up camps and workshops for the beneficiaries. During such a workshop related to sexuality of special persons, many parents expressed their thoughts after the workshop. They stated that they had never thought this way that sexuality is there as long as one is alive and that everyone has it. They stated that they had never thought it from this perspective. They expressed their happiness after knowing ways and options to deal with this issue and means of appropriating it. This workshop was conducted by a well known speaker on this subject Dr. Sachin Nagarkar.',
    additionalNote: 'Parents also thank Saptrishi Foundation after attending health camps. They also share their satisfaction of seamless conduction of check up, guidance by the doctor, provision of medicines and other support.'
  }

  return (
    <>
      <PageHeader 
        title="Testimonials" 
        subtitle="Voices of hope, stories of transformation"
      />

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border-l-4 border-primary-orange">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-orange/10 p-3 rounded-full">
                  <Heart className="text-primary-orange" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Making a Real Difference
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    While working in this field and helping the PwDs to find a way out of their troubles, Saptrishi Foundation has received plenty of feedback in form of appreciation and confidence expressed by the parents and the beneficiaries. Here are some representative quotes from our beneficiaries:
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficiary Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <Users className="text-primary-orange" size={20} />
              <span className="text-primary-orange font-semibold text-sm uppercase tracking-wide">
                Beneficiary Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from those whose lives have been touched by our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parents & Community Feedback Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-yellow/20 px-4 py-2 rounded-full mb-4">
                <Award className="text-primary-orange" size={20} />
                <span className="text-primary-orange font-semibold text-sm uppercase tracking-wide">
                  Community Feedback
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {parentFeedback.title}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-primary-yellow/10 via-white to-primary-orange/10 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl border border-primary-orange/20">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md">
                  <div className="flex gap-2 mb-4">
                    <div className="w-1 bg-primary-orange rounded-full"></div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                        Workshop on Sexuality Education
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {parentFeedback.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-1 bg-primary-orange rounded-full"></div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                        Health Camp Appreciation
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {parentFeedback.additionalNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-orange/10 px-4 py-2 rounded-full mb-4">
              <svg 
                className="text-primary-orange" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span className="text-primary-orange font-semibold text-sm uppercase tracking-wide">
                Video Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Watch Their Stories Unfold
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the genuine emotions and heartfelt testimonials from our beneficiaries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <VideoEmbed 
                videoId="vmwvU4chJ5A" 
                title="Saptrishi Foundation - Beneficiary Testimonial 1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoEmbed 
                videoId="7nxdTRp7X8w" 
                title="Saptrishi Foundation - Beneficiary Testimonial 2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-orange/90 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Share Your Story With Us
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                Have you benefited from our services? We'd love to hear your experience and share it with our community to inspire others.
              </p>
              <a 
                href="/contact" 
                className="inline-block btn-primary bg-white text-primary-orange hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg px-8 py-4 text-lg font-semibold"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
