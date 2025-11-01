# 🚀 Guia de Deploy - Site Dr. Fernando Del Piero

## Pré-requisitos

- ✅ Conta no GitHub
- ✅ Conta no Vercel (gratuita)
- ✅ Domínio configurado (opcional)

## Passo a Passo para Deploy

### 1. Preparar o Projeto

```bash
# Instalar dependências
npm install

# Testar localmente
npm run dev

# Verificar se tudo está funcionando
npm run build
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` com suas configurações:

```env
# Site URL (substitua pelo seu domínio)
NEXT_PUBLIC_SITE_URL=https://drfernandodelpiero.com

# WhatsApp (formato: 5527996894540)
NEXT_PUBLIC_WHATSAPP=5527996894540

# Calendly (sua URL do Calendly)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/drfernandodelpiero/consulta

# Analytics (opcional)
NEXT_PUBLIC_META_PIXEL_ID=seu_pixel_id_aqui
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email de contato
NEXT_PUBLIC_CONTACT_EMAIL=contato@drfernandodelpiero.com
```

### 3. Deploy no Vercel

#### Opção A: Deploy via GitHub (Recomendado)

1. **Conecte seu repositório ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte sua conta do GitHub
   - Selecione o repositório do projeto

2. **Configure as variáveis de ambiente**
   - No painel do Vercel, vá em "Settings" > "Environment Variables"
   - Adicione todas as variáveis do `.env.local`
   - Marque "Production", "Preview" e "Development"

3. **Deploy automático**
   - O Vercel fará o deploy automaticamente
   - Cada push na branch `main` gerará um novo deploy

#### Opção B: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login no Vercel
vercel login

# Deploy
vercel

# Deploy de produção
vercel --prod
```

### 4. Configurar Domínio Personalizado

1. **No painel do Vercel**
   - Vá em "Settings" > "Domains"
   - Adicione seu domínio personalizado
   - Configure os registros DNS conforme instruído

2. **Registros DNS necessários**
   ```
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com

   Tipo: A
   Nome: @
   Valor: 76.76.19.61
   ```

### 5. Configurar Analytics

#### Meta Pixel (Facebook)
1. Acesse o [Facebook Business Manager](https://business.facebook.com)
2. Crie um Pixel
3. Copie o Pixel ID
4. Adicione no Vercel como `NEXT_PUBLIC_META_PIXEL_ID`

#### Google Analytics
1. Acesse o [Google Analytics](https://analytics.google.com)
2. Crie uma propriedade
3. Copie o Measurement ID (formato: G-XXXXXXXXXX)
4. Adicione no Vercel como `NEXT_PUBLIC_GA_ID`

### 6. Configurar WhatsApp Business

1. **Criar conta WhatsApp Business**
2. **Configurar número de telefone**
   - Formato: 5527996894540 (sem + e espaços)
3. **Testar integração**
   - Acesse o site
   - Clique nos botões do WhatsApp
   - Verifique se abre corretamente

### 7. Configurar Calendly

1. **Criar conta no Calendly**
2. **Configurar tipos de consulta**
   - Consulta Inicial (90 min)
   - Consulta de Retorno (45 min)
3. **Personalizar página**
   - Adicionar logo
   - Configurar cores
   - Definir horários disponíveis
4. **Copiar URL pública**
   - Adicionar no Vercel como `NEXT_PUBLIC_CALENDLY_URL`

### 8. Otimizações Pós-Deploy

#### SEO
- ✅ Verificar sitemap: `https://seudominio.com/sitemap.xml`
- ✅ Verificar robots.txt: `https://seudominio.com/robots.txt`
- ✅ Testar no Google Search Console
- ✅ Verificar schemas JSON-LD

#### Performance
- ✅ Testar no Google PageSpeed Insights
- ✅ Verificar Lighthouse Score
- ✅ Otimizar imagens se necessário

#### Analytics
- ✅ Verificar se Meta Pixel está funcionando
- ✅ Verificar se Google Analytics está funcionando
- ✅ Configurar eventos de conversão

### 9. Monitoramento

#### Ferramentas Recomendadas
- **Vercel Analytics**: Métricas de performance
- **Google Search Console**: SEO e indexação
- **Google Analytics**: Comportamento dos usuários
- **Meta Pixel**: Conversões do Facebook/Instagram

#### KPIs Importantes
- Tempo de carregamento
- Taxa de conversão (agendamentos)
- Tráfego orgânico
- Engajamento nas páginas

### 10. Manutenção

#### Atualizações Regulares
- ✅ Atualizar conteúdo do blog
- ✅ Adicionar novos depoimentos
- ✅ Atualizar informações de contato
- ✅ Verificar links externos

#### Backup
- ✅ Código versionado no GitHub
- ✅ Backup das variáveis de ambiente
- ✅ Backup das imagens

## 🆘 Solução de Problemas

### Erro de Build
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Problemas de Imagens
- Verificar se as imagens existem em `public/images/`
- Verificar formato e tamanho das imagens
- Usar ferramentas de otimização online

### Problemas de SEO
- Verificar se todas as páginas têm metadata
- Testar schemas JSON-LD
- Verificar sitemap e robots.txt

### Problemas de Analytics
- Verificar se as variáveis estão corretas
- Testar em modo incógnito
- Verificar console do navegador

## 📞 Suporte

Para dúvidas sobre o deploy:
- 📧 Email: contato@drfernandodelpiero.com
- 💬 WhatsApp: +55 27 99689-4540
- 📚 Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)

---

**Deploy realizado com sucesso! 🎉**
