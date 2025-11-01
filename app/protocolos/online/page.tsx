import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { generateMetadata, whatsappLink } from '@/lib/utils'
import { 
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  Star,
  Sparkles,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Jejum Hormonal® Experience Online - Dr. Fernando Del Piero',
  description: '90 dias de acompanhamento com IA corporal e acompanhamento médico completo. Jejum Hormonal® Experience Online.',
  path: '/protocolos/online'
})

const stages = [
  {
    title: 'Pré-consulta',
    description: 'Preparação e envio de materiais para análise inicial'
  },
  {
    title: 'Sessão com o Dr. Fernando',
    description: 'Consulta médica detalhada e definição do protocolo'
  },
  {
    title: 'Ciclos de 30 dias',
    description: '3 ciclos de acompanhamento com ajustes personalizados'
  },
  {
    title: 'Sessão final',
    description: 'Avaliação de resultados e plano de manutenção'
  }
]

const whyWorksItems = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Atua nos hormônios',
    description: 'Regula insulina, cortisol e GH para destravar o emagrecimento'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Base médica e nutricional real',
    description: 'Protocolo baseado em evidências científicas sólidas'
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Tecnologia + suporte humano',
    description: 'IA corporal combinada com acompanhamento médico ativo'
  }
]

export default function ExperienceOnlinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/10 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Jejum Hormonal® Experience Online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              90 dias de acompanhamento médico
              <span className="block mt-3 text-coral">com IA corporal e suporte completo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              O Jejum Hormonal® Experience na versão digital: mesmo protocolo, mesmo resultado, com tecnologia de ponta para mulheres em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                <Link href={whatsappLink('Olá! Gostaria de conhecer o Jejum Hormonal® Experience online.')}>
                  Conhecer o Experience
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Destaque */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-coral/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🎯 Destaque: Kit FMD incluso
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Envio de Kit Fasting-Mimicking Diet (FMD) para potencializar os resultados do protocolo, com todos os suplementos e orientações necessárias.
                </p>
              </div>
              <div className="bg-gradient-to-br from-coral/10 to-peach-200/10 rounded-2xl p-8 text-center border border-coral/20">
                <div className="text-4xl font-bold text-coral mb-2">90 dias</div>
                <div className="text-gray-700 font-medium">de acompanhamento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etapas Visuais */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Como funciona o Experience Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um protocolo estruturado em 4 etapas para transformação completa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="relative flex">
                <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-coral/20 hover:border-coral transition-all duration-300 flex flex-col h-full w-full">
                  <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center flex-shrink-0">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Por que o Experience funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A combinação de ciência, tecnologia e acompanhamento humano
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyWorksItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-coral/5 to-peach-200/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-coral/20">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-coral via-coral to-peach-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Transforme seu metabolismo em 90 dias
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              O Experience Online traz toda a ciência do Jejum Hormonal® para qualquer lugar do Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100">
                <Link href={whatsappLink('Olá! Gostaria de iniciar meu Reset Metabólico.')}>
                  Quero iniciar agora
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-white/70 italic">
              Vagas limitadas. Resultado garantido ou seu dinheiro de volta.*
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

