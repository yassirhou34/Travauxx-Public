'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX } from 'lucide-react'

export function HeroVideo() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  // Démarrer en muet : les navigateurs bloquent le son sans clic. Un clic = activer le son.
  const [isMuted, setIsMuted] = useState(true)
  const [hintHidden, setHintHidden] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Lancer la vidéo dès que possible (au montage et après un court délai pour le premier chargement)
    const tryPlay = () => {
      const video = videoRef.current
      if (video) video.play().catch(() => {})
    }
    tryPlay()
    const t = setTimeout(tryPlay, 150)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const videoParallax = scrollY * 0.5

  return (
    <section
      className="relative -mt-16 sm:-mt-20 pt-16 sm:pt-20 min-h-[100vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain sm:object-cover object-center"
        src={`/Banquevideos/${encodeURIComponent('Reveal-Signature-v2 (1) compressed.mp4')}`}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onCanPlay={() => videoRef.current?.play().catch(() => {})}
        onLoadedData={() => videoRef.current?.play().catch(() => {})}
        style={{
          transform: `translateY(${videoParallax}px) scale(${isMobile ? 1 : 1.1})`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40"
        style={{ opacity: Math.min(1, 0.8 + scrollY * 0.001) }}
      />
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

      {/* Message : le son est bloqué par le navigateur jusqu'à un clic */}
      {isMuted && !hintHidden && (
        <button
          type="button"
          onClick={() => { setIsMuted(false); setHintHidden(true) }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/25 hover:bg-black/15 transition-colors"
          aria-label="Activer le son"
        >
          <span className="px-5 py-3 rounded-full bg-white/95 text-black text-sm font-semibold shadow-xl border border-white/30">
            Cliquez pour activer le son
          </span>
        </button>
      )}

      {/* Bouton désactiver / activer le son */}
      <button
        type="button"
        onClick={() => { setIsMuted((m) => !m); if (isMuted) setHintHidden(true) }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 hover:bg-black/70 text-white/90 hover:text-white text-xs sm:text-sm transition-colors border border-white/20"
        aria-label={isMuted ? 'Activer le son' : 'Désactiver le son'}
      >
        {isMuted ? (
          <>
            <Volume2 className="w-4 h-4" />
            <span>Activer le son</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4" />
            <span>Désactiver le son</span>
          </>
        )}
      </button>

      {/* Indicateur de scroll uniquement sur la vidéo – reste dans cette partie */}
      <div
        className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-light animate-pulse-subtle">
            DÉFILEZ POUR EXPLORER
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

/** Bloc dédié sous la vidéo : badge, titre, texte, pills, boutons */
export function HeroContentBlock() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#050308]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-white/70 text-xs font-medium">Indre-et-Loire</span>
          </div>
        </div>
        <div className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block">Rénovation globale</span>
            <span className="block mt-2 text-[#a39383]">clé en main</span>
          </h1>
        </div>
        <div className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Un interlocuteur unique, un prix annoncé, un planning respecté.
          </p>
        </div>
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {['Contrat unique', 'Prix ferme', 'Délais garantis'].map((point, i) => (
            <div key={i} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/80 text-xs font-medium">{point}</span>
            </div>
          ))}
        </div>
        <div className={`flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Link href="/concevoir-mon-projet">
            <Button className="group relative bg-[#a39383] hover:bg-[#8b8276] text-white font-bold px-10 py-7 text-lg sm:text-xl rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.7)] hover:scale-110 overflow-hidden border-2 border-[#c2b6aa] shadow-xl">
              <span className="relative z-10 flex items-center gap-3">
                Lancer mon projet
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </Link>
          <Link href="/realisations">
            <Button
              variant="outline"
              className="group relative border-3 border-white/70 text-white hover:bg-white/20 font-bold px-10 py-7 text-lg sm:text-xl rounded-full transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-110 shadow-xl shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-3">Voir nos réalisations</span>
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

