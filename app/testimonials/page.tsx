'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Quote, Stethoscope, BookOpen } from 'lucide-react'

const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'
const GRADIENT_SOFT = 'linear-gradient(135deg, #f0fbff 0%, #f5f3ff 100%)'

/* ─────────────────────────── DATA ─────────────────────────── */
const testimonials = [
  {
    name: 'A woman with a special child',
    role: 'Parent of Differently Abled Child',
    tag: 'Disability Support',
    content:
      'I came to know about Saptrishi Foundation and I came to know that they help special children. They help for getting the pension, obtaining UDID card and obtaining benefit of Niramaya Health Insurance. Then Saptrishi Foundation helped me a lot. As one of my son is small, I could not often go to offices or take him there with me.',
  },
  {
    name: 'A senior citizen',
    role: 'Person with Disability',
    tag: 'Certificate Assistance',
    content:
      'My certificate has been issued with their cooperation. They also took efforts on my behalf to obtain financial assistance from the Municipal Corporation. Saptrishi Foundation has helped a lot for obtaining disability certificate and I have obtained this certificate with their support.',
  },
]

const feedbackItems = [
  {
    icon: BookOpen,
    category: 'Workshop Feedback',
    title: 'Sexuality Education Workshop',
    body: 'Saptrishi Foundation organizes various health check up camps and workshops for the beneficiaries. During such a workshop related to sexuality of special persons, many parents expressed their thoughts after the workshop. They stated that they had never thought this way that sexuality is there as long as one is alive and that everyone has it. They stated that they had never thought it from this perspective. They expressed their happiness after knowing ways and options to deal with this issue and means of appropriating it. This workshop was conducted by a well known speaker on this subject Dr. Sachin Nagarkar.',
    highlight: 'Conducted by Dr. Sachin Nagarkar — renowned speaker on the subject.',
  },
  {
    icon: Stethoscope,
    category: 'Health Camp Appreciation',
    title: 'Community Health Camps',
    body: 'Parents also thank Saptrishi Foundation after attending health camps. They also share their satisfaction of seamless conduction of check up, guidance by the doctor, provision of medicines and other support.',
    highlight: 'Seamless check‑ups, doctor guidance & free medicines provided.',
  },
]

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Voices of hope, stories of transformation"
      />

      {/* ── Intro Banner ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{ background: GRADIENT_SOFT, border: '1px solid #e0f2fe' }}
          >
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Coloured stripe */}
              <div
                className="md:w-2 flex-shrink-0"
                style={{ background: GRADIENT }}
              />
              <div className="flex flex-col sm:flex-row items-start gap-6 p-8 md:p-10 flex-1">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ background: GRADIENT }}
                >
                  <Heart className="text-white" size={26} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Making a Real Difference
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    While working in this field and helping the PwDs to find a way out of their troubles,
                    <span className="font-semibold text-sky-600"> Saptrishi Foundation</span> has received
                    plenty of feedback in the form of appreciation and confidence expressed by parents and
                    beneficiaries. Here are some representative voices from our community:
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Beneficiary Testimonials ──────────────────────────── */}
      <section className="py-14 md:py-24 bg-gray-50">
        <div className="container-custom max-w-6xl">

          {/* Section heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold uppercase tracking-widest text-sky-600"
              style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)' }}
            >
              <Users size={15} /> Beneficiary Stories
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Real Stories, Real Impact
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-5" style={{ background: GRADIENT }} />
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              Hear directly from those whose lives have been touched by our services.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
              >
                {/* Top gradient bar */}
                <div className="h-1.5 w-full" style={{ background: GRADIENT }} />

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  {/* Large decorative quote */}
                  <div
                    className="absolute top-6 right-7 text-[7rem] leading-none font-serif select-none pointer-events-none opacity-[0.07]"
                    style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* Tag chip */}
                  <span
                    className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-6 text-white"
                    style={{ background: GRADIENT }}
                  >
                    {t.tag}
                  </span>

                  {/* Quote icon */}
                  <Quote className="mb-4 opacity-30" size={32} style={{ color: '#38bdf8' }} />

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed italic text-base md:text-lg flex-1 mb-8">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-gray-100 mb-6" />

                  {/* Author row */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow"
                      style={{ background: GRADIENT }}
                    >
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 leading-tight">{t.name}</p>
                      <p className="text-sm text-sky-500 font-medium mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Feedback ───────────────────────────────── */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container-custom max-w-6xl">

          {/* Section heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold uppercase tracking-widest text-violet-600"
              style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)' }}
            >
              <Award size={15} /> Community Feedback
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Feedback from Workshops &amp; Health Camps
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-5" style={{ background: GRADIENT }} />
            <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
              Words shared by parents and community members after our events.
            </p>
          </motion.div>

          {/* Feedback panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {feedbackItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col"
                  style={{ border: '1px solid #e0f2fe' }}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Coloured header */}
                  <div
                    className="px-8 pt-8 pb-6 flex items-start gap-4"
                    style={{ background: GRADIENT_SOFT }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow"
                      style={{ background: GRADIENT }}
                    >
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="bg-white px-8 py-6 flex flex-col flex-1">
                    <p className="text-gray-600 leading-relaxed text-base mb-6 flex-1">
                      {item.body}
                    </p>

                    {/* Highlight callout */}
                    <div
                      className="flex items-start gap-3 rounded-2xl px-5 py-4"
                      style={{ background: GRADIENT_SOFT, border: '1px solid #bae6fd' }}
                    >
                      <div
                        className="flex-shrink-0 w-1 self-stretch rounded-full"
                        style={{ background: GRADIENT }}
                      />
                      <p className="text-sm text-sky-700 font-medium leading-relaxed italic">
                        {item.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: GRADIENT }}
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
                Share Your Story With Us
              </h2>
              <div className="w-20 h-1 bg-white/40 mx-auto mb-6 rounded-full" />
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Have you benefited from our services? We'd love to hear your experience and share
                it with our community to inspire others.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg"
              >
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
