import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exercício em Jejum: Benefícios e Precauções | Dr. Fernando',
  description: 'Descubra quando e como treinar em jejum para maximizar os resultados, sempre com segurança e baseado em evidências.',
  keywords: ['exercício', 'jejum', 'treino', 'emagrecimento', 'metabolismo'],
  openGraph: {
    title: 'Exercício em Jejum: Benefícios e Precauções',
    description: 'Descubra quando e como treinar em jejum para maximizar os resultados, sempre com segurança e baseado em evidências.',
    images: ['/images/blog/iStock-1296099228-1.jpg'],
  },
}

const relatedPosts = [
  {
    title: 'Jejum Hormonal: Guia Completo para Iniciantes',
    href: '/conteudo/jejum-metabolico-guia-completo',
    image: '/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp',
    readTime: '8 min'
  },
  {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    href: '/conteudo/metabolismo-lento-solucoes',
    image: '/images/blog/metabolismo.webp',
    readTime: '9 min'
  }
]

export default function ExercicioJejumPost() {
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
                  25/12/2023
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  8 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Exercício em Jejum: Benefícios e Precauções
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Descubra quando e como treinar em jejum para maximizar os resultados, sempre com segurança e baseado em evidências.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  exercício
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  jejum
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  treino
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/blog/iStock-1296099228-1.jpg"
                alt="Exercício em Jejum: Benefícios e Precauções"
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
            <h2>O que é Exercício em Jejum?</h2>
            <p>
              Exercício em jejum é a prática de realizar atividade física após um período prolongado sem comer, 
              geralmente após 8-12 horas de jejum (como pela manhã, antes do café da manhã). Esta estratégia 
              tem ganhado popularidade devido aos seus potenciais benefícios metabólicos.
            </p>
            
            <p>
              Durante o exercício em jejum, seu corpo utiliza principalmente gordura como fonte de energia, 
              já que os estoques de glicogênio estão baixos. Isso pode potencializar a perda de gordura 
              e melhorar a sensibilidade à insulina.
            </p>

            <h2>Benefícios Cientificamente Comprovados</h2>

            <h3>1. Maior Oxidação de Gordura</h3>
            <p>
              Estudos mostram que exercitar-se em jejum pode aumentar a oxidação de gordura em até 20% 
              comparado ao exercício após refeição. Isso acontece porque:
            </p>
            
            <ul>
              <li>Níveis baixos de insulina facilitam a mobilização de gordura</li>
              <li>Maior disponibilidade de ácidos graxos livres</li>
              <li>Ativação de enzimas que quebram gordura</li>
            </ul>

            <h3>2. Melhora da Sensibilidade à Insulina</h3>
            <p>
              Exercício em jejum pode melhorar significativamente a sensibilidade à insulina:
            </p>
            
            <ul>
              <li>Aumenta a captação de glicose pelos músculos</li>
              <li>Melhora a função das mitocôndrias</li>
              <li>Reduz a resistência à insulina</li>
            </ul>

            <h3>3. Aumento da Autofagia</h3>
            <p>
              A combinação de jejum e exercício estimula a autofagia, processo de limpeza celular:
            </p>
            
            <ul>
              <li>Remove componentes celulares danificados</li>
              <li>Melhora a função mitocondrial</li>
              <li>Pode retardar o envelhecimento</li>
            </ul>

            <h3>4. Preservação da Massa Muscular</h3>
            <p>
              Contrariamente ao que muitos pensam, exercício em jejum pode preservar massa muscular:
            </p>
            
            <ul>
              <li>Aumenta a produção de hormônio do crescimento</li>
              <li>Melhora a síntese proteica pós-exercício</li>
              <li>Ativa vias de sinalização anabólicas</li>
            </ul>

            <h2>Tipos de Exercício Recomendados</h2>

            <h3>1. Exercícios Aeróbicos de Baixa a Moderada Intensidade</h3>
            <p>
              Ideais para iniciantes e para maximizar a queima de gordura:
            </p>
            
            <ul>
              <li>Caminhada rápida</li>
              <li>Corrida leve</li>
              <li>Ciclismo moderado</li>
              <li>Natação</li>
              <li>Duração: 30-60 minutos</li>
            </ul>

            <h3>2. Treino de Força</h3>
            <p>
              Pode ser realizado em jejum, mas com algumas considerações:
            </p>
            
            <ul>
              <li>Foque em exercícios compostos</li>
              <li>Use cargas moderadas</li>
              <li>Mantenha séries de 8-12 repetições</li>
              <li>Duração: 45-60 minutos</li>
            </ul>

            <h3>3. HIIT (High-Intensity Interval Training)</h3>
            <p>
              Treinos intervalados podem ser eficazes em jejum:
            </p>
            
            <ul>
              <li>Intervalos curtos (30-60 segundos)</li>
              <li>Recuperação ativa</li>
              <li>Duração total: 20-30 minutos</li>
              <li>Para pessoas mais experientes</li>
            </ul>

            <h2>Precauções e Contraindicações</h2>

            <h3>Quando NÃO Fazer Exercício em Jejum</h3>
            <ul>
              <li>Diabetes tipo 1</li>
              <li>Hipoglicemia frequente</li>
              <li>Gravidez e lactação</li>
              <li>Histórico de transtornos alimentares</li>
              <li>Condições médicas específicas</li>
              <li>Medicações que afetam glicemia</li>
            </ul>

            <h3>Sinais de Alerta</h3>
            <p>
              Pare imediatamente se sentir:
            </p>
            
            <ul>
              <li>Tontura ou desmaio</li>
              <li>Náusea intensa</li>
              <li>Fraqueza extrema</li>
              <li>Confusão mental</li>
              <li>Palpitações</li>
            </ul>

            <h2>Como Implementar com Segurança</h2>

            <h3>1. Comece Gradualmente</h3>
            <ul>
              <li>Inicie com 15-20 minutos</li>
              <li>Intensidade baixa a moderada</li>
              <li>2-3 vezes por semana</li>
              <li>Aumente gradualmente</li>
            </ul>

            <h3>2. Hidratação Adequada</h3>
            <ul>
              <li>Beba água antes, durante e após</li>
              <li>Considere eletrólitos se necessário</li>
              <li>Evite desidratação</li>
            </ul>

            <h3>3. Monitoramento</h3>
            <ul>
              <li>Observe sinais do corpo</li>
              <li>Monitore energia e humor</li>
              <li>Ajuste conforme necessário</li>
            </ul>

            <h3>4. Nutrição Pós-Exercício</h3>
            <ul>
              <li>Quebre o jejum adequadamente</li>
              <li>Priorize proteína e carboidratos</li>
              <li>Hidrate-se bem</li>
            </ul>

            <h2>Estratégias de Timing</h2>

            <h3>Jejum Noturno</h3>
            <p>
              A forma mais comum e segura:
            </p>
            
            <ul>
              <li>Jantar às 19h-20h</li>
              <li>Exercício às 7h-8h</li>
              <li>Jejum de 12-13 horas</li>
            </ul>

            <h3>Jejum Intermitente</h3>
            <p>
              Combinando com protocolos de jejum:
            </p>
            
            <ul>
              <li>16:8 com exercício no final do jejum</li>
              <li>18:6 para pessoas mais experientes</li>
              <li>20:4 apenas para avançados</li>
            </ul>

            <h2>Suplementação</h2>
            <p>
              Alguns suplementos podem ajudar durante o exercício em jejum:
            </p>
            
            <ul>
              <li><strong>BCAA:</strong> Preserva massa muscular</li>
              <li><strong>Cafeína:</strong> Aumenta energia e queima de gordura</li>
              <li><strong>Eletrólitos:</strong> Mantém hidratação</li>
              <li><strong>Creatina:</strong> Melhora performance</li>
            </ul>

            <h2>Monitoramento e Ajustes</h2>
            <p>
              Para otimizar seus resultados:
            </p>
            
            <ul>
              <li>Monitore composição corporal</li>
              <li>Avalie energia e performance</li>
              <li>Ajuste intensidade conforme necessário</li>
              <li>Considere ciclagem (não todos os dias)</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Importante
              </h3>
              <p className="text-blue-800">
                Exercício em jejum não é para todos e deve ser implementado gradualmente. 
                Sempre consulte um profissional de saúde antes de iniciar, especialmente se você 
                tem condições médicas ou toma medicamentos.
              </p>
            </div>
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
              <Link key={index} href={post.href} className="group">
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
