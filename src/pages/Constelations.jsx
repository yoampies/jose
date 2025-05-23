import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import constelations from "../assets/constelations_home.jpg";


export default function Constelations() {
  return (
    <section className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full relative bg-cover bg-center h-96 flex flex-col justify-center items-center text-white 
        text-center px-4 overflow-hidden">
        <img src={constelations} className='absolute inset-0 w-full h-full object-cover z-0'/>
        <div className="z-10">
          <div className="circle2_constelations rounded-full"></div>
          <div className="circle1_constelations rounded-full"></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl">Constelaciones</h1>
          <p className="text-lg font-semibiold italic py-4">Explora tus raíces familiares, sana las heridas que te impiden avanzar y 
          <br />libera el potencial que reside en ti para vivir una vida plena y feliz.</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
        </div>
      </div>
      
      {/* ¿Qué es? */}
      <div className="bg-[#FFC95E] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-900">¿Qué es?</h2>
          <p className="mt-4 text-lg text-blue-900">
            Las constelaciones familiares son una herramienta terapéutica que te invita a explorar las dinámicas ocultas de tu sistema familiar. <br />
            Es un espacio donde podrás observar las fuerzas que influyen en tus relaciones, tus emociones y tus patrones de comportamiento. <br />
            A través de la representación de tu árbol genealógico, podrás comprender las lealtades invisibles, los traumas no resueltos y los conflictos que te impiden avanzar.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src={constelations} alt="Constelaciones familiares" className="rounded-full" />
        </div>
      </div>
      
      {/* Beneficios */}
      <div className="bg-blue-800 py-12 px-6 text-white px-20">
        <h2 className="text-2xl font-bold text-center">¿Cómo te pueden ayudar las constelaciones?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-6 rounded-lg text-center">
            <img src={constelations} alt="Problemas de Relación" className="rounded-full pt-2 pb-6" />
            <h3 className="text-xl font-semibold">Problemas de relación</h3>
            <p className="mt-2">Con tus parejas, padres, hermanos o hijos. Encuentra los patrones que las rigen.</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg text-center">
            <img src={constelations} alt="Problemas de Salud" className="rounded-full pt-2 pb-6" />
            <h3 className="text-xl font-semibold">Problemas de salud</h3>
            <p className="mt-2">Aunque no curan enfermedades, pueden ayudar a comprender el origen emocional.</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg text-center">
            <img src={constelations} alt="Problemas de Económicos" className="rounded-full pt-2 pb-6" />
            <h3 className="text-xl font-semibold">Problemas económicos</h3>
            <p className="mt-2">Dificultades para administrar el dinero, deudas, sensación de escasez, etc.</p>
          </div>
        </div>
      </div>
      
      {/* Cómo funcionan */}
      <div className="bg-[#823B76] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src={constelations} alt="Constelaciones familiares" className="rounded-full" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white">¿Cómo funciona las constelaciones?</h2>
          <p className="mt-4 text-lg text-white">
          El proceso implica definir un tema, seleccionar representantes, colocarlos en el espacio según la intuición del 
          consultante, desarrollar la constelación a través de las emociones expresadas por los representantes, y 
          buscar una resolución en la que todos encuentren su lugar. <br />
          Esta técnica revela lealtades invisibles, exclusiones y traumas transgeneracionales, y puede aportar comprensión, 
          liberación emocional, resolución de conflictos y crecimiento personal.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </section>
  )
}
