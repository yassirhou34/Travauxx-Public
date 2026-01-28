import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutHero } from './components/about-hero'
import { NetworkSection } from './components/network-section'
import { MissionSection } from './components/mission-section'
import { ValuesSection } from './components/values-section'
import { LocalPresence } from './components/local-presence'
import { AboutCTA } from './components/about-cta'

export const metadata: Metadata = {
  title: 'Activ Travaux 37 — Contractant général rénovation premium en Indre-et-Loire',
  description:
    'Activ Travaux en Indre-et-Loire. Réseau national de contractants généraux et interlocuteur local pour rénovation, extension, énergie et aménagement. 20 ans d\'expérience. Demande de devis.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AboutHero />
        <NetworkSection />
        <MissionSection />
        <ValuesSection />
        <LocalPresence />
        <AboutCTA />
      </main>
      <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
      <Footer />
    </>
  )
}
