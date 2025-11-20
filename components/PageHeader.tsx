'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section
      className="relative w-full bg-gradient-to-br 
             from-primary-yellow to-primary-orange
             flex flex-col items-center justify-center text-center
             pt-44 pb-16 sm:pt-48 sm:pb-20 md:pt-40 md:pb-24"
      style={
        backgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {}
      }
    >
    <div className="container-custom px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                   font-bold text-gray-900 mb-4">
        {title}
      </h1>

      {subtitle && (
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>



  )
}
