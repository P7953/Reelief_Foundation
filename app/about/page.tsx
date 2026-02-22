'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { Heart, Users, Target, Award, Building2, Calendar, Shield, HandHeart, Home } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We place empathy at the heart of our work, striving to understand and ease the struggles of individuals and communities in need.'
    },
    {
      icon: HandHeart,
      title: 'Integrity',
      description: 'Ensuring that all operations are conducted with transparency, honesty, and resources meant for those in crisis.'
    },
    {
      icon: Target,
      title: 'Dignity',
      description: "We respect every individual's worth and support them in reaching their full potential with confidence and self-respect."
    },
    {
      icon: Award,
      title: 'Sustainability',
      description: 'We create responsible, long-term solutions that improve lives without depleting environmental or community resources.'
    },
    {
      icon: Users,
      title: 'Equality',
      description: 'We promote unity, inclusion, and participation, ensuring equal opportunities and respect for all.'
    }
  ]

  type ProjectExtra = { label: string; items: string[] }

  const galleryImages: {
    src: string
    title: string
    startDate: string
    collaborativeAgency?: string
    fundedBy?: string
    objectives: string
    extra: ProjectExtra
  }[] = [
      {
        src: '/images/about/Health.webp',
        title: 'Targeted Intervention Program for Migrant Workers',
        startDate: 'February 2015',
        collaborativeAgency: 'Maharashtra State AIDS Control Society (MSACS)',
        fundedBy: 'Maharashtra State AIDS Control Society (MSACS)',
        objectives: 'To raise awareness about HIV/AIDS among migrant workers, particularly those in construction, industry, hotels, and daily wage jobs. The program also provides care and treatment for those diagnosed with HIV.',
        extra: {
          label: 'Impact',
          items: [
            'Reached over 1,60,000 migrant workers across Maharashtra',
            '15,000 high-risk individuals registered for ongoing support',
            'Significant reduction in new HIV cases among target groups',
          ],
        },
      },
      {
        src: '/images/about/Food.webp',
        title: 'Targeted Intervention Program for Female Sex Workers (FSW)',
        startDate: 'February 2022',
        collaborativeAgency: 'FHI 360 & NGO Federation of Maharashtra Collaborating with Integrated Counselling and Testing Centres (ICTC), Antiretroviral Therapy Centres (ARTC), and other NGOs for comprehensive support',
        fundedBy: 'USAID via FHI 360',
        objectives: 'To offer prevention and rehabilitation services to female sex workers. The program includes health camps, HIV testing, and community events to promote health and safety',
        extra: {
          label: 'Major Components',
          items: [
            'Behaviour Change Communication (BCC): Educating the community about health practices',
            'Clinical Services: Providing health camps and HIV testing.',
            'Condom Promotion and Distribution: Ensuring access to safe sex products.',
            'Community Mobilization: Organizing events and cultural programs to engage the FSW community.',
            'Enabling Environment: Creating safe spaces for FSW to gather and receive support',
          ],
        },
      },
      {
        src: '/images/about/Migrant.webp',
        title: 'Implementation of the "BALSANGOPAN SCHEME" for Destitute Children',
        startDate: 'September 2024',
        collaborativeAgency: 'District Child & Women’s Department, GOVT of Maharashtra: ',
        fundedBy: 'Government of Maharashtra',
        objectives: 'Keep a close track of the assign child by conducting a regular Socia -eco Survey and keep the close track of their educational progress as well as their Govt Scheme Benefits',
        extra: {
          label: 'Impact',
          items: [
            'The Project assigned us 200 needy children who are the beneficiaries of this Schemm and we keep the progress track of each individual and their families.',
          ],
        },
      },
    ]

  const workAreas = [
    {
      icon: Shield,
      title: 'Health & Hygiene',
      description: 'Improving community health through preventive care, immunization programs, health camps, and awareness initiatives focused on hygiene and critical health issues.'
    },
    {
      icon: Heart,
      title: 'Food Security & Nutrition',
      description: 'Ensuring access to essential food and nutrition for vulnerable families, especially during emergencies and crises, to combat hunger and malnutrition.'
    },
    {
      icon: Home,
      title: 'Education & Awareness',
      description: 'Promoting education, life skills, and community awareness to empower children, youth, and adults, breaking cycles of poverty and vulnerability.'
    },
    {
      icon: Home,
      title: 'Shelter & Livelihood Support',
      description: 'Improving living conditions and enabling self-reliance through shelter assistance, skill development, and employment-oriented initiatives.'
    }
  ]

  const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'

  return (
    <>
      <PageHeader title="About Reelief Foundation" />

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
                <div className="bg-gradient-to-r from-sky-300/20 to-sky-400/20 border-l-4 border-sky-400 p-6 rounded-r-lg mb-4 text-justify">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    Reelief Foundation, established in 2010, is a non-profit organization dedicated to improving the lives of
                    underprivileged and marginalized communities. We work across health, hygiene, food security, shelter, education,
                    and employment to provide timely support, sustainable solutions, and long-term empowerment.
                  </p>
                </div>
                <p className="text-lg text-justify">
                  <span className="font-bold text-sky-300">Reelief Foundation</span> is a registered non-profit
                  organization dedicated to improving the lives of underprivileged and marginalized communities. Established in 2010, the
                  foundation works closely with communities, government bodies, healthcare institutions, and partner organizations to deliver
                  timely support, sustainable solutions, and long-term empowerment at scale.
                </p>
                <p className="font-semibold text-sky-500 text-lg text-justify">
                  We exist to support individuals and communities facing crisis and hardship. By building leadership, personal capacity, and
                  access to essential services, we help people rediscover purpose, dignity, and direction in life. Our goal is to create a
                  transformational community where people can heal, grow, and prosper.
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
                <div className="rounded-2xl p-8 text-center shadow-lg" style={{ background: 'linear-gradient(to right, #38bdf8 0%, #58cbf1 30%, #c0c4f1 55%, #cabcf3 75%, #cabcf3 90%, #adbecf 100%)' }}>
                  <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">2010</div>
                  <p className="text-white font-medium">Year Established</p>
                </div>
                <div className="rounded-2xl p-8 text-center shadow-lg" style={{ background: 'linear-gradient(to right, #cabcf3 0%, #cabcf3 30%, #cabcf3 55%, #c4b5fd 75%, #cacfe1 90%, #adbecf 100%)' }}>
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">5K+</div>
                  <p className="text-white font-medium">Lives Impacted</p>
                </div>
                <div className="rounded-2xl p-8 text-center shadow-lg col-span-2" style={{ background: 'linear-gradient(to right, #38bdf8 0%, #c0c4f1 30%, #cabcf3 55%, #c4b5fd 75%, #cacfe1 90%, #adbecf 100%)' }}>
                  <Building2 className="w-12 h-12 text-white mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Registered Non-Profit Organisation</p>
                  <p className="text-white text-sm">Under Societies Registration &amp; Bombay Public Trust Act</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs addressing critical health, social, and economic challenges faced by marginalized communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white rounded-2xl p-6 border-t-4 border-sky-400 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md"
                  style={{ background: GRADIENT }}
                >
                  <area.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                <p className="text-gray-500 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundation runs several key projects aimed at specific communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image */}
                <div
                  className="relative h-52 w-full flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">

                  {/* Title + Start Date */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="text-base font-bold text-gray-800 leading-snug">{image.title}</h3>
                    <span
                      className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                      style={{ background: GRADIENT }}
                    >
                      Since {image.startDate}
                    </span>
                  </div>

                  {/* Collaborative Agency */}
                  {image.collaborativeAgency && (
                    <div className="mb-2">
                      <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">Collaborative Agency: </span>
                      <span className="text-xs text-gray-600">{image.collaborativeAgency}</span>
                    </div>
                  )}

                  {/* Funded By */}
                  {image.fundedBy && (
                    <div className="mb-4">
                      <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">Funded By: </span>
                      <span className="text-xs text-gray-600">{image.fundedBy}</span>
                    </div>
                  )}

                  {/* Objectives */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-1">Objectives</p>
                    <p className="text-xs text-gray-600 leading-relaxed text-justify">{image.objectives}</p>
                  </div>

                  {/* Impact / Major Components */}
                  <div>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-2">{image.extra.label}</p>
                    <ul className="space-y-1.5">
                      {image.extra.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span
                            className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ background: GRADIENT, fontSize: '9px' }}
                          >
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all group w-full sm:w-72 lg:w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: GRADIENT }}
                >
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-red-50 text-gray-700 hover:text-red-500 rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            {/* Full Image */}
            <div className="relative w-full bg-gray-900" style={{ height: '60vh' }}>
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {galleryImages[selectedImage].title}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap text-white"
                  style={{ background: GRADIENT }}
                >
                  📅 Since {galleryImages[selectedImage].startDate}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-2">Project Objectives</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {galleryImages[selectedImage].objectives}
                </p>
              </div>

              <div className="flex gap-4 justify-center border-t border-gray-100 pt-4">
                <button
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                  className="px-6 py-2.5 bg-sky-50 border border-sky-200 text-sky-700 rounded-lg font-semibold hover:bg-sky-100 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                  className="px-6 py-2.5 bg-sky-50 border border-sky-200 text-sky-700 rounded-lg font-semibold hover:bg-sky-100 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
