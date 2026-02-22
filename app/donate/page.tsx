'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import {
    Heart,
    QrCode,
    Building2,
    Copy,
    CheckCheck,
    Shield,
    Users,
    HandHeart,
    Phone,
    Mail,
    FileText,
    ChevronRight,
} from 'lucide-react'

/* ─────────────────── CONSTANTS ────────────────────── */
const GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c4b5fd 100%)'
const GRADIENT_SOFT = 'linear-gradient(135deg, #f0fbff 0%, #f5f3ff 100%)'

/* ─────────────────── DATA ──────────────────────────── */
const IMPACT_STATS = [
    { icon: Users, value: '5,000+', label: 'Lives Impacted' },
    { icon: Heart, value: '900+', label: 'Last Rites Performed' },
    { icon: HandHeart, value: '17+', label: 'Free Health Camps' },
    { icon: Shield, value: '15+', label: 'Years of Service' },
]

const BANK_DETAILS = [
    { label: 'Account Name', value: 'Reelief Foundation' },
    { label: 'Account Number', value: '1234567890123456' },
    { label: 'IFSC Code', value: 'SBIN0012345' },
    { label: 'Bank & Branch', value: 'Bank of MAharashtra, Pimpri.' },
    { label: 'Account Type', value: 'Savings' },
]

const WHY_DONATE = [
    {
        icon: Shield,
        title: 'Transparent & Accountable',
        desc: 'Every rupee is accounted for. Annual reports and audited statements are publicly available.',
    },
    {
        icon: FileText,
        title: '80G Tax Exemption',
        desc: 'Your donation qualifies for 50% tax exemption under Section 80G of the Income Tax Act.',
    },
    {
        icon: HandHeart,
        title: 'Direct Community Impact',
        desc: 'Funds go directly to field programs — health camps, education, shelter, and livelihood support.',
    },
]

