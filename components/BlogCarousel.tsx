'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  href: string
  image: string
  readTime: string
}

interface BlogCarouselProps {
  posts: BlogPost[]
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
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

    const maxIndex = isMobile ? posts.length - 1 : Math.max(0, posts.length - 3)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, posts.length, isMobile, isMounted])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? posts.length - 1 : Math.max(0, posts.length - 3)
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    const maxIndex = isMobile ? posts.length - 1 : Math.max(0, posts.length - 3)
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
          {posts.map((post, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-2 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index >= currentIndex && index < currentIndex + 3}
                    unoptimized={true}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-charcoal-500">{post.readTime} de leitura</span>
                    <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-sm">
                      <Link href={post.href}>
                        Ler artigo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
        aria-label="Artigo anterior"
      >
        <ChevronLeft className="h-6 w-6 text-charcoal-900" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        aria-label="Próximo artigo"
      >
        <ChevronRight className="h-6 w-6 text-charcoal-900" />
      </button>

      {/* Dots Indicator - Desktop Only */}
      <div className="hidden md:flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
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

    </div>
  )
}
