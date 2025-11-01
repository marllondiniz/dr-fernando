import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Blog - Dr. Fernando Del Piero',
  description: 'Artigos baseados em evidências científicas sobre metabolismo, emagrecimento, menopausa e jejum hormonal. Conteúdo educativo para sua jornada de saúde.',
  path: '/conteudo'
})

export default function ConteudoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