/* ─────────────────── COMPONENT ─────────────────────── */
export default function DonationPage() {
    const [copied, setCopied] = useState<string | null>(null)

    const handleCopy = (value: string, label: string) => {
        navigator.clipboard.writeText(value)
        setCopied(label)
        setTimeout(() => setCopied(null), 2000)
    }

    return (
        <>
            <PageHeader
                title="Make a Donation"
                subtitle="Your generosity transforms lives. Every contribution, big or small, makes a real difference."
            />

            {/* ── Impact Stats Bar ─────────────────────────── */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {IMPACT_STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md"
                                    style={{ background: GRADIENT }}
                                >
                                    <stat.icon className="text-white" size={24} />
                                </div>
                                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                                <div className="text-xl text-gray-500 font-medium mt-0.5">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QR + Bank Side By Side ───────────────────── */}
            <section className="py-16 md:py-20" style={{ background: GRADIENT_SOFT }}>
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Ways to Donate</h2>
                        <p className="text-gray-500 text-xl">Scan the QR code or transfer directly to our bank account</p>
                        <div className="w-12 h-1 mx-auto rounded-full mt-3" style={{ background: GRADIENT }} />
                    </motion.div>

                    {/* ── Row 1: QR | Bank ─────────────────────── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-5xl mx-auto mb-7">

                        {/* QR Card */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 flex flex-col items-center text-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-5 self-start">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow flex-shrink-0"
                                    style={{ background: GRADIENT }}
                                >
                                    <QrCode className="text-white" size={26} />
                                </div>
                                <div className="text-left">
                                    <h2 className="text-xl text-base font-bold text-gray-800">Scan &amp; Pay via UPI</h2>
                                    <p className="text-lg text-gray-400">GPay · PhonePe · Paytm · BHIM</p>
                                </div>
                            </div>

                            {/* QR Box */}
                            <div
                                className="w-60 h-60 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-sky-300 relative overflow-hidden mb-4"
                                style={{ background: GRADIENT_SOFT }}
                            >
                                <img src="/images/qr.jpg" alt="UPI QR Code"
                                    className="w-full h-full object-contain rounded-2xl" />

                                {/* Corner brackets */}
                                <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-sky-400 rounded-tl-md" />
                                <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-sky-400 rounded-tr-md" />
                                <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-sky-400 rounded-bl-md" />
                                <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-sky-400 rounded-br-md" />
                            </div>

                            <p className="text-x text-gray-400 mb-3">
                                Open any UPI app → Scan QR → Enter amount → Pay
                                <br />
                                UPI ID: - bom260101331625@mahb
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                                    <span
                                        key={app}
                                        className="text-x font-semibold px-3 py-1 rounded-full"
                                        style={{ background: 'linear-gradient(135deg,#e0f7ff,#ede9fe)', color: '#38bdf8' }}
                                    >
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Bank Transfer Card */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow flex-shrink-0"
                                    style={{ background: GRADIENT }}
                                >
                                    <Building2 className="text-white" size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Bank Transfer / NEFT / RTGS</h3>
                                    <p className="text-x text-gray-400">Direct bank transfer details</p>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                {BANK_DETAILS.map(({ label, value }) => (
                                    <div
                                        key={label}
                                        className="flex items-center justify-between p-3 rounded-2xl"
                                        style={{ background: GRADIENT_SOFT }}
                                    >
                                        <div>
                                            <p className="text-x text-gray-400 font-medium">{label}</p>
                                            <p className="text-sm font-bold text-gray-800 mt-0.5">{value}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCopy(value, label)}
                                            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl transition-all hover:scale-105 flex-shrink-0 ml-2"
                                            style={{ background: GRADIENT, color: 'white' }}
                                        >
                                            {copied === label
                                                ? <><CheckCheck size={11} /> Copied</>
                                                : <><Copy size={11} /> Copy</>
                                            }
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Row 2: 80G | Contact ─────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">

                        {/* 80G Tax Card */}
                        <motion.div
                            className="rounded-3xl p-7 border border-sky-200 shadow-md hover:shadow-xl transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg,#e0f7ff 0%,#ede9fe 100%)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md"
                                style={{ background: GRADIENT }}
                            >
                                <FileText className="text-white" size={26} />
                            </div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">80G Tax Exemption</h3>
                            <p className="text-gray-600 text-x leading-relaxed mb-4">
                                Donations are eligible for <strong>50% tax deduction</strong> under Section 80G
                                of the Income Tax Act, 1961. An official receipt will be issued for all donations.
                            </p>
                            <div className="w-10 h-0.5 rounded-full mb-4" style={{ background: GRADIENT }} />
                            <a
                                href="/80G.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors"
                            >
                                View 80G Certificate <ChevronRight size={15} />
                            </a>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 p-7 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md"
                                style={{ background: GRADIENT }}
                            >
                                <Phone className="text-white" size={26} />
                            </div>
                            <h3 className="font-bold text-gray-800 text-xl mb-2">Need Help?</h3>
                            <p className="text-gray-500 text-x mb-4">
                                Our team is here to assist you with your donation.
                            </p>
                            <div className="space-y-3">
                                <a
                                    href="tel:9011311323"
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                >
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: GRADIENT }}
                                    >
                                        <Phone className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xl text-gray-400">Call us</p>
                                        <p className="text-x font-bold text-gray-700 group-hover:text-sky-500 transition-colors">
                                            9011311323
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:relieffoundationpune@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                                >
                                    <div
                                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: GRADIENT }}
                                    >
                                        <Mail className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xl text-gray-400">Email us</p>
                                        <p className="text-x font-bold text-gray-700 group-hover:text-sky-500 transition-colors break-all">
                                            relieffoundationpune@gmail.com
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Why Donate Section ───────────────────────── */}
            <section className="py-16 md:py-24" style={{ background: GRADIENT_SOFT }}>
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 text-sm font-semibold uppercase tracking-widest text-sky-600"
                            style={{ background: 'white' }}
                        >
                            <Heart size={13} /> Why Donate
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Your Donation, Their Future
                        </h2>
                        <div className="w-16 h-1 mx-auto rounded-full" style={{ background: GRADIENT }} />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
                        {WHY_DONATE.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                whileHover={{ y: -6 }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform"
                                    style={{ background: GRADIENT }}
                                >
                                    <item.icon className="text-white" size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-x leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ──────────────────────────────── */}
            <section className="py-16 md:py-20" style={{ background: GRADIENT }}>
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-2xl border border-white/30 max-w-3xl mx-auto">
                            <Heart className="text-white mx-auto mb-4" size={44} />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Every Rupee Counts
                            </h2>
                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                ₹500 feeds a family for a week. ₹2,100 funds a free health check-up.
                                ₹10,000 provides shelter support for a month.
                                <br />
                                <span className="font-bold text-white">Be the reason someone smiles today.</span>
                            </p>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-sky-600 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-xl"
                            >
                                <Heart size={20} /> Donate Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
