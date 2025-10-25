'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink } from '@/lib/utils'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { ProtocolModal } from '@/components/ProtocolModal'

const jejumHormonal = {
  title: 'Jejum Hormonal',
  subtitle: 'Otimização hormonal através do jejum estratégico',
  description: 'O Jejum Hormonal é uma abordagem científica que utiliza o jejum estratégico para otimizar a produção e regulação de hormônios essenciais como insulina, cortisol, hormônio do crescimento e hormônios sexuais.',
  benefits: [
    'Otimização da sensibilidade à insulina',
    'Regulação do cortisol e estresse',
    'Aumento do hormônio do crescimento',
    'Melhora dos hormônios sexuais',
    'Redução da inflamação sistêmica'
  ],
  forWho: [
    'Pessoas com resistência à insulina',
    'Quem busca otimização hormonal',
    'Pessoas com desequilíbrios hormonais',
    'Atletas que buscam performance'
  ],
  safety: [
    'Avaliação hormonal completa',
    'Protocolo personalizado por gênero',
    'Monitoramento de marcadores hormonais',
    'Acompanhamento médico especializado'
  ],
  whatsappMessage: 'Olá! Gostaria de saber mais sobre o protocolo de Jejum Hormonal.'
}

const saudeHormonal = {
  title: 'Saúde Hormonal',
  subtitle: 'Equilíbrio hormonal para todas as fases da vida',
  description: 'Abordagem completa para equilíbrio hormonal, incluindo menopausa, andropausa, distúrbios da tireoide e otimização metabólica. Protocolo personalizado baseado em evidências científicas.',
  benefits: [
    'Equilíbrio hormonal completo',
    'Melhora da energia e disposição',
    'Otimização do sono e humor',
    'Redução de sintomas da menopausa/andropausa',
    'Melhora da função tireoidiana'
  ],
  forWho: [
    'Mulheres na menopausa',
    'Homens com andropausa',
    'Pessoas com distúrbios da tireoide',
    'Quem busca equilíbrio hormonal'
  ],
  safety: [
    'Avaliação hormonal completa',
    'Estratégias nutricionais específicas',
    'Exercícios adaptados para cada fase',
    'Suplementação baseada em evidências'
  ],
  whatsappMessage: 'Olá! Gostaria de saber mais sobre o protocolo de Saúde Hormonal.'
}

const emagrecimento = {
  title: 'Emagrecimento Inteligente',
  subtitle: 'Perda de peso sustentável e eficaz',
  description: 'Emagrecimento que funciona a longo prazo, baseado na ciência do metabolismo e adaptado para sua realidade.',
  benefits: [
    'Aceleração do metabolismo',
    'Quebra de platôs de peso',
    'Manutenção dos resultados',
    'Melhora da composição corporal',
    'Aumento da energia'
  ],
  forWho: [
    'Pessoas que não conseguem emagrecer',
    'Quem está em platô de peso',
    'Pessoas com metabolismo lento',
    'Quem busca resultados sustentáveis'
  ],
  safety: [
    'Avaliação metabólica completa',
    'Protocolo personalizado',
    'Monitoramento contínuo',
    'Acompanhamento nutricional'
  ],
  whatsappMessage: 'Olá! Gostaria de saber mais sobre o protocolo de Emagrecimento Inteligente.'
}

export default function ProtocolosPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const getProtocolData = (protocol: string) => {
    switch (protocol) {
      case 'jejum-hormonal':
        return jejumHormonal
      case 'saude-hormonal':
        return saudeHormonal
      case 'emagrecimento':
        return emagrecimento
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Protocolos Especializados
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto px-4">
              Metodologias baseadas em evidências científicas para resultados reais e sustentáveis. 
              Cada protocolo é personalizado para sua realidade e objetivos.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-sm sm:text-base px-6 py-3">
                <Link href={whatsappLink('Olá! Gostaria de saber mais sobre os protocolos.')}>
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Agendar consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protocolos Cards */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Jejum Hormonal Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/Jejum Hormonal.jpeg"
                  alt="Jejum Hormonal"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <CardHeader className="flex-grow px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-lg sm:text-xl">{jejumHormonal.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{jejumHormonal.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-gray-600 flex-grow text-sm sm:text-base leading-relaxed">{jejumHormonal.description}</p>
                <Button 
                  onClick={() => setActiveModal('jejum-hormonal')}
                  className="w-full bg-coral hover:bg-coral/90 text-white -mt-24 sm:-mt-32 text-sm sm:text-base py-2 sm:py-3"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Saúde Hormonal Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/Saúde Hormonal.jpeg"
                  alt="Saúde Hormonal"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <CardHeader className="flex-grow px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-lg sm:text-xl">{saudeHormonal.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{saudeHormonal.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-gray-600 flex-grow text-sm sm:text-base leading-relaxed">{saudeHormonal.description}</p>
                <Button 
                  onClick={() => setActiveModal('saude-hormonal')}
                  className="w-full bg-coral hover:bg-coral/90 text-white -mt-24 sm:-mt-32 text-sm sm:text-base py-2 sm:py-3"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Emagrecimento Card */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/emagrecimento-inteligente.avif"
                  alt="Emagrecimento Inteligente"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <CardHeader className="flex-grow px-4 sm:px-6 pt-4 sm:pt-6">
                <CardTitle className="text-lg sm:text-xl">{emagrecimento.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{emagrecimento.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-gray-600 flex-grow text-sm sm:text-base leading-relaxed">{emagrecimento.description}</p>
                <Button 
                  onClick={() => setActiveModal('emagrecimento')}
                  className="w-full bg-coral hover:bg-coral/90 text-white -mt-24 sm:-mt-32 text-sm sm:text-base py-2 sm:py-3"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeModal && getProtocolData(activeModal) && (
        <ProtocolModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          protocol={getProtocolData(activeModal)!}
        />
      )}
    </div>
  )
}