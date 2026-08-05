// src/features/home/Home.tsx
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import home_therapy from "../../assets/home_therapy.webp";
import psicoterapia from "../../assets/servicio-psicoterapia.webp";
import familia from "../../assets/servicio-familia.webp";
import pareja from "../../assets/servicio-pareja.webp";

import { articles } from "../../shared/constants";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";
import { IArticle } from "../../shared/types/types";

// Importación del componente de espiral desacoplado
import { HypnoticBackgroundCanvas } from "./components/HypnoticBackgroundCanvas";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const articlesSectionRef = useRef<HTMLElement>(null);
  const articleCardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctxGsap = gsap.context(() => {
      // Revelado Suave del Titular
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );

      // ScrollTrigger para "Sobre el Especialista"
      gsap.fromTo(
        aboutTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        aboutImageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ScrollTrigger para Servicios
      const validServiceCards = serviceCardsRef.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (validServiceCards.length > 0) {
        gsap.fromTo(
          validServiceCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ScrollTrigger para Artículos
      const validArticleCards = articleCardsRef.current.filter(
        (el): el is HTMLElement => el !== null
      );
      if (validArticleCards.length > 0) {
        gsap.fromTo(
          validArticleCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: articlesSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, mainRef);

    return () => ctxGsap.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-[#0B132B] text-[#FDFBF7] min-h-screen flex flex-col items-center overflow-x-hidden selection:bg-[#FF0055]/30 selection:text-[#FF0055]"
    >
      <SEO
        title="Inicio | Lic. José Ampíes - Psicoterapia & Hipnosis"
        description="Psicoterapia Gestalt, Constelaciones Familiares e Hipnosis Clínica Terapéutica con el Lic. José Ampíes."
        image="/assets/home_therapy.webp"
      />
      <Navbar />

      {/* HERO SECTION - CON ESPIRAL DE FONDO DESACOPLADA Y SIN SOLAPAMIENTO */}
      <section className="relative w-full min-h-[90vh] h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 bg-gradient-to-b from-[#0B132B] via-[#2D0A4E]/50 to-[#0B132B] border-b border-white/10 overflow-hidden">
        {/* ESPIRAL DE FONDO DE ALTO RENDIMIENTO */}
        <HypnoticBackgroundCanvas opacity={0.35} />

        {/* Glow Radial de Respaldo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#FF0055]/20 via-[#7209B7]/15 to-transparent blur-[140px] pointer-events-none" />

        {/* Contenido en Primer Plano */}
        <div
          ref={headlineRef}
          className="relative z-10 max-w-5xl text-center my-auto"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(255,0,85,0.25)]">
            José Ampíes
          </h1>

          <p className="mt-8 sm:text-xl md:text-2xl font-serif italic text-[#FF9E00] max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            “Habla con tu mente inconsciente mientras la consciente nos
            acompaña.”
          </p>

          <p className="mt-4 text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-[#FDFBF7]/70">
            30+ Años de Práctica Clínica • Consultas Presenciales & Online
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        ref={aboutSectionRef}
        className="w-full py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#0B132B] via-[#4A0E2E] to-[#2D0A4E] text-[#FDFBF7] border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div ref={aboutTextRef} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF9E00] font-bold block">
              Sobre el Especialista
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Un enfoque integrador para transformar tus vínculos y tu
              bienestar.
            </h2>

            <div className="space-y-4 text-base md:text-lg text-[#FDFBF7]/90 font-light leading-relaxed pt-2">
              <p>
                Soy el{" "}
                <strong className="font-semibold text-[#FF9E00]">
                  Lic. José Ampíes
                </strong>
                . Mi práctica clínica combina la rigurosidad de la{" "}
                <strong className="font-semibold text-white">
                  Psicoterapia Gestalt
                </strong>
                , el poder transformador de la{" "}
                <strong className="font-semibold text-white">
                  Hipnosis Clínica Terapéutica
                </strong>{" "}
                y la revelación sistémica de las{" "}
                <strong className="font-semibold text-white">
                  Constelaciones Familiares
                </strong>
                .
              </p>
              <p>
                Acompaño a personas, parejas y familias a desmontar patrones
                repetitivos, resolver sintomatologías emocionales y reprogramar
                la mente para una vida consciente y plena.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">
              <div>
                <span className="block font-serif text-4xl md:text-5xl font-bold text-[#FF0055]">
                  30+
                </span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-mono">
                  Años de Clínica
                </span>
              </div>
              <div>
                <span className="block font-serif text-4xl md:text-5xl font-bold text-[#9D4EDD]">
                  Gestalt
                </span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-mono">
                  Aquí y Ahora
                </span>
              </div>
              <div>
                <span className="block font-serif text-4xl md:text-5xl font-bold text-[#FF9E00]">
                  Hipnosis
                </span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-mono">
                  Reprogramación
                </span>
              </div>
            </div>
          </div>

          <div ref={aboutImageRef} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#FF0055]/30 shadow-2xl group">
              <img
                src={home_therapy}
                alt="Lic. José Ampíes en sesión clínica"
                className="w-full h-[420px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A4E] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF9E00]">
                  Consulta Profesional
                </span>
                <p className="font-serif text-xl italic mt-1">
                  Caracas & Atención Online Internacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section
        ref={servicesSectionRef}
        className="py-24 md:py-36 w-full max-w-7xl mx-auto px-6 md:px-12 bg-[#0B132B]"
      >
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF0055] font-bold block mb-3">
            Áreas de Atención Clínica
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Especialidades & Acompañamiento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Psicoterapia Gestalt",
              badge: "Individual & Infantil",
              img: psicoterapia,
              tag: "Aquí y Ahora",
              bgColor: "bg-gradient-to-br from-[#4A0E2E] to-[#2D0A4E]",
              borderColor: "border-[#FF0055]/40",
              accentColor: "#FF0055",
              desc: "Proceso para tomar plena conciencia de tus emociones, soltar cargas acumuladas y asumir tu poder personal ante los desafíos de la vida.",
            },
            {
              title: "Constelaciones Familiares",
              badge: "Sistémica Tradicional",
              img: familia,
              tag: "Árbol Genealógico",
              bgColor: "bg-gradient-to-br from-[#2D0A4E] to-[#10002B]",
              borderColor: "border-[#9D4EDD]/40",
              accentColor: "#9D4EDD",
              desc: "Identificación de lealtades invisibles y deudas emocionales inconscientes en el sistema familiar para restaurar el orden y la paz.",
            },
            {
              title: "Terapia de Pareja & Adicciones",
              badge: "Vínculos & Hábitos",
              img: pareja,
              tag: "Transformación",
              bgColor: "bg-gradient-to-br from-[#3D1E10] to-[#1E0B00]",
              borderColor: "border-[#E07A5F]/40",
              accentColor: "#E07A5F",
              desc: "Reconstrucción del canal de comunicación, sanación de heridas vinculares y herramientas estructuradas para la superación de conductas adictivas.",
            },
          ].map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                serviceCardsRef.current[index] = el;
              }}
              className={`${service.bgColor} p-8 sm:p-10 rounded-3xl border ${service.borderColor} shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between text-left group relative overflow-hidden`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-white/10 p-3 border border-white/20 flex items-center justify-center backdrop-blur-md">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 bg-white/10 text-white rounded-full border border-white/20">
                    {service.tag}
                  </span>
                </div>

                <span
                  className="text-xs font-mono font-semibold uppercase tracking-wider block mb-1"
                  style={{ color: service.accentColor }}
                >
                  {service.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#FF9E00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-sans font-normal">
                  {service.desc}
                </p>
              </div>

              <a
                href="https://wa.me/584242033589"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 pt-5 border-t border-white/15 text-sm font-bold text-[#FF9E00] hover:text-white flex items-center justify-between transition-colors min-h-[44px]"
              >
                <span>Consulta Disponibilidad</span>
                <span className="text-lg group-hover:translate-x-2 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ARTÍCULOS SECTION */}
      <section
        ref={articlesSectionRef}
        className="bg-gradient-to-b from-[#0B132B] to-[#1A0933] py-24 md:py-36 w-full flex justify-center px-6 border-t border-white/10"
      >
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF0055] font-bold block mb-2">
              Divulgación & Lecturas
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Reflexiones & Artículos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((item: IArticle, index: number) => (
              <Link
                key={item.id}
                to={`/articulos/${item.id}`}
                className="block group"
              >
                <article
                  ref={(el) => {
                    articleCardsRef.current[index] = el;
                  }}
                  className="h-full bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl group-hover:border-[#FF0055]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden rounded-2xl mb-6 h-56 border border-white/10">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-mono text-[#FF9E00] font-bold uppercase tracking-wider mb-2 block">
                      {item.author} • {item.date}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-[#FF0055] transition-colors mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/75 text-sm font-normal leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-bold text-[#FF9E00] group-hover:text-white transition-colors inline-flex items-center gap-2 min-h-[44px]">
                    <span>Leer artículo completo</span>
                    <span className="group-hover:translate-x-2 transition-transform">
                      &rarr;
                    </span>
                  </span>
                </article>
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
