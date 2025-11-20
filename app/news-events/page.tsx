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
  imageUrl?: string
  newsLink?: string
}

export default function NewsEventsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const upcomingEvents: NewsItem[] = [
    {
      title: '18th Homeopathy Health Camp for Differently Abled Persons',
      excerpt:
        'Saptrishi Foundation and Predictive Homeopathy are gearing up for the 18th homeopathy health camp offering comprehensive care for differently abled children and adults.',
      date: 'January, 2025',
      slug: '18th-homeopathy-health-camp',
      imageUrl:'/images/Media/Homeopathy camp  (1).jpg',
      content: `Saptrishi Foundation in collaboration with Predictive Homeopathy is organizing the 18th Homeopathy Health Camp on 15th December 2025 at Divyang Bhavan, Pimpri Chinchwad Municipal Corporation.

The camp will provide free consultations, medicine distribution and personalized guidance to differently abled children and adults. Experienced doctors from Predictive Homeopathy, Pune will be present along with volunteer specialists and therapists to ensure holistic evaluation for every participant.

Parents will receive counselling on the "Integrated One Stop Solution" app developed by Saptrishi Foundation to make key government schemes accessible. Sessions on nutrition, therapy routines and supportive assistive devices are also part of the agenda.

Registrations are now open on a first-come-first-serve basis. To confirm participation or volunteer support, please connect with Saptrishi Foundation.`
    }
  ]

  const news: NewsItem[] = [
    {
      title: 'पिंपरी चिंचवड महानगरपालिकेने सप्तर्षी फाउंडेशनच्या दिव्यांग क्षेत्रातील कार्याची घेतली दखल',
      excerpt: 'सप्तर्षी फाउंडेशनचे भारतातील पहिले इंटिग्रेटेड वन स्टॉप सोल्युशन संकल्पनेची निर्मिती',
      date: 'November 2025',
      slug: 'pcmc-takes-notice-saptarshi-work',
      imageUrl: 'https://mahaenews.com/wp-content/uploads/2024/12/divyanga-dina-780x470.jpg',
      newsLink: 'https://mahaenews.com/pimpri-chinchwad/pimpri-chinchwad-municipal-corporation-saptarshi-foundation-divyang-area-work-intervention/',
      content: `पिंपरी चिंचवड महानगरपालिकेने सप्तर्षी फाउंडेशनच्या दिव्यांग क्षेत्रातील कार्याची घेतली दखल. सप्तर्षी फाउंडेशनचे भारतातील पहिले इंटिग्रेटेड वन स्टॉप सोल्युशन संकल्पनेची निर्मिती.

For detailed coverage of this news story, please visit MahaENews.`
    },
    {
      title: 'मुव्ही चले हम - सितारे जमीन पे चित्रपटाचे विशेष प्रक्षेपण यशस्वी रित्या संपन्न',
      excerpt: 'सोशियो इन्फिलिटी ग्रुप यांच्या पुढाकाराने सप्तर्षी फाउंडेशनने केले अप्रतिम आयोजन',
      date: 'July 2025',
      slug: 'movie-screening-sitare-zameen-pe',
      imageUrl: 'https://mahaenews.com/wp-content/uploads/2025/07/The-special-screening-of-the-film-Movie-Chale-Hum-Sitare-Zameen-Pe-was-successfully-held.-780x470.jpg',
      newsLink: 'https://mahaenews.com/pimpri-chinchwad/the-special-screening-of-the-film-movie-chale-hum-sitare-zameen-pe-was-successfully-held/',
      content: `पिंपरी | 12 जुलै 2025 रोजी विशेष मुले व त्यांच्या कुटुंबियांसाठी आयोजित कार्यक्रमात इनॉक्स चित्रपटगृह, चिंचवड येथे 226 जणांनी सितारे जमीन पे या सिने अभिनेते आमिर खान दिग्दर्शित विशेष मुलांच्या व व्यक्तींच्या जीवनावर व संघर्षावर आधारित चित्रपटाचे विशेष प्रक्षेपण करण्यात आले.

चित्रपट पाहायला आलेल्या कुटुंबीयांपैकी अनेक कुटुंबांनी आपल्या विशेष मुलांसोबत पहिल्यांदाच चित्रपट गृहात जाऊन चित्रपट पाहिल्याचे सांगितले.

For detailed coverage of this special event, please visit MahaENews.`
    },
    {
      title: '77 वर्षीय बेवारस मृत महिलेवर सप्तर्षी फाउंडेशनद्वारे अंत्यसंस्कार; सामाजिक सेवेला 15 वर्षे पूर्ण',
      excerpt: 'सप्तर्षी फाउंडेशनद्वारे 77 वर्षीय बेवारस मृत महिलेवर अंत्यसंस्कार. सामाजिक सेवेला 15 वर्षे पूर्ण.',
      date: 'July 2025',
      slug: 'funeral-service-15-years-completion',
      imageUrl: 'https://mahaenews.com/wp-content/uploads/2025/07/77-year-old-orphaned-woman-cremated-by-Saptarshi-Foundation-Completes-15-years-of-social-service-780x470.jpg',
      newsLink: 'https://mahaenews.com/pimpri-chinchwad/77-year-old-orphaned-woman-cremated-by-saptarshi-foundation-completes-15-years-of-social-service/',
      content: `पिंपरी | पिंपरी चिंचवड येथील थेरगाव परिसरात वासंती पवार नामक 77 वर्षीय ज्येष्ठ महिला एकट्याच वास्तव्यास होत्या, आजारपणामुळे यशवंतराव चव्हाण रुग्णालयात शेजाऱ्यामार्फत दाखल करण्यात आले, परंतु आजारपणामुळे व वयोवृद्ध असल्याने रुग्णालयात त्यांचा मृत्यू झाला.

वाकड पोलिसांच्या वतीने सप्तर्षी फाउंडेशनला संपर्क साधून सहकार्य करण्यासाठी विनंती केली. सामाजिक व संवेदनशील कार्यात सदैव तत्पर असलेले श्री. मनोजकुमार साहेबराव बोरसे यांनी तात्काळ नियोजन करून पोलीस प्रशासनासोबत मिळून अंत्यविधीची प्रक्रिया पार पाडली.

2011 वर्षी सदर कार्य श्री मनोज बोरसे यांनी त्यांच्या आध्यात्मिक गुरूंच्या मार्गदर्शनाखाली सर्व वरिष्ठ गुरुबंधू व सहकार्याच्या माध्यमातून सुरू केले, आजवर 900 पेक्षा अधिक अंत्यविधी कोणत्याही शासकीय अनुदानशिवाय स्वखर्चाने पार पाडण्यात आले.

For detailed coverage of this compassionate service, please visit MahaENews.`
    },
    {
      title: 'मनोज बोरसे सर यांचा दिल्ली दौरा सकारात्मक - सप्तर्षी फाउंडेशनचा दिव्यांग बांधवांच्या सेवांविषयी पाठपुरावा यशस्वी',
      excerpt: 'मनोज बोरसे सर यांचा दिल्ली दौरा सकारात्मक. सप्तर्षी फाउंडेशनचा दिव्यांग बांधवांच्या सेवांविषयी पाठपुरावा यशस्वी.',
      date: 'August 2025',
      slug: 'manoj-borse-delhi-visit',
      imageUrl: 'https://mahaenews.com/wp-content/uploads/2025/08/Manoj-Borse-Sirs-Delhi-visit-positive-780x470.jpg',
      newsLink: 'https://mahaenews.com/pimpri-chinchwad/manoj-borse-sirs-delhi-visit-was-positive-saptarshi-foundations-follow-up-on-services-for-disabled-brothers-was-successful/',
      content: `पिंपरी | सप्तर्षी फाउंडेशन दिव्यांग बांधवांसाठी निरंतर सकारात्मक बदल आणण्यासाठी अनेक वर्षे कार्यरत आहे. दिव्यांग बांधवांच्या विविध प्रश्न संदर्भात 29 जुलै ते ऑगस्ट 2025 दरम्यान यशस्वी नियोजन करण्यात आले.

सदर दौऱ्यात खालील सेवा तसेच योजनांविषयी यशस्वीरित्या प्रयत्न करण्यात आले:

1) निरामय आरोग्य विमा योजना - नॅशनल ट्रस्ट, मेडीअसिस्ट टीपीए तसेच ओरिएंटल इन्शुरन्स कंपनी यांच्याशी भेटी. प्रलंबित असलेल्या क्लेम मधील अन्यायकारक रिजेक्शन 10 ऑगस्ट पर्यंत संबंधित यंत्रणेकडून करण्याचे आश्वासन देण्यात आले.

2) कायदेशीर पालकत्व - नॅशनल ट्रस्ट यांच्याशी भेट. यासंदर्भात बहुतेक सर्व प्रक्रिया पूर्ण असल्यास सहकार्य करण्याची इच्छा यंत्रणेकडून व्यक्त करण्यात आली.

3) यू.डी.आई.डी. (वैश्विक दिव्यांग ओळखपत्र) - दिव्यांग सशक्तिकरण विभाग, भारत सरकार, दिल्ली यांच्याशी भेट. वैश्विक दिव्यांग ओळखपत्र विभागाचे संचालक श्री. विनीत सिंघल साहेब यांच्याशी अतिशय सकारात्मक चर्चा झाली.

For detailed coverage of this Delhi visit and its outcomes, please visit MahaENews.`
    },
    {
      title: 'विशेष मुलांच्या पालकांसाठी शारीरिक व लैंगिक साक्षरता कार्यशाळेचे यशस्वी आयोजन',
      excerpt: 'डॉ. सचिन नगरकर सरांचे व्याख्यान व दिव्यांग पालकांसोबत संवाद',
      date: 'September 2025',
      slug: 'physical-sexual-literacy-workshop',
      imageUrl: 'https://mahaenews.com/wp-content/uploads/2025/10/Successful-organization-of-Physical-and-Sexual-Literacy-Workshop-for-Parents-of-Special-Children-780x470.jpg',
      newsLink: 'https://mahaenews.com/helth/successful-organization-of-physical-and-sexual-literacy-workshop-for-parents-of-special-children/',
      content: `पिंपरी | बौद्धिकदृष्ट्या अक्षमता व स्वमग्न व्यक्तींच्या शारीरिक गरजा व लैंगिक साक्षरता ह्या विषयावर मार्गदर्शन करण्याचा 30 वर्षांपेक्षा अधिक अनुभव असलेल्या डॉ. सचिन नगरकर सरांचे व्याख्यान व प्रत्यक्ष संवाद कार्यक्रम सोबती दिव्यांग ग्रूपद्वारे, पिंपरीतील दिव्यांग भवन येथे 28 सप्टेंबर रोजी आयोजित केला गेला.

या कार्यक्रमामध्ये दिव्यांग व्यक्तींचे पालक, सामाजिक संस्थांचे प्रतिनिधी आणि ह्या विषयावर कार्यरत असलेल्या व्यक्तींनी सहभाग घेतला. डॉ. सचिन नगरकर सरांनी चर्चा, संवाद व ब्रेनस्टॉर्मिंगद्वारे उपस्थितांना मार्गदर्शन केले.

सप्तर्षी फाउंडेशनचे सचिव मनोज बोरसे ह्यांनी फाउंडेशनच्या कामाची व 'वन स्टॉप सोल्युशनची' माहिती दिली.

For detailed coverage of this important workshop, please visit MahaENews.`
    },
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
      imageUrl: '/images/Media/Homeopathy camp  (4).jpg',
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
      imageUrl: '/images/Media/Body & Sexual Awareness Camp (2).jpeg',
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

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-to-b from-white to-orange-50/40">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our upcoming initiatives and programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <NewsCard
                key={event.slug}
                {...event}
                image={event.imageUrl}
                delay={index * 0.1}
                onReadMore={() => setSelectedNews(event)}
              />
            ))}
          </div>
        </div>
      </section>

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
              Recent updates and announcements from Saptrishi Foundation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <NewsCard 
                key={item.slug}
                {...item}
                image={item.imageUrl}
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
              <div className="px-4 sm:px-6 md:px-8 pb-6">
                {selectedNews.imageUrl && (
                  <div className="aspect-video bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl mb-6 overflow-hidden relative">
                    <img 
                      src={selectedNews.imageUrl} 
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {!selectedNews.imageUrl && (
                  <div className="aspect-video bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl mb-6 flex items-center justify-center text-white text-5xl sm:text-6xl md:text-7xl">
                    📰
                  </div>
                )}
                
                <p className="text-sm text-gray-500 mb-3">📅 {selectedNews.date}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {selectedNews.title}
                </h2>
              </div>

              {/* Modal Body */}
              <div className="px-4 sm:px-6 md:px-8 pb-8">
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Read Full Article Button */}
                {selectedNews.newsLink && (
                  <div className="mt-8">
                    <a
                      href={selectedNews.newsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange to-primary-yellow text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>वाचा सविस्तर / Read Full Article</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Contact Info */}
                <div className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-primary-yellow/10 to-primary-orange/10 rounded-xl border-l-4 border-primary-orange">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <p><strong>Address:</strong> First floor, Office no. 105, Aspiro Building, In front of Thyssenkrupp Industries, Station Road, Dr. Babasaheb Ambedkar Square, Pimpri, Pune - 411017</p>
                    <p><strong>Email:</strong> <a href="mailto:saptrishifoundationpune@gmail.com" className="text-primary-orange hover:underline break-all">saptrishifoundationpune@gmail.com</a></p>
                    <p><strong>Phone:</strong> <span className="break-all">9762184554 / 9665363177 / 9172716630</span></p>
                    <p><strong>Website:</strong> <a href="https://saptrishifoundation.in/" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline break-all">https://saptrishifoundation.in/</a></p>
                    <p><strong>Social Media:</strong> <a href="https://linktr.ee/SaptrishiFoundation" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:underline break-all">https://linktr.ee/SaptrishiFoundation</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
