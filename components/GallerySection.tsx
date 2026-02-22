"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ImageAutoSlider } from '@/components/ui/image-auto-slider'

export default function GallerySection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900"
                    >
                        Stories from the Ground
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-hub-terracotta font-bold text-lg underline decoration-hub-yellow decoration-4 underline-offset-8"
                    >
                        <Link href="/media-gallery" className="hover:text-sky-400">Explore Our Gallery</Link>
                    </motion.p>
                </div>

                {/* Animated Image Slider */}
                <ImageAutoSlider />
            </div>
        </section>
    )
}
