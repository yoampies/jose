// src/features/psycotherapy/hooks/usePsycotherapyAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PsycotherapyRefs {
  scope: RefObject<HTMLElement | null>;
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
      const heroCircles = [
        refs.circle1Ref.current,
        refs.circle2Ref.current,
        refs.circle3Ref.current,
      ];
      gsap.fromTo(
        heroCircles,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.4,
          scale: 1,
          duration: 1.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      if (refs.circle4Ref.current) {
        gsap.fromTo(
          refs.circle4Ref.current,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: refs.circle4Ref.current,
              start: "top bottom",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      if (refs.img1Ref.current) {
        gsap.fromTo(
          refs.img1Ref.current,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            scrollTrigger: {
              trigger: refs.img1Ref.current,
              start: "top bottom",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const serviceBgCircles = [
        refs.circle5Ref.current,
        refs.circle6Ref.current,
        refs.circle7Ref.current,
      ];
      gsap.fromTo(
        serviceBgCircles,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 0.6,
          scale: 1,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: refs.servRef.current,
            start: "top 85%",
          },
        }
      );

      if (refs.servRef.current) {
        gsap.fromTo(
          refs.servRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: { trigger: refs.servRef.current, start: "top 80%" },
          }
        );
      }

      if (refs.contactRef.current) {
        gsap.fromTo(
          refs.contactRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: refs.contactRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, refs.scope);

    return () => ctx.revert();
  }, [refs]);
};
