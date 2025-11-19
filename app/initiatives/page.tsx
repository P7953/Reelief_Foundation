'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { Users, Heart, Stethoscope, ClipboardList, CloudRain, ShieldCheck, Package } from 'lucide-react'

type SubProgram = {
  title: string
  description: string
  impact?: string
}

type Initiative = {
  icon: LucideIcon
  title: string
  subtitle?: string
  description?: string
  image?: string
  impact?: string
  subPrograms?: SubProgram[]
}

export default function InitiativesPage() {
  const initiatives: Initiative[] = [
    {
      icon: Users,
      title: 'Holistic Divyang Support Program',
      subtitle: 'One stop solution for divyang support',
      description:
        'This program provides support for people living with disabilities to avail the government certificates to access various schemes and resources. This effort is intended to make their lives better and more independent. These initiatives have been taken to address the needs of the people living with disabilities.',
      image: '/images/Holistic-Divyang-Support-Program.png',
      subPrograms: [
        {
          title: 'Disability Certificates And UDID Card',
          description:
            'The assistance is provided for people living with Disabilities to get the disability certificate and UDID Card. To get the better access of government facilities under the one roof, the organization was established a centre at District (Aundh) Hospital, Sangvi, Pune.',
          impact:
            'Till today, more than 1000 people have received disability certificates and UDID Card'
        },
        {
          title: 'Assistance To Get The Aadhar & Pan Card',
          description:
            'People living with disabilities find it difficult to get the Aadhar card as the centers are remotely located. Also the process of obtaining Aadhar card is complex and unknown to the disabled people. Camps and end-to-end support are provided.',
          impact: 'More than 200 people received Aadhar and PAN card'
        },
        {
          title: 'Niramaya Health Insurance Scheme',
          description:
            'Niramaya Health Insurance Scheme provides a health insurance card of ₹1 Lakh for Persons with Disabilities. Saptrishi Foundation assists beneficiaries with enrollment and claim processes.',
          impact: 'More than 3000+ people Niramaya health claims settled by us.'
        }
      ]
    },

    {
      icon: Stethoscope,
      title: 'Health Camp for Special People',
      description:
        'Regular health camps conducted by physiotherapists, neurologists, and orthopedics specialists for people with intellectual disabilities.',
      impact: '1000+ people benefited from health check-up camps.',
      image: '/images/Health Camp for Special People.png'
    },

    {
      icon: ClipboardList,
      title: 'Divyang Document Support Camp',
      description:
        'Document support camps help Divyang individuals with UDID, PAN, disability certification, govt. benefits, and railway concessions.',
      image: '/images/Divyang Document support camp.png'
    },

    {
      icon: Heart,
      title: 'Funeral of Unclaimed Human Dead Bodies',
      description:
        'A unique initiative preserving dignity for unclaimed deceased individuals through documentation support and funeral services.',
      impact: '900+ funerals conducted in Pimpri Chinchwad.'
    },

    {
      icon: ShieldCheck,
      title: 'Blanket Distribution Program',
      description:
        'Distributing blankets to street and destitute people to protect them from severe cold.',
      image: '/images/Blanket Distribution Program.png',
      impact: '2500+ blankets distributed.'
    },

    {
      icon: CloudRain,
      title: 'Watershed Program',
      impact:
        'Continuous Contour Trenches (CCT) of 12,000m increased groundwater levels and made villages tanker-free during summers.',
      subPrograms: [
        {
          title: 'Soil and Water Conservation in Aurangabad',
          description:
            'Survey and construction of Continuous Contour Trenches in drought-prone Khandala village.'
        },
        {
          title: 'Soil & Water Conservation in KVK Campus, Aurangabad',
          description:
            'Desilting and water flow management increased groundwater recharge in the campus wells.'
        }
      ]
    },

    {
      icon: Package,
      title: 'Covid Relief Program',
      description: 'Distributed ration kits to families affected during the pandemic.',
      impact: '2500+ ration kits distributed.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Our Initiatives"
        subtitle="Empowering the differently abled community through integrated solutions"
      />

      {/* INITIATIVES SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Key Initiatives
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Making a real difference in the lives of people with disabilities through
              dedicated programs and support.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8 lg:p-10">
                  {/* HEADER */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center shadow-lg">
                        <initiative.icon className="text-white" size={32} strokeWidth={1.5} />
                      </div>

                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                          {initiative.title}
                        </h2>
                        {initiative.subtitle && (
                          <p className="text-base md:text-lg text-primary-orange font-semibold">
                            {initiative.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {initiative.description && (
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4 pl-0 sm:pl-24">
                        {initiative.description}
                      </p>
                    )}

                    {initiative.impact && !initiative.subPrograms && (
                      <div className="mt-6 pl-0 sm:pl-24 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-primary-orange p-4 md:p-6 rounded-r-2xl shadow-sm">
                        <p className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="text-primary-orange">📊</span> Impact:
                        </p>
                        <p className="text-gray-700 text-base md:text-lg">{initiative.impact}</p>
                      </div>
                    )}
                  </div>

                  {/* IMAGE WHEN NO SUBPROGRAMS */}
                  {initiative.image && !initiative.subPrograms && (
                    <div className="mb-6 md:mb-8 flex justify-center">
                      <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-2xl hover:scale-[1.02] transition-transform duration-300">
                        <div className="relative w-full aspect-square">
                          <Image
                            src={initiative.image}
                            alt={initiative.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBPROGRAMS */}
                  {initiative.subPrograms && (
                    <>
                      <p className="text-gray-800 font-bold text-lg mb-6 pl-0 sm:pl-24 flex items-center gap-2">
                        <span className="text-primary-orange">🎯</span> Key Activities:
                      </p>

                      {initiative.image && (
                        <div className="mb-8 flex justify-center">
                          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-2xl hover:scale-[1.02] transition-transform duration-300">
                            <div className="relative w-full aspect-square">
                              <Image
                                src={initiative.image}
                                alt={initiative.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4 md:space-y-6 pl-0 sm:pl-24">
                        {initiative.subPrograms.map((subProgram, subIndex) => (
                          <motion.div
                            key={subIndex}
                            className="bg-white rounded-2xl p-5 md:p-7 border-l-4 border-primary-orange shadow-md hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                          >
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-3 flex items-start gap-2">
                              <span className="text-primary-orange flex-shrink-0 mt-1">•</span>
                              {subProgram.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4 pl-6">
                              {subProgram.description}
                            </p>

                            {subProgram.impact && (
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg ml-6 shadow-sm">
                                <p className="font-semibold text-sm md:text-base text-gray-800 mb-1 flex items-center gap-2">
                                  <span>✅</span> Impact:
                                </p>
                                <p className="text-gray-700 text-sm md:text-base">
                                  {subProgram.impact}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {initiative.impact && (
                        <div className="mt-6 pl-0 sm:pl-24 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-primary-orange p-4 md:p-6 rounded-r-2xl shadow-sm">
                          <p className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <span className="text-primary-orange">📊</span> Overall Impact:
                          </p>
                          <p className="text-gray-700 text-base md:text-lg">{initiative.impact}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {index < initiatives.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-orange/30 to-transparent mx-6 md:mx-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STORIES — unchanged */}
      {/* DONATION CTA — unchanged */}
    </>
  )
}
