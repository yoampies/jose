import React, { useRef, useEffect } from "react";
import home_therapy from "../assets/home_therapy.jpg";
import { articles } from "../constants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import splatter1 from "../assets/Splatter1.svg";
import splatter2 from "../assets/Splatter2.svg";
import splatter3 from "../assets/Splatter3.svg";
import psicoterapia from "../assets/servicio-psicoterapia.png";
import familia from "../assets/servicio-familia.png";
import pareja from "../assets/servicio-pareja.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IArticle } from "../types";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const splatter1Ref = useRef<HTMLImageElement>(null);
  const splatter2Ref = useRef<HTMLImageElement>(null);
  const splatter3Ref = useRef<HTMLImageElement>(null);
  const mainCircleRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);
  
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del círculo principal
      gsap.fromTo(mainCircleRef.current, 
        { y: -200, opacity: 0, scale: 0.8 }, 
        { y: 0, opacity: 0.5, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      const splatters = [splatter1Ref.current, splatter2Ref.current, splatter3Ref.current];
      gsap.fromTo(splatters, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1.5, stagger: 0.3, ease: "power2.inOut" }
      );
    });

    return () => ctx.revert(); 
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (img1Ref.current) {
        gsap.fromTo(img1Ref.current, { x: -100, opacity: 0 }, { 
          x: 0, opacity: 1, duration: 1.5, ease: "power2.out", 
          scrollTrigger: { trigger: img1Ref.current, start: 'top 75%' }
        });
      }

      if (text1Ref.current) {
        gsap.fromTo(text1Ref.current, { x: 100, opacity: 0 }, { 
          x: 0, opacity: 1, duration: 1.5, ease: "power2.out", 
          scrollTrigger: { trigger: text1Ref.current, start: 'top 75%' }
        });
      }

      if (circle1Ref.current) {
        gsap.fromTo(circle1Ref.current, { x: 100, opacity: 0, scale: 0.8 }, { 
          x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", 
          scrollTrigger: { trigger: circle1Ref.current, start: 'top 75%' }
        });
      }

      const cards = serviceCardsRef.current.filter(el => el !== null);
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out", 
            scrollTrigger: { trigger: cards, start: 'top 80%' }
          }
        );
      }

      if (circle2Ref.current) {
        gsap.fromTo(circle2Ref.current, { x: -100, opacity: 0, scale: 0.8 }, { 
          x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", 
          scrollTrigger: { trigger: circle2Ref.current, start: 'top 80%' }
        });
      }
      
      if (circle3Ref.current) {
        gsap.fromTo(circle3Ref.current, { x: 100, opacity: 0, scale: 0.8 }, { 
          x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", 
          scrollTrigger: { trigger: circle3Ref.current, start: 'top 80%' }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center">
      <Navbar />
      
      <section className="relative flex items-center grid justify-items-center text-center w-full p-10 h-screen overflow-hidden">
        <div className="absolute z-20">
          <h1 className="text-5xl font-light my-auto">José Ampíes</h1>
          <p className="text-lg pt-4 italic">
            Donde la terapia también es para gente sana que busca 
            <span className="font-bold"> <br />crecer y evolucionar.</span>
          </p>
          <button className="bg-[#FFD685] text-[#2E4FB2] font-semibold px-6 py-2 mt-8 rounded-lg">Aprende más</button>
        </div>
        <div className="absolute z-10 h-96 w-96 rounded-full bg-[#06D6A0] opacity-[.40] place-self-center" ref={mainCircleRef}></div>
        <img src={splatter1} className="splatter1 z-0" ref={splatter1Ref} alt="splatter 1" />
        <img src={splatter2} className="splatter2 z-0" ref={splatter2Ref} alt="splatter 2" />
        <img src={splatter3} className="splatter3 z-0" ref={splatter3Ref} alt="splatter 3" />
      </section>
      
      <section className="overflow-hidden flex flex-col md:flex-row bg-[#06D6A0] w-full text-black">
        <img
          src={home_therapy} 
          alt="Grupo en terapia"
          className="w-[450px] h-[450px] object-cover md:w-1/2"
          ref={img1Ref}
        />
        <div className="relative">
          <div className="px-24 flex items-center text-center grid justify-items-center">
            <div className="absolute z-10" ref={text1Ref}>
              <h2 className="text-xl font-bold text-blue-900">¿Quién soy?</h2>
              <p className="w-96 mt-4 text-blue-900">
                Con más de 30 años de experiencia... Mi práctica se centra en la 
                <span className="font-bold"> terapia Gestalt, constelaciones familiares y terapias de pareja</span>.
              </p>
            </div>
            <div className="bottom-0 z-0 h-[450px] w-[450px] rounded-full bg-[#FFD685] opacity-[.85]" ref={circle1Ref}></div>
          </div>
        </div>
      </section>
      
      <section className="py-10 text-center overflow-hidden relative">
        <div className="circle2_home_services rounded-full z-0" ref={circle2Ref}></div>
        <div className="circle1_home_services rounded-full z-0" ref={circle3Ref}></div>
        <div className="relative z-10 w-3/4 mx-auto">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-blue-700 p-4 rounded-lg" ref={el => { serviceCardsRef.current[0] = el }}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={psicoterapia} alt="Psicoterapia" />
              </div>
              <h3 className="text-lg font-bold">Psicoterapia</h3>
              <p>Aprende a navegar la vida y sus inevitables sorpresas</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg" ref={el => { serviceCardsRef.current[1] = el }}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={familia} alt="Constelaciones Familiares" />
              </div>
              <h3 className="text-lg font-bold">Constelaciones Familiares</h3>
              <p>Libera patrones familiares y construye un futuro diferente</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg" ref={el => { serviceCardsRef.current[2] = el }}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]">
                <img src={pareja} alt="Terapia de Pareja" />
              </div>
              <h3 className="text-lg font-bold">Terapia de Pareja</h3>
              <p>Fortalece tu relación. Mejora la comunicación en pareja.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="justify-center w-full flex bg-[#06D6A0] p-4 text-blue-900 overflow-hidden">
        <div>
          <h2 className="text-2xl font-bold text-center">Artículos</h2>
          <div className="mt-4 mb-4 space-y-6 text-blue-900">
            {articles.map((item: IArticle) => ( 
              <div key={item.id} className="article-card">
                <div className="flex bg-[#A8D68E] p-8 rounded-lg items-center">
                  <img src={item.img} alt={item.title} className="rounded-md w-24 h-24 object-cover" />
                  <div className="flex flex-col ml-6">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="font-semilight">{item.author} - {item.date}</p>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;