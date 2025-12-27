// src/features/constelations/hooks/useConstelationsAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ConstelationsRefs {
  scope: RefObject<HTMLElement | null>;
  circle1Ref: RefObject<HTMLDivElement | null>;
  circle2Ref: RefObject<HTMLDivElement | null>;
  cirImgRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLDivElement | null>;
  circle3Ref: RefObject<HTMLDivElement | null>;
  circle4Ref: RefObject<HTMLDivElement | null>;
  helpCardsRef: RefObject<(HTMLDivElement | null)[]>;
  imgRef: RefObject<HTMLDivElement | null>;
  text2Ref: RefObject<HTMLDivElement | null>;
}

export const useConstelationsAnimations = (refs: ConstelationsRefs) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: Círculos desenfocados con entrada suave
      gsap.fromTo(
        refs.circle1Ref.current,
        { x: -200, y: -200, opacity: 0, scale: 0.8 },
        {
          x: 0,
          y: 0,
          opacity: 0.4,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        refs.circle2Ref.current,
        { x: 200, y: 200, opacity: 0, scale: 0.8 },
        {
          x: 0,
          y: 0,
          opacity: 0.4,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      const setupScroll = (el: HTMLElement | null, x: number) => {
        if (el) {
          gsap.fromTo(
            el,
            { x, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      };

      setupScroll(refs.textRef.current, -200);
      setupScroll(refs.cirImgRef.current, 200);

      // Beneficios: Círculos desenfocados con ScrollTrigger (Estilo Home)
      [refs.circle3Ref, refs.circle4Ref].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: { trigger: ref.current, start: "top 85%" },
            }
          );
        }
      });

      const cards = refs.helpCardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: { trigger: cards[0], start: "top 80%" },
          }
        );
      }

      if (refs.imgRef.current) {
        gsap.fromTo(
          refs.imgRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            scrollTrigger: { trigger: refs.imgRef.current, start: "top 75%" },
          }
        );
      }
      setupScroll(refs.text2Ref.current, 200);
    }, refs.scope);
    return () => ctx.revert();
  }, [refs]);
};
