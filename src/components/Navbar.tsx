'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LogoIcon } from './LogoIcon';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#loja', label: 'Loja Online' },
    { href: '#noticias', label: 'Notícias' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+5511999999999" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Phone size={12} />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@vcinf.tech" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Mail size={12} />
                <span>contato@vcinf.tech</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="opacity-70">Seg-Sex: 8h às 18h</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5' 
            : 'bg-background/80 backdrop-blur-md'
        }`}
        data-testid="main-navbar"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-[72px] items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-3" 
              onClick={() => setIsMenuOpen(false)}
              data-testid="logo-link"
            >
              <div className="relative">
                <LogoIcon className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold tracking-tight text-primary leading-tight">
                  VCINF TECH
                </span>
                <span className="text-[10px] text-secondary font-medium tracking-widest uppercase">
                  Soluções em TI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-200 group"
                      data-testid={`nav-link-${index}`}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                className="group relative overflow-hidden bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
                data-testid="cta-button"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Área do Cliente
                  <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="relative p-2 rounded-lg text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                data-testid="mobile-menu-toggle"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                    size={24} 
                  />
                  <X 
                    className={`absolute inset-0 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`} 
                    size={24} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-secondary/10 bg-background/98 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      data-testid={`mobile-nav-link-${index}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {link.label}
                      <ChevronRight size={16} className="opacity-40" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-secondary/10 space-y-4">
                <button 
                  className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
                  data-testid="mobile-cta-button"
                >
                  Área do Cliente
                  <ChevronRight size={18} />
                </button>
                
                <div className="flex flex-col gap-3 pt-2">
                  <a href="tel:+5511999999999" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors px-2">
                    <Phone size={16} />
                    <span>(11) 99999-9999</span>
                  </a>
                  <a href="mailto:contato@vcinf.tech" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors px-2">
                    <Mail size={16} />
                    <span>contato@vcinf.tech</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
