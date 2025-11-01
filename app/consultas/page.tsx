import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { generateMetadata, whatsappLink } from '@/lib/utils'
import { 
  CheckCircle, 
  Calendar, 
  FileText, 
  Users,
  Clock,
  Shield,
  Phone,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Consulta de Análise Metabólica - Dr. Fernando Del Piero',
  description: 'Atendimento médico individual com o Dr. Fernando Del Piero. Decifrando o metabolismo da mulher, identificando travas hormonais e definindo o plano certo antes de qualquer tratamento.',
  path: '/consultas'
})

const includedItems = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Atendimento individual com o Dr. Fernando',
    description: 'Consulta presencial exclusiva com duração média de 1 hora.'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Análise detalhada do metabolismo',
    description: 'Estudo dos principais eixos hormonais, metabólicos e inflamatórios.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Avaliação corporal com tecnologia 3D (Visbody)',
    description: 'Scanner 360° para acompanhamento visual preciso e bioimpedância avançada.'
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Mapeamento alimentar e emocional',
    description: 'Análise clínica dos padrões de fome, saciedade e gatilhos emocionais.'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Solicitação e interpretação de exames',
    description: 'Exames bioquímicos e hormonais interpretados pessoalmente pelo Dr. Fernando.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Condutas iniciais e plano de ação',
    description: 'Prescrição médica e suplementar individualizada com orientações baseadas em evidências.'
  }
]

const digitalItems = [
  'Envio de fotos e medidas',
  'IA corporal gera relatório',
  'Interpretação clínica com o Dr. Fernando',
  'Mesma personalização da versão presencial'
]

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Vitória, ES',
    content: 'Descobri que meu metabolismo estava totalmente travado por causa da resistência à insulina. Depois do diagnóstico do Dr. Fernando, consegui perder 12kg em 3 meses seguindo o protocolo certo para meu caso.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    location: 'Serra, ES',
    content: 'Passava anos tentando emagrecer sem sucesso. A consulta revelou desequilíbrios hormonais que nunca foram investigados. Hoje, 8 meses depois, minha qualidade de vida mudou completamente.',
    rating: 5
  },
  {
    name: 'Patricia Lima',
    location: 'Cariacica, ES',
    content: 'Finalmente entendi o que estava acontecendo com meu corpo. O scanner 3D mostrou exatamente onde eu estava ganhando gordura e por quê. O tratamento personalizado fez toda a diferença.',
    rating: 5
  },
  {
    name: 'Fernanda Rocha',
    location: 'Guarapari, ES',
    content: 'A abordagem é completamente diferente. Em vez de dietas genéricas, recebi um plano baseado na minha biologia. Perdi 15kg e ganhei energia que eu nem sabia que tinha perdido.',
    rating: 5
  },
  {
    name: 'Carla Santos',
    location: 'Vila Velha, ES',
    content: 'Mais importante que o peso que perdi foi descobrir que meu metabolismo estava desacelerado. Agora tenho um protocolo que funciona para minha realidade hormonal.',
    rating: 5
  },
  {
    name: 'Juliana Oliveira',
    location: 'Vitória, ES',
    content: 'A análise metabólica mostrou que minhas tentativas de emagrecimento estavam sabotadas pelos hormônios. Com o protocolo certo, os resultados vieram naturalmente.',
    rating: 5
  }
]

