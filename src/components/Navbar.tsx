import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { LogoIcon } from './LogoIcon';

export function Navbar() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Serviços' },
    { href: '#', label: 'Loja Online' },
    { href: '#', label: 'Notícias' },
    { href: '#', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-secondary bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <LogoIcon />
          <span>VCINF TECH</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="px-4 py-2 text-sm font-medium border border-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Área do Cliente
          </button>
        </div>
      </div>
    </header>
  );
}
