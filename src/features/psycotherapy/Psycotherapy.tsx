// src/features/psycotherapy/Psycotherapy.tsx
import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

import psycotherapyImg from "../../assets/psycotherapy_home.webp";
import psycotherapyWhatIsImg from "../../assets/psychotherapy_wi.webp";

import { services } from "../../shared/constants/index";
import { IService } from "../../shared/types/types";
import { usePsycotherapyAnimations } from "./hooks/usePsycotherapyAnimations";

const Psycotherapy: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  const refs = {
    scope: mainRef,
    circle1Ref: useRef<HTMLDivElement>(null),
    circle2Ref: useRef<HTMLDivElement>(null),
    circle3Ref: useRef<HTMLDivElement>(null),
    circle4Ref: useRef<HTMLDivElement>(null),
    img1Ref: useRef<HTMLDivElement>(null),
    circle5Ref: useRef<HTMLDivElement>(null),
    circle6Ref: useRef<HTMLDivElement>(null),
    circle7Ref: useRef<HTMLDivElement>(null),
    servRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  };

  usePsycotherapyAnimations(refs);

  return (
    <section ref={mainRef} className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
        <img
          src={psycotherapyImg}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Psicoterapia Hero"
          loading="eager"
        />
        <div className="z-10">
          <div
            className="circle3_psycotherapy rounded-full blur-3xl opacity-0"
            ref={refs.circle3Ref}
          />
          <div
            className="circle2_psycotherapy rounded-full blur-3xl opacity-0"
            ref={refs.circle2Ref}
          />
          <div
            className="circle1_psycotherapy rounded-full blur-3xl opacity-0"
            ref={refs.circle1Ref}
          />
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold tracking-tight">Psicoterapia</h1>
          <p className="text-lg font-semibold italic py-4">
            Un espacio seguro para expresar tus sentimientos,
            <br />
            donde descubrirás el camino hacia tu bienestar
          </p>
          <button className="mt-4 bg-blue-600 px-8 py-3 rounded-xl text-white font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg">
            Aprende más
          </button>
        </div>
      </div>

      {/* ¿Qué es? Section */}
      <div className="overflow-hidden flex flex-col md:flex-row bg-[#823B76] text-white py-16 md:px-20 items-center justify-center gap-12">
        <div
          className="flex items-center justify-center relative w-full md:w-1/2"
          ref={refs.circle4Ref}
        >
          <div className="text-center z-10 px-8">
            <h2 className="text-3xl font-bold pb-6">¿Qué es?</h2>
            <p className="text-lg leading-relaxed">
              La psicoterapia es un viaje hacia el bienestar emocional. Es un
              espacio seguro y confidencial donde podrás hablar abiertamente con
              un profesional de la salud mental.
            </p>
          </div>
          <div className="bg-red-500/80 blur-3xl rounded-full w-80 h-80 md:w-[450px] md:h-[450px] absolute z-0 opacity-50" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center" ref={refs.img1Ref}>
          <img
            src={psycotherapyWhatIsImg}
            alt="Descripción Psicoterapia"
            className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96 shadow-2xl ring-8 ring-white/10"
            loading="lazy"
          />
        </div>
      </div>

      {/* Servicios Section */}
      <div className="relative bg-blue-800 text-white py-20 text-center overflow-hidden">
        <div className="z-0">
          <div
            className="circle3_psychoservices rounded-full blur-3xl opacity-0"
            ref={refs.circle5Ref}
          />
          <div
            className="circle2_psychoservices rounded-full blur-3xl opacity-0"
            ref={refs.circle6Ref}
          />
          <div
            className="circle1_psychoservices rounded-full blur-3xl opacity-0"
            ref={refs.circle7Ref}
          />
        </div>
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
            ref={refs.servRef}
          >
            {services.map((service: IService, index: number) => (
              <div
                key={index}
                className="bg-yellow-400/95 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center shadow-xl hover:scale-105 transition-transform"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-24 mb-4 object-contain"
                  loading="lazy"
                />
                <p className="font-bold text-xl text-blue-900">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulario de Contacto Rápido */}
      <div className="bg-green-400 py-20 px-6 text-center overflow-hidden">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">¡Contáctame!</h2>
        <div
          className="bg-blue-700 p-8 rounded-3xl w-full max-w-2xl mx-auto shadow-2xl"
          ref={refs.contactRef}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              className="w-full p-3 rounded-xl text-black focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-xl text-black focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
            <textarea
              placeholder="Tu consulta..."
              className="w-full p-3 rounded-xl text-black focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              rows={4}
            />
            <button className="bg-blue-800 w-full py-4 text-white font-bold rounded-xl hover:bg-blue-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
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
