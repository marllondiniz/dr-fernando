'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { X, CheckCircle, ArrowRight } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'
import Link from 'next/link'

interface ProtocolModalProps {
  isOpen: boolean
  onClose: () => void
  protocol: {
    title: string
    subtitle: string
    description: string
    benefits?: string[]
    forWho?: string[]
    safety?: string[]
    metabolism?: string[]
    antiPlateau?: string[]
    maintenance?: string[]
    phases?: string[]
    results?: string[]
    whatsappMessage: string
  }
}

export function ProtocolModal({ isOpen, onClose, protocol }: ProtocolModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">{protocol.title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{protocol.subtitle}</h3>
            <p className="text-gray-600 leading-relaxed">{protocol.description}</p>
          </div>

          {protocol.benefits && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefícios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {protocol.forWho && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Para Quem</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.forWho.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {protocol.safety && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Segurança</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.safety.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {protocol.metabolism && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Aceleração Metabólica</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.metabolism.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {protocol.antiPlateau && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Anti-Platô</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.antiPlateau.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {protocol.maintenance && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Manutenção</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {protocol.maintenance.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-gray-200">
            <Button asChild size="lg" className="w-full bg-coral hover:bg-coral/90 text-white">
              <Link href={whatsappLink(protocol.whatsappMessage)}>
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
