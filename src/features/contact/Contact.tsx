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
    <div ref={mainRef} className="bg-blue-800 min-h-screen">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen place-content-center overflow-hidden px-4">
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

        <div ref={imgRef} className="z-10 mx-auto h-[450px] w-[450px]">
          <img
            src={contactImg}
            className="w-full h-full object-cover rounded-full shadow-2xl"
            alt="José Ampíes"
            loading="eager"
          />
        </div>

        <div ref={contactRef} className="z-10">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Contacto
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl text-black border border-gray-200"
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
                  className="w-full p-4 rounded-xl text-black border border-gray-200"
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
                  className="w-full p-4 rounded-xl text-black border border-gray-200"
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  aria-label="Mensaje de consulta"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700"
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
