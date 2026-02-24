'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'
import ElasticGrid from '@/components/ElasticGrid'
import { 
  PenTool, Palette, Users, Lightbulb, Home, Maximize,
  Compass, Calculator, FileCheck, Ruler, ClipboardCheck, Shield
} from 'lucide-react'

const elasticGridFeatures = [
  { title: 'Innovation', desc: 'Convergence de l\'innovation. Des solutions créatives pour sublimer votre habitat.', img: '/Banqueimages/M7_01335.jpg' },
  { title: 'Maîtrise architecturale', desc: 'Volumes, ouvertures, matériaux. Une conception sur-mesure qui s\'intègre à l\'existant.', img: '/Banqueimages/IMG_1718.JPG' },
  { title: 'Rigueur d\'exécution', desc: 'Rigueur d\'exécution sans concession. Planning tenu, qualité des finitions.', img: '/Banqueimages/M7_01319.jpg' },
  { title: 'Conception sur-mesure', desc: 'Plans techniques, bureau d\'études. Le socle de la réussite de votre projet.', img: '/Banqueimages/M7_01323.jpg' },
  { title: 'Projet clé en main', desc: 'De l\'esquisse à la remise des clés. Un interlocuteur unique pour tout piloter.', img: '/Banqueimages/M7_01325.jpg' },
]

const pillars = [
  {
    id: 'architectes',
    title: 'Architectes & Architectes d\'intérieur',
    shortTitle: 'Architectes',
    icon: PenTool,
    color: 'from-[#a39383] to-[#8b8276]',
    bgColor: 'accent',
    description: 'Grâce à nos architectes, dessinateurs et techniciens partenaires, nous vous accompagnons dès les premières étapes de votre projet.',
    features: [
      { icon: Users, title: 'Écoute personnalisée', desc: 'Compréhension de vos usages, envies et mode de vie' },
      { icon: PenTool, title: 'Esquisses créatives', desc: 'Premières ébauches pour explorer les possibilités' },
      { icon: Palette, title: 'Conseils esthétiques', desc: 'Volumes, ouvertures, matériaux, circulation' },
      { icon: Home, title: 'Design d\'intérieur', desc: 'Aménagement optimisé de chaque espace de vie' },
      { icon: Maximize, title: 'Optimisation des espaces', desc: 'Chaque m² exploité intelligemment' },
      { icon: Lightbulb, title: 'Solutions innovantes', desc: 'Idées créatives pour sublimer votre habitat' },
    ],
  },
  {
    id: 'bureau',
    title: 'Bureau d\'études',
    shortTitle: 'Bureau d\'études',
    icon: Compass,
    color: 'from-[#a39383] to-[#c2b6aa]',
    bgColor: 'secondary',
    description: 'Un projet bien conçu, c\'est un chantier bien maîtrisé. La phase de conception est le socle de la réussite technique de votre projet.',
    features: [
      { icon: Compass, title: 'Analyse du bâti', desc: 'Étude de l\'existant et de son potentiel d\'évolution' },
      { icon: Ruler, title: 'Plans techniques', desc: 'Documents précis pour dépôt administratif et chantier' },
      { icon: Calculator, title: 'Estimation budget', desc: 'Chiffrage fiable basé sur les plans détaillés' },
      { icon: FileCheck, title: 'Dossiers administratifs', desc: 'Permis de construire, déclaration préalable' },
      { icon: ClipboardCheck, title: 'Contraintes identifiées', desc: 'Anticipation des difficultés techniques en amont' },
      { icon: Shield, title: 'Conformité garantie', desc: 'Respect des normes et réglementations en vigueur' },
    ],
  },
]

export function ThreePillars() {
  const [activePillar, setActivePillar] = useState(pillars[0])

  return (
    <section id="architecture-pillars" className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background decorations dans la charte sombre/beige */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#a39383]/10 to-transparent opacity-60" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#a39383]/15 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#a39883] text-sm font-semibold tracking-wider uppercase mb-4">
              Notre approche
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trois piliers, une maîtrise
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Convergence de l'innovation prédictive, de la maîtrise architecturale et d'une rigueur d'exécution sans concession.

            </p>
          </div>
        </ScrollReveal>

        {/* Grille élastique – 5 photos + textes (innovation, maîtrise, rigueur, conception, clé en main) */}
        <ScrollReveal direction="up" delay={0.08}>
          <div className="mb-10">
            <ElasticGrid
              features={elasticGridFeatures}
              backgroundColor="#050308"
            />
          </div>
        </ScrollReveal>

        {/* Pillar selector */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              const isActive = activePillar.id === pillar.id
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r text-white shadow-xl scale-105'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  style={isActive ? { backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` } : {}}
                >
                  {isActive && <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${pillar.color}`} />}
                  <div className="relative z-10 flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-[#a39883]'} transition-colors`} />
                    <span className="font-semibold whitespace-nowrap">{pillar.shortTitle}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Active pillar content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Description */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activePillar.color} mb-6 shadow-xl`}>
                {(() => {
                  const Icon = activePillar.icon
                  return <Icon className="w-8 h-8 text-white" />
                })()}
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {activePillar.title}
              </h3>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                {activePillar.description}
              </p>

              {/* Key benefits */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-4">Ce que cela vous apporte :</h4>
                <ul className="space-y-3">
                  {activePillar.id === 'architectes' && (
                    <>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Espaces pensés pour votre mode de vie
                      </li>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Fonctionnalité, confort et élégance
                      </li>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Valorisation esthétique du bien
                      </li>
                    </>
                  )}
                  {activePillar.id === 'bureau' && (
                    <>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Budget estimé avec précision
                      </li>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Contraintes identifiées en amont
                      </li>
                      <li className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a39883]" />
                        Délais plus précis et respectés
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Features grid */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="grid sm:grid-cols-2 gap-4">
              {activePillar.features.map((feature, i) => {
                const FeatureIcon = feature.icon
                return (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a39883]/70 hover:shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activePillar.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

