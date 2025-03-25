import React from "react";

const Psycotherapy = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <h1 className="text-3xl font-bold">Psicoterapia</h1>
        <p className="text-lg italic">Un espacio seguro para expresar tus sentimientos, donde descubrirás el camino hacia tu bienestar</p>
        <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
      </div>

      {/* ¿Qué es? Section */}
      <div className="flex flex-wrap md:flex-nowrap bg-purple-700 text-white py-10 px-6 md:px-20 items-center">
        <div className="md:w-1/2">
          <div className="bg-red-500 p-6 rounded-full text-center w-3/4 mx-auto">
            <h2 className="text-xl font-bold">¿Qué es?</h2>
            <p className="mt-2 text-sm">La psicoterapia es un viaje hacia el bienestar emocional. Es un espacio seguro y confidencial donde podrás hablar con un profesional de la salud mental...</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/path-to-your-image2.jpg" alt="Psicoterapia" className="rounded-full w-3/4 mx-auto" />
        </div>
      </div>

      {/* Servicios */}
      <div className="bg-blue-800 text-white py-10 px-6 text-center">
        <h2 className="text-2xl font-bold">Servicios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Terapia Individual", img: "icon1.png" },
            { title: "Terapia Familiar", img: "icon2.png" },
            { title: "Terapia de Pareja", img: "icon3.png" },
            { title: "Terapia de Niños", img: "icon4.png" },
            { title: "Terapia de Adicciones", img: "icon5.png" },
          ].map((service, index) => (
            <div key={index} className="bg-yellow-400 p-4 rounded-lg flex flex-col items-center">
              <img src={`/icons/${service.img}`} alt={service.title} className="w-16 mb-2" />
              <p className="text-sm font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contacto */}
      <div className="bg-green-400 py-10 px-6 text-center">
        <h2 className="text-xl font-bold">¡Contáctame!</h2>
        <div className="bg-blue-300 p-6 mt-4 rounded-lg max-w-lg mx-auto">
          <input type="text" placeholder="Nombre y Apellido" className="w-full p-2 mb-2 rounded-lg" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-2 mb-2 rounded-lg" />
          <textarea placeholder="¿Cuál es la razón de tu consulta?" className="w-full p-2 mb-2 rounded-lg"></textarea>
          <button className="bg-blue-600 px-6 py-2 text-white font-semibold rounded-lg hover:bg-blue-700">Envía un mensaje</button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white py-4 text-center">
        <p>Contacto: joseampies.psicologo@gmail.com</p>
        <p>Redes sociales: @buscaayudaestabien</p>
      </div>
    </section>
  );
};

export default Psycotherapy;
