import { z } from "zod";

export const SERVICES_LIST = [
  "psicoterapia",
  "constelaciones",
  "pareja_adicciones",
  "general",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(80, { message: "El nombre no puede exceder 80 caracteres." }),
  email: z
    .string()
    .email({ message: "Introduce un correo electrónico válido." }),
  phone: z.string().optional(),
  service: z.enum(SERVICES_LIST, {
    message: "Selecciona un área de consulta.",
  }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe contener al menos 10 caracteres." })
    .max(1000, { message: "El mensaje no puede superar los 1000 caracteres." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
