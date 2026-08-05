import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import psycotherapyWhatIsImg from "../../../assets/psychotherapy_wi.webp";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Darse Cuenta (Awareness)",
    tag: "Conciencia",
    description:
      "Identificación de sensaciones corporales, emociones retenidas y pensamientos automáticos que operan en tu día a día.",
  },
  {
    number: "02",
    title: "Integración de Polaridades",
    tag: "Aceptación",
    description:
      "Reconciliación de aspectos contradictorios de tu personalidad para detener la lucha interna y recuperar energía vital.",
  },
  {
    number: "03",
    title: "Autorresponsabilidad",
    tag: "Acción",
    description:
      "Abandono de la posición de víctima para asumir las riendas de tus decisiones, límites y vínculos afectivos.",
  },
];

export const GestaltMethodologyTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validSteps = stepsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (validSteps.length > 0) {
        gsap.fromTo(
          validSteps,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
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
      className="w-full py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#0B132B] via-[#10002B] to-[#0B132B] border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Columna 1: Imagen Principal con Marco Neon */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
            <img
              src={psycotherapyWhatIsImg}
              alt="Sesión de Psicoterapia Gestalt"
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#FF0055] uppercase tracking-wider block font-bold">
                Acompañamiento Profesional
              </span>
              <p className="font-serif italic text-xl text-white">
                Espacio Confidencial & Seguro
              </p>
            </div>
          </div>
        </div>

        {/* Columna 2: Timeline Pasos Gestalt */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF9E00] font-bold block mb-2">
              Metodología de Trabajo
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              ¿Cómo funciona el proceso?
            </h2>
          </div>

          <div className="space-y-6">
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepsRef.current[idx] = el;
                }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0055]/40 transition-all flex gap-6 items-start group"
              >
                <span className="font-mono text-2xl font-bold text-[#FF0055] group-hover:text-[#FF9E00] transition-colors">
                  {step.number}
                </span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/80 rounded border border-white/10">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
