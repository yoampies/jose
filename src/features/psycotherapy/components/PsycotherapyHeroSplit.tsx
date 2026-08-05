import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { PsycotherapyHeroLensCanvas } from "./PsycotherapyHeroLensCanvas";
import { HeroBaseProps } from "../../../shared/types/types";

export const PsycotherapyHeroSplit: React.FC<HeroBaseProps> = ({
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-split-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0B132B] text-[#FDFBF7] pt-28 pb-16 px-6 md:px-16 flex items-center border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Editorial Limpio (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          <div className="hero-split-text flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF0055] font-bold uppercase tracking-widest px-3 py-1 bg-[#FF0055]/10 border border-[#FF0055]/30 rounded-full">
              01 / PSICOTERAPIA GESTALT
            </span>
          </div>

          <h1 className="hero-split-text font-serif text-5xl sm:text-7xl font-bold leading-[0.95] tracking-tight">
            El arte de habitar el{" "}
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF0055] via-[#9D4EDD] to-[#FF9E00]">
              Presente.
            </span>
          </h1>

          <p className="hero-split-text text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-xl">
            Desarticula bloqueos emocionales, integra tus polaridades y recupera
            tu autorresponsabilidad a través del enfoque Gestalt.
          </p>

          <div className="hero-split-text pt-4 flex items-center gap-4">
            <button
              onClick={onExploreClick}
              className="min-h-[48px] px-8 rounded-full bg-[#FF0055] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF9E00] hover:text-[#0B132B] transition-all duration-300 shadow-lg shadow-[#FF0055]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055]"
            >
              Ver Metodología
            </button>
            <a
              href="https://wa.me/584242033589"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-8 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Consulta Directa
            </a>
          </div>
        </div>

        {/* Columna Derecha: Lente Interactivo (6 cols) */}
        <div className="lg:col-span-6 h-[500px] sm:h-[600px] relative">
          <PsycotherapyHeroLensCanvas overlayImage="" />
        </div>
      </div>
    </section>
  );
};
