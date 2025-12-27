// src/features/home/hooks/useHomeAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HomeRefs {
  scope: RefObject<HTMLDivElement | null>;
  mainCircleRef: RefObject<HTMLDivElement | null>;
  bgCirclesRef: RefObject<(HTMLDivElement | null)[]>;
  img1Ref: RefObject<HTMLImageElement | null>;
  text1Ref: RefObject<HTMLDivElement | null>;
  circle1Ref: RefObject<HTMLDivElement | null>;
  serviceCardsRef: RefObject<(HTMLDivElement | null)[]>;
  circle2Ref: RefObject<HTMLDivElement | null>;
  circle3Ref: RefObject<HTMLDivElement | null>;
}

export const useHomeAnimations = (refs: HomeRefs) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Orbe Central: Entrada con "Flash" (escala exagerada y opacidad)
      gsap.fromTo(
        refs.mainCircleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 0.5, duration: 2.5, ease: "elastic.out(1, 0.5)" }
      );

      // 2. Orbes Atmosféricos: Movimiento Flashy
      const bgCircles = refs.bgCirclesRef.current.filter(Boolean);

      gsap.fromTo(
        bgCircles,
        { opacity: 0, scale: 0 },
        {
          opacity: 0.6,
          scale: 1,
          duration: 2,
          stagger: 0.3,
          ease: "back.out(2)",
        }
      );

      // Animación de pulso y flotación caótica para más energía
      bgCircles.forEach((circle, i) => {
        gsap.to(circle, {
          x: "random(-150, 150)", // Rango de movimiento más amplio
          y: "random(-150, 150)",
          scale: "random(1.1, 1.4)", // Pulso constante
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.4,
        });
      });

      // 3. ScrollTrigger para secciones de contenido
      const scrollAnims = [
        { ref: refs.img1Ref, x: -100 },
        { ref: refs.text1Ref, x: 100 },
        { ref: refs.circle1Ref, x: 100, scale: 0.8 },
      ];

      scrollAnims.forEach(({ ref, x, scale }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { x, opacity: 0, scale: scale ?? 1 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // 4. Servicios
      const cards = refs.serviceCardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: cards[0], start: "top 80%" },
          }
        );
      }

      // 5. Círculos de fondo de servicios (Estilo Flashy)
      [refs.circle2Ref, refs.circle3Ref].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, scale: 0.3 },
            {
              opacity: 0.7,
              scale: 1.3,
              duration: 2,
              scrollTrigger: { trigger: ref.current, start: "top 85%" },
            }
          );
        }
      });
    }, refs.scope);

    return () => ctx.revert();
  }, [refs]);
};
