'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { FileText, Scale, MapPin, Clock } from 'lucide-react'

const demarchesInfo = [
  {
    icon: FileText,
    title: 'Déclaration préalable',
    description: 'Pour les extensions de moins de 20m² (ou 40m² en zone urbaine avec PLU).',
    details: 'Délai d\'instruction : environ 1 mois. Document simplifié à déposer en mairie.',
    required: true,
  },
  {
    icon: Scale,
    title: 'Permis de construire',
    description: 'Pour les extensions de plus de 20m² (ou 40m² selon zones).',
    details: 'Délai d\'instruction : 2 à 3 mois. Dossier complet avec plans d\'architecte si >150m² total.',
    required: true,
  },
  {
    icon: MapPin,
    title: 'Plan Local d\'Urbanisme (PLU)',
    description: 'Règles spécifiques à votre commune : emprise au sol, hauteur, distances.',
    details: 'Nous vérifions systématiquement la conformité de votre projet avec le PLU local.',
    required: true,
  },
  {
    icon: Clock,
    title: 'Délais à prévoir',
    description: 'De 2 à 4 mois pour les démarches administratives complètes.',
    details: 'Nous anticipons ces délais dès le début du projet pour un planning réaliste.',
    required: false,
  },
]

export function DemarchesSection() {
  return (
    <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 bg-[#050308] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 lg:mb-12">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              Démarches administratives
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              On s&apos;occupe de tout
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Tout projet d’extension est encadré par des règles d’urbanisme strictes. Nous assurons la gestion intégrale
              de vos formalités pour garantir la viabilité de votre dossier et le respect des normes locales.
            </p>
          </div>
        </ScrollReveal>

        {/* Detailed info grid – 4 cards same size, alignées */}
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 mb-16 items-stretch">
          {demarchesInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a39883] hover:shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#a39883]/15 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#a39883]" />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0 text-left">
                    <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 mb-2">{item.description}</p>
                    <p className="text-white/60 text-sm mt-auto">{item.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

