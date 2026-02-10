'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { 
  ArrowRight, Store, Building2, Coffee, Home,
  ShoppingBag, Users, Utensils, Heart,
  Sparkles, Shield, Clock, CheckCircle2
} from 'lucide-react'

const sectors = [
  {
    id: 'commerces',
    title: 'Commerces & Retail',
    shortTitle: 'Commerces',
    icon: Store,
    tagline: 'Créez des espaces attractifs et fonctionnels',
    description: 'Restructuration de points de vente et ingénierie d\'agencement. Nous maximisons votre rentabilité par une gestion rigoureuse des volumes et des flux.',
    longDescription: 'Maîtrise technique globale, de l\'interface commerciale aux zones logistiques. Nous intégrons les codes du merchandising pour transformer l\'espace en levier de croissance.',
    features: [
      'Agencement sur-mesure',
      'Mise en valeur produits',
      'Parcours client optimisé',
      'Vitrine attractive',
      'Éclairage commercial',
      'Mobilier adapté',
    ],
    forWho: ['Boutiques', 'Franchises', 'Showrooms', 'Pop-up stores'],
    image: '/Banqueimages/M7_01330.jpg',
    color: '#e83263',
    gradient: 'from-accent to-accent/80',
    ctaLabel: 'Lancer mon étude retail',
  },
  {
    id: 'bureaux',
    title: 'Bureaux & Tertiaire',
    shortTitle: 'Bureaux',
    icon: Building2,
    tagline: 'Espaces de travail performants et inspirants',
    description: 'Cloisonnement, open space, salles de conférence : restructuration de vos environnements de travail. Nous pilotons l\'agencement de vos plateaux pour garantir une efficience opérationnelle immédiate.',
    longDescription: 'Ingénierie acoustique et ergonomie structurelle : nous pilotons des aménagements à haute valeur ajoutée technique. Sécurisez un cadre d\'exploitation performant et pérenne pour votre actif.',
    features: [
      'Open space & flex office',
      'Salles de réunion',
      'Espaces collaboratifs',
      'Confort acoustique',
      'Performance énergétique',
      'Accueil & image',
    ],
    forWho: ['PME', 'Start-ups', 'Sièges sociaux', 'Coworking'],
    image: '/Banqueimages/M7_01331.jpg',
    color: '#a39383',
    gradient: 'from-secondary to-secondary/80',
    ctaLabel: 'Lancer mon audit tertiaire',
  },
  {
    id: 'chr',
    title: 'CHR (Cafés, Hôtels, Restaurants)',
    shortTitle: 'CHR',
    icon: Coffee,
    tagline: 'Design d\'ambiance et conformité garantie',
    description: 'Mise aux normes, design d\'ambiance, ergonomie des flux : des espaces qui respectent les réglementations tout en créant une expérience client mémorable.',
    longDescription: 'Audit sanitaire, déploiement aéraulique et accessibilité PMR. Nous sécurisons votre investissement en neutralisant les risques de non-conformité liés aux spécificités de votre métier.',
    features: [
      'Design d\'ambiance',
      'Normes hygiène & sécurité',
      'Ergonomie cuisine',
      'Extraction & ventilation',
      'Accessibilité PMR',
      'Acoustique salle',
    ],
    forWho: ['Restaurants', 'Cafés & bars', 'Hôtels', 'Brasseries'],
    image: '/Banqueimages/M7_01335.jpg',
    color: '#e83263',
    gradient: 'from-accent/90 to-accent/70',
    ctaLabel: 'Solliciter un audit CHR',
  },
  {
    id: 'residences',
    title: 'Résidences Services',
    shortTitle: 'Résidences',
    icon: Home,
    tagline: 'Espaces de vie partagés et confortables',
    description: 'Configuration d\'unités d\'habitation et de zones de flux partagés. Nous structurons des environnements à haute valeur d\'usage pour sécuriser la pérennité de votre modèle d\'exploitation.',
    longDescription: 'Espaces communs conviviaux, studios fonctionnels, services adaptés : nous créons des résidences qui répondent aux attentes de leurs occupants.',
    features: [
      'Studios optimisés',
      'Espaces communs',
      'Zones de convivialité',
      'Accessibilité seniors',
      'Sécurité renforcée',
      'Services intégrés',
    ],
    forWho: ['Résidences étudiantes', 'Résidences seniors', 'Coliving', 'Appart-hôtels'],
    image: '/Banqueimages/M7_01319.jpg',
    color: '#a39383',
    gradient: 'from-secondary to-secondary/80',
    ctaLabel: 'Lancer mon étude d\'actif',
  },
]

export function ProSectors() {
  const [activeSector, setActiveSector] = useState(sectors[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSectorChange = (sector: typeof sectors[0]) => {
    if (sector.id === activeSector.id) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveSector(sector)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section id="pro-sectors" className="relative py-20 sm:py-28 lg:py-36 bg-[#050308] overflow-hidden">
      {/* Fond sombre inspiré de la page Architecture */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-[#050308] to-[#050308]" />

      {/* Décor lumineux discret */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#a39383]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Trame de fond légère */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#a39383] text-sm font-semibold tracking-wider uppercase mb-4">
              Nos secteurs d&apos;intervention
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              4 domaines d&apos;expertise
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Chaque secteur a ses contraintes propres. Notre méthode reste la même : rigueur, qualité, résultat mesurable.
            </p>
          </div>
        </ScrollReveal>

        {/* Sélecteur de secteur – grandes cartes interactives */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {sectors.map((sector) => {
              const Icon = sector.icon
              const isActive = activeSector.id === sector.id
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSectorChange(sector)}
                  onMouseEnter={() => handleSectorChange(sector)}
                  className={`group relative p-5 lg:p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden ${
                    isActive
                      ? 'shadow-2xl scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Fond dégradé actif */}
                  {isActive && <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-90`} />}

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                        isActive ? 'bg-white/15' : `bg-gradient-to-br ${sector.gradient}`
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3
                      className={`text-lg font-bold mb-1 transition-colors ${
                        isActive ? 'text-white' : 'text-white'
                      }`}
                    >
                      {sector.shortTitle}
                    </h3>
                    <p
                      className={`text-xs transition-colors ${
                        isActive ? 'text-white/80' : 'text-white/60'
                      }`}
                    >
                      {sector.tagline}
                    </p>

                    {/* Indicateur actif */}
                    {isActive && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle2 className="w-5 h-5 text-white/70" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Détail du secteur actif */}
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Visuel */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <Image
                src={activeSector.image}
                alt={activeSector.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Pour qui ? */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Pour qui ?</p>
                <div className="flex flex-wrap gap-2">
                  {activeSector.forWho.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contenu */}
          <ScrollReveal direction="right" delay={0.3}>
            <div>
              <div
                className="inline-block w-12 h-1 rounded-full mb-6"
                style={{ backgroundColor: activeSector.color }}
              />

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {activeSector.title}
              </h3>

              <p className="text-lg text-white/75 mb-4 leading-relaxed">{activeSector.description}</p>

              <p className="text-base text-white/60 mb-6 leading-relaxed">{activeSector.longDescription}</p>

              {/* Atouts */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeSector.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#a39383]/60 transition-colors group"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: activeSector.color }}
                    />
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: activeSector.color }}
              >
                {activeSector.ctaLabel}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

