import React from "react";
import constelationsRelationship from "../../../assets/constelations_relationship.svg";
import constelationsHealth from "../../../assets/constelations_health.svg";
import constelationsMoney from "../../../assets/constelations_money.svg";

const BENEFIT_CARDS = [
  {
    id: "relaciones",
    title: "Vínculos & Pareja",
    category: "Relaciones Familiares",
    description:
      "Sana las heridas con padres e hijos, resuelve patrones repetitivos en la elección de pareja y recupera la paz en la convivencia.",
    icon: constelationsRelationship,
    borderColor: "border-[#FF0055]/40",
    accentColor: "text-[#FF0055]",
  },
  {
    id: "salud",
    title: "Síntomas & Salud",
    category: "Mensaje Somático",
    description:
      "Comprende la lealtad inconsciente detrás de enfermedades recurrentes o síntomas somáticos que el cuerpo expresa por el clan.",
    icon: constelationsHealth,
    borderColor: "border-[#9D4EDD]/40",
    accentColor: "text-[#9D4EDD]",
  },
  {
    id: "abundancia",
    title: "Abundancia & Profesión",
    category: "Éxito & Dinero",
    description:
      "Desbloquea frenos económicos, lealtades a la escasez familiar y permite que la prosperidad fluya en tu carrera profesional.",
    icon: constelationsMoney,
    borderColor: "border-[#FF9E00]/40",
    accentColor: "text-[#FF9E00]",
  },
];

export const SystemicBeneficiosShowcase: React.FC = () => {
  return (
    <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto bg-gradient-to-b from-[#0B132B] via-[#1A0933] to-[#0B132B]">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FF0055] font-bold block">
          Ámbitos de Aplicación
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          ¿Cómo te pueden ayudar?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BENEFIT_CARDS.map((benefit) => (
          <div
            key={benefit.id}
            className={`bg-white/5 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border ${benefit.borderColor} shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 p-4 border border-white/15 flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <span
                className={`text-xs font-mono uppercase tracking-wider font-bold block ${benefit.accentColor}`}
              >
                {benefit.category}
              </span>

              <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#FF9E00] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-white/75 text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>

            <a
              href={`https://wa.me/584242033589?text=Hola%20Lic.%20Jos%C3%A9%20Amp%C3%ADes,%20deseo%20constelar%20sobre%20${encodeURIComponent(benefit.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 pt-4 border-t border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#FF9E00] flex items-center justify-between transition-colors min-h-[44px]"
            >
              <span>Consultar caso</span>
              <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
