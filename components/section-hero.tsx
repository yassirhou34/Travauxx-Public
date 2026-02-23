'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SectionHeroProps {
  title: string
  subtitle: string
  bullets: string[]
  titleClassName?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export function SectionHero({
  title,
  subtitle,
  bullets,
  titleClassName,
  ctaPrimary,
  ctaSecondary,
}: SectionHeroProps) {
  return (
    <section className="relative bg-[#050308] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 overflow-hidden">
      {/* Animated background elements sur fond sombre */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6 text-balance ${titleClassName ?? 'text-white'}`}>
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 leading-relaxed mb-6 sm:mb-8 md:mb-10 whitespace-pre-line font-light">
            {subtitle}
          </p>

          {/* Bullets */}
          {bullets.length > 0 && (
            <div className="mb-6 sm:mb-8 md:mb-10 space-y-3 sm:space-y-4">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 animate-in fade-in slide-in-from-left-4 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2 sm:mt-3 ring-2 ring-accent/30" />
                  <p className="text-sm sm:text-base md:text-lg text-white/70 font-light">{bullet}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="group">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 group-hover:scale-105 border-0">
                    {ctaPrimary.label}
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="group">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white/20 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white group-hover:scale-105"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
