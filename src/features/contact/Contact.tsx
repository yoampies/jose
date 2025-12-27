// src/features/contact/Contact.tsx
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import contactImg from "../../assets/contact_home.webp";
import Navbar from "../../shared/components/Navbar";
import { IFormData } from "../../shared/types/types";
import { useContactAnimations } from "./hooks/useContactAnimations";

/**
 * Componente de formulario de contacto optimizado.
 * Utiliza hooks personalizados para animaciones GSAP y carga de imágenes prioritaria.
 */
const ContactForm: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const heroCirclesRef = useRef<HTMLDivElement[]>([]);

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Recolecta referencias de círculos decorativos para animaciones escalonadas.
   */
  const addCircleRef = (el: HTMLDivElement | null) => {
    if (el && !heroCirclesRef.current.includes(el)) {
      heroCirclesRef.current.push(el);
    }
  };

  // Lógica de animación desacoplada
  useContactAnimations(contactRef, imgRef, heroCirclesRef);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado satisfactoriamente:", formData);
    // Aquí se integraría la lógica de envío (API o Service)
  };

  return (
    <div className="bg-blue-800 min-h-screen">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen place-content-center overflow-hidden">
        {/* Decoración - Círculos de fondo */}
        <div
          ref={addCircleRef}
          className="circle3_contact rounded-full z-0 circle-animation"
        />
        <div
          ref={addCircleRef}
          className="circle2_contact rounded-full z-0 circle-animation"
        />
        <div
          ref={addCircleRef}
          className="circle1_contact rounded-full z-0 circle-animation"
        />

        {/* Hero Image Section - Prioridad Alta para LCP */}
        <div ref={imgRef} className="z-10 mx-auto h-[450px] w-[450px]">
          <img
            src={contactImg}
            className="w-full h-full object-cover rounded-full shadow-2xl"
            alt="José Ampíes - Contacto Profesional"
            loading="eager" // Optimización de Largest Contentful Paint
          />
        </div>

        {/* Contact Form Section */}
        <div ref={contactRef} className="z-10 px-4 md:px-0">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mt-8 md:mr-16 mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Contacto
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Nombre y Apellido"
                  required
                  aria-label="Nombre y Apellido"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Correo electrónico"
                  required
                  aria-label="Correo electrónico"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  rows={4}
                  placeholder="Tu consulta..."
                  required
                  aria-label="Razón de consulta"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
              >
                Enviar un mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
