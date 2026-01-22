"use client";
import { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cpu className="h-8 w-8 text-primary" />
            <span className="text-light text-xl font-bold ml-2">VCINF TECH</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-light hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-light hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Serviços</a>
              <a href="#" className="text-light hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Loja Online</a>
              <a href="#" className="text-light hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notícias</a>
              <a href="#" className="text-light hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contato</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="border border-primary text-primary hover:bg-primary hover:text-light font-bold py-2 px-4 rounded">
              Área do Cliente
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-light hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu className="block h-6 w-6" /> : <X className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-light hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-light hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Serviços</a>
            <a href="#" className="text-light hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Loja Online</a>
            <a href="#" className="text-light hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Notícias</a>
            <a href="#" className="text-light hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contato</a>
          </div>
          <div className="pt-4 pb-3 border-t border-secondary">
            <div className="flex items-center px-5">
              <button className="w-full border border-primary text-primary hover:bg-primary hover:text-light font-bold py-2 px-4 rounded">
                Área do Cliente
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
