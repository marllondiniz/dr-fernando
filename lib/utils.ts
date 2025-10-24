import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utilitários para WhatsApp
export function whatsappLink(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || '5527999669050'
  const baseUrl = `https://wa.me/${phone}`
  
  if (message) {
    const encodedMessage = encodeURIComponent(message)
    return `${baseUrl}?text=${encodedMessage}`
  }
  
  return baseUrl
}

// Utilitários para UTM
export function addUtmParams(url: string, source: string, medium: string = 'cta'): string {
  const urlObj = new URL(url)
  urlObj.searchParams.set('utm_source', source)
  urlObj.searchParams.set('utm_medium', medium)
  return urlObj.toString()
}

// Utilitários para SEO
export function generateMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drfernandodelpiero.com'
  const fullUrl = `${siteUrl}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Dr. Fernando Del Piero',
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}