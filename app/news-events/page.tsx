'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import NewsCard from '@/components/NewsCard'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Newspaper, Image as ImageIcon, Users } from 'lucide-react'

/* ─────────────────────── CONSTANTS ─────────────────────── */
const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'
const GRADIENT_SOFT = 'linear-gradient(135deg, #f0fbff 0%, #f5f3ff 100%)'

/* ─────────────────────── TYPES ─────────────────────────── */
interface NewsItem {
  title: string
  excerpt: string
  date: string
  slug: string
  content: string
  imageUrl?: string
  newsLink?: string
}

interface NewsCutout {
  title: string
  date: string
  image: string
}

/* ─────────────────────── DATA ───────────────────────────── */

const upcomingEvents: NewsItem[] = [
  {
    title: 'Free Health Check-Up Camp for Persons with Disabilities',
    excerpt: 'Reelief Foundation is organizing a free health check-up camp in collaboration with local hospitals. Medical consultants, physiotherapists, and specialists will be present.',
    date: 'March 15, 2026',
    slug: 'free-health-camp-march-2026',
    imageUrl: '/images/Media/Health.jpeg',
    content: `Reelief Foundation in collaboration with City General Hospital is organizing a Free Health Check-Up Camp on 15th March 2026 at Divyang Bhavan, Pimpri Chinchwad.

The camp will provide free consultations, diagnostic services, and medicine distribution to differently abled children and adults. Experienced doctors and volunteer therapists will be present to ensure holistic evaluation for every participant.

Parents and caregivers will receive counselling and information about the Foundation's integrated support services and government welfare schemes.

Registrations are now open on a first-come-first-serve basis. For more information or to register, please contact Reelief Foundation.`,
  },
  {
    title: 'Workshop on Legal Rights & Government Schemes for PwD Families',
    excerpt: 'An awareness workshop covering legal rights, UDID registration, Niramaya Health Insurance, and other key government provisions for persons with disabilities and their families.',
    date: 'April 5, 2026',
    slug: 'legal-rights-workshop-april-2026',
    imageUrl: '/images/Media/Awareness.jpeg',
    content: `Reelief Foundation is organizing a Workshop on Legal Rights & Government Schemes for PwD Families on 5th April 2026 at Divyang Bhavan, Pimpri.

This workshop will cover important topics including UDID card registration, Niramaya Health Insurance, legal guardianship, disability pension schemes, and other key government entitlements.

Expert speakers from legal and social work backgrounds will be present. The session will be conducted in Marathi and Hindi.

All parents, caregivers, and individuals with disabilities are welcome to attend. Entry is free of cost.`,
  },
  {
    title: 'Annual Foundation Day Celebration & Award Ceremony',
    excerpt: "Join us for Reelief Foundation's Annual Foundation Day — a celebration of 15+ years of service with cultural programs, felicitation of beneficiaries, and community gathering.",
    date: 'May 12, 2026',
    slug: 'foundation-day-2026',
    content: `Reelief Foundation is pleased to announce its Annual Foundation Day Celebration & Award Ceremony on 12th May 2026 at Auditorium Hall, Pimpri.

The event will celebrate over 15 years of dedicated service to marginalized communities. The program will include cultural performances by specially-abled children, felicitation of outstanding volunteers and beneficiaries, and a community gathering.

Chief Guests from government and social sector will be present. The event is open to all supporters, donors, volunteers, and beneficiaries.

All are warmly invited to participate and celebrate this milestone together.`,
  },
]

