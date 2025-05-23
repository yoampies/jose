import React from "react";
import home_therapy from "../assets/home_therapy.jpg";
import { articles } from "../constants/index.js"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import splatter1 from "../assets/Splatter1.svg"
import splatter2 from "../assets/Splatter2.svg"
import splatter3 from "../assets/Splatter3.svg"

const Home = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex items-center grid justify-items-center text-center w-full p-10 h-screen overflow-hidden">
        <div className="absolute z-20">
          <h1 className="text-5xl font-light my-auto">José Ampíes</h1>
          <p className="text-lg pt-4 italic">Donde la terapia también es para gente sana que busca <span className="font-bold"> <br />crecer y evolucionar.</span></p>
          <button className="bg-[#FFD685] text-[#2E4FB2] font-semibold px-6 py-2 mt-8 rounded-lg">Aprende más</button>
        </div>
        <div className="bottom-0 z-10 h-96 w-96 rounded-full bg-[#06D6A0] opacity-[.40]"></div>
        <img src={splatter1} className="splatter1 z-0"/>
        <img src={splatter2} className="splatter2 z-0"/>
        <img src={splatter3} className="splatter3 z-0"/>
      </section>
      
      {/* About Section */}
      <section className="flex flex-col md:flex-row bg-[#06D6A0] w-full text-black">
        <img
          src={ home_therapy } 
          alt="Grupo en terapia"
          className="w-full h-96 object-cover md:w-1/2"
        />
        <div className="px-24 flex items-center text-center grid justify-items-center">
          <div className="absolute z-10">
            <h2 className="text-xl font-bold text-blue-900">¿Quién soy?</h2>
            <p className="w-96 mt-4 text-blue-900">
            Con más de 30 años de experiencia, he acompañado a personas en su camino hacia el crecimiento personal y 
            el bienestar emocional. Mi práctica se centra en la <span className="font-bold">terapia Gestalt, constelaciones familiares y terapias de 
            pareja</span>. Creo firmemente que <span className="font-bold">la terapia no es solo para quienes padecen enfermedades mentales</span>. La terapia 
            potencia la resiliencia, mejora las relaciones, aumenta la autoestima y fomenta un mayor sentido de 
            propósito en la vida, incluso en personas sin diagnósticos clínicos.
            </p>
          </div>
          <div className="bottom-0 z-0 h-96 w-[450px] rounded-full bg-[#FFD685] opacity-[.85]"></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="mt-10 text-center max-w-4xl">
        <h2 className="text-2xl font-bold">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-blue-700 p-4 rounded-lg pb-8">
            <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
            <h3 className="text-lg font-bold">Psicoterapia</h3>
            <p>Aprende a navegar la vida y sus inevitables sorpresas</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg pb-8">
            <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
            <h3 className="text-lg font-bold">Constelaciones Familiares</h3>
            <p>Libera patrones familiares y construye un futuro diferente</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg pb-8">
            <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
            <h3 className="text-lg font-bold">Terapia de Pareja</h3>
            <p>Fortalece tu relación. Mejora la comunicación en pareja.</p>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="my-10 max-w-4xl w-3/4 bg-[#06D6A0] p-4 rounded-lg text-blue-900">
        <h2 className="text-2xl font-bold text-center">Artículos</h2>
        <div className="mt-4 mb-4 ml-20 space-y-6 text-blue-900">
          {
            articles.map((item) => (
            <div key={item.id}>
              <div className="flex">
                <img src={item.img} className="rounded-md w-20 h-20 object-cover" />
                <div className="flex flex-col ml-6">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-semmilight">{item.author} - {item.date}</p>
                  <p>{item.description}</p>
                </div>
              </div>  
            </div>
            ))
          }
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;

