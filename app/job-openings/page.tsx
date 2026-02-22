'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import {
  X, Briefcase, MapPin, Clock, DollarSign, GraduationCap,
  Users, CheckCircle, ArrowRight, Star, BookOpen, Target, IndianRupee
} from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string           // Full-Time, Part-Time, Volunteer
  experience: string     // e.g. "Fresher / 0–1 yr"
  salary: string

  shortDescription: string
  role: string
  responsibilities: string[]
  requirements: string[]
  expectations: string[]
  benefits: string[]
  applyLink?: string
}

const jobs: Job[] = [
  {
    id: 'social-worker',
    title: 'Social Worker / Field Officer',
    department: 'Community Outreach',
    location: 'Bhosari, Pune',
    type: 'Full-Time',
    experience: 'Fresher / 0–2 Years',
    salary: '₹12,000 – ₹18,000 / month',

    shortDescription:
      'Work directly with underserved communities to identify needs, connect individuals with government schemes, and support health & welfare programs.',
    role:
      'As a Social Worker / Field Officer, you will be the frontline representative of Reelif Foundation, engaging with individuals and families in need. You will visit homes, health camps, and community centres to assess needs and deliver holistic support.',
    responsibilities: [
      'Conduct home visits and community assessments',
      'Assist individuals in enrolling for government welfare schemes',
      'Coordinate with partner NGOs, hospitals, and local bodies',
      'Maintain case records and field reports',
      'Organise and support health awareness camps',
      'Act as a liaison between beneficiaries and the foundation',
    ],
    requirements: [
      'Graduate in Social Work (BSW / MSW preferred) or equivalent',
      'Fresher candidates with a passion for social service are welcome',
      'Proficiency in Marathi; Hindi & basic English preferred',
      'Willingness to travel within Pune district',
      'Basic computer / smartphone literacy',
    ],
    expectations: [
      'Empathy, patience and a people-first attitude',
      'Punctuality and reliability in field duties',
      'Ability to work independently and as part of a team',
      'Strong communication and interpersonal skills',
      'Respect for diversity, dignity and inclusion',
    ],
    benefits: [
      'Monthly stipend / salary',
      'Travel allowance for field visits',
      'Training and capacity-building workshops',
      'Certificate of experience from the foundation',
      'Opportunity to grow into senior roles',
    ],
    applyLink: 'mailto:relief.foundationpune@gmail.com',
  },
  {
    id: 'program-coordinator',
    title: 'Program Coordinator',
    department: 'Programs & Operations',
    location: 'Bhosari, Pune',
    type: 'Full-Time',
    experience: '1–3 Years',
    salary: '₹18,000 – ₹25,000 / month',

    shortDescription:
      'Plan, manage and monitor our health, education and welfare programmes. Coordinate with volunteers, donors and partner agencies to ensure smooth delivery of initiatives.',
    role:
      'The Program Coordinator will oversee the planning and execution of Reelif Foundations projects.You will act as the operational backbone, ensuring activities are delivered on time, within budget, and with maximum community impact.',
    responsibilities: [
      'Plan, schedule and monitor programme activities',
      'Coordinate with internal teams, volunteers and external partners',
      'Prepare progress reports and donor updates',
      'Manage programme budgets and resource allocation',
      'Organise events, camps and community workshops',
      'Collect data and document impact stories',
    ],
    requirements: [
      'Graduate / Post-Graduate in Social Work, Management or related field',
      'Minimum 1 year of experience in programme management or NGO sector',
      'Proficient in MS Office (Word, Excel, PowerPoint)',
      'Strong written and verbal communication in Marathi, Hindi and English',
      'Experience with reporting tools and donor communications is a plus',
    ],
    expectations: [
      'Highly organised with strong attention to detail',
      'Proactive problem-solver and self-starter',
      'Ability to manage multiple tasks and meet deadlines',
      'Collaborative spirit with leadership qualities',
      'Commitment to the foundations mission and values',
    ],
    benefits: [
      'Competitive salary as per NGO sector standards',
      'Professional development and training opportunities',
      'Exposure to diverse social impact programmes',
      'Performance-based increments',
      'Supportive and mission-driven work culture',
    ],
    applyLink: 'mailto:relief.foundationpune@gmail.com',
  },
  {
    id: 'content-digital',
    title: 'Content & Digital Media Executive',
    department: 'Communications',
    location: 'Bhosari, Pune / Remote',
    type: 'Part-Time / Remote',
    experience: 'Fresher / 0–2 Years',
    salary: '₹8,000 – ₹15,000 / month',

    shortDescription:
      'Create engaging content for social media, website and campaigns. Help us tell powerful stories to amplify our impact and reach more supporters.',
    role:
      'The Content & Digital Media Executive will manage the online presence of Reelif Foundation. From designing social media posts to writing impact stories and managing campaigns, you will be the voice of the foundation in the digital world.',
    responsibilities: [
      'Plan and create social media content (Instagram, Facebook, YouTube)',
      'Write blogs, newsletters and website copy in Marathi / English',
      'Design creatives using Canva or equivalent tools',
      'Manage posting schedules and community engagement',
      'Support fundraising campaigns with digital materials',
      'Track analytics and prepare monthly performance reports',
    ],
    requirements: [
      'Graduate in Mass Communication, English Literature, or equivalent',
      'Basic design skills (Canva / Adobe Express)',
      'Good writing skills in Marathi and/or English',
      'Familiarity with Instagram, Facebook and WhatsApp Business',
      'Photography or video editing skills are a bonus',
    ],
    expectations: [
      'Creative mindset with a passion for storytelling',
      'Consistent, disciplined and deadline-driven',
      'Understanding of NGO / social sector communication',
      'Eagerness to learn digital marketing fundamentals',
      'Positive and collaborative working style',
    ],
    benefits: [
      'Flexible working hours / remote work options',
      'Portfolio-building experience in the social sector',
      'Mentorship from experienced communications professionals',
      'Certificate of appreciation from the foundation',
      'Opportunity to move into a full-time role',
    ],
    applyLink: 'mailto:relief.foundationpune@gmail.com',
  },
  {
    id: 'volunteer-health',
    title: 'Volunteer – Health Camp Support',
    department: 'Health & Wellness',
    location: 'Pune & Surroundings',
    type: 'Volunteer',
    experience: 'No Experience Required',
    salary: 'Voluntary (Travel Allowance Provided)',

    shortDescription:
      'Support our periodic health camps for underserved individuals. Assist doctors, manage registrations, guide beneficiaries and help us create a smooth camp experience.',
    role:
      'Health Camp Volunteers are the heart of our camps. You will work alongside doctors, social workers and coordinators to ensure every beneficiary receives timely and compassionate care at our free health camps.',
    responsibilities: [
      'Assist with participant registration and queue management',
      'Guide beneficiaries to respective doctors / stations',
      'Help with distribution of medicines and health kits',
      'Support data entry and camp documentation',
      'Assist in camp setup and post-camp clean-up',
      'Maintain a welcoming and respectful environment',
    ],
    requirements: [
      'Any educational background welcome',
      'Basic Marathi / Hindi communication skills',
      'Physically fit for on-field volunteering',
      'Availability on designated camp dates (weekends / holidays)',
      'Medical background (MBBS / Nursing students) is advantageous but not required',
    ],
    expectations: [
      'Genuine desire to serve and give back to the community',
      'Punctuality and responsibility during camp hours',
      'Team player with a helpful and humble attitude',
      'Sensitivity towards differently-abled and elderly participants',
      'Ability to stay calm and efficient in a busy environment',
    ],
    benefits: [
      'Travel allowance for camp attendance',
      'Volunteer experience certificate from the foundation',
      'Skill development in community health outreach',
      'Recognition in foundation communications',
      'Opportunity to join paid roles in future',
    ],
    applyLink: 'mailto:relief.foundationpune@gmail.com',
  },
]

