'use client'

import React from 'react'
import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Heart, Home, BookOpen, Stethoscope, Baby, Users } from 'lucide-react'

/* ─────────────────── CONSTANTS ─────────────────── */
const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'
const GRADIENT_SOFT = 'linear-gradient(135deg, #f0fbff 0%, #f5f3ff 100%)'

type Status = 'Active' | 'Ongoing'

const STATUS_STYLES: Record<Status, string> = {
  Active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  Ongoing: 'bg-sky-50    text-sky-700    border border-sky-200',
}

/* ─────────────────── DATA ───────────────────────── */
const initiatives = [
  {
    title: 'Targeted Intervention Program for Migrant Workers',
    icon: Stethoscope,
    status: 'Ongoing' as Status,
    since: 'February 2015',
    image: '/images/about/Health.webp',
    description:
      'A structured outreach program aimed at migrant worker populations in construction, industry, hotels, and daily wage jobs across Maharashtra — raising awareness about HIV/AIDS and providing care to those diagnosed.',
    impactItems: [
      'Reached over 1,60,000 migrant workers across Maharashtra',
      '15,000 high-risk individuals registered for ongoing support',
      'Significant reduction in new HIV cases among target groups',
    ],
  },
  {
    title: 'Targeted Intervention Program for Female Sex Workers (FSW)',
    icon: Heart,
    status: 'Active' as Status,
    since: 'February 2022',
    image: '/images/about/Food.webp',
    description:
      'A comprehensive prevention and rehabilitation initiative integrating health camps, HIV testing, behaviour change communication, and community mobilisation to promote health, safety, and dignity for female sex workers.',
    impactItems: [
      'Behaviour Change Communication educating the community on health practices',
      'Clinical services — health camps and HIV testing delivered at community level',
      'Condom promotion, community mobilisation, and enabling safe gathering spaces',
    ],
  },
  {
    title: 'Balsangopan Scheme for Destitute Children',
    icon: Baby,
    status: 'Active' as Status,
    since: 'September 2024',
    image: '/images/about/Migrant.webp',
    description:
      'A government-supported welfare program that conducts regular socio-economic surveys and tracks the educational progress and scheme benefits of 200 destitute children assigned to the foundation.',
    impactItems: [
      '200 children and their families actively monitored for progress',
      'Regular tracking of educational milestones and government scheme benefits',
    ],
  },
  {
    title: 'Health & Hygiene',
    icon: Shield,
    status: 'Ongoing' as Status,
    since: '2010',
    image: '/images/about/HIV.webp',
    description:
      'Improving community health through preventive care, immunisation programs, health camps, and awareness initiatives focused on hygiene and critical health issues such as HIV/AIDS and maternal health.',
    impactItems: [
      'Regular health camps with medical check-ups and diagnostics',
      'HIV/AIDS awareness and testing drives for vulnerable populations',
      'Immunisation and maternal health support across communities',
    ],
  },
  {
    title: 'Food Security & Nutrition',
    icon: Heart,
    status: 'Ongoing' as Status,
    since: '2010',
    image: '/images/about/Food.webp',
    description:
      'Ensuring access to essential food and nutrition for vulnerable families, especially during emergencies. The foundation distributes ration kits and provides nutritional support to prevent hunger and malnutrition.',
    impactItems: [
      'Emergency ration kit distribution during floods, pandemic, and crises',
      'Nutrition awareness programs for mothers and children',
      'Support to homeless individuals and night shelter residents',
    ],
  },
  {
    title: 'Education & Awareness',
    icon: BookOpen,
    status: 'Ongoing' as Status,
    since: '2010',
    image: '/images/about/Education.webp',
    description:
      'Promoting education, life skills, and community awareness to empower children, youth, and adults — breaking cycles of poverty through school support, adult literacy, and rights awareness programs.',
    impactItems: [
      'Life skills, leadership, and legal awareness workshops for youth',
      'Disability rights and entitlement awareness campaigns',
      'Educational tracking for children under welfare schemes',
    ],
  },
  {
    title: 'Shelter & Livelihood Support',
    icon: Home,
    status: 'Ongoing' as Status,
    since: '2010',
    image: '/images/about/Migrant.webp',
    description:
      'Improving living conditions and enabling self-reliance through shelter assistance, skill development, and employment-oriented initiatives for homeless individuals, migrant workers, and marginalised families.',
    impactItems: [
      'Support to night shelters and homeless individuals with essentials',
      'Linkage to government housing and livelihood schemes',
      'Documentation support enabling access to welfare entitlements',
    ],
  },
]

/* ─────────────────── PAGE ───────────────────────── */
export default function InitiativesPage() {
  return (
    <>
      <PageHeader
        title="Our Initiatives"
        subtitle="Empowering communities through integrated, compassionate action"
      />

      {/* ── Summary Stats ─────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: '7', label: 'Active Initiatives' },
              { value: '1,60,000+', label: 'Beneficiaries Reached' },
              { value: '200+', label: 'Children Tracked' },
              { value: '15+ Yrs', label: 'Of Dedicated Service' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                style={{ background: GRADIENT_SOFT }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {s.value}
                </div>
                <p className="text-xs md:text-sm text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section Heading ───────────────────────────── */}
      <section className="pt-16 md:pt-20 pb-2 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold uppercase tracking-widest text-sky-600"
              style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)' }}
            >
              <Users size={14} /> What We Do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Initiatives Making an Impact
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-5" style={{ background: GRADIENT }} />
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              From flagships programs to core focus areas — every initiative is driven by a commitment to
              dignity, inclusion, and lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Initiative Cards ──────────────────────────── */}
      {initiatives.map((item, index) => {
        const isEven = index % 2 === 0
        const Icon = item.icon

        return (
          <section
            key={item.title}
            className={`py-14 md:py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom max-w-6xl">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven
                    ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                    : ''
                  }`}
              >
                {/* ── Text ─────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  className="flex flex-col gap-6"
                >
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow"
                      style={{ background: GRADIENT }}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${STATUS_STYLES[item.status]}`}
                    >
                      ● {item.status}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">Since {item.since}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-3">
                      {item.title}
                    </h3>
                    <div className="w-14 h-1 rounded-full" style={{ background: GRADIENT }} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>

                  {/* Impact */}
                  <div
                    className="rounded-2xl p-5 border border-sky-100"
                    style={{ background: GRADIENT_SOFT }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-3">
                      Impact
                    </p>
                    <ul className="space-y-2">
                      {item.impactItems.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <span
                            className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                            style={{ background: GRADIENT }}
                          >
                            {i + 1}
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* ── Image ────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 36 : -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                  className="relative"
                >
                  {/* Glow blob */}
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                    style={{ background: GRADIENT }}
                  />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Dark scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow"
                          style={{ background: GRADIENT }}
                        >
                          <Icon className="text-white" size={15} />
                        </div>
                        <p className="text-white font-semibold text-sm drop-shadow-lg leading-snug">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        )
      })}

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: GRADIENT }}
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-14 shadow-2xl border border-white/30">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Join Us in Making a Difference
              </h2>
              <div className="w-20 h-1 bg-white/40 mx-auto mb-6 rounded-full" />
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Every initiative grows stronger with your support. Volunteer, donate, or partner
                with us to extend our reach across Maharashtra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                >
                  Become a Volunteer
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white border-2 border-white/60 rounded-full font-semibold hover:bg-white/25 transition-all text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
