import React from 'react'

export default function Constelations() {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 flex flex-col justify-center items-center text-white text-center px-4" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <h1 className="text-3xl md:text-5xl font-semibold">Constelaciones</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Explora tus raíces familiares, sana las heridas que te impiden avanzar y libera el potencial que reside en ti para vivir una vida plena y feliz.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Aprende más</button>
      </div>
      
      {/* ¿Qué es? */}
      <div className="bg-yellow-300 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold">¿Qué es?</h2>
          <p className="mt-4 text-lg">
            Las constelaciones familiares son una herramienta terapéutica que te invita a explorar las dinámicas ocultas de tu sistema familiar.
            Es un espacio donde podrás observar las fuerzas que influyen en tus relaciones, tus emociones y tus patrones de comportamiento.
            A través de la representación de tu árbol genealógico, podrás comprender las lealtades invisibles, los traumas no resueltos y los conflictos que te impiden avanzar.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="/path-to-image.jpg" alt="Constelaciones familiares" className="rounded-lg shadow-lg" />
        </div>
      </div>
      
      {/* Beneficios */}
      <div className="bg-blue-700 py-12 px-6 text-white">
        <h2 className="text-2xl font-bold text-center">¿Cómo te pueden ayudar las constelaciones?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Problemas de relación</h3>
            <p className="mt-2">Con tus parejas, padres, hermanos o hijos. Encuentra los patrones que las rigen.</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Problemas de salud</h3>
            <p className="mt-2">Aunque no curan enfermedades, pueden ayudar a comprender el origen emocional.</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Problemas económicos</h3>
            <p className="mt-2">Dificultades para administrar el dinero, deudas, sensación de escasez, etc.</p>
          </div>
        </div>
      </div>
      
      {/* Cómo funcionan */}
      <div className="bg-purple-700 py-12 px-6 text-white">
        <h2 className="text-2xl font-bold text-center">¿Cómo funcionan las constelaciones?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-center">
          El proceso implica definir un tema, seleccionar representantes, colocarlos en el espacio según la intuición del consultante,
          desarrollar la constelación a través de las emociones expresadas por los representantes, y buscar una resolución en la que todos encuentren su lugar.
          Esta técnica revela lealtades invisibles, exclusiones y traumas transgeneracionales, aportando comprensión, liberación emocional y resolución de conflictos.
        </p>
      </div>
      
      {/* Contacto */}
      <div className="bg-blue-800 py-8 text-white text-center">
        <p>Contacto: <a href="mailto:joseampies.psicologo@gmail.com" className="underline">joseampies.psicologo@gmail.com</a></p>
        <p className="mt-2">Redes sociales: <a href="#" className="underline">@buscaayudaestabien</a></p>
      </div>
    </section>
  )
}
