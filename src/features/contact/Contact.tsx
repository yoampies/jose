import React from "react";
import contactImg from "../../assets/contact_home.webp";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import SEO from "../../shared/components/SEO";
import { ContactXRayCanvas } from "./components/ContactXRayCanvas";
import { ContactFormCard } from "./components/ContactFormCard";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#0B132B] text-[#FDFBF7] min-h-screen flex flex-col relative overflow-hidden selection:bg-[#FF0055]/30 selection:text-[#FF0055]">
      <SEO
        title="Contacto & Citas | Lic. José Ampíes"
        description="Agenda tu consulta de Psicoterapia Gestalt o Constelaciones Familiares con el Lic. José Ampíes en Caracas y Online."
      />
      <Navbar />

      <main className="relative flex-1 min-h-screen flex items-center justify-center px-6 md:px-16 pt-28 pb-16">
        {/* Canvas de Gradiente Dinámico en Fondo */}
        <ContactXRayCanvas />

        <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LADO IZQUIERDO (5 cols): Retrato Editorial con Enmarcado Orgánico */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:ml-24">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-[#FF0055] via-[#9D4EDD] to-[#FF9E00] shadow-2xl">
              <img
                src={contactImg}
                alt="Lic. José Ampíes - Psicólogo Clínico"
                className="w-full h-full object-cover rounded-full filter contrast-105"
                loading="eager"
              />
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Lic. José Ampíes
              </h1>
              <p className="font-mono text-xs text-[#FF9E00] uppercase tracking-widest">
                Psicoterapeuta Gestalt & Constelador Sistémico
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2 font-mono text-xs text-white/70">
              <p className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#7DB319] animate-pulse" />
                <span>Atención Presencial (Caracas) & Online Global</span>
              </p>
              <p className="text-white/50">
                Respuesta estimada: &lt; 2 horas hábiles
              </p>
            </div>
          </div>

          {/* LADO DERECHO (7 cols): Formulario Flotante Accesible Zod */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <ContactFormCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
