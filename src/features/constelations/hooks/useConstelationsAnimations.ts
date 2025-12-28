// src/features/constelations/hooks/useConstelationsAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ConstelationsRefs {
  scope: RefObject<HTMLElement | null>;
  heroCircles: RefObject<(HTMLDivElement | null)[]>;
  cirImgRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLDivElement | null>;
  benefitCircles: RefObject<(HTMLDivElement | null)[]>;
  helpCardsRef: RefObject<(HTMLDivElement | null)[]>;
  imgRef: RefObject<HTMLDivElement | null>;
  text2Ref: RefObject<HTMLDivElement | null>;
}

export const useConstelationsAnimations = (refs: ConstelationsRefs) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Hero Flashy Orbs
        const hOrbs = refs.heroCircles.current.filter(Boolean);
        gsap.fromTo(
          hOrbs,
          { opacity: 0, scale: 0 },
          { opacity: 0.4, scale: 1.3, duration: 2.5, stagger: 0.5 }
        );

        hOrbs.forEach((orb, i) => {
          gsap.to(orb, {
            x: "random(-150, 150)",
            y: "random(-150, 150)",
            duration: "random(5, 8)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: i,
          });
        });

        const setupScroll = (el: HTMLElement | null, x: number) => {
          if (el) {
            gsap.fromTo(
              el,
              { x, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.2,
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        };

        setupScroll(refs.textRef.current, -150);
        setupScroll(refs.cirImgRef.current, 150);

        // Beneficios: Orbes gigantes con Scroll
        const bOrbs = refs.benefitCircles.current.filter(Boolean);
        gsap.fromTo(
          bOrbs,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.5,
            scale: 1.5,
            duration: 2,
            scrollTrigger: { trigger: bOrbs[0], start: "top 90%" },
          }
        );

        const cards = refs.helpCardsRef.current.filter(Boolean);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.25,
              scrollTrigger: { trigger: cards[0], start: "top 80%" },
            }
          );
        }

        if (refs.imgRef.current) {
          gsap.fromTo(
            refs.imgRef.current,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              scrollTrigger: { trigger: refs.imgRef.current, start: "top 75%" },
            }
          );
        }
        setupScroll(refs.text2Ref.current, 150);
      }, refs.scope);
      return () => ctx.revert();
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          refs.textRef.current,
          refs.cirImgRef.current,
          ...refs.helpCardsRef.current,
          refs.imgRef.current,
          refs.text2Ref.current,
        ],
        { opacity: 1, x: 0, y: 0, scale: 1 }
      );
    });

    return () => mm.revert();
  }, [refs]);
};
