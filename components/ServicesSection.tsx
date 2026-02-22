"use client"

import { motion } from "framer-motion"
import { Heart, Utensils, Home, GraduationCap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Heart,
    title: "Health & Hygiene",
    description:
      "Delivering preventive healthcare, immunization programs, and hygiene awareness to improve community well-being.",
    href: "/programs/health",
    color: "sky",
  },
  {
    icon: Utensils,
    title: "Food Security",
    description:
      "Ensuring access to nutritious food for vulnerable families during crises and everyday hardships.",
    href: "/programs/food",
    color: "orange",
  },
  {
    icon: Home,
    title: "Shelter & Employment",
    description:
      "Improving living conditions and enabling livelihoods through shelter support and skill-based employment.",
    href: "/programs/shelter",
    color: "sky",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Empowering children and youth through access to quality education and learning opportunities.",
    href: "/programs/education",
    color: "orange",
  },
]

export default function ServicesSection() {
  return (
    // FIX 1: Section gets a soft sky blue gradient background
    // so pure white cards clearly "pop out" from behind
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #e0f2fe 0%, #f0f9ff 50%, #dbeafe 100%)",
      }}
    >
      {/* FIX 2: Subtle dot pattern texture so background feels designed, not empty */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(circle, #7dd3fc 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Section edge dividers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest bg-white text-sky-600 border border-sky-300 mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
            Our Focus Areas
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Creating sustainable impact by addressing essential needs
            and empowering Communities
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isSky = service.color === "sky"

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-3xl p-8 text-center
                           flex flex-col overflow-hidden
                           transition-all duration-300 hover:-translate-y-2
                           ${isSky
                    // FIX 3: Strong visible border + layered shadow so cards
                    // clearly stand out from the blue bg at all times
                    ? "border-2 border-sky-200 shadow-[0_4px_24px_rgba(14,165,233,0.18),0_1px_4px_rgba(14,165,233,0.1)] hover:border-sky-400 hover:shadow-[0_16px_48px_rgba(14,165,233,0.30)]"
                    : "border-2 border-orange-100 shadow-[0_4px_24px_rgba(249,115,22,0.14),0_1px_4px_rgba(249,115,22,0.08)] hover:border-orange-300 hover:shadow-[0_16px_48px_rgba(249,115,22,0.24)]"
                  }`}
              >
                {/* FIX 4: Colored top bar ALWAYS visible (not just on hover) */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl
                                ${isSky
                                  ? "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-3xl"
                                  : "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-3xl"
                  }`}
                />

                {/* FIX 5: Subtle inner tint always visible for warmth */}
                <div className={`absolute inset-0 rounded-3xl pointer-events-none
                                ${isSky
                    ? "bg-gradient-to-b from-sky-50/50 to-white"
                    : "bg-gradient-to-b from-orange-50/50 to-white"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">

                  {/* Icon circle → fills on hover */}
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl
                                  flex items-center justify-center
                                  transition-all duration-300
                                  ${isSky
                      ? "bg-sky-100 text-sky-500 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-200"
                      : "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-200"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold text-slate-900 mb-3
                                  transition-colors duration-200
                                  ${isSky
                      ? "group-hover:text-sky-600"
                      : "group-hover:text-orange-500"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Expanding divider */}
                  <div className={`w-10 h-px mx-auto my-5
                                  group-hover:w-16 transition-all duration-300
                                  ${isSky ? "bg-sky-200" : "bg-orange-200"}`}
                  />

                  {/* Learn More */}
                  <Link
                    href={service.href}
                    className={`inline-flex items-center justify-center gap-1.5
                                text-sm font-semibold transition-all duration-200
                                group/link
                                ${isSky
                        ? "text-sky-500 hover:text-sky-700"
                        : "text-orange-500 hover:text-orange-700"
                      }`}
                  >
                    Learn More
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}