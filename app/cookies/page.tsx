import type { Metadata } from 'next'
import { Cookie, Layers, SlidersHorizontal } from 'lucide-react'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { LegalSection } from '@/components/legal-section'

export const metadata: Metadata = {
  title: 'Gestion des cookies — Activ Travaux',
  description:
    'Cookies techniques et de mesure d\'audience, bandeau de consentement et gestion des préférences — Activ Travaux.',
}

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Gestion des cookies"
      description="Comprendre les cookies utilisés sur ce site et comment gérer vos préférences."
      activeHref="/cookies"
    >
      <LegalSection icon={Cookie} title="Définition" index={1}>
        <p>
          Le site Activ Travaux utilise des cookies pour améliorer votre navigation et analyser
          l&apos;audience du site. Un cookie est un fichier texte déposé sur votre terminal lors de
          votre visite.
        </p>
      </LegalSection>

      <LegalSection icon={Layers} title="Types de cookies utilisés" index={2}>
        <ul>
          <li>
            <strong>Cookies techniques :</strong> indispensables au bon fonctionnement du site.
          </li>
          <li>
            <strong>Cookies de mesure d&apos;audience :</strong> permettent d&apos;analyser le trafic et
            l&apos;utilisation du site de manière anonyme.
          </li>
        </ul>
      </LegalSection>

      <LegalSection icon={SlidersHorizontal} title="Gestion des préférences" index={3}>
        <p>
          Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser les cookies
          non essentiels. Vous pouvez modifier vos choix à tout moment via les réglages de votre
          navigateur.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
