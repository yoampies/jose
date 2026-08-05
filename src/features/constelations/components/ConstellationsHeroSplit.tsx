import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ConstellationsNodesCanvas } from "./ConstellationsNodesCanvas";
import { ConstellationsHeroProps } from "../../../shared/types/types";

export const ConstellationsHeroSplit: React.FC<ConstellationsHeroProps> = ({
  onExploreClick,
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0B132B] text-[#FDFBF7] pt-28 pb-16 px-6 md:px-16 flex items-center border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* COLUMNA 1 (IZQUIERDA - 6 cols): Canvas Interactivo de Nodos Sistémicos */}
        <div className="lg:col-span-6 h-[500px] sm:h-[600px] order-2 lg:order-1">
          <ConstellationsNodesCanvas nodeCount={40} />
        </div>

        {/* COLUMNA 2 (DERECHA - 6 cols): Bloque Editorial e Información (Texto a la Derecha) */}
        <div
          ref={textRef}
          className="lg:col-span-6 space-y-8 text-left order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#9D4EDD]/15 border border-[#9D4EDD]/30 rounded-full backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9D4EDD] animate-ping" />
            <span className="text-xs font-mono text-[#9D4EDD] font-bold uppercase tracking-widest">
              02 / TERAPIA SISTÉMICA & ÓRDENES DEL AMOR
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
            Constelaciones <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D4EDD] via-[#FF0055] to-[#FF9E00]">
              Familiares
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#FDFBF7]/80 font-light max-w-xl leading-relaxed">
            Explora tus raíces invisibles, honra tu historia genealógica y
            libera los bloqueos heredados para sanar la relación con la salud,
            el dinero y tus vínculos afectivos.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-[#9D4EDD] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF0055] transition-all duration-300 shadow-xl shadow-[#9D4EDD]/30 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D4EDD]"
            >
              <span>Comprender el Método</span>
              <span>&darr;</span>
            </button>
            <a
              href="https://wa.me/584242033589?text=Hola%20Lic.%20Jos%C3%A9%20Amp%C3%ADes,%20deseo%20informaci%C3%B3n%20sobre%20Constelaciones%20Familiares"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-white/10 text-white border border-white/15 font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Consulta Sistémica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
