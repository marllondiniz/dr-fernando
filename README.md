# Site Dr. Fernando Del Piero

Site profissional para o médico Dr. Fernando Del Piero, especialista em metabolismo, emagrecimento e saúde da mulher.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React** (ícones)
- **next-seo** (SEO)

## 📋 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ SEO otimizado com metadata e schemas JSON-LD
- ✅ Analytics (Meta Pixel + Google Analytics)
- ✅ Blog com posts em MDX
- ✅ Integração WhatsApp e Calendly
- ✅ Componentes reutilizáveis
- ✅ Acessibilidade (WCAG AA)
- ✅ Performance otimizada

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd dr-fernando-site
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
NEXT_PUBLIC_SITE_URL=https://drfernandodelpiero.com
NEXT_PUBLIC_WHATSAPP=5527996894540
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/drfernandodelpiero/consulta
NEXT_PUBLIC_META_PIXEL_ID=seu_pixel_id
NEXT_PUBLIC_GA_ID=seu_ga_id
NEXT_PUBLIC_CONTACT_EMAIL=contato@drfernandodelpiero.com
```

4. **Execute o projeto**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página sobre
│   ├── protocolos/        # Página de protocolos
│   ├── consultas/         # Página de consultas
│   ├── conteudo/          # Blog
│   ├── depoimentos/       # Depoimentos
│   ├── contato/           # Contato
│   ├── globals.css        # Estilos globais
│   ├── sitemap.ts         # Sitemap XML
│   └── robots.ts          # Robots.txt
├── components/             # Componentes reutilizáveis
│   ├── ui/                # Componentes shadcn/ui
│   ├── layout/            # Header, Footer
│   ├── analytics/         # Meta Pixel, GA
│   └── ...                # Outros componentes
├── lib/                    # Utilitários
│   ├── utils.ts           # Funções utilitárias
│   └── schemas.ts          # Schemas JSON-LD
└── public/                 # Arquivos estáticos
    └── images/            # Imagens do site
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no `tailwind.config.ts`:
- **Primária**: #0EA5E9 (sky-500)
- **Acento**: #22C55E (success/CTA)
- **Neutra**: #0B1221 (texto) e #F1F5F9 (fundo)

### Conteúdo
- Edite os textos diretamente nos arquivos das páginas
- Adicione novos posts do blog em `app/conteudo/[slug]/page.tsx`
- Modifique os depoimentos em `app/depoimentos/page.tsx`

### Imagens
Substitua as imagens placeholder em `public/images/`:
- `hero-dr-fernando.jpg` - Foto principal do Dr. Fernando
- `dr-fernando-profile.jpg` - Foto para página sobre
- `jejum-metabolico.jpg` - Imagem do protocolo de jejum
- `menopausa-protocolo.jpg` - Imagem do protocolo de menopausa
- `emagrecimento-protocolo.jpg` - Imagem do protocolo de emagrecimento
- `og-image.jpg` - Imagem para Open Graph

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório ao Vercel**
2. **Configure as variáveis de ambiente** no painel do Vercel
3. **Deploy automático** a cada push na branch main

### Outras plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 SEO e Performance

### SEO
- ✅ Metadata otimizada para cada página
- ✅ Schemas JSON-LD (Person, MedicalOrganization, FAQPage, Article)
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Open Graph e Twitter Cards

### Performance
- ✅ Imagens otimizadas com next/image
- ✅ Fontes do Google Fonts otimizadas
- ✅ CSS e JS minificados
- ✅ Lazy loading de componentes
- ✅ Prefetch de rotas principais

### Analytics
- ✅ Meta Pixel configurável
- ✅ Google Analytics configurável
- ✅ Eventos de conversão prontos

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linter ESLint
npm run preview      # Preview do build
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## ♿ Acessibilidade

- ✅ Navegação por teclado
- ✅ Screen readers compatível
- ✅ Contraste adequado
- ✅ Alt text em todas as imagens
- ✅ ARIA labels onde necessário

## 📞 Suporte

Para dúvidas sobre o projeto:
- 📧 Email: contato@drfernandodelpiero.com
- 💬 WhatsApp: +55 27 99689-4540

## 📄 Licença

Este projeto é propriedade do Dr. Fernando Del Piero. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Dr. Fernando Del Piero**
