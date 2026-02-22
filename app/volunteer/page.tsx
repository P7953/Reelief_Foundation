'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import { ExternalLink, Users, Heart, HandHeart, Award } from 'lucide-react'

export default function VolunteerPage() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Create Real Impact',
      description: 'Support health, education, and social welfare initiatives that directly improve the lives of underserved individuals and communities.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Join a Community',
      description: 'Connect with like-minded individuals passionate about social service'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Gain Practical Experience',
      description: 'Develop hands-on experience in community outreach,health programs,awareness campaigns,and social development initiatives.'
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: 'Promote Awareness & Inclusion',
      description: 'Help spread awareness on health, hygiene, and social issues while fostering inclusion, dignity, and compassion.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Become a Volunteer"
        subtitle="Join hands with us to create an inclusive society"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be a part of our mission to improve health, dignity, and opportunity for marginalized communities. Every volunteer helps us create meaningful and lasting change.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 ">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="section-padding bg-sky-50">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Register as a Volunteer
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out the form below to join our volunteer community
              </p>

              {/* Open in New Tab Button */}
              <a
                href="https://forms.gle/HJCqsDTsWmYG3JKP7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
              >
                <span>Open Form in New Tab</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Embedded Google Form */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfSxOhc1A-Q5tDNx5MpYPl9T8LGt57c91QRNABKvn7Z22qHtg/viewform"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Volunteer Registration Form"
              >
                Loading…
              </iframe>
            </div>

            {/* Fallback Message */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Having trouble viewing the form?{' '}
                <a
                  href="https://forms.gle/HJCqsDTsWmYG3JKP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline font-semibold"
                >
                  Click here to open it in a new window
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-sky-100 to-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Questions About Volunteering?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Feel free to reach out to us for any queries or more information about volunteer opportunities
            </p>
            <div className="space-y-4 text-left bg-white p-8 rounded-xl shadow-md border border-sky-100">
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:relief.foundationpune@gmail.com" className="text-sky-600 hover:underline">
                  relief.foundationpune@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{' '}
                <span className="text-gray-800">9011311323 / 7987474711</span>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong>{' '}
                Mauli Residency, Shreeram colony, Near Sadguru Clinic, Sadgurunagar, Bhosari , Pune 411039.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
