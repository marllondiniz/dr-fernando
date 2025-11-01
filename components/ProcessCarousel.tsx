'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

interface ProcessCarouselProps {
  steps: ProcessStep[]
  ctaText?: string
  ctaHref?: string
}

export function ProcessCarousel({ steps, ctaText, ctaHref }: ProcessCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }
    
    checkMobile()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div className="relative">
      {/* Steps Container */}
      <div className="relative overflow-x-auto pb-16 scrollbar-hide">
        <div className="flex min-w-max gap-6 md:gap-8 px-4 md:px-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] md:w-[300px] relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-coral h-full flex flex-col">
                <div className="flex flex-col items-center text-center flex-grow">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-charcoal-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line - Only between steps */}
              {index < steps.length - 1 && !isMobile && (
                <div className="absolute top-24 -right-4 w-8 h-8 flex items-center justify-center z-10 pointer-events-none bg-white rounded-full">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-coral rounded-full animate-pulse"></div>
                    <ArrowRight className="w-5 h-5 text-coral ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      {ctaText && (
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Link href={ctaHref || '#'}>
              {ctaText}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
