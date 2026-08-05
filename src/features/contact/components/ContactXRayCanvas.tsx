import React, { useRef, useEffect } from "react";

export const ContactXRayCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Gradientes volumétricos entrelazados (Atardecer Nocturno)
      const cx1 = width * 0.3 + Math.sin(time) * 40;
      const cy1 = height * 0.4 + Math.cos(time * 0.8) * 30;

      const cx2 = width * 0.7 + Math.cos(time * 0.7) * 40;
      const cy2 = height * 0.6 + Math.sin(time * 0.9) * 30;

      // Orbe Magenta (#FF0055)
      const g1 = ctx.createRadialGradient(cx1, cy1, 10, cx1, cy1, 220);
      g1.addColorStop(0, "rgba(255, 0, 85, 0.25)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Orbe Púrpura (#9D4EDD)
      const g2 = ctx.createRadialGradient(cx2, cy2, 10, cx2, cy2, 240);
      g2.addColorStop(0, "rgba(157, 78, 221, 0.2)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-80"
    />
  );
};
