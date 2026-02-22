import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import CallToActionSection from '@/components/CallToActionSection'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <CallToActionSection />
    </main>
  )
}
