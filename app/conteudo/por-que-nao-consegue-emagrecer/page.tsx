import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Por que Você Não Consegue Emagrecer? | Dr. Fernando',
  description: 'Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável. Descubra o que pode estar impedindo seus resultados.',
  keywords: ['emagrecimento', 'metabolismo', 'nutrição', 'perda de peso', 'dieta'],
  openGraph: {
    title: 'Por que Você Não Consegue Emagrecer?',
    description: 'Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável.',
    images: ['/images/Por que Você Não Consegue Emagrecer.webp'],
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
    title: 'Menopausa: Como Controlar os Sintomas Naturalmente',
    href: '/conteudo/menopausa-sintomas-naturais',
    image: '/images/meno-pausa.webp',
    readTime: '6 min'
  }
]

export default function PorQueNaoConsegueEmagrecerPost() {
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
                  04/01/2024
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  7 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Por que Você Não Consegue Emagrecer?
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Os 5 principais motivos pelos quais muitas pessoas não conseguem perder peso de forma sustentável. 
                Descubra o que pode estar impedindo seus resultados.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  emagrecimento
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  metabolismo
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  nutrição
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/Por que Você Não Consegue Emagrecer.webp"
                alt="Por que Você Não Consegue Emagrecer"
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
            <h2>Os 5 Principais Motivos do Fracasso no Emagrecimento</h2>
            <p>
              Muitas pessoas se frustram ao tentar emagrecer porque seguem estratégias que não funcionam para o seu perfil metabólico. 
              Neste artigo, vamos explorar os principais motivos pelos quais você pode não estar conseguindo perder peso de forma sustentável.
            </p>
            
            <h2>1. Metabolismo Adaptativo</h2>
            <p>
              Seu corpo é inteligente e se adapta rapidamente às mudanças. Quando você reduz drasticamente as calorias, 
              seu metabolismo diminui para preservar energia. Isso explica por que muitas dietas funcionam inicialmente 
              mas param de dar resultados após algumas semanas.
            </p>
            
            <h3>Solução:</h3>
            <ul>
              <li>Variação estratégica de calorias (ciclagem)</li>
              <li>Refeeds programados</li>
              <li>Exercícios de força para preservar massa muscular</li>
              <li>Monitoramento da taxa metabólica</li>
            </ul>

            <h2>2. Desequilíbrios Hormonais</h2>
            <p>
              Hormônios como insulina, cortisol, leptina e grelina desempenham papel crucial no controle do peso. 
              Quando esses hormônios estão desequilibrados, mesmo com dieta e exercícios, o emagrecimento pode ser 
              extremamente difícil.
            </p>
            
            <h3>Principais Hormônios Afetados:</h3>
            <ul>
              <li><strong>Insulina:</strong> Resistência à insulina impede a queima de gordura</li>
              <li><strong>Cortisol:</strong> Estresse crônico aumenta o acúmulo de gordura abdominal</li>
              <li><strong>Leptina:</strong> Resistência à leptina causa fome constante</li>
              <li><strong>Tireoide:</strong> Hipotireoidismo diminui o metabolismo</li>
            </ul>

            <h2>3. Restrição Calórica Excessiva</h2>
            <p>
              Menos calorias não significa necessariamente mais perda de peso. Restrições muito severas podem:
            </p>
            
            <ul>
              <li>Diminuir drasticamente o metabolismo</li>
              <li>Causar perda de massa muscular</li>
              <li>Gerar compulsão alimentar</li>
              <li>Afetar o sono e energia</li>
              <li>Causar efeito rebote</li>
            </ul>

            <h2>4. Falta de Personalização</h2>
            <p>
              Cada pessoa tem um metabolismo único. O que funciona para uma pessoa pode não funcionar para outra. 
              Fatores como idade, sexo, genética, histórico de dietas e estilo de vida influenciam diretamente 
              na estratégia de emagrecimento.
            </p>
            
            <h3>Fatores Importantes:</h3>
            <ul>
              <li>Idade e sexo</li>
              <li>Histórico de dietas</li>
              <li>Nível de atividade física</li>
              <li>Padrões de sono</li>
              <li>Níveis de estresse</li>
              <li>Medicações em uso</li>
            </ul>

            <h2>5. Foco Apenas na Balança</h2>
            <p>
              O peso na balança não conta toda a história. Você pode estar perdendo gordura e ganhando músculo, 
              ou retendo líquido devido a inflamação ou desequilíbrios hormonais.
            </p>
            
            <h3>Métricas Mais Importantes:</h3>
            <ul>
              <li>Circunferência da cintura</li>
              <li>Percentual de gordura corporal</li>
              <li>Fotos de progresso</li>
              <li>Como a roupa fica</li>
              <li>Níveis de energia</li>
              <li>Qualidade do sono</li>
            </ul>

            <h2>Como Resolver Esses Problemas</h2>
            <p>
              A solução está em uma abordagem integrada que considera todos esses fatores:
            </p>
            
            <ol>
              <li><strong>Avaliação Completa:</strong> Exames laboratoriais e avaliação metabólica</li>
              <li><strong>Estratégia Personalizada:</strong> Plano adaptado ao seu perfil</li>
              <li><strong>Monitoramento Contínuo:</strong> Ajustes baseados na resposta</li>
              <li><strong>Suporte Profissional:</strong> Acompanhamento especializado</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Quer Saber Mais?
              </h3>
              <p className="text-blue-800">
                Se você está enfrentando dificuldades para emagrecer, pode ser hora de uma abordagem mais personalizada. 
                Entre em contato para uma consulta e descubra qual estratégia funciona melhor para o seu caso.
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
