'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content:'Project Office 1:Mauli Residency, Shreeram colony, Near Sadguru Clinic, Sadgurunagar, Bhosari , Pune 411039.',
      link: null
    },
    {
      icon: Phone,
      title: 'Office Contact No',
      content: '+91 9011311323',
      link: 'tel:+919011311323'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'relief.foundationpune@gmail.com',
      link: 'mailto:relief.foundationpune@gmail.com'
    }
  ]

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help. Reach out to us for any queries or support"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-200 to-sky-500 rounded-xl flex items-center justify-center">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-xl">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-gray-600 hover:text-sky-500 transition-colors break-words"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Office Hours */}
          <motion.div
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-sky-200/20 to-sky-500/20 rounded-2xl p-8 text-center border-2 border-sky-500/30">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-200 to-sky-500 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Monday - Saturday</p>
                <p className="text-lg">10:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-600 mt-4">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Connect With Us
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Follow us on social media to stay updated with our latest news, events, and impact stories.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="text-white" size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="text-white" size={24} />
              </a>
              <a
                href="https://x.com/SaptrishiF1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Twitter/X"
              >
                <Twitter className="text-white" size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="text-white" size={24} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white" size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-0">
        <div className="w-full h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6014581054696!2d73.84884197471052!3d18.63698726560875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c78e5cfa72e9%3A0x2bcc5f8d485b6e98!2sMauli%20Residency!5e0!3m2!1sen!2sin!4v1771510084523!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saptarishi Foundation Office Location"
          ></iframe>
        </div>
      </section>
    </>
  )
}
