'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Users, Network, Shield, Award } from 'lucide-react'

const networkFeatures = [
  { icon: Users, title: 'Activateurs de travaux', color: 'from-secondary to-secondary/80' },
  { icon: Network, title: 'Réseau coordonné', color: 'from-secondary to-secondary/80' },
  { icon: Shield, title: 'Contractant général', color: 'from-secondary to-secondary/80' },
  { icon: Award, title: 'Méthodes éprouvées', color: 'from-secondary to-secondary/80' },
]

const advantages = [
  {
    title: 'Proximité & Réactivité',
    subtitle: 'Un interlocuteur local',
    description: 'Écoute, réactivité et connaissance du terrain.',
  },
  {
    title: 'Force & Structure',
    subtitle: 'Un réseau national',
    description: 'Organisation rigoureuse et fiabilité éprouvée.',
  },
]

export function NetworkSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#050308] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent opacity-70" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/20 to-transparent opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 lg:mb-14">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              VOTRE EXPERT DE PROXIMITÉ 
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              L’expertise Activ Travaux en Indre-et-Loire
            </h2>
            <p className="text-white/75 text-lg max-w-3xl mx-auto">
              Avec Activ Travaux 37, vous profitez d&apos;un interlocuteur unique pour piloter vos travaux de A à Z. Nous sélectionnons les meilleurs artisans du département et nous gérons tout votre chantier pour vous garantir un résultat impeccable, sans stress.
            </p>
          </div>
        </ScrollReveal>

        {/* Network features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-2 backdrop-blur-lg text-center">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform mx-auto`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Best of both worlds — avec visuels */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#372f2d] to-[#1a1413] text-white border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.9)]">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Le meilleur des deux mondes
              </h3>
              <p className="text-white/75 text-lg max-w-2xl mx-auto">
                Ce modèle permet de vous offrir à la fois la proximité d&apos;un interlocuteur local 
                et la force d&apos;un réseau national structuré.
              </p>
            </div>

            {/* Image unique sous "Le meilleur des deux mondes" — image entière, sans encarts latéraux */}
            <div className="relative w-full max-w-xl mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Banqueimages/tile-merchant-ireland-mJNtQr4fSXw-unsplash.jpg"
                alt="Proximité et réseau — réalisation Activ Travaux"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/15 text-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                    <Image
                      src={i === 0 ? '/Banqueimages/tile-merchant-ireland-L525hiR2XeI-unsplash.jpg' : '/Banqueimages/point3d-commercial-imaging-ltd-Tb4bUf6z9gI-unsplash.jpg'}
                      alt={adv.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                  <p className="text-accent text-sm font-medium mb-3">{adv.subtitle}</p>
                  <p className="text-white/70 text-sm">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

