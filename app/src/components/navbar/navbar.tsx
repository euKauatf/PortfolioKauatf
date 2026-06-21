import { useState } from "react";
import { NavLink } from "react-router-dom";
import Leaf from "../../assets/images/leaf.svg?react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função auxiliar para aplicar a classe e gerenciar o estado ativo do link
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="w-full px-6 py-5 flex items-center justify-between sticky top-0 z-50 bg-[#fdf8f5] md:bg-transparent transition-colors duration-300">
      {/* LOGO */}
      <div className="flex items-center gap-2 z-50">
        <NavLink
          to="/"
          className="text-2xl font-bold text-[#2c1a12] flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-[#5d8a4e]">/</span>euKauatf
          <Leaf className="w-6 h-6 fill-[#5d8a4e]" />
        </NavLink>
      </div>

      {/* MENU DESKTOP (Invisível no celular) */}
      <div className="hidden md:flex items-center gap-8 font-bold text-[#2c1a12]">
        <NavLink to="/" end className={navLinkClass}>
          Profissional
        </NavLink>
        {/*
        <NavLink to="/pessoal" className={navLinkClass}>
          Pessoal
        </NavLink>
        */}
        <NavLink to="/contato" className={navLinkClass}>
          Contato
        </NavLink>
      </div>
      {/* BOTÃO HAMBÚRGUER MOBILE */}
      <button
        className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span
          className={`h-0.5 bg-[#2c1a12] rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : "w-6"
          }`}
        ></span>
        {/* Linha do meio menor (w-4) e alinhada à direita (self-end) */}
        <span
          className={`h-0.5 bg-[#2c1a12] rounded transition-all duration-300 ${
            isOpen ? "w-0 opacity-0" : "w-4 self-end"
          }`}
        ></span>
        <span
          className={`h-0.5 bg-[#2c1a12] rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "w-6"
          }`}
        ></span>
      </button>

      {/* MENU DROPDOWN MOBILE */}
      <div
        className={`absolute top-full left-0 w-full md:hidden flex flex-col items-center font-bold text-[#2c1a12] bg-[#fdf8f5] border-b border-[#2c1a12]/10 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `py-3 w-full text-center transition-colors ${
              isActive
                ? "text-[#5d8a4e] bg-[#d29c73]/10"
                : "hover:bg-[#d29c73]/10"
            }`
          }
        >
          Profissional
        </NavLink>
        {/*
        <NavLink
          to="/pessoal"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `py-3 w-full text-center transition-colors ${
              isActive
                ? "text-[#5d8a4e] bg-[#d29c73]/10"
                : "hover:bg-[#d29c73]/10"
            }`
          }
        >
          Pessoal
        </NavLink>
        */}
        <NavLink
          to="/contato"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `py-3 w-full text-center transition-colors ${
              isActive
                ? "text-[#5d8a4e] bg-[#d29c73]/10"
                : "hover:bg-[#d29c73]/10"
            }`
          }
        >
          Contato
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