export default function ConsultasPage() {
  return (
    <div className="min-h-screen">
      {/* DOBRA 2 – Hero Secundário */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              A consulta que revela o que está <span className="text-coral">impedindo o seu corpo</span> de emagrecer
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Atendimento médico individual com o Dr. Fernando Del Piero, autor do Jejum Hormonal®.<br />
              Nesta consulta, o objetivo é decifrar o metabolismo da mulher, identificar travas hormonais e definir o plano certo antes de qualquer tratamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta de análise metabólica.')}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/quiz">
                  Fazer autoavaliação
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 3 – Storytelling Clínico */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Por que a maioria das mulheres não consegue mais emagrecer depois dos 40
                <span className="block mt-3 text-coral">e o que fazemos diferente</span>
            </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Depois dos 40, o metabolismo feminino passa por uma <span className="font-semibold text-coral">transição silenciosa</span>. As oscilações hormonais, a queda da massa magra, a resistência à insulina e os padrões de estresse fazem o corpo parar de responder como antes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                O erro mais comum é tentar &quot;consertar&quot; isso com dietas genéricas, remédios isolados ou protocolos prontos sem entender o que realmente está acontecendo por dentro.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                A <span className="font-semibold text-green-600">Consulta de Análise Metabólica foi criada exatamente para isso</span>: investigar, medir e compreender o corpo da mulher com precisão científica, antes de qualquer tratamento.
            </p>
          </div>
          
            {/* Visual – Gráfico ou ilustração */}
            <div className="bg-gradient-to-br from-coral/10 to-peach-200/10 rounded-2xl p-8 text-center border border-coral/20">
              <div className="text-2xl font-bold text-gray-900 mb-4">
                💡 Compreender antes de tratar = resultado real
                </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-coral mb-2">🎯</div>
                  <div className="text-sm font-semibold text-gray-900">Investigação</div>
                  <div className="text-xs text-gray-600 mt-1">Identificar travas metabólicas</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-coral mb-2">📊</div>
                  <div className="text-sm font-semibold text-gray-900">Mapeamento</div>
                  <div className="text-xs text-gray-600 mt-1">Ciência aplicada ao corpo</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-3xl font-bold text-coral mb-2">✅</div>
                  <div className="text-sm font-semibold text-gray-900">Resultado</div>
                  <div className="text-xs text-gray-600 mt-1">Plano certo para você</div>
                </div>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 – O que está incluso na consulta */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Uma consulta médica de alta performance
              <span className="block mt-2 text-coral">feita para decifrar o metabolismo feminino</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em cerca de 1 hora, o Dr. Fernando realiza uma análise clínica completa, combinando tecnologia, ciência e escuta humana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {includedItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mb-6 text-coral">
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

          <div className="text-center">
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
              <Link href={whatsappLink('Olá! Gostaria de agendar minha consulta presencial de análise metabólica.')}>
                <Calendar className="mr-2 h-5 w-5" />
                Agendar minha consulta presencial
              </Link>
            </Button>
          </div>
                    </div>
      </section>

      {/* DOBRA 5 – Consulta Digital */}
      <section className="py-20 bg-gradient-to-br from-coral/5 via-white to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                A mesma análise completa
                <span className="block mt-2 text-coral">agora 100% online</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Versão digital da consulta, com IA corporal e atendimento via telemedicina.
              </p>
                    </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {digitalItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-coral/5 to-peach-200/5 border border-coral/20">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                <Link href={whatsappLink('Olá! Gostaria de agendar minha consulta online de análise metabólica.')}>
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar consulta online
                </Link>
              </Button>
              </div>
          </div>
        </div>
      </section>

      {/* DOBRA 6 – Resultados e depoimentos */}
      <section className="py-20 bg-gradient-to-br from-coral/5 via-white to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Mais de 10 mil mulheres já descobriram
              <span className="block mt-2 text-coral">o que travava o corpo delas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada diagnóstico abre uma nova história. Veja o que dizem algumas pacientes que começaram a transformação pela Consulta de Análise Metabólica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-coral">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOBRA 7 – CTA Final */}
      <section className="py-20 bg-gradient-to-br from-coral via-coral to-peach-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              O primeiro passo para o seu novo corpo começa aqui
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Entender o metabolismo é o início de todo resultado real e duradouro.<br />
              Agende sua análise metabólica agora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta de análise metabólica com o Dr. Fernando.')}>
                  Agendar minha consulta
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-white/70 italic">
              Consulta presencial em Vitória – ES e online para todo o Brasil.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}