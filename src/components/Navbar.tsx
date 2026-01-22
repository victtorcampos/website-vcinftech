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
    <nav className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="hidden text-xl font-bold tracking-tight text-primary sm:inline-block">
              VCINF TECH
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-secondary hover:text-primary transition-colors text-sm font-medium no-underline">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions Area & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-primary text-background px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-all text-sm">
              Área do Cliente
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-secondary hover:text-primary">
              <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-secondary/20 bg-background/95">
          <div className="container mx-auto flex flex-col items-stretch gap-4 px-4 py-6 sm:px-6">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-secondary hover:text-primary transition-colors py-2 text-center text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col items-stretch gap-4 pt-6 border-t border-secondary/20">
              <button className="bg-primary text-background px-4 py-3 rounded-lg font-medium shadow-sm hover:bg-primary/90 transition-all">
                Área do Cliente
              </button>
              <div className="self-center mt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
