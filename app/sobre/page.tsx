import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { 
  GraduationCap, 
  Heart, 
  Brain, 
  Target,
  Calendar,
  Phone,
  Microscope,
  UserCheck,
  Leaf,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Sobre Dr. Fernando Del Piero - Médico Especialista em Metabolismo',
  description: 'Conheça a trajetória e abordagem do Dr. Fernando Del Piero, médico especialista em metabolismo, emagrecimento e saúde da mulher em Vitória, ES.',
  path: '/sobre'
})

const principles = [
  {
    title: 'Sono de Qualidade',
    description: 'Fundamental para regulação hormonal, recuperação e metabolismo eficiente.',
    icon: <Brain className="h-6 w-6" />
  },
  {
    title: 'Nutrição Estratégica',
    description: 'Alimentação baseada em evidências, personalizada para seus objetivos e estilo de vida.',
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: 'Movimento Inteligente',
    description: 'Exercícios prescritos de forma estratégica para maximizar resultados metabólicos.',
    icon: <Target className="h-6 w-6" />
  },
  {
    title: 'Manejo de Estresse',
    description: 'Técnicas comprovadas para controle do cortisol e otimização da saúde mental.',
    icon: <Brain className="h-6 w-6" />
  }
]

const education = [
  {
    title: 'Medicina',
    institution: 'Universidade Federal do Espírito Santo (UFES)',
    year: '2015'
  },
  {
    title: 'Residência em Medicina Interna',
    institution: 'Hospital Universitário Cassiano Antônio Moraes',
    year: '2018'
  },
  {
    title: 'Especialização em Endocrinologia',
    institution: 'Hospital das Clínicas - USP',
    year: '2020'
  },
  {
    title: 'Certificação em Medicina Funcional',
    institution: 'Institute for Functional Medicine',
    year: '2021'
  }
]

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
          <div className="flex flex-col items-center justify-start pt-5 sm:pt-12 md:pt-16 lg:pt-20 min-h-[70vh] text-center">
            <div className="w-full max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 mb-4 sm:mb-6">
                Dr. Fernando <span className="text-coral">Del Piero</span>
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Médico especialista em metabolismo, emagrecimento e saúde da mulher.<br />
                Abordagem baseada em evidências científicas para resultados reais e sustentáveis.
              </p>
              <div className="flex justify-center mb-8 sm:mb-12">
                <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                    Agendar consulta
                    <Calendar className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Text */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Minha História</h2>
            <p className="text-lg text-gray-600 mb-6">
              Formado em Medicina pela UFES e especialista em Endocrinologia pelo Hospital das Clínicas da USP, 
              sempre fui fascinado pelo funcionamento do metabolismo humano. Durante minha formação, percebi 
              que muitos pacientes não conseguiam resultados duradouros com abordagens tradicionais.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Foi então que mergulhei no estudo da medicina funcional e das estratégias metabólicas baseadas 
              em evidências. Hoje, ajudo centenas de pacientes a alcançarem seus objetivos de saúde através 
              de protocolos personalizados e sustentáveis.
            </p>
            <p className="text-lg text-gray-600">
              Minha missão é democratizar o acesso a uma medicina de alta qualidade, baseada em ciência, 
              que realmente funciona para a vida real das pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Formação e Especializações
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Educação sólida e atualização constante em medicina baseada em evidências
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center">
                    <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-500">{item.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Minha Abordagem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Personalizada, baseada em evidências e focada na adesão sustentável
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clínica e Atendimento
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha a modalidade que melhor se adapta à sua rotina
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Presencial */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Consulta Presencial</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Atendimento na clínica com toda infraestrutura necessária
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">📍</span>
                    <span>Vitória, ES</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🕒</span>
                    <span>Segunda a Sexta: 8h às 18h</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🏥</span>
                    <span>Exame físico completo</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🔬</span>
                    <span>Equipamentos médicos disponíveis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Online */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Consulta Online</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Atendimento via videoconferência com toda comodidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">💻</span>
                    <span>Videoconferência segura</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🕒</span>
                    <span>Segunda a Sábado: 7h às 20h</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🏠</span>
                    <span>Sem deslocamento necessário</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">🔒</span>
                    <span>Privacidade total em casa</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  )
}
