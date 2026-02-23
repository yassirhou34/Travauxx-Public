'use client'

import { useRef, useEffect } from 'react'

const VIDEO_FILENAME = 'HD ST AT - DELPHINE PORTEU compressed.mp4'

export function VideoBlock() {
  const videoSrc = `/Banquevideos/${encodeURIComponent(VIDEO_FILENAME)}`
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting) return
        video.play().catch(() => {})
        video.muted = false
      },
      { threshold: 0.25, rootMargin: '0px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 80% at 50% 20%, rgba(232,50,99,0.12), transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 80%, rgba(232,50,99,0.06), transparent 45%)
          `,
        }}
      />

      {/* Titre choc – typo géante en arrière-plan */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <p
          className="text-white/[0.03] font-bold tracking-tighter whitespace-nowrap text-[clamp(4rem,18vw,18rem)] leading-none"
          style={{ fontFamily: 'var(--font-serif), serif' }}
        >
          TÉMOIGNAGE
        </p>
      </div>

      {/* Bande diagonale accent – impact visuel */}
      <div
        className="absolute top-0 right-0 w-full h-full max-w-[80vw] sm:max-w-[60vw] opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(232,50,99,0.4) 55%, rgba(232,50,99,0.15) 70%, transparent 85%)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accroche courte et percutante */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent text-xs sm:text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Témoignage client
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Ils nous font
            <br />
            <span className="text-accent">confiance.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto font-light">
            Le retour d&apos;expérience de nos clients en Indre-et-Loire.
          </p>
        </div>

        {/* Bloc vidéo – cadre qui frappe */}
        <div className="relative group">
          {/* Lueur accent au survol – plus visible */}
          <div
            className="absolute -inset-6 rounded-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,50,99,0.2), transparent 65%)',
              filter: 'blur(32px)',
            }}
          />

          {/* Contour épais accent – choc */}
          <div
            className="absolute -inset-[2px] rounded-2xl sm:rounded-[28px] rounded-tl-2xl rounded-br-2xl transition-all duration-300 group-hover:shadow-[0_0_40px_-5px_rgba(232,50,99,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #e83263 0%, #e83263 25%, rgba(232,50,99,0.7) 50%, #e83263 75%, #e83263 100%)',
              boxShadow: '0 0 0 1px rgba(232,50,99,0.3)',
            }}
          />
          <div className="absolute inset-[2px] rounded-2xl sm:rounded-[26px] bg-black" />

          {/* Coins coupés – détail premium */}
          <div className="absolute -top-0.5 -right-0.5 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-2xl z-20 pointer-events-none" />
          <div className="absolute -bottom-0.5 -left-0.5 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-2xl z-20 pointer-events-none" />

          <div className="relative m-[3px] sm:m-[4px] rounded-xl sm:rounded-2xl overflow-hidden bg-black transition-transform duration-300 ease-out group-hover:scale-[1.008]">
            <div
              className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none z-10"
              style={{
                boxShadow: 'inset 0 0 100px 0 rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.06)',
              }}
            />
            <div className="aspect-video w-full relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videoSrc}
                controls
                playsInline
                muted
                loop
                preload="metadata"
                aria-label="Témoignage client - Activ Travaux"
              >
                <track kind="captions" />
                Votre navigateur ne prend pas en charge la lecture de vidéos.
              </video>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-accent/90 text-white text-[10px] font-bold tracking-widest uppercase z-10 shadow-lg">
              HD
            </span>
          </div>

          <p className="mt-6 text-center text-white/50 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
            Témoignage client — Activ Travaux 37
          </p>
        </div>
      </div>
    </section>
  )
}
