import React, { useRef, useEffect } from "react";
import { RefractionLensCanvasProps } from "../../../shared/types/types";

export const PsycotherapyHeroLensCanvas: React.FC<
  RefractionLensCanvasProps
> = ({
  primaryColor = "#FF0055",
  secondaryColor = "#9D4EDD",
  accentColor = "#FF9E00",
  lensRadius = 165,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, velocity: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 700);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      // Cálculo de velocidad para deformación dinámica de la lente
      const dx = newX - mouseRef.current.targetX;
      const dy = newY - mouseRef.current.targetY;
      mouseRef.current.velocity = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current.targetX = newX;
      mouseRef.current.targetY = newY;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    // Partículas de "Conciencia Subconsciente" flotando en el espacio
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
    }> = [];

    const colors = [primaryColor, secondaryColor, accentColor];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        color: colors[i % colors.length],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Physics Interpolation (Ease-out lerp para INP < 200ms)
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.07;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.07;
      mouseRef.current.velocity *= 0.92; // Amortiguación de deformación

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x || width / 2;
      const my = mouseRef.current.y || height / 2;

      // 1. CAPA BASE: Malla de tensión emocional en reposo (Subconsciente atenuado)
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. RENDERIZADO DE PARTÍCULAS
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.restore();
      }

      // 3. CAPA INTERACTIVA: LENTE DE REFRACCIÓN LÍQUIDA (DENTRO DEL CLIP)
      ctx.save();

      // Generar contorno deformado orgánicamente con sinusoide
      const currentRadius =
        lensRadius + Math.min(mouseRef.current.velocity * 0.8, 30);
      ctx.beginPath();
      const points = 60;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave =
          Math.sin(angle * 4 + time * 3) * 6 +
          Math.cos(angle * 3 - time * 2) * 4;
        const r = currentRadius + wave;
        const px = mx + Math.cos(angle) * r;
        const py = my + Math.sin(angle) * r;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.clip(); // Restringir renderizado al interior de la masa orgánica

      // Gradiente metabólico interno denso
      const internalGradient = ctx.createRadialGradient(
        mx - 20,
        my - 20,
        5,
        mx,
        my,
        currentRadius
      );
      internalGradient.addColorStop(0, `${primaryColor}cc`);
      internalGradient.addColorStop(0.5, `${secondaryColor}88`);
      internalGradient.addColorStop(0.85, `${accentColor}44`);
      internalGradient.addColorStop(1, "transparent");

      ctx.fillStyle = internalGradient;
      ctx.fillRect(0, 0, width, height);

      // Anillos de refracción cromática interna
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        const r = (time * 30 + i * 40) % currentRadius;
        ctx.arc(mx, my, r, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0 ? primaryColor : accentColor;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = (1 - r / currentRadius) * 0.7;
        ctx.stroke();
      }

      ctx.restore(); // Fin del clip interno

      // 4. ANILLO CROMÁTICO EXTERIOR (BORDE LÍQUIDO NEÓN)
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wave =
          Math.sin(angle * 4 + time * 3) * 6 +
          Math.cos(angle * 3 - time * 2) * 4;
        const r = currentRadius + wave;
        const px = mx + Math.cos(angle) * r;
        const py = my + Math.sin(angle) * r;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 20;
      ctx.shadowColor = primaryColor;
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [primaryColor, secondaryColor, accentColor, lensRadius]);

  return (
    <div className="w-full h-full relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B132B]/60 backdrop-blur-xl shadow-2xl">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B132B]/80 border border-white/10 backdrop-blur-md">
        <span className="text-[10px] font-mono text-[#FF0055] uppercase tracking-wider block font-bold mb-1">
          Lente de Inspección Gestalt
        </span>
        <p className="font-serif italic text-sm text-white/90">
          Mueve el cursor para explorar el campo de conciencia y desarticular la
          tensión emocional.
        </p>
      </div>
    </div>
  );
};
