// src/features/home/Home.tsx
import React, { useRef } from "react";
import home_therapy from "../../assets/home_therapy.jpg";
import splatter1 from "../../assets/Splatter1.svg";
import splatter2 from "../../assets/Splatter2.svg";
import splatter3 from "../../assets/Splatter3.svg";
import psicoterapia from "../../assets/servicio-psicoterapia.png";
import familia from "../../assets/servicio-familia.png";
import pareja from "../../assets/servicio-pareja.png";

import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { IArticle } from "../../shared/types/types";
import { useHomeAnimations } from "./hooks/useHomeAnimations";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // Definición de referencias tipadas
  const refs = {
    mainCircleRef: useRef<HTMLDivElement>(null),
    splatterRefs: [
      useRef<HTMLImageElement>(null),
      useRef<HTMLImageElement>(null),
      useRef<HTMLImageElement>(null),
    ],
    img1Ref: useRef<HTMLImageElement>(null),
    text1Ref: useRef<HTMLDivElement>(null),
    circle1Ref: useRef<HTMLDivElement>(null),
    serviceCardsRef: useRef<(HTMLDivElement | null)[]>([]),
    circle2Ref: useRef<HTMLDivElement>(null),
    circle3Ref: useRef<HTMLDivElement>(null),
  };

  // Implementación del hook de animaciones
  useHomeAnimations(refs);

  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center grid justify-items-center text-center w-full p-10 h-screen overflow-hidden">
        <div className="absolute z-20">
          <h1 className="text-5xl font-light my-auto">José Ampíes</h1>
          <p className="text-lg pt-4 italic">
            Donde la terapia también es para gente sana que busca
            <span className="font-bold">
              {" "}
              <br />
              crecer y evolucionar.
            </span>
          </p>
          <button className="bg-[#FFD685] text-[#2E4FB2] font-semibold px-6 py-2 mt-8 rounded-lg">
            Aprende más
          </button>
        </div>
        <div
          ref={refs.mainCircleRef}
          className="absolute z-10 h-96 w-96 rounded-full bg-[#06D6A0] opacity-[.40] place-self-center"
        />
        <img
          ref={refs.splatterRefs[0]}
          src={splatter1}
          className="splatter1 z-0"
          alt="splatter 1"
        />
        <img
          ref={refs.splatterRefs[1]}
          src={splatter2}
          className="splatter2 z-0"
          alt="splatter 2"
        />
        <img
          ref={refs.splatterRefs[2]}
          src={splatter3}
          className="splatter3 z-0"
          alt="splatter 3"
        />
      </section>

      {/* About Section */}
      <section className="overflow-hidden flex flex-col md:flex-row bg-[#06D6A0] w-full text-black">
        <img
          ref={refs.img1Ref}
          src={home_therapy}
          alt="Grupo en terapia"
          className="w-[450px] h-[450px] object-cover md:w-1/2"
        />
        <div className="relative">
          <div className="px-24 flex items-center text-center grid justify-items-center">
            <div ref={refs.text1Ref} className="absolute z-10">
              <h2 className="text-xl font-bold text-blue-900">¿Quién soy?</h2>
              <p className="w-96 mt-4 text-blue-900">
                Con más de 30 años de experiencia... Mi práctica se centra en la
                <span className="font-bold">
                  {" "}
                  terapia Gestalt, constelaciones familiares y terapias de
                  pareja
                </span>
                .
              </p>
            </div>
            <div
              ref={refs.circle1Ref}
              className="bottom-0 z-0 h-[450px] w-[450px] rounded-full bg-[#FFD685] opacity-[.85]"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 text-center overflow-hidden relative">
        <div
          ref={refs.circle2Ref}
          className="circle2_home_services rounded-full z-0"
        />
        <div
          ref={refs.circle3Ref}
          className="circle1_home_services rounded-full z-0"
        />
        <div className="relative z-10 w-3/4 mx-auto">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div
              className="bg-blue-700 p-4 rounded-lg"
              ref={(el) => {
                refs.serviceCardsRef.current[0] = el;
              }}
            >
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={psicoterapia} alt="Psicoterapia" />
              </div>
              <h3 className="text-lg font-bold">Psicoterapia</h3>
              <p>Aprende a navegar la vida y sus inevitables sorpresas</p>
            </div>
            <div
              className="bg-blue-700 p-4 rounded-lg"
              ref={(el) => {
                refs.serviceCardsRef.current[1] = el;
              }}
            >
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={familia} alt="Constelaciones Familiares" />
              </div>
              <h3 className="text-lg font-bold">Constelaciones Familiares</h3>
              <p>Libera patrones familiares y construye un futuro diferente</p>
            </div>
            <div
              className="bg-blue-700 p-4 rounded-lg"
              ref={(el) => {
                refs.serviceCardsRef.current[2] = el;
              }}
            >
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={pareja} alt="Terapia de Pareja" />
              </div>
              <h3 className="text-lg font-bold">Terapia de Pareja</h3>
              <p>Fortalece tu relación. Mejora la comunicación en pareja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="justify-center w-full flex bg-[#06D6A0] p-4 text-blue-900 overflow-hidden">
        <div>
          <h2 className="text-2xl font-bold text-center">Artículos</h2>
          <div className="mt-4 mb-4 space-y-6 text-blue-900">
            {articles.map((item: IArticle) => (
              <Link
                key={item.id}
                to={`/articulos/${item.id}`}
                className="article-card block hover:scale-[1.02] transition-transform duration-300"
              >
                <div key={item.id} className="article-card">
                  <div className="flex bg-[#A8D68E] p-8 rounded-lg items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-md w-24 h-24 object-cover"
                    />
                    <div className="flex flex-col ml-6">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="font-semilight">
                        {item.author} - {item.date}
                      </p>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
