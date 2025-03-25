import React from "react";
import home_therapy from "../assets/home_therapy.jpg";

const Home = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-4 flex justify-center items-center">
        <nav className="flex gap-12">
          <a href="#" className="text-white">Nosotros</a>
          <a href="#" className="text-white">Experiencia</a>
          <a href="#" className="text-white">Contacto</a>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="flex items-center grid justify-items-center text-center p-10">
        <div className="absolute z-10">
          <h1 className="text-5xl font-light my-auto">José Ampíes</h1>
          <p className="text-lg pt-4 italic">Donde la terapia también es para gente sana que busca <span className="font-bold"> <br />crecer y evolucionar.</span></p>
          <button className="bg-[#FFD685] text-[#2E4FB2] font-semibold px-6 py-2 mt-8 rounded-lg">Aprende más</button>
        </div>
        <div className="bottom-0 z-0 h-96 w-96 rounded-full bg-[#06D6A0] opacity-[.40]"></div>
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
          <div className="bg-blue-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Psicoterapia Individual</h3>
            <p>Sesiones personalizadas para tu bienestar.</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Terapia Familiar</h3>
            <p>Fortalece los lazos familiares y mejora la comunicación.</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Terapia de Pareja</h3>
            <p>Mejora tu relación con herramientas efectivas.</p>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="mt-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-center">Artículos</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-green-400 p-4 rounded-lg text-black">
            <h3 className="text-lg font-bold">Ejemplo de artículo 1</h3>
            <p>Descripción breve del artículo.</p>
          </div>
          <div className="bg-green-400 p-4 rounded-lg text-black">
            <h3 className="text-lg font-bold">Ejemplo de artículo 2</h3>
            <p>Descripción breve del artículo.</p>
          </div>
          <div className="bg-green-400 p-4 rounded-lg text-black">
            <h3 className="text-lg font-bold">Ejemplo de artículo 3</h3>
            <p>Descripción breve del artículo.</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-10 p-4 bg-blue-800 w-full text-center">
        <p>Contacto: contacto@email.com</p>
        <p>@joseampiés</p>
      </footer>
    </div>
  );
};

export default Home;

