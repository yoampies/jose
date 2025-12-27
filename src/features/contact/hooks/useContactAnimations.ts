import { useEffect, RefObject } from "react";
import gsap from "gsap";

/**
 * Hook para gestionar las animaciones de la página de Contacto.
 * @param contactRef Referencia al contenedor del formulario (servirá de scope).
 * @param imgRef Referencia al contenedor de la imagen.
 * @param circlesRef Referencia al arreglo de círculos de fondo.
 */
export const useContactAnimations = (
  contactRef: RefObject<HTMLDivElement | null>,
  imgRef: RefObject<HTMLDivElement | null>,
  circlesRef: RefObject<HTMLDivElement[]>
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contactRef.current) {
        gsap.from(contactRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      if (imgRef.current) {
        gsap.from(imgRef.current, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (circlesRef.current.length > 0) {
        gsap.from(circlesRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.2,
        });
      }
    }, contactRef);

    return () => ctx.revert();
  }, [contactRef, imgRef, circlesRef]);
};
