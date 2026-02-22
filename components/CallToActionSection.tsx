"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GradientBackground } from "@/components/ui/gradient-background"

export default function CallToActionSection() {
  const gradients = [
    "linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #22D3EE 100%)", // sky-600 to sky-500 to cyan-400
    "linear-gradient(135deg, #0EA5E9 0%, #06B6D4 50%, #22D3EE 100%)", // sky-500 to cyan-500 to cyan-400
    "linear-gradient(135deg, #0369A1 0%, #0EA5E9 50%, #06B6D4 100%)", // sky-700 to sky-500 to cyan-500
    "linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #22D3EE 100%)", // repeat for loop
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
        >
          <GradientBackground
            gradients={gradients}
            animationDuration={12}
            overlay
            overlayOpacity={0.25}
            className="rounded-[2.5rem]"
          >
            <div className="relative z-10 py-20 px-10 md:px-20 text-center space-y-8">

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Your Spirit. Our Strength.
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Whether through a donation or volunteering your time, you become a
                vital part of our mission to heal, empower, and uplift communities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link href="/donate">
                  <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-orange-50 transition-all hover:scale-105 active:scale-95">
                    Donate Now
                  </button>
                </Link>

                <Link href="/volunteer">
                  <button className="border-2 border-white/80 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                    Volunteer Today
                  </button>
                </Link>
              </div>

              {/* Trust Line */}
              <p className="text-sm text-white/80 pt-4">
                Registered NGO • 80G Tax Benefits Available • Transparent & Accountable
              </p>

            </div>
          </GradientBackground>
        </motion.div>

      </div>
    </section>
  )
}
