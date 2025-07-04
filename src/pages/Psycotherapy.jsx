import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import home_therapy from "../assets/home_therapy.jpg";
import psycotherapy from "../assets/psycotherapy_home.jpg";
import psycotherapy_what_is from "../assets/psychotherapy_wi.jpg";
import { services } from "../constants";

const Psycotherapy = () => {
  return (
    <section className="bg-gray-100">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center 
        justify-center text-white text-center px-4 overflow-hidden">
        <img src={psycotherapy} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="z-10">
          <div className="circle3_psycotherapy rounded-full"></div>
          <div className="circle2_psycotherapy rounded-full"></div>
          <div className="circle1_psycotherapy rounded-full"></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl">Psicoterapia</h1>
          <p className="text-lg font-semibiold italic py-4">Un espacio seguro para expresar tus sentimientos,<br />donde descubrirás el camino hacia tu bienestar</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
        </div>
      </div>

      {/* ¿Qué es? Section */}
      <div className="flex flex-wrap md:flex-nowrap bg-[#823B76] text-white py-12 md:px-20 grid grid-cols-2">
        <div className="flex items-center justify-center relative mx-auto pl-36">
          <div className="text-center grid justify-items-center absolute z-10">
            <h2 className="text-2xl font-bold pb-4">¿Qué es?</h2>
            <p className="mt-2 px-8">La psicoterapia es un viaje hacia el bienestar emocional. 
              Es un espacio seguro y confidencial donde podrás hablar abiertamente con un profesional de la salud mental. 
              A través de la conversación, aprenderás a identificar y comprender las causas de tus dificultades, desarrollarás 
              herramientas para manejar situaciones difíciles y lograrás una mayor bienestar emocional.
              ¿Estás listo para comenzar tu viaje hacia el bienestar?</p>
          </div>
          <div className="bg-red-500 rounded-full w-[450px] h-[450px] mx-auto z-0"></div>
        </div>
        <div className="mx-auto pr-36">
          <img src={psycotherapy_what_is} alt="Psicoterapia" className="rounded-full object-fit"/>
        </div>
      </div>

      {/* Servicios */}
      <div className="relative bg-blue-800 text-white py-10 text-center overflow-hidden">
        <div className="z-10">
          <div className="circle3_psychoservices rounded-full"></div>
          <div className="circle2_psychoservices rounded-full"></div>
          <div className="circle1_psychoservices rounded-full"></div>
        </div>
        <div className="relative z-20">
          <h2 className="text-2xl font-bold mb-6">Servicios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 px-16 mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-yellow-400 p-2 rounded-lg flex flex-col items-center">
                <img src={service.img} alt={service.title} className="h-28 mb-4" />
                <p className="font-semibold">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="bg-green-400 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900">¡Contáctame!</h2>
        <div className="bg-blue-700 p-6 mt-4 rounded-lg w-3/5 mx-auto">
          <input type="text" placeholder="Nombre y Apellido" className="w-full p-2 my-4 rounded-lg" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-2 mb-4 rounded-lg" />
          <textarea placeholder="¿Cuál es la razón de tu consulta?" className="w-full p-2 mb-4 rounded-lg"></textarea>
          <button className="bg-blue-800 px-6 py-2 text-white font-semibold rounded-lg hover:bg-blue-900 ">Envía un mensaje</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Psycotherapy;
