'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const HERO_IMAGES = [
  { src: '/Banqueimages/M7_01325.jpg', alt: 'Rénovation maison' },
  { src: '/Banqueimages/M7_01321.jpg', alt: 'Chantier Activ Travaux' },
  { src: '/Banqueimages/M7_01323.jpg', alt: 'Réalisation extension' },
  { src: '/Banqueimages/M7_01330.jpg', alt: 'Aménagement intérieur' },
  { src: '/Banqueimages/DSC09109.jpg', alt: 'Projet clé en main' },
]

const AUTOPLAY_DELAY_MS = 4500
const FADE_DURATION_MS = 400

export function HeroSwiper() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, AUTOPLAY_DELAY_MS)
    return () => clearInterval(t)
  }, [])

  const goTo = (i: number) => setIndex(i)

  return (
    <div className="relative w-[120%] -ml-[10%] min-w-0 rounded-2xl overflow-hidden border border-black/5 shadow-2xl group" style={{ aspectRatio: '1 / 1.15' }}>
      <div className="absolute inset-0 rounded-2xl">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 overflow-hidden transition-opacity duration-300 ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${FADE_DURATION_MS}ms`,
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1100}
              height={1100}
              className="w-full h-full object-cover select-none"
              style={{ transform: 'scale(1.35)' }}
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority
              loading="eager"
            />
          </div>
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              i === index ? 'w-6 bg-accent' : 'w-2 bg-white/60 hover:bg-white/90',
            )}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-b-2xl" />
    </div>
  )
}
