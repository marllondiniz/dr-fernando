import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { ScrollReveal } from '@/components/ScrollReveal'
import { 
  TrendingDown, 
  Heart, 
  Zap, 
  Star,
  ArrowRight,
  Calendar,
  PlayCircle,
  User,
  Sparkles,
  Stethoscope,
  Users,
  BarChart3,
  Scan,
  Brain,
  FileText,
  Zap as Flash
} from 'lucide-react'
import { ServicesCarousel } from '@/components/ServicesCarousel'
import { ProcessCarousel } from '@/components/ProcessCarousel'

export const metadata = generateMetadata({
  title: 'Dr. Fernando Del Piero - Saúde Metabólica sem Achismo',
  description: 'Saúde metabólica sem achismo. Plano médico claro, seguro e possível para a sua rotina. Emagrecimento inteligente, equilíbrio hormonal e desempenho com ciência aplicada.',
  path: '/'
})


const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Vitória, ES',
    content: 'Perdi 15kg em 4 meses seguindo o protocolo do Dr. Fernando. O melhor: sem passar fome e mantendo a energia para treinar.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    location: 'Serra, ES',
    content: 'A menopausa não foi mais um problema depois que comecei o acompanhamento. Sintomas controlados e qualidade de vida restaurada.',
    rating: 5
  },
  {
    name: 'Carlos Santos',
    location: 'Vila Velha, ES',
    content: 'O jejum hormonal mudou minha vida. Mais energia, melhor foco e resultados que nunca consegui antes.',
    rating: 5
  },
  {
    name: 'Patricia Lima',
    location: 'Cariacica, ES',
    content: 'Abordagem científica e personalizada. Finalmente encontrei um médico que entende de metabolismo de verdade.',
    rating: 5
  },
  {
    name: 'Roberto Oliveira',
    location: 'Vitória, ES',
    content: 'Sai do platô de peso que durava anos. O protocolo do Dr. Fernando é eficaz e sustentável.',
    rating: 5
  },
  {
    name: 'Fernanda Rocha',
    location: 'Guarapari, ES',
    content: 'Excelente profissional! Explicações claras e resultados reais. Recomendo para quem busca saúde de verdade.',
    rating: 5
  }
]

const steps = [
  {
    number: '1',
    title: 'A transição silenciosa',
    description: <>Hormônios desequilibram, massa magra cai e resistência à insulina surge. O corpo <span className="font-semibold text-coral">para de responder</span>.</>
  },
  {
    number: '2',
    title: 'O erro comum',
    description: <>Dietas genéricas <span className="font-semibold text-coral">não funcionam</span> sem diagnóstico preciso do que está travando seu organismo.</>
  },
  {
    number: '3',
    title: 'A nossa abordagem',
    description: <>Consulta que <span className="font-semibold text-coral">decifra cada trava</span> impedindo seu corpo de emagrecer. Ciência antes de tratamento.</>
  }
]

const consultaProcess = [
  {
    number: '1',
    title: 'Atendimento médico individual',
    description: 'Consulta presencial exclusiva com o Dr. Fernando Del Piero. Duração de 1 hora para avaliar seu metabolismo, histórico hormonal e comportamento biológico.',
    icon: <Users className="w-16 h-16 text-coral" />
  },
  {
    number: '2',
    title: 'Análise detalhada do metabolismo',
    description: 'Estudo dos principais eixos hormonais, metabólicos e inflamatórios que influenciam energia, peso e equilíbrio corporal.',
    icon: <BarChart3 className="w-16 h-16 text-coral" />
  },
  {
    number: '3',
    title: 'Avaliação corporal 3D',
    description: 'Scanner VISBODY 360° cria avatar tridimensional. Bioimpedância identifica massa magra, gordura, água corporal e metabolismo basal.',
    icon: <Scan className="w-16 h-16 text-coral" />
  },
  {
    number: '4',
    title: 'Mapeamento alimentar e emocional',
    description: 'Análise dos padrões de fome, saciedade e gatilhos emocionais. Abordagem sem julgamentos, focada em consciência e sustentabilidade.',
    icon: <Brain className="w-16 h-16 text-coral" />
  },
  {
    number: '5',
    title: 'Exames e interpretação',
    description: 'Bioquímica, hormônios e imagem, conforme necessidade. Todos interpretados pelo Dr. Fernando dentro do seu contexto.',
    icon: <FileText className="w-16 h-16 text-coral" />
  },
  {
    number: '6',
    title: 'Plano de ação personalizado',
    description: 'Prescrição médica e suplementar individualizada, orientações de estilo de vida e direcionamento para o protocolo ideal.',
    icon: <Flash className="w-16 h-16 text-coral" />
  }
]

