// src/shared/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-blue-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Orbes decorativos sutiles para consistencia visual */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#06D6A0]/5 blur-[120px] rounded-full translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Columna 1: Marca y Bio corta */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter text-[#FFD685]">
              José Ampíes
            </h3>
            <p className="text-blue-100/70 text-lg leading-relaxed max-w-xs">
              Acompañando procesos de transformación personal a través de la
              Terapia Gestalt y Constelaciones Familiares.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white underline decoration-[#06D6A0] decoration-2 underline-offset-8">
              Explorar
            </h4>
            <nav className="flex flex-col gap-4 text-lg">
              <Link
                to="/"
                className="hover:text-[#FFD685] transition-colors w-fit"
              >
                Inicio
              </Link>
              <Link
                to="/psicoterapia"
                className="hover:text-[#FFD685] transition-colors w-fit"
              >
                Psicoterapia
              </Link>
              <Link
                to="/constelaciones"
                className="hover:text-[#FFD685] transition-colors w-fit"
              >
                Constelaciones
              </Link>
              <Link
                to="/contacto"
                className="hover:text-[#FFD685] transition-colors w-fit"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white underline decoration-[#D62839] decoration-2 underline-offset-8">
              Conectar
            </h4>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="block text-sm uppercase tracking-widest text-blue-400 font-bold mb-1">
                  Email
                </span>
                <a
                  href="mailto:contacto@email.com"
                  className="hover:text-[#FFD685] transition-colors"
                >
                  contacto@email.com
                </a>
              </p>
              <div className="pt-2">
                <span className="block text-sm uppercase tracking-widest text-blue-400 font-bold mb-3">
                  Redes Sociales
                </span>
                <div className="flex gap-6">
                  {/* Iconos simplificados con aria-labels para accesibilidad */}
                  <a
                    href="#"
                    aria-label="Instagram de José Ampíes"
                    className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn profesional de José Ampíes"
                    className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior: Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200/50 text-sm">
          <p>© {currentYear} José Ampíes. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <button
              className="hover:text-white transition-colors"
              aria-label="Ver política de privacidad"
            >
              Privacidad
            </button>
            <button
              className="hover:text-white transition-colors"
              aria-label="Ver términos y condiciones"
            >
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
