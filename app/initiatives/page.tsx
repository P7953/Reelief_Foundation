'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, FileText, Heart, Stethoscope, ClipboardList, CloudRain, GraduationCap, ShieldCheck, ShieldPlus, Droplet, Package } from 'lucide-react'

export default function InitiativesPage() {
  // Projects from "Our Project" page
  const projects = [
    {
      image: '/images/Our-Project-01.png',
      title: 'Call Center'
    },
    {
      image: '/images/Our-Project-02.png',
      title: 'Research & Advocacy'
    },
    {
      image: '/images/Our-Project-03.png',
      title: 'Handholding Support'
    },
    {
      image: '/images/Our-Project-04.png',
      title: 'Counselling Center'
    },
    {
      image: '/images/Our-Project-05.png',
      title: 'Enrollment Camp'
    },
    {
      image: '/images/Our-Project-06.png',
      title: 'Divyang Community'
    },
    {
      image: '/images/Our-Project-07.png',
      title: 'One Stop Solution For Divyang'
    },
    {
      image: '/images/Our-Project-08.png',
      title: 'Strong Support System For Divyang'
    }
  ]

  const initiatives = [
    {
      icon: Users,
      title: 'Holistic Divyang Support Program',
      subtitle: 'One stop solution for divyang support',
      description: 'This program provides support for people living with disabilities to avail the government certificates to access various schemes and resources. This effort is intended to make their lives better and more independent. These initiatives have been taken to address the needs of the people living with disabilities.',
      image: '/images/Holistic-Divyang-Support-Program.jpg',
      subPrograms: [
        {
          title: 'Disability Certificates And UDID Card',
          description: 'The assistance is provided for people living with Disabilities to get the disability certificate and UDID Card. To get the better access of government facilities under the one roof, the organization was established a centre at District (Aundh) Hospital, Sangvi, Pune.',
          impact: 'Till today, more than 1000 people have received disability certificates and UDID Card'
        },
        {
          title: 'Assistance To Get The Aadhar & Pan Card',
          description: 'People living with disabilities find it difficult to get the Aadhar card as the centers are remotely located. Also the process of obtaining Aadhar card is complex and unknown to the disabled people. The organization team provides end-to-end support to get the Aadhar and PAN card for disabled people. Also, the camps are being organized to get the Aadhar and PAN card.',
          impact: 'More than 200 people received Aadhar and PAN card'
        },
        {
          title: 'Niramaya Health Insurance Scheme',
          description: 'Niramaya Health Insurance Scheme provides a Health Insurance card of Rs. 1 Lakh for a Person living with a disability. The disabilities covered under this scheme are Intellectual disabilities, Autism, Cerebral Palsy and Multiple Disabilities as per the national trust act. This amount is reimbursed to the beneficiaries after the treatment. The enrollment of the beneficiaries done with the help of registered organization under National trust act. Saptrishi Foundation provides assistance to the beneficiaries to avail the benefits of the insurance scheme and ensure that no one is left behind to avail the benefits of the scheme. This is a unique model to provide assistance to the beneficiaries and it can be adopted by other organizations and government to implement across India.',
          impact: 'More than 3000+ people Niramaya health claim settled by us.'
        }
      ]
    },
    {
      icon: Stethoscope,
      title: 'Health Camp for Special People',
      description: 'The health camp for people living with intellectual disability is being organized on regular basis. The Physiotherapists, Neurologists, Orthopedics experts conduct the health check-up camps and necessary treatment.',
      impact: 'Till today more than 1000 people benefited from the health check-up camp.',
      image: '/images/Health Camp for Special People.png'
    },
    {
      icon: ClipboardList,
      title: 'Divyang Document Support Camp',
      description: 'Saptrishi Foundation conducts document support camps for the Divyang people on regular basis. Till today around 200 beneficiaries took an active part in the camp and got benefited from the camp. The Divyang got support regarding disability certification/UDID, Pan Card, Government Financial benefits, railway concession benefits for Divyang etc.',
      image: '/images/Divyang Document support camp.png'
    },
    {
      icon: Heart,
      title: 'Funeral of Unclaimed Human Dead Bodies',
      description: 'This is a unique initiative where the organization is protecting the dignity of deceased people and help police officials to do the funeral of unclaimed human dead bodies. The police department informs the organization if they found the unclaimed human dead body in PCMC City. The dead bodies are mostly found on the roadside, in the garden, railway track, near highways, on bridge, near rivers, canals, etc. The organization team completes the documentation and legal process and does the funeral of the dead body. The organization also tries to trace the relatives of the dead bodies and facilitates the process to get the free ambulance.',
      impact: 'Till today, more than 900 funerals of unclaimed human dead bodies are conducted in Pimpri Chinchwad.'
    },
    {
      icon: ShieldCheck,
      title: 'Blanket Distribution Program',
      description: 'According to the Lancet Study report, In India, the number of deaths per year linked with abnormal cold temperatures is 6,55,400. This is another example of working towards fulfilling the mission of the organization, like reaching out to the unreached people. To protect street and destitute people from cold waves, The Foundation distributes the blankets every year. Till now more than 2500+ blankets are distributed. Saptrishi Foundation provided blankets to the children and street people. This helps children and people residing on street to protect themselves from the cold. Blankets are distributed to the needy children and people residing on the street.',
      image: '/images/Blanket Distribution Program.png',
      impact: 'More than 2500 blankets are distributed.'
    },
    {
      icon: CloudRain,
      title: 'Watershed Program',
      impact: 'The constructed Continuous Contour Trenches (CCT) of 12000m in a scientific manner helped to increase groundwater level. Soil and water conversation is increased and now villagers are not dependent on water tankers during the summer season. Villagers are able to cultivate crops during the summer season too therefore agriculture income has increased.',
      subPrograms: [
        {
          title: 'Soil and Water Conservation initiatives in Aurangabad',
          description: 'The technical team of the organization visited the drought-affected Khandala village in Aurangabad district. In this project, our technical team conducted a survey and designed techniques which are suitable to the areas. The best possible solution was to construct Continuous Contour Tranches which helps to conserve rain water and help to increase the water level.'
        },
        {
          title: 'Soil and Water Conservation Activities in KVK Campus, Aurangabad',
          description: 'Due to dependence on the available surface and ground water, in the month of April-May usually KVK Campus was facing the scarce water scenario. Hon\'ble Vice Chancellor, VNMA, University, Parbhani had invited our organization to discuss the measures to address ground water issue. In the KVK campus, Nala of 10m width was desilted and it has increased ground water level of campus well and its overflow was adjusted to downstream side. The activity was planned and executed under the supervision of experts.'
        }
      ]
    },
    {
      icon: Package,
      title: 'Covid Relief Program',
      description: 'Distributed ration kits to more than 2500 families',
      impact: 'Distributed ration kits to more than 2500 families'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Initiatives" 
        subtitle="Empowering the differently abled community through integrated solutions"
      />

      {/* Project Grid Section - From Our Project page */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions and services designed to support the differently abled community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Learn more about our {project.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center px-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-primary-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section - From Our Initiatives page */}
 

      {/* Initiatives Section - From Our Initiatives page */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          {/* Section Header */}
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
              Making a real difference in the lives of people with disabilities through dedicated programs and support
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
                  {/* Initiative Header */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
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

                  {/* Initiative Image - Full width, proper aspect ratio */}
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

                  {/* Sub Programs */}
                  {initiative.subPrograms && (
                    <>
                      {initiative.subPrograms.length > 0 && (
                        <p className="text-gray-800 font-bold text-lg mb-6 pl-0 sm:pl-24 flex items-center gap-2">
                          <span className="text-primary-orange">🎯</span>
                          Key Activities:
                        </p>
                      )}
                      
                      {/* Main Image for programs with subprograms */}
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
                            {'impact' in subProgram && subProgram.impact && (
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-r-lg ml-6 shadow-sm">
                                <p className="font-semibold text-sm md:text-base text-gray-800 mb-1 flex items-center gap-2">
                                  <span>✅</span> Impact:
                                </p>
                                <p className="text-gray-700 text-sm md:text-base">{subProgram.impact}</p>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Impact for programs with subprograms */}
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

                {/* Separator */}
                {index < initiatives.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-primary-orange/30 to-transparent mx-6 md:mx-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section - From Impact page */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Impact Stories from Our Community
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Since last 10 years, we have been working in Pimpri Chinchwad area of Pune and our work has supported thousands of PwDs and families. Since activation of our portal and one-stop solution in October 2023, it has benefited more than thousand families and they have easily obtained benefits of the Government schemes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-orange/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary-orange text-6xl md:text-7xl font-serif leading-none">"</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-orange to-primary-yellow mt-8"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 relative z-10">
                  It is a nice App prepared by Saptrishi Foundation, We get all updates regarding Niramaya Health Insurance Scheme and other services and information in this app. It saves our time and money. Every year since 2016 till 2024, we have received reimbursement of OPD expenses incurred for my Son – Abhijit. With Saptrishi Foundation's assistance, we are able to get some reimbursement for our medicine costs. It makes a big difference. We are really thankful to Saptrishi Foundation.
                </p>
                
                <div className="border-t-2 border-gray-100 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-primary-yellow flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Ranjana Sutar</p>
                    <p className="text-gray-500 text-sm">Beneficiary</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-6 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-yellow/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary-orange text-6xl md:text-7xl font-serif leading-none">"</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-yellow to-primary-orange mt-8"></div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 relative z-10">
                  My son is having 90% Intellectual disability. It is very hard to move from one place to another. Due to this, we have faced many difficulties in work related to Documents such as UDID card. It was possible due to Saptrishi Foundation that YCM Hospital team had come for home visit for UDID related work. Saptrishi Foundation had taken continuous follow up with the Hospital from the visit for physical examination till UDID card was generated and given to us. Also I received medical expenses reimbursement and financial aid from the Government with the help and guidance of Saptrishi Foundation. My Sincere thanks to Manoj sir and his team.
                </p>
                
                <div className="border-t-2 border-gray-100 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-yellow to-primary-orange flex items-center justify-center text-white font-bold text-xl">
                    D
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Dr. Uday Joshi</p>
                    <p className="text-gray-500 text-sm">Parent & Beneficiary</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Donation CTA Section - From Our Project page */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow via-primary-orange to-primary-yellow relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-5xl md:text-6xl">❤️</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4 leading-tight">
              Giving is not just about making a Donation<br className="hidden md:block" /> 
              it's about making difference.
            </h2>
            
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 px-4 font-medium">
              Your Donation will be Exempted Under Income Tax Act<br className="hidden sm:block" /> 
              Provision Section 80G
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="https://rzp.io/l/saptrishifoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-white text-primary-orange rounded-full font-bold text-lg md:text-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 duration-300 w-full sm:w-auto"
              >
                <span className="mr-2">Donate Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <div className="text-white/90 text-sm md:text-base px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                Every contribution makes a difference 🌟
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
