import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata } from '@/lib/utils'
import { 
  ArrowRight, 
  CheckCircle,
  Heart,
  TrendingDown,
  Zap,
  Clock,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Quiz de Saúde Metabólica - Dr. Fernando Del Piero',
  description: 'Descubra qual protocolo é ideal para você através do nosso questionário de saúde metabólica personalizado.',
  path: '/quiz'
})

const questions = [
  {
    id: 'objetivo',
    title: 'Qual é o seu principal objetivo?',
    options: [
      { value: 'emagrecimento', label: 'Emagrecimento e perda de peso', icon: <TrendingDown className="h-6 w-6" /> },
      { value: 'energia', label: 'Mais energia e disposição', icon: <Zap className="h-6 w-6" /> },
      { value: 'hormonal', label: 'Equilíbrio hormonal', icon: <Heart className="h-6 w-6" /> },
      { value: 'metabolismo', label: 'Acelerar o metabolismo', icon: <Clock className="h-6 w-6" /> }
    ]
  },
  {
    id: 'idade',
    title: 'Qual é a sua faixa etária?',
    options: [
      { value: '18-30', label: '18 a 30 anos' },
      { value: '31-40', label: '31 a 40 anos' },
      { value: '41-50', label: '41 a 50 anos' },
      { value: '51+', label: 'Acima de 50 anos' }
    ]
  },
  {
    id: 'sintomas',
    title: 'Quais sintomas você apresenta? (pode marcar mais de um)',
    options: [
      { value: 'fadiga', label: 'Fadiga constante' },
      { value: 'ganho-peso', label: 'Dificuldade para perder peso' },
      { value: 'ansiedade', label: 'Ansiedade e estresse' },
      { value: 'insonia', label: 'Problemas de sono' },
      { value: 'menopausa', label: 'Sintomas da menopausa' },
      { value: 'resistencia-insulina', label: 'Resistência à insulina' }
    ],
    multiple: true
  },
  {
    id: 'estilo-vida',
    title: 'Como você descreveria seu estilo de vida atual?',
    options: [
      { value: 'sedentario', label: 'Sedentário - pouco exercício' },
      { value: 'moderado', label: 'Moderado - exercício ocasional' },
      { value: 'ativo', label: 'Ativo - exercício regular' },
      { value: 'muito-ativo', label: 'Muito ativo - exercício intenso' }
    ]
  },
  {
    id: 'alimentacao',
    title: 'Como você descreveria sua alimentação atual?',
    options: [
      { value: 'irregular', label: 'Irregular - como quando posso' },
      { value: 'tradicional', label: 'Tradicional brasileira' },
      { value: 'saudavel', label: 'Tento manter saudável' },
      { value: 'restritiva', label: 'Sigo dietas restritivas' }
    ]
  }
]

const protocols = {
  'jejum-hormonal': {
    title: 'Jejum Hormonal',
    description: 'Protocolo ideal para otimização hormonal e aceleração metabólica',
    benefits: [
      'Otimização da insulina',
      'Regulação do cortisol',
      'Aumento do hormônio do crescimento',
      'Melhora da sensibilidade hormonal'
    ],
    icon: <Clock className="h-8 w-8" />
  },
  'saude-hormonal': {
    title: 'Saúde Hormonal',
    description: 'Abordagem completa para equilíbrio hormonal',
    benefits: [
      'Controle de sintomas da menopausa',
      'Otimização da testosterona',
      'Melhora da libido e energia',
      'Equilíbrio hormonal geral'
    ],
    icon: <Heart className="h-8 w-8" />
  },
  'emagrecimento': {
    title: 'Emagrecimento Inteligente',
    description: 'Metabolismo acelerado e perda de peso sustentável',
    benefits: [
      'Perda de peso eficaz',
      'Aceleração metabólica',
      'Estratégias anti-platô',
      'Manutenção sustentável'
    ],
    icon: <TrendingDown className="h-8 w-8" />
  }
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-100 to-peach-100">
      {/* Hero Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-charcoal-900 mb-6">
            <span className="font-serif">Descubra qual protocolo</span>
            <span className="block text-peach-400 font-serif">é ideal para você</span>
          </h1>
          <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
            Responda algumas perguntas sobre sua saúde e objetivos para receber uma recomendação personalizada do Dr. Fernando.
          </p>
          <div className="flex items-center justify-center space-x-2 text-peach-600">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">100% confidencial e seguro</span>
          </div>
        </div>
      </section>

      {/* Quiz Form */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-charcoal-900">
                Questionário de Saúde Metabólica
              </CardTitle>
              <CardDescription className="text-lg text-charcoal-600">
                Leva apenas 2 minutos para completar
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form className="space-y-12">
                {questions.map((question, index) => (
                  <div key={question.id} className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-charcoal-900 mb-2">
                        {question.title}
                      </h3>
                      <div className="text-sm text-peach-600">
                        Pergunta {index + 1} de {questions.length}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.options.map((option) => (
                        <label
                          key={option.value}
                          className="relative cursor-pointer group"
                        >
                          <input
                            type={question.multiple ? "checkbox" : "radio"}
                            name={question.id}
                            value={option.value}
                            className="sr-only"
                          />
                          <div className="p-6 rounded-2xl border-2 border-champagne-200 bg-champagne-50 hover:border-peach-300 hover:bg-peach-50 transition-all duration-300 group-hover:shadow-lg">
                            <div className="flex items-center space-x-3">
                              {option.icon && (
                                <div className="text-peach-600">
                                  {option.icon}
                                </div>
                              )}
                              <span className="font-medium text-charcoal-800">
                                {option.label}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="text-center pt-8">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-peach-400 hover:bg-peach-500 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Descobrir meu protocolo ideal
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-20 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
              Protocolos Personalizados
            </h2>
            <p className="text-lg text-charcoal-600">
              Baseados em evidências científicas para seus objetivos específicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(protocols).map(([key, protocol]) => (
              <Card key={key} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-peach-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-peach-700">
                      {protocol.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-charcoal-900">
                    {protocol.title}
                  </CardTitle>
                  <CardDescription className="text-charcoal-600">
                    {protocol.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {protocol.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-charcoal-700">
                        <CheckCircle className="mr-2 h-4 w-4 text-peach-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-peach-300 to-peach-400">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende sua consulta e receba um protocolo personalizado baseado no seu perfil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-peach-600 hover:bg-champagne-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/quiz">
                Fazer o questionário
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-peach-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              <Link href="https://wa.me/5527999669050?text=Olá! Gostaria de agendar uma consulta.">
                Falar com o Dr. Fernando
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
