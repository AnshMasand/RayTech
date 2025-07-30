import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import FactoryShowcase from '@/components/FactoryShowcase'
import ROICalculator from '@/components/ROICalculator'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <FactoryShowcase />
        <ROICalculator />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  )
} 