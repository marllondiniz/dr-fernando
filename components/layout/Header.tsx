'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

const navigation = [
  { name: 'SERVIÇOS', href: '/protocolos' },
  { name: 'BLOG', href: '/conteudo' },
  { name: 'DR. FERNANDO', href: '/sobre' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-champagne-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        {/* Left side - Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Dr. Fernando Del Piero</span>
            <span className="text-2xl font-bold text-charcoal-900 font-sans">
              DR. FERNANDO
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-charcoal-900 hover:text-coral transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Center navigation */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-charcoal-900 hover:text-coral transition-all duration-300 uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Right side - CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-coral text-white hover:bg-coral/90 transition-all duration-300 px-6 py-2 text-sm font-semibold uppercase">
            <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
              Agendar consulta
            </Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm border-l border-champagne-300">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Dr. Fernando Del Piero</span>
                <span className="text-2xl font-bold text-charcoal-900 font-sans">DR. FERNANDO</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-charcoal-900 hover:text-coral transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-champagne-300">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-charcoal-900 hover:text-coral transition-all duration-300 uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-coral text-white hover:bg-coral/90 transition-all duration-300 px-6 py-2 text-sm font-semibold uppercase">
                    <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
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
