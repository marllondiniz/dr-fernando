import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metabolismo Lento: Soluções Baseadas em Ciência | Dr. Fernando',
  description: 'Entenda as causas do metabolismo lento e aprenda estratégias comprovadas para acelerá-lo naturalmente.',
  keywords: ['metabolismo', 'ciência', 'nutrição', 'emagrecimento', 'saúde'],
  openGraph: {
    title: 'Metabolismo Lento: Soluções Baseadas em Ciência',
    description: 'Entenda as causas do metabolismo lento e aprenda estratégias comprovadas para acelerá-lo naturalmente.',
    images: ['/images/blog/metabolismo.webp'],
  },
}

const relatedPosts = [
  {
    title: 'Por que Você Não Consegue Emagrecer?',
    href: '/conteudo/por-que-nao-consegue-emagrecer',
    image: '/images/Por que Você Não Consegue Emagrecer.webp',
    readTime: '7 min'
  },
  {
    title: 'Jejum Hormonal: Guia Completo para Iniciantes',
    href: '/conteudo/jejum-metabolico-guia-completo',
    image: '/images/como-funciona-o-jejum-intermitente-guia-completo-para-iniciantes-e-praticantes-de-atividades-fisicas-1.webp',
    readTime: '8 min'
  }
]

export default function MetabolismoLentoPost() {
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
                  01/01/2024
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  9 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Metabolismo Lento: Soluções Baseadas em Ciência
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Entenda as causas do metabolismo lento e aprenda estratégias comprovadas para acelerá-lo naturalmente.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  metabolismo
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  ciência
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  nutrição
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/blog/metabolismo.webp"
                alt="Metabolismo Lento: Soluções Baseadas em Ciência"
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
            <h2>O que é Metabolismo?</h2>
            <p>
              O metabolismo é o conjunto de processos químicos que ocorrem no seu corpo para manter a vida. 
              Ele inclui a conversão de alimentos em energia, a síntese de proteínas e a eliminação de resíduos. 
              Quando falamos de &quot;metabolismo lento&quot;, geralmente nos referimos à taxa metabólica basal reduzida.
            </p>
            
            <p>
              Uma taxa metabólica baixa significa que seu corpo queima menos calorias em repouso, 
              o que pode dificultar a perda de peso e contribuir para o ganho de gordura.
            </p>

            <h2>Principais Causas do Metabolismo Lento</h2>
            
            <h3>1. Idade</h3>
            <p>
              Após os 30 anos, a taxa metabólica diminui naturalmente em cerca de 2-3% por década. 
              Isso acontece devido à perda gradual de massa muscular e mudanças hormonais.
            </p>

            <h3>2. Perda de Massa Muscular</h3>
            <p>
              O músculo é metabolicamente ativo e queima mais calorias que gordura. 
              A sarcopenia (perda de massa muscular) é uma das principais causas do metabolismo lento.
            </p>

            <h3>3. Desequilíbrios Hormonais</h3>
            <p>
              Hormônios como tireoide, cortisol, insulina e hormônios sexuais influenciam diretamente o metabolismo. 
              Desequilíbrios podem causar redução significativa da taxa metabólica.
            </p>

            <h3>4. Restrição Calórica Excessiva</h3>
            <p>
              Dietas muito restritivas fazem o corpo entrar em &quot;modo de economia&quot;, 
              reduzindo o metabolismo para preservar energia.
            </p>

            <h3>5. Falta de Sono</h3>
            <p>
              Sono inadequado afeta hormônios como leptina e grelina, 
              além de aumentar o cortisol, prejudicando o metabolismo.
            </p>

            <h2>Estratégias Cientificamente Comprovadas</h2>

            <h3>1. Treinamento de Força</h3>
            <p>
              O exercício resistido é uma das melhores estratégias para acelerar o metabolismo:
            </p>
            
            <ul>
              <li>Aumenta a massa muscular</li>
              <li>Eleva o EPOC (excesso de consumo de oxigênio pós-exercício)</li>
              <li>Melhora a sensibilidade à insulina</li>
              <li>Estimula hormônios anabólicos</li>
            </ul>

            <h3>2. Proteína Adequada</h3>
            <p>
              A proteína tem o maior efeito térmico dos alimentos (20-30% das calorias são usadas na digestão):
            </p>
            
            <ul>
              <li>Preserva massa muscular</li>
              <li>Aumenta saciedade</li>
              <li>Estimula síntese proteica</li>
              <li>Recomendação: 1,6-2,2g por kg de peso corporal</li>
            </ul>

            <h3>3. HIIT (High-Intensity Interval Training)</h3>
            <p>
              Exercícios intervalados de alta intensidade são eficazes para:
            </p>
            
            <ul>
              <li>Aumentar o metabolismo por até 24 horas</li>
              <li>Melhorar a capacidade oxidativa mitocondrial</li>
              <li>Queimar mais gordura em menos tempo</li>
            </ul>

            <h3>4. Sono de Qualidade</h3>
            <p>
              Priorize 7-9 horas de sono por noite:
            </p>
            
            <ul>
              <li>Regula hormônios do apetite</li>
              <li>Reduz cortisol</li>
              <li>Melhora sensibilidade à insulina</li>
              <li>Suporta recuperação muscular</li>
            </ul>

            <h3>5. Hidratação Adequada</h3>
            <p>
              A água é essencial para processos metabólicos:
            </p>
            
            <ul>
              <li>Suporta síntese de ATP</li>
              <li>Facilita transporte de nutrientes</li>
              <li>Regula temperatura corporal</li>
              <li>Recomendação: 35ml por kg de peso corporal</li>
            </ul>

            <h2>Suplementos que Podem Ajudar</h2>
            <p>
              Alguns suplementos têm evidências científicas para acelerar o metabolismo:
            </p>
            
            <ul>
              <li><strong>Cafeína:</strong> Aumenta termogênese e mobilização de gordura</li>
              <li><strong>Chá verde:</strong> EGCG melhora oxidação de gordura</li>
              <li><strong>Proteína whey:</strong> Alto efeito térmico e preservação muscular</li>
              <li><strong>Ômega-3:</strong> Melhora sensibilidade à insulina</li>
              <li><strong>Vitamina D:</strong> Essencial para função muscular e metabólica</li>
            </ul>

            <h2>O que Evitar</h2>
            <p>
              Algumas práticas podem prejudicar ainda mais o metabolismo:
            </p>
            
            <ul>
              <li>Dietas muito restritivas por longos períodos</li>
              <li>Pular refeições regularmente</li>
              <li>Excesso de álcool</li>
              <li>Estresse crônico não gerenciado</li>
              <li>Sedentarismo prolongado</li>
            </ul>

            <h2>Monitoramento e Ajustes</h2>
            <p>
              Para otimizar seu metabolismo, é importante:
            </p>
            
            <ol>
              <li><strong>Medir regularmente:</strong> Peso, composição corporal e energia</li>
              <li><strong>Ajustar gradualmente:</strong> Mudanças pequenas e sustentáveis</li>
              <li><strong>Monitorar sinais:</strong> Sono, humor, energia e fome</li>
              <li><strong>Buscar orientação:</strong> Profissional especializado quando necessário</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Lembre-se
              </h3>
              <p className="text-blue-800">
                Acelerar o metabolismo é um processo gradual que requer consistência. 
                Não existe solução mágica, mas estratégias baseadas em ciência podem fazer 
                uma diferença significativa na sua saúde e composição corporal.
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
