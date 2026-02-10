'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MessageSquare, Search, PenTool, Box, FileCheck, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Écoute & compréhension',
    description: 'Nous prenons le temps de vous écouter pour comprendre vos usages, vos envies, votre mode de vie et vos contraintes.',
    details: ['Besoins fonctionnels', 'Budget indicatif', 'Contraintes du site'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Analyse du bâti',
    description: 'Étude approfondie de l\'existant : structure, potentiel d\'évolution, contexte urbanistique et réglementaire.',
    details: ['Relevé précis', 'Étude PLU', 'Diagnostic technique'],
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Esquisses & créativité',
    description: 'Premières ébauches et propositions créatives. Exploration des possibilités avec variantes comparatives.',
    details: ['Plans d\'intention', 'Variantes', 'Conseils matériaux'],
  },
  {
    number: '04',
    icon: Box,
    title: 'Modélisation 3D',
    description: 'Visualisation réaliste de votre projet. Immergez-vous dans vos futurs espaces avant même le premier coup de pioche.',
    details: ['Vues 3D réalistes', 'Visite virtuelle', 'Simulation lumière'],
  },
  {
    number: '05',
    icon: FileCheck,
    title: 'Plans techniques',
    description: 'Documents précis et complets pour le dépôt administratif et la réalisation du chantier.',
    details: ['Plans d\'exécution', 'Coupes & détails', 'Dossier complet'],
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Lancement projet',
    description: 'Validation finale, chiffrage définitif et démarrage du chantier. Votre projet prend vie.',
    details: ['Devis validé', 'Planning établi', 'Travaux lancés'],
  },
]

export function ConceptionProcess() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#050308]">
      {/* Gradient background sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-[#050308] to-[#050308]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#a39883]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block text-[#a39883] text-sm font-semibold tracking-wider uppercase mb-4">
              De l&apos;idée à l&apos;esquisse
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Audit & analyse structurelle
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Chaque intervention repose sur un diagnostic technique rigoureux. Nous définissons les jalons critiques pour sécuriser votre investissement.

            </p>
          </div>
        </ScrollReveal>

        {/* Process steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#a39883]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#a39883]/25">
                    {/* Number */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#a39883] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#a39883]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#a39883]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2 text-white/55 text-xs">
                          <span className="w-1 h-1 rounded-full bg-[#a39883]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom callout */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-[#a39883]/15 to-[#a39883]/5 backdrop-blur-sm border border-[#a39883]/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Un projet bien conçu, c&apos;est un chantier bien maîtrisé
                </h3>
                <p className="text-white/70">
                  La phase de conception est le socle de la réussite technique. Elle permet d&apos;anticiper 
                  les contraintes, de prévenir les imprévus et de garantir des délais plus précis.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '90%', label: 'des imprévus évités' },
                  { value: '+30%', label: 'de précision budget' },
                  { value: '100%', label: 'conformité réglementaire' },
                  
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-[#a39883] mb-1">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

