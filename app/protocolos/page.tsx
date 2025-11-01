'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'
import { ArrowRight, PlayCircle, User, Shield, Calendar, Sparkles } from 'lucide-react'

export default function ProtocolosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral/10 via-white to-peach-200/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Jejum Hormonal® Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              O acompanhamento médico que fez milhares de mulheres voltarem a emagrecer
              <span className="block mt-3 text-coral">com saúde e resultado real</span>
            </h1>
            <p className="text-xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              Criado pelo Dr. Fernando Del Piero, o Jejum Hormonal® Experience é o protocolo clínico que combina ciência hormonal, personalização e acompanhamento médico contínuo ajudando mulheres 40+ a queimar gordura novamente, equilibrar os hormônios e recuperar energia, em formato presencial ou online.
            </p>
          </div>

          {/* Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Block 1 */}
            <Link href="/protocolos/online">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6">
                  <PlayCircle className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Versão Online
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  90 dias de acompanhamento médico e nutricional com tecnologia de inteligência artificial e suporte direto da equipe.
                </p>
                <div className="text-coral font-semibold flex items-center">
                  Conhecer mais <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Block 2 */}
            <Link href="/protocolos/presencial">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Versão Presencial
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Consultas quinzenais com o Dr. Fernando, avaliação corporal 3D e terapias médicas personalizadas.
                </p>
                <div className="text-coral font-semibold flex items-center">
                  Conhecer mais <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Block 3 */}
            <Link href="/protocolos/jejum-hormonal">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Base científica exclusiva
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Metodologia inspirada na Fasting-Mimicking Diet (FMD) e adaptada ao metabolismo feminino 40+.
                </p>
                <div className="text-coral font-semibold flex items-center">
                  Entender o método <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Link href={whatsappLink('Olá! Gostaria de conhecer o Jejum Hormonal® Experience.')}>
                Conheça o Jejum Hormonal® Experience
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher o Jejum Hormonal® Experience?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Protocolo personalizado</h3>
                    <p className="text-gray-600">Desenhado especificamente para o metabolismo da mulher 40+.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Base científica sólida</h3>
                    <p className="text-gray-600">Inspirado na Fasting-Mimicking Diet de Harvard, USC e Stanford.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Acompanhamento médico contínuo</h3>
                    <p className="text-gray-600">Consultas quinzenais ou acompanhamento diário com ajustes personalizados.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-coral/10 to-peach-200/10 rounded-3xl p-8 border border-coral/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Metodologia comprovada
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mais de 10 mil mulheres já transformaram o metabolismo com o Jejum Hormonal® Experience. 
                  Resultado real, sustentável e personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
