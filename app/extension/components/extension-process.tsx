'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Search, Ruler, FileCheck, HardHat, Key } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Étude & faisabilité',
    description: 'Visite sur site, analyse des contraintes, étude du PLU et des règles d\'urbanisme.',
    duration: '1-2 semaines',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Conception sur-mesure',
    description: 'Plans, perspectives 3D, choix des matériaux. Votre projet prend forme.',
    duration: '2-4 semaines',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Démarches',
    description: 'Déclaration préalable ou permis de construire. On s\'occupe de tout.',
    duration: '2-3 mois',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Réalisation',
    description: 'Coordination des corps de métiers, suivi qualité, points réguliers.',
    duration: '2-4 mois',
  },
  {
    number: '05',
    icon: Key,
    title: 'Livraison',
    description: 'Réception des travaux, garanties, votre nouvel espace est prêt.',
    duration: 'Clé en main',
  },
]

export function ExtensionProcess() {
  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-20 sm:pb-28 lg:pb-36 bg-[#050308] overflow-hidden">
      {/* Subtle background sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-[#050308] to-[#050308]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block text-[#a39883] text-sm font-semibold tracking-wider uppercase mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Un parcours sécurisé de A à Z
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Un accompagnement technique et administratif complet, de la première visite à la remise des clés de votre extension.
            </p>
          </div>
        </ScrollReveal>

        {/* Process timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#a39883]/60 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Number badge */}
                    <div className="absolute -top-3 text-7xl font-bold text-[#a39883]/15 group-hover:text-[#a39883]/30 transition-colors">
                      {step.number}
                    </div>
                    
                    {/* Icon circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[#050308] border-2 border-[#a39883]/40 group-hover:border-[#a39883] flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#a39883]/30">
                      <Icon className="w-8 h-8 text-white/70 group-hover:text-[#a39883] transition-colors" />
                    </div>

                    {/* Content - zone titre à hauteur fixe pour aligner les sous-textes */}
                    <div className="h-[3.5rem] flex flex-col justify-end">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#a39883] transition-colors leading-tight pb-1">
                        {step.title}
                      </h3>
                      <div className="mt-3 h-0.5 w-12 mx-auto rounded-full bg-[#a39883] mb-2 shrink-0" />
                    </div>
                    <p className="text-sm text-white/70 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#a39883]/15 text-[#a39883] text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Process timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                <div className="relative flex gap-6 items-start">
                  {/* Vertical line */}
                  {i !== steps.length - 1 && (
                    <div className="absolute left-[27px] top-16 w-0.5 h-full bg-gradient-to-b from-[#a39883]/60 to-transparent" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-[#050308] border-2 border-[#a39883] flex items-center justify-center shadow-lg shadow-[#a39883]/30">
                    <Icon className="w-6 h-6 text-[#a39883]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#a39883] font-bold">{step.number}</span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#a39883]/15 text-[#a39883] text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Summary stats */}
       
      </div>
    </section>
  )
}

