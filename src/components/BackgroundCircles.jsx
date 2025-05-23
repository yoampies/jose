// src/components/BackgroundCirclesSimple.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundCirclesSimple = ({ circles }) => {
  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current = circles.map(() => useRef(null));

    gsap.from(
      circleRefs.current.map((ref) => ref.current),
      {
        duration: 1,
        opacity: 1,
        stagger: 0.2,
      }
    );
  }, [circles]);

  return (
    <>
      {circles.map((circle, i) => (
        <div
          key={i}
          ref={circleRefs.current[i]}
          style={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            backgroundColor: circle.color,
            left: circle.left,
            top: circle.top,
            opacity: 0,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundCirclesSimple;