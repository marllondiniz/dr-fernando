'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react'

interface Service {
  title: string
  subtitle: string
  videoUrl?: string
  thumbnail?: string
  href: string
  icon?: React.ReactNode
}

interface ServicesCarouselProps {
  services: Service[]
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
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

    const maxIndex = isMobile ? services.length - 1 : Math.max(0, services.length - 3)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length, isMobile, isMounted])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? services.length - 1 : Math.max(0, services.length - 3)
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? services.length - 1 : Math.max(0, services.length - 3)
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` 
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0">
              <Link href={service.href}>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 mx-2 h-full flex flex-col group cursor-pointer">
                  {/* Video/Image Thumbnail */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-coral/10 to-peach-200/10">
                    {service.videoUrl ? (
                      <div className="relative h-full w-full">
                        <iframe
                          src={service.videoUrl}
                          className="w-full h-full absolute inset-0"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title={service.title}
                        />
                      </div>
                    ) : service.thumbnail ? (
                      <Image
                        src={service.thumbnail}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="relative h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {service.icon || <PlayCircle className="w-20 h-20 text-coral" />}
                        <div className="absolute bottom-4 right-4 bg-coral rounded-full p-2 shadow-lg">
                          <PlayCircle className="w-6 h-6 text-white" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-3 line-clamp-2 group-hover:text-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 mb-4 flex-grow line-clamp-3">
                      {service.subtitle}
                    </p>
                    <div className="flex items-center text-coral font-semibold group-hover:translate-x-2 transition-transform">
                      Conhecer mais 
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Serviço anterior"
      >
        <ChevronLeft className="h-6 w-6 text-charcoal-900" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Próximo serviço"
      >
        <ChevronRight className="h-6 w-6 text-charcoal-900" />
      </button>

      {/* Dots Indicator - Desktop Only */}
      {services.length > 3 && (
        <div className="hidden md:flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
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

