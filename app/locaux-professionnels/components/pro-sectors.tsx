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
    description: 'Aménagement de boutique, refonte de l\'agencement, création d\'espaces qui séduisent vos clients et optimisent votre activité commerciale.',
    longDescription: 'De la vitrine au back-office, nous concevons des espaces commerciaux qui racontent votre histoire, mettent en valeur vos produits et optimisent le parcours client.',
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
  },
  {
    id: 'bureaux',
    title: 'Bureaux & Tertiaire',
    shortTitle: 'Bureaux',
    icon: Building2,
    tagline: 'Espaces de travail performants et inspirants',
    description: 'Cloisonnement, open space, salles de réunion, accueil : nous créons des environnements de travail qui favorisent productivité et bien-être.',
    longDescription: 'Confort acoustique, ergonomie, performance énergétique : chaque détail compte pour créer un cadre de travail optimal qui attire et retient les talents.',
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
  },
  {
    id: 'chr',
    title: 'CHR (Cafés, Hôtels, Restaurants)',
    shortTitle: 'CHR',
    icon: Coffee,
    tagline: 'Design d\'ambiance et conformité garantie',
    description: 'Mise aux normes, design d\'ambiance, ergonomie des flux : des espaces qui respectent les réglementations tout en créant une expérience client mémorable.',
    longDescription: 'Conformité hygiène et sécurité, extraction, accessibilité PMR : nous maîtrisons toutes les contraintes réglementaires du secteur CHR pour vous libérer l\'esprit.',
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
  },
  {
    id: 'residences',
    title: 'Résidences Services',
    shortTitle: 'Résidences',
    icon: Home,
    tagline: 'Espaces de vie partagés et confortables',
    description: 'Aménagement d\'espaces partagés, studios, zones de vie commune pour étudiants, seniors ou coliving. Des lieux où il fait bon vivre ensemble.',
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
    <section id="pro-sectors" className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-amber-500/5 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4">
              Nos secteurs d&apos;intervention
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              4 domaines d&apos;expertise
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Chaque secteur a ses contraintes spécifiques. Notre méthode reste la même : rigueur, qualité, résultat.
            </p>
          </div>
        </ScrollReveal>

        {/* Sector selector - Large interactive cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {sectors.map((sector) => {
              const Icon = sector.icon
              const isActive = activeSector.id === sector.id
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSectorChange(sector)}
                  className={`group relative p-5 lg:p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'shadow-2xl scale-[1.02]' 
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}
                >
                  {/* Active gradient background */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient}`} />
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      isActive ? 'bg-white/20' : `bg-gradient-to-br ${sector.gradient}`
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${
                      isActive ? 'text-white' : 'text-primary'
                    }`}>
                      {sector.shortTitle}
                    </h3>
                    <p className={`text-xs transition-colors ${
                      isActive ? 'text-white/70' : 'text-foreground/50'
                    }`}>
                      {sector.tagline}
                    </p>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle2 className="w-5 h-5 text-white/60" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Active sector detailed content */}
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Image side */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <Image
                src={activeSector.image}
                alt={activeSector.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Badge */}
              <div 
                className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md text-white font-semibold text-sm flex items-center gap-2"
                style={{ backgroundColor: `${activeSector.color}dd` }}
              >
                {(() => {
                  const Icon = activeSector.icon
                  return <Icon className="w-4 h-4" />
                })()}
                {activeSector.shortTitle}
              </div>

              {/* For who badges */}
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

          {/* Content side */}
          <ScrollReveal direction="right" delay={0.3}>
            <div>
              <div 
                className="inline-block w-12 h-1 rounded-full mb-6"
                style={{ backgroundColor: activeSector.color }}
              />
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                {activeSector.title}
              </h3>
              
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                {activeSector.description}
              </p>
              
              <p className="text-base text-foreground/60 mb-6 leading-relaxed">
                {activeSector.longDescription}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeSector.features.map((feature, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border/50 hover:border-blue-500/30 transition-colors group"
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: activeSector.color }}
                    />
                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: activeSector.color }}
              >
                Projet {activeSector.shortTitle.toLowerCase()}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

