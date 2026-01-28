'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, Home, Building2, Sun, GlassWater } from 'lucide-react'

const extensionTypes = [
  {
    id: 'agrandissement',
    title: 'Agrandissement',
    shortTitle: 'Agrandir',
    icon: Home,
    description: 'L\'extension latérale ou arrière est la solution la plus courante pour gagner des mètres carrés au sol. Elle permet de créer une nouvelle pièce de vie spacieuse, parfaitement intégrée à l\'architecture existante de votre maison.',
    longDescription: 'Que vous souhaitiez agrandir votre séjour, créer une cuisine ouverte moderne, ajouter une suite parentale avec salle de bains ou même un garage attenant, l\'agrandissement s\'adapte à tous vos besoins. Nous travaillons avec différents matériaux (parpaing, bois, acier) selon le style de votre maison et vos préférences.',
    features: [
      'Pièce de vie supplémentaire',
      'Cuisine ouverte & moderne',
      'Suite parentale avec SDB',
      'Garage ou carport attenant',
      'Bureau ou espace de travail',
      'Salle de jeux ou home cinéma',
    ],
    advantages: ['Gain de surface au sol', 'Intégration harmonieuse', 'Valorisation du bien +25%'],
    materials: ['Parpaing traditionnel', 'Ossature bois', 'Structure acier', 'Mixte'],
    image: '/Banqueimages/M7_01325.jpg',
    color: '#e83263',
  },
  {
    id: 'surelevation',
    title: 'Surélévation',
    shortTitle: 'Surélever',
    icon: Building2,
    description: 'Quand le terrain ne permet pas d\'extension au sol, la surélévation est la solution idéale. Elle permet de doubler votre surface habitable sans empiéter sur votre jardin ni modifier l\'emprise au sol.',
    longDescription: 'La surélévation consiste à rehausser la toiture pour créer un étage complet ou aménager des combles habitables. Cette solution technique demande une expertise particulière pour garantir la solidité de la structure existante. Nous réalisons une étude approfondie avant chaque projet.',
    features: [
      'Étage complet supplémentaire',
      'Combles aménagés avec velux',
      'Toiture rehaussée',
      'Lucarnes et chiens-assis',
      'Chambres supplémentaires',
      'Terrasse sur toit-plat',
    ],
    advantages: ['Conservation du jardin', 'Surface doublée possible', 'Vue dégagée en hauteur'],
    materials: ['Ossature bois légère', 'Structure métallique', 'Béton cellulaire', 'Mixte bois/acier'],
    image: '/Banqueimages/DJI_0087.jpg',
    color: '#a39383',
  },
  {
    id: 'pergola',
    title: 'Pergola',
    shortTitle: 'Ombrager',
    icon: Sun,
    description: 'La pergola crée un espace de vie extérieur élégant et fonctionnel. Bioclimatique avec lames orientables ou classique, elle vous permet de profiter de votre terrasse par tous les temps.',
    longDescription: 'Les pergolas bioclimatiques modernes offrent un confort optimal : lames orientables motorisées pour réguler l\'ensoleillement, éclairage LED intégré, stores latéraux pour se protéger du vent. Une vraie pièce en plus, à mi-chemin entre intérieur et extérieur.',
    features: [
      'Pergola bioclimatique motorisée',
      'Lames orientables aluminium',
      'Éclairage LED intégré',
      'Stores latéraux ZIP',
      'Chauffage infrarouge option',
      'Pilotage domotique',
    ],
    advantages: ['Espace extérieur couvert', 'Protection soleil & pluie', 'Aucune formalité <20m²'],
    materials: ['Aluminium thermolaqué', 'Bois douglas ou pin', 'Acier galvanisé', 'Mixte alu/bois'],
    image: '/Banqueimages/M7_01323.jpg',
    color: '#e83263',
  },
  {
    id: 'veranda',
    title: 'Véranda',
    shortTitle: 'Lumière',
    icon: GlassWater,
    description: 'La véranda offre un espace baigné de lumière naturelle, véritable trait d\'union entre votre maison et votre jardin. Elle crée une pièce à vivre lumineuse et agréable toute l\'année.',
    longDescription: 'Qu\'il s\'agisse d\'un salon lumineux, d\'un jardin d\'hiver, d\'un bureau panoramique ou d\'une salle à manger avec vue sur le jardin, la véranda s\'adapte à tous vos usages. Les vitrages modernes (double ou triple vitrage, contrôle solaire) garantissent un confort thermique optimal été comme hiver.',
    features: [
      'Salon ou séjour lumineux',
      'Jardin d\'hiver végétalisé',
      'Bureau avec vue panoramique',
      'Salle à manger ouverte',
      'Cuisine véranda',
      'Spa ou piscine couverte',
    ],
    advantages: ['Lumière naturelle maximale', 'Liaison intérieur/extérieur', 'Confort 4 saisons'],
    materials: ['Aluminium design', 'PVC haute qualité', 'Bois noble', 'Acier/verre architectural'],
    image: '/Banqueimages/M7_01319.jpg',
    color: '#a39383',
  },
]

