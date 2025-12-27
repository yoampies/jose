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
  const refs = {
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
    <section className="bg-gray-100">
      <Navbar />

      <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
        <img
          src={psycotherapyImg}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Psicoterapia Hero"
          loading="eager"
        />
        <div className="z-10">
          <div
            className="circle3_psycotherapy rounded-full"
            ref={refs.circle3Ref}
          ></div>
          <div
            className="circle2_psycotherapy rounded-full"
            ref={refs.circle2Ref}
          ></div>
          <div
            className="circle1_psycotherapy rounded-full"
            ref={refs.circle1Ref}
          ></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold">Psicoterapia</h1>
          <p className="text-lg font-semibold italic py-4">
            Un espacio seguro para expresar tus sentimientos,
            <br />
            donde descubrirás el camino hacia tu bienestar
          </p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
            Aprende más
          </button>
        </div>
      </div>

      <div className="overflow-hidden flex flex-wrap md:flex-nowrap bg-[#823B76] text-white py-12 md:px-20 grid grid-cols-2">
        <div
          className="flex items-center justify-center relative mx-auto pl-36"
          ref={refs.circle4Ref}
        >
          <div className="text-center grid justify-items-center absolute z-10">
            <h2 className="text-2xl font-bold pb-4">¿Qué es?</h2>
            <p className="mt-2 px-8">
              La psicoterapia es un viaje hacia el bienestar emocional. Es un
              espacio seguro y confidencial donde podrás hablar abiertamente con
              un profesional de la salud mental.
            </p>
          </div>
          <div className="bg-red-500 rounded-full w-[450px] h-[450px] mx-auto z-0"></div>
        </div>
        <div className="mx-auto pr-36" ref={refs.img1Ref}>
          <img
            src={psycotherapyWhatIsImg}
            alt="Descripción Psicoterapia"
            className="rounded-full object-cover w-96 h-96"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative bg-blue-800 text-white py-10 text-center overflow-hidden">
        <div className="z-10">
          <div
            className="circle3_psychoservices rounded-full"
            ref={refs.circle5Ref}
          ></div>
          <div
            className="circle2_psychoservices rounded-full"
            ref={refs.circle6Ref}
          ></div>
          <div
            className="circle1_psychoservices rounded-full"
            ref={refs.circle7Ref}
          ></div>
        </div>
        <div className="relative z-20">
          <h2 className="text-2xl font-bold mb-6">Servicios</h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 px-16 mx-auto"
            ref={refs.servRef}
          >
            {services.map((service: IService, index: number) => (
              <div
                key={index}
                className="bg-yellow-400 p-2 rounded-lg flex flex-col items-center shadow-md"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-28 mb-4"
                  loading="lazy"
                />
                <p className="font-semibold text-blue-900">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-400 py-10 px-6 text-center overflow-hidden">
        <h2 className="text-2xl font-bold text-blue-900">¡Contáctame!</h2>
        <div
          className="bg-blue-700 p-6 mt-4 rounded-lg w-3/5 mx-auto shadow-lg"
          ref={refs.contactRef}
        >
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="w-full p-2 my-4 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-2 mb-4 rounded-lg text-black"
          />
          <textarea
            placeholder="Tu consulta..."
            className="w-full p-2 mb-4 rounded-lg text-black"
            rows={4}
          />
          <button className="bg-blue-800 px-6 py-2 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">
            Enviar mensaje
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Psycotherapy;
