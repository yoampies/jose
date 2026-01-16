import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full pt-4 px-4 flex justify-between md:justify-center items-center absolute z-50">
      {/* Logo móvil (oculto en desktop) */}
      <div className="text-white font-bold text-xl md:hidden">JA</div>

      {/* Botón Hamburguesa (oculto en desktop) */}
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        <svg
          className="w-8 h-8"
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

      {/* Menú */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-blue-900/95 md:bg-transparent p-6 md:p-0 gap-6 md:gap-12 items-center justify-center transition-all duration-300 backdrop-blur-md md:backdrop-blur-none`}
      >
        <a
          href="/"
          className="text-white hover:text-[#FFD685] transition-colors font-medium"
        >
          Inicio
        </a>
        <a
          href="/psicoterapia"
          className="text-white hover:text-[#FFD685] transition-colors font-medium"
        >
          Psicoterapia
        </a>
        <a
          href="/constelaciones"
          className="text-white hover:text-[#FFD685] transition-colors font-medium"
        >
          Constelaciones
        </a>
        <a
          href="/contacto"
          className="text-white hover:text-[#FFD685] transition-colors font-medium"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
