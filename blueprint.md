# VCINF TECH - Landing Page
 
## Overview

This document outlines the plan for creating the landing page for "VCINF TECH", a technology services company. The goal is to create a visually appealing and informative single-page website that showcases the company's services and expertise.

## Implemented Features

- **Design System:**
    - **Theme:** Dark/Winter Theme. Professional, tech-oriented, clean.
    - **Color Palette:**
        - Primary (Brand): #26444f (Deep Teal)
        - Secondary (Highlight): #355a6c (Muted Blue)
        - Text/Light: #f5f2f0 (Off-white/Mist)
        - Background: #0f1518 (Dark Slate)
    - **Typography:** Sans-serif, modern (Inter or Roboto).
- **Sections:**
    - **Navbar (Sticky):**
        - Logo text: "VCINF TECH" with a 'Cpu' icon.
        - Links: Home, Serviços, Loja Online, Notícias, Contato.
        - Button: "Área do Cliente" (Login) - outlined style.
        - Hamburger menu for mobile.
    - **Hero Section:**
        - Headline: "Soluções Completas em Hardware e Inteligência Fiscal"
        - Subheadline: "Manutenção especializada, infraestrutura de redes e assessoria contábil exclusiva para desenvolvedores de software."
        - CTA Button: "Falar com Especialista".
    - **Services Grid (Cards):**
        - Title: "Nossas Especialidades".
        - Cards with Lucide React Icons for:
            - Manutenção de Hardware
            - Infraestrutura
            - Dev Support
            - Desenvolvimento
    - **About/Info Bar:**
        - Location: "Atendendo Sorriso/MT e região".
        - Address: Av. Natalino João Brescansin, Nº 375, Centro Sul.
    - **Footer:**
        - Columns: Services, Contact, Socials.
        - Contact info: (66) 3544-1504 / contato@vcinf.tech.
        - Copyright 2026.

## Plan

This was the plan for the initial implementation:

1.  **Update `tailwind.config.ts`:** Add the custom color palette and fonts.
2.  **Update `src/app/globals.css`:** Set the background and text colors.
3.  **Install `lucide-react`:** Install the icon library.
4.  **Create Components:** Create React components for each section of the landing page.
    *   `Navbar.tsx`
    *   `Hero.tsx`
    *   `Services.tsx`
    *   `About.tsx`
    *   `Footer.tsx`
5.  **Update `src/app/page.tsx`:** Assemble the components to create the landing page.
6.  **Update `src/app/layout.tsx`:** Set the base font and language.
7.  **Lint and check for errors:** Ensure the code is clean and error-free.
