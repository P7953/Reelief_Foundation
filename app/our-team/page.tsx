'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { Mail, Phone, Linkedin, Heart, Award, Users } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  bio: string
  quote: string
  email?: string
  phone?: string
  linkedin?: string
  photo?: string       // path to /public/images/team/…  — leave undefined to show initials avatar
  initials: string
  avatarColor: string  // tailwind gradient class pair
  joinedYear: string
}

const team: TeamMember[] = [
  {
    id: 'founder',
    name: 'Founder / President',
    position: 'Founder & President',
    department: 'Leadership',
    bio: 'The visionary behind Reelief Foundation, leading every initiative with compassion and strategic clarity. Dedicated to transforming lives in underserved communities across Pune.',
    quote: '"Every small act of kindness creates a ripple of change that can reach far beyond what we imagine."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'FP',
    avatarColor: 'from-sky-400 to-sky-600',
    joinedYear: 'Founder',
  },
  {
    id: 'vicepresident',
    name: 'Vice President',
    position: 'Vice President',
    department: 'Leadership',
    bio: 'Supports the president in driving the foundation\'s strategic goals and ensures daily operations align with our mission. Builds key partnerships with government bodies and NGOs.',
    quote: '"Collaboration multiplies impact — no great change happens in isolation."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'VP',
    avatarColor: 'from-indigo-400 to-indigo-600',
    joinedYear: 'Co-Founder',
  },
  {
    id: 'secretary',
    name: 'Secretary',
    position: 'Secretary',
    department: 'Administration',
    bio: 'Manages the organizational backbone — from documentation and compliance to meeting coordination and record-keeping. Ensures the foundation operates transparently and efficiently.',
    quote: '"Good governance is the foundation upon which great missions are built."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'SC',
    avatarColor: 'from-violet-400 to-violet-600',
    joinedYear: '2022',
  },
  {
    id: 'treasurer',
    name: 'Treasurer',
    position: 'Treasurer',
    department: 'Finance',
    bio: 'Oversees all financial activities — budgeting, expenditure tracking, and donor fund management. Ensures accountability and fiscal responsibility across every programme.',
    quote: '"Responsible stewardship of resources is how we honour every donor\'s trust."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'TR',
    avatarColor: 'from-emerald-400 to-emerald-600',
    joinedYear: '2022',
  },
  {
    id: 'programlead',
    name: 'Program Lead',
    position: 'Program Lead',
    department: 'Programs & Operations',
    bio: 'Plans, executes and monitors all field programmes — health camps, welfare drives, and educational initiatives. The operational engine that turns strategy into ground-level impact.',
    quote: '"Real change is built one community visit, one conversation, one family at a time."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'PL',
    avatarColor: 'from-cyan-400 to-cyan-600',
    joinedYear: '2023',
  },
  {
    id: 'outreachcoord',
    name: 'Outreach Coordinator',
    position: 'Community Outreach Coordinator',
    department: 'Community Outreach',
    bio: 'The bridge between Reelief Foundation and the communities it serves. Identifies beneficiaries, connects them with welfare schemes, and ensures no one is left behind.',
    quote: '"When you reach out with an open hand, you change the world one handshake at a time."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'OC',
    avatarColor: 'from-pink-400 to-pink-600',
    joinedYear: '2023',
  },
  {
    id: 'digitalexec',
    name: 'Digital & Communications Executive',
    position: 'Digital & Communications Executive',
    department: 'Communications',
    bio: 'Manages the foundation\'s digital presence across social media, website, and campaigns. Crafts impact stories and creates content that amplifies our mission to a wider audience.',
    quote: '"Every story told is a life acknowledged — and a donor inspired to give."',
    email: 'relief.foundationpune@gmail.com',
    initials: 'DC',
    avatarColor: 'from-amber-400 to-orange-500',
    joinedYear: '2024',
  },
]

const statCards = [
  { icon: Heart, value: '7+', label: 'Dedicated Members' },
  { icon: Award, value: '15+', label: 'Years of Service' },
  { icon: Users, value: '5000+', label: 'Lives Impacted' },
]

function InitialsAvatar({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div
      className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <span className="text-white font-bold text-5xl tracking-wider select-none">
        {initials}
      </span>
    </div>
  )
}

export default function OurTeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the passionate people driving Reelief Foundation"
      />

      {/* Intro Stats Strip */}
      <section className="bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {statCards.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-1 border border-sky-100">
                  <s.icon size={30} className="text-sky-500" />
                </div>
                <p className="text-4xl font-bold text-gray-800">{s.value}</p>
                <p className="text-xl text-black">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Label */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500 font-semibold mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The People Behind the Mission
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              A small but unstoppable team of changemakers, bound together by one purpose — to serve Pune's most vulnerable communities with compassion, dedication, and impact.
            </p>
          </motion.div>

          {/* Team Members — Alternating Layout */}
          <div className="space-y-20 max-w-5xl mx-auto">
            {team.map((member, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={member.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {/* Photo / Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Decorative ring */}
                      <div className={`absolute -inset-3 rounded-full bg-gradient-to-br ${member.avatarColor} opacity-20 blur-sm`} />
                      <div className={`relative w-52 h-52 md:w-60 md:h-60 rounded-full ring-4 ring-white shadow-2xl overflow-hidden`}>
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <InitialsAvatar initials={member.initials} gradient={member.avatarColor} />
                        )}
                      </div>

                      {/* Department Badge */}
                      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r ${member.avatarColor} text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap`}>
                        {member.department}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    {/* Joined year chip */}
                    <span className="inline-block text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-100 px-3 py-1 rounded-full mb-3">
                      {member.joinedYear === 'Founder' || member.joinedYear === 'Co-Founder'
                        ? member.joinedYear
                        : `Member since ${member.joinedYear}`}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className={`font-semibold text-base mb-4 bg-gradient-to-r ${member.avatarColor} bg-clip-text text-transparent`}>
                      {member.position}
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5 max-w-lg mx-auto lg:mx-0">
                      {member.bio}
                    </p>

                    {/* Quote */}
                    <blockquote className={`border-l-4 pl-4 italic text-gray-500 text-sm mb-5 max-w-lg ${isEven ? 'mx-0' : 'ml-auto text-left'} border-sky-300`}>
                      {member.quote}
                    </blockquote>

                    {/* Contact Links */}
                    <div className={`flex items-center gap-3 flex-wrap ${isEven ? 'justify-start' : 'justify-center lg:justify-end'}`}>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-sky-600 transition-colors group"
                        >
                          <Mail size={15} className="group-hover:scale-110 transition-transform" />
                          <span className="hidden sm:inline">{member.email}</span>
                          <span className="sm:hidden">Email</span>
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-sky-600 transition-colors group"
                        >
                          <Phone size={15} className="group-hover:scale-110 transition-transform" />
                          <span>{member.phone}</span>
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-600 transition-colors group"
                        >
                          <Linkedin size={15} className="group-hover:scale-110 transition-transform" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)' }}
      >
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for passionate individuals ready to make a difference. Check out our open positions.
            </p>
            <a
              href="/job-openings"
              className="border-2 border-white text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105 active:scale-95 inline-block"
            >
              View Job Openings
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
