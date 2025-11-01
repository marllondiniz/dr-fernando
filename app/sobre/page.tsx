import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Sobre Dr. Fernando Del Piero - Médico Especialista em Metabolismo',
  description: 'Conheça a trajetória e abordagem do Dr. Fernando Del Piero, médico especialista em metabolismo, emagrecimento e saúde da mulher em Vitória, ES.',
  path: '/sobre'
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative pt-2 pb-12 sm:pt-8 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 mobile-bg-center"
        style={{
          backgroundImage: 'url(/images/fundo-branco.png)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-8 xl:pl-12">
          <div className="flex flex-col items-center md:items-start pt-8 sm:pt-10 md:pt-12 lg:pt-14 min-h-[60vh]">
            <div className="w-full max-w-4xl text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 mb-4 sm:mb-6">
                Ciência, propósito e <span className="text-coral">mais de 10 mil histórias transformadas</span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-600 mb-6 sm:mb-8 leading-relaxed">
                Médico CRM 12280-ES. Autor do Jejum Hormonal®.<br />
                Professor convidado e referência nacional em emagrecimento feminino.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href="/protocolos/jejum-hormonal">
                    Conhecer o Jejum Hormonal®
                  </Link>
                </Button>
              </div>

              {/* Informações adicionais */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 hidden md:grid">
                <div className="text-center md:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">10.000+</div>
                  <div className="text-sm text-charcoal-600">Mulheres Atendidas</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">6</div>
                  <div className="text-sm text-charcoal-600">Anos de Experiência</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">CRM</div>
                  <div className="text-sm text-charcoal-600">12280-ES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-gradient-to-br from-coral/5 via-white to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trajetória
            </h2>
            <p className="text-lg text-gray-600">
              Da formação científica ao atendimento de mais de 10 mil mulheres
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-coral via-coral to-green-500 hidden md:block"></div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-0 md:left-6 w-14 h-14 bg-coral rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg z-10">
                    2013
                  </div>
                  <div className="ml-20 md:ml-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Formação Médica</h3>
                    <p className="text-sm text-gray-600">Graduação em Medicina pela UFES, início da jornada no atendimento de pacientes.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-0 md:left-6 w-14 h-14 bg-peach-300 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg z-10">
                    2018
                  </div>
                  <div className="ml-20 md:ml-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Especialização</h3>
                    <p className="text-sm text-gray-600">Residência em Medicina Interna e Especialização em Endocrinologia.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-0 md:left-6 w-14 h-14 bg-coral rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg z-10">
                    2020
                  </div>
                  <div className="ml-20 md:ml-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Criação do Jejum Hormonal®</h3>
                    <p className="text-sm text-gray-600">Desenvolvimento do protocolo baseado na Fasting-Mimicking Diet adaptada ao metabolismo feminino.</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-0 md:left-6 w-14 h-14 bg-peach-300 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg z-10">
                    2021
                  </div>
                  <div className="ml-20 md:ml-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Certificação Internacional</h3>
                    <p className="text-sm text-gray-600">Certificação em Medicina Funcional pelo Institute for Functional Medicine (EUA).</p>
                  </div>
                </div>

                {/* Item 5 - Milestone Final */}
                <div className="relative flex items-start gap-6 md:gap-8">
                  <div className="absolute left-0 md:left-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-xl z-10">
                    2024
                  </div>
                  <div className="ml-24 md:ml-28 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 text-white flex-1">
                    <h3 className="text-xl font-bold mb-1">Mais de 10 mil mulheres atendidas</h3>
                    <p className="text-white/90 text-sm">Autor do Jejum Hormonal® e referência nacional em emagrecimento feminino 40+.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
