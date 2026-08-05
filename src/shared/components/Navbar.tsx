import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinkItem } from "../../shared/types/types";

const NAV_LINKS: readonly NavLinkItem[] = [
  { path: "/", label: "Inicio" },
  { path: "/psicoterapia", label: "Psicoterapia" },
  { path: "/constelaciones", label: "Constelaciones" },
  { path: "/contacto", label: "Contacto" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Detectar scroll para alternar entre transparente y sólido
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierre de menú móvil al navegar
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Bloqueo de scroll nativo en móvil
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-[#0B132B] border-b border-white/10 shadow-2xl py-3" // ESTADO SÓLIDO AL BAJAR
          : "bg-transparent border-b border-transparent py-6" // ESTADO TRANSPARENTE ARRIBA
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Identidad Minimalista */}
        <Link
          to="/"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055] rounded-lg p-1"
          aria-label="José Ampíes - Inicio"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF0055] group-hover:scale-150 transition-transform duration-300" />
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#FF9E00] transition-colors">
            José Ampíes
          </span>
        </Link>

        {/* Dynamic Navigation Capsule (Desktop) */}
        <nav
          aria-label="Navegación Principal"
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500 ${
            isScrolled
              ? "bg-white/5 border-white/10 backdrop-blur-md"
              : "bg-[#0B132B]/60 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 min-h-[44px] flex items-center text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055] ${
                  isActive
                    ? "text-white font-bold bg-white/10 shadow-inner"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <span className="absolute left-2.5 w-1 h-1 rounded-full bg-[#FF0055]" />
                )}
                <span className={isActive ? "pl-2" : ""}>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA Rápido (Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/584242033589?text=Hola%20Lic.%20Jos%C3%A9%20Amp%C3%ADes,%20deseo%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#FF0055] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF9E00] hover:text-[#0B132B] transition-all duration-300 shadow-lg shadow-[#FF0055]/25 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055]"
          >
            Agendar Cita
          </a>
        </div>

        {/* Hamburguesa Móvil */}
        <button
          type="button"
          className="md:hidden min-h-[44px] min-w-[44px] p-2.5 text-white/90 hover:text-white rounded-full bg-[#0B132B]/80 border border-white/10 backdrop-blur-xl flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055]"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-[#0B132B] transition-all duration-300 flex flex-col p-6 border-t border-white/10 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-4 text-left my-auto">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-serif min-h-[48px] flex items-center transition-colors ${
                  isActive
                    ? "text-[#FF0055] font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a
            href="https://wa.me/584242033589?text=Hola%20Lic.%20Jos%C3%A9%20Amp%C3%ADes,%20deseo%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] py-3 rounded-full bg-[#FF0055] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            Agendar Cita vía WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
