import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatButton } from '@/components/WhatsAppFloatButton'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { MetaPixel } from '@/components/analytics/MetaPixel'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { PersonSchema, MedicalOrganizationSchema } from '@/lib/schemas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Fernando Del Piero - Médico Especialista em Metabolismo',
  description: 'Saúde metabólica sem achismo. Emagrecimento inteligente, equilíbrio hormonal e desempenho com ciência aplicada.',
  keywords: 'médico, metabolismo, emagrecimento, saúde hormonal, jejum hormonal, equilíbrio hormonal, Vitória ES',
  authors: [{ name: 'Dr. Fernando Del Piero' }],
  creator: 'Dr. Fernando Del Piero',
  publisher: 'Dr. Fernando Del Piero',
  icons: {
    icon: [],
    apple: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <MetaPixel />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(PersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(MedicalOrganizationSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main className="overflow-x-hidden max-w-full pt-20">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
