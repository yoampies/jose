import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import constelations from "../assets/constelations_home.jpg";
import constelations_wi from "../assets/constelations_wi.jpg";
import constelations_money from "../assets/constelations_money.svg";
import constelations_health from "../assets/constelations_health.svg";
import constelations_relationship from "../assets/constelations_relationship.svg";
import constelations_portrait from "../assets/constelations_portrait.svg";

// Register the ScrollTrigger plugin with GSAP to enable scroll-based animations.
gsap.registerPlugin(ScrollTrigger) 

/**
 * Renders the Constelaciones (Constellations) page with a variety of
 * sections, each featuring a unique scroll-triggered animation.
 * The animations are designed to create a smooth, modern user experience.
 */
export default function Constelations() {
  // Create refs to access and animate specific DOM elements.
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const cirImgRef = useRef(null);
  const textRef = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const help1Ref = useRef(null);
  const help2Ref = useRef(null);
  const help3Ref = useRef(null);
  const imgRef = useRef(null);
  const text2Ref = useRef(null);

  // The useEffect hook runs after the component renders. It contains all the animation logic.
  useEffect(() => {
    // ----------------------
    // Hero Section Animations
    // ----------------------

    // Animate the large circles in the hero section to create a dynamic background.
    gsap.fromTo(circle1Ref.current, {x: -1000, y: -800, scale: 0}, {x: 0, y: 0, scale: 1, duration: 1.5, ease: "power3.out"});
    gsap.fromTo(circle2Ref.current, {x: 1500, y: 1500, scale: 0}, {x: 0, y: 0, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2});

    // ----------------------
    // "¿Qué es?" Section Animations
    // ----------------------

    // Animate the text and image of the "What is it?" section on scroll.
    // The animation is triggered when the section comes into view.
    gsap.fromTo(textRef.current, 
      {x: -200, opacity: 0}, 
      {x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // Trigger when the top of the element is 80% down from the top of the viewport.
        toggleActions: "play none none none"
      }}
    );
    gsap.fromTo(cirImgRef.current, 
      {x: 200, opacity: 0}, 
      {x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: {
        trigger: cirImgRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }}
    );
    
    // ----------------------
    // "Beneficios" Section Animations
    // ----------------------

    // Animate the background circles and the benefit cards.
    gsap.fromTo(circle3Ref.current, {x: 1000, y: -500, scale: 0, opacity: 0}, {x: 0, y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: {
      trigger: circle3Ref.current,
      start: "top 80%",
      toggleActions: "play none none none"
    }});
    gsap.fromTo(circle4Ref.current, {x: -1000, y: 500, scale: 0, opacity: 0}, {x: 0, y: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", scrollTrigger: {
      trigger: circle4Ref.current,
      start: "top 80%",
      toggleActions: "play none none none"
    }});

    // Stagger the animations of the three benefit cards for a smoother, more engaging effect.
    gsap.fromTo([help1Ref.current, help2Ref.current, help3Ref.current], 
      {y: 50, opacity: 0}, 
      {y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out", scrollTrigger: {
        trigger: help1Ref.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }}
    );

    // ----------------------
    // "Cómo funcionan" Section Animations
    // ----------------------

    // Animate the image and text of the final section.
    gsap.fromTo(imgRef.current, 
      {opacity: 0, scale: 0.8}, 
      {opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }}
    );
    gsap.fromTo(text2Ref.current, 
      {x: 200, opacity: 0}, 
      {x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: {
        trigger: text2Ref.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }}
    );

  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  return (
    <section className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full relative bg-cover bg-center h-96 flex flex-col justify-center items-center text-white 
        text-center px-4 overflow-hidden">
        <img src={constelations} className='absolute inset-0 w-full h-full object-cover z-0'/>
        <div className="z-10">
          <div className="circle2_constelations rounded-full" ref={circle2Ref}></div>
          <div className="circle1_constelations rounded-full" ref={circle1Ref}></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl">Constelaciones</h1>
          <p className="text-lg font-semibiold italic py-4">Explora tus raíces familiares, sana las heridas que te impiden avanzar y 
          <br />libera el potencial que reside en ti para vivir una vida plena y feliz.</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
        </div>
      </div>
      
      {/* ¿Qué es? */}
      <div className="bg-[#FFC95E] md:px-20 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        <div className="w-full md:w-1/2" ref={textRef}>
          <h2 className="text-2xl font-bold text-blue-900">¿Qué es?</h2>
          <p className="mt-4 text-lg text-blue-900">
            Las constelaciones familiares son una herramienta terapéutica que te invita a explorar las dinámicas ocultas de tu sistema familiar. <br />
            Es un espacio donde podrás observar las fuerzas que influyen en tus relaciones, tus emociones y tus patrones de comportamiento. <br />
            A través de la representación de tu árbol genealógico, podrás comprender las lealtades invisibles, los traumas no resueltos y los conflictos que te impiden avanzar.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center" ref={cirImgRef}>
          <img src={constelations_wi} alt="Constelaciones familiares" className="rounded-full object-fit w-96 h-96 my-6" />
        </div>
      </div>
      
      {/* Beneficios */}
      <div className="bg-blue-800 py-10 text-white px-20 relative overflow-hidden">
        <div className='relative z-20'>
          <h2 className="text-2xl font-bold text-center">¿Cómo te pueden ayudar las constelaciones?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-600 p-6 rounded-lg text-center" ref={help1Ref}>
              <img src={constelations_relationship} alt="Problemas de Relación" className="rounded-full pt-2 pb-6 h-48 w-48 mx-auto" />
              <h3 className="text-xl font-semibold">Problemas de relación</h3>
              <p className="mt-2">Con tus parejas, padres, hermanos o hijos. Encuentra los patrones que las rigen.</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg text-center" ref={help2Ref}>
              <img src={constelations_health} alt="Problemas de Salud" className="rounded-full pt-2 pb-6 h-48 w-48 mx-auto" />
              <h3 className="text-xl font-semibold">Problemas de salud</h3>
              <p className="mt-2">Aunque no curan enfermedades, pueden ayudar a comprender el origen emocional.</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-lg text-center" ref={help3Ref}>
              <img src={constelations_money} alt="Problemas de Económicos" className="rounded-full pt-2 pb-6 h-48 w-48 mx-auto" />
              <h3 className="text-xl font-semibold">Problemas económicos</h3>
              <p className="mt-2">Dificultades para administrar el dinero, deudas, sensación de escasez, etc.</p>
            </div>
          </div>
        </div>
        <div className='z-10'>
          <div className="circle2_constelations_benefits rounded-full" ref={circle3Ref}></div>
          <div className="circle1_constelations_benefits rounded-full" ref={circle4Ref}></div>
        </div>
      </div>
      
      {/* Cómo funcionan */}
      <div className="bg-[#823B76] px-6 md:px-20 flex flex-col md:flex-row items-center gap-x-8 overflow-hidden">
        <div className="w-full md:w-1/2 md:mt-0 flex justify-center" ref={imgRef}>
          <img src={constelations_portrait} alt="Constelaciones familiares" className="px-16 py-10" />
        </div>
        <div className="w-full md:w-1/2" ref={text2Ref}>
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