'use client'

import React from 'react'

export function Marquee({ text }: { text: string }) {
  return (
    <div className="relative flex overflow-hidden border-b border-border/60 py-3 sm:py-4 bg-muted/30">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite', width: '200%' }}>
        <span className="mx-2 sm:mx-3 md:mx-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-foreground/70 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-foreground/70 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-foreground/70 inline-block">
          {text} —
        </span>
        <span className="mx-2 sm:mx-3 md:mx-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-foreground/70 inline-block">
          {text} —
        </span>
      </div>
    </div>
  )
}
