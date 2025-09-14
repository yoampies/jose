// Psycotherapy.jsx
import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import psycotherapy from "../assets/psycotherapy_home.jpg";
import psycotherapy_what_is from "../assets/psychotherapy_wi.jpg";
import { services } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP ScrollTrigger plugin.
// This is crucial for enabling animations based on scroll position.
gsap.registerPlugin(ScrollTrigger);

/**
 * A React component for the "Psicoterapia" page.
 * It features multiple sections with scroll-triggered animations to enhance the user experience.
 */
const Psycotherapy = () => {
  // useRef hooks to get direct DOM references to elements we want to animate.
  // This is the standard practice in React for using imperative libraries like GSAP.
  const heroCirclesRef = useRef([]);
  const aboutRef = useRef(null); // Reference to the entire about section.
  const aboutContentRef = useRef(null); // Reference to the text content within the about section.
  const aboutImageRef = useRef(null); // Reference to the image within the about section.
  const servicesTitleRef = useRef(null); // Reference to the "Servicios" title.
  const serviceCardsRef = useRef([]); // A ref to hold all the service cards. Initialized as an empty array.
  const contactFormRef = useRef(null); // Reference to the contact form section.

  // A single useEffect hook to manage all animations.
  // This hook runs once after the component mounts.
  useEffect(() => {
    // ----------------------------------
    // Hero Section Animations (On page load)
    // ----------------------------------
    // Use gsap.fromTo to animate the circles from a hidden state to their final position.
    // The staggered animation creates a dynamic, cascading effect.
    gsap.fromTo(heroCirclesRef.current, 
      { scale: 0, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 0.5,
        duration: 1.5, 
        stagger: 0.2, // Adds a delay between each circle's animation.
        ease: "power3.out" 
    });

    // ----------------------------------
    // "Qué es?" Section Animations (On scroll)
    // ----------------------------------
    // We create a timeline for a more synchronized animation of the text and image.
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%", // Starts the animation when the top of the section is 75% down the viewport.
            toggleActions: "play none none none", // Plays the animation once and doesn't reverse.
        }
    });

    // Animate the text and image to slide in from opposite directions simultaneously.
    aboutTl.fromTo(aboutContentRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, "<"); // The "<" starts this animation at the same time as the previous one.
    aboutTl.fromTo(aboutImageRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, "<");

    // ----------------------------------
    // "Servicios" Section Animations (On scroll)
    // ----------------------------------
    // Animate the title and cards with a staggered effect.
    const servicesTl = gsap.timeline({
        scrollTrigger: {
            trigger: servicesTitleRef.current,
            start: "top 85%", // Triggers the animation when the title comes into view.
            toggleActions: "play none none none",
        }
    });

    servicesTl.fromTo(servicesTitleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
    // This is where the error was. The serviceCardsRef must be accessed as a child.
    servicesTl.fromTo(serviceCardsRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }, "<0.2"); // Staggered animation for the cards.

    // Animate the background circles with a more playful, elastic ease.
    gsap.fromTo(".services-circle", { scale: 0, opacity: 0, rotate: 90 }, {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: servicesTitleRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // ----------------------------------
    // "Contacto" Section Animations (On scroll)
    // ----------------------------------
    gsap.fromTo(contactFormRef.current, { y: 50, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: contactFormRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
        }
    });

  }, []); // The empty array ensures this effect runs only once after the initial render.

  return (
    <section className="bg-gray-100">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center 
        justify-center text-white text-center px-4 overflow-hidden">
        <img src={psycotherapy} className="absolute inset-0 w-full h-full object-cover z-0" />
        {/* Background circles with new classes for easier animation targeting */}
        <div className="z-10 absolute inset-0 flex items-center justify-center">
          <div className="circle3_psycotherapy rounded-full services-circle" ref={el => heroCirclesRef.current[0] = el}></div>
          <div className="circle2_psycotherapy rounded-full services-circle" ref={el => heroCirclesRef.current[1] = el}></div>
          <div className="circle1_psycotherapy rounded-full services-circle" ref={el => heroCirclesRef.current[2] = el}></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl">Psicoterapia</h1>
          <p className="text-lg font-semibiold italic py-4">Un espacio seguro para expresar tus sentimientos,<br />donde descubrirás el camino hacia tu bienestar</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
        </div>
      </div>

      {/* ¿Qué es? Section */}
      <div className="overflow-hidden flex flex-wrap md:flex-nowrap bg-[#823B76] text-white py-12 md:px-20 grid grid-cols-2" ref={aboutRef}>
        <div className="flex items-center justify-center relative mx-auto pl-36" ref={aboutContentRef}>
          <div className="text-center grid justify-items-center absolute z-10">
            <h2 className="text-2xl font-bold pb-4">¿Qué es?</h2>
            <p className="mt-2 px-8">La psicoterapia es un viaje hacia el bienestar emocional. Es un espacio seguro y confidencial donde podrás hablar abiertamente con un profesional de la salud mental. A través de la conversación, aprenderás a identificar y comprender las causas de tus dificultades, desarrollarás herramientas para manejar situaciones difíciles y lograrás una mayor bienestar emocional. ¿Estás listo para comenzar tu viaje hacia el bienestar?</p>
          </div>
          <div className="bg-red-500 rounded-full w-[450px] h-[450px] mx-auto z-0"></div>
        </div>
        <div className="mx-auto pr-36" ref={aboutImageRef}>
          <img src={psycotherapy_what_is} alt="Psicoterapia" className="rounded-full object-fit"/>
        </div>
      </div>

      {/* Servicios */}
      <div className="relative bg-blue-800 text-white py-10 text-center overflow-hidden">
        {/* Background circles now have a shared class for a single animation call */}
        <div className="z-10">
          <div className="circle3_psychoservices rounded-full services-circle"></div>
          <div className="circle2_psychoservices rounded-full services-circle"></div>
          <div className="circle1_psychoservices rounded-full services-circle"></div>
        </div>
        <div className="relative z-20">
          <h2 className="text-2xl font-bold mb-6" ref={servicesTitleRef}>Servicios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 px-16 mx-auto">
            {/* The services are now mapped with a ref on each card to be animated as a group. */}
            {services.map((service, index) => (
              <div key={index} className="bg-yellow-400 p-2 rounded-lg flex flex-col items-center" ref={el => serviceCardsRef.current[index] = el}>
                <img src={service.img} alt={service.title} className="h-28 mb-4" />
                <p className="font-semibold">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="bg-green-400 py-10 px-6 text-center overflow-hidden">
        <h2 className="text-2xl font-bold text-blue-900">¡Contáctame!</h2>
        <div className="bg-blue-700 p-6 mt-4 rounded-lg w-3/5 mx-auto" ref={contactFormRef}>
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