'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroVideo() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: '10%', top: '20%', delay: '0s', duration: '3s' },
    { left: '85%', top: '15%', delay: '0.5s', duration: '4s' },
    { left: '25%', top: '60%', delay: '1s', duration: '3.5s' },
    { left: '70%', top: '55%', delay: '1.5s', duration: '4.5s' },
    { left: '45%', top: '35%', delay: '0.8s', duration: '3.2s' },
    { left: '15%', top: '75%', delay: '1.2s', duration: '4.2s' },
    { left: '90%', top: '80%', delay: '0.3s', duration: '3.8s' },
    { left: '55%', top: '90%', delay: '1.8s', duration: '4s' },
  ]

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parallax effect for video
  const videoParallax = scrollY * 0.5
  const contentParallax = scrollY * 0.3

  // Text reveal based on scroll
  const textOpacity = Math.max(0, 1 - scrollY * 0.004)
  const textTranslate = Math.min(0, -scrollY * 0.2)

  return (
    <section 
      ref={sectionRef}
      className="relative -mt-16 sm:-mt-20 pt-16 sm:pt-20 min-h-[100vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video background with parallax */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={`/Banquevideos/${encodeURIComponent('Reveal-Signature-v2 (1) compressed.mp4')}`}
        autoPlay
        loop
        muted
        playsInline
        style={{
          transform: `translateY(${videoParallax}px) scale(1.1)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Gradient overlay with dynamic opacity */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40"
        style={{
          opacity: Math.min(1, 0.8 + scrollY * 0.001),
        }}
      />

      {/* Subtle background particles - only render on client to avoid hydration mismatch */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay,
                animationDuration: pos.duration,
              }}
            />
          ))}
        </div>
      )}

      {/* Content overlay */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslate}px)`,
        }}
      >
        {/* Top badge - simplified */}
        <div 
          className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-white/70 text-xs font-medium">
              Indre-et-Loire
            </span>
          </div>
        </div>

        {/* Main title with word-by-word animation */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block overflow-hidden">
              <span 
                className="inline-block"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.3s',
                }}
              >
                Rénovation globale
              </span>
            </span>
            <span className="block overflow-hidden">
              <span 
                className="inline-block text-[#a39383]"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.5s',
                }}
              >
                clé en main
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle with fade in */}
        <div 
          className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Un interlocuteur unique, un prix annoncé, un planning respecté.
          </p>
        </div>

        {/* Key points - simplified */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            'Contrat unique',
            'Prix ferme',
            'Délais garantis',
          ].map((point, i) => (
            <div
              key={i}
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + i * 0.1}s both`,
              }}
            >
              <span className="text-white/80 text-xs font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* CTAs with enhanced visibility */}
        <div 
          className={`flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center mb-24 sm:mb-32 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Link href="/concevoir-mon-projet">
            <Button className="group relative bg-[#a39383] hover:bg-[#8b8276] text-white font-bold px-10 py-7 text-lg sm:text-xl rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.7)] hover:scale-110 overflow-hidden border-2 border-[#c2b6aa] shadow-xl shadow-[rgba(0,0,0,0.6)]">
              <span className="relative z-10 flex items-center gap-3">
                Lancer mon projet
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              {/* léger highlight blanc au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </Link>
          <Link href="/realisations">
            <Button 
              variant="outline" 
              className="group relative border-3 border-white/70 text-white hover:bg-white/20 font-bold px-10 py-7 text-lg sm:text-xl rounded-full transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-110 shadow-xl shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Voir nos réalisations
              </span>
              {/* Permanent glow effect for visibility */}
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50" />
            </Button>
          </Link>
        </div>

        {/* Scroll indicator - positioned lower to be visible below buttons */}
        <div 
          className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-light">
              DÉFILEZ POUR EXPLORER
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

