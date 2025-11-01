'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) return ''
    
    switch (direction) {
      case 'up':
        return 'animate-slide-in-up'
      case 'down':
        return 'animate-slide-in-up'
      case 'left':
        return 'animate-slide-in-left'
      case 'right':
        return 'animate-slide-in-right'
      default:
        return 'animate-slide-in-up'
    }
  }

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}
