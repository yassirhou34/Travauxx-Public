'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Home, Briefcase } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="relative pt-2 sm:pt-3 lg:pt-4 pb-1 sm:pb-2 lg:pb-3 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Parlons de<br />votre projet<span className="text-accent">.</span>
              </h2>
              
              <p className="text-white/70 text-lg mb-6">
                Un premier échange gratuit pour comprendre vos besoins et vous proposer 
                la meilleure approche pour votre projet.
              </p>

              {/* CTA */}
              <div className="flex justify-center mb-6">
                <Link href="/concevoir-mon-projet">
                  <Button className="w-full sm:w-auto group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center">
                    <span className="inline-flex items-center justify-center">Concevoir mon projet</span>
                  </Button>
                </Link>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/renovation" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                  <Home className="w-4 h-4" />
                  Rénovation
                </Link>
                <Link href="/extension" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                  <Home className="w-4 h-4" />
                  Extension
                </Link>
                <Link href="/locaux-professionnels" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                  <Briefcase className="w-4 h-4" />
                  Locaux pro
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust indicators */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Interlocuteur local
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

