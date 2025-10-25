import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Protocolos Médicos - Dr. Fernando Del Piero',
  description: 'Conheça os protocolos especializados do Dr. Fernando: Jejum Hormonal, Saúde Hormonal e Emagrecimento Inteligente. Baseados em evidências científicas.',
  path: '/protocolos'
})

export default function ProtocolosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
