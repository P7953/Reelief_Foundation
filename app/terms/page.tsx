'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <>
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="Please read these terms carefully before using our services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Last Updated Banner */}
            <div className="bg-primary-yellow/10 border-l-4 border-primary-orange rounded-lg p-6 mb-8">
              <p className="text-gray-800 font-semibold mb-2">
                Last Updated: November 5, 2025
              </p>
              <p className="text-gray-600">
                By accessing or using the Saptrishi Foundation website/portal, you agree to these Terms and Conditions.
              </p>
            </div>

            {/* TERMS CONTENT */}

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
              Terms & Conditions
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              These Terms and Conditions (“Terms”) govern your use of the “Saptrishi Foundation” (“Website/Portal”), 
              which provides information, resources, and support to individuals with disabilities. By accessing or 
              using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, 
              please refrain from using the Website/Portal.
            </p>

            {/* 1 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1) Acceptance of Terms</h3>
            <p className="text-gray-600 mb-6">
              By accessing the Website, you affirm that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree, discontinue your use of the Website/Portal.
            </p>

            {/* 2 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2) Website/Portal Content</h3>
            <p className="text-gray-600 mb-6">
              The content provided on the Website/Portal is for informational and educational purposes only. It does not 
              constitute professional advice. While we strive for accuracy, we cannot guarantee completeness, timeliness, 
              or reliability.
            </p>

            {/* 3 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3) Intellectual Property</h3>
            <p className="text-gray-600 mb-6">
              All content on the Website/Portal including text, graphics, images, logos, icons, and software is the 
              property of the Website owners and protected under applicable laws. You may access the Website for 
              personal, non-commercial use only. Any copying, modifying, distributing, or selling of any Website 
              content without permission is strictly prohibited.
            </p>

            {/* 4 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4) User Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 ml-4 space-y-2">
              <li>Comply with all applicable laws and regulations.</li>
              <li>Do not disrupt the Website/Portal or compromise its security.</li>
              <li>Maintain confidentiality of your login credentials.</li>
              <li>Do not use the Website/Portal for unlawful or abusive purposes.</li>
            </ul>

            {/* 5 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5) Use of User Documents</h3>
            <p className="text-gray-600 mb-4">
              Users may upload or submit documents (“User Documents”). By doing so, you grant the Website owners a 
              license to use the documents for providing/improving services. You are solely responsible for the 
              accuracy and legality of the User Documents.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 ml-4 space-y-2">
              <li>We do not claim ownership of your personal/sensitive information.</li>
              <li>We collect and store documents as per our Privacy Policy.</li>
              <li>You must maintain backup copies of your documents.</li>
              <li>Report any intellectual property infringements immediately.</li>
            </ul>

            {/* 6 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">6) Privacy</h3>
            <p className="text-gray-600 mb-6">
              Our Privacy Policy governs how we collect and use personal information. By using the Website/Portal, you 
              consent to our Privacy Policy.
            </p>

            {/* 7 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7) Third-Party Websites and Services</h3>
            <p className="text-gray-600 mb-6">
              The Website/Portal may contain links to third-party websites. We do not endorse or control these websites 
              and are not responsible for their content or privacy practices. Access them at your own risk.
            </p>

            {/* 8 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">8) Limitation of Liability</h3>
            <p className="text-gray-600 mb-6">
              We shall not be liable for any damages arising from your use or inability to use the Website/Portal or its services.
            </p>

            {/* 9 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">9) Modifications & Termination</h3>
            <p className="text-gray-600 mb-6">
              We may modify, suspend, or terminate the Website/Portal at any time without notice. Changes to these Terms 
              become effective immediately. Continued use constitutes acceptance.
            </p>

            {/* 10 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">10) Governing Law</h3>
            <p className="text-gray-600 mb-6">
              These Terms are governed by the laws of India, without regard to conflict of law principles.
            </p>

            {/* 11 */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">11) Entire Agreement</h3>
            <p className="text-gray-600 mb-6">
              These Terms constitute the entire agreement between you and the Saptrishi Foundation.
            </p>

            {/* Contact */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              For questions or concerns regarding these Terms, please contact us.
            </p>

           {/* Divider Line */}
            <hr className="my-14" />

           {/* Disclaimer Title */}
            <h2 className="text-4xl font-times-new-roman font-xl text-Orange-100 mb-8 text-center">
              Disclaimer (For App & Portal)
            </h2>


            <p className="text-gray-600 mb-6 leading-relaxed">
              Our app is an independent application created for the welfare and development of the differently abled community. 
              We are a non-profit social organization (NGO) dedicatedly working for the integration of resources and information 
              for the welfare of persons with disabilities. We want to clarify that we do not represent any government entity.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              The information regarding different resources and government schemes has been searched for and identified from 
              publicly available sources.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              This app is a part of the project implementation of our innovative concept, Integrated One-Stop Solution for 
              persons with disabilities. Under Phase 1 of this project, we have created a support system for the following services:
            </p>

            <ul className="list-disc list-inside ml-4 text-gray-600 mb-6 space-y-2">
              <li>Support for Documentation</li>
              <li>Support to access Government schemes and notifications</li>
              <li>Support for Insurance schemes/policies/financial planning products</li>
              <li>Support to enroll in camps/activities for the differently abled</li>
              <li>Support for multiple types of resources available for persons with disabilities</li>
            </ul>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our app includes information regarding various private and government resources useful for persons with disabilities. 
              However, we cannot guarantee benefits from the concerned organizations; these are subject to their eligibility 
              criteria and terms.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our role is to provide information to the best of our knowledge for the welfare of persons with disabilities 
              and their families. We are not liable for changes in government policies or schemes.
            </p>

          </motion.div>
        </div>
      </section>
    </>
  )
}
