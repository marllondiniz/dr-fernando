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
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Saúde metabólica{' '}
                <span className="text-primary">sem achismo</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Plano médico claro, seguro e possível para a sua rotina. 
                Emagrecimento inteligente, equilíbrio hormonal e 
                desempenho com ciência aplicada.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar consulta
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/protocolos">
                    Conhecer protocolos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-dr-fernando.jpg"
                alt="Dr. Fernando Del Piero"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Pacientes atendidos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-gray-600">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Como posso ajudar você
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Protocolos baseados em evidências científicas para resultados reais e sustentáveis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
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
              <p className="text-lg text-primary font-semibold mb-6">
                Protocolo especializado para otimização hormonal
              </p>
              <p className="text-lg text-gray-600 mb-6">
                O Jejum Hormonal é uma abordagem científica que utiliza o jejum estratégico para otimizar a produção e regulação de hormônios essenciais como insulina, cortisol, hormônio do crescimento e hormônios sexuais.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <span className="text-gray-700">Otimização da insulina</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-3 h-5 w-5 text-primary" />
                  <span className="text-gray-700">Regulação do cortisol</span>
                </div>
                <div className="flex items-center">
                  <TrendingDown className="mr-3 h-5 w-5 text-primary" />
                  <span className="text-gray-700">Aumento do GH</span>
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

      {/* CTA Final */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para transformar sua saúde?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground">
            Agende sua consulta e comece sua jornada rumo ao bem-estar
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25">
              <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}>
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Online
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
