'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import { Eye, Target, Lightbulb, Users2, Heart, Zap } from 'lucide-react'

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader 
        title="Vision & Mission" 
        subtitle="Guiding principles that drive our commitment to the differently abled community"
      />

      {/* Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-2xl flex items-center justify-center">
                  <Eye className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Vision
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  To create an inclusive society where every differently abled person has equal access to 
                  opportunities, resources, and support systems that enable them to live with dignity and independence.
                </p>
                <p>
                  We envision a future where physical, social, and economic barriers are eliminated, and 
                  the differently abled community is fully integrated into all aspects of society.
                </p>
                <p className="font-semibold text-primary-orange">
                  A world where abilities are celebrated, and limitations are overcome through collective support.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-accent-blue to-accent-purple rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="mb-4">
                    <Image 
                      src="/images/Vision.png" 
                      alt="Vision" 
                      width={90} 
                      height={90} 
                      className="mx-auto rounded-full object-cover"
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    Vision for Tomorrow
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-accent-green to-accent-blue rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="mb-4">
                    <Image 
                      src="/images/Mission.png" 
                      alt="Vision" 
                      width={90} 
                      height={90} 
                      className="mx-auto rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Mission in Action
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-accent-blue rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  To provide an integrated, one-stop platform that connects differently abled individuals 
                  with essential services, government schemes, educational resources, and support networks.
                </p>
                <p>
                  We are committed to:
                </p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange text-xl">•</span>
                    <span>Bridging the gap between beneficiaries and service providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange text-xl">•</span>
                    <span>Simplifying access to government schemes and benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange text-xl">•</span>
                    <span>Building a supportive community ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-orange text-xl">•</span>
                    <span>Empowering through education and resources</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
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
              Our Strategic Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key objectives that define our path forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Leverage technology to create accessible digital and physical solutions for the community.',
                color: 'from-accent-pink to-accent-purple'
              },
              {
                icon: Users2,
                title: 'Community Building',
                description: 'Foster a strong network of stakeholders, volunteers, and beneficiaries working together.',
                color: 'from-accent-blue to-accent-green'
              },
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'Ensure every individual receives personalized attention and support with dignity.',
                color: 'from-primary-yellow to-primary-orange'
              },
              {
                icon: Zap,
                title: 'Rapid Response',
                description: 'Provide quick and efficient solutions to urgent needs and challenges.',
                color: 'from-accent-green to-accent-blue'
              },
              {
                icon: Target,
                title: 'Measurable Impact',
                description: 'Track and demonstrate real, tangible improvements in lives of beneficiaries.',
                color: 'from-accent-purple to-accent-pink'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Maintain complete openness in our operations, funding, and outcomes.',
                color: 'from-primary-orange to-accent-pink'
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-t-4 border-primary-orange"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center`}>
                  <goal.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {goal.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Together, we can create lasting change. Whether you volunteer your time, 
              donate resources, or simply spread awareness, every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="btn-primary bg-white text-primary-orange hover:bg-gray-100">
                Become a Volunteer
              </a>
              <a href="/donate" className="btn-secondary border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                Support Our Cause
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
