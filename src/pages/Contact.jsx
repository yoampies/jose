import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import contact from "../assets/contact_home.jpg"

gsap.registerPlugin()

export default function ContactForm() {
  const contactRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const contact = contactRef.current
    gsap.fromTo(contact, {y: 1000}, {y: 0, duration: 0.8})

    const img = imgRef.current
    gsap.fromTo(img, {x: -1000}, {x:0, duration: 0.8})
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className="bg-blue-800">
      <Navbar />
      <div className="relative grid grid-cols-2 h-screen place-content-center overflow-hidden">
        <div className="circle3_contact rounded-full z-0"></div>
        <div className="circle2_contact rounded-full z-0"></div>
        <div className="circle1_contact rounded-full z-0"></div>

        <div className="z-10 mx-auto h-[450px] w-[450px]" ref={imgRef}>
          <img src={contact} className="inset-0 w-full h-full object-cover rounded-full" />
        </div>
        <div className="z-10" ref={contactRef}>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full mt-8 mr-16">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contacto</h2>
              <form onSubmit={handleSubmit} className="">
                <div>
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
                <div>
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
                <div>
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