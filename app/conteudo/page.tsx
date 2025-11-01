'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink } from '@/lib/utils'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    slug: 'jejum-metabolico-guia-completo',
    title: 'Jejum Hormonal: Guia Completo para Iniciantes',
    excerpt: 'Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados. Tudo que você precisa saber para começar.',
    image: '/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp',
    readTime: '8 min',
    date: '2024-01-15',
    tags: ['jejum', 'metabolismo', 'emagrecimento']
  },
  {
    slug: 'menopausa-sintomas-naturais',
    title: 'Menopausa: Como Controlar os Sintomas Naturalmente',
    excerpt: 'Estratégias baseadas em evidências para uma menopausa mais tranquila e saudável. Controle os sintomas sem medicamentos.',
    image: '/images/meno-pausa.webp',
    readTime: '6 min',
    date: '2024-01-10',
    tags: ['menopausa', 'saúde da mulher', 'hormônios']
  },
  {
    slug: 'por-que-nao-consegue-emagrecer',
    title: 'Por que Você Não Consegue Emagrecer?',
    excerpt: 'Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável. Descubra o que pode estar impedindo seus resultados.',
    image: '/images/por-que-nao-consegue-emagrecer.webp',
    readTime: '7 min',
    date: '2024-01-05',
    tags: ['emagrecimento', 'metabolismo', 'nutrição']
  },
  {
    slug: 'metabolismo-lento-solucoes',
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    excerpt: 'Entenda as causas do metabolismo lento e aprenda estratégias comprovadas para acelerá-lo naturalmente.',
    image: '/images/blog/metabolismo.webp',
    readTime: '9 min',
    date: '2024-01-01',
    tags: ['metabolismo', 'ciência', 'nutrição']
  },
  {
    slug: 'hormonios-emagrecimento',
    title: 'Hormônios e Emagrecimento: A Conexão Essencial',
    excerpt: 'Como os hormônios influenciam o peso e quais estratégias usar para equilibrá-los e acelerar o emagrecimento.',
    image: '/images/blog/hormonios-emagrecimento.jpg',
    readTime: '10 min',
    date: '2023-12-28',
    tags: ['hormônios', 'emagrecimento', 'ciência']
  },
  {
    slug: 'exercicio-jejum-beneficios',
    title: 'Exercício em Jejum: Benefícios e Precauções',
    excerpt: 'Descubra quando e como treinar em jejum para maximizar os resultados, sempre com segurança e baseado em evidências.',
    image: '/images/blog/exercicio-jejum.jpg',
    readTime: '8 min',
    date: '2023-12-25',
    tags: ['exercício', 'jejum', 'treino']
  },
  {
    slug: 'lipedema-tratamento-completo',
    title: 'Lipedema: Diagnóstico e Tratamento Abordagem Completa',
    excerpt: 'Entenda o lipedema, seus sintomas, diagnóstico e estratégias de tratamento para reduzir dor, inflamação e acúmulo de gordura.',
    image: '/images/lipedema.jpeg',
    readTime: '12 min',
    date: '2024-01-20',
    tags: ['lipedema', 'saúde da mulher', 'tratamento']
  }
]

const categories = [
  { name: 'Todos', count: blogPosts.length, filter: 'all' },
  { name: 'Jejum', count: blogPosts.filter(post => post.tags.includes('jejum')).length, filter: 'jejum' },
  { name: 'Menopausa', count: blogPosts.filter(post => post.tags.includes('menopausa')).length, filter: 'menopausa' },
  { name: 'Emagrecimento', count: blogPosts.filter(post => post.tags.includes('emagrecimento')).length, filter: 'emagrecimento' },
  { name: 'Metabolismo', count: blogPosts.filter(post => post.tags.includes('metabolismo')).length, filter: 'metabolismo' },
  { name: 'Lipedema', count: blogPosts.filter(post => post.tags.includes('lipedema')).length, filter: 'lipedema' }
]

export default function ConteudoPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeFilter))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Blog
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto px-4">
              Artigos baseados em evidências científicas sobre metabolismo, emagrecimento, 
              menopausa e jejum hormonal. Conteúdo educativo para sua jornada de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category.filter ? "default" : "outline"}
                className="rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2"
                onClick={() => setActiveFilter(category.filter)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
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
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm">{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl line-clamp-2 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm sm:text-base leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild size="lg" className="w-full bg-coral hover:bg-coral/90 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-sm">
                    <Link href={`/conteudo/${post.slug}`}>
                      Ler artigo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