const badgeColors: Record<string, string> = {
  'Full-Time': 'bg-sky-100 text-sky-700',
  'Part-Time / Remote': 'bg-indigo-100 text-indigo-700',
  'Volunteer': 'bg-emerald-100 text-emerald-700',
}

function JobCard({ job, onKnowMore, delay }: { job: Job; onKnowMore: () => void; delay: number }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col border border-sky-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Type Badge */}
        <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badgeColors[job.type] ?? 'bg-sky-100 text-sky-700'}`}>
          {job.type}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-sky-600 transition-colors">
          {job.title}
        </h3>
        <p className="text-sm text-sky-600 font-medium mb-3">{job.department}</p>

        {/* Meta Info */}
      <div className="text-sm text-gray-500 mb-4 space-y-2">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{job.experience}</span>
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee size={14} />
          <span>{job.salary}</span>
        </div>
      </div>


        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {job.shortDescription}
        </p>

        <button
          onClick={onKnowMore}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full text-sm shadow hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 self-start"
        >
          Know More <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  )
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-sky-600" />
      </div>
      <h3 className="text-base font-bold text-gray-800">{title}</h3>
    </div>
  )
}

export default function JobOpeningsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  return (
    <>
      <PageHeader
        title="Job Openings"
        subtitle="Join our team and be the change you wish to see in the world"
      />

      {/* Job Listings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for passionate individuals ready to create real impact. Explore our open positions below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                delay={index * 0.1}
                onKnowMore={() => setSelectedJob(job)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)' }}
      >
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See a Suitable Role?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for dedicated people. Send us your CV and we'll be in touch when a matching opportunity arises.
            </p>
            <a
              href="mailto:relief.foundationpune@gmail.com"
              className="border-2 border-white text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105 active:scale-95 inline-block"
            >
              Send Your CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-sky-950/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Modal Header Banner */}
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 px-8 pt-8 pb-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/10" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Close"
                >
                  <X size={20} className="text-white" />
                </button>

                <div className="relative z-10">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block ${badgeColors[selectedJob.type] ?? 'bg-white/20 text-white'}`}>
                    {selectedJob.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {selectedJob.title}
                  </h2>
                  <p className="text-sky-100 font-medium">{selectedJob.department}</p>

                  {/* Quick Stats Row */}
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/90">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {selectedJob.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {selectedJob.experience}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {selectedJob.type}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-white"><IndianRupee size={14} /> {selectedJob.salary}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="px-6 md:px-8 py-6 space-y-7">

                {/* Role Overview */}
                <div>
                  <SectionHeader icon={Star} title="About the Role" />
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedJob.role}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <SectionHeader icon={Target} title="Key Responsibilities" />
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-sky-500 mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <SectionHeader icon={GraduationCap} title="Requirements & Qualifications" />
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expectations */}
                <div>
                  <SectionHeader icon={Users} title="What We Expect" />
                  <ul className="space-y-2">
                    {selectedJob.expectations.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-sky-400 mt-0.5 flex-shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-5">
                  <SectionHeader icon={BookOpen} title="What We Offer" />
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 bg-sky-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">✓</span>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                {selectedJob.applyLink && (
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between bg-white border-t border-gray-100 pt-5">
                    <p className="text-sm text-gray-500">
                      Interested? Send your CV and a short introduction to us.
                    </p>
                    <a
                      href={selectedJob.applyLink}
                      className="inline-flex items-center gap-2 px-7 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