const services = [
  {
    title: 'Consulta de Análise Metabólica',
    subtitle: 'Investigue, meça e compreenda o que está impedindo seu corpo de emagrecer com precisão científica.',
    href: '/consultas',
    icon: <Stethoscope className="w-20 h-20 text-coral" />
  },
  {
    title: 'Jejum Hormonal® Online',
    subtitle: '90 dias de acompanhamento médico com IA corporal e suporte direto da equipe.',
    href: '/protocolos/online',
    icon: <PlayCircle className="w-20 h-20 text-coral" />
  },
  {
    title: 'Jejum Hormonal® Presencial',
    subtitle: 'Consultas quinzenais com o Dr. Fernando, avaliação 3D e terapias médicas personalizadas.',
    href: '/protocolos/presencial',
    icon: <User className="w-20 h-20 text-coral" />
  }
]

const faqs = [
  {
    question: 'Como funciona o Jejum Hormonal?',
    answer: 'O Jejum Hormonal utiliza períodos estratégicos de jejum para otimizar a produção e regulação de hormônios essenciais como insulina, cortisol e hormônio do crescimento. Cada protocolo é personalizado conforme seu perfil hormonal e objetivos.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os primeiros sinais de melhora geralmente aparecem em 2-4 semanas, mas resultados significativos são observados em 2-3 meses. Cada pessoa responde de forma diferente ao protocolo personalizado.'
  },
  {
    question: 'Posso agendar uma consulta online?',
    answer: 'Sim! Oferecemos consultas presenciais em Vitória/ES e online via videoconferência. Ambas oferecem a mesma qualidade de atendimento, e você pode escolher a modalidade que melhor se adapta à sua rotina.'
  },
  {
    question: 'Quais são as áreas de atuação?',
    answer: 'Atuamos com emagrecimento inteligente, equilíbrio hormonal (menopausa, andropausa), otimização metabólica, jejum estratégico e saúde hormonal completa. Todos os protocolos são baseados em evidências científicas.'
  },
  {
    question: 'Os protocolos são seguros?',
    answer: 'Absolutamente. Todos os protocolos são baseados em evidências científicas sólidas, acompanhados por avaliações médicas completas e monitoramento contínuo para garantir segurança e eficácia.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer: 'O acompanhamento inclui check-ins semanais, ajustes no protocolo conforme necessário, suporte via WhatsApp e materiais educativos adicionais para maximizar seus resultados.'
  },
  {
    question: 'Vocês tratam lipedema?',
    answer: 'Sim! Atendemos pacientes com lipedema com uma abordagem completa que inclui avaliação hormonal, tratamento do desequilíbrio metabólico, protocolos de exercícios específicos e acompanhamento multidisciplinar para reduzir sintomas e melhorar qualidade de vida.'
  },
  {
    question: 'O lipedema tem cura?',
    answer: 'O lipedema é uma condição crônica, mas com tratamento adequado é possível controlar os sintomas, reduzir o acúmulo de gordura, diminuir inflamação e dor, e prevenir a progressão da doença. O protocolo inclui estratégias nutricionais, exercícios adaptados e manejo hormonal específico.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Manual Style */}
      <section 
        className="relative pt-2 pb-12 sm:pt-15 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 mobile-bg-center"
        style={{
          backgroundImage: 'url(/images/fundo-trans.png)',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-8 xl:pl-12">
          <div className="flex items-start pt-4 sm:pt-12 md:pt-16 lg:pt-20 min-h-[70vh]">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <ScrollReveal direction="up" delay={200}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 mb-4 sm:mb-6 text-center lg:text-left">
                  O médico que fez mais de <span className="text-coral">10 mil mulheres</span> voltarem a emagrecer com saúde <span className="text-coral">depois dos 40</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={400}>
                <p className="text-lg sm:text-xl text-charcoal-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                  <span className="font-semibold">Dr. Fernando Del Piero</span> - referência nacional em emagrecimento feminino.<br />
                  Unindo ciência e acompanhamento personalizado em protocolos desenhados para o metabolismo da mulher.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={600}>
                <div className="flex justify-center lg:justify-start mb-8 sm:mb-12">
                  <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto hover-glow">
                    <Link href="/quiz">
                      Começar agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
              
            </div>
          </div>
        </div>
      </section>

      {/* Video Banner Section - Manual Style */}
      <section className="py-6 bg-gradient-to-r from-coral to-peach-300 shadow-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🎥 Vídeos novos toda semana
              </h2>
              <p className="text-lg text-white/90">
                Dicas, protocolos e ciência aplicada no seu metabolismo
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
                <a href="https://www.youtube.com/@drfernandodelpiero" target="_blank" rel="noopener noreferrer">
                  ▶️ Assistir no YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explicação com Storytelling Clínico */}
      <section className="py-20 bg-gradient-to-b from-coral/10 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Entendendo o Metabolismo</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              Por que você não consegue mais emagrecer depois dos 40
              <span className="block mt-3 text-coral">e o que fazemos diferente</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-4xl mx-auto">
              A transição metabólica é um processo silencioso. Podemos tratá-lo com ciência.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white rounded-3xl shadow-xl p-8 border-t-4 border-coral hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-6 left-8 w-16 h-16 bg-coral rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                    {step.title}
                  </h3>
                  <div className="text-charcoal-700 leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-coral via-coral to-peach-300 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ciência aplicada ao seu metabolismo
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Chegou a sua vez de descobrir o que está travando seu emagrecimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100">
                  <Link href="/quiz">
                    <Calendar className="mr-2 h-5 w-5" />
                    Descobrir o que me trava
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 3 – Carrossel de Serviços */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Nossos Serviços</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              Escolha o acompanhamento ideal para você
              <span className="block mt-2 text-coral">protocolos personalizados</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Do diagnóstico ao acompanhamento contínuo.
            </p>
          </div>

          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Consulta Presencial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Consulta Presencial</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              Consulta que decifra seu metabolismo
              <span className="block mt-2 text-coral">em 1 hora</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Tecnologia 3D, ciência e diagnóstico preciso. Entenda por que seu corpo não responde mais.
            </p>
          </div>
          
          <ProcessCarousel 
            steps={consultaProcess} 
            ctaText="Agendar minha consulta presencial"
            ctaHref="/quiz"
          />
        </div>
      </section>

      {/* Consulta Digital Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Consulta Digital</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              A mesma análise completa
              <span className="block mt-2 text-coral">agora 100% online</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-4xl mx-auto">
              Análise completa com IA corporal. Para todo o Brasil.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-coral">
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 text-center">
                Envio de fotos e medidas
              </h3>
              <p className="text-charcoal-600 text-center">
                Protocolo visual padronizado para análise precisa
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-coral">
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 text-center">
                IA corporal
              </h3>
              <p className="text-charcoal-600 text-center">
                Gera relatório corporal preciso e comparativo
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-coral">
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 text-center">
                Interpretação clínica
              </h3>
              <p className="text-charcoal-600 text-center">
                Prescrição diretamente com o Dr. Fernando
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-coral">
              <div className="w-16 h-16 bg-gradient-to-br from-coral to-coral/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 text-center">
                Mesmo padrão
              </h3>
              <p className="text-charcoal-600 text-center">
                Personalização da versão presencial
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-coral via-coral to-peach-300 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Consulta completa sem sair de casa
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Mesma qualidade, para todo o Brasil.
              </p>
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Link href="/quiz">
                  Fazer minha análise online
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Social Proof Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-coral/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Provas Sociais</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-900 leading-tight mb-6">
              Resultados Reais
              <span className="block mt-2 text-coral">depoimentos e transformações</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Antes e depois de mulheres que descobriram o que travava o corpo delas.
            </p>
          </div>
          
          {/* Depoimentos Carrossel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-coral">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-charcoal-900">Maria Silva</div>
                  <div className="text-sm text-charcoal-600">Vitória, ES</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed italic">
                &ldquo;Descobri que meu metabolismo estava totalmente travado por causa da resistência à insulina. Depois do diagnóstico do Dr. Fernando, consegui perder 12kg em 3 meses seguindo o protocolo certo para meu caso.&rdquo;
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-coral">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-charcoal-900">Ana Costa</div>
                  <div className="text-sm text-charcoal-600">Serra, ES</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed italic">
                &ldquo;Passava anos tentando emagrecer sem sucesso. A consulta revelou desequilíbrios hormonais que nunca foram investigados. Hoje, 8 meses depois, minha qualidade de vida mudou completamente.&rdquo;
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-coral">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-charcoal-900">Patricia Lima</div>
                  <div className="text-sm text-charcoal-600">Cariacica, ES</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-700 leading-relaxed italic">
                &ldquo;Finalmente entendi o que estava acontecendo com meu corpo. O scanner 3D mostrou exatamente onde eu estava ganhando gordura e por quê. O tratamento personalizado fez toda a diferença.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-coral via-coral to-peach-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                O primeiro passo começa aqui
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Entenda seu metabolismo. Transforme seu corpo. Agende sua consulta.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link href="/quiz">
                  Começar minha análise
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-white/70 italic">
              Consulta presencial em Vitória – ES e atendimento digital para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
