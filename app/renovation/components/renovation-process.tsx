'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MessageSquare, Ruler, Calculator, HardHat, CheckCircle, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Premier échange',
    description: 'Discussion de votre projet, de vos envies et de vos contraintes. Visite sur site pour évaluer l\'existant.',
    duration: 'Gratuit',
    color: '#a39383',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Conception',
    description: 'Étude technique, plans, perspectives 3D. Définition précise du projet avec validation à chaque étape.',
    duration: '2-4 semaines',
    color: '#a39383',
  },
  {
    number: '03',
    icon: Calculator,
    title: 'Chiffrage & Contrat',
    description: 'Devis détaillé poste par poste. Engagement contractuel sur le prix ferme et les délais.',
    duration: '1-2 semaines',
    color: '#a39383',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Réalisation',
    description: 'Coordination des corps de métier, suivi qualité, points réguliers. Vous êtes informé à chaque étape.',
    duration: '2-6 mois',
    color: '#a39383',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Réception',
    description: 'Visite de fin de chantier, levée des réserves éventuelles, remise des clés et des documents.',
    duration: 'J-Final',
    color: '#a39383',
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Garanties',
    description: 'Parfait achèvement (1 an), garantie biennale (2 ans), garantie décennale (10 ans).',
    duration: 'Sérénité',
    color: '#a39383',
  },
]

export function RenovationProcess() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#050308] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Un cadre idéal
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Un pilotage technique et contractuel rigoureux pour garantir la maîtrise totale de votre chantier, de la conception à la livraison.
            </p>
          </div>
        </ScrollReveal>

        {/* Process grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="group relative h-full">
                {/* Numéro de fond (gros) */}
                <div 
                  className="absolute -top-2 -left-2 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                {/* Carte sans icône, avec numéro de fond + titre + texte + durée */}
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1">
                  {/* Titre */}
                  <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Badge durée */}
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom summary supprimé */}
      </div>
    </section>
  )
}

