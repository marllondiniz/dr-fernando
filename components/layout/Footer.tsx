import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Calendar, Instagram, Youtube } from 'lucide-react'
import { whatsappLink } from '@/lib/utils'

const quickLinks = [
  { name: 'Jejum Hormonal® Experience', href: '/protocolos' },
  { name: 'Blog', href: '/conteudo' },
  { name: 'Dr. Fernando', href: '/sobre' },
  { name: 'Consultas', href: '/consultas' },
  { name: 'Depoimentos', href: '/depoimentos' },
]

const socialLinks = [
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/drfernandodelpiero/',
    icon: Instagram
  },
  { 
    name: 'YouTube', 
    href: 'https://www.youtube.com/@drfernandodelpiero',
    icon: Youtube
  },
]

export function Footer() {
  return (
    <footer className="bg-coral/10 text-charcoal-900 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Dr. Fernando Del Piero</h3>
            <p className="text-charcoal-600 mb-6">
              Médico especialista em metabolismo, emagrecimento e saúde hormonal. 
              Abordagem baseada em evidências científicas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-charcoal-600">
                <MapPin className="mr-2 h-4 w-4" />
                Vitória — ES
              </div>
              <div className="flex items-center text-sm text-charcoal-600">
                <Mail className="mr-2 h-4 w-4" />
                contato@drfernandodelpiero.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-600 hover:text-coral transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Contato</h4>
            <div className="space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full border-coral text-coral hover:bg-coral hover:text-white">
                <Link href={whatsappLink('Olá! Gostaria de agendar uma consulta.')}>
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full border-coral text-coral hover:bg-coral hover:text-white">
                <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Online
                </Link>
              </Button>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal-900 mb-4">Redes Sociais</h4>
            <div className="flex items-center justify-start gap-1">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                const isYouTube = link.name === 'YouTube'
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-charcoal-600 hover:text-coral transition-colors hover:scale-110 transform duration-300 flex items-center justify-center ${isYouTube ? 'w-14 h-14' : 'w-12 h-12'}`}
                  >
                    <span className="sr-only">{link.name}</span>
                    <IconComponent className={isYouTube ? 'h-9 w-9' : 'h-8 w-8'} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-coral/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-charcoal-900 text-center md:text-left">
              © 2024 Dr. Fernando Del Piero. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="/aviso-legal"
                className="text-sm text-charcoal-900 hover:text-coral transition-colors"
              >
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
