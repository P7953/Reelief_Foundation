'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import NewsCard from '@/components/NewsCard'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface NewsItem {
  title: string
  excerpt: string
  date: string
  slug: string
  content: string
}

export default function NewsEventsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const news: NewsItem[] = [
    {
      title: 'Saptrishi Foundation participated in International Purple Festival, Goa',
      excerpt: 'Founder Secretary Manoji Borse represented Saptrishi Foundation at the International Purple Fest Goa 2025, a landmark global event promoting inclusion and accessibility.',
      date: 'October 9-12, 2025',
      slug: 'international-purple-festival-goa-2025',
      content: `The International Purple Fest Goa 2025 is a landmark global event promoting inclusion and accessibility. Scheduled from October 9th to 12th, 2025, it is hosted by the Department for Empowerment of Persons with Disabilities and the Office of the State Commissioner for Persons with Disabilities, Government of Goa, in collaboration with the Ministry of Social Justice and Empowerment, Government of India, and United Nations India. The Fest centers on cultivating Inclusive Thinking as the foundation for Universal Design.

Founder Secretary of Saptrishi Foundation, Manoji Borse participated in this festival with Baburao Ahire and Haridas Shinde and represented Saptrishi Foundation. They also got opportunity to interact with senior dignitaries and senior Government officials. He mainly interacted with Subhash Phal Dessai, the Minister for Social Welfare, Empowerment of Persons with Disabilities, and River Navigation in the Government of Goa, Mr. Omprakash Deshmukh, Managing Director of PCMC Divyang Bhavan, Mr. Guruprasad Pawaskar, Commissioner, Disability Department, State Government of Goa, the Secretary Taha Haziq, Mr. Vineet Singhal, Director of UDID Project, Government of India and others.

Mr. Manojji presented his work and shared the concept of the one-stop solution project of Saptrishi Foundation. He highlighted its uniqueness and how it can positively impact the differently abled people. He thanked all dignitaries and the Government for their support.`
    },
    {
      title: 'Participation at World Cerebral Palsy Day Celebration in Sancheti Hospital',
      excerpt: 'Founder Secretary Manoji Borse participated at the World Cerebral Palsy Day celebration event on 6th October at Sancheti Hospital with CP warriors, their families and team of experts.',
      date: 'October 6, 2025',
      slug: 'world-cerebral-palsy-day-sancheti-hospital',
      content: `Founder Secretary of Saptrishi Foundation, Manoji Borse participated at the World Cerebral Palsy Day celebration event taken place in Sancheti Hospital on 6th October. This day was celebrated at Sancheti Hospital with CP warriors, their families and team of experts working in this field. This year's theme was #UniqueandUnited.

Mrs. Sangita Davkhar, Asst. Commissioner (Disability), Pune was the chief guest. This event was attended by the Chairman Dr. Parag Sancheti and other doctors.

In this event, Shri. Manoji Borse represented vision of Saptrishi Foundation before the audience. He shared vision behind the "one stop solution" for the differently abled persons and highlighted its importance. It is the first of its kind of initiative in all India. With this app, the differently abled persons will access all Government schemes at one click. Other dignitaries appreciated this initiative of Saptrishi Foundation and wished it success.`
    },
    {
      title: 'Conduction of 17th Homeopathy Health camp for Differently abled persons',
      excerpt: '126 differently abled children and adults were treated free of cost at the 17th homeopathy health camp organized by Saptrishi Foundation and Predictive Homeopathy, Pune.',
      date: 'October 5, 2025',
      slug: '17th-homeopathy-health-camp',
      content: `Saptrishi Foundation and Predictive Homeopathy, Pune had conducted 17th homeopathy health camp on 5th October 2025 at Divyang Foundation, Pimpri Chinchwad Municipal Corporation. 126 differently abled children and adults were treated free of cost. This camp was organized as a tribute to inspiring memory of late Dr. Prafulla Vijaykar sir and also as a tribute to Samuel Hahnemann, the founder of homeopathy. For successful conduct of this camp, Director of Predictive Homeopathy Dr. Amrish Vijaykar and Pune branch head Dr. Rajat Malokar took efforts.

This camp was inaugurated by Founder of Ashirvad Group Abhijeetji Kabule in presence of President of Nigadi Lions Club Rashmiji Nair, Shri. Ashok Yewale and his colleagues. Dr. Rajat Malokar of Predictive Homeopathy, Shri. Rahulji Jagtap of Anjanvel Agro Tourism, Founder secretary of Saptrishi Foundation Shri. Manojkumar Borase, administrative head Vrushaliji Borase and others were present.

In this programme, the expert doctors provided guidance for various problems faced by the differently abled persons. Information related to the software developed for the differently abled persons under the "integrated one stop solution" was given in this camp. Under this project, various governmental and private facilities have been made available to the differently abled persons through the mobile app. It has been received approval from Copyright Department of Government of India and it has also been registered under the patent act. Under this project, all benefits of Governmental schemes have been made available to Divyang persons on one click. It has been provided to be a one click source for all stakeholders in this field. It is a unique bridge and it is first of its kind of initiative in India and its implementation has started in Pimpri-Chinchwad, Shri. Manojji Borase stated.

Dr. Rajat Malokar of Predictive Homeopathy, Smt. Deepti Malokar and their team of doctors participated zestfully and served the patients. Three doctors had come from Solapur. Volunteers from Saptrishi Foundation, Divyang Bhavan and Nirvan Divyang Sanstha helped for smooth conduction. Shri. Abhijeet Kabule provided financial assistance. Tarachand Ramnath Seva Trust also helped for this camp. Shri. Manojji Borase thanked all volunteers for their support.`
    },
    {
      title: 'Sexuality awareness workshop for parents of differently abled',
      excerpt: 'Dr. Sachin Nagarkar conducted a comprehensive session on guiding physical and sexual needs of special persons, organized by Saptrishi Foundation in collaboration with partner organizations.',
      date: 'September 28, 2025',
      slug: 'sexuality-awareness-workshop',
      content: `Session conducted by Dr. Sachin Nagarkar and dialogue with the parents

Dr. Sachin Nagarkar with more than 30 years of experience on guiding physical and sexual needs of special persons and sexuality conducted a session for parents of the differently abled persons. This programme was organized on 28th September by Saptrishi Foundation in collaboration with Sobati Divyang Group, Nirvan Divyang organization and Abhisar Foundation and it took place in Divyang Bhavan, Pimpari.

This programme was attended by parents of the special persons, representatives of social organizations and persons working in this field. The programme started with preface by Jyoti Agharkar of Sobati Divyang Group. Dr. Sachin Nagarkar guided the participants through discussion, dialogue and brainstorming. He told that sexuality is natural and innate. He told how humans have evolved from animals and how humans are separate from them due to qualities such as compassion, empathy and sensitivity. Intellectually disabled or differently abled persons also have sexual emotions and sexuality. They are intellectually disabled, but they too have the same emotion. Appropriate expressions and release of this sexuality is necessary. When this does not happen, such children and adults become angry or more upset. It is the stress caused by blocking of natural needs and emotions. We should understand their sexuality and help them to release it appropriately, he added.

Dr. Nagarkar sir shared valuable insights and gave a new perspective on handling these sensitive matters with care and understanding. He suggested ways such as cultivating certain habits in the children since their childhood, training them to express themselves in socially acceptable and appropriate ways, good company of opposite-sex friends and use of sexual toys when appropriate. He emphasized that giving only instructions indicate rejection of that person and instead of this, if we appreciate small things, then we convey acceptance and it helps for further progress.

He also discussed issues such as how to satisfy the sexual needs, should they marry or not, responsibility and complications lying therein. He told that these things are decided on the basis of each case and situation with possible support system and helping hands. Parents responded this lively and light-mood discussion by Dr. Nagarkar with plenty of questions and appreciation.

Although there are constraints and limitations regarding sexuality of the differently abled persons, ways can be found out. Energy of the children and the adults can be channelized to other areas, they can be imparted skills, they can be encouraged to mingle with the people and have friendships and they can also be made self reliant, added Jyoti Agharkar of Sobati Divyang Group. Secretary of Saptrishi Foundation Manoj Borse talked about work done by Saptrishi Foundation and their 'one stop solution.' Vote of thanks was delivered by Vrushali Borase.

Many parents expressed that Dr. Nagarkar sir shared valuable insights and gave a new perspective. They also expressed their desire to participate in further such activities by Sobati Group and Saptrishi Foundation.`
    }
  ]

  return (
    <>
      <PageHeader 
        title="News & Events" 
        subtitle="Stay updated with our latest activities and achievements"
      />

      {/* Latest News */}
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
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent updates and announcements from Saptrishi Foundation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <NewsCard 
                key={item.slug}
                {...item}
                delay={index * 0.1}
                onReadMore={() => setSelectedNews(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Modal */}
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
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="sticky top-4 right-4 ml-auto flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-600" />
              </button>

              {/* Modal Header */}
              <div className="px-8 pb-6">
                <div className="aspect-video bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl mb-6 flex items-center justify-center text-white text-7xl">
                  📰
                </div>
                
                <p className="text-sm text-gray-500 mb-3">📅 {selectedNews.date}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {selectedNews.title}
                </h2>
              </div>

              {/* Modal Body */}
              <div className="px-8 pb-8">
                <div className="prose prose-lg max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-gradient-to-br from-primary-yellow/10 to-primary-orange/10 rounded-xl border-l-4 border-primary-orange">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Address:</strong> First floor, Office no. 105, Aspiro Building, In front of Thyssenkrupp Industries, Station Road, Dr. Babasaheb Ambedkar Square, Pimpri, Pune - 411017</p>
                    <p><strong>Email:</strong> <a href="mailto:saptrishifoundationpune@gmail.com" className="text-primary-orange hover:underline">saptrishifoundationpune@gmail.com</a></p>
                    <p><strong>Phone:</strong> 9762184554 / 9665363177 / 9172716630</p>
                    <p><strong>Website:</strong> <a href="https://saptrishifoundation.in/" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">https://saptrishifoundation.in/</a></p>
                    <p><strong>Social Media:</strong> <a href="https://linktr.ee/SaptrishiFoundation" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline">https://linktr.ee/SaptrishiFoundation</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary-orange to-orange-600 text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for updates on news and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="px-8 py-4 bg-white text-primary-orange rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
