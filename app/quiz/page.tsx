'use client'

import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Heart,
  TrendingDown,
  Zap,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { whatsappLink } from '@/lib/utils'

const mainOptions = [
  {
    id: 'emagrecimento',
    title: 'Emagrecimento',
    description: 'Perda de peso sustentável e aceleração metabólica',
    icon: <TrendingDown className="h-8 w-8" />,
    color: 'bg-coral',
    hoverColor: 'hover:bg-coral/90'
  },
  {
    id: 'hormonal',
    title: 'Saúde Hormonal',
    description: 'Equilíbrio hormonal e otimização metabólica',
    icon: <Heart className="h-8 w-8" />,
    color: 'bg-coral',
    hoverColor: 'hover:bg-coral/90'
  },
  {
    id: 'energia',
    title: 'Mais Energia',
    description: 'Aumento de energia e disposição',
    icon: <Zap className="h-8 w-8" />,
    color: 'bg-coral',
    hoverColor: 'hover:bg-coral/90'
  }
]

const subQuestions = {
  emagrecimento: [
    {
      question: 'Qual é sua faixa etária?',
      options: [
        '18-30 anos',
        '31-40 anos', 
        '41-50 anos',
        'Acima de 50 anos'
      ]
    },
    {
      question: 'Há quanto tempo você tenta emagrecer?',
      options: [
        'Menos de 6 meses',
        '6 meses a 1 ano',
        '1 a 2 anos',
        'Mais de 2 anos'
      ]
    },
    {
      question: 'Qual sua principal dificuldade?',
      options: [
        'Controle da fome',
        'Platô de peso',
        'Compulsão alimentar',
        'Falta de motivação'
      ]
    },
    {
      question: 'Como você descreve sua alimentação atual?',
      options: [
        'Muito irregular',
        'Tento manter saudável',
        'Sigo dietas restritivas',
        'Como de tudo sem controle'
      ]
    }
  ],
  hormonal: [
    {
      question: 'Você está na menopausa?',
      options: [
        'Sim, há mais de 1 ano',
        'Sim, há menos de 1 ano',
        'Não, mas tenho sintomas',
        'Não, estou longe da menopausa'
      ]
    },
    {
      question: 'Quais sintomas hormonais você apresenta?',
      options: [
        'Ondas de calor',
        'Alterações de humor',
        'Ganho de peso',
        'Todos os anteriores'
      ]
    },
    {
      question: 'Como está sua energia?',
      options: [
        'Muito baixa',
        'Baixa',
        'Moderada',
        'Alta'
      ]
    },
    {
      question: 'Você tem problemas de sono?',
      options: [
        'Insônia frequente',
        'Acordo várias vezes',
        'Durmo mal ocasionalmente',
        'Durmo bem'
      ]
    }
  ],
  energia: [
    {
      question: 'Como você se sente ao acordar?',
      options: [
        'Muito cansado',
        'Cansado',
        'Moderadamente energético',
        'Muito energético'
      ]
    },
    {
      question: 'Qual seu nível de energia durante o dia?',
      options: [
        'Muito baixo',
        'Baixo',
        'Moderado',
        'Alto'
      ]
    },
    {
      question: 'O que mais te incomoda?',
      options: [
        'Fadiga constante',
        'Falta de foco',
        'Baixa motivação',
        'Sono durante o dia'
      ]
    },
    {
      question: 'Como você se alimenta?',
      options: [
        'Pouco e irregular',
        'Normal mas sem energia',
        'Bem mas ainda cansado',
        'Bem e com energia'
      ]
    }
  ]
}

