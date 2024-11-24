import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import GetStarted from '@/components/GetStarted'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <Pricing />
      <GetStarted />
      <FAQ />
    </main>
  )
}
