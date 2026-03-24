import type { Metadata } from 'next'
import { Palette, Building2, UserCircle, Server, Copyright } from 'lucide-react'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { LegalSection } from '@/components/legal-section'

export const metadata: Metadata = {
  title: 'Mentions légales — Activ Travaux',
  description:
    'Éditeur, propriétaire du site, hébergeur et propriété intellectuelle — Activ Travaux, rénovation immobilière en Indre-et-Loire.',
}

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout
      title="Mentions légales"
      description="Transparence sur l'éditeur, l'hébergement et les droits de propriété intellectuelle du site."
      activeHref="/mentions-legales"
    >
      <LegalSection icon={Palette} title="Éditeur du site" index={1}>
        <p>
          La conception, le design et le développement du site sont assurés par l&apos;agence Nopal.
          Contact :{' '}
          <a href="mailto:contact@agencenopal.fr">contact@agencenopal.fr</a>
        </p>
      </LegalSection>

      <LegalSection icon={Building2} title="Propriétaire du site" index={2}>
        <p>
          Activ Travaux — Rénovation Immobilière. Siège social : 30 Rue du Chesne, 37550 Saint-Avertin.
          Téléphone :{' '}
          <a href="tel:+33649117644">06 49 11 76 44</a>. Immatriculation : 48305713900063 — RCS
          Saint-Avertin, 37208.
        </p>
      </LegalSection>

      <LegalSection icon={UserCircle} title="Directeur de la publication" index={3}>
        <p>Le responsable légal de la concession Activ Travaux Tours.</p>
      </LegalSection>

      <LegalSection icon={Server} title="Hébergement" index={4}>
        <p>
          Le site est hébergé par la société IONOS. Adresse : 7 Pl. de la Gare, 57200 Sarreguemines.
        </p>
      </LegalSection>

      <LegalSection icon={Copyright} title="Propriété intellectuelle" index={5}>
        <p>
          Tous les éléments graphiques, photographies de chantiers, textes et logos sont la propriété
          exclusive d&apos;Activ Travaux ou de ses partenaires. Toute reproduction, même partielle, est
          interdite sans accord écrit préalable.
        </p>
      </LegalSection>
    </LegalPageLayout>
  )
}