const newsItems: NewsItem[] = [
  {
    title: 'Reelief Foundation Launches Integrated Digital Support App for PwD Families',
    excerpt: 'A first-of-its-kind One-Stop Solution mobile application has been launched, giving differently-abled individuals access to all government schemes and services at the tap of a button.',
    date: 'January 2026',
    slug: 'one-stop-app-launch',
    imageUrl: '/images/Media/Health2.jpeg',
    content: `Reelief Foundation has successfully launched its Integrated One-Stop Solution platform, a first-of-its-kind initiative in India.

The mobile application enables differently-abled individuals and their families to access government welfare schemes, documentation services, and claim facilities from a single digital interface.

The app has received copyright approval from the Government of India and has been registered under the patent act. Within the first year of launch, over 1,100 families have registered on the platform.

The platform has processed 314 document services, 435 welfare scheme applications, and 416 claim services — significantly reducing bureaucratic barriers for PwD families.`,
  },
  {
    title: '17th Free Homeopathy Health Camp Successfully Conducted',
    excerpt: '126 differently-abled children and adults were treated free of cost at the 17th homeopathy health camp organized by Reelief Foundation in collaboration with Predictive Homeopathy.',
    date: 'October 2025',
    slug: '17th-homeopathy-camp',
    imageUrl: '/images/Media/Health.jpeg',
    content: `Reelief Foundation successfully conducted its 17th Free Homeopathy Health Camp on 5th October 2025 at Divyang Bhavan, Pimpri Chinchwad.

126 differently-abled children and adults received free homeopathic consultations and medicines. The camp was organized as a tribute to the inspiring memory of late Dr. Prafulla Vijaykar.

Expert doctors from Predictive Homeopathy, Pune provided comprehensive consultations and personalized treatment plans. Volunteers from partner organizations ensured smooth conduction of the camp.

The Foundation has now conducted 17 such camps since inception, benefiting over 2,000 individuals across Pune district.`,
  },
  {
    title: 'Special Movie Screening "Taare Zameen Par" for 226 Specially-Abled Children',
    excerpt: 'Reelief Foundation organized a special inclusive movie screening for 226 differently-abled children and their families — with many experiencing a cinema hall for the very first time.',
    date: 'July 2025',
    slug: 'movie-screening-taare-zameen-par',
    imageUrl: '/images/Media/Checkup.jpeg',
    content: `Reelief Foundation organized a special movie screening of Taare Zameen Par at INOX Elpro City Square, Chinchwad on 12th July 2025.

226 specially-abled children along with their families attended the event. Many families shared that they had visited a cinema hall for the very first time with their special child — a joyful experience they will remember always.

The event was organized in collaboration with Socio Infinity Group. The screening aimed to provide recreation, emotional comfort, and an inclusive social experience for the children.

Reelief Foundation plans to organize more such inclusive recreation events in the coming months.`,
  },
  {
    title: 'Foundation Marks 15 Years of Conducting Dignified Last Rites for Unclaimed Persons',
    excerpt: 'Reelief Foundation completes 15 years of a unique compassionate service — providing dignified cremation and last rites for unclaimed deceased individuals with no government aid.',
    date: 'July 2025',
    slug: 'fifteen-years-last-rites-service',
    content: `Reelief Foundation has marked a significant milestone — 15 years of conducting dignified last rites for unclaimed deceased persons across Pune.

Since 2010, the Foundation has performed last rites for over 900 individuals — entirely self-funded, without any government grant or subsidy. The work is carried out in coordination with police and hospital authorities.

Founder Secretary Manoji Borse has led this service since its inception, emphasizing that every human being deserves dignity — in life and in death.

The Foundation calls upon volunteers, donors, and organizations to support this noble cause.`,
  },
  {
    title: 'Reelief Foundation Represented at International Purple Fest, Goa 2025',
    excerpt: 'Founder Secretary Manoji Borse represented Reelief Foundation at the International Purple Fest — a global inclusion event — and presented the One-Stop Solution initiative to senior dignitaries.',
    date: 'October 2025',
    slug: 'purple-fest-goa-2025',
    imageUrl: '/images/Media/Health3.jpeg',
    content: `Reelief Foundation was represented at the International Purple Fest Goa 2025, a landmark global event promoting inclusion and accessibility, held from October 9–12, 2025.

Founder Secretary Manoji Borse, accompanied by Baburao Ahire and Haridas Shinde, attended the event. They had the opportunity to interact with senior government dignitaries including Ministers and IAS officers.

Manoji Borse presented the unique One-Stop Solution initiative before the gathering, highlighting its impact on PwD families and its scalability across India.

The event was hosted in collaboration with the Ministry of Social Justice and Empowerment, Government of India, and United Nations India.`,
  },
  {
    title: 'Sexuality Awareness Workshop for Parents of Differently-Abled Persons',
    excerpt: 'Dr. Sachin Nagarkar led a transformative session helping parents understand the emotional and sexual development of differently-abled individuals — reframing perspectives with empathy.',
    date: 'September 2025',
    slug: 'sexuality-awareness-workshop',
    imageUrl: '/images/Media/Health4.jpeg',
    content: `Reelief Foundation organized a Sexuality Awareness Workshop for Parents of Differently-Abled Persons on 28th September 2025 at Divyang Bhavan, Pimpri.

Dr. Sachin Nagarkar, with over 30 years of experience on the subject, guided participants through discussion, dialogue, and brainstorming. He emphasized that sexuality is natural and innate — and that differently-abled individuals experience the same emotions.

Parents expressed that the workshop gave them a new perspective and a sense of relief. Many requested more such sessions in the future.

The event was organized in collaboration with Sobati Divyang Group, Nirvan Divyang Organization, and Abhisar Foundation.`,
  },
]

const newsCutouts: NewsCutout[] = [
  {
    title: "Foundation's One-Stop Solution Featured in Pune Mirror",
    date: 'December 2025',
    image: '/images/cutout-1.jpg',
  },
  {
    title: 'Homeopathy Camp Coverage — Maharashtra Times',
    date: 'October 2025',
    image: '/images/cutout-2.jpg',
  },
]

/* ─────────────────────── HELPERS ────────────────────────── */
function SectionHeading({
  icon: Icon,
  badge,
  title,
  subtitle,
}: {
  icon: React.ElementType
  badge: string
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-sm font-semibold uppercase tracking-widest text-sky-600"
        style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)' }}
      >
        <Icon size={14} /> {badge}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="w-20 h-1 mx-auto rounded-full mb-5" style={{ background: GRADIENT }} />
      <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">{subtitle}</p>
    </motion.div>
  )
}

