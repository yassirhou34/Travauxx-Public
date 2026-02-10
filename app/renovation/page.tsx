import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RenovationHero } from './components/renovation-hero'
import { RenovationTypes } from './components/renovation-types'
import { EcoBenefits } from './components/eco-benefits'
import { WhyRenovate } from './components/why-renovate'
import { RenovationProcess } from './components/renovation-process'
import { RenovationCTA } from './components/renovation-cta'

export const metadata: Metadata = {
  title: 'Rénovation de maison en Indre-et-Loire — Globale & Énergétique | Activ Travaux',
  description:
    'Rénovation globale et rénovation énergétique en Indre-et-Loire. Maison plus saine, plus confortable, plus économe. Projet clé en main, budget cadré, garanties. Demandez un devis.',
}

export default function RenovationPage() {
  return (
    <>
      <Header variant="transparent" />
      <main className="overflow-x-hidden">
        <RenovationHero />
        <RenovationTypes />
        <EcoBenefits />
        <WhyRenovate />
        <RenovationProcess />
        <RenovationCTA />
      </main>
      <Footer />
    </>
  )
}
