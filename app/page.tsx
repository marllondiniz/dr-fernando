import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { ScrollReveal } from '@/components/ScrollReveal'
import { 
  TrendingDown, 
  Heart, 
  Zap, 
  Star,
  ArrowRight,
  Calendar
} from 'lucide-react'

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

const blogPosts = [
  {
    title: 'Jejum Hormonal: Guia Completo para Iniciantes',
    excerpt: 'Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados.',
    href: '/conteudo/jejum-metabolico-guia-completo',
    image: '/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp',
    readTime: '8 min'
  },
  {
    title: 'Menopausa: Como Controlar os Sintomas Naturalmente',
    excerpt: 'Estratégias baseadas em evidências para uma menopausa mais tranquila e saudável.',
    href: '/conteudo/menopausa-sintomas-naturais',
    image: '/images/meno-pausa.webp',
    readTime: '6 min'
  },
  {
    title: 'Por que Você Não Consegue Emagrecer?',
    excerpt: 'Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável.',
    href: '/conteudo/por-que-nao-consegue-emagrecer',
    image: '/images/por-que-nao-consegue-emagrecer.webp',
    readTime: '7 min'
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
                  Cuidar da sua <span className="text-coral text-glow">saúde</span> nunca foi tão <span className="text-coral text-glow">simples</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={400}>
                <p className="text-lg sm:text-xl text-charcoal-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                  Sem filas, sem burocracia, sem protocolos prontos.<br />
                  Aqui, ciência e tecnologia se unem para criar um tratamento totalmente personalizado e monitorado do início ao fim.
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
              
              {/* Stats Section - Desktop Only */}
              <div className="hidden sm:block max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-coral mb-1">2000+</div>
                    <div className="text-sm lg:text-base text-charcoal-600">Clientes Atendidos</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-coral mb-1">95%</div>
                    <div className="text-sm lg:text-base text-charcoal-600">Taxa de Sucesso</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-coral mb-1">-15kg</div>
                    <div className="text-sm lg:text-base text-charcoal-600">Perda Média</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-coral mb-1">5</div>
                    <div className="text-sm lg:text-base text-charcoal-600">Anos de Experiência</div>
                  </div>
                </div>
              </div>
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
                🎥 Vídeo Exclusivo
              </h2>
              <p className="text-lg text-white/90">
                O protocolo que <span className="font-bold">ACELERA</span> o metabolismo e <span className="font-bold">DESTRAVA</span> o emagrecimento
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-coral hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
                <a href="https://www.youtube.com/watch?v=7pdKn_5r8Is" target="_blank" rel="noopener noreferrer">
                  ▶️ Assistir no YouTube
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coral px-6 py-3 rounded-full font-semibold">
                <Link href="/quiz">
                  Fazer Avaliação Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section - Manual Style */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-charcoal-900 mb-6 text-glow">
                O jeito mais prático de cuidar da sua saúde
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal direction="left" delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Consultas presenciais e online
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Atendimento presencial em Vitória/ES ou online. Questionário rápido para avaliação médica personalizada.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="text-center">
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Tratamentos aprovados
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Protocolos baseados em evidências científicas, para você ter as melhores opções de tratamentos para o seu caso.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={600}>
              <div className="text-center">
                <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">
                  Acompanhamento clínico
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Suporte médico completo durante todo o tratamento. Especialistas disponíveis para dúvidas sobre medicações e efeitos colaterais.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Treatments Section - Manual Style */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-charcoal-900 mb-6">
              Tratamentos baseados na ciência, personalizados para você
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/images/emagrecimento-inteligente.avif"
                  alt="Emagrecimento Inteligente"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                  Emagrecimento Inteligente
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Crie hábitos saudáveis e emagreça com ajuda de protocolos prescritos por médicos e acompanhamento nutricional.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/protocolos#emagrecimento">
                    Veja os tratamentos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/images/Saúde Hormonal.jpeg"
                  alt="Saúde Hormonal"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                  Saúde Hormonal
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Equilibre seus hormônios com tratamentos comprovados e realizados com discrição - da prescrição ao acompanhamento.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/protocolos#saude-hormonal">
                    Veja os tratamentos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/images/Jejum Hormonal.jpeg"
                  alt="Jejum Hormonal"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                  Jejum Hormonal
                </h3>
                <p className="text-charcoal-600 mb-4">
                  Otimize seu metabolismo com protocolos de jejum estratégico baseados em evidências científicas.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/protocolos#jejum-hormonal">
                    Veja os tratamentos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section - Manual Style */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-charcoal-900 mb-6">
              O que nossos pacientes dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-700 mb-4 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="text-sm text-charcoal-600">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div>{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section - Manual Style */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-charcoal-900 mb-6">
              Blog
            </h2>
            <p className="text-xl text-charcoal-600">
              Artigos baseados em evidências para sua jornada de saúde
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 3}
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-500">{post.readTime} de leitura</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={post.href}>
                        Ler artigo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
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
