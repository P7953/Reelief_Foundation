'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
const initiativeSections = [
  {
    title: 'One Stop solution',
    description:
      'Introduced in October 2024, the One-Stop Solution program is our effort to remove the barriers that families of Persons with Disabilities face every day. With technology-driven support for six crucial services, we bring convenience, dignity, and empowerment together — under one platform.',
    stats: [
      { label: 'Total Registration on platform after 1 Year', value: '1127' },
      { label: 'Document Services Taken through App', value: '314' },
      { label: 'Welfare Schemes application thriugh App', value: '435' },
      { label: 'Claim services taken through App ', value: '416' }
    ],
    images: [
      '/images/Holistic-Divyang-Support-Program.png',
    ]
  },
  {
    title: 'Homeopathy Health Camps for Special childrens',
    description:
      'We conduct homeopathy-only health camps in collaboration with Predictive Homeopathy every three months. These camps offer specialized consultations, symptom assessment, and holistic treatment plans tailored for individuals with intellectual and developmental disabilities. Our goal is to improve overall well-being through gentle, long-term, and effective homeopathic care.',
    stats: [
      { label: 'No.of Camps Conducted till 2025', value: '17' },
      { label: 'No. of peoples benefited', value: '2000+' },
    ],
    images: [
      '/images/Homeopathy.jpeg',
    ]
  },
   
  {
    title: 'Workshops & Awareness Programs for PwD Families',
    description:
      'We conduct regular workshops and awareness sessions for parents and persons with disabilities (PwDs), offering emotional guidance, legal knowledge, and practical strategies. These expert-led programs empower families and strengthen their ability to support special children effectively.',
    stats: [
      { label: 'Workshops Conducted Till 2025', value: '3'},
       { label : 'Beneficiaries Attended the Programs', value: '900+' },
       
    ],
    images: [
      '/images/Media/Guardianshi.JPG',
    ]
  },

  {
    title: 'Sexuality Awareness Workshop for Parents of Differently-Abled Individuals',
    description:
      'An interactive session led by Dr. Sachin Nagarkar to help parents understand the natural emotional and sexual development of differently-abled individuals. The workshop focused on healthy expression, stress management, and supportive parenting through discussion and guided dialogue.',
    stats: [
      { label: 'Program Date', value: '28 September 2025' },
      { label: 'Participants Attended', value: '100+' }
    ],
    images: [
      '/images/Media/Body & Sexual Awareness Camp (2).jpeg',
    ]
  },
  {
    title: 'Divyang Document Support Camps',
    description:
      'Mobile documentation desks simplify UDID, PAN, disability certification, and concessions with translators, sign-language volunteers, and on-site verification.',
    stats: [
      { label: 'Documents processed', value: '800+' },
    ],
    images: [
      '/images/Divyang Document support camp.png',
    ]
  },
  {
    title: 'Special Movie Screening for Children with Disabilities',
    description:
      'A joyful movie event was organized at INOX Elpro City Square on 15 July 2025, where children with disabilities enjoyed a special screening of *Taare Zameen Par*. The program aimed to provide recreation, emotional comfort, and an inclusive social experience for these children.',
    stats: [
      { label: 'Event Date', value: '15 July 2025' },
      { label: 'Children Participated', value: '226' },
      
    ],
    images: [
      '/images/Media/Sitare Zameen PAr (1).jpg',
    ]
  }, 
  
  {
    title: 'Blanket Distribution Program',
    description:
      'Seasonal relief drives distribute thermal blankets, hygiene kits, and medical checkups for people living on the streets during harsh winters.',
    stats: [
      { label: 'Blankets distributed', value: '2.5K+' },
      { label: 'Night shelters served', value: '18' },
      { label: 'Corporate donors', value: '12' },
      { label: 'Medical referrals', value: '430' }
    ],
    images: [
      '/images/Blanket.jpeg',
    ]
  },
  {
    title: 'Watershed & Climate Resilience',
    description:
      'Large-scale soil and water conservation projects restore groundwater, build drought resilience, and ensure drinking water security.',
    stats: [
      { label: 'CCT trenches carved', value: '12K m' },
      { label: 'Villages tanker-free', value: '08' },
      { label: 'Water table rise', value: '+8 ft' },
      { label: 'Farmer families', value: '1.5K' }
    ],
    images: [
      '/images/Watershed.png',
    ]
  },
  {
    title: 'Covid Relief & Recovery',
    description:
      'Rapid response teams delivered ration kits, medical supplies, tele-health consultations, and psychosocial support during the pandemic.',
    stats: [
      { label: 'Ration kits delivered', value: '2.5K+' },
      { label: 'Tele-consults', value: '4.8K' },
      { label: 'Relief volunteers', value: '210' },
      { label: 'Districts covered', value: '07' }
    ],
    images: [
      '/images/about3.jpg',
    ]
  },
  {
    title: 'Funeral of Unclaimed Persons',
    description:
      'Ensuring dignified last rites for unclaimed human remains through documentation support, rituals, and compassionate volunteer involvement.',
    stats: [
      { label: 'Funerals conducted', value: '900+' }, 
    ],
    images: [
      '/images/Dead.jpg',
    ]
  }
]

export default function InitiativesPage() {

  return (
    <>
      <PageHeader
        title="Our Initiatives"
        subtitle="Empowering the differently abled community through integrated solutions"
      />

      {/* Initiative sections */}
      {initiativeSections.map((section, index) => (
        <section
          key={section.title}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom space-y-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {section.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
                  {section.images.map((image, imgIndex) => (
                    <motion.div
                      key={`${section.title}-${image}-${imgIndex}`}
                      className={`relative rounded-2xl overflow-hidden shadow-lg ${
                        imgIndex === 0 ? 'row-span-2' : ''
                      }`}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Image
                        src={image}
                        alt={`${section.title} visual ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

     
    </>
  )
}
