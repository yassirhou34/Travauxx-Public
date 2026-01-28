'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Users, FileCheck, Clock, Shield, Award, Handshake, Target, Zap } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: 'Interlocuteur unique',
    description: 'Un seul responsable de l\'ensemble du projet. Vous restez concentré sur votre activité.',
    highlight: '1 contact',
  },
  {
    icon: FileCheck,
    title: 'Contrat unique',
    description: 'Un cadre contractuel clair avec engagement sur le budget et les délais.',
    highlight: 'Prix ferme',
  },
  {
    icon: Clock,
    title: 'Délais respectés',
    description: 'Planning précis et tenu. Nous comprenons l\'importance de votre date d\'ouverture.',
    highlight: 'Date garantie',
  },
  {
    icon: Shield,
    title: 'Conformité assurée',
    description: 'Urbanisme, sécurité, accessibilité PMR, normes hygiène : on gère tout.',
    highlight: '100% conforme',
  },
]

const services = [
  { icon: Target, label: 'Écoute de vos besoins et analyse des objectifs' },
  { icon: Zap, label: 'Conception des espaces (plans, 3D, optimisation)' },
  { icon: FileCheck, label: 'Démarches administratives et réglementaires' },
  { icon: Award, label: 'Chiffrage global du projet' },
  { icon: Handshake, label: 'Pilotage des travaux (coordination, planning, suivi)' },
  { icon: Shield, label: 'Réception dans le respect des délais et du budget' },
]

export function WhyActivPro() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sérénité & Efficacité
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Choisir Activ Travaux, c&apos;est faire le choix d&apos;un partenaire unique qui vous libère 
              des contraintes techniques et administratives.
            </p>
          </div>
        </ScrollReveal>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Highlight badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
                    {adv.highlight}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{adv.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Services we provide */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Nous assurons pour vous
                </h3>
                <p className="text-white/60 mb-6">
                  De l&apos;écoute initiale à la réception du chantier, un accompagnement complet 
                  qui couvre toutes les étapes de votre projet professionnel.
                </p>
                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Réseau d&apos;artisans qualifiés
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Pilotage précis
                  </span>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, i) => {
                  const Icon = service.icon
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{service.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

