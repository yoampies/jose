// src/features/contact/Contact.tsx
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import contactImg from "../../assets/contact_home.jpg";
import Navbar from "../../shared/components/Navbar";
import { IFormData } from "../../shared/types/types";
import { useContactAnimations } from "./hooks/useContactAnimations";

const ContactForm: React.FC = () => {
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
  };

  return (
    <div className="bg-blue-800 min-h-screen">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen place-content-center overflow-hidden">
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

        <div ref={imgRef} className="z-10 mx-auto h-[450px] w-[450px]">
          <img
            src={contactImg}
            className="w-full h-full object-cover rounded-full shadow-2xl"
            alt="José Ampíes - Contacto"
          />
        </div>

        <div ref={contactRef} className="z-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full mt-8 mr-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Contacto
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Nombre y Apellido"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg text-black"
                  rows={4}
                  placeholder="Tu consulta..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 font-semibold"
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
