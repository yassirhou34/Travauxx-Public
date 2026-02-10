'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, Home, Leaf, Thermometer, Droplets, Wind, Sun, Lightbulb, PaintBucket } from 'lucide-react'

const renovationTypes = [
  {
    id: 'globale',
    title: 'Rénovation globale : la solution idéale',
    shortTitle: 'Globale',
    icon: Home,
    tagline: 'Restructuration complète de vos espaces.',
    description: 'Repensez l’intégralité de votre habitat. Nous garantissons une cohérence technique et esthétique supérieure en une seule intervention. Cette approche globale optimise vos coûts par rapport à des travaux fractionnés. ',
    features: [
      { icon: PaintBucket, label: 'Redistribution des espaces' },
      { icon: Lightbulb, label: 'Électricité aux normes' },
      { icon: Droplets, label: 'Plomberie complète' },
      { icon: Thermometer, label: 'Isolation performante' },
      { icon: Wind, label: 'Ventilation adaptée' },
      { icon: Sun, label: 'Menuiseries & ouvertures' },
    ],
    benefits: [
      'Résultat cohérent et harmonieux',
      'Optimisation des coûts vs travaux fractionnés',
      'Un seul chantier, un seul interlocuteur',
      'Valorisation maximale du bien',
    ],
    forWho: ['Propriétaires occupants', 'Investisseurs locatifs', 'Acquisition à rénover', 'Maison ancienne'],
    image: '/Banqueimages/M7_01325.jpg',
    color: '#e83263',
    gradient: 'from-accent to-accent/80',
  },
  {
    id: 'energetique',
    title: 'Rénovation énergétique',
    shortTitle: 'Énergétique',
    icon: Leaf,
    tagline: 'Performance thermique et économies d\'énergie.',
    description: 'La rénovation énergétique vise à améliorer la performance thermique de votre logement : isolation des murs, toiture et planchers, remplacement des menuiseries, installation d\'un système de chauffage performant et d\'une ventilation adaptée.',
    longDescription: 'C\'est bon pour la planète, bon pour votre confort et bon pour votre porte-monnaie. Une éco-rénovation bien menée peut réduire vos factures d\'énergie de 40 à 70% tout en améliorant significativement votre confort été comme hiver.',
    features: [
      { icon: Thermometer, label: 'Isolation thermique globale' },
      { icon: Sun, label: 'Menuiseries haute performance' },
      { icon: Wind, label: 'VMC double flux' },
      { icon: Leaf, label: 'Chauffage écologique' },
      { icon: Droplets, label: 'Eau chaude solaire' },
      { icon: Lightbulb, label: 'Éclairage LED' },
    ],
    benefits: [
      'Réduction factures -40 à -70%',
      'Confort été comme hiver',
      'Réduction empreinte carbone',
      'Anticipation réglementation',
    ],
    forWho: ['Passoire thermique DPE F/G', 'Maison avant 1975', 'Factures énergie élevées', 'Projet éco-responsable'],
    image: '/Banqueimages/DJI_0087.jpg',
    color: '#a39383',
    gradient: 'from-secondary to-secondary/80',
  },
]

export function RenovationTypes() {
  const [activeType, setActiveType] = useState(renovationTypes[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTypeChange = (type: typeof renovationTypes[0]) => {
    if (type.id === activeType.id) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveType(type)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section
      id="renovation-types"
      className="relative pt-10 sm:pt-12 lg:pt-14 pb-20 sm:pb-28 lg:pb-36 bg-[#050308] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/20 to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/20 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Nos Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              2 approches, 1 objectif
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Améliorer durablement votre cadre de vie. Choisissez l&apos;approche adaptée à votre projet.
            </p>
          </div>
        </ScrollReveal>

        {/* Type selector - Large cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-16">
            {renovationTypes.map((type) => {
              const Icon = type.icon
              const isActive = activeType.id === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => handleTypeChange(type)}
                  onMouseEnter={() => handleTypeChange(type)}
                  className={`group relative p-6 lg:p-8 rounded-3xl text-left transition-all duration-500 overflow-hidden border ${
                    isActive 
                      ? 'bg-white/10 text-white shadow-2xl scale-[1.02] border-white/30' 
                      : 'bg-white/5 text-white/80 hover:bg-white/10 border-white/10'
                  }`}
                >
                  {/* Gradient overlay on active */}
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-90`} />
                  )}
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                      isActive ? 'bg-white/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-white/70'}`} />
                    </div>
                    
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
                      {type.title}
                    </h3>
                    <p className={`text-sm lg:text-base ${isActive ? 'text-white/80' : 'text-white/70'}`}>
                      {type.tagline}
                    </p>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-4 right-4">
                        <ArrowRight className="w-6 h-6 text-white/60" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Detailed content */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Image side */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden group">
              <Image
                src={activeType.image}
                alt={activeType.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* For who badges */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Pour qui ?</p>
                <div className="flex flex-wrap gap-2">
                  {activeType.forWho.map((item, i) => (
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
                style={{ backgroundColor: activeType.color }}
              />
              
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {activeType.title}
              </h3>
              
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                {activeType.description}
              </p>
              
              <p className="text-base text-white/70 mb-6 leading-relaxed">
                {activeType.longDescription}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Avantages clés</h4>
                <div className="flex flex-wrap gap-2">
                  {activeType.benefits.map((benefit, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: activeType.color }}
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {activeType.features.map((feature, i) => {
                  const FeatureIcon = feature.icon
                  return (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group"
                    >
                      <FeatureIcon 
                        className="w-4 h-4 flex-shrink-0 transition-colors"
                        style={{ color: activeType.color }}
                      />
                      <span className="text-xs font-medium text-white/90">{feature.label}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: activeType.color }}
              >
                Démarrer mon projet 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

