'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Heart, Users, Target, Award, Building2, Calendar, Shield, HandHeart, Droplets, GraduationCap, Home } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: '/images/about1.jpg',
      alt: 'Saptrishi Foundation community service center with wheelchair assistance',
      title: 'Community Service Center'
    },
    {
      src: '/images/about2.jpg',
      alt: 'Dignified last rites ceremony organized by Saptrishi Foundation',
      title: 'Dignified Last Rites Service'
    },
    {
      src: '/images/about3.jpg',
      alt: 'COVID-19 relief distribution by Saptrishi Foundation volunteers',
      title: 'COVID-19 Relief Distribution'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Treating every individual with dignity, respect, and care in all our services.'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Creating environments where everyone feels welcomed, valued, and empowered.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to providing the highest quality services and support to our beneficiaries.'
    },
    {
      icon: Award,
      title: 'Empowerment',
      description: 'Enabling individuals to achieve their full potential and live dignified lives.'
    }
  ]

  const workAreas = [
    {
      icon: Shield,
      title: 'Inclusion & Rehabilitation of People with Disabilities',
      description: 'Comprehensive support for differently-abled individuals across all aspects of life'
    },
    {
      icon: Heart,
      title: 'Health & Education',
      description: 'Promoting accessible healthcare and educational opportunities for all'
    },
    {
      icon: Users,
      title: 'Street Children Support',
      description: 'Providing care, education, and rehabilitation for street children'
    },
    {
      icon: HandHeart,
      title: 'Women Empowerment',
      description: 'Empowering women through skill development and livelihood programs'
    },
    {
      icon: Droplets,
      title: 'Watershed Development',
      description: 'Sustainable water management and agricultural development initiatives'
    },
    {
      icon: Home,
      title: 'Dignified Last Rites',
      description: 'Performing dignified rituals for unknown or unclaimed human dead bodies'
    }
  ]

  return (
    <>
      <PageHeader 
        title="About Saptrishi Foundation" 
        subtitle="Serving the underprivileged sections and last miles of society since 2017"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <span className="font-bold text-primary-orange">Saptrishi Foundation</span> is a registered, 
                  non-profit organization set up to serve the underprivileged sections and last miles of the society.
                </p>
                <p>
                  We strive to work with <span className="font-semibold">civil society, government, philanthropic 
                  institutions, and corporates</span> to create an impact at a large scale.
                </p>
                <p>
                  Registered under <span className="font-semibold">Societies Registration Act and Bombay Public 
                  Trust Act in 2017</span>, we work towards the inclusion and rehabilitation of people living 
                  with disabilities, health and education, street children, women empowerment, and watershed development.
                </p>
                <div className="bg-gradient-to-r from-primary-yellow/20 to-primary-orange/20 border-l-4 border-primary-orange p-6 rounded-r-lg">
                  <p className="font-bold text-gray-800 text-lg">
                    Saptrishi Foundation was born from a life-changing experience of rehabilitating an orphan child with Intellectual Disability. 
                    Navigating endless paperwork, government offices, and formalities revealed a critical gap a lack of a unified support system 
                    for Persons with Disabilities (PwDs). Drawing from expertise in both social work and the insurance sector, we set out to create 
                    solutions that simplify and support the lives of PwDs.

                  </p>
                </div>
                <p>
                  The COVID-19 pandemic underscored the urgency of our mission. We envisioned a<span className="font-semibold"> digital platform </span>ensuring uninterrupted access to 
                  disability-related services just a click away. This led to the creation of a mobile application offering hand-holding support for 
                  <span className="font-semibold ">AADHAR enrollment, UDID cards, and government schemes, alongside organizing free treatment camps</span> and delivering services to the 
                  grassroots.

                  Today, we remain committed to accessibility, inclusion, and empowerment—ensuring no one is left behind.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl p-8 text-center shadow-lg">
                  <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">2017</div>
                  <p className="text-white font-medium">Year Established</p>
                </div>
                <div className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl p-8 text-center shadow-lg">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">50K+</div>
                  <p className="text-white font-medium">Lives Impacted</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-center shadow-lg col-span-2">
                  <Building2 className="w-12 h-12 text-white mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Registered Non-Profit</p>
                  <p className="text-white text-sm">Under Societies Registration & Bombay Public Trust Act</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Witness the impact we're making in communities across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas Section */}
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
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs addressing multiple dimensions of social welfare and community development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <area.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
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
              Comprehensive Services We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An integrated one-stop solution for people with disabilities and underserved communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Government Schemes Support',
                description: 'Assistance to avail all government schemes (Central, State and Local)'
              },
              {
                title: 'Document Assistance',
                description: 'Help with obtaining essential documents like UDID cards, disability certificates'
              },
              {
                title: 'Divyang Camps',
                description: 'Organization of camps and gatherings for the differently-abled community'
              },
              {
                title: 'Insurance Support',
                description: 'Guidance and coverage for health and disability insurance programs'
              },
              {
                title: 'Resource Centre',
                description: 'Comprehensive educational materials and support resources'
              },
              {
                title: 'Information Hub',
                description: 'Centralized information center for all disability-related services'
              },
              {
                title: 'Digital Platform',
                description: 'Mobile and web application for seamless access to services'
              },
              {
                title: 'Volunteer Network',
                description: 'Coordination and management of dedicated volunteers'
              },
              {
                title: 'Strategic Partnerships',
                description: 'Collaborations with NGOs, corporates, and government agencies'
              },
              {
                title: 'Healthcare Access',
                description: 'Facilitating medical care and rehabilitation services'
              },
              {
                title: 'Educational Programs',
                description: 'Promoting inclusive education and skill development opportunities'
              },
              {
                title: 'Dignified Last Rites',
                description: 'Respectful funeral services for unclaimed deceased individuals'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-primary-orange hover:shadow-lg transition-all group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-yellow to-primary-orange flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-primary-yellow transition-colors"
            >
              ×
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-lg text-gray-300">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-primary-yellow transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                className="px-6 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-primary-yellow transition-colors"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
