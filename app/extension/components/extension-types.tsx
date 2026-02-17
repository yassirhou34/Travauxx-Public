'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, Home, Building2, Sun, GlassWater } from 'lucide-react'

const extensionTypes = [
  {
    id: 'agrandissement',
    title: 'Agrandissement & extension latérale',
    shortTitle: 'Agrandir',
    icon: Home,
    description: ' L\’extension au sol est la solution idéale pour gagner des mètres carrés et valoriser votre patrimoine. Nous concevons pour vous une nouvelle pièce de vie spacieuse, pensée pour s\’intégrer parfaitement à l’architecture de votre maison actuelle.',
    longDescription: 'De la suite parentale au garage attenant, nous pilotons votre projet de A à Z. Selon vos besoins et les contraintes de votre terrain, nous maîtrisons l\'ensemble des techniques de construction : ossature bois, parpaing traditionnel ou structure acier.',
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
    color: '#a39883',
  },
  {
    id: 'surelevation',
    title: 'Surélévation : doublez votre surface',
    shortTitle: 'Surélever',
    icon: Building2,
    description: 'Quand le terrain est limité, la surélévation est la solution stratégique. Nous créons un nouvel étage complet ou aménageons vos combles pour doubler vos mètres carrés sans réduire votre jardin.',
    longDescription: 'Ce défi technique exige une maîtrise structurelle absolue. Nous réalisons une étude de portance rigoureuse pour garantir la solidité du bâti et assurer une fusion architecturale idéale.',
    features: [
      'Étage complet supplémentaire',
      'Combles aménagés avec velux',
      'Toiture rehaussée',
      'Lucarnes et chiens-assis',
      'Chambres supplémentaires',
      'Terrasse sur toit-plat',
    ],
    advantages: ['Conservation du jardin', 'Surface doublée', 'Vue dégagée'],
    materials: ['Ossature bois légère', 'Structure métallique', 'Béton cellulaire', 'Mixte bois/acier'],
    image: '/Banqueimages/DJI_0087.jpg',
    color: '#a39883',
  },
  {
    id: 'pergola',
    title: 'Pergola : l\'aménagement extérieur idéal',
    shortTitle: 'Ombrager',
    icon: Sun,
    description: 'La pergola est la solution idéale pour transformer votre terrasse en un espace de vie fonctionnel et élégant. Qu’elle soit classique ou bioclimatique à lames orientables, elle vous permet de réguler l’ensoleillement et de profiter de votre extérieur en toute saison.',
    longDescription: 'Véritable trait d\'union entre l\'intérieur et le jardin, nos modèles intègrent des équipements de confort modernes : motorisation silencieuse, éclairage LED et protections latérales pour une expérience sur-mesure.',
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
    color: '#a39883',
  },
  {
    id: 'veranda',
    title: 'Véranda : la lumière idéale toute l\'année',
    shortTitle: 'Lumière',
    icon: GlassWater,
    description: 'La véranda est la solution idéale pour agrandir votre maison tout en profitant d\'une clarté naturelle permanente. Véritable trait d\'union entre l\'intérieur et l\'extérieur, elle crée un espace de vie fonctionnel et agréable en toute saison.',
    longDescription: 'Qu\’il s\’agisse d\’un salon, d\’un bureau ou d\’une salle à manger, nous intégrons des vitrages à haute performance thermique. Cette technologie assure une isolation optimale et un confort maîtrisé, été comme hiver.',
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
    color: '#a39883',
  },
]

export function ExtensionTypes() {
  const [activeType, setActiveType] = useState(extensionTypes[0])
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleMouseEnter = (type: typeof extensionTypes[0]) => {
    setHoveredId(type.id)
    if (type.id !== activeType.id) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveType(type)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
    setActiveType(extensionTypes[0])
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  return (
    <section
      id="extension-types"
      className="relative pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 bg-[#050308] overflow-hidden"
    >
      {/* Background decorations façon accueil/rénovation */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/15 to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary/20 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Nos solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              4 façons d&apos;agrandir votre habitat 
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Chaque projet est unique. Découvrez la solution qui correspond à vos besoins et à votre habitation.
            </p>
          </div>
        </ScrollReveal>

        {/* Type selector tabs - Desktop (hover only, no click) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="hidden lg:flex justify-center gap-2 mb-12"
            onMouseLeave={handleMouseLeave}
          >
            {extensionTypes.map((type) => {
              const Icon = type.icon
              const isHovered = hoveredId === type.id
              return (
                <button
                  key={type.id}
                  type="button"
                  onMouseEnter={() => handleMouseEnter(type)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-500 ${
                    isHovered
                      ? 'bg-white text-[#050308] shadow-xl'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:shadow-xl border border-white/10'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isHovered ? 'text-accent' : 'text-white/60 group-hover:text-accent'
                    }`}
                  />
                  <span className="font-semibold">{type.title}</span>
                  {isHovered && (
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

        {/* Mobile tabs (hover only on touch: tap to show, same logic) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="lg:hidden flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide"
            onMouseLeave={handleMouseLeave}
          >
            {extensionTypes.map((type) => {
              const Icon = type.icon
              const isHovered = hoveredId === type.id
              return (
                <button
                  key={type.id}
                  type="button"
                  onMouseEnter={() => handleMouseEnter(type)}
                  onClick={() => handleMouseEnter(type)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
                    isHovered
                      ? 'bg-white text-[#050308]'
                      : 'bg-white/5 text-white/70'
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
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden group shadow-[0_30px_90px_rgba(0,0,0,0.8)] border border-white/10">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
          <div
            className={`transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <ScrollReveal direction="right" delay={0.3}>
              <div
                className="inline-block w-12 h-1 rounded-full mb-6"
                style={{ backgroundColor: activeType.color }}
              />
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {activeType.title}
              </h3>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                {activeType.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {activeType.features.map((feature, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group"
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"
                      style={{ backgroundColor: activeType.color }}
                    />
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Materials */}
              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-2">Matériaux possibles</p>
                <p className="text-sm text-white/80">{activeType.materials.join(' • ')}</p>
              </div>

              {/* CTA */}
              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: activeType.color }}
              >
               Estimer mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom indicators (mobile tap = show type) */}
        <div className="flex justify-center gap-2 mt-12 lg:hidden">
          {extensionTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => handleMouseEnter(type)}
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

