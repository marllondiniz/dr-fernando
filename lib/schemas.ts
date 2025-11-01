export function PersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Fernando Del Piero",
    "jobTitle": "Médico Especialista em Metabolismo",
    "description": "Médico especialista em metabolismo, emagrecimento e saúde da mulher. Abordagem baseada em evidências científicas.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://drfernandodelpiero.com",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://drfernandodelpiero.com"}/images/dr-fernando-profile.jpg`,
    "sameAs": [
      "https://www.instagram.com/drfernandodelpiero",
      "https://www.linkedin.com/in/drfernandodelpiero"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vitória",
      "addressRegion": "ES",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": process.env.NEXT_PUBLIC_WHATSAPP || "+5527996894540",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Universidade Federal do Espírito Santo"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Hospital das Clínicas - USP"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "educationalLevel": "Graduate",
        "name": "Medicina"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree", 
        "educationalLevel": "Graduate",
        "name": "Especialização em Endocrinologia"
      }
    ]
  }
}

export function MedicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dr. Fernando Del Piero - Consultório Médico",
    "description": "Consultório médico especializado em metabolismo, emagrecimento e saúde da mulher",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://drfernandodelpiero.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://drfernandodelpiero.com"}/images/logo.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vitória",
      "addressRegion": "ES", 
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": process.env.NEXT_PUBLIC_WHATSAPP || "+5527996894540",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "medicalSpecialty": [
      "Endocrinologia",
      "Medicina Interna",
      "Medicina Funcional"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Médicos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Consulta Inicial",
            "description": "Anamnese completa, solicitação de exames e plano inicial"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Acompanhamento",
            "description": "Consulta de retorno e ajustes no protocolo"
          }
        }
      ]
    }
  }
}

export function FAQPageSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url
}: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  image: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Fernando Del Piero",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://drfernandodelpiero.com"}/images/logo.jpg`
      }
    },
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }
}
