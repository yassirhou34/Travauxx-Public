'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AdvancedRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'blur'
  distance?: number
  once?: boolean
}

export function AdvancedReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 60,
  once = true,
}: AdvancedRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasAnimated) return
            setIsVisible(true)
            if (once) setHasAnimated(true)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once, hasAnimated])

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`,
      willChange: 'opacity, transform, filter',
    }

    switch (direction) {
      case 'up':
        return { ...base, transform: `translateY(${distance}px)` }
      case 'down':
        return { ...base, transform: `translateY(-${distance}px)` }
      case 'left':
        return { ...base, transform: `translateX(${distance}px)` }
      case 'right':
        return { ...base, transform: `translateX(-${distance}px)` }
      case 'scale':
        return { ...base, transform: 'scale(0.9)' }
      case 'blur':
        return { ...base, filter: 'blur(10px)', transform: `translateY(${distance / 2}px)` }
      case 'fade':
        return base
      default:
        return base
    }
  }

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    filter: 'blur(0)',
    transition: `all ${duration}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`,
    willChange: 'opacity, transform, filter',
  })

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  )
}

