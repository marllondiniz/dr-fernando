import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { FAQPageSchema } from '@/lib/schemas'
import { 
  CheckCircle, 
  Calendar, 
  FileText, 
  Users,
  Clock,
  Shield,
  Phone,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Consultas Médicas - Dr. Fernando Del Piero',
  description: 'Como funcionam as consultas com o Dr. Fernando Del Piero. Processo completo de anamnese, exames e plano personalizado para seus objetivos de saúde.',
  path: '/consultas'
})

const processSteps = [
  {
    step: 1,
    title: 'Anamnese Completa',
    description: 'Conversa detalhada sobre sua história, objetivos e desafios atuais.',
    duration: '60-90 minutos',
    icon: <FileText className="h-6 w-6" />,
    items: [
      'História médica completa',
      'Avaliação de sintomas',
      'Análise do estilo de vida atual',
      'Definição de objetivos',
      'Identificação de obstáculos'
    ]
  },
  {
    step: 2,
    title: 'Exames e Avaliações',
    description: 'Solicitação de exames específicos para entender seu metabolismo.',
    duration: 'Conforme necessário',
    icon: <Shield className="h-6 w-6" />,
    items: [
      'Exames laboratoriais completos',
      'Avaliação hormonal',
      'Marcadores metabólicos',
      'Perfil inflamatório',
      'Análise nutricional'
    ]
  },
  {
    step: 3,
    title: 'Plano Personalizado',
    description: 'Protocolo específico baseado nos resultados e seus objetivos.',
    duration: '30-45 minutos',
    icon: <CheckCircle className="h-6 w-6" />,
    items: [
      'Protocolo nutricional personalizado',
      'Estratégias de exercício',
      'Suplementação baseada em evidências',
      'Cronograma de acompanhamento',
      'Metas e marcos de progresso'
    ]
  }
]

const includedItems = [
  'Consulta inicial completa',
  'Solicitação de exames',
  'Plano personalizado detalhado',
  'Acompanhamento por 30 dias',
  'Check-ins semanais',
  'Materiais educativos',
  'Suporte via WhatsApp',
  'Ajustes no protocolo conforme necessário'
]

const plans = [
  {
    name: 'Consulta Inicial',
    price: 'R$ 450',
    duration: 'Primeira consulta',
    description: 'Anamnese completa, solicitação de exames e plano inicial',
    features: [
      'Anamnese detalhada (90 min)',
      'Solicitação de exames',
      'Plano inicial personalizado',
      'Materiais educativos',
      'Suporte por 7 dias'
    ],
    popular: false
  },
  {
    name: 'Acompanhamento',
    price: 'R$ 200',
    duration: 'Consulta de retorno',
    description: 'Acompanhamento e ajustes no protocolo',
    features: [
      'Consulta de retorno (45 min)',
      'Análise de resultados',
      'Ajustes no protocolo',
      'Check-ins semanais',
      'Suporte contínuo'
    ],
    popular: true
  }
]

const faqs = [
  {
    question: 'Como funciona o processo de consulta?',
    answer: 'O processo é dividido em 3 etapas: anamnese completa, exames específicos e plano personalizado. Cada etapa é cuidadosamente planejada para entender sua situação e criar um protocolo eficaz.'
  },
  {
    question: 'Quais exames são solicitados?',
    answer: 'Os exames variam conforme cada caso, mas geralmente incluem: perfil hormonal completo, marcadores metabólicos, perfil inflamatório, função tireoidiana e marcadores nutricionais específicos.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os primeiros sinais de melhora geralmente aparecem em 2-4 semanas, mas resultados significativos são observados em 2-3 meses. Cada pessoa responde de forma diferente ao protocolo.'
  },
  {
    question: 'Preciso fazer consultas presenciais?',
    answer: 'As consultas são realizadas online via videoconferência, o que permite maior flexibilidade e comodidade. Todo o processo é otimizado para funcionar perfeitamente no formato digital.'
  },
  {
    question: 'O que está incluído no acompanhamento?',
    answer: 'O acompanhamento inclui check-ins semanais, ajustes no protocolo conforme necessário, suporte via WhatsApp e materiais educativos adicionais.'
  },
  {
    question: 'Posso cancelar ou reagendar?',
    answer: 'Sim, você pode reagendar com até 24h de antecedência. Para cancelamentos, pedimos o mesmo prazo para que possamos oferecer o horário para outros pacientes.'
  },
  {
    question: 'Os protocolos são baseados em evidências científicas?',
    answer: 'Absolutamente. Todos os protocolos são baseados em evidências científicas sólidas e são constantemente atualizados conforme novas pesquisas são publicadas.'
  },
  {
    question: 'Funciona para qualquer idade?',
    answer: 'Sim, os protocolos são adaptados para diferentes faixas etárias. Cada pessoa recebe um plano personalizado considerando sua idade, condição de saúde e objetivos específicos.'
  }
]

export default function ConsultasPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQPageSchema(faqs)),
        }}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Como Funcionam as Consultas
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Processo estruturado em 3 etapas para garantir que você receba o melhor cuidado 
              e os melhores resultados possíveis.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-peach-300 hover:bg-peach-300/90">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Processo em 3 Etapas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Cada etapa é cuidadosamente planejada para seu sucesso
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-primary font-semibold">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-3 h-5 w-5 text-peach-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-100 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 mt-2">{step.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O que está incluído
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tudo que você precisa para alcançar seus objetivos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-peach-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Investimento
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparência total nos valores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={plan.popular ? 'ring-2 ring-primary' : ''}>
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-3 h-4 w-4 text-peach-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" size="lg">
                    <Link href={whatsappLink(`Olá! Gostaria de agendar uma ${plan.name.toLowerCase()}.`)}>
                      Agendar {plan.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tire suas dúvidas sobre o processo de consulta
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  )
}
