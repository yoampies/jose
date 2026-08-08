import React from "react";
import psicoterapiaImg from "../../../assets/servicio-psicoterapia.webp";
import familiaImg from "../../../assets/servicio-familia.webp";
import parejaImg from "../../../assets/servicio-pareja.webp";

const SHOWCASE_ITEMS = [
  {
    id: "individual",
    title: "Terapia Individual de Adultos",
    category: "Modalidad Presencial & Online",
    quote:
      "“Reconoce tus necesidades no satisfechas para cerrar ciclos abiertos.”",
    description:
      "Tratamiento especializado para ansiedad, depresión, duelos no resueltos, crisis vitales y bloqueos en la toma de decisiones.",
    img: psicoterapiaImg,
    badgeColor: "text-[#FF0055]",
  },
  {
    id: "infantil",
    title: "Psicoterapia Infantil y Adolescentes",
    category: "Expresión & Expresividad",
    quote: "“El juego es el lenguaje natural del niño para sanar sus miedos.”",
    description:
      "Espacio guiado para niños y adolescentes con dificultades de conducta, regulación emocional, bullying o cambios familiares.",
    img: familiaImg,
    badgeColor: "text-[#9D4EDD]",
  },
  {
    id: "pareja",
    title: "Terapia de Pareja y Relaciones",
    category: "Reconstrucción del Vínculo",
    quote:
      "“Transformar el conflicto en una oportunidad de intimidad verdadera.”",
    description:
      "Acompañamiento a parejas en crisis de comunicación, infidelidad, celos, dinámicas de codependencia o procesos de separación consciente.",
    img: parejaImg,
    badgeColor: "text-[#FF9E00]",
  },
];

export const PsycotherapySplitShowcase: React.FC = () => {
  return (
    <section className="py-28 px-6 md:px-32 max-w-7xl mx-auto space-y-16 bg-[#0B132B]">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#FF0055] font-bold block">
          Áreas de Acompañamiento Específico
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Especialidades Clínicas
        </h2>
      </div>

      <div className="space-y-10">
        {SHOWCASE_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-2 sm:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/25 transition-all ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`lg:col-span-7 space-y-2 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
            >
              <span
                className={`text-xs font-mono uppercase tracking-wider font-bold block ${item.badgeColor}`}
              >
                {item.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {item.title}
              </h3>
              <p className="font-serif italic text-lg text-[#FF9E00]">
                {item.quote}
              </p>
              <p className="text-white/80 text-base leading-relaxed font-light">
                {item.description}
              </p>

              <div className="pt-4">
                <a
                  //href={`https://wa.me/584242033589?text=Hola%20Lic.%20Jos%C3%A9%20Amp%C3%ADes,%20deseo%20agendar%20una%20consulta%20para%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF0055] hover:text-white transition-colors min-h-[44px]"
                >
                  <span>Agendar esta especialidad</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            <div
              className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 sm:h-64">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
