'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen } from 'lucide-react'

export default function DownloadsPage() {
  const resources = [
    {
      category: 'Mobile Apps',
      icon: Download,
      items: [
        {
          name: 'Saptrishi Foundation App',
          size: '9 MB',
          href: '/Saptishi%20Foundation.apk',
          type: 'app'
        }
      ]
    },
    {
      category: 'Information Brochures',
      icon: BookOpen,
      items: [
        { name: 'Foundation Profile', size: '19 MB', href: '/Profile.pdf', type: 'pdf' },
        { name: 'Services Guide', size: 'Coming Soon', href: '#', type: 'pdf' }
      ]
    },
    {
      category: 'Reports & Documents',
      icon: FileText,
      items: [
        { name: 'Annual Report 2024-26', size: '2 MB', href: '/Annual.pdf', type: 'pdf' },
        { name: '80G Certificate Sample', size: '150 KB', href: '/80G.pdf', type: 'pdf' }
      ]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Downloads" 
        subtitle="Access resources, forms, and documents"
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
              Resource Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our mobile app, forms, brochures, and other useful resources
            </p>
          </motion.div>

          <div className="space-y-12">
            {resources.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl flex items-center justify-center">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 hover:shadow-xl transition-all group border border-gray-100"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-orange/20 transition-colors">
                          <FileText className="text-primary-orange" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1 group-hover:text-primary-orange transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            {item.type === 'pdf' && <span>📄</span>}
                            {item.type === 'app' && <span>📱</span>}
                            <span>{item.size}</span>
                          </p>
                        </div>
                      </div>

                      {/* Download Button / Coming Soon */}
                      {item.href !== '#' ? (
                        <a
                          href={item.href}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-orange text-white rounded-full font-semibold hover:bg-orange-600 transition-all w-full justify-center"
                        >
                          <Download size={18} />
                          Download
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-full font-semibold w-full justify-center cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-gradient-to-br from-primary-yellow to-primary-orange rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Specific Resource?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Can't find what you're looking for? Contact us and we'll help you get the information you need.
            </p>
            <a 
              href="/contact" 
              className="btn-primary bg-white text-primary-orange hover:bg-gray-100"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
