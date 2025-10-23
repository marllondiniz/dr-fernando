import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { Calendar, Clock, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Jejum Metabólico: Guia Completo para Iniciantes - Dr. Fernando Del Piero',
  description: 'Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados. Tudo que você precisa saber para começar com o jejum metabólico.',
  path: '/conteudo/jejum-metabolico-guia-completo'
})

const relatedPosts = [
  {
    title: 'Exercício em Jejum: Benefícios e Precauções',
    slug: 'exercicio-jejum-beneficios',
    image: '/images/blog/exercicio-jejum.jpg',
    readTime: '8 min'
  },
  {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    slug: 'metabolismo-lento-solucoes',
    image: '/images/blog/metabolismo-lento.jpg',
    readTime: '9 min'
  },
  {
    title: 'Hormônios e Emagrecimento: A Conexão Essencial',
    slug: 'hormonios-emagrecimento',
    image: '/images/blog/hormonios.jpg',
    readTime: '10 min'
  }
]

export default function JejumMetabolicoPost() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-8 border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/conteudo">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao blog
            </Link>
          </Button>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              15 de Janeiro de 2024
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              8 min de leitura
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Jejum Metabólico: Guia Completo para Iniciantes
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Aprenda como implementar o jejum de forma segura e eficaz para acelerar seus resultados. 
            Tudo que você precisa saber para começar com o jejum metabólico.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">jejum</span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">metabolismo</span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">emagrecimento</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/jejum-guia.jpg"
              alt="Jejum Metabólico: Guia Completo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>O que é Jejum Metabólico?</h2>
            <p>
              O jejum metabólico é uma estratégia nutricional que envolve períodos controlados de abstinência de alimentos, 
              seguidos por janelas de alimentação. Diferente do jejum tradicional, o jejum metabólico é personalizado 
              para otimizar os processos metabólicos do seu corpo.
            </p>
            
            <p>
              Durante o jejum, seu corpo passa por uma série de adaptações metabólicas que podem acelerar a perda de gordura, 
              melhorar a sensibilidade à insulina e aumentar a produção de hormônios de crescimento.
            </p>

            <h2>Benefícios Cientificamente Comprovados</h2>
            <p>
              Estudos mostram que o jejum metabólico pode trazer diversos benefícios:
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
              O jejum metabólico pode ser uma ferramenta poderosa para acelerar seus resultados, 
              mas deve ser implementado com cuidado e supervisão médica. Lembre-se: não existe 
              uma abordagem única que funcione para todos.
            </p>
            
            <p>
              Se você está interessado em implementar o jejum metabólico de forma segura e eficaz, 
              considere buscar orientação profissional para um protocolo personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary to-peach-300 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Quer implementar o jejum metabólico com segurança?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Agende uma consulta e receba um protocolo personalizado baseado no seu perfil
              </p>
              <Button asChild size="lg" className="bg-peach-300 text-white hover:bg-peach-300/90 hover:shadow-lg hover:shadow-peach-300/25">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta sobre jejum metabólico.')}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Artigos Relacionados
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Continue aprendendo sobre metabolismo e saúde
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/conteudo/${post.slug}`}>
                        Ler
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
