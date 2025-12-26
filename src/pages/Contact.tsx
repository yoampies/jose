import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import contactImg from "../assets/contact_home.jpg"; 
import { IFormData } from "../types"; 

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const contactForm = contactRef.current;
      const img = imgRef.current;
      const circles = heroCirclesRef.current;

      if (contactForm) {
        gsap.from(contactForm, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      if (img) {
        gsap.from(img, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (circles.length > 0) {
        gsap.from(circles, {
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.2,
        });
      }

    }, contactRef); 

    return () => ctx.revert();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div className="circle3_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>
        <div className="circle2_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>
        <div className="circle1_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>

        <div className="z-10 mx-auto h-[450px] w-[450px]" ref={imgRef}>
          <img 
            src={contactImg} 
            className="inset-0 w-full h-full object-cover rounded-full shadow-2xl" 
            alt="José Ampíes - Contacto" 
          />
        </div>

        <div className="z-10" ref={contactRef}>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full mt-8 mr-16">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contacto</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">Nombre y Apellido:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">Correo electrónico:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-1">¿Cuál es la razón de tu consulta?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    rows={4}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-md"
                >
                  Enviar un mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;