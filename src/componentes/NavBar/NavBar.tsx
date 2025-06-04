import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm mb-10 px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Tirar Visto" className="h-[42px]" />
      </div>

    
      <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700">
        <div className="relative">
          <a href="#home" className="text-black font-bold">Home</a>
          <div className="h-[2px] w-full bg-yellow-400 mt-1"></div>
        </div>
        <a href="#quem-somos" className="hover:text-black transition">Quem somos</a>
        <a href="#servicos" className="hover:text-black transition">Serviços</a>
        <a href="#contato" className="hover:text-black transition">Contato</a>
      </nav>

      {!isMenuOpen && (
        <button
          className="md:hidden text-black z-50 absolute top-6 right-6"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      )}

      {isMenuOpen && (
        <button
          className="md:hidden text-black z-50 absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>
      )}

      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-black font-bold">Home</a>
          <a href="#quem-somos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-black transition">Quem somos</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-black transition">Serviços</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-black transition">Contato</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
