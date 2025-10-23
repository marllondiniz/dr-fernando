import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FeatureCard } from '@/components/FeatureCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { 
  TrendingDown, 
  Heart, 
  Zap, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Dr. Fernando Del Piero - Saúde Metabólica sem Achismo',
  description: 'Saúde metabólica sem achismo. Plano médico claro, seguro e possível para a sua rotina. Emagrecimento inteligente, equilíbrio hormonal e desempenho com ciência aplicada.',
  path: '/'
})

const features = [
  {
    title: 'Jejum Hormonal',
    description: 'Protocolo especializado para otimização hormonal através do jejum estratégico e personalizado.',
    icon: <TrendingDown className="h-6 w-6" />,
    ctaText: 'Saiba mais',
    ctaHref: '/protocolos#jejum-hormonal'
  },
  {
    title: 'Saúde Hormonal',
    description: 'Abordagem completa para equilíbrio hormonal, incluindo menopausa, andropausa e otimização metabólica.',
    icon: <Heart className="h-6 w-6" />,
    ctaText: 'Saiba mais',
    ctaHref: '/protocolos#saude-hormonal'
  },
  {
    title: 'Emagrecimento Inteligente',
    description: 'Metabolismo acelerado, anti-platô e manutenção sustentável baseada em evidências científicas.',
    icon: <Zap className="h-6 w-6" />,
    ctaText: 'Saiba mais',
    ctaHref: '/protocolos#emagrecimento'
  }
]

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
    content: 'O jejum metabólico mudou minha vida. Mais energia, melhor foco e resultados que nunca consegui antes.',
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

const blogPosts = [
  {
    title: 'Jejum Metabólico: Guia Completo para Iniciantes',
    excerpt: 'Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados.',
    href: '/conteudo/jejum-metabolico-guia-completo',
    image: '/images/blog/jejum-guia.jpg',
    readTime: '8 min'
  },
  {
    title: 'Menopausa: Como Controlar os Sintomas Naturalmente',
    excerpt: 'Estratégias baseadas em evidências para uma menopausa mais tranquila e saudável.',
    href: '/conteudo/menopausa-sintomas-naturais',
    image: '/images/blog/menopausa.jpg',
    readTime: '6 min'
  },
  {
    title: 'Por que Você Não Consegue Emagrecer?',
    excerpt: 'Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável.',
    href: '/conteudo/por-que-nao-consegue-emagrecer',
    image: '/images/blog/emagrecimento.jpg',
    readTime: '7 min'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-champagne-200 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-100/50 to-peach-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,157,110,0.1),transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-charcoal-900 leading-tight">
                  <span className="block font-serif">A saúde metabólica</span>
                  <span className="block text-peach-300 font-serif">reflete quem você é.</span>
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed text-charcoal-700 font-light max-w-2xl">
                  Na consultoria do Dr. Fernando, cada detalhe do seu metabolismo é tratado com 
                  <span className="text-peach-400 font-medium"> cuidado, técnica e propósito</span> para 
                  realçar sua melhor versão com naturalidade e harmonia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button asChild size="lg" className="bg-peach-300 hover:bg-peach-400 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                    <Phone className="mr-3 h-6 w-6" />
                    Agendar uma consulta!
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-champagne-400 text-champagne-700 hover:bg-champagne-400 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105">
                  <Link href="/protocolos">
                    Conhecer protocolos
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative lg:ml-8">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-peach-300 rounded-full opacity-60"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-peach-200 rounded-full opacity-40"></div>
                
                <div className="relative z-10">
                  {/* Imagem removida conforme solicitado */}
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-champagne-100/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-peach-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-champagne-200 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-champagne-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-charcoal-900">500+</div>
                      <div className="text-sm text-charcoal-600">Pacientes atendidos</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-champagne-100/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-peach-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-peach-200 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-peach-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-charcoal-900">95%</div>
                      <div className="text-sm text-charcoal-600">Satisfação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 mb-6">
              <span className="font-serif">Mais do que medicina, uma</span>
              <span className="block text-peach-300 font-serif">experiência de confiança e bem-estar.</span>
            </h2>
            <p className="text-xl text-charcoal-700 font-light max-w-4xl mx-auto leading-relaxed">
              A consultoria do Dr. Fernando nasceu com o propósito de unir 
              <span className="text-peach-400 font-medium"> ciência, arte e sensibilidade</span> em cada procedimento. 
              Aqui, cada tratamento é pensado de forma personalizada, valorizando o seu traço único e respeitando o seu tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-champagne-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-peach-300 transition-colors duration-300">
                <Users className="h-10 w-10 text-champagne-700" />
              </div>
              <div className="text-5xl font-bold text-charcoal-900 mb-2">500+</div>
              <div className="text-lg text-charcoal-600 font-medium">Pacientes atendidos</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-peach-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-peach-300 transition-colors duration-300">
                <Clock className="h-10 w-10 text-peach-700" />
              </div>
              <div className="text-5xl font-bold text-charcoal-900 mb-2">5+</div>
              <div className="text-lg text-charcoal-600 font-medium">Anos de experiência</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-peach-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-champagne-400 transition-colors duration-300">
                <Star className="h-10 w-10 text-champagne-700" />
              </div>
              <div className="text-5xl font-bold text-charcoal-900 mb-2">95%</div>
              <div className="text-lg text-charcoal-600 font-medium">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-champagne-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-50/80 to-peach-50/60"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-champagne-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-peach-200 rounded-full opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 mb-6">
              <span className="font-serif">Como posso</span>
              <span className="block text-peach-400 font-serif">ajudar você</span>
            </h2>
            <p className="text-xl text-charcoal-700 font-light max-w-3xl mx-auto leading-relaxed">
              Protocolos baseados em evidências científicas para 
              <span className="text-champagne-600 font-medium"> resultados reais e sustentáveis</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-champagne-100/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-champagne-200 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-peach-200 to-peach-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-peach-700">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-serif">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-700 leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>
                  <Button asChild variant="outline" className="border-peach-400 text-peach-400 hover:bg-peach-400 hover:text-white rounded-full px-6 py-3 transition-all duration-300 hover:scale-105">
                    <Link href={feature.ctaHref}>
                      {feature.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jejum Hormonal Highlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Jejum Hormonal
              </h2>
              <p className="text-lg text-peach-400 font-semibold mb-6">
                Protocolo especializado para otimização hormonal
              </p>
              <p className="text-lg text-charcoal-700 mb-6">
                O Jejum Hormonal é uma abordagem científica que utiliza o jejum estratégico para otimizar a produção e regulação de hormônios essenciais como insulina, cortisol, hormônio do crescimento e hormônios sexuais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-peach-400" />
                  <span className="text-charcoal-700">Otimização da insulina</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-3 h-5 w-5 text-peach-400" />
                  <span className="text-charcoal-700">Regulação do cortisol</span>
                </div>
                <div className="flex items-center">
                  <TrendingDown className="mr-3 h-5 w-5 text-peach-400" />
                  <span className="text-charcoal-700">Aumento do GH</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/protocolos#jejum-hormonal">
                    Conhecer o protocolo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/jejum-hormonal.jpg"
                alt="Jejum Hormonal"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              * Resultados variam por indivíduo
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conteúdo científico
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Artigos baseados em evidências para sua jornada de saúde
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime} de leitura</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={post.href}>
                        Ler artigo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/conteudo">
                Ver todos os artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