/* ─────────────────────── PAGE ───────────────────────────── */
export default function NewsEventsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Stay informed about our latest activities, programs, and community achievements"
      />

      {/* ── Upcoming Events ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            icon={Calendar}
            badge="Upcoming Events"
            title="Mark Your Calendar"
            subtitle="Join us at our upcoming programs, workshops, and community events."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <NewsCard
                key={event.slug}
                {...event}
                image={event.imageUrl}
                delay={index * 0.1}
                onReadMore={() => setSelectedNews(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            icon={Newspaper}
            badge="Latest News"
            title="Recent Updates"
            subtitle="News and highlights from Reelief Foundation's ongoing work and achievements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
            {newsItems.map((item, index) => (
              <NewsCard
                key={item.slug}
                {...item}
                image={item.imageUrl}
                delay={index * 0.08}
                onReadMore={() => setSelectedNews(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── News Cutouts ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            icon={ImageIcon}
            badge="Media Coverage"
            title="News Cutouts"
            subtitle="Glimpses of how the media has covered our work and community impact."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {newsCutouts.map((cutout, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient top bar */}
                <div className="h-1.5 w-full" style={{ background: GRADIENT }} />

                {/* News cutout image */}
                <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
                  <img
                    src={cutout.image}
                    alt={cutout.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent && !parent.querySelector('.cutout-placeholder')) {
                        const ph = document.createElement('div')
                        ph.className = 'cutout-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3'
                        ph.style.background = GRADIENT_SOFT
                        ph.innerHTML = `<div style="background:${GRADIENT}" class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'><rect x='3' y='3' width='18' height='18' rx='2'/><circle cx='8.5' cy='8.5' r='1.5'/><polyline points='21 15 16 10 5 21'/></svg></div><p class='text-gray-400 text-xs font-medium text-center px-4'>Image will appear here once uploaded</p>`
                        parent.appendChild(ph)
                      }
                    }}
                  />
                </div>

                {/* Card label */}
                <div className="p-5">
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{ background: GRADIENT_SOFT, color: '#38bdf8' }}
                  >
                    <Calendar size={11} /> {cutout.date}
                  </div>
                  <h3 className="text-base font-bold text-gray-800 leading-snug">
                    {cutout.title}
                  </h3>
                  <div className="h-0.5 w-10 rounded-full mt-3" style={{ background: GRADIENT }} />
                </div>
              </motion.div>
            ))}

            {/* Placeholder card for future cutouts */}
            <motion.div
              className="rounded-3xl border-2 border-dashed border-sky-200 flex items-center justify-center aspect-auto min-h-[300px] p-8"
              style={{ background: GRADIENT_SOFT }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 opacity-40"
                  style={{ background: GRADIENT }}
                >
                  <ImageIcon className="text-white" size={24} />
                </div>
                <p className="text-sky-400 font-semibold text-sm">More cutouts coming soon</p>
                <p className="text-gray-400 text-xs mt-1">Media coverage updated regularly</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── News Detail Modal ────────────────────────────── */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient top bar */}
              <div className="h-1.5 w-full rounded-t-3xl" style={{ background: GRADIENT }} />

              {/* Close button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="sticky top-4 right-4 ml-auto mr-4 mt-4 flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Modal body */}
              <div className="px-6 md:px-10 pb-10 -mt-6">
                {/* Image */}
                {selectedNews.imageUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-md">
                    <img
                      src={selectedNews.imageUrl}
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-video rounded-2xl mb-6 flex items-center justify-center text-white text-6xl shadow-md"
                    style={{ background: GRADIENT }}
                  >
                    📰
                  </div>
                )}

                {/* Date pill */}
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                  style={{ background: GRADIENT_SOFT, color: '#38bdf8' }}
                >
                  <Calendar size={12} /> {selectedNews.date}
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">
                  {selectedNews.title}
                </h2>
                <div className="w-14 h-1 rounded-full mb-6" style={{ background: GRADIENT }} />

                {/* Content */}
                <div className="space-y-4">
                  {selectedNews.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* External link */}
                {selectedNews.newsLink && (
                  <div className="mt-8">
                    <a
                      href={selectedNews.newsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
                      style={{ background: GRADIENT }}
                    >
                      Read Full Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Contact info */}
                <div
                  className="mt-8 p-5 rounded-2xl border border-sky-100"
                  style={{ background: GRADIENT_SOFT }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: GRADIENT }}
                    >
                      <Users className="text-white" size={15} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">Contact Reelief Foundation</h3>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600 ml-10">
                    <p><span className="font-semibold">Address:</span> First floor, Office no. 105, Aspiro Building, Station Road, Pimpri, Pune – 411017</p>
                    <p><span className="font-semibold">Email:</span> <a href="mailto:saptrishifoundationpune@gmail.com" className="text-sky-500 hover:underline">saptrishifoundationpune@gmail.com</a></p>
                    <p><span className="font-semibold">Phone:</span> 9762184554 / 9665363177 / 9172716630</p>
                    <p><span className="font-semibold">Website:</span> <a href="https://saptrishifoundation.in/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">saptrishifoundation.in</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
