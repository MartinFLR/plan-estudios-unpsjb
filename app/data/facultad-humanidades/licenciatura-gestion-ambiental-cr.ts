import { Carrera } from "../../types";

const licenciaturaGestionAmbientalCR: Carrera = {
    nombre: "Licenciatura en Gestión Ambiental",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "GA1", nombre: "Introducción a la Problemática Ambiental", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "GA2", nombre: "Geografía Física I (énfasis geología y geomorfología)", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "GA3", nombre: "Taller de Matemáticas", año: 1, cuatrimestre: 1, correlativas: [] },
        { codigo: "GA4", nombre: "Estadística", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "GA5", nombre: "Fundamentos de Sociología", año: 1, cuatrimestre: 2, correlativas: [] },
        { codigo: "GA6", nombre: "Principios de la Administración", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "GA7", nombre: "Geografía Física II", año: 2, cuatrimestre: 1, correlativas: ["GA4"] },
        { codigo: "GA8", nombre: "Taller de Química", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "GA9", nombre: "Taller de Física", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "GA10", nombre: "Geografía Humana", año: 2, cuatrimestre: 1, correlativas: ["GA1", "GA4"] },
        { codigo: "GA11", nombre: "Introducción a la Biología", año: 2, cuatrimestre: 2, correlativas: ["GA1", "GA8"] },
        { codigo: "GA12", nombre: "Técnicas de Cartografía", año: 2, cuatrimestre: 2, correlativas: ["GA1", "GA3"] },
        { codigo: "GA13", nombre: "Geografía Urbana y Rural", año: 2, cuatrimestre: 2, correlativas: ["GA10"] },

        // TERCER AÑO
        { codigo: "GA14", nombre: "Catastro Territorial", año: 3, cuatrimestre: 1, correlativas: ["GA12", "GA13"] },
        { codigo: "GA15", nombre: "Ecología terrestre", año: 3, cuatrimestre: 1, correlativas: ["GA2", "GA7", "GA8"] },
        { codigo: "GA16", nombre: "Fotointerpretación y Teledetección", año: 3, cuatrimestre: 1, correlativas: ["GA2", "GA12"] },
        { codigo: "GA17", nombre: "Educación Ambiental", año: 3, cuatrimestre: 2, correlativas: ["GA1", "GA10", "GA11"] },
        { codigo: "GA18", nombre: "Economía Ambiental", año: 3, cuatrimestre: 2, correlativas: ["GA2", "GA6", "GA7"] },
        { codigo: "GA19", nombre: "Legislación Ambiental", año: 3, cuatrimestre: 2, correlativas: ["GA15"] },

        // CUARTO AÑO
        { codigo: "GA20", nombre: "Metodología de la Investigación", año: 4, cuatrimestre: 1, correlativas: ["GA2", "GA3", "GA9"] },
        { codigo: "GA21", nombre: "Ecología Acuática", año: 4, cuatrimestre: 1, correlativas: ["GA15"] },
        { codigo: "GA22", nombre: "Recursos Naturales: Uso y Conservación", año: 4, cuatrimestre: 1, correlativas: ["GA15", "GA18"] },
        { codigo: "GA23", nombre: "Evaluación y Estudio de Impacto Ambiental", año: 4, cuatrimestre: 2, correlativas: ["GA15", "GA20"] },
        { codigo: "GA24", nombre: "Seminario Geografía de los Riesgos Naturales", año: 4, cuatrimestre: 2, correlativas: ["GA15"] },
        { codigo: "GA25", nombre: "Seminario Geografía de la Patagonia", año: 4, cuatrimestre: 2, correlativas: ["GA18"] },

        // QUINTO AÑO
        { codigo: "GA26", nombre: "Percepción y Comunicación", año: 5, cuatrimestre: 1, correlativas: ["GA17"] },
        { codigo: "GA27", nombre: "Planeamiento y Gestión", año: 5, cuatrimestre: 0, correlativas: ["GA22", "GA23"] },
        { codigo: "GA28", nombre: "Gestión Social y Política", año: 5, cuatrimestre: 1, correlativas: ["GA23"] },
        { codigo: "GA29", nombre: "Filosofía y medio ambiente", año: 5, cuatrimestre: 2, correlativas: ["GA20"] },
        { codigo: "GA30", nombre: "Auditoría Ambiental", año: 5, cuatrimestre: 2, correlativas: ["GA22", "GA23"] },
        { codigo: "GA31", nombre: "Tesis", año: 5, cuatrimestre: 0, correlativas: ["GA20"] }
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Aprobar un examen escrito de suficiencia en idioma inglés, basado en la comprensión de textos referidos a temáticas ambientales." }
    ]
} satisfies Carrera;

export default licenciaturaGestionAmbientalCR;
