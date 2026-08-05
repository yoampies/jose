import { z } from "zod";

export interface FluidCanvasProps {
  readonly primaryColor?: string; // #FF0055
  readonly secondaryColor?: string; // #9D4EDD
  readonly accentColor?: string; // #FF9E00
  readonly speed?: number;
}

export interface TimelineStepItem {
  readonly number: string;
  readonly title: string;
  readonly tag: string;
  readonly description: string;
  readonly detail: string;
}

export interface SplitShowcaseItem {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly image: string;
  readonly quote: string;
}

export const PsycotherapyFormSchema = z.object({
  fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  message: z
    .string()
    .min(
      10,
      "Cuéntame brevemente tu motivo de consulta (mínimo 10 caracteres)"
    ),
});

export type TPsycotherapyFormData = z.infer<typeof PsycotherapyFormSchema>;

export interface PsycotherapyHeroProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly onExploreClick: () => void;
}

export interface ServiceCardProps {
  readonly title: string;
  readonly img: string;
  readonly index: number;
}

export interface IServiceItem {
  readonly id: string;
  readonly title: string;
  readonly badge: string;
  readonly tag: string;
  readonly img: string;
  readonly description: string;
  readonly colorAccent: string;
  readonly bgGradient: string;
}

export interface ServiceCardProps {
  readonly service: IServiceItem;
  readonly index: number;
}

export interface IArticle {
  id: number;
  img: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

export interface IService {
  title: string;
  img: string;
}

export interface ICircle {
  size: string;
  color: string;
  left: string;
  top: string;
}

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

export interface BackgroundCirclesProps {
  circles: ICircle[];
}

export interface HypnoticCanvasProps {
  words?: string[];
  primaryColor?: string;
  secondaryColor?: string;
  opacity?: number;
}

export interface NavLinkItem {
  readonly path: string;
  readonly label: string;
  readonly badge?: string;
}

export interface NavbarProps {
  readonly currentPath?: string;
  readonly onScheduleClick?: () => void;
}

export interface FooterProps {
  readonly doctorName?: string;
  readonly email?: string;
  readonly phone?: string;
}

export interface ConstellationNodeCanvasProps {
  readonly nodeCount?: number;
  readonly connectionDistance?: number;
  readonly primaryColor?: string; // #9D4EDD
  readonly secondaryColor?: string; // #FF0055
}

export interface SystemicPhilosophyItem {
  readonly orderNumber: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly tag: string;
}

export interface SystemicBenefitItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly iconImg: string;
  readonly bgGradient: string;
}

export interface HeroBaseProps {
  readonly onExploreClick: () => void;
}

export interface LensCanvasProps {
  readonly overlayImage: string;
  readonly primaryColor?: string; // #FF0055
  readonly secondaryColor?: string; // #FF9E00
}

export interface OrbitalCanvasProps {
  readonly particleCount?: number;
  readonly primaryColor?: string; // #9D4EDD
  readonly accentColor?: string; // #FF0055
}

export interface ConstellationsHeroProps {
  readonly onExploreClick: () => void;
}

export interface NodesCanvasProps {
  readonly nodeCount?: number;
  readonly connectionDistance?: number;
  readonly primaryColor?: string; // Default: #9D4EDD
  readonly secondaryColor?: string; // Default: #FF0055
  readonly accentColor?: string; // Default: #FF9E00
}

export interface RefractionLensCanvasProps {
  readonly primaryColor?: string; // Default: #FF0055 (Magenta Neón)
  readonly secondaryColor?: string; // Default: #9D4EDD (Púrpura Vibrante)
  readonly accentColor?: string; // Default: #FF9E00 (Ámbar Cálido)
  readonly lensRadius?: number; // Default: 160
}
