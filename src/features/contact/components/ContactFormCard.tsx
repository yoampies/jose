import React, { useState } from "react";
import { contactFormSchema, ContactFormData } from "../schema/contactSchema";

export const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "psicoterapia",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpieza dinámica de error al escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> =
        {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          formattedErrors[issue.path[0] as keyof ContactFormData] =
            issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío seguro con timeout (reemplazable por Endpoint API Next.js)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Redirección directa a WhatsApp con payload estructurado
      const waMessage = encodeURIComponent(
        `Hola Lic. José Ampíes,\nSoy ${formData.name}.\nConsulta sobre: ${formData.service}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`
      );
      window.open(`https://wa.me/584242033589?text=${waMessage}`, "_blank");
    }, 800);
  };

  return (
    <div className="w-full max-w-xl p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
      <div className="space-y-2 text-left">
        <span className="text-xs font-mono text-[#FF9E00] font-bold uppercase tracking-widest">
          Consulta & Agendamiento
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Inicia tu Proceso
        </h2>
        <p className="text-sm text-white/70 font-sans">
          Escribe un mensaje directo o agenda tu primera sesión diagnóstica.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-6 rounded-2xl bg-[#9D4EDD]/20 border border-[#9D4EDD]/40 text-center space-y-3">
          <span className="text-2xl">✓</span>
          <h3 className="font-serif text-xl font-bold text-white">
            ¡Mensaje Redirigido!
          </h3>
          <p className="text-xs text-white/80 font-mono">
            Se ha abierto tu aplicación de WhatsApp para confirmar el
            agendamiento.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Campo: Nombre Completo */}
          <div className="space-y-1 text-left">
            <label
              htmlFor="name"
              className="text-xs font-mono text-white/80 uppercase tracking-wider block"
            >
              Nombre Completo *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej. Carlos Mendoza"
              className={`w-full min-h-[48px] px-4 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? "border-[#FF0055] focus:ring-[#FF0055]"
                  : "border-white/10 focus:ring-[#FF9E00]"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] font-mono text-[#FF0055] mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Grid: Correo y Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <label
                htmlFor="email"
                className="text-xs font-mono text-white/80 uppercase tracking-wider block"
              >
                Correo Electrónico *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className={`w-full min-h-[48px] px-4 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-[#FF0055] focus:ring-[#FF0055]"
                    : "border-white/10 focus:ring-[#FF9E00]"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] font-mono text-[#FF0055] mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-1 text-left">
              <label
                htmlFor="service"
                className="text-xs font-mono text-white/80 uppercase tracking-wider block"
              >
                Área de Interés *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full min-h-[48px] px-4 rounded-xl bg-[#0B132B] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9E00] transition-all cursor-pointer"
              >
                <option value="psicoterapia">Psicoterapia Gestalt</option>
                <option value="constelaciones">
                  Constelaciones Familiares
                </option>
                <option value="pareja_adicciones">
                  Terapia de Pareja / Adicciones
                </option>
                <option value="general">Consulta General</option>
              </select>
            </div>
          </div>

          {/* Campo: Mensaje */}
          <div className="space-y-1 text-left">
            <label
              htmlFor="message"
              className="text-xs font-mono text-white/80 uppercase tracking-wider block"
            >
              Motivo de Consulta *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe brevemente el motivo de tu consulta o disponibilidad de horario..."
              className={`w-full p-4 rounded-xl bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.message
                  ? "border-[#FF0055] focus:ring-[#FF0055]"
                  : "border-white/10 focus:ring-[#FF9E00]"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] font-mono text-[#FF0055] mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Botón CTA Primario con Touch Target >= 44px */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[52px] px-8 rounded-full bg-[#FF0055] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FF9E00] hover:text-[#0B132B] transition-all duration-300 shadow-xl shadow-[#FF0055]/25 flex items-center justify-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0055] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Procesando...</span>
            ) : (
              <>
                <span>Enviar y Conectar WhatsApp</span>
                <span>&rarr;</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
