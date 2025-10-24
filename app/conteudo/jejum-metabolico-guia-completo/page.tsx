import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { Calendar, Clock, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Jejum Hormonal: Guia Completo para Iniciantes - Dr. Fernando Del Piero',
  description: 'Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados. Tudo que você precisa saber para começar com o jejum hormonal.',
  path: '/conteudo/jejum-metabolico-guia-completo'
})

const relatedPosts = [
  {
    title: 'Exercício em Jejum: Benefícios e Precauções',
    slug: 'exercicio-jejum-beneficios',
    image: '/images/blog/iStock-1296099228-1.jpg',
    readTime: '8 min'
  },
  {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    slug: 'metabolismo-lento-solucoes',
    image: '/images/blog/metabolismo.webp',
    readTime: '9 min'
  },
  {
    title: 'Hormônios e Emagrecimento: A Conexão Essencial',
    slug: 'hormonios-emagrecimento',
    image: '/images/blog/Emagrecimento-feminino-e-hormonios.jpg',
    readTime: '10 min'
  }
]

export default function JejumMetabolicoPost() {
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
                  15/01/2024
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  8 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Jejum Hormonal: Guia Completo para Iniciantes
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados. 
                Tudo que você precisa saber para começar com o jejum hormonal.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  jejum
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  metabolismo
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  emagrecimento
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp"
                alt="Jejum Hormonal: Guia Completo"
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
            <h2>O que é Jejum Hormonal?</h2>
            <p>
              O jejum hormonal é uma estratégia nutricional que envolve períodos controlados de abstinência de alimentos, 
              seguidos por janelas de alimentação. Diferente do jejum tradicional, o jejum hormonal é personalizado 
              para otimizar os processos metabólicos do seu corpo.
            </p>
            
            <p>
              Durante o jejum, seu corpo passa por uma série de adaptações metabólicas que podem acelerar a perda de gordura, 
              melhorar a sensibilidade à insulina e aumentar a produção de hormônios de crescimento.
            </p>

            <h2>Benefícios Cientificamente Comprovados</h2>
            <p>
              Estudos mostram que o jejum hormonal pode trazer diversos benefícios:
            </p>
            
            <ul>
              <li><strong>Aceleração da perda de gordura:</strong> O corpo utiliza gordura como fonte de energia</li>
              <li><strong>Melhora da sensibilidade à insulina:</strong> Reduz o risco de diabetes tipo 2</li>
              <li><strong>Aumento da autofagia:</strong> Processo de limpeza celular</li>
              <li><strong>Redução da inflamação:</strong> Melhora a saúde geral</li>
              <li><strong>Preservação da massa magra:</strong> Quando feito corretamente</li>
            </ul>

            <h2>Como Começar de Forma Segura</h2>
            <p>
              Antes de iniciar qualquer protocolo de jejum, é fundamental:
            </p>
            
            <ol>
              <li><strong>Consultar um médico:</strong> Especialmente se você tem condições de saúde</li>
              <li><strong>Começar gradualmente:</strong> Inicie com jejuns de 12-14 horas</li>
              <li><strong>Manter hidratação:</strong> Água é essencial durante o jejum</li>
              <li><strong>Monitorar sinais:</strong> Preste atenção aos sinais do seu corpo</li>
              <li><strong>Quebrar adequadamente:</strong> Não exagere na primeira refeição</li>
            </ol>

            <h2>Protocolos Mais Comuns</h2>
            
            <h3>16:8 (Mais Popular)</h3>
            <p>
              Jejum de 16 horas seguido de uma janela de alimentação de 8 horas. 
              Exemplo: comer das 12h às 20h, jejuar das 20h às 12h do dia seguinte.
            </p>
            
            <h3>18:6</h3>
            <p>
              Jejum de 18 horas com janela de 6 horas. Mais intenso, mas com resultados mais rápidos.
            </p>
            
            <h3>20:4 (OMAD - One Meal A Day)</h3>
            <p>
              Jejum de 20 horas com apenas uma refeição por dia. Para pessoas mais experientes.
            </p>

            <h2>O que Quebrar o Jejum</h2>
            <p>
              A primeira refeição após o jejum é crucial. Priorize:
            </p>
            
            <ul>
              <li>Proteínas de alta qualidade</li>
              <li>Gorduras saudáveis</li>
              <li>Vegetais e fibras</li>
              <li>Evite carboidratos refinados inicialmente</li>
            </ul>

            <h2>Erros Comuns a Evitar</h2>
            <p>
              Muitas pessoas cometem erros que podem comprometer os resultados:
            </p>
            
            <ul>
              <li>Começar muito intenso</li>
              <li>Ignorar sinais de fome extrema</li>
              <li>Exagerar na primeira refeição</li>
              <li>Não manter hidratação adequada</li>
              <li>Fazer jejum todos os dias sem descanso</li>
            </ul>

            <h2>Quando NÃO Fazer Jejum</h2>
            <p>
              O jejum não é indicado para:
            </p>
            
            <ul>
              <li>Grávidas e lactantes</li>
              <li>Pessoas com diabetes tipo 1</li>
              <li>Histórico de transtornos alimentares</li>
              <li>Condições médicas específicas</li>
              <li>Crianças e adolescentes</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              O jejum hormonal pode ser uma ferramenta poderosa para acelerar seus resultados,  
              mas deve ser implementado com cuidado e supervisão médica. Lembre-se: não existe 
              uma abordagem única que funcione para todos.
            </p>
            
            <p>
              Se você está interessado em implementar o jejum hormonal de forma segura e eficaz, 
              considere buscar orientação profissional para um protocolo personalizado.
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
