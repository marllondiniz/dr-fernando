import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { generateMetadata, whatsappLink } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Jejum Hormonal® - Conceito Científico - Dr. Fernando Del Piero',
  description: 'Conheça a base científica do Jejum Hormonal® inspirada na Fasting-Mimicking Diet de Harvard, USC e Stanford.',
  path: '/protocolos/jejum-hormonal'
})

export default function JejumHormonalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/10 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Jejum Hormonal®</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              A ciência por trás do Jejum Hormonal®
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Inspirado na Fasting-Mimicking Diet (FMD) desenvolvida por Harvard, USC e Stanford, 
              o Jejum Hormonal® traz a ciência de ponta aplicada ao metabolismo da mulher 40+.
            </p>
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
              <Link href="/protocolos/presencial">
                Conheça o Jejum Hormonal® Experience
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conceito */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              O conceito e a inspiração científica
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <span className="font-semibold text-coral">Fasting-Mimicking Diet (FMD)</span> foi desenvolvida pelo Dr. 
                Valter Longo da University of Southern California (USC) e tem como base estudos de Harvard e Stanford.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A FMD consegue imitar os efeitos de um jejum prolongado através de uma restrição calórica específica de 
                proteínas e carboidratos, mantendo o corpo em um estado metabólico de reparação e regeneração celular.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Durante esse estado, o corpo aciona mecanismos de autofagia, regeneração de células-tronco e otimização 
                hormonal — todos comprovados cientificamente para melhorar saúde metabólica e longevidade.
              </p>
            </div>
          </div>

          {/* Visual científico */}
          <div className="bg-gradient-to-br from-coral/10 to-peach-200/10 rounded-2xl p-8 border border-coral/20 text-center">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Metabolismo Otimizado</h3>
            <p className="text-gray-700">
              Regulação hormonal, autofagia e regeneração celular
            </p>
          </div>
        </div>
      </section>

      {/* Diferença */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              A diferença do jejum tradicional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Jejum Hormonal® não é apenas abster-se de comer — é uma estratégia científica de reprogramação metabólica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚠️ Jejum tradicional
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Pode gerar perda de massa magra</li>
                <li>• É estressante para o corpo</li>
                <li>• Nem sempre otimiza hormônios</li>
                <li>• Difícil de sustentar</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-coral/5 to-peach-200/10 rounded-2xl shadow-lg p-8 border-l-4 border-coral">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Jejum Hormonal®
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Preserva massa magra</li>
                <li>• Reduz estresse e inflamação</li>
                <li>• Otimiza hormônios estrategicamente</li>
                <li>• Sustentável e personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicação clínica */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-coral/10 to-peach-200/10 rounded-3xl shadow-xl p-8 sm:p-12 border border-coral/20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              A aplicação clínica
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Criado pelo Dr. Fernando Del Piero após anos de prática clínica e acompanhamento de mais de 10 mil mulheres, 
                o Jejum Hormonal® Experience adapta os princípios da FMD ao metabolismo feminino 40+.
              </p>
              <p>
                O protocolo considera os ciclos hormonais, o perfil metabólico individual, histórico de dietas e metabolismo 
                atual de cada paciente. Não há receita pronta — cada mulher recebe um plano estratégico baseado na sua biologia.
              </p>
              <p>
                A diferença está no acompanhamento: com consultas quinzenais (presencial) ou acompanhamento contínuo (online), 
                cada ajuste é feito com base em dados clínicos e resposta biológica — não em suposições.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Base científica */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Base científica e referências
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudos e pesquisas que fundamentam o Jejum Hormonal®
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Harvard Medical School</h3>
              <p className="text-gray-600">Estudos sobre regeneração celular e metabolismo</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">USC Longevity Institute</h3>
              <p className="text-gray-600">Pesquisas sobre Fasting-Mimicking Diet</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stanford School of Medicine</h3>
              <p className="text-gray-600">Estudos sobre longevidade e metabolismo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-coral via-coral to-peach-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Experiência o Jejum Hormonal® na prática
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Combine ciência de ponta com acompanhamento médico personalizado.
            </p>
            
            <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100">
              <Link href={whatsappLink('Olá! Gostaria de conhecer o Jejum Hormonal® Experience.')}>
                Conhecer o Experience
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

