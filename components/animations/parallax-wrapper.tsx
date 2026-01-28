'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down'
}

export function ParallaxWrapper({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrolled + windowHeight - elementTop) / (elementHeight + windowHeight))
      )
      const translateY = (scrollProgress - 0.5) * speed * 100 * (direction === 'up' ? 1 : -1)

      setOffset(translateY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

