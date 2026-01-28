'use client'

import { ReactNode } from 'react'
import { AdvancedReveal } from './advanced-reveal'

interface StaggerContainerProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  delay?: number
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  delay = 0,
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AdvancedReveal
          key={index}
          delay={delay + index * staggerDelay}
          direction={direction}
          duration={0.8}
        >
          {child}
        </AdvancedReveal>
      ))}
    </div>
  )
}

