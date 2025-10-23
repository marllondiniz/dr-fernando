'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Play } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

export function LeadBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('lead-banner-dismissed')
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('lead-banner-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-champagne-200 to-peach-200 text-charcoal-800">
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Play className="mr-2 h-5 w-5" />
            <p className="text-sm font-medium">
              <strong>Vídeo Exclusivo:</strong> Jejum Hormonal - Protocolo Completo
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="bg-white text-peach-400 hover:bg-champagne-100 hover:shadow-lg hover:shadow-white/25"
            >
              <a href="https://www.youtube.com/watch?v=7pdKn_5r8Is" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                Assistir
              </a>
            </Button>
            <button
              onClick={handleDismiss}
              className="text-charcoal-600 hover:text-charcoal-800 hover:bg-champagne-300 rounded-full p-1 transition-all duration-200 hover:scale-110"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
