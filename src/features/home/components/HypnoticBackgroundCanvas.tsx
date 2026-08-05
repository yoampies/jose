import React, { useRef, useEffect } from "react";
import { HypnoticCanvasProps } from "../../../shared/types/types";

export const HypnoticBackgroundCanvas: React.FC<HypnoticCanvasProps> = ({
  words = ["*", "**", "***", "****", "*****", "******"],
  primaryColor = "#FF0055",
  secondaryColor = "#9D4EDD",
  opacity = 0.45,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let rotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height) * 0.55;
      const totalRings = 12;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      for (let r = 1; r <= totalRings; r++) {
        const radius = (maxRadius / totalRings) * r;
        const ringOpacity = (1 - r / (totalRings + 2)) * opacity;

        // Trazado de Anillo
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = r % 2 === 0 ? primaryColor : secondaryColor;
        ctx.globalAlpha = Math.max(ringOpacity, 0.1);
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Texto Concéntrico
        const word = words[r % words.length];
        const count = r * 4;
        const step = (Math.PI * 2) / count;

        ctx.font = `600 ${10 + r * 1.2}px serif`;
        ctx.fillStyle = r % 2 === 0 ? primaryColor : "#FF9E00";

        for (let i = 0; i < count; i++) {
          const angle = i * step;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle + Math.PI / 2);
          ctx.fillText(word, 0, 0);
          ctx.restore();
        }
      }

      ctx.restore();

      // Incrementar rotación de forma continua e imperceptible
      rotation += 0.003;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [words, primaryColor, secondaryColor, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};
