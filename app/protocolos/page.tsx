import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { 
  Clock, 
  Shield, 
  Zap, 
  TrendingDown,
  Heart,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Play
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Protocolos Médicos - Dr. Fernando Del Piero',
  description: 'Conheça os protocolos especializados do Dr. Fernando: Jejum Hormonal, Saúde Hormonal e Emagrecimento Inteligente. Baseados em evidências científicas.',
  path: '/protocolos'
})

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
  videoUrl: 'https://www.youtube.com/watch?v=7pdKn_5r8Is'
}

const saudeHormonal = {
  title: 'Saúde Hormonal',
  subtitle: 'Equilíbrio hormonal para todas as fases da vida',
  description: 'Abordagem completa para equilíbrio hormonal, incluindo menopausa, andropausa, distúrbios da tireoide e otimização metabólica. Protocolo personalizado baseado em evidências científicas.',
  symptoms: [
    'Desequilíbrios hormonais diversos',
    'Alterações de humor e energia',
    'Dificuldade para dormir',
    'Ganho de peso e resistência à insulina',
    'Baixa libido e performance'
  ],
  approach: [
    'Avaliação hormonal completa',
    'Estratégias nutricionais específicas',
    'Exercícios adaptados para cada fase',
    'Suplementação baseada em evidências',
    'Manejo do estresse e sono'
  ],
  lifestyle: [
    'Alimentação anti-inflamatória',
    'Exercícios de força e cardio',
    'Técnicas de relaxamento',
    'Otimização do sono',
    'Redução de toxinas ambientais'
  ]
}

const emagrecimento = {
  title: 'Emagrecimento Inteligente',
  subtitle: 'Perda de peso sustentável e eficaz',
  description: 'Emagrecimento que funciona a longo prazo, baseado na ciência do metabolismo e adaptado para sua realidade.',
  metabolism: [
    'Avaliação da taxa metabólica',
    'Identificação de desequilíbrios hormonais',
    'Otimização da função tireoidiana',
    'Melhora da sensibilidade à insulina',
    'Regulação do cortisol'
  ],
  antiPlateau: [
    'Variação estratégica de calorias',
    'Ciclagem de carboidratos',
    'Refeeds programados',
    'Exercícios metabólicos',
    'Monitoramento de adaptações'
  ],
  maintenance: [
    'Transição gradual para manutenção',
    'Estratégias de adesão a longo prazo',
    'Monitoramento contínuo',
    'Ajustes baseados na resposta',
    'Suporte psicológico'
  ]
}

export default function ProtocolosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Protocolos Especializados
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Metodologias baseadas em evidências científicas para resultados reais e sustentáveis. 
              Cada protocolo é personalizado para sua realidade e objetivos.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-peach-300 hover:bg-peach-300/90">
                <Link href={whatsappLink('Olá! Gostaria de saber mais sobre os protocolos.')}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jejum Hormonal */}
      <section id="jejum-hormonal" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                {jejumHormonal.title}
              </h2>
              <p className="text-lg text-primary font-semibold mb-6">
                {jejumHormonal.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {jejumHormonal.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-primary" />
                    Benefícios
                  </h3>
                  <ul className="space-y-2">
                    {jejumHormonal.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Para quem é indicado
                  </h3>
                  <ul className="space-y-2">
                    {jejumHormonal.forWho.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Segurança
                  </h3>
                  <ul className="space-y-2">
                    {jejumHormonal.safety.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button asChild size="lg">
                  <Link href={whatsappLink('Olá! Gostaria de saber mais sobre o Jejum Hormonal.')}>
                    Quero saber mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                {/* Vídeo do YouTube */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Play className="mr-2 h-5 w-5 text-primary" />
                    Vídeo Explicativo
                  </h4>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/7pdKn_5r8Is"
                      title="Jejum Hormonal - Dr. Fernando Del Piero"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/jejum-hormonal-protocolo.jpg"
                alt="Jejum Hormonal"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Saúde Hormonal */}
      <section id="saude-hormonal" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/saude-hormonal-protocolo.jpg"
                alt="Saúde Hormonal"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                {saudeHormonal.title}
              </h2>
              <p className="text-lg text-primary font-semibold mb-6">
                {saudeHormonal.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {saudeHormonal.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-primary" />
                    Sintomas abordados
                  </h3>
                  <ul className="space-y-2">
                    {saudeHormonal.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Nossa abordagem
                  </h3>
                  <ul className="space-y-2">
                    {saudeHormonal.approach.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-primary" />
                    Estilo de vida
                  </h3>
                  <ul className="space-y-2">
                    {saudeHormonal.lifestyle.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={whatsappLink('Olá! Gostaria de saber mais sobre o protocolo de Saúde Hormonal.')}>
                    Quero saber mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emagrecimento */}
      <section id="emagrecimento" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                {emagrecimento.title}
              </h2>
              <p className="text-lg text-primary font-semibold mb-6">
                {emagrecimento.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {emagrecimento.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingDown className="mr-2 h-5 w-5 text-primary" />
                    Otimização metabólica
                  </h3>
                  <ul className="space-y-2">
                    {emagrecimento.metabolism.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-primary" />
                    Anti-platô
                  </h3>
                  <ul className="space-y-2">
                    {emagrecimento.antiPlateau.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Manutenção
                  </h3>
                  <ul className="space-y-2">
                    {emagrecimento.maintenance.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={whatsappLink('Olá! Gostaria de saber mais sobre o Emagrecimento Inteligente.')}>
                    Quero saber mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/emagrecimento-protocolo.jpg"
                alt="Emagrecimento Inteligente"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
