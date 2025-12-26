import { IArticle, IService } from '../types';
import home_therapy from '../assets/home_therapy.jpg';
import individual from "../assets/psicoterapia_servicio-al-cliente.svg";
import family from "../assets/psicoterapia_familia.svg";
import couple from "../assets/psicoterapia_pareja.svg";
import child from "../assets/psicoterapia_recreo.svg";
import addiction from "../assets/psicoterapia_dolor.svg";
import behavior from "../assets/psicoterapia_decision.svg";

export const articles: IArticle[] = [
    {
        id: 1,
        img: home_therapy,
        title: "El poder de la mente: Descubre cómo transformar tus emociones.",
        author: "José Ampíes",
        date: "02/05/2024",
        description: "Aprende a navegar la vida y sus inevitables sorpresas.",
    },
    {
        id: 2,
        img: home_therapy,
        title: "Sanando las raíces: Descubre cómo las dinámicas familiares influyen en tu vida.",
        author: "José Ampíes",
        date: "30/11/2020",
        description: "Sana heridas del pasado con constelaciones familiares.",

    },
    {
        id: 3,
        img: home_therapy,
        title: "El poder de la mente: Descubre cómo transformar tus emociones.",
        author: "José Ampíes",
        date: "30/11/2020",
        description: "Aprende a navegar la vida y sus inevitables sorpresas.",
    }
];

export const services: IService[] = [
    { 
        title: "Terapia Individual", 
        img: individual 
    },
    { 
        title: "Terapia Familiar", 
        img: family 
    },
    {
        title: "Terapia de Pareja", 
        img: couple 
    },
    { 
        title: "Terapia de Niños", 
        img: child 
    },
    { 
        title: "Terapia de Adicciones", 
        img: addiction 
    },
    { 
        title: "Terapia Cognitiva y Conductual", 
        img: behavior 
    },
]