// src/features/psycotherapy/hooks/usePsycotherapyAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PsycotherapyRefs {
  scope: RefObject<HTMLElement | null>;
  heroCircles: RefObject<(HTMLDivElement | null)[]>;
  circle4Ref: RefObject<HTMLDivElement | null>;
  img1Ref: RefObject<HTMLDivElement | null>;
  serviceCircles: RefObject<(HTMLDivElement | null)[]>;
  servRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export const usePsycotherapyAnimations = (refs: PsycotherapyRefs) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // 1. Hero: Orbes Gigantes Flashy
        const heroOrbs = refs.heroCircles.current.filter(Boolean);
        gsap.fromTo(
          heroOrbs,
          { opacity: 0, scale: 0 },
          {
            opacity: 0.5,
            scale: 1.2,
            duration: 2,
            stagger: 0.3,
            ease: "back.out(1.7)",
          }
        );

        heroOrbs.forEach((orb, i) => {
          gsap.to(orb, {
            x: "random(-100, 100)",
            y: "random(-100, 100)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        });

        // 2. Sección "¿Qué es?"
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

        // 3. Servicios: Orbes de fondo
        const srvOrbs = refs.serviceCircles.current.filter(Boolean);
        gsap.fromTo(
          srvOrbs,
          { opacity: 0, scale: 0.3 },
          {
            opacity: 0.6,
            scale: 1.3,
            duration: 2,
            stagger: 0.4,
            scrollTrigger: { trigger: refs.servRef.current, start: "top 85%" },
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
              scrollTrigger: {
                trigger: refs.servRef.current,
                start: "top 80%",
              },
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
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          refs.circle4Ref.current,
          refs.img1Ref.current,
          refs.servRef.current,
          refs.contactRef.current,
        ],
        { opacity: 1, x: 0, y: 0 }
      );
    });

    return () => mm.revert();
  }, [refs]);
};
