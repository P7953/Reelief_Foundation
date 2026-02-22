"use client"

import { motion } from "framer-motion"
import { HeartPulse, Users, Handshake } from "lucide-react"

const stats = [
  {
    number: "10k+",
    label: "Wellness Screenings",
    sub: "Since 2010",
    icon: HeartPulse,
  },
  {
    number: "50k+",
    label: "Lives Impacted",
    sub: "Across Communities",
    icon: Users,
  },
  {
    number: "500+",
    label: "Community Programs",
    sub: "Health, Food & Education",
    icon: Handshake,
  },
]

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* FIX 1: Warm white background instead of lavender/blue — feels cleaner */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-white" />

      {/* FIX 2: Subtle decorative circle blobs for depth */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* FIX 3: Added section heading above stats for context */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest bg-sky-100 text-sky-600 border border-sky-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            OUR IMPACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
            A Decade of Meaningful Change
          </h2>
          <p className="text-slate-500 mt-3 text-base max-w-lg mx-auto leading-relaxed">
            Every number represents a real life touched, a community strengthened,
            and a future made brighter.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                // FIX 4: Hover lifts card with sky blue shadow + top border accent
                className="group relative bg-white rounded-3xl p-10 text-center
                           border border-sky-100
                           shadow-[0_2px_16px_0_rgba(14,165,233,0.08)]
                           hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.18)]
                           hover:-translate-y-1.5
                           transition-all duration-300 overflow-hidden"
              >
                {/* FIX 5: Sky blue top accent bar that grows on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white-400 to-white-400
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-3xl" />

                {/* FIX 6: Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-50/0 to-sky-50/0
                                group-hover:from-sky-50/60 group-hover:to-white
                                transition-all duration-300 rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* FIX 7: Icon circle — sky blue, slightly larger, soft ring on hover */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-500
                                    flex items-center justify-center
                                    group-hover:bg-sky-500 group-hover:text-white
                                    transition-all duration-300 shadow-sm">
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* FIX 8: Number — orange stays for visual punch on stats */}
                  <span className="block text-5xl md:text-6xl font-bold text-orange-500 leading-none">
                    {stat.number}
                  </span>

                  {/* Divider line */}
                  <div className="w-10 h-0.5 bg-black-200 mx-auto my-3 rounded-full
                                  group-hover:w-16 group-hover:bg-black transition-all duration-300" />

                  {/* Label */}
                  <p className="text-base font-semibold text-slate-800">
                    {stat.label}
                  </p>

                  {/* Sub text */}
                  <p className="text-sm text-slate-400 mt-1">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}