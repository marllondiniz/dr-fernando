import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { Calendar, Clock, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Menopausa: Como Controlar os Sintomas Naturalmente - Dr. Fernando Del Piero',
  description: 'Estratégias baseadas em evidências para uma menopausa mais tranquila e saudável. Controle os sintomas sem medicamentos.',
  path: '/conteudo/menopausa-sintomas-naturais'
})

const relatedPosts = [
  {
    title: 'Hormônios e Emagrecimento: A Conexão Essencial',
    slug: 'hormonios-emagrecimento',
    image: '/images/blog/Emagrecimento-feminino-e-hormonios.jpg',
    readTime: '10 min'
  },
  {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    slug: 'metabolismo-lento-solucoes',
    image: '/images/blog/metabolismo.webp',
    readTime: '9 min'
  },
  {
    title: 'Jejum Hormonal: Guia Completo para Iniciantes',
    slug: 'jejum-metabolico-guia-completo',
    image: '/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp',
    readTime: '8 min'
  }
]

export default function MenopausaPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  10/01/2024
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  6 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Menopausa: Como Controlar os Sintomas Naturalmente
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Estratégias baseadas em evidências para uma menopausa mais tranquila e saudável. 
                Controle os sintomas sem medicamentos.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  menopausa
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  saúde da mulher
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  hormônios
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/meno-pausa.webp"
                alt="Menopausa: Como Controlar os Sintomas Naturalmente"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Entendendo a Menopausa</h2>
            <p>
              A menopausa é uma fase natural da vida da mulher que marca o fim da capacidade reprodutiva. 
              Durante este período, os níveis de estrogênio e progesterona diminuem significativamente, 
              causando uma série de sintomas que podem afetar a qualidade de vida.
            </p>
            
            <p>
              Embora seja um processo natural, existem estratégias baseadas em evidências científicas 
              que podem ajudar a controlar os sintomas de forma natural, sem necessidade de medicamentos.
            </p>

            <h2>Sintomas Mais Comuns</h2>
            <p>
              Os sintomas da menopausa variam de mulher para mulher, mas os mais comuns incluem:
            </p>
            
            <ul>
              <li><strong>Fogachos (ondas de calor):</strong> Sensação súbita de calor intenso</li>
              <li><strong>Suores noturnos:</strong> Interferem na qualidade do sono</li>
              <li><strong>Alterações de humor:</strong> Irritabilidade, ansiedade e depressão</li>
              <li><strong>Secura vaginal:</strong> Pode causar desconforto e dor</li>
              <li><strong>Ganho de peso:</strong> Especialmente na região abdominal</li>
              <li><strong>Fadiga:</strong> Cansaço constante e falta de energia</li>
            </ul>

            <h2>Estratégias Naturais para Controle dos Sintomas</h2>
            
            <h3>1. Alimentação Anti-inflamatória</h3>
            <p>
              Uma dieta rica em alimentos anti-inflamatórios pode ajudar significativamente:
            </p>
            
            <ul>
              <li>Vegetais crucíferos (brócolis, couve, repolho)</li>
              <li>Frutas vermelhas e roxas</li>
              <li>Gorduras saudáveis (azeite, abacate, castanhas)</li>
              <li>Proteínas de alta qualidade</li>
              <li>Evitar açúcares refinados e alimentos processados</li>
            </ul>

            <h3>2. Exercícios Regulares</h3>
            <p>
              A atividade física é fundamental durante a menopausa:
            </p>
            
            <ul>
              <li><strong>Treino de força:</strong> Preserva massa muscular e densidade óssea</li>
              <li><strong>Exercícios aeróbicos:</strong> Melhora o humor e reduz o estresse</li>
              <li><strong>Yoga e meditação:</strong> Controlam ansiedade e melhoram o sono</li>
            </ul>

            <h3>3. Gestão do Estresse</h3>
            <p>
              O estresse crônico pode piorar os sintomas da menopausa:
            </p>
            
            <ul>
              <li>Técnicas de respiração profunda</li>
              <li>Meditação mindfulness</li>
              <li>Atividades relaxantes (leitura, música, natureza)</li>
              <li>Terapia quando necessário</li>
            </ul>

            <h3>4. Suplementação Natural</h3>
            <p>
              Alguns suplementos podem ajudar (sempre com orientação médica):
            </p>
            
            <ul>
              <li><strong>Ômega-3:</strong> Reduz inflamação e melhora humor</li>
              <li><strong>Vitamina D:</strong> Essencial para saúde óssea</li>
              <li><strong>Magnésio:</strong> Melhora sono e reduz ansiedade</li>
              <li><strong>Probióticos:</strong> Suportam saúde intestinal</li>
            </ul>

            <h2>Mudanças no Estilo de Vida</h2>
            
            <h3>Sono de Qualidade</h3>
            <p>
              Priorize 7-9 horas de sono por noite:
            </p>
            
            <ul>
              <li>Mantenha horários regulares</li>
              <li>Evite cafeína após 14h</li>
              <li>Crie um ambiente fresco e escuro</li>
              <li>Evite telas 1 hora antes de dormir</li>
            </ul>

            <h3>Hidratação Adequada</h3>
            <p>
              Beba água suficiente ao longo do dia para:
            </p>
            
            <ul>
              <li>Reduzir fogachos</li>
              <li>Manter energia</li>
              <li>Suportar função cerebral</li>
              <li>Melhorar saúde da pele</li>
            </ul>

            <h2>Quando Buscar Ajuda Profissional</h2>
            <p>
              Embora muitas estratégias naturais sejam eficazes, é importante buscar orientação médica quando:
            </p>
            
            <ul>
              <li>Sintomas são muito intensos</li>
              <li>Interferem significativamente na qualidade de vida</li>
              <li>Aparecem sintomas novos ou preocupantes</li>
              <li>Necessidade de terapia hormonal</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              A menopausa não precisa ser uma fase de sofrimento. Com as estratégias certas, 
              é possível passar por esta transição de forma mais tranquila e saudável.
            </p>
            
            <p>
              Lembre-se: cada mulher é única e pode precisar de uma abordagem personalizada. 
              Busque orientação profissional para encontrar as melhores estratégias para o seu caso.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Artigos Relacionados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Link key={index} href={`/conteudo/${post.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
