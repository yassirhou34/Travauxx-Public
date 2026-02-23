'use client'

import React from 'react'

export function Marquee({ text }: { text: string }) {
  return (
    <div className="relative flex overflow-hidden border-b border-[#a39383]/40 py-5 sm:py-6 md:py-7 bg-[#a39383]">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite', width: '200%' }}>
        <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text} —
        </span>
      </div>
    </div>
  )
}
