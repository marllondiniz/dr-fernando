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
  Phone
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Dr. Fernando Del Piero
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Médico especialista em metabolismo, emagrecimento e saúde da mulher. 
                Abordagem baseada em evidências científicas para resultados reais e sustentáveis.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                  <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar consulta
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/protocolos">
                    Ver protocolos
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dr-fernando-profile.jpg"
                alt="Dr. Fernando Del Piero"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
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

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meus Valores
            </h2>
          </div>
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ciência Aplicada</h3>
              <p className="text-lg text-gray-600">
                Toda recomendação é baseada em evidências científicas sólidas e atualizadas.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalização</h3>
              <p className="text-lg text-gray-600">
                Cada pessoa é única. Seus protocolos são adaptados para sua realidade e objetivos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustentabilidade</h3>
              <p className="text-lg text-gray-600">
                Foco em mudanças que você consegue manter a longo prazo, sem extremismos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparência</h3>
              <p className="text-lg text-gray-600">
                Sem promessas milagrosas. Resultados reais através de métodos comprovados.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
