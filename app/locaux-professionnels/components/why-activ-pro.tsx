'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Users, FileCheck, Clock, Shield, Award, Handshake, Target, Zap } from 'lucide-react'

const advantages = [
  { icon: Users, title: 'Interlocuteur unique', highlight: '1 contact' },
  { icon: FileCheck, title: 'Contrat unique', highlight: 'Prix ferme' },
  { icon: Clock, title: 'Délais respectés', highlight: 'Date garantie' },
  { icon: Shield, title: 'Conformité assurée', highlight: '100% conforme' },
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
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#050308]">
      {/* Fond dans la charte sombre/beige */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#050308] to-[#050308]" />

      {/* Orbes animés */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#a39383]/15 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Motif en points léger */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#a39383] text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sérénité & efficacité
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Activ Travaux assume la responsabilité globale de votre chantier professionnel. Nous neutralisons vos contraintes
              techniques et administratives pour sécuriser votre investissement et vos dates d&apos;ouverture.
            </p>
          </div>
        </ScrollReveal>

        {/* Avantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#a39383]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/60">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#a39383] to-[#8b8276] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-[#a39383]/20 text-[#f5f0ea] text-xs font-semibold mb-3">
                    {adv.highlight}
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold text-white">{adv.title}</h3>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Services assurés */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#121212] via-[#050308] to-[#121212] backdrop-blur-sm border border-white/10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a39383]/15 border border-[#a39383]/40 mb-6">
                  <Shield className="w-4 h-4 text-[#f5f0ea]" />
                  <span className="text-white/85 text-sm font-medium">Pilotage global clé en main</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Nous assurons pour vous</h3>
                <p className="text-white/70 mb-6">
                  De l&apos;écoute initiale à la réception du chantier, vous bénéficiez d&apos;un accompagnement complet qui couvre
                  toutes les étapes de votre projet professionnel, dans un cadre contractuel maîtrisé.
                </p>
                <div className="flex items-center gap-4 text-white/55 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Réseau d&apos;entreprises qualifiées
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    Pilotage précis des délais
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, i) => {
                  const Icon = service.icon
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5 text-[#a39383] flex-shrink-0 mt-0.5" />
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

