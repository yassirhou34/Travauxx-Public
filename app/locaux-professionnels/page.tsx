import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProHero } from './components/pro-hero'
import { ProSectors } from './components/pro-sectors'
import { WhyActivPro } from './components/why-activ-pro'
import { MultiSite } from './components/multi-site'
import { ProCTA } from './components/pro-cta'

export const metadata: Metadata = {
  title: 'Aménagement Locaux Professionnels | Commerces, Bureaux, CHR, Résidences | Activ Travaux 37',
  description:
    'Aménagement et rénovation de locaux professionnels en Indre-et-Loire. Commerces, bureaux, CHR, résidences services. Contractant général, interlocuteur unique, délais garantis. Devis gratuit.',
}

export default function LocauxProfessionnelsPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <ProHero />
        <ProSectors />
        <WhyActivPro />
        <MultiSite />
        <ProCTA />
      </main>
      <Footer />
    </>
  )
}
