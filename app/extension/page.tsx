import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExtensionHero } from './components/extension-hero'
import { ExtensionTypes } from './components/extension-types'
import { WhyExtension } from './components/why-extension'
import { DemarchesSection } from './components/demarches-section'
import { ExtensionProcess } from './components/extension-process'
import { ExtensionCTA } from './components/extension-cta'

export const metadata: Metadata = {
  title: 'Extension de maison en Indre-et-Loire — Agrandissement, Surélévation, Pergola, Véranda',
  description:
    'Extension, surélévation, véranda, pergola. Projet cadré en Indre-et-Loire avec étude, démarches et travaux pilotés. Demandez un devis.',
}

export default function ExtensionPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ExtensionHero />
        <ExtensionTypes />
        <WhyExtension />
        <DemarchesSection />
        <ExtensionProcess />
        <ExtensionCTA />
      </main>
      <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
      <Footer />
    </>
  )
}
