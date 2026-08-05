import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0B132B] text-[#FDFBF7] pt-16 pb-8 overflow-hidden border-t border-white/10">
      {/* Resplandor ambiental de acento en baja opacidad */}
      <div
        className="absolute top-0 left-1/3 w-64 h-64 bg-[#FF0055]/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Columna 1: Marca & Titulación (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0055]" />
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                José Ampíes
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
              Psicoterapia Gestalt, Hipnosis Clínica & Constelaciones
              Familiares. Acompañamiento profesional integrativo.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF9E00] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#FF9E00] animate-pulse"
                aria-hidden="true"
              />
              <span>Consultas Presenciales & Online</span>
            </div>
          </div>

          {/* Columna 2: Navegación Estricta (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF0055]">
              Navegación
            </h4>
            <nav
              aria-label="Navegación de pie de página"
              className="flex flex-col gap-2"
            >
              {[
                { path: "/", label: "Inicio" },
                { path: "/psicoterapia", label: "Psicoterapia" },
                { path: "/constelaciones", label: "Constelaciones" },
                { path: "/contacto", label: "Contacto" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xs font-mono text-white/70 hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto Directo (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF0055]">
              Atención Directa
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="block text-white/50 mb-0.5">
                  Correo Electrónico
                </span>
                <a
                  href="mailto:buscaayudaestabien@gmail.com"
                  className="text-white hover:text-[#FF9E00] transition-colors underline underline-offset-4"
                >
                  buscaayudaestabien@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Minimalista */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-white/50">
          <p>
            © {currentYear} Lic. José Ampíes. Todos los derechos reservados.
          </p>
          <p className="text-white/30">Caracas, Venezuela</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
