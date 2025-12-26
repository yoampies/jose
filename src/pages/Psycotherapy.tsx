import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import psycotherapyImg from "../assets/psycotherapy_home.jpg";
import psycotherapyWhatIsImg from "../assets/psychotherapy_wi.jpg";
import { services } from "../constants";
import { IService } from "../types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Psycotherapy: React.FC = () => {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  const circle4Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const circle5Ref = useRef<HTMLDivElement>(null);
  const circle6Ref = useRef<HTMLDivElement>(null);
  const circle7Ref = useRef<HTMLDivElement>(null);
  const servRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      if (circle1Ref.current) {
        gsap.fromTo(circle1Ref.current, { x: -1000, opacity: 0 }, { x: 0, opacity: 0.6, duration: 1.5 });
      }
      if (circle2Ref.current) {
        gsap.fromTo(circle2Ref.current, { y: -1000, opacity: 0 }, { y: 0, opacity: 0.6, duration: 1.5 });
      }
      if (circle3Ref.current) {
        gsap.fromTo(circle3Ref.current, { x: 1000, opacity: 0 }, { x: 0, opacity: 0.6, duration: 1.5 });
      }

      if (circle4Ref.current) {
        gsap.fromTo(circle4Ref.current, { x: -1000 }, {
          x: 0, duration: 1, scrollTrigger: {
            trigger: circle4Ref.current,
            start: "top bottom",
          }
        });
      }

      if (img1Ref.current) {
        gsap.fromTo(img1Ref.current, { x: 1000 }, {
          x: 0, duration: 1, scrollTrigger: {
            trigger: img1Ref.current,
            start: "top bottom",
          }
        });
      }

      const circlesBottom = [circle5Ref.current, circle6Ref.current, circle7Ref.current];
      circlesBottom.forEach((circle, index) => {
        if (circle) {
          gsap.fromTo(circle, 
            { x: index === 1 ? 1000 : 0, y: index === 1 ? -1000 : (index === 2 ? -1000 : 0), xPercent: index === 0 ? 100 : 0 }, 
            { x: 0, y: 0, xPercent: 0, duration: index === 2 ? 3 : 1, scrollTrigger: {
              trigger: circle,
              start: "bottom bottom",
            }}
          );
        }
      });

      if (servRef.current) {
        gsap.fromTo(servRef.current, { y: -1000 }, {
          y: 0, duration: 1, scrollTrigger: {
            trigger: servRef.current,
            start: "bottom top",
          }
        });
      }

      if (contactRef.current) {
        gsap.fromTo(contactRef.current, { x: 1200 }, {
          x: 0, duration: 1, scrollTrigger: {
            trigger: contactRef.current,
            start: "top bottom",
          }
        });
      }
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <section className="bg-gray-100">
      <Navbar />

      <div className="relative w-full h-screen bg-cover bg-center flex flex-col items-center 
        justify-center text-white text-center px-4 overflow-hidden">
        <img src={psycotherapyImg} className="absolute inset-0 w-full h-full object-cover z-0" alt="Hero Background" />
        <div className="z-10">
          <div className="circle3_psycotherapy rounded-full" ref={circle3Ref}></div>
          <div className="circle2_psycotherapy rounded-full" ref={circle2Ref}></div>
          <div className="circle1_psycotherapy rounded-full" ref={circle1Ref}></div>
        </div>
        <div className="relative z-20">
          <h1 className="text-5xl font-bold">Psicoterapia</h1>
          <p className="text-lg font-semibold italic py-4">Un espacio seguro para expresar tus sentimientos,<br />donde descubrirás el camino hacia tu bienestar</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700">Aprende más</button>
        </div>
      </div>

      <div className="overflow-hidden flex flex-wrap md:flex-nowrap bg-[#823B76] text-white py-12 md:px-20 grid grid-cols-2">
        <div className="flex items-center justify-center relative mx-auto pl-36" ref={circle4Ref}>
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
        <div className="mx-auto pr-36" ref={img1Ref}>
          <img src={psycotherapyWhatIsImg} alt="Psicoterapia Descripción" className="rounded-full object-cover w-96 h-96" />
        </div>
      </div>

      <div className="relative bg-blue-800 text-white py-10 text-center overflow-hidden">
        <div className="z-10">
          <div className="circle3_psychoservices rounded-full" ref={circle5Ref}></div>
          <div className="circle2_psychoservices rounded-full" ref={circle6Ref}></div>
          <div className="circle1_psychoservices rounded-full" ref={circle7Ref}></div>
        </div>
        <div className="relative z-20">
          <h2 className="text-2xl font-bold mb-6">Servicios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 px-16 mx-auto" ref={servRef}>
            {services.map((service: IService, index: number) => (
              <div key={index} className="bg-yellow-400 p-2 rounded-lg flex flex-col items-center">
                <img src={service.img} alt={service.title} className="h-28 mb-4" />
                <p className="font-semibold text-blue-900">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-400 py-10 px-6 text-center overflow-hidden">
        <h2 className="text-2xl font-bold text-blue-900">¡Contáctame!</h2>
        <div className="bg-blue-700 p-6 mt-4 rounded-lg w-3/5 mx-auto shadow-lg" ref={contactRef}>
          <input type="text" placeholder="Nombre y Apellido" className="w-full p-2 my-4 rounded-lg text-black" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-2 mb-4 rounded-lg text-black" />
          <textarea placeholder="¿Cuál es la razón de tu consulta?" className="w-full p-2 mb-4 rounded-lg text-black" rows={4}></textarea>
          <button className="bg-blue-800 px-6 py-2 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">Envía un mensaje</button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Psycotherapy;