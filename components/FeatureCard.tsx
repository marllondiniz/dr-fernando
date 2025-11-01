import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  ctaText?: string
  ctaHref?: string
}

export function FeatureCard({ title, description, icon, ctaText, ctaHref }: FeatureCardProps) {
  return (
    <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {ctaText && (
        <CardContent>
          <Button asChild className="w-full">
            <a href={ctaHref || whatsappLink(`Olá! Gostaria de saber mais sobre ${title}.`)}>
              {ctaText}
            </a>
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
