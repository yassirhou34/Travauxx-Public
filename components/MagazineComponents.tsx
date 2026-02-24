'use client'

import React from 'react'

export function Marquee({ text }: { text: string }) {
  return (
    <div className="relative flex overflow-hidden border-b border-[#a39383]/40 py-6 sm:py-7 md:py-8 bg-[#a39383]">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite', width: '200%' }}>
        <span className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text}
        </span>
        <span className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text}
        </span>
        <span className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text}
        </span>
        <span className="mx-4 sm:mx-6 md:mx-8 text-xs sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest text-white/95 inline-block">
          {text}
        </span>
      </div>
    </div>
  )
}
