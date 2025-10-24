import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Quiz de Saúde Metabólica - Dr. Fernando Del Piero',
  description: 'Descubra qual protocolo é ideal para você através do nosso questionário de saúde metabólica personalizado.',
  path: '/quiz'
})

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
