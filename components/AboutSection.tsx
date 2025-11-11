'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Heart } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Serving the Underprivileged & Last Miles of Society
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed font-medium text-gray-800">
                <span className="text-primary-orange font-bold">Saptrishi Foundation</span> is a registered 
                non-profit organization dedicated to empowering people with disabilities and serving underserved communities.
              </p>
              <p className="leading-relaxed">
                Registered under <span className="font-semibold">Societies Registration Act and Bombay Public Trust Act in 2017</span>, 
                we work collaboratively with civil society, government, philanthropic institutions, and corporates to create impact at scale.
              </p>
              <div className="bg-gradient-to-r from-primary-yellow/10 to-primary-orange/10 border-l-4 border-primary-orange p-5 rounded-r-lg my-6">
                <p className="font-bold text-gray-800 text-lg">
                  Our Mission: Empower People with Disabilities across all aspects of life and support them to live with dignity.
                </p>
              </div>
              <p className="leading-relaxed">
                We provide comprehensive support across multiple areas including inclusion & rehabilitation of people with disabilities, 
                health & education, street children support, women empowerment, watershed development, and dignified last rites 
                for unclaimed deceased.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-orange mb-1">50K+</div>
                <div className="text-sm text-gray-600">Beneficiaries</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-orange mb-1">100+</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-primary-orange mb-1">500+</div>
                <div className="text-sm text-gray-600">Volunteers</div>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Interactive Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Card */}
            <div className="relative aspect-square bg-gradient-to-br from-primary-yellow via-primary-orange to-orange-600 rounded-3xl shadow-2xl overflow-hidden">
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <motion.div 
                    className="text-7xl mb-6"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🤝
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">
                    Empowering Lives
                  </h3>
                  <p className="text-lg text-white/90 mb-6">
                    Building an inclusive future together
                  </p>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="text-white" size={24} />
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="text-white" size={24} />
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent-pink rounded-full opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-blue rounded-full opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            {/* Stat Cards */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange">2017</div>
                <div className="text-xs text-gray-600">Established</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
