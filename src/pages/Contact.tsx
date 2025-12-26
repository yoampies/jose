// src/pages/ContactForm.jsx
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import contact from "../assets/contact_home.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const contactRef = useRef(null);
  const imgRef = useRef(null);
  const heroCirclesRef = useRef([]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use a callback ref to handle adding elements to the array.
  const addCircleRef = (el) => {
    if (el && !heroCirclesRef.current.includes(el)) {
      heroCirclesRef.current.push(el);
    }
  };

  useEffect(() => {
    // 1. Create a GSAP Context.
    let ctx = gsap.context(() => {

      // 2. All your GSAP animations go inside this callback function.
      // They are now managed and will be reverted on cleanup.
      const contactForm = contactRef.current;
      const img = imgRef.current;
      const circles = heroCirclesRef.current;

      gsap.from(contactForm, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(img, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(circles, {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
      });

    }, contactRef); // 3. The second parameter is an optional scope.

    // 4. Return a cleanup function that reverts the GSAP context.
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className="bg-blue-800 min-h-screen">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-screen place-content-center overflow-hidden">
        {/* The ref assignment remains the same, using the callback function */}
        <div className="circle3_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>
        <div className="circle2_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>
        <div className="circle1_contact rounded-full z-0 circle-animation" ref={addCircleRef}></div>

        <div className="z-10 mx-auto h-[450px] w-[450px]" ref={imgRef}>
          <img src={contact} className="inset-0 w-full h-full object-cover rounded-full" alt="Contact" />
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
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-1">¿Cuál es la razón de tu consulta?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
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
}