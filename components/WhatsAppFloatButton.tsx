'use client'

import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink('Olá! Gostaria de saber mais sobre os serviços do Dr. Fernando.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-coral hover:bg-coral/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-coral/25 transition-all duration-300 hover:scale-110 active:scale-95 hover:rotate-3"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
