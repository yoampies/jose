import React, { useState } from "react";
import {
  PsycotherapyFormSchema,
  TPsycotherapyFormData,
} from "../../../shared/types/types";

export const PsycotherapyDirectBooking: React.FC = () => {
  const [formData, setFormData] = useState<TPsycotherapyFormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof TPsycotherapyFormData, string>>
  >({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = PsycotherapyFormSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Partial<
        Record<keyof TPsycotherapyFormData, string>
      > = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          formattedErrors[issue.path[0] as keyof TPsycotherapyFormData] =
            issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    const encodedText = encodeURIComponent(
      `Hola Lic. José Ampíes. Mi nombre es ${formData.fullName} (${formData.email}). Motivo de consulta psicoterapéutica: ${formData.message}`
    );
    window.open(`https://wa.me/584242033589?text=${encodedText}`, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0B132B] to-[#10002B] border-t border-white/10">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#FF0055] font-bold uppercase tracking-widest block">
            Contacto Directo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Inicia tu Proceso Terapéutico
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2"
            >
              Nombre Completo
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Ej. María García"
              className="w-full min-h-[48px] px-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/30 transition-all"
            />
            {errors.fullName && (
              <span className="text-xs text-[#FF0055] mt-1 block font-mono">
                {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="correo@ejemplo.com"
              className="w-full min-h-[48px] px-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/30 transition-all"
            />
            {errors.email && (
              <span className="text-xs text-[#FF0055] mt-1 block font-mono">
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-2"
            >
              Motivo de Consulta
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Describe brevemente tus expectativas o motivo de consulta..."
              className="w-full p-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/15 focus:outline-none focus:border-[#FF0055] focus:ring-2 focus:ring-[#FF0055]/30 transition-all resize-none"
            />
            {errors.message && (
              <span className="text-xs text-[#FF0055] mt-1 block font-mono">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full min-h-[52px] py-4 rounded-2xl bg-[#FF0055] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF9E00] hover:text-[#0B132B] transition-all duration-300 shadow-xl shadow-[#FF0055]/25 active:scale-98"
          >
            Enviar Solicitud por WhatsApp Directo
          </button>
        </form>
      </div>
    </section>
  );
};
