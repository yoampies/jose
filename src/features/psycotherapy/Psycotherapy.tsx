import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";

import { PsycotherapyHeroSplit } from "./components/PsycotherapyHeroSplit";
import { GestaltMethodologyTimeline } from "./components/GestaltMethodologyTimeline";
import { PsycotherapySplitShowcase } from "./components/PsycotherapySplitShowcase";
import { PsycotherapyDirectBooking } from "./components/PsycotherapyDirectBooking";

const Psycotherapy: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B132B] text-[#FDFBF7] min-h-screen flex flex-col overflow-x-hidden selection:bg-[#FF0055]/30 selection:text-[#FF0055]">
      <SEO
        title="Psicoterapia Gestalt | Lic. José Ampíes"
        description="Un espacio seguro de toma de conciencia y transformación guiado por el Lic. José Ampíes."
        image="/assets/psycotherapy_home.webp"
      />
      <Navbar />

      {/* Hero Unico con Canvas Fluid Metamórfico y Layout Editorial */}
      <PsycotherapyHeroSplit onExploreClick={handleScrollToExplore} />

      {/* Línea de Tiempo Gestalt (Diseño Totalmente Diferente al Home) */}
      <div ref={exploreRef}>
        <GestaltMethodologyTimeline />
      </div>

      {/* Split Showcase Asimétrico para las Especialidades */}
      <PsycotherapySplitShowcase />

      {/* Formulario Estructurado Zod + WhatsApp */}
      <PsycotherapyDirectBooking />

      <Footer />
    </div>
  );
};

export default Psycotherapy;
