import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HomeRefs {
  mainCircleRef: RefObject<HTMLDivElement | null>;
  splatterRefs: RefObject<HTMLImageElement | null>[];
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
      gsap.fromTo(
        refs.mainCircleRef.current,
        { y: -200, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 0.5, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      const splatters = refs.splatterRefs.map((r) => r.current).filter(Boolean);
      gsap.fromTo(
        splatters,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, stagger: 0.3, ease: "power2.inOut" }
      );

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
              scrollTrigger: { trigger: ref.current, start: "top 75%" },
            }
          );
        }
      });

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
    });

    return () => ctx.revert();
  }, [refs]);
};
