// src/features/contact/Contact.tsx
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import contactImg from "../../assets/contact_home.webp";
import Navbar from "../../shared/components/Navbar";
import { IFormData } from "../../shared/types/types";
import { useContactAnimations } from "./hooks/useContactAnimations";

const ContactForm: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const heroCirclesRef = useRef<HTMLDivElement[]>([]);

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const addCircleRef = (el: HTMLDivElement | null) => {
    if (el && !heroCirclesRef.current.includes(el)) {
      heroCirclesRef.current.push(el);
    }
  };

  useContactAnimations({
    scope: mainRef,
    contactRef,
    imgRef,
    circlesRef: heroCirclesRef,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enviado:", formData);
  };

  return (
    <div
      ref={mainRef}
      className="bg-blue-800 min-h-screen relative w-full overflow-hidden"
    >
      <Navbar />

      {/* Contenedor principal ajustado para móvil: pt-20 para navbar, sin overflow */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen place-content-center px-4 pt-24 pb-10 gap-8 md:gap-0 w-full">
        {/* Orbes Flashy */}
        <div
          ref={addCircleRef}
          className="circle3_contact rounded-full blur-3xl opacity-0 z-0"
        />
        <div
          ref={addCircleRef}
          className="circle2_contact rounded-full blur-3xl opacity-0 z-0"
        />
        <div
          ref={addCircleRef}
          className="circle1_contact rounded-full blur-3xl opacity-0 z-0"
        />

        {/* Imagen ajustada para no desbordar en móvil */}
        <div
          ref={imgRef}
          className="z-10 mx-auto w-full max-w-[300px] md:max-w-[450px] aspect-square flex justify-center"
        >
          <img
            src={contactImg}
            className="w-full h-full object-cover rounded-full shadow-2xl"
            alt="José Ampíes"
            loading="eager"
          />
        </div>

        {/* Formulario */}
        <div
          ref={contactRef}
          className="z-10 w-full flex items-center justify-center"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 md:mb-8">
              Contacto
            </h2>
            <form onSubmit={handleSubmit} noValidate className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nombre completo"
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
                  className="w-full p-4 rounded-xl text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Correo"
                  required
                  aria-label="Correo electrónico"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl text-black border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  aria-label="Mensaje de consulta"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors"
                aria-label="Enviar mensaje de contacto"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
