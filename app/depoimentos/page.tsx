import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/TestimonialCard'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { Calendar, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Depoimentos - Dr. Fernando Del Piero',
  description: 'Veja o que nossos pacientes dizem sobre os resultados alcançados com os protocolos do Dr. Fernando Del Piero. Histórias reais de transformação.',
  path: '/depoimentos'
})

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Vitória, ES',
    content: 'Perdi 15kg em 4 meses seguindo o protocolo do Dr. Fernando. O melhor: sem passar fome e mantendo a energia para treinar. Recomendo de olhos fechados!',
    rating: 5
  },
  {
    name: 'Ana Costa',
    location: 'Serra, ES',
    content: 'A menopausa não foi mais um problema depois que comecei o acompanhamento. Sintomas controlados e qualidade de vida restaurada. Gratidão eterna!',
    rating: 5
  },
  {
    name: 'Carlos Santos',
    location: 'Vila Velha, ES',
    content: 'O jejum hormonal mudou minha vida. Mais energia, melhor foco e resultados que nunca consegui antes. Dr. Fernando é excepcional!',
    rating: 5
  },
  {
    name: 'Patricia Lima',
    location: 'Cariacica, ES',
    content: 'Abordagem científica e personalizada. Finalmente encontrei um médico que entende de metabolismo de verdade. Resultados incríveis!',
    rating: 5
  },
  {
    name: 'Roberto Oliveira',
    location: 'Vitória, ES',
    content: 'Sai do platô de peso que durava anos. O protocolo do Dr. Fernando é eficaz e sustentável. Mudou completamente minha relação com a comida.',
    rating: 5
  },
  {
    name: 'Fernanda Rocha',
    location: 'Guarapari, ES',
    content: 'Excelente profissional! Explicações claras e resultados reais. Recomendo para quem busca saúde de verdade, não apenas estética.',
    rating: 5
  },
  {
    name: 'João Mendes',
    location: 'Vitória, ES',
    content: 'Depois de anos tentando emagrecer, finalmente encontrei algo que funciona. O Dr. Fernando entende o metabolismo como ninguém.',
    rating: 5
  },
  {
    name: 'Lucia Ferreira',
    location: 'Serra, ES',
    content: 'Aos 45 anos, pensei que seria impossível ter o corpo que sempre quis. Com o protocolo correto, consegui resultados que nunca imaginei.',
    rating: 5
  },
  {
    name: 'Marcos Alves',
    location: 'Vila Velha, ES',
    content: 'Profissional excepcional! Metodologia baseada em ciência, resultados comprovados. Recomendo para quem quer mudança real.',
    rating: 5
  },
  {
    name: 'Carla Mendonça',
    location: 'Vitória, ES',
    content: 'O acompanhamento é completo e personalizado. Dr. Fernando realmente se importa com cada paciente. Resultados que falam por si.',
    rating: 5
  },
  {
    name: 'Ricardo Souza',
    location: 'Cariacica, ES',
    content: 'Depois de várias tentativas frustradas, finalmente encontrei um método que funciona. O protocolo é sustentável e os resultados são duradouros.',
    rating: 5
  },
  {
    name: 'Juliana Martins',
    location: 'Guarapari, ES',
    content: 'Abordagem diferenciada e resultados excepcionais. Dr. Fernando transformou minha saúde e minha autoestima. Gratidão infinita!',
    rating: 5
  }
]

export default function DepoimentosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Depoimentos de Pacientes
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação e resultados alcançados através dos 
              protocolos baseados em evidências científicas.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">10.000+</div>
              <div className="text-gray-600">Mulheres Atendidas</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-gray-600">Taxa de satisfação</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">4.9</div>
              <div className="text-gray-600">Avaliação média</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O que nossos pacientes dizem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Resultados reais de pessoas reais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Disclaimer */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="bg-champagne-50 border border-champagne-200 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
              Aviso Importante
            </h3>
            <p className="text-charcoal-700">
              Os resultados apresentados são baseados em experiências individuais e podem variar de pessoa para pessoa. 
              Cada organismo responde de forma diferente aos protocolos aplicados. Os resultados dependem de diversos 
              fatores como adesão ao protocolo, histórico médico, estilo de vida e características individuais.
            </p>
            <p className="text-charcoal-700 mt-4">
              <strong>Resultados variam por indivíduo.</strong> Consulte sempre um médico antes de iniciar qualquer 
              protocolo de saúde ou mudança significativa no estilo de vida.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
