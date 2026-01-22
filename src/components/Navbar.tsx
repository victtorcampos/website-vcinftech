'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LogoIcon } from './LogoIcon';

// Ícone do Menu Hambúrguer
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// Ícone de Fechar (X)
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Serviços' },
    { href: '#', label: 'Loja Online' },
    { href: '#', label: 'Notícias' },
    { href: '#', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary transition-transform hover:scale-105" onClick={() => setIsMenuOpen(false)}>
          <LogoIcon />
          <span className="hidden sm:inline-block">VCINF TECH</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="px-4 py-2 text-sm font-medium border border-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Área do Cliente
          </button>
        </div>

        {/* Botão do Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-foreground/80 hover:text-foreground transition-colors">
            <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-secondary/50 bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto flex flex-col items-stretch gap-4 px-4 py-6 md:px-6">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-center text-lg"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col items-stretch gap-4 pt-4 border-t border-secondary/50">
              <button 
                className="w-full px-4 py-3 text-sm font-medium border border-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Área do Cliente
              </button>
              <div className="self-center">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
