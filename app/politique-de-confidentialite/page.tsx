import type { Metadata } from 'next'
import { Inbox, ListTree, Lock, Scale } from 'lucide-react'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { LegalSection } from '@/components/legal-section'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Activ Travaux',
  description:
    'Collecte des données, finalités, conservation, sécurité et droits RGPD — Activ Travaux.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      description="Comment nous utilisons vos données et comment exercer vos droits en toute simplicité."
      activeHref="/politique-de-confidentialite"
    >
      <LegalSection icon={Inbox} title="Collecte des données" index={1}>
        <p>
          Activ Travaux collecte des données personnelles via le formulaire de contact (nom, prénom,
          email, téléphone). Ces informations sont strictement nécessaires au traitement de vos demandes
          de devis ou d&apos;informations.
        </p>
      </LegalSection>

      <LegalSection icon={ListTree} title="Finalités du traitement" index={2}>
        <p>Les données recueillies servent uniquement à :</p>
        <ul>
          <li>L&apos;établissement de propositions commerciales.</li>
          <li>La gestion de la relation client.</li>
          <li>L&apos;envoi d&apos;informations relatives à vos projets de travaux.</li>
        </ul>
      </LegalSection>

      <LegalSection icon={Lock} title="Conservation et sécurité" index={3}>
        <p>
          Vos données sont conservées pendant la durée nécessaire à la finalité du traitement (maximum 3
          ans après le dernier contact commercial). Activ Travaux s&apos;engage à mettre en œuvre les
          mesures techniques nécessaires pour garantir la sécurité et la confidentialité de vos
          informations.
        </p>
      </LegalSection>

      <LegalSection icon={Scale} title="Vos droits (RGPD)" index={4}>
        <p>
          Conformément à la réglementation européenne, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et d&apos;opposition au traitement de vos données. Pour exercer
          ces droits, contactez-nous à :{' '}
          <a href="mailto:contact@activtravaux.fr">contact@activtravaux.fr</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
