// src/features/constelations/Constelations.tsx
import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

// Assets optimizados
import constelations from "../../assets/constelations_home.webp";
import constelations_wi from "../../assets/constelations_wi.webp";
import constelations_money from "../../assets/constelations_money.svg";
import constelations_health from "../../assets/constelations_health.svg";
import constelations_relationship from "../../assets/constelations_relationship.svg";
import constelations_portrait from "../../assets/constelations_portrait.svg";

import { useConstelationsAnimations } from "./hooks/useConstelationsAnimations";

const Constelations: React.FC = () => {
  // Referencias tipadas para GSAP
  const refs = {
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
    <section className="bg-gray-100">
      <Navbar />

      {/* Hero Section - Prioridad LCP (loading eager) */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
        <img
          src={constelations}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Constelaciones Hero"
          loading="eager"
        />
        <div className="z-10">
          <div
            ref={refs.circle2Ref}
            className="circle2_constelations rounded-full"
          />
          <div
            ref={refs.circle1Ref}
            className="circle1_constelations rounded-full"
          />
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold">Constelaciones</h1>
          <p className="text-lg font-semibold italic py-4">
            Explora tus raíces familiares y libera tu potencial.
          </p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
            Aprende más
          </button>
        </div>
      </div>

      {/* ¿Qué es? - Lazy Loading */}
      <div className="bg-[#FFC95E] md:px-20 py-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        <div className="w-full md:w-1/2" ref={refs.textRef}>
          <h2 className="text-2xl font-bold text-blue-900">¿Qué es?</h2>
          <p className="mt-4 text-lg text-blue-900">
            Una herramienta terapéutica para explorar las dinámicas ocultas de
            tu sistema familiar.
          </p>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center"
          ref={refs.cirImgRef}
        >
          <img
            src={constelations_wi}
            alt="Descripción Constelaciones"
            className="rounded-full object-cover w-96 h-96 my-6"
            loading="lazy"
          />
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-blue-800 py-10 text-white px-20 relative overflow-hidden">
        <div className="relative z-20">
          <h2 className="text-2xl font-bold text-center">
            ¿Cómo te pueden ayudar?
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Problemas de relación",
                img: constelations_relationship,
              },
              { title: "Problemas de salud", img: constelations_health },
              { title: "Problemas económicos", img: constelations_money },
            ].map((help, i) => (
              <div
                key={help.title}
                className="bg-blue-600 p-6 rounded-lg text-center shadow-lg"
                ref={(el) => {
                  refs.helpCardsRef.current[i] = el;
                }}
              >
                <img
                  src={help.img}
                  alt={help.title}
                  className="rounded-full pt-2 pb-6 h-48 w-48 mx-auto"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold">{help.title}</h3>
                <p className="mt-2 text-sm">
                  Encuentra los patrones que rigen tu vida.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="z-10">
          <div
            ref={refs.circle3Ref}
            className="circle2_constelations_benefits rounded-full"
          />
          <div
            ref={refs.circle4Ref}
            className="circle1_constelations_benefits rounded-full"
          />
        </div>
      </div>

      {/* Cómo funcionan */}
      <div className="bg-[#823B76] px-6 md:px-20 py-12 flex flex-col md:flex-row items-center gap-x-8 overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center" ref={refs.imgRef}>
          <img
            src={constelations_portrait}
            alt="Representación"
            className="px-16 py-10"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2" ref={refs.text2Ref}>
          <h2 className="text-2xl font-bold text-white">¿Cómo funcionan?</h2>
          <p className="mt-4 text-lg text-white">
            El proceso revela lealtades invisibles y traumas transgeneracionales
            para aportar liberación emocional.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Constelations;
