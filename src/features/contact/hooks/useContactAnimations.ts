// src/features/contact/hooks/useContactAnimations.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";

interface ContactRefs {
  scope: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  imgRef: RefObject<HTMLDivElement | null>;
  circlesRef: RefObject<HTMLDivElement[]>;
}

export const useContactAnimations = (refs: ContactRefs) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (refs.contactRef.current) {
        gsap.from(refs.contactRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      if (refs.imgRef.current) {
        gsap.from(refs.imgRef.current, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (refs.circlesRef.current.length > 0) {
        gsap.fromTo(
          refs.circlesRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 0.4,
            scale: 1,
            duration: 1.8,
            ease: "power2.out",
            stagger: 0.2,
          }
        );
      }
    }, refs.scope);

    return () => ctx.revert();
  }, [refs]);
};
