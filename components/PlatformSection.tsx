'use client'

import { motion } from 'framer-motion'
import { LogIn, UserPlus, Smartphone } from 'lucide-react'

export default function PlatformSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">

        {/* ⭐ Added Text Section */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Saptrishi Foundation built an application (Mobile and Web) for the differently abled community in India.
            This concept is approved and registered with the Government of India.
          </p>
        </motion.div>
        {/* ⭐ End Added Section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          
          {/* Login Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-b-4 border-primary-orange"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4">
                <LogIn className="text-primary-orange" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Login</h3>
              <p className="text-gray-600 mb-6">
                Access your account to view benefits and services
              </p>
              <a
                href="https://portal.saptrishifoundation.in/signIn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Login Now
              </a>
            </div>
          </motion.div>

          {/* Register Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-b-4 border-primary-yellow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-yellow/20 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="text-primary-orange" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Register Now</h3>
              <p className="text-gray-600 mb-6">
                Create an account to get started with our services
              </p>
              <a
                href="https://portal.saptrishifoundation.in/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Register Now
              </a>
            </div>
          </motion.div>

          {/* Download App Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-b-4 border-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="text-gray-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Download App</h3>
              <p className="text-gray-600 mb-6">
                Download our mobile application for quick access to all services.
              </p>

              {/* APK Download Button */}
              <a
                href="/Saptishi%20Foundation.apk"
                download
                
                className="btn-secondary w-full text-center"
              >
                Download APK
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
