'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Protocolos', href: '/protocolos' },
  { name: 'Consultas', href: '/consultas' },
  { name: 'Conteúdo', href: '/conteudo' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Contato', href: '/contato' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dr. Fernando Del Piero</span>
            <span className="text-2xl font-bold text-primary">Dr. Fernando</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
              <Phone className="mr-2 h-4 w-4" />
              Agendar consulta
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dr. Fernando Del Piero</span>
                <span className="text-2xl font-bold text-primary">Dr. Fernando</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary transition-all duration-300 hover:scale-105"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-95">
                    <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                      <Phone className="mr-2 h-4 w-4" />
                      Agendar consulta
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
