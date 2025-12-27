// src/features/home/Home.tsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Assets
import home_therapy from "../../assets/home_therapy.webp";
import psicoterapia from "../../assets/servicio-psicoterapia.webp";
import familia from "../../assets/servicio-familia.webp";
import pareja from "../../assets/servicio-pareja.webp";

// Componentes y Tipos
import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { IArticle } from "../../shared/types/types";
import { useHomeAnimations } from "./hooks/useHomeAnimations";

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const refs = {
    scope: mainRef,
    mainCircleRef: useRef<HTMLDivElement>(null),
    bgCirclesRef: useRef<(HTMLDivElement | null)[]>([]),
    img1Ref: useRef<HTMLImageElement>(null),
    text1Ref: useRef<HTMLDivElement>(null),
    circle1Ref: useRef<HTMLDivElement>(null),
    serviceCardsRef: useRef<(HTMLDivElement | null)[]>([]),
    circle2Ref: useRef<HTMLDivElement>(null),
    circle3Ref: useRef<HTMLDivElement>(null),
  };

  useHomeAnimations(refs);

  return (
    <div
      ref={mainRef}
      className="bg-blue-900 text-white min-h-screen flex flex-col items-center"
    >
      <Navbar />

      {/* Hero Section - Orbes Gigantes y Flashy */}
      <section className="relative flex items-center justify-center text-center w-full h-screen overflow-hidden">
        <div className="absolute z-20 px-10">
          <h1 className="text-7xl font-bold tracking-tighter drop-shadow-2xl mb-4">
            José Ampíes
          </h1>
          <p className="text-2xl pt-4 italic text-blue-100 max-w-2xl mx-auto">
            Donde la terapia también es para gente sana que busca
            <span className="font-bold">
              {" "}
              <br />
              crecer y evolucionar.
            </span>
          </p>
          <button className="bg-[#FFD685] text-[#2E4FB2] font-black px-10 py-4 mt-10 rounded-2xl transition-all hover:scale-110 hover:rotate-1 active:scale-95 shadow-[0_0_30px_rgba(255,214,133,0.4)]">
            Aprende más
          </button>
        </div>

        {/* Orbe Central Gigante */}
        <div
          ref={refs.mainCircleRef}
          className="absolute z-10 h-[800px] w-[800px] rounded-full bg-[#06D6A0] opacity-[.45] blur-[150px]"
        />

        {/* Orbes Atmosféricos Perimetrales (Súper Flashy) */}
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[0] = el;
          }}
          className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-[#FFD685] blur-[120px] z-0 opacity-0"
        />
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[1] = el;
          }}
          className="absolute -bottom-40 -right-20 h-[700px] w-[700px] rounded-full bg-blue-600 blur-[130px] z-0 opacity-0"
        />
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[2] = el;
          }}
          className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-[#06D6A0] blur-[110px] z-0 opacity-0"
        />
      </section>

      {/* About Section */}
      <section className="overflow-hidden flex flex-col md:flex-row bg-[#06D6A0] w-full text-black">
        <img
          ref={refs.img1Ref}
          src={home_therapy}
          alt="Sesión de terapia"
          className="w-full h-[600px] object-cover md:w-1/2"
          loading="lazy"
        />
        <div className="relative md:w-1/2 flex items-center justify-center p-16">
          <div className="z-10 text-center max-w-lg">
            <div ref={refs.text1Ref}>
              <h2 className="text-4xl font-bold text-blue-900 mb-8 underline decoration-[#FFD685] decoration-4">
                ¿Quién soy?
              </h2>
              <p className="text-xl text-blue-900 leading-relaxed">
                Con más de 30 años de experiencia... Mi práctica se centra en la
                <span className="font-bold text-blue-800">
                  {" "}
                  terapia Gestalt, constelaciones familiares y terapias de
                  pareja.
                </span>
              </p>
            </div>
          </div>
          <div
            ref={refs.circle1Ref}
            className="absolute z-0 h-[600px] w-[600px] rounded-full bg-[#FFD685] opacity-[.85] blur-[100px]"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 text-center overflow-hidden relative w-full bg-blue-950/20">
        <div
          ref={refs.circle2Ref}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-0"
        />
        <div
          ref={refs.circle3Ref}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#06D6A0] rounded-full blur-[120px] opacity-0"
        />

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Psicoterapia",
                img: psicoterapia,
                desc: "Navega la vida y sus sorpresas.",
              },
              {
                title: "Constelaciones",
                img: familia,
                desc: "Libera patrones familiares.",
              },
              {
                title: "Terapia de Pareja",
                img: pareja,
                desc: "Fortalece tu relación.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-blue-800/30 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:bg-blue-800/50 transition-all hover:-translate-y-2 shadow-2xl group"
                ref={(el) => {
                  refs.serviceCardsRef.current[index] = el;
                }}
              >
                <div className="h-40 w-40 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center shadow-inner group-hover:bg-[#06D6A0]/20 transition-colors">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100 text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-[#06D6A0] py-28 w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16 tracking-tight">
            Últimos Artículos
          </h2>
          <div className="space-y-10">
            {articles.map((item: IArticle) => (
              <Link
                key={item.id}
                to={`/articulos/${item.id}`}
                className="article-card block group"
              >
                <div className="flex flex-col md:flex-row bg-white/95 backdrop-blur-md p-8 rounded-[2.5rem] items-center shadow-2xl transition-all group-hover:bg-white group-hover:-translate-y-1 border border-white/20">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-3xl w-40 h-40 object-cover shadow-xl md:mb-0 mb-6"
                    loading="lazy"
                  />
                  <div className="flex flex-col ml-0 md:ml-10 text-blue-900">
                    <p className="font-black text-3xl group-hover:text-blue-700 transition-colors leading-none mb-3">
                      {item.title}
                    </p>
                    <p className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-widest">
                      {item.author} • {item.date}
                    </p>
                    <p className="text-gray-600 text-xl line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
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
