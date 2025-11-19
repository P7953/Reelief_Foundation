'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and handle your personal information"
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
            <div className="bg-primary-yellow/10 border-l-4 border-primary-orange rounded-lg p-6 mb-8">
              <p className="text-gray-800 font-semibold mb-2">
                Last Updated: November 5, 2025
              </p>
              <p className="text-gray-600">
                Saptrishi Foundation is committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This Privacy Policy (“Policy”) delineates the protocols concerning the collection, utilization, and 
              disclosure of personal information by the “Saptrishi Foundation.” By accessing or utilizing the Website, 
              you assent to the collection and utilization of your personal information as detailed in this Policy. 
              If you disagree with this Policy, kindly refrain from using the Website.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">1. Information Collection</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Personal Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may gather personal information, inclusive of user documents, that you voluntarily furnish when engaging 
              with the Website, such as establishing an account, submitting requests, or utilizing specific services. 
              This encompasses documents such as identification, contact details, or other information you opt to disclose.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Automatically Collected Information</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Upon visiting the Website, specific information may be automatically compiled, including your IP address, 
              browser type, operating system, referring URLs, and viewed pages. This data aids in trend analysis, 
              Website administration, and enhancing user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We might employ cookies and akin tracking technologies to amass information about your interactions with 
              the Website. This data is utilized to personalize your experience, scrutinize usage patterns, and dispense 
              targeted advertisements. You retain control over cookie usage via your browser settings.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">2. Use of Information</h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We may utilize the amassed personal information to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
              <li>Provide, upkeep, and ameliorate the Website and its content.</li>
              <li>Address your inquiries, comments, or requests.</li>
              <li>Dispatch messages, updates, or promotional materials.</li>
              <li>Monitor and analyze Website usage and trends.</li>
              <li>Detect, probe, and thwart fraudulent or unauthorized activities.</li>
              <li>Abide by legal obligations.</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              The automatically collected information may be used to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
              <li>Customize and personalize your Website experience.</li>
              <li>Analyze and enhance Website performance and effectiveness.</li>
              <li>Dispense targeted advertisements and promotional content.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">3. Information Sharing</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your personal information may be shared under the following circumstances:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
              <li>With your consent or at your behest.</li>
              <li>
                With service providers or third-party vendors aiding us in Website operation and service provision, 
                subject to confidentiality agreements.
              </li>
              <li>To comply with legal obligations or respond to lawful requests from governmental authorities.</li>
              <li>
                In conjunction with a merger, acquisition, or asset sale, where personal information may be transferred 
                as part of the transaction.
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-6">
              We may share non-personally identifiable information, such as aggregated or anonymized data, for diverse 
              purposes, including analytics, research, or marketing.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We enforce reasonable security measures to safeguard the confidentiality and integrity of your personal 
              information. Nonetheless, no Internet transmission method or electronic storage is entirely impervious, 
              and we cannot guarantee absolute security.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Website may contain links to third-party websites or services not under our ownership or control. 
              This Privacy Policy exclusively pertains to the Website, and we disclaim responsibility for the privacy 
              practices of any third-party websites or services. We urge you to peruse the privacy policies of said 
              third parties.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Changes to the Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We retain the prerogative to amend or update this Privacy Policy at any juncture. Such alterations shall 
              become effective immediately upon posting the revised policy on the Website. We encourage periodic review 
              of this Privacy Policy for any updates.
            </p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For inquiries, concerns, or requests regarding this Privacy Policy or the utilization of your personal 
              information, please <Link href="/contact" className="text-primary-orange font-semibold">reach out to us</Link>.
            </p>

          </motion.div>
        </div>
      </section>
    </>
  )
}
