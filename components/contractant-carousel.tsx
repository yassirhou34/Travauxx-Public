'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/Banqueimages/IMG.jpg', alt: 'Projet Activ Travaux' },
  { src: '/Banqueimages/IMG_0482.jpg', alt: 'Espace de vie Activ Travaux' },
  {
    src: '/Banqueimages/photo-1604159848821-104723525eb4.avif',
    alt: 'Projet de rénovation haut de gamme',
  },
]

const INTERVAL_MS = 4500

export function ContractantCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>
      {/* Indicateurs */}
      <div className="flex justify-center gap-2 mt-3">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white/80' : 'w-1.5 bg-white/40'
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
