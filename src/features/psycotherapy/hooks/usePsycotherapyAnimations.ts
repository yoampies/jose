// src/features/psycotherapy/hooks/usePsycotherapyAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PsycotherapyRefs {
  circle1Ref: RefObject<HTMLDivElement | null>;
  circle2Ref: RefObject<HTMLDivElement | null>;
  circle3Ref: RefObject<HTMLDivElement | null>;
  circle4Ref: RefObject<HTMLDivElement | null>;
  img1Ref: RefObject<HTMLDivElement | null>;
  circle5Ref: RefObject<HTMLDivElement | null>;
  circle6Ref: RefObject<HTMLDivElement | null>;
  circle7Ref: RefObject<HTMLDivElement | null>;
  servRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export const usePsycotherapyAnimations = (refs: PsycotherapyRefs) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animaciones de Hero (Entrada inicial)
      if (refs.circle1Ref.current) {
        gsap.fromTo(
          refs.circle1Ref.current,
          { x: -1000, opacity: 0 },
          { x: 0, opacity: 0.6, duration: 1.5 }
        );
      }
      if (refs.circle2Ref.current) {
        gsap.fromTo(
          refs.circle2Ref.current,
          { y: -1000, opacity: 0 },
          { y: 0, opacity: 0.6, duration: 1.5 }
        );
      }
      if (refs.circle3Ref.current) {
        gsap.fromTo(
          refs.circle3Ref.current,
          { x: 1000, opacity: 0 },
          { x: 0, opacity: 0.6, duration: 1.5 }
        );
      }

      // Sección "¿Qué es?" (ScrollTrigger)
      if (refs.circle4Ref.current) {
        gsap.fromTo(
          refs.circle4Ref.current,
          { x: -1000 },
          {
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: refs.circle4Ref.current,
              start: "top bottom",
            },
          }
        );
      }
      if (refs.img1Ref.current) {
        gsap.fromTo(
          refs.img1Ref.current,
          { x: 1000 },
          {
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: refs.img1Ref.current,
              start: "top bottom",
            },
          }
        );
      }

      // Círculos de la Sección de Servicios
      const circlesBottom = [
        refs.circle5Ref.current,
        refs.circle6Ref.current,
        refs.circle7Ref.current,
      ];
      circlesBottom.forEach((circle, index) => {
        if (circle) {
          gsap.fromTo(
            circle,
            {
              x: index === 1 ? 1000 : 0,
              y: index === 1 ? -1000 : index === 2 ? -1000 : 0,
              xPercent: index === 0 ? 100 : 0,
            },
            {
              x: 0,
              y: 0,
              xPercent: 0,
              duration: index === 2 ? 3 : 1,
              scrollTrigger: { trigger: circle, start: "bottom bottom" },
            }
          );
        }
      });

      // Contenido de Servicios
      if (refs.servRef.current) {
        gsap.fromTo(
          refs.servRef.current,
          { y: -1000 },
          {
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: refs.servRef.current,
              start: "bottom top",
            },
          }
        );
      }

      // Sección de Contacto
      if (refs.contactRef.current) {
        gsap.fromTo(
          refs.contactRef.current,
          { x: 1200 },
          {
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: refs.contactRef.current,
              start: "top bottom",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [refs]);
};
