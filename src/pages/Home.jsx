import React from "react";
import home_therapy from "../assets/home_therapy.jpg";
import { articles } from "../constants/index.js"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import splatter1 from "../assets/Splatter1.svg"
import splatter2 from "../assets/Splatter2.svg"
import splatter3 from "../assets/Splatter3.svg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger) 

const Home = () => {
  const splatter1Ref = useRef(null);
  const splatter2Ref = useRef(null);
  const splatter3Ref = useRef(null);
  const mainCircleRef = useRef(null);
  const circle1Ref = useRef(null);
  const img1Ref = useRef(null);
  const text1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const sp1 = splatter1Ref.current;
    gsap.fromTo(sp1, {x: -1000}, {x: 0, duration: 0.9})

    const sp2 = splatter2Ref.current;
    gsap.fromTo(sp2, {x: 1000}, {x: 0, duration: 0.5})

    const sp3 = splatter3Ref.current;
    gsap.fromTo(sp3, {x: 1000}, {x: 0, duration: 0.8})

    const cir = mainCircleRef.current;
    gsap.fromTo(cir, {opacity: 0}, {opacity: 0.39, duration: 1.7})

    const cir1 = circle1Ref.current;
    gsap.fromTo(cir1, {x: 1000}, {x: 0, duration: 0.8, scrollTrigger: {
            trigger: cir1,
            start: 'top bottom',     
          }})

    const img1 = img1Ref.current;
    gsap.fromTo(img1, {x: -1000}, {x: 0, duration: 0.8, scrollTrigger: {
            trigger: img1,
            start: 'top bottom',     
          }})

    const txt1 = text1Ref.current;
    gsap.fromTo(txt1, {x: 1000}, {x: 0, duration: 1, scrollTrigger: {
            trigger: txt1,   
            start: 'top bottom'  
          }})

    const cir2 = circle2Ref.current;
    gsap.fromTo(cir2, {x: -1000}, {x: 0, duration: 0.7, scrollTrigger: {
            trigger: cir2,
            start: 'top bottom',     
          }})

    const cir3 = circle3Ref.current;
    gsap.fromTo(cir3, {x: 1000}, {x: 0, duration: 1.5, scrollTrigger: {
            trigger: cir3,
            start: 'center bottom',     
          }})

    const card1 = card1Ref.current;
    gsap.fromTo(card1, {x: -1000}, {x: 0, duration: 1.5, scrollTrigger: {
            trigger: card1,
            start: 'center bottom',     
          }})

    const card2 = card2Ref.current;
    gsap.fromTo(card2, {x: -800}, {x: 0, duration: 1.3, scrollTrigger: {
            trigger: card2,
            start: 'center bottom',     
          }})

    const card3 = card3Ref.current;
    gsap.fromTo(card3, {x: 1000}, {x: 0, duration: 1.5, scrollTrigger: {
            trigger: card3,
            start: 'center bottom',     
          }})

    const card4 = card4Ref.current;
    gsap.fromTo(card4, {x: 1000}, {x: 0, duration: 1.5, scrollTrigger: {
            trigger: card4,
            start: 'center bottom',     
          }})
  }, [])

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
        <div className="bottom-0 z-10 h-96 w-96 rounded-full bg-[#06D6A0] opacity-[.40]" ref={mainCircleRef}></div>
        <img src={splatter1} className="splatter1 z-0" ref={splatter1Ref}/>
        <img src={splatter2} className="splatter2 z-0" ref={splatter2Ref}/>
        <img src={splatter3} className="splatter3 z-0" ref={splatter3Ref}/>
      </section>
      
      {/* About Section */}
      <section className="flex flex-col md:flex-row bg-[#06D6A0] w-full text-black">
        <img
          src={ home_therapy } 
          alt="Grupo en terapia"
          className="w-[450px] h-[450px] object-cover md:w-1/2"
          ref={img1Ref}
        />
        <div className="px-24 flex items-center text-center grid justify-items-center">
          <div className="absolute z-10" ref={text1Ref}>
            <h2 className="text-xl font-bold text-blue-900">¿Quién soy?</h2>
            <p className="w-96 mt-4 text-blue-900">
            Con más de 30 años de experiencia, he acompañado a personas en su camino hacia el crecimiento personal y 
            el bienestar emocional. Mi práctica se centra en la <span className="font-bold">terapia Gestalt, constelaciones familiares y terapias de 
            pareja</span>. Creo firmemente que <span className="font-bold">la terapia no es solo para quienes padecen enfermedades mentales</span>. La terapia 
            potencia la resiliencia, mejora las relaciones, aumenta la autoestima y fomenta un mayor sentido de 
            propósito en la vida, incluso en personas sin diagnósticos clínicos.
            </p>
          </div>
          <div className="bottom-0 z-0 h-[450px] w-[450px] rounded-full bg-[#FFD685] opacity-[.85]" ref={circle1Ref}></div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-10 text-center overflow-hidden relative ">
        <div className="circle2_home_services rounded-full z-0" ref={circle2Ref}></div>
        <div className="circle1_home_services rounded-full z-0" ref={circle3Ref}></div>
        <div className="relative z-10 w-3/4 mx-auto">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-blue-700 p-4 rounded-lg" ref={card1Ref}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
              <h3 className="text-lg font-bold">Psicoterapia</h3>
              <p>Aprende a navegar la vida y sus inevitables sorpresas</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg" ref={card2Ref}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
              <h3 className="text-lg font-bold">Constelaciones Familiares</h3>
              <p>Libera patrones familiares y construye un futuro diferente</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-lg" ref={card3Ref}>
              <div className="bottom-0 z-0 h-28 w-28 mx-auto mb-8 mt-4 rounded-full bg-[#06D6A0]"></div>
              <h3 className="text-lg font-bold">Terapia de Pareja</h3>
              <p>Fortalece tu relación. Mejora la comunicación en pareja.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="justify-center w-full flex bg-[#06D6A0] p-4 text-blue-900">
        <div>
          <h2 className="text-2xl font-bold text-center">Artículos</h2>
          <div className="mt-4 mb-4 space-y-6 text-blue-900">
            {
              articles.map((item) => (
              <div key={item.id}>
                <div className="flex bg-[#A8D68E] p-8 rounded-lg items-center">
                  <img src={item.img} className="rounded-md w-24 h-24 object-cover" />
                  <div className="flex flex-col ml-6">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="font-semilight">{item.author} - {item.date}</p>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>  
              </div>
              ))
            }
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;

