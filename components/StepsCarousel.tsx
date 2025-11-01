'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string | React.ReactNode
}

interface StepsCarouselProps {
  steps: Step[]
}

export function StepsCarousel({ steps }: StepsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }
    
    setIsMounted(true)
    checkMobile()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return

    const maxIndex = isMobile ? steps.length - 1 : Math.max(0, steps.length - 3)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, steps.length, isMobile, isMounted])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? steps.length - 1 : Math.max(0, steps.length - 3)
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? steps.length - 1 : Math.max(0, steps.length - 3)
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl mb-16">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
          }}
        >
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border-t-4 border-coral hover:shadow-2xl transition-all duration-300 mx-2">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6 text-charcoal-900" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Próximo"
      >
        <ChevronRight className="h-6 w-6 text-charcoal-900" />
      </button>

      {/* Dots Indicator - Desktop Only */}
      {steps.length > 3 && (
        <div className="hidden md:flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(steps.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'bg-coral scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

