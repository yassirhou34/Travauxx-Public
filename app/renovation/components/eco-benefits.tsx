'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Leaf, Thermometer, Wallet, Globe, Sun, Snowflake, TrendingDown, ShieldCheck } from 'lucide-react'

const mainBenefits = [
  {
    icon: Thermometer,
    title: 'Confort thermique',
    description: 'Température homogène et isolation haute performance pour un confort intérieur constant.',
    color: 'from-accent to-accent/80',
  },
  {
    icon: Wallet,
    title: 'Économies substantielles',
    description: 'Réduisez vos factures d\'énergie de 40 à 70%. L\'investissement initial est rapidement amorti par les économies réalisées chaque année.',
    color: 'from-secondary to-secondary/80',
  },
  {
    icon: Globe,
    title: 'Impact environnemental',
    description: 'Réduction drastique des émissions de carbone et transition vers un habitat durable.',
    color: 'from-accent/90 to-accent/70',
  },
  {
    icon: TrendingDown,
    title: 'Anticipation réglementaire',
    description: 'Mise en conformité aux normes d\'urbanisme et valorisation immédiate de votre patrimoine.',
    color: 'from-secondary to-secondary/80',
  },
]

const comfortItems = [
  { icon: Sun, label: 'Fraîcheur en été', desc: 'L\'isolation protège aussi de la chaleur' },
  { icon: Snowflake, label: 'Chaleur en hiver', desc: 'Plus de sensation de paroi froide' },
  { icon: Leaf, label: 'Air sain', desc: 'Ventilation contrôlée et filtration' },
  { icon: ShieldCheck, label: 'Moins d\'humidité', desc: 'Fini la condensation et les moisissures' },
]

export function EcoBenefits() {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Éco-rénovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rénover, c&apos;est agir
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Maîtrisez votre consommation et optimisez votre confort. Nous transformons votre habitat en une structure durable et économe.

            </p>
          </div>
        </ScrollReveal>

        {/* Main benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainBenefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="group relative p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} mb-5 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Comfort showcase */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Un confort 4 saisons
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Une maison bien isolée et bien ventilée, c&apos;est un confort retrouvé au quotidien.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {comfortItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom stats */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: '40-70%', label: 'Réduction des factures énergie' },
              { value: '4 tonnes', label: 'CO2 économisées / an en moyenne' },
              { value: '2030', label: 'Interdiction location passoires thermiques' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

