import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatsappLink, generateMetadata } from '@/lib/utils'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Clock,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

export const metadata = generateMetadata({
  title: 'Contato - Dr. Fernando Del Piero',
  description: 'Entre em contato com o Dr. Fernando Del Piero. Agende sua consulta via WhatsApp ou Calendly. Atendimento em Vitória, ES.',
  path: '/contato'
})

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'WhatsApp',
    description: 'Resposta rápida e agendamento direto',
    value: '+55 27 99689-4540',
    action: 'Conversar no WhatsApp',
    href: whatsappLink('Olá! Gostaria de agendar uma consulta.')
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'E-mail',
    description: 'Para dúvidas e informações gerais',
    value: 'contato@drfernandodelpiero.com',
    action: 'Enviar e-mail',
    href: 'mailto:contato@drfernandodelpiero.com'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Localização',
    description: 'Atendimento online em todo o Brasil',
    value: 'Vitória, ES',
    action: 'Ver no mapa',
    href: '#'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Agendamento Online',
    description: 'Escolha o melhor horário para você',
    value: 'Calendly',
    action: 'Agendar consulta',
    href: process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  }
]

const officeHours = [
  { day: 'Segunda-feira', hours: '08:00 - 18:00' },
  { day: 'Terça-feira', hours: '08:00 - 18:00' },
  { day: 'Quarta-feira', hours: '08:00 - 18:00' },
  { day: 'Quinta-feira', hours: '08:00 - 18:00' },
  { day: 'Sexta-feira', hours: '08:00 - 18:00' },
  { day: 'Sábado', hours: '08:00 - 12:00' },
  { day: 'Domingo', hours: 'Fechado' }
]

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-peach-200/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Entre em Contato
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Estou aqui para ajudar você a alcançar seus objetivos de saúde. 
              Escolha a forma mais conveniente para entrar em contato.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Formas de Contato
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Escolha a opção mais conveniente para você
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                      {contact.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{contact.title}</CardTitle>
                      <CardDescription>{contact.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900 mb-4">{contact.value}</p>
                  <Button asChild className="w-full">
                    <Link href={contact.href}>
                      {contact.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Horários de Atendimento
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Consultas online com flexibilidade de horários
            </p>
          </div>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Horários Disponíveis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Importante:</strong> As consultas são realizadas online via videoconferência. 
                  Horários podem variar conforme disponibilidade. Entre em contato para confirmar horários específicos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Envie sua Mensagem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Prefere enviar uma mensagem? Use o WhatsApp para uma resposta mais rápida
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Formulário de Contato
                </h3>
                <p className="text-gray-600 mb-6">
                  Para uma resposta mais rápida, recomendamos usar o WhatsApp. 
                  Lá você pode agendar sua consulta diretamente.
                </p>
                <Button asChild size="lg" className="bg-peach-300 hover:bg-peach-300/90">
                  <Link href={whatsappLink('Olá! Gostaria de entrar em contato.')}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Localização
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Atendimento online em todo o Brasil
            </p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Vitória, Espírito Santo
                  </h3>
                  <p className="text-gray-500">
                    Consultas realizadas online via videoconferência
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
