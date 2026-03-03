import { Carrera } from "../../types";

const licenciaturaCienciaPolitica: Carrera = {
    nombre: "Licenciatura en Ciencia Política",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Trelew",
    plan: "Resolución MECyT N° 067/03",
    materias: [
        // Primer año
        { codigo: "CP1", nombre: "Ciencia Política", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "CP2", nombre: "Introducción al pensamiento científico", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "CP3", nombre: "Introducción al conocimiento de la sociedad y el estado", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "CP4", nombre: "Sociología", año: 1, cuatrimestre: 2, correlativas: ["CP3"] },
        { codigo: "CP5", nombre: "Antropología", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "CP6", nombre: "Economía", año: 1, cuatrimestre: 2, correlativas: [] },

        // Segundo año
        { codigo: "CP7", nombre: "Teoría Política y Social I", año: 2, cuatrimestre: 1, correlativas: ["CP1"] },
        { codigo: "CP8", nombre: "Filosofía y Métodos de las Ciencias Sociales", año: 2, cuatrimestre: 1, correlativas: ["CP2"] },
        { codigo: "CP9", nombre: "Derecho y sistemas normativos", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "CP10", nombre: "Economía política I", año: 2, cuatrimestre: 2, correlativas: ["CP6"] },
        { codigo: "CP11", nombre: "Historia política contemporánea", año: 2, cuatrimestre: 2, correlativas: [] },
        { codigo: "CP12", nombre: "Teoría política y social II", año: 2, cuatrimestre: 2, correlativas: ["CP7"] },

        // Tercer año
        { codigo: "CP13", nombre: "Economía política II", año: 3, cuatrimestre: 1, correlativas: ["CP10"] },
        { codigo: "CP14", nombre: "Teorías y derecho constitucional", año: 3, cuatrimestre: 1, correlativas: ["CP9"] },
        { codigo: "CP15", nombre: "Teoría política contemporánea", año: 3, cuatrimestre: 2, correlativas: ["CP12"] },
        { codigo: "CP16", nombre: "Sociología política", año: 3, cuatrimestre: 2, correlativas: ["CP4"] },
        { codigo: "CP17", nombre: "Historia política latinoamericana", año: 3, cuatrimestre: 1, correlativas: ["CP11"] },
        { codigo: "CP18", nombre: "Historia política argentina", año: 3, cuatrimestre: 2, correlativas: ["CP17"] },

        // Cuarto año
        { codigo: "CP19", nombre: "Teoría sociológica", año: 4, cuatrimestre: 1, correlativas: ["CP16"] },
        { codigo: "CP20", nombre: "Historia del pensamiento económico", año: 4, cuatrimestre: 2, correlativas: ["CP13"] },
        { codigo: "CP21", nombre: "Técnicas de investigación en ciencias sociales", año: 4, cuatrimestre: 1, correlativas: ["CP8"] },
        { codigo: "CP22", nombre: "Derecho público", año: 4, cuatrimestre: 2, correlativas: ["CP14"] },
        { codigo: "CP23", nombre: "Sistemas políticos comparados", año: 4, cuatrimestre: 1, correlativas: ["CP16"] },
        { codigo: "CP24", nombre: "Filosofía", año: 4, cuatrimestre: 2, correlativas: ["CP8"] },

        // Quinto año
        { codigo: "CP25", nombre: "Derecho administrativo", año: 5, cuatrimestre: 1, correlativas: ["CP22"] },
        { codigo: "CP26", nombre: "Técnicas de investigación avanzada", año: 5, cuatrimestre: 1, correlativas: ["CP21"] },
        { codigo: "CP27", nombre: "Opinión pública", año: 5, cuatrimestre: 1, correlativas: ["CP23"] },
        { codigo: "CP28", nombre: "Actores y procesos políticos", año: 5, cuatrimestre: 2, correlativas: ["CP27"] },
        { codigo: "CP29", nombre: "Psicología política", año: 5, cuatrimestre: 2, correlativas: ["CP27"] },
        { codigo: "CP30", nombre: "Ética", año: 5, cuatrimestre: 2, correlativas: ["CP24"] },
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Prueba de competencia lingüística (inglés, francés, alemán o portugués) al completar la asignatura N° 18" },
    ]
} satisfies Carrera;

export default licenciaturaCienciaPolitica;
