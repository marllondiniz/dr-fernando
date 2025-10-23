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
    <header className="sticky top-0 z-50 bg-champagne-200/95 backdrop-blur-md border-b border-peach-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Dr. Fernando Del Piero</span>
            <span className="text-2xl font-bold text-charcoal-900 group-hover:text-peach-300 transition-colors duration-300 font-serif">
              Dr. Fernando
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-charcoal-700 hover:text-peach-300 hover:bg-peach-300 transition-all duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-charcoal-900 hover:text-peach-300 transition-all duration-300 hover:scale-105 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-peach-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-peach-300 text-white hover:bg-peach-400 hover:shadow-lg hover:shadow-peach-300/25 transition-all duration-300 hover:scale-105 active:scale-95 rounded-full px-6 py-3">
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
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-champagne-200/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-peach-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dr. Fernando Del Piero</span>
                <span className="text-2xl font-bold text-charcoal-900 font-serif">Dr. Fernando</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-charcoal-700 hover:text-peach-300 hover:bg-peach-300 transition-all duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-peach-300/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-charcoal-900 hover:bg-peach-300/50 hover:text-peach-300 transition-all duration-300 hover:scale-105"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-peach-300 text-white hover:bg-peach-400 hover:shadow-lg hover:shadow-peach-300/25 transition-all duration-300 hover:scale-105 active:scale-95 rounded-full">
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
