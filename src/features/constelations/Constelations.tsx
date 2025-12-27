// src/features/constelations/Constelations.tsx
import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

// Assets
import constelations from "../../assets/constelations_home.webp";
import constelations_wi from "../../assets/constelations_wi.webp";
import constelations_money from "../../assets/constelations_money.svg";
import constelations_health from "../../assets/constelations_health.svg";
import constelations_relationship from "../../assets/constelations_relationship.svg";
import constelations_portrait from "../../assets/constelations_portrait.svg";

import { useConstelationsAnimations } from "./hooks/useConstelationsAnimations";

const Constelations: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  const refs = {
    scope: mainRef,
    circle1Ref: useRef<HTMLDivElement>(null),
    circle2Ref: useRef<HTMLDivElement>(null),
    cirImgRef: useRef<HTMLDivElement>(null),
    textRef: useRef<HTMLDivElement>(null),
    circle3Ref: useRef<HTMLDivElement>(null),
    circle4Ref: useRef<HTMLDivElement>(null),
    helpCardsRef: useRef<(HTMLDivElement | null)[]>([]),
    imgRef: useRef<HTMLDivElement>(null),
    text2Ref: useRef<HTMLDivElement>(null),
  };

  useConstelationsAnimations(refs);

  return (
    <section ref={mainRef} className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
        <img
          src={constelations}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Constelaciones familiares"
          loading="eager"
        />
        <div className="z-10">
          {/* Círculos con desenfoque profundo */}
          <div
            ref={refs.circle2Ref}
            className="circle2_constelations rounded-full blur-3xl opacity-0"
          />
          <div
            ref={refs.circle1Ref}
            className="circle1_constelations rounded-full blur-3xl opacity-0"
          />
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold tracking-tight">Constelaciones</h1>
          <p className="text-lg font-semibold italic py-4">
            Explora tus raíces familiares y libera tu potencial.
          </p>
          <button className="mt-4 bg-blue-600 px-8 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg">
            Aprende más
          </button>
        </div>
      </div>

      {/* ¿Qué es? */}
      <div className="bg-[#FFC95E] md:px-20 py-16 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        <div className="w-full md:w-1/2" ref={refs.textRef}>
          <h2 className="text-3xl font-bold text-blue-900">¿Qué es?</h2>
          <p className="mt-6 text-lg text-blue-900 leading-relaxed">
            Una herramienta terapéutica para explorar las dinámicas ocultas de
            tu sistema familiar y comprender los patrones que influyen en tu
            presente.
          </p>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center"
          ref={refs.cirImgRef}
        >
          <img
            src={constelations_wi}
            alt="Terapia de constelaciones"
            className="rounded-full object-cover w-80 h-80 md:w-96 md:h-96 shadow-2xl ring-8 ring-white/10"
            loading="lazy"
          />
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-blue-800 py-20 text-white px-6 md:px-20 relative overflow-hidden">
        <div className="relative z-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Cómo te pueden ayudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Problemas de relación",
                img: constelations_relationship,
                desc: "Parejas, padres e hijos.",
              },
              {
                title: "Problemas de salud",
                img: constelations_health,
                desc: "Comprende el origen emocional.",
              },
              {
                title: "Problemas económicos",
                img: constelations_money,
                desc: "Libera bloqueos con la abundancia.",
              },
            ].map((help, i) => (
              <div
                key={help.title}
                className="bg-blue-700/50 backdrop-blur-sm p-8 rounded-2xl text-center shadow-xl border border-white/10"
                ref={(el) => {
                  refs.helpCardsRef.current[i] = el;
                }}
              >
                <img
                  src={help.img}
                  alt={help.title}
                  className="rounded-full mb-6 h-40 w-40 mx-auto object-contain bg-white/5 p-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold mb-3">{help.title}</h3>
                <p className="text-blue-100 text-sm">{help.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Círculos decorativos de fondo con desenfoque */}
        <div className="z-10">
          <div
            ref={refs.circle3Ref}
            className="circle2_constelations_benefits rounded-full blur-2xl opacity-0"
          />
          <div
            ref={refs.circle4Ref}
            className="circle1_constelations_benefits rounded-full blur-2xl opacity-0"
          />
        </div>
      </div>

      {/* Cómo funcionan */}
      <div className="bg-[#823B76] px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden text-white">
        <div className="w-full md:w-1/2 flex justify-center" ref={refs.imgRef}>
          <img
            src={constelations_portrait}
            alt="Proceso de constelación"
            className="w-full max-w-md drop-shadow-2xl"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2" ref={refs.text2Ref}>
          <h2 className="text-3xl font-bold mb-6">¿Cómo funcionan?</h2>
          <p className="text-lg leading-relaxed">
            El proceso revela lealtades invisibles y traumas transgeneracionales
            mediante la representación sistémica, permitiendo una liberación
            emocional profunda y un nuevo orden familiar.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Constelations;
