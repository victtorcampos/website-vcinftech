# VCINF TECH - PRD (Product Requirements Document)

## Projeto
Site institucional da VCINF TECH - Soluções em Hardware e Inteligência Fiscal

## Problema Original
- Navbar estava sem estilo (HTML cru)
- Necessidade de reescrever o componente Navbar.tsx para ficar profissional
- Usar variáveis CSS e Tailwind configuradas no projeto
- Inspiração: Flowbite Navbar

## Stack Técnico
- **Framework:** Next.js 16.0.8 (App Router)
- **Frontend:** React 19.2.1 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## Arquitetura

### Estrutura de Componentes
```
src/
├── app/
│   ├── globals.css      # Variáveis CSS + Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/
│   ├── Navbar.tsx       # Navbar principal
│   ├── ThemeProvider.tsx # Context para tema
│   ├── ThemeToggle.tsx  # Botão toggle dark/light
│   ├── HydrationFix.tsx # Fix para hydration error
│   └── LogoIcon.tsx     # Logo SVG
```

### Sistema de Temas
- Light Theme: Corporativo & Limpo
- Dark Theme: Tech & Imersivo
- Variáveis CSS: --background, --foreground, --primary, --primary-foreground, --secondary

## O Que Foi Implementado ✅

### Data: 22/01/2026

1. **Navbar Profissional** (estilo Flowbite)
   - Logo + Nome da empresa
   - Links de navegação (Home, Serviços, Loja Online, Notícias, Contato)
   - Botão CTA "Área do Cliente"
   - Theme Toggle (dark/light)
   - Menu hamburger mobile
   - Design responsivo (desktop/mobile)

2. **Correção de Hydration Error**
   - Criado HydrationFix.tsx como Client Component
   - Removido AntiFlickerScript inline
   - Adicionado suppressHydrationWarning no html

3. **CSS Variables atualizadas**
   - --primary-foreground para contraste nos botões

## User Personas
- **Clientes empresariais:** Buscam soluções em hardware e inteligência fiscal
- **Visitantes:** Navegando para conhecer serviços e entrar em contato

## Core Requirements (Estáticos)
- Navbar fixa no topo
- Responsivo (mobile-first)
- Alternância de tema dark/light
- Acessibilidade básica (aria-labels)

## Backlog / Próximos Passos

### P0 (Crítico)
- [ ] Conteúdo da página inicial (Hero, Serviços, etc.)

### P1 (Importante)
- [ ] Seção de Serviços
- [ ] Seção de Contato com formulário
- [ ] Footer

### P2 (Nice to have)
- [ ] Animações de scroll
- [ ] Página de Loja Online
- [ ] Blog/Notícias
- [ ] Área do Cliente (login)

## Arquivos Modificados
- `/app/src/components/Navbar.tsx` - Reescrito completamente
- `/app/src/app/globals.css` - Adicionada --primary-foreground
- `/app/src/app/layout.tsx` - Removido AntiFlickerScript, adicionado HydrationFix
- `/app/src/components/HydrationFix.tsx` - Novo componente
- `/app/tailwind.config.ts` - Atualizado primary.foreground
