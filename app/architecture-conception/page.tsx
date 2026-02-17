import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArchitectureHero } from './components/architecture-hero'
import { ThreePillars } from './components/three-pillars'
import { ConceptionProcess } from './components/conception-process'
import { ValueProposition } from './components/value-proposition'
import { ArchitectureCTA } from './components/architecture-cta'

export const metadata: Metadata = {
  title: 'Architecture & conception | Architectes, Bureau d\'études | Activ Travaux 37',
  description:
    'Conception architecturale sur-mesure en Indre-et-Loire. Architectes partenaires, bureau d\'études. Plans, modélisation 3D, dossiers administratifs. Devis gratuit.',
}

export default function ArchitecturePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ArchitectureHero />
        <ThreePillars />
        <ConceptionProcess />
        <ValueProposition />
        <ArchitectureCTA />
      </main>
      <Footer />
    </>
  )
}
