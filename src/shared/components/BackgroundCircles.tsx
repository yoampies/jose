import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BackgroundCirclesProps } from "../../shared/types/types";

const BackgroundCirclesSimple: React.FC<BackgroundCirclesProps> = ({
  circles,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = circleRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );

      if (elements.length > 0) {
        gsap.to(elements, {
          duration: 1,
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [circles]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {circles.map((circle, i) => (
        <div
          key={i}
          ref={(el) => {
            circleRefs.current[i] = el;
          }}
          style={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: circle.color,
            left: circle.left,
            top: circle.top,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCirclesSimple;
