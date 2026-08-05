import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constelationsWiImg from "../../../assets/constelations_wi.webp";

gsap.registerPlugin(ScrollTrigger);

export const SystemicPhilosophyGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 px-6 md:px-16 max-w-7xl mx-auto bg-[#0B132B]"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9D4EDD] font-bold block">
          Fundamentos Sistémicos
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Los Órdenes del Amor
        </h2>
        <p className="text-white/70 font-light text-base">
          Principios fundamentales para restaurar el flujo de la vida y la paz
          emocional en el sistema familiar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Card Grande Lateral: Pertenencia */}
        <div
          ref={(el) => {
            cardsRef.current[0] = el;
          }}
          className="md:col-span-7 bg-gradient-to-br from-[#2D0A4E] via-[#10002B] to-[#0B132B] p-8 sm:p-12 rounded-3xl border border-[#9D4EDD]/40 shadow-2xl flex flex-col justify-between"
        >
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#FF9E00] font-bold uppercase tracking-wider block">
              Primer Orden
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Derecho a la Pertenencia
            </h3>
            <p className="text-white/80 leading-relaxed font-light text-base">
              Todos los miembros del clan tienen el mismo derecho a pertenecer.
              Cuando alguien es excluido, olvidado o juzgado, un miembro
              posterior repetirá su destino de forma inconsciente.
            </p>
          </div>
          <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
            <span className="text-xs font-mono text-white/50">
              Restauración del Vínculo
            </span>
            <span className="text-sm font-bold text-[#FF0055]">&rarr;</span>
          </div>
        </div>

        {/* Imagen Contextual Integrada */}
        <div
          ref={(el) => {
            cardsRef.current[1] = el;
          }}
          className="md:col-span-5 rounded-3xl overflow-hidden border border-white/15 h-80 md:h-auto relative group"
        >
          <img
            src={constelationsWiImg}
            alt="Configuración de constelación familiar"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs font-mono text-[#FF9E00] uppercase tracking-wider block font-bold">
              Imágenes de Solución
            </span>
            <p className="font-serif italic text-lg text-white">
              Ordenando el Sistema
            </p>
          </div>
        </div>

        {/* Card 2: Jerarquía */}
        <div
          ref={(el) => {
            cardsRef.current[2] = el;
          }}
          className="md:col-span-6 bg-gradient-to-br from-[#4A0E2E] to-[#0B132B] p-8 sm:p-10 rounded-3xl border border-[#FF0055]/30 shadow-2xl space-y-4"
        >
          <span className="text-xs font-mono text-[#FF0055] font-bold uppercase tracking-wider block">
            Segundo Orden
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            La Jerarquía (Prioridad del Tiempo)
          </h3>
          <p className="text-white/80 leading-relaxed font-light text-sm">
            Los que llegaron antes tienen prioridad sobre los que llegaron
            después. Los padres dan, los hijos toman. Invertir este orden genera
            cargas insostenibles.
          </p>
        </div>

        {/* Card 3: Equilibrio */}
        <div
          ref={(el) => {
            cardsRef.current[3] = el;
          }}
          className="md:col-span-6 bg-gradient-to-br from-[#3D1E10] to-[#0B132B] p-8 sm:p-10 rounded-3xl border border-[#E07A5F]/30 shadow-2xl space-y-4"
        >
          <span className="text-xs font-mono text-[#E07A5F] font-bold uppercase tracking-wider block">
            Tercer Orden
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Equilibrio entre Dar y Tomar
          </h3>
          <p className="text-white/80 leading-relaxed font-light text-sm">
            Las relaciones humanas sanas se sostienen en un intercambio
            equitativo de dar y recibir. Solo la relación de padres e hijos
            escapa a esta simetría.
          </p>
        </div>
      </div>
    </section>
  );
};
