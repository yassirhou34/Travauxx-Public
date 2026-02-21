import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import GalleryEditorial from '@/components/GalleryEditorial'
import GalleryFilmStrip from '@/components/GalleryFilmStrip'
import { HeroSwiper } from './components/hero-swiper'
import { VideoBlock } from './components/video-block'

export const metadata: Metadata = {
  title: 'Réalisations — Activ Travaux 37',
  description:
    'Découvrez quelques exemples de rénovations, extensions et aménagements réalisés en Indre-et-Loire par Activ Travaux 37.',
}

const projects = [
  {
    category: 'Rénovation',
    title: 'Rénovation complète d’une maison familiale ',
    location: 'Proche de Tours (37)',
    surface: '140 m²',
    description:
      'Remise à neuf complète : isolation haute performance, menuiseries neuves et rénovation totale des réseaux (électricité et fluides). Réagencement complet de la cuisine, des pièces d\’eau et des espaces de vie.',
  },
  {
    category: 'Extension',
    title: 'Agrandissement du séjour pour un gain de volume et de lumière',
    location: 'Secteur Tours (37) ',
    surface: '28 m²',
    description:
      'Création d\'une extension bois parfaitement intégrée au bâti existant. Pose de larges baies vitrées pour maximiser l\'apport solaire, reprise complète des façades et continuité de la toiture pour une harmonie architecturale totale.',
  },
  {
    category: 'Aménagement intérieur',
    title: 'Réagencement cuisine / salon',
    location: 'Secteur centre-ville Tours (37)',
    surface: '55 m²',
    description:
      'Ouverture de cloisons pour fluidifier les passages et apporter de la perspective. Conception d\'une cuisine sur-mesure totalement intégrée au séjour, transformant deux pièces séparées en un seul grand volume de réception.',
  },
  
  
  {
    category: 'Rénovation énergétique',
    title: 'Optimisation thermique d’un pavillon',
    location: 'Périphérie Tourangelle',
    surface: '120 m²',
    description:
      'Mise en œuvre d\'une isolation thermique par l\'extérieur (ITE) et installation de menuiseries haute performance. Refonte du système de ventilation et optimisation du chauffage pour une réduction drastique des déperditions énergétiques.',
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
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
              <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <p className="text-xs uppercase tracking-[0.25em] text-accent">
                  Réalisations
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  Des projets concrets,
                  <br />
                  des chantiers suivis de bout en bout.
                </h1>
                <p className="text-base sm:text-lg text-black leading-relaxed">
                  Consultez notre sélection de projets réalisés : réhabilitations lourdes, extensions structurelles et optimisation de parcs tertiaires. Chaque intervention reflète la rigueur et les standards d'excellence du réseau Activ Travaux 37.
                </p>
              </div>
              <div className="w-full min-w-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                <HeroSwiper />
              </div>
            </div>
          </div>
        </section>

        <GalleryFilmStrip
          images={[
            '/Banqueimages/M7_01325.jpg',
            '/Banqueimages/M7_01321.jpg',
            '/Banqueimages/M7_01323.jpg',
            '/Banqueimages/M7_01330.jpg',
            '/Banqueimages/DSC09109.jpg',
          ]}
          backgroundColor="#111"
          borderColor="#222"
        />

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

        <VideoBlock />
      </main>
      <Footer />
    </>
  )
}


