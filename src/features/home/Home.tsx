// src/features/home/Home.tsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

import home_therapy from "../../assets/home_therapy.webp";
import psicoterapia from "../../assets/servicio-psicoterapia.webp";
import familia from "../../assets/servicio-familia.webp";
import pareja from "../../assets/servicio-pareja.webp";

import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";
import { IArticle } from "../../shared/types/types";
import { useHomeAnimations } from "./hooks/useHomeAnimations";

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null); // Ref para el scroll

  const refs = {
    scope: mainRef,
    mainCircleRef: useRef<HTMLDivElement>(null),
    bgCirclesRef: useRef<(HTMLDivElement | null)[]>([]),
    img1Ref: useRef<HTMLImageElement>(null),
    text1Ref: useRef<HTMLDivElement>(null),
    circle1Ref: useRef<HTMLDivElement>(null),
    serviceCardsRef: useRef<(HTMLDivElement | null)[]>([]),
    circle2Ref: useRef<HTMLDivElement>(null), // Restaurado
    circle3Ref: useRef<HTMLDivElement>(null), // Restaurado
  };

  useHomeAnimations(refs);

  // Función de scroll suave
  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={mainRef}
      className="bg-blue-900 text-white min-h-screen flex flex-col items-center overflow-x-hidden"
    >
      <SEO
        title="Inicio"
        description="Psicoterapia Gestalt y Constelaciones Familiares para el crecimiento y evolución personal."
        image="/assets/home_therapy.webp"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center w-full h-screen overflow-hidden px-4">
        <div className="absolute z-20 px-4 md:px-10 max-w-4xl mx-auto">
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
          <button
            onClick={scrollToAbout} // Acción de scroll
            className="bg-[#FFD685] text-[#2E4FB2] font-black px-8 md:px-10 py-3 md:py-4 mt-8 md:mt-10 rounded-2xl transition-all hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,214,133,0.4)] cursor-pointer z-50 relative"
            aria-label="Más información sobre terapias"
          >
            Aprende más
          </button>
        </div>

        {/* Orbe Central Principal */}
        <div
          ref={refs.mainCircleRef}
          className="absolute z-10 h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-[#06D6A0] opacity-[.45] blur-[100px] md:blur-[150px]"
        />

        {/* Orbes Atmosféricos */}
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[0] = el;
          }}
          className="absolute -top-20 -left-20 h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-[#FFD685] blur-[80px] md:blur-[120px] z-0 opacity-0"
        />
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[1] = el;
          }}
          className="absolute -bottom-40 -right-20 h-[350px] w-[350px] md:h-[700px] md:w-[700px] rounded-full bg-blue-600 blur-[90px] md:blur-[130px] z-0 opacity-0"
        />
        <div
          ref={(el) => {
            refs.bgCirclesRef.current[2] = el;
          }}
          className="absolute top-1/4 -right-40 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full bg-[#06D6A0] blur-[80px] md:blur-[110px] z-0 opacity-0"
        />
      </section>

      {/* About Section */}
      <section
        ref={aboutSectionRef}
        className="relative overflow-hidden flex flex-col md:flex-row bg-[#06D6A0] w-full text-black"
      >
        <img
          ref={refs.img1Ref}
          src={home_therapy}
          alt="Grupo en terapia Gestalt"
          className="relative z-20 w-full h-[400px] md:h-[600px] object-cover md:w-1/2 shadow-xl"
          loading="lazy"
        />

        <div className="relative md:w-1/2 flex items-center justify-center p-8 md:p-16">
          <div className="z-10 text-center max-w-lg relative">
            <div ref={refs.text1Ref}>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:mb-8 underline decoration-[#FFD685] decoration-4 underline-offset-8">
                ¿Quién soy?
              </h2>
              <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-[#FFD685] opacity-[.85] blur-[100px]"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 text-center overflow-hidden relative w-full bg-blue-950/20">
        <div
          ref={refs.circle2Ref}
          className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500 rounded-full blur-[80px] md:blur-[120px] opacity-0"
        />
        <div
          ref={refs.circle3Ref}
          className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#06D6A0] rounded-full blur-[80px] md:blur-[120px] opacity-0"
        />

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
                className="bg-blue-800/30 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 hover:bg-blue-800/50 transition-all shadow-2xl"
                ref={(el) => {
                  refs.serviceCardsRef.current[index] = el;
                }}
              >
                <div className="h-32 w-32 md:h-40 md:w-40 mx-auto mb-6 md:mb-8 rounded-full bg-white/5 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={`Icono de ${service.title}`}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-blue-100 text-base md:text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-[#06D6A0] py-20 md:py-28 w-full flex justify-center px-4 md:px-6">
        <div className="w-full max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10 md:mb-16 tracking-tight">
            Últimos Artículos
          </h2>
          <div className="space-y-8 md:space-y-10">
            {articles.map((item: IArticle) => (
              <Link
                key={item.id}
                to={`/articulos/${item.id}`}
                aria-label={`Leer más sobre ${item.title}`}
                className="article-card block group"
              >
                <div className="flex flex-col md:flex-row bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] items-center shadow-2xl transition-all group-hover:bg-white border border-white/20">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-3xl w-full md:w-40 h-48 md:h-40 object-cover shadow-xl mb-6 md:mb-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col ml-0 md:ml-10 text-blue-900 w-full">
                    <p className="font-black text-2xl md:text-3xl group-hover:text-blue-700 transition-colors mb-3">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-blue-400 mb-4 uppercase tracking-widest">
                      {item.author} • {item.date}
                    </p>
                    <p className="text-gray-600 text-lg md:text-xl line-clamp-2">
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
