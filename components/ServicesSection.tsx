'use client'

import { motion } from 'framer-motion'
import { Shield, BookOpen, Info, FileText, Users, Building2 } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Welfare Schemes',
    description: 'Easy access to information on Central, State, and Local Government welfare schemes, along with guidance to help Persons with Disabilities (PWDs) understand and avail the benefits they are eligible for.',
  },
  {
    icon: FileText,
    title: 'Document Support',
    description: 'Guidance and assistance for obtaining essential documents such as disability certificates, UDID cards, travel concessions, and other important paperwork for Persons with Disabilities (PWDs).',
  },
  {
    icon: Users,
    title: 'Divyang Camps',
    description: 'A dedicated platform where users can discover various camps happening in their area—covering health check-ups, government documentation, employment support, social services, and other initiatives for Persons with Disabilities (PWDs).',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Guidance for securing suitable insurance coverage, along with assistance for documentation, claims, and support services tailored for Persons with Disabilities (PWDs)',
  },
  {
    icon: BookOpen,
    title: 'Resource Centre',
    description: 'Find essential resources for Persons with Disabilities (PWDs)—including wheelchair suppliers, therapy services, medical professionals, assistive devices, and skill-development support—all in one accessible place.',
  },
  {
    icon: Info,
    title: 'Information Centre',
    description: 'Your one-stop hub for essential information, government schemes, PWD-related GRs, and support services—keeping you informed and empowered in one place.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive support and services under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="icon-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.2,
                type: 'tween',
                ease: 'easeInOut'
              }}
            >
              <div className="icon-box-icon">
                <service.icon size={40} className="text-primary-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