export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<'main' | 'questions' | 'result'>('main')
  const [answers, setAnswers] = useState<{[key: string]: string}>({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userData, setUserData] = useState<{
    name: string
    email: string
    phone: string
  }>({
    name: '',
    email: '',
    phone: ''
  })
  const [showContactForm, setShowContactForm] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setCurrentStep('questions')
    setCurrentQuestionIndex(0)
    setAnswers({})
  }

  const handleBackToMain = () => {
    setSelectedOption(null)
    setCurrentStep('main')
    setCurrentQuestionIndex(0)
    setAnswers({})
  }

  const handleAnswerSelect = (answer: string) => {
    const questionKey = `${selectedOption}_${currentQuestionIndex}`
    setAnswers(prev => ({ ...prev, [questionKey]: answer }))
    
    const questions = selectedOption ? subQuestions[selectedOption as keyof typeof subQuestions] : []
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setCurrentStep('result')
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const getProtocolRecommendation = () => {
    if (!selectedOption) return null
    
    const protocols = {
      emagrecimento: {
        title: 'Protocolo de Emagrecimento Inteligente',
        description: 'Baseado nas suas respostas, recomendamos um protocolo focado em aceleração metabólica e perda de peso sustentável.',
        benefits: [
          'Jejum intermitente personalizado',
          'Otimização da insulina',
          'Estratégias anti-platô',
          'Manutenção sustentável do peso'
        ],
        duration: '3-6 meses',
        price: 'A partir de R$ 297/mês'
      },
      hormonal: {
        title: 'Protocolo de Saúde Hormonal',
        description: 'Abordagem completa para equilíbrio hormonal e otimização metabólica baseada em evidências científicas.',
        benefits: [
          'Equilíbrio hormonal natural',
          'Controle de sintomas da menopausa',
          'Otimização da testosterona',
          'Melhora da energia e libido'
        ],
        duration: '4-8 meses',
        price: 'A partir de R$ 397/mês'
      },
      energia: {
        title: 'Protocolo de Energia e Vitalidade',
        description: 'Foco em aumentar energia, disposição e qualidade de vida através de otimização metabólica.',
        benefits: [
          'Aumento de energia sustentável',
          'Melhora da qualidade do sono',
          'Otimização nutricional',
          'Redução do estresse'
        ],
        duration: '2-4 meses',
        price: 'A partir de R$ 247/mês'
      }
    }
    
    return protocols[selectedOption as keyof typeof protocols]
  }

  const generateWhatsAppMessage = () => {
    const protocol = getProtocolRecommendation()
    if (!protocol || !selectedOption) return ''
    
    const answersText = Object.entries(answers)
      .map(([key, value]) => {
        const questionIndex = parseInt(key.split('_')[1])
        const questions = subQuestions[selectedOption as keyof typeof subQuestions]
        const question = questions[questionIndex]
        return `• ${question.question}: ${value}`
      })
      .join('\n')
    
    return `Olá Dr. Fernando! 

Completei o questionário de saúde metabólica e gostaria de agendar uma consulta gratuita.

*Meu perfil:*
• Objetivo principal: ${mainOptions.find(opt => opt.id === selectedOption)?.title}
• Protocolo recomendado: ${protocol.title}

*Minhas respostas:*
${answersText}

*Meus dados:*
• Nome: ${userData.name}
• Email: ${userData.email}
• Telefone: ${userData.phone}

Aguardo seu retorno para agendarmos a consulta gratuita!`
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userData.name && userData.email && userData.phone) {
      const message = generateWhatsAppMessage()
      window.open(whatsappLink(message), '_blank')
    }
  }

  const handleScheduleClick = () => {
    if (userData.name && userData.email && userData.phone) {
      const message = generateWhatsAppMessage()
      window.open(whatsappLink(message), '_blank')
    } else {
      setShowContactForm(true)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <div className="bg-champagne-100">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-center space-x-8 text-sm font-semibold text-charcoal-700 uppercase">
            <div className={`flex items-center ${currentStep === 'main' ? 'text-coral' : 'text-charcoal-700'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                currentStep === 'main' ? 'bg-coral text-white' : 'bg-charcoal-700 text-white'
              }`}>
                1
              </div>
              Questionário
            </div>
            <ChevronRight className="h-4 w-4" />
            <div className={`flex items-center ${currentStep === 'questions' ? 'text-coral' : 'text-charcoal-700'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                currentStep === 'questions' ? 'bg-coral text-white' : 'bg-charcoal-700 text-white'
              }`}>
                2
              </div>
              Tratamento
            </div>
            <ChevronRight className="h-4 w-4" />
            <div className={`flex items-center ${currentStep === 'result' ? 'text-coral' : 'text-charcoal-700'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                currentStep === 'result' ? 'bg-coral text-white' : 'bg-charcoal-700 text-white'
              }`}>
                3
              </div>
              Pedido
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        {currentStep === 'main' && (
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-8">
              Com o que podemos te ajudar hoje?
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {mainOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`${option.color} ${option.hoverColor} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold uppercase">
                      {option.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {option.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 'questions' && selectedOption && (
          <div className="text-center">
            <button
              onClick={handleBackToMain}
              className="mb-8 text-charcoal-700 hover:text-coral transition-colors duration-300 flex items-center mx-auto"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Voltar
            </button>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-8">
              {mainOptions.find(opt => opt.id === selectedOption)?.title}
            </h1>
            
            <div className="space-y-6">
              {(() => {
                const questions = subQuestions[selectedOption as keyof typeof subQuestions]
                const currentQuestion = questions[currentQuestionIndex]
                
                return (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="text-sm text-coral font-semibold mb-2">
                        Pergunta {currentQuestionIndex + 1} de {questions.length}
                      </div>
                      <h2 className="text-2xl font-bold text-charcoal-900 mb-6">
                        {currentQuestion.question}
                      </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentQuestion.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          onClick={() => handleAnswerSelect(option)}
                          className="bg-coral hover:bg-coral/90 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                        >
                          <div className="text-center">
                            <span className="text-lg font-semibold uppercase">
                              {option}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {currentQuestionIndex > 0 && (
                      <div className="text-center mt-8">
                        <button
                          onClick={handlePreviousQuestion}
                          className="text-charcoal-700 hover:text-coral transition-colors duration-300"
                        >
                          ← Pergunta anterior
                        </button>
                      </div>
                    )}
                  </div>
                )
              })()}
            </div>
          </div>
        )}

        {currentStep === 'result' && (
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coral rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4">
                Seu Protocolo Personalizado
              </h1>
              <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
                Baseado nas suas respostas, criamos um plano específico para seus objetivos
              </p>
            </div>
            
            {(() => {
              const protocol = getProtocolRecommendation()
              if (!protocol) return null
              
              return (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-coral to-coral/80 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
                          {protocol.title}
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                          {protocol.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                          <div className="flex items-center justify-center mb-3">
                            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">⏱</span>
                            </div>
                            <h3 className="font-semibold text-lg">Duração</h3>
                          </div>
                          <p className="font-bold text-xl">{protocol.duration}</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                          <div className="flex items-center justify-center mb-3">
                            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">💰</span>
                            </div>
                            <h3 className="font-semibold text-lg">Investimento</h3>
                          </div>
                          <p className="font-bold text-xl">{protocol.price}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                        <h3 className="font-semibold text-lg mb-6 text-center">O que está incluído:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {protocol.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center text-white">
                              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-white font-bold text-sm">✓</span>
                              </div>
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
            
            <div className="space-y-6 mt-12">
              {!showContactForm ? (
                <>
                  <div className="relative">
                    <Button 
                      onClick={handleScheduleClick}
                      className="w-full bg-gradient-to-r from-coral to-coral/80 hover:from-coral/90 hover:to-coral/70 text-white px-8 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-0"
                    >
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold">📅</span>
                        </div>
                        Agendar Consulta Gratuita
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </div>
                    </Button>
                    <div className="absolute -inset-1 bg-gradient-to-r from-coral to-coral/80 rounded-2xl blur opacity-30 -z-10"></div>
                  </div>
                </>
              ) : (
                <div className="bg-gradient-to-br from-coral to-coral/80 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                        <span className="text-white font-bold text-xl">📝</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">
                        Complete seus dados para agendar
                      </h2>
                      <p className="text-white/80 text-sm">
                        Seus dados serão enviados diretamente para o WhatsApp do Dr. Fernando
                      </p>
                    </div>
                    
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-3">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={userData.name}
                          onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-4 border border-white/30 rounded-xl focus:border-white focus:outline-none transition-colors bg-white/10 text-white placeholder-white/70 text-lg"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={userData.email}
                          onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-4 border border-white/30 rounded-xl focus:border-white focus:outline-none transition-colors bg-white/10 text-white placeholder-white/70 text-lg"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/90 mb-3">
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={userData.phone}
                          onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-4 border border-white/30 rounded-xl focus:border-white focus:outline-none transition-colors bg-white/10 text-white placeholder-white/70 text-lg"
                          placeholder="(27) 99689-4540"
                        />
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button 
                          type="submit"
                          className="flex-1 bg-white text-coral hover:bg-white/90 px-6 py-4 font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-center">
                            <span className="mr-2">📱</span>
                            Enviar para WhatsApp
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </div>
                        </Button>
                        <button
                          type="button"
                          onClick={() => setShowContactForm(false)}
                          className="px-6 py-4 text-white/80 hover:text-white transition-colors border border-white/30 rounded-xl hover:bg-white/10"
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              
              <button
                onClick={handleBackToMain}
                className="text-charcoal-700 hover:text-coral transition-colors duration-300"
              >
                Fazer novo questionário
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
