import React, { useRef } from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";

import { ConstellationsHeroSplit } from "./components/ConstellationsHeroSplit";
import { SystemicPhilosophyGrid } from "./components/SystemicPhilosophyGrid";
import { SystemicBeneficiosShowcase } from "./components/SystemicBeneficiosShowcase";
import { ConstellationsBookingForm } from "./components/ConstellationBookingForm";

const Constelations: React.FC = () => {
  const exploreRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B132B] text-[#FDFBF7] min-h-screen flex flex-col overflow-x-hidden selection:bg-[#9D4EDD]/30 selection:text-[#9D4EDD]">
      <SEO
        title="Constelaciones Familiares | Lic. José Ampíes"
        description="Explora las dinámicas ocultas de tu sistema familiar y libera bloqueos heredados con el Lic. José Ampíes."
        image="/assets/constelations_home.webp"
      />
      <Navbar />

      {/* Hero Unico: Canvas de Matriz de Nodos Sistémicos */}
      <ConstellationsHeroSplit onExploreClick={handleScrollToExplore} />

      {/* Bento Grid 3D de Órdenes del Amor */}
      <div ref={exploreRef}>
        <SystemicPhilosophyGrid />
      </div>

      {/* Showcase de Beneficios por Ámbito */}
      <SystemicBeneficiosShowcase />

      {/* Formulario de Reserva Sistémica Zod + WhatsApp */}
      <ConstellationsBookingForm />

      <Footer />
    </div>
  );
};

export default Constelations;
