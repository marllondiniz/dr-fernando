import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-peach-200/5 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full bg-peach-300 text-white hover:bg-peach-300/90 hover:shadow-lg hover:shadow-peach-300/25">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao início
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/conteudo">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Ver conteúdo
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full border-peach-300 text-peach-400 hover:bg-peach-300 hover:text-white">
            <Link href={whatsappLink('Olá! Preciso de ajuda para encontrar uma página no site.')}>
              Preciso de ajuda
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Se você acredita que isso é um erro, entre em contato conosco.</p>
        </div>
      </div>
    </div>
  )
}
