// src/features/psycotherapy/Psycotherapy.tsx
import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";

import psycotherapyImg from "../../assets/psycotherapy_home.webp";
import psycotherapyWhatIsImg from "../../assets/psychotherapy_wi.webp";

import { services } from "../../shared/constants/index";
import { IService } from "../../shared/types/types";
import { usePsycotherapyAnimations } from "./hooks/usePsycotherapyAnimations";

const Psycotherapy: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const refs = {
    scope: mainRef,
    heroCircles: useRef<(HTMLDivElement | null)[]>([]),
    circle4Ref: useRef<HTMLDivElement>(null),
    img1Ref: useRef<HTMLDivElement>(null),
    serviceCircles: useRef<(HTMLDivElement | null)[]>([]),
    servRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  };

  usePsycotherapyAnimations(refs);

  return (
    <section ref={mainRef} className="bg-gray-100 min-h-screen">
      <SEO
        title="Psicoterapia"
        description="Un espacio seguro para descubrir el camino hacia tu bienestar emocional."
        image="/assets/psycotherapy_home.webp"
      />
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
        <img
          src={psycotherapyImg}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
          loading="eager"
        />

        {/* Orbes Gigantes Flashy */}
        <div className="z-10">
          <div
            ref={(el) => {
              refs.heroCircles.current[0] = el;
            }}
            className="absolute -left-20 h-[600px] w-[600px] rounded-full bg-[#06D6A0] blur-[140px] opacity-0"
          />
          <div
            ref={(el) => {
              refs.heroCircles.current[1] = el;
            }}
            className="absolute -right-20 -top-20 h-[700px] w-[700px] rounded-full bg-[#D62839] blur-[150px] opacity-0"
          />
          <div
            ref={(el) => {
              refs.heroCircles.current[2] = el;
            }}
            className="absolute left-1/4 -bottom-40 h-[500px] w-[500px] rounded-full bg-[#FFD685] blur-[120px] opacity-0"
          />
        </div>

        <div className="relative z-20">
          <h1 className="text-6xl font-bold tracking-tighter">Psicoterapia</h1>
          <p className="text-xl font-medium italic py-6 max-w-2xl mx-auto">
            Un espacio seguro para expresar tus sentimientos, donde descubrirás
            el camino hacia tu bienestar.
          </p>
          <button
            className="bg-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Más información sobre el proceso psicoterapéutico"
          >
            Aprende más
          </button>
        </div>
      </div>

      {/* ¿Qué es? Section */}
      <div className="overflow-hidden flex flex-col md:flex-row bg-[#823B76] text-white py-24 md:px-20 items-center justify-center gap-16">
        <div
          className="flex items-center justify-center relative w-full md:w-1/2"
          ref={refs.circle4Ref}
        >
          <div className="text-center z-10 px-8">
            <h2 className="text-4xl font-bold pb-8">¿Qué es?</h2>
            <p className="text-xl leading-relaxed max-w-md">
              La psicoterapia es un viaje hacia el bienestar emocional. Un
              espacio de autoconocimiento asistido por un profesional.
            </p>
          </div>
          <div className="bg-red-500/60 blur-[120px] rounded-full w-[500px] h-[500px] absolute z-0 opacity-50" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center" ref={refs.img1Ref}>
          <img
            src={psycotherapyWhatIsImg}
            alt="Consulta psicológica"
            className="rounded-full object-cover w-80 h-80 md:w-[450px] md:h-[450px] shadow-2xl ring-[20px] ring-white/5"
            loading="lazy"
          />
        </div>
      </div>

      {/* Servicios Section */}
      <div className="relative bg-blue-900 text-white py-32 text-center overflow-hidden">
        <div className="z-0">
          <div
            ref={(el) => {
              refs.serviceCircles.current[0] = el;
            }}
            className="absolute -left-40 h-[600px] w-[600px] rounded-full bg-[#06D6A0] blur-[150px] opacity-0"
          />
          <div
            ref={(el) => {
              refs.serviceCircles.current[1] = el;
            }}
            className="absolute -right-40 h-[600px] w-[600px] rounded-full bg-[#D62839] blur-[150px] opacity-0"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-20 tracking-tight">
            Nuestros Servicios
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
            ref={refs.servRef}
          >
            {services.map((service: IService, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl hover:bg-white/20 transition-all group"
              >
                <img
                  src={service.img}
                  alt=""
                  className="h-28 mb-6 object-contain group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
                <p className="font-bold text-2xl text-yellow-400">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacto Rápido */}
      <div className="bg-[#06D6A0] py-32 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          ¡Hablemos hoy!
        </h2>
        <div
          className="bg-blue-800 p-10 rounded-[3rem] w-full max-w-3xl mx-auto shadow-2xl"
          ref={refs.contactRef}
        >
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-4 rounded-2xl text-black outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              aria-label="Nombre completo"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-4 rounded-2xl text-black outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              aria-label="Correo electrónico"
            />
            <textarea
              placeholder="¿Cómo puedo ayudarte?"
              className="w-full p-4 rounded-2xl text-black outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              rows={4}
              aria-label="Consulta"
            />
            <button
              className="bg-yellow-400 w-full py-5 text-blue-900 font-black text-xl rounded-2xl hover:bg-white transition-all shadow-lg active:scale-95"
              aria-label="Enviar solicitud de contacto"
            >
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Psycotherapy;
