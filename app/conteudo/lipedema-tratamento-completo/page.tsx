import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import { whatsappLink, generateMetadata } from '@/lib/utils'

export const metadata = generateMetadata({
  title: 'Lipedema: Diagnóstico e Tratamento Completo - Dr. Fernando Del Piero',
  description: 'Entenda o lipedema, seus sintomas, diagnóstico e estratégias de tratamento para reduzir dor, inflamação e acúmulo de gordura. Abordagem baseada em evidências científicas.',
  path: '/conteudo/lipedema-tratamento-completo'
})

export default function LipedemaPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-100 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  20/01/2024
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  12 min de leitura
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Lipedema: Diagnóstico e Tratamento Abordagem Completa
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Entenda o lipedema, seus sintomas, diagnóstico e estratégias de tratamento baseadas em evidências científicas 
                para reduzir dor, inflamação e acúmulo de gordura.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  lipedema
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  saúde da mulher
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  tratamento
                </span>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/lipedema.jpeg"
                alt="Lipedema: Diagnóstico e Tratamento"
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
            <h2>O que é Lipedema?</h2>
            <p>
              O lipedema é uma condição crônica e progressiva caracterizada pelo acúmulo anormal de gordura, 
              especialmente nas pernas e, às vezes, nos braços. Diferente do linfedema, o lipedema não afeta 
              pés e mãos. Esta condição afeta principalmente mulheres e geralmente começa ou piora durante momentos 
              de mudança hormonal, como puberdade, gravidez ou menopausa.
            </p>

            <h2>Sinais e Sintomas</h2>
            <p>
              O lipedema apresenta características únicas que o diferenciam de outros tipos de acúmulo de gordura:
            </p>
            
            <h3>Sintomas Principais:</h3>
            <ul>
              <li><strong>Dor e sensibilidade:</strong> Dor desproporcional ao toque ou pressão</li>
              <li><strong>Inchaço assimétrico:</strong> Acúmulo de gordura principalmente nos membros inferiores</li>
              <li><strong>Textura irregular:</strong> Pele com aspecto de &quot;queijo cottage&quot; ou casca de laranja</li>
              <li><strong>Bruising fácil:</strong> Manchas roxas aparecem com facilidade</li>
              <li><strong>Resistência à dieta e exercícios:</strong> Não responde bem às estratégias tradicionais de perda de peso</li>
              <li><strong>História familiar:</strong> Frequentemente há casos na família</li>
            </ul>

            <h3>Estágios do Lipedema:</h3>
            <p>
              O lipedema progride através de diferentes estágios:
            </p>
            
            <ul>
              <li><strong>Estágio 1:</strong> Superfície da pele lisa, mas já com acúmulo excessivo de gordura</li>
              <li><strong>Estágio 2:</strong> Textura irregular, nódulos de gordura começam a aparecer</li>
              <li><strong>Estágio 3:</strong> Deformidades pronunciadas, gordura flácida</li>
              <li><strong>Estágio 4:</strong> Lipedema avançado com possível componente de linfedema</li>
            </ul>

            <h2>Diagnóstico</h2>
            <p>
              O diagnóstico do lipedema é clínico e baseado em:
            </p>
            
            <ul>
              <li>História médica detalhada</li>
              <li>Exame físico completo</li>
              <li>Avaliação de distribuição de gordura</li>
              <li>História familiar</li>
              <li>Resposta aos tratamentos anteriores</li>
            </ul>

            <p>
              <strong>Importante:</strong> O diagnóstico precoce é crucial para prevenir a progressão da doença 
              e melhorar os resultados do tratamento.
            </p>

            <h2>Tratamento Abordagem Multidisciplinar</h2>
            
            <h3>1. Manejo Nutricional Anti-inflamatório</h3>
            <p>
              Uma nutrição especializada focada em reduzir inflamação e otimizar a função linfática é essencial:
            </p>
            <ul>
              <li>Dieta anti-inflamatória rica em antioxidantes</li>
              <li>Controle de carboidratos e glicemia</li>
              <li>Suporte da função linfática com alimentos específicos</li>
              <li>Hidratação adequada</li>
              <li>Balanceamento hormonal através da nutrição</li>
            </ul>

            <h3>2. Protocolo Hormonal Personalizado</h3>
            <p>
              Como o lipedema está relacionado a desequilíbrios hormonais, o tratamento hormonal é fundamental:
            </p>
            <ul>
              <li>Avaliação completa do perfil hormonal</li>
              <li>Correção de desequilíbrios detectados</li>
              <li>Otimização de estrogênio e outros hormônios sexuais</li>
              <li>Manejo do cortisol e estresse</li>
              <li>Suporte da função tireoidiana</li>
            </ul>

            <h3>3. Exercícios Adaptados</h3>
            <p>
              Exercícios específicos podem ajudar significativamente:
            </p>
            <ul>
              <li>Atividades de baixo impacto (natação, hidroginástica)</li>
              <li>Exercícios que melhoram a circulação linfática</li>
              <li>Treinamento de força suave e progressivo</li>
              <li>Alongamentos e mobilidade</li>
              <li>Movimentação linfática através de exercícios específicos</li>
            </ul>

            <h3>4. Suporte Linfático</h3>
            <p>
              Técnicas especializadas para melhorar a função linfática:
            </p>
            <ul>
              <li>Drenagem linfática manual</li>
              <li>Compressão graduada com meias especiais</li>
              <li>Bombas de compressão quando indicado</li>
              <li>Técnicas de autodrenagem</li>
            </ul>

            <h2>Expectativas Realistas</h2>
            <p>
              O lipedema é uma condição crônica, mas com tratamento adequado:
            </p>
            
            <ul>
              <li>✅ Redução significativa da dor</li>
              <li>✅ Melhora na inflamação</li>
              <li>✅ Prevenção da progressão</li>
              <li>✅ Melhora na qualidade de vida</li>
              <li>✅ Redução do acúmulo de gordura</li>
              <li>✅ Melhor mobilidade e função</li>
            </ul>

            <h2>Importância do Diagnóstico Precoce</h2>
            <p>
              Quanto mais cedo o lipedema for diagnosticado e tratado, melhores serão os resultados. 
              O tratamento precoce pode:
            </p>
            
            <ul>
              <li>Prevenir a progressão para estágios mais avançados</li>
              <li>Reduzir a necessidade de intervenções mais invasivas</li>
              <li>Melhorar significativamente a qualidade de vida</li>
              <li>Prevenir complicações associadas</li>
            </ul>

            <h2>Quando Procurar Ajuda?</h2>
            <p>
              Considere uma avaliação se você apresenta:
            </p>
            
            <ul>
              <li>Dor desproporcional nas pernas</li>
              <li>Acúmulo de gordura nas pernas que não responde a dieta/exercício</li>
              <li>Bruising fácil</li>
              <li>História familiar de lipedema ou linfedema</li>
              <li>Sensibilidade aumentada ao toque</li>
              <li>Inchaço que piora ao longo do dia</li>
            </ul>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-400 p-8 my-12 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Busca Tratamento Especializado
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Se você suspeita ou já tem diagnóstico de lipedema, um tratamento multidisciplinar personalizado 
                pode fazer toda a diferença. Nossa abordagem integra avaliação hormonal, estratégias nutricionais 
                anti-inflamatórias, protocolo de exercícios adaptados e suporte completo para melhorar seus sintomas 
                e qualidade de vida.
              </p>
              <Button asChild size="lg" className="bg-coral hover:bg-coral/90 text-white">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta para avaliar lipedema.')}>
                  Agendar consulta
                </Link>
              </Button>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/conteudo/menopausa-sintomas-naturais" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/meno-pausa.webp"
                    alt="Menopausa"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    Menopausa: Como Controlar os Sintomas Naturalmente
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    6 min de leitura
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/conteudo/hormonios-emagrecimento" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/Saúde Hormonal.jpeg"
                    alt="Hormônios"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    Hormônios e Emagrecimento: A Conexão Essencial
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    10 min de leitura
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/conteudo/por-que-nao-consegue-emagrecer" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/por-que-nao-consegue-emagrecer.webp"
                    alt="Emagrecimento"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    Por que Você Não Consegue Emagrecer?
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    7 min de leitura
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/conteudo">
                Ver todos os artigos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

