// src/components/BackgroundCirclesSimple.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * A simple React component that renders and animates a set of background circles.
 * The circles are positioned and styled based on the 'circles' prop,
 * and a GSAP animation is applied to them on initial render.
 * @param {object} props The component props.
 * @param {Array<object>} props.circles An array of objects, where each object defines a circle's properties:
 * { size: string, color: string, left: string, top: string }.
 * @returns {JSX.Element} The rendered background circles.
 */
const BackgroundCirclesSimple = ({ circles }) => {
  // A ref to hold references to the DOM elements of the circles.
  const circleRefs = useRef([]);

  // The useEffect hook runs after the component is rendered.
  // It handles the animation logic using GSAP.
  useEffect(() => {
    // Initialize the circleRefs array with a ref for each circle.
    // This is necessary to reference each individual circle's DOM element.
    circleRefs.current = circles.map(() => React.createRef());

    // Use GSAP's .from() method to animate the circles.
    // The animation starts from the specified state and animates to the final state
    // defined in the CSS (e.g., opacity: 1).
    gsap.from(
      // Get the actual DOM elements from the refs.
      circleRefs.current.map((ref) => ref.current),
      {
        duration: 1, // The duration of the fade-in animation in seconds.
        opacity: 1, // Animate the opacity from 0 to 1.
        stagger: 0.2, // A slight delay between each circle's animation for a staggered effect.
      }
    );
  }, [circles]); // The effect re-runs if the 'circles' prop changes.

  // Render the circle elements.
  return (
    <>
      {circles.map((circle, i) => (
        <div
          key={i} // Use the index as the key.
          ref={circleRefs.current[i]} // Assign a ref to each circle's DOM element.
          style={{
            position: 'absolute',
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            backgroundColor: circle.color,
            left: circle.left,
            top: circle.top,
            opacity: 0, // Initial opacity is 0, so the GSAP animation can fade them in.
          }}
        />
      ))}
    </>
  );
};

export default BackgroundCirclesSimple;