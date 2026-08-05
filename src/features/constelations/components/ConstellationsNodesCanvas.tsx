import React, { useRef, useEffect } from "react";
import { NodesCanvasProps } from "../../../shared/types/types";

export const ConstellationsNodesCanvas: React.FC<NodesCanvasProps> = ({
  nodeCount = 35,
  connectionDistance = 130,
  primaryColor = "#9D4EDD",
  secondaryColor = "#FF0055",
  accentColor = "#FF9E00",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Inicialización de Nodos Sistémicos (Integrantes del Árbol Genealógico)
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = [primaryColor, secondaryColor, accentColor, "#FDFBF7"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[i % colors.length],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Renderizar hilos/lazos invisibles entre nodos cercanos
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].color;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();
          }
        }

        // Conexión dinámica con el cursor del usuario
        const mdx = nodes[i].x - mouseRef.current.x;
        const mdy = nodes[i].y - mouseRef.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 160) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = primaryColor;
          ctx.globalAlpha = (1 - mdist / 160) * 0.6;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }
      }

      // 2. Renderizar y actualizar posición de nodos
      for (const node of nodes) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.restore();

        node.x += node.vx;
        node.y += node.vy;

        // Rebote elástico en los bordes del canvas
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [
    nodeCount,
    connectionDistance,
    primaryColor,
    secondaryColor,
    accentColor,
  ]);

  return (
    <div className="w-full h-screen relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Insignia Flotante en la esquina del Canvas */}
      <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B132B]/80 border border-white/10 backdrop-blur-md">
        <span className="text-[10px] font-mono text-[#9D4EDD] uppercase tracking-wider block font-bold mb-1">
          Campo Holográfico
        </span>
        <p className="font-serif italic text-sm text-white/90">
          “Lo que no se expresa en la conciencia, se manifiesta en el sistema
          como destino.”
        </p>
      </div>
    </div>
  );
};
