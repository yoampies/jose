import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full pt-4 px-4 flex justify-center items-center absolute z-30">
      <nav className="flex gap-12">
        <a href="/" className="text-white">
          Inicio
        </a>
        <a href="/psicoterapia" className="text-white">
          Psicoterapia
        </a>
        <a href="/constelaciones" className="text-white">
          Constelaciones
        </a>
        <a href="/contacto" className="text-white">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
