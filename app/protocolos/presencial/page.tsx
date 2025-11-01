import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { generateMetadata, whatsappLink } from '@/lib/utils'
import { 
  Users,
  FileText,
  Shield,
  CheckCircle,
  Zap,
  Sparkles,
  Calendar,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Jejum Hormonal® Experience Presencial - Dr. Fernando Del Piero',
  description: 'O acompanhamento médico que fez milhares de mulheres voltarem a emagrecer com saúde e resultado real.',
  path: '/protocolos/presencial'
})

const includedItems = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Atendimento VIP com o Dr. Fernando',
    description: 'Consultas quinzenais individuais com acompanhamento médico personalizado.'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Estratégias metabólicas 100% personalizadas',
    description: 'Protocolo baseado na sua biologia, metabolismo e histórico clínico.'
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Acompanhamento nutricional contínuo',
    description: 'Suporte nutricional integrado com ajustes semanais conforme evolução.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Terapias injetáveis personalizadas',
    description: 'Sessões de terapia médica injetável conforme necessidade clínica.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Avaliação 3D e bioimpedância',
    description: 'Scanner VISBODY 360° em cada consulta para acompanhamento preciso.'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Plano nutricional e suporte ativo',
    description: 'Prescrição alimentar + suporte via WhatsApp para dúvidas e orientações.'
  }
]

const testimonials = [
  {
    name: 'Maria Silva',
    content: 'O Experience mudou completamente minha relação com o corpo. Mais energia, clareza mental e resultados que eu nunca consegui antes.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    content: 'O acompanhamento quinzenal faz toda a diferença. O Dr. Fernando ajusta o protocolo conforme eu vou evoluindo.',
    rating: 5
  },
  {
    name: 'Patricia Lima',
    content: 'Sempre fiz dietas que não funcionavam. Com o Experience, entendi que o problema não era a comida, era a minha biologia.',
    rating: 5
  }
]

export default function ExperiencePresencialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-coral/10 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-coral/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-coral">Jejum Hormonal® Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              O acompanhamento médico que fez milhares de mulheres voltarem a emagrecer
              <span className="block mt-3 text-coral">com saúde e resultado real</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Criado pelo Dr. Fernando Del Piero, o Jejum Hormonal® Experience combina ciência hormonal, personalização e acompanhamento contínuo — para mulheres 40+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                <Link href={whatsappLink('Olá! Gostaria de conhecer o Jejum Hormonal® Experience presencial.')}>
                  Conhecer o Experience
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Mais do que um protocolo.<br /> Uma experiência de transformação
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Criado após acompanhar mais de 10 mil mulheres, o Experience une ciência, tecnologia e acompanhamento humano — com ajustes clínicos a cada ciclo.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Diferente de métodos genéricos, cada protocolo é desenhado especificamente para o metabolismo e histórico hormonal de cada paciente. Não há receita pronta — há um mapa personalizado.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-coral">O resultado?</span> Mulheres que voltaram a emagrecer, recuperaram energia, equilibraram hormônios e construíram uma relação saudável com o próprio corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocos de Valor */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              O que está incluso no Jejum Hormonal® Experience Presencial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um acompanhamento médico completo, com todos os recursos necessários para sua transformação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {includedItems.map((item, index) => (
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

          <div className="text-center">
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
              <Link href={whatsappLink('Olá! Gostaria de fazer parte do Jejum Hormonal® Experience presencial.')}>
                <Calendar className="mr-2 h-5 w-5" />
                Quero fazer parte do Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-gradient-to-br from-coral/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Resultados reais de mulheres reais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o que dizem algumas pacientes do Experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-coral">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
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
              A experiência clínica que une ciência, tecnologia e personalização
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
              Vagas limitadas, exclusivas para quem já realizou a Consulta de Análise Metabólica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100">
                <Link href={whatsappLink('Olá! Gostaria de agendar minha consulta do Jejum Hormonal® Experience.')}>
                  <Calendar className="mr-2 h-6 w-6" />
                  Agendar minha consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

