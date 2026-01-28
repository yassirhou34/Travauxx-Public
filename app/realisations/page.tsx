import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import GalleryEditorial from '@/components/GalleryEditorial'

export const metadata: Metadata = {
  title: 'Réalisations — Activ Travaux 37',
  description:
    'Découvrez quelques exemples de rénovations, extensions et aménagements réalisés en Indre-et-Loire par Activ Travaux 37.',
}

const projects = [
  {
    category: 'Rénovation globale',
    title: 'Rénovation complète d’une maison de famille',
    location: 'Proche de Tours (37)',
    surface: '140 m²',
    description:
      'Réfection complète de l’enveloppe et des pièces de vie : isolation, menuiseries, cuisine, salle de bains, électricité et sols.',
  },
  {
    category: 'Extension',
    title: 'Extension bois pour agrandir le séjour',
    location: 'Agglomération tourangelle',
    surface: '28 m²',
    description:
      'Création d’un volume lumineux avec grandes baies vitrées, continuité de toiture et reprise des façades existantes.',
  },
  {
    category: 'Aménagement intérieur',
    title: 'Réagencement cuisine / salon',
    location: 'Centre-ville',
    surface: '55 m²',
    description:
      'Ouverture de cloisons, redistribution des circulations, création d’une cuisine conviviale ouverte sur le séjour.',
  },
  {
    category: 'Locaux professionnels',
    title: 'Modernisation de bureaux',
    location: 'Zone d’activités',
    surface: '210 m²',
    description:
      'Mise aux normes, création de salles de réunion, optimisation de l’éclairage et traitement acoustique.',
  },
  {
    category: 'Rénovation énergétique',
    title: 'Amélioration thermique d’un pavillon',
    location: 'Périphérie de Tours',
    surface: '120 m²',
    description:
      'Isolation par l’extérieur, remplacement des menuiseries, VMC et optimisation du système de chauffage.',
  },
  {
    category: 'Salle de bains & suites',
    title: 'Création d’une suite parentale',
    location: 'Maison individuelle',
    surface: '24 m²',
    description:
      'Création d’une chambre avec dressing et salle d’eau, optimisation des rangements et valorisation de la lumière naturelle.',
  },
]

const editorialImages = [
  '/Banqueimages/M7_01325.jpg',
  '/Banqueimages/M7_01321.jpg',
  '/Banqueimages/M7_01323.jpg',
  '/Banqueimages/M7_01330.jpg',
  '/Banqueimages/DSC09109.jpg',
  '/Banqueimages/DJI_0087.jpg',
]

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-white via-white to-muted/40 py-20 sm:py-24 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-16 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-30" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                Réalisations
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Des projets concrets,
                <br />
                des chantiers suivis de bout en bout.
              </h1>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
                Voici une sélection de projets réalisés : rénovations globales, extensions, réagencements
                intérieurs et modernisation de locaux professionnels, dans l’esprit du réseau Activ Travaux.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Chaque chantier est piloté avec un contrat de contractant général : prix global défini,
                délais planifiés, coordination des corps de métiers et garanties associées.
              </p>
            </div>
          </div>
        </section>

        {/* Liste des projets – présentation éditoriale */}
        <section className="py-0 bg-background">
          <GalleryEditorial
            items={projects.map((project, index) => ({
              image: editorialImages[index] || editorialImages[0],
              chapter: `PROJET 0${index + 1}`,
              title: project.category,
              titleItalic: project.title,
              description: `${project.location} — Surface : ${project.surface}. ${project.description}`,
            }))}
            backgroundColor="#111111"
            textColor="#f5f5f5"
            accentColor="#e83263"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}