export function ExtensionTypes() {
  const [activeType, setActiveType] = useState(extensionTypes[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTypeChange = (type: typeof extensionTypes[0]) => {
    if (type.id === activeType.id) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveType(type)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section id="extension-types" className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Nos Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              4 façons d&apos;agrandir
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Chaque projet est unique. Découvrez la solution qui correspond à vos besoins et à votre habitat.
            </p>
          </div>
        </ScrollReveal>

        {/* Type selector tabs - Desktop */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="hidden lg:flex justify-center gap-2 mb-12">
            {extensionTypes.map((type) => {
              const Icon = type.icon
              const isActive = activeType.id === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeChange(type)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 ${
                    isActive 
                      ? 'bg-primary text-white shadow-xl' 
                      : 'bg-muted/50 text-foreground/70 hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-accent' : 'text-foreground/50 group-hover:text-accent'}`} />
                  <span className="font-semibold">{type.title}</span>
                  {isActive && (
                    <span 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: type.color }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Mobile tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="lg:hidden flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide">
            {extensionTypes.map((type) => {
              const Icon = type.icon
              const isActive = activeType.id === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeChange(type)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-white' 
                      : 'bg-muted/50 text-foreground/70'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm whitespace-nowrap">{type.shortTitle}</span>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image side */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden group">
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                <Image
                  src={activeType.image}
                  alt={activeType.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div 
                className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md text-white font-semibold text-sm flex items-center gap-2"
                style={{ backgroundColor: `${activeType.color}dd` }}
              >
                {(() => {
                  const Icon = activeType.icon
                  return <Icon className="w-4 h-4" />
                })()}
                {activeType.title}
              </div>

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, transparent 50%, ${activeType.color} 50%)`,
                }}
              />
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <ScrollReveal direction="right" delay={0.3}>
              <div 
                className="inline-block w-12 h-1 rounded-full mb-6"
                style={{ backgroundColor: activeType.color }}
              />
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                {activeType.title}
              </h3>
              
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                {activeType.description}
              </p>
              
              <p className="text-base text-foreground/60 mb-6 leading-relaxed">
                {activeType.longDescription}
              </p>

              {/* Advantages badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeType.advantages.map((adv, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: activeType.color }}
                  >
                    ✓ {adv}
                  </span>
                ))}
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeType.features.map((feature, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/30 transition-colors group"
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"
                      style={{ backgroundColor: activeType.color }}
                    />
                    <span className="text-sm font-medium text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Materials */}
              <div className="mb-8 p-4 rounded-xl bg-muted/20 border border-border/30">
                <p className="text-xs text-foreground/50 uppercase tracking-wider mb-2">Matériaux possibles</p>
                <p className="text-sm text-foreground/70">{activeType.materials.join(' • ')}</p>
              </div>

              {/* CTA */}
              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: activeType.color }}
              >
                Concevoir mon {activeType.title.toLowerCase()}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="flex justify-center gap-2 mt-12 lg:hidden">
          {extensionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeType.id === type.id ? 'w-8' : 'bg-foreground/20'
              }`}
              style={{ backgroundColor: activeType.id === type.id ? type.color : undefined }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

