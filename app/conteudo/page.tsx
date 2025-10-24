'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink } from '@/lib/utils'
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react'

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
  }
]

const categories = [
  { name: 'Todos', count: blogPosts.length, filter: 'all' },
  { name: 'Jejum', count: blogPosts.filter(post => post.tags.includes('jejum')).length, filter: 'jejum' },
  { name: 'Menopausa', count: blogPosts.filter(post => post.tags.includes('menopausa')).length, filter: 'menopausa' },
  { name: 'Emagrecimento', count: blogPosts.filter(post => post.tags.includes('emagrecimento')).length, filter: 'emagrecimento' },
  { name: 'Metabolismo', count: blogPosts.filter(post => post.tags.includes('metabolismo')).length, filter: 'metabolismo' }
]

export default function ConteudoPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeFilter))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Artigos baseados em evidências científicas sobre metabolismo, emagrecimento, 
              menopausa e jejum hormonal. Conteúdo educativo para sua jornada de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category.filter ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveFilter(category.filter)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
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

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary to-peach-300 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Quer receber mais conteúdo?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Receba artigos exclusivos e dicas científicas diretamente no seu WhatsApp
              </p>
              <Button asChild size="lg" variant="secondary">

                <Link href={whatsappLink('Olá! Gostaria de receber conteúdo do blog sobre saúde e metabolismo.')}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Receber Conteúdo
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
