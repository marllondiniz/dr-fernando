import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hormônios e Emagrecimento: A Conexão Essencial | Dr. Fernando',
  description: 'Como os hormônios influenciam o peso e quais estratégias usar para equilibrá-los e acelerar o emagrecimento.',
  keywords: ['hormônios', 'emagrecimento', 'ciência', 'metabolismo', 'saúde'],
  openGraph: {
    title: 'Hormônios e Emagrecimento: A Conexão Essencial',
    description: 'Como os hormônios influenciam o peso e quais estratégias usar para equilibrá-los e acelerar o emagrecimento.',
    images: ['/images/blog/Emagrecimento-feminino-e-hormonios.jpg'],
  },
}

const relatedPosts = [
  {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    href: '/conteudo/metabolismo-lento-solucoes',
    image: '/images/blog/metabolismo.webp',
    readTime: '9 min'
  },
  {
    title: 'Menopausa: Como Controlar os Sintomas Naturalmente',
    href: '/conteudo/menopausa-sintomas-naturais',
    image: '/images/meno-pausa.webp',
    readTime: '6 min'
  }
]

export default function HormoniosEmagrecimentoPost() {
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
                  28/12/2023
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  10 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Hormônios e Emagrecimento: A Conexão Essencial
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Como os hormônios influenciam o peso e quais estratégias usar para equilibrá-los e acelerar o emagrecimento.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  hormônios
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  emagrecimento
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  ciência
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/blog/Emagrecimento-feminino-e-hormonios.jpg"
                alt="Hormônios e Emagrecimento: A Conexão Essencial"
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
            <h2>A Conexão Hormonal no Emagrecimento</h2>
            <p>
              Muitas pessoas se frustram ao tentar emagrecer porque focam apenas na dieta e exercícios, 
              ignorando um fator crucial: os hormônios. A verdade é que os hormônios desempenham um papel 
              fundamental no controle do peso, e desequilíbrios hormonais podem sabotar seus esforços de emagrecimento.
            </p>
            
            <p>
              Neste artigo, vamos explorar como os principais hormônios afetam o peso e quais estratégias 
              você pode usar para equilibrá-los naturalmente.
            </p>

            <h2>Os Hormônios Mais Importantes para o Emagrecimento</h2>

            <h3>1. Insulina - O Hormônio do Armazenamento</h3>
            <p>
              A insulina é produzida pelo pâncreas e é responsável por transportar glicose para as células. 
              Quando há resistência à insulina, o corpo produz mais insulina, o que promove o armazenamento de gordura.
            </p>
            
            <h4>Como Melhorar a Sensibilidade à Insulina:</h4>
            <ul>
              <li>Reduzir carboidratos refinados e açúcares</li>
              <li>Praticar exercícios regulares</li>
              <li>Manter peso saudável</li>
              <li>Dormir adequadamente</li>
              <li>Gerenciar o estresse</li>
            </ul>

            <h3>2. Cortisol - O Hormônio do Estresse</h3>
            <p>
              O cortisol é liberado em resposta ao estresse e pode causar ganho de peso, especialmente na região abdominal. 
              Estresse crônico mantém os níveis de cortisol elevados, dificultando o emagrecimento.
            </p>
            
            <h4>Estratégias para Reduzir o Cortisol:</h4>
            <ul>
              <li>Meditação e mindfulness</li>
              <li>Exercícios de respiração profunda</li>
              <li>Sono de qualidade</li>
              <li>Atividades relaxantes</li>
              <li>Limitação de cafeína</li>
            </ul>

            <h3>3. Leptina - O Hormônio da Saciedade</h3>
            <p>
              A leptina é produzida pelas células de gordura e sinaliza ao cérebro quando você está satisfeito. 
              A resistência à leptina faz com que você sinta fome constantemente, mesmo após comer.
            </p>
            
            <h4>Como Melhorar a Sensibilidade à Leptina:</h4>
            <ul>
              <li>Evitar alimentos ultraprocessados</li>
              <li>Comer proteína adequada</li>
              <li>Exercitar-se regularmente</li>
              <li>Dormir bem</li>
              <li>Evitar restrições calóricas extremas</li>
            </ul>

            <h3>4. Grelina - O Hormônio da Fome</h3>
            <p>
              A grelina é produzida no estômago e estimula o apetite. Níveis elevados de grelina podem 
              causar fome excessiva e dificultar o controle da ingestão alimentar.
            </p>
            
            <h4>Estratégias para Controlar a Grelina:</h4>
            <ul>
              <li>Comer proteína em cada refeição</li>
              <li>Evitar dietas muito restritivas</li>
              <li>Dormir adequadamente</li>
              <li>Praticar exercícios regulares</li>
              <li>Comer fibras suficientes</li>
            </ul>

            <h3>5. Hormônios da Tireoide</h3>
            <p>
              Os hormônios T3 e T4 controlam o metabolismo. Hipotireoidismo pode causar ganho de peso, 
              fadiga e dificuldade para emagrecer.
            </p>
            
            <h4>Suporte à Função Tireoidiana:</h4>
            <ul>
              <li>Consumir iodo adequado (algas marinhas, sal iodado)</li>
              <li>Selênio (castanha do Pará, peixes)</li>
              <li>Zinco (carnes, sementes)</li>
              <li>Evitar soja em excesso</li>
              <li>Gerenciar o estresse</li>
            </ul>

            <h2>Diferenças Hormonais entre Homens e Mulheres</h2>

            <h3>Hormônios Femininos</h3>
            <p>
              As mulheres têm ciclos hormonais complexos que afetam o peso:
            </p>
            
            <ul>
              <li><strong>Estrogênio:</strong> Influencia distribuição de gordura</li>
              <li><strong>Progesterona:</strong> Afeta retenção de líquidos</li>
              <li><strong>Testosterona:</strong> Importante para massa muscular</li>
            </ul>

            <h3>Estratégias Específicas para Mulheres:</h3>
            <ul>
              <li>Ajustar calorias conforme o ciclo menstrual</li>
              <li>Priorizar ferro e magnésio</li>
              <li>Exercícios de força para preservar massa muscular</li>
              <li>Gerenciar flutuações de humor</li>
            </ul>

            <h2>Estratégias Práticas para Equilibrar Hormônios</h2>

            <h3>1. Alimentação Hormonalmente Inteligente</h3>
            <ul>
              <li>Proteína de alta qualidade em cada refeição</li>
              <li>Gorduras saudáveis (azeite, abacate, castanhas)</li>
              <li>Carboidratos complexos e fibras</li>
              <li>Evitar açúcares refinados</li>
              <li>Comer em horários regulares</li>
            </ul>

            <h3>2. Exercícios Estratégicos</h3>
            <ul>
              <li>Treino de força para preservar massa muscular</li>
              <li>Exercícios aeróbicos para sensibilidade à insulina</li>
              <li>Yoga e alongamento para reduzir cortisol</li>
              <li>Evitar exercícios excessivos</li>
            </ul>

            <h3>3. Sono e Ritmo Circadiano</h3>
            <ul>
              <li>7-9 horas de sono por noite</li>
              <li>Horários regulares de dormir e acordar</li>
              <li>Ambiente escuro e fresco</li>
              <li>Evitar telas antes de dormir</li>
            </ul>

            <h3>4. Gestão do Estresse</h3>
            <ul>
              <li>Técnicas de respiração</li>
              <li>Meditação ou mindfulness</li>
              <li>Atividades prazerosas</li>
              <li>Limitação de compromissos</li>
            </ul>

            <h2>Suplementos que Podem Ajudar</h2>
            <p>
              Alguns suplementos podem apoiar o equilíbrio hormonal:
            </p>
            
            <ul>
              <li><strong>Ômega-3:</strong> Reduz inflamação e melhora sensibilidade à insulina</li>
              <li><strong>Magnésio:</strong> Suporta função tireoidiana e reduz cortisol</li>
              <li><strong>Vitamina D:</strong> Importante para função hormonal</li>
              <li><strong>Probióticos:</strong> Suportam saúde intestinal e hormônios</li>
              <li><strong>Ashwagandha:</strong> Pode ajudar com cortisol e tireoide</li>
            </ul>

            <h2>Quando Buscar Ajuda Profissional</h2>
            <p>
              Se você está enfrentando dificuldades persistentes para emagrecer, considere:
            </p>
            
            <ul>
              <li>Exames laboratoriais para avaliar hormônios</li>
              <li>Avaliação da função tireoidiana</li>
              <li>Análise de padrões de sono e estresse</li>
              <li>Orientação nutricional personalizada</li>
              <li>Acompanhamento médico especializado</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Lembre-se
              </h3>
              <p className="text-blue-800">
                O equilíbrio hormonal é fundamental para o emagrecimento sustentável. 
                Não existe uma abordagem única - cada pessoa precisa de estratégias personalizadas 
                baseadas em seu perfil hormonal individual.
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
