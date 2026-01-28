'use client'

import React from 'react'
import { Counter } from '@/lib/utils/counter'

interface StatItem {
  value: number
  suffix?: string
  label: string
}

interface StatsLuxuryProps {
  badgeText?: string
  title?: string
  stats?: StatItem[]
  backgroundColor?: string
  dividerColor?: string
  badgeColor?: string
  titleColor?: string
  dividerLineColor?: string
  valueGradientFrom?: string
  valueGradientTo?: string
  labelColor?: string
  labelHoverColor?: string
}

const StatsLuxury: React.FC<StatsLuxuryProps> = ({
  badgeText = 'Performance Metrics',
  title = 'Our Legacy in Numbers',
  stats = [
    { value: 50, suffix: 'M+', label: 'Total Users' },
    { value: 120, suffix: 'k', label: 'Transactions' },
    { value: 99, suffix: '%', label: 'Success Rate' },
    { value: 24, suffix: '/7', label: 'Support' },
  ],
  backgroundColor = '#0a0a0a',
  dividerColor = '#D4AF37',
  badgeColor = '#D4AF37',
  titleColor = '#ffffff',
  dividerLineColor = 'rgba(255,255,255,0.1)',
  valueGradientFrom = '#D4AF37',
  valueGradientTo = '#8a7020',
  labelColor = 'rgba(163, 163, 163, 1)',
  labelHoverColor = '#ffffff',
}) => {
  return (
    <div
      className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div
            className="h-px w-16 sm:w-20 md:w-24 mx-auto mb-4 sm:mb-5 md:mb-6"
            style={{ background: `linear-gradient(to right, transparent, ${dividerColor}, transparent)` }}
          />
          <h2
            className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4"
            style={{ color: badgeColor }}
          >
            {badgeText}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif px-2" style={{ color: titleColor }}>
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative px-2 sm:px-4">
          <div
            className="hidden md:block absolute inset-y-0 left-1/4 w-px"
            style={{ background: `linear-gradient(to bottom, transparent, ${dividerLineColor}, transparent)` }}
          />
          <div
            className="hidden md:block absolute inset-y-0 left-2/4 w-px"
            style={{ background: `linear-gradient(to bottom, transparent, ${dividerLineColor}, transparent)` }}
          />
          <div
            className="hidden md:block absolute inset-y-0 left-3/4 w-px"
            style={{ background: `linear-gradient(to bottom, transparent, ${dividerLineColor}, transparent)` }}
          />

          {stats.map((stat, i) => (
            <div key={i} className="text-center group p-2 sm:p-4 md:p-6 lg:p-8">
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-2 sm:mb-3 md:mb-4 opacity-90 group-hover:scale-110 transition-transform duration-500 ease-out bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${valueGradientFrom}, ${valueGradientTo})`,
                }}
              >
                <Counter to={stat.value} />
                {stat.suffix && <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-1">{stat.suffix}</span>}
              </div>
              <p
                className="uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] md:text-xs font-medium transition-colors duration-200 leading-tight"
                style={{ color: labelColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = labelHoverColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = labelColor
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsLuxury

