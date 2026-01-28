'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Leaf, Thermometer, Wallet, Globe, Sun, Snowflake, TrendingDown, ShieldCheck } from 'lucide-react'

const mainBenefits = [
  {
    icon: Thermometer,
    title: 'Confort thermique',
    description: 'Fini les courants d\'air et les pièces froides. Une isolation performante garantit une température homogène dans toute la maison, été comme hiver.',
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
    description: 'Réduisez considérablement vos émissions de CO2. La rénovation énergétique est un acte concret pour lutter contre le réchauffement climatique.',
    color: 'from-accent/90 to-accent/70',
  },
  {
    icon: TrendingDown,
    title: 'Anticipation réglementaire',
    description: 'Les passoires thermiques seront bientôt interdites à la location. Anticipez la réglementation et valorisez votre bien dès maintenant.',
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
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
              La rénovation thermique écologique est devenue une urgence. Elle permet d&apos;atteindre 
              trois objectifs majeurs : <strong className="text-accent">confort</strong>, <strong className="text-accent">économies</strong> et <strong className="text-accent">écologie</strong>.
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

