// src/features/constelations/Constelations.tsx
import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

import constelations from "../../assets/constelations_home.webp";
import constelations_wi from "../../assets/constelations_wi.webp";
import constelations_money from "../../assets/constelations_money.svg";
import constelations_health from "../../assets/constelations_health.svg";
import constelations_relationship from "../../assets/constelations_relationship.svg";

import { useConstelationsAnimations } from "./hooks/useConstelationsAnimations";

const Constelations: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const refs = {
    scope: mainRef,
    heroCircles: useRef<(HTMLDivElement | null)[]>([]),
    cirImgRef: useRef<HTMLDivElement>(null),
    textRef: useRef<HTMLDivElement>(null),
    benefitCircles: useRef<(HTMLDivElement | null)[]>([]),
    helpCardsRef: useRef<(HTMLDivElement | null)[]>([]),
    imgRef: useRef<HTMLDivElement>(null),
    text2Ref: useRef<HTMLDivElement>(null),
  };

  useConstelationsAnimations(refs);

  return (
    <section ref={mainRef} className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center text-white text-center px-4 overflow-hidden">
        <img
          src={constelations}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
          loading="eager"
        />

        <div className="z-10">
          <div
            ref={(el) => {
              refs.heroCircles.current[0] = el;
            }}
            className="absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full bg-[#D62839] blur-[160px] opacity-0"
          />
          <div
            ref={(el) => {
              refs.heroCircles.current[1] = el;
            }}
            className="absolute -left-40 -bottom-40 h-[700px] w-[700px] rounded-full bg-[#06D6A0] blur-[150px] opacity-0"
          />
        </div>

        <div className="relative z-20">
          <h1 className="text-6xl font-black tracking-tighter drop-shadow-2xl">
            Constelaciones
          </h1>
          <p className="text-2xl font-bold italic py-6 max-w-3xl">
            Explora tus raíces familiares y libera tu potencial para una vida
            plena.
          </p>
          <button
            className="mt-4 bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all hover:scale-110 shadow-2xl"
            aria-label="Información sobre constelaciones familiares"
          >
            Aprende más
          </button>
        </div>
      </div>

      {/* ¿Qué es? */}
      <div className="bg-[#FFC95E] md:px-20 py-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
        <div className="w-full md:w-1/2" ref={refs.textRef}>
          <h2 className="text-4xl font-bold text-blue-900 mb-8">¿Qué es?</h2>
          <p className="text-xl text-blue-900 leading-relaxed">
            Una herramienta terapéutica poderosa que te invita a explorar las
            dinámicas ocultas de tu sistema familiar.
          </p>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center"
          ref={refs.cirImgRef}
        >
          <img
            src={constelations_wi}
            alt="Terapia sistémica"
            className="rounded-full object-cover w-80 h-80 md:w-[450px] md:h-[450px] shadow-2xl ring-[25px] ring-blue-900/5"
            loading="lazy"
          />
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-blue-900 py-32 text-white px-6 md:px-20 relative overflow-hidden">
        <div className="z-10">
          <div
            ref={(el) => {
              refs.benefitCircles.current[0] = el;
            }}
            className="absolute -right-60 h-[900px] w-[900px] rounded-full bg-[#FFD685] blur-[180px] opacity-0"
          />
          <div
            ref={(el) => {
              refs.benefitCircles.current[1] = el;
            }}
            className="absolute -left-60 h-[800px] w-[800px] rounded-full bg-[#06D6A0] blur-[160px] opacity-0"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
            ¿Cómo te pueden ayudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Relaciones",
                img: constelations_relationship,
                desc: "Sana el vínculo con padres e hijos.",
              },
              {
                title: "Salud",
                img: constelations_health,
                desc: "Comprende el mensaje de tu cuerpo.",
              },
              {
                title: "Abundancia",
                img: constelations_money,
                desc: "Libera bloqueos económicos.",
              },
            ].map((help, i) => (
              <div
                key={help.title}
                className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] text-center border border-white/10 shadow-2xl"
                ref={(el) => {
                  refs.helpCardsRef.current[i] = el;
                }}
              >
                <img
                  src={help.img}
                  alt=""
                  className="rounded-full mb-8 h-48 w-48 mx-auto bg-white/5 p-6"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold mb-4">{help.title}</h3>
                <p className="text-blue-100">{help.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Constelations;
