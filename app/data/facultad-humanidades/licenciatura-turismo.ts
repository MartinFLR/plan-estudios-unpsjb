import { Carrera } from "../../types";

const licenciaturaTurismo: Carrera = {
    nombre: "Licenciatura en Turismo",
    facultad: "Facultad de Humanidades",
    sede: "Sedes Comodoro Rivadavia y Puerto Madryn",
    plan: "S/D",
    materias: [
        // Primer año
        { codigo: "TU1", nombre: "Introducción al Turismo", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU2", nombre: "Geografía Física", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU3", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU4", nombre: "Epistemología", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU5", nombre: "Seminario Introducción a las Prácticas Profesionales", año: 1, cuatrimestre: 0, correlativas: [] },

        // Segundo año
        { codigo: "TU6", nombre: "Servicios Turísticos. Transporte", año: 2, cuatrimestre: 0, correlativas: ["TU1"] },
        { codigo: "TU7", nombre: "Servicios Turísticos. Alojamiento", año: 2, cuatrimestre: 0, correlativas: ["TU1"] },
        { codigo: "TU8", nombre: "Ecología y Conservación", año: 2, cuatrimestre: 1, correlativas: ["TU2"] },
        { codigo: "TU9", nombre: "Psicología Social", año: 2, cuatrimestre: 1, correlativas: ["TU3"] },
        { codigo: "TU10", nombre: "Parques Nacionales", año: 2, cuatrimestre: 2, correlativas: ["TU2", "TU8"] },
        { codigo: "TU11", nombre: "Geografía Humana", año: 2, cuatrimestre: 2, correlativas: ["TU2"] },
        { codigo: "TU12", nombre: "Historia Social Argentina", año: 2, cuatrimestre: 0, correlativas: ["TU3"] },
        { codigo: "TU13", nombre: "Práctica Profesional I", año: 2, cuatrimestre: 0, correlativas: ["TU1", "TU5"] },

        // Tercer año
        { codigo: "TU14", nombre: "Servicios Turísticos. Agencias de Viajes", año: 3, cuatrimestre: 0, correlativas: ["TU1"] },
        { codigo: "TU15", nombre: "Psicosociología de los Grupos y de las Instituciones", año: 3, cuatrimestre: 0, correlativas: ["TU9"] },
        { codigo: "TU16", nombre: "Patrimonio Cultural", año: 3, cuatrimestre: 1, correlativas: ["TU12"] },
        { codigo: "TU17", nombre: "Metodología de la Investigación Social", año: 3, cuatrimestre: 0, correlativas: ["TU4"] },
        { codigo: "TU18", nombre: "Recursos Jurídicos", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "TU19", nombre: "Teoría de la Administración", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "TU20", nombre: "Práctica Profesional II", año: 3, cuatrimestre: 0, correlativas: ["TU6", "TU7", "TU13"] },

        // Cuarto año
        { codigo: "TU21", nombre: "Administración de Empresas Turísticas", año: 4, cuatrimestre: 2, correlativas: ["TU19"] },
        { codigo: "TU22", nombre: "Economía", año: 4, cuatrimestre: 1, correlativas: [] },
        { codigo: "TU23", nombre: "Antropología Cultural", año: 4, cuatrimestre: 0, correlativas: ["TU3"] },
        { codigo: "TU24", nombre: "Política Turística", año: 4, cuatrimestre: 0, correlativas: ["TU1", "TU3"] },
        { codigo: "TU25", nombre: "Historia Americana", año: 4, cuatrimestre: 0, correlativas: ["TU12"] },
        { codigo: "TU26", nombre: "Práctica Profesional III", año: 4, cuatrimestre: 0, correlativas: ["TU14", "TU20"] },

        // Quinto año
        { codigo: "TU27", nombre: "Planificación Turística", año: 5, cuatrimestre: 0, correlativas: ["TU1", "TU17"] },
        { codigo: "TU28", nombre: "Investigación Turística", año: 5, cuatrimestre: 0, correlativas: ["TU17"] },
        { codigo: "TU29", nombre: "Práctica Profesional IV", año: 5, cuatrimestre: 0, correlativas: ["TU26"] },
        { codigo: "TU30", nombre: "Seminario Optativo I", año: 5, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU31", nombre: "Seminario Optativo II", año: 5, cuatrimestre: 0, correlativas: [] },
        { codigo: "TU32", nombre: "Tesis de Grado", año: 5, cuatrimestre: 0, correlativas: [] },
    ],
    requisitos: [
        { codigo: "IDIOMA1", nombre: "Prueba de idioma (Inglés) - Nivel de traducción y conversación (al finalizar 3er año)" },
        { codigo: "IDIOMA2", nombre: "Prueba de idioma a elección - Nivel II de traducción y conversación (para completar estudios)" },
    ]
} satisfies Carrera;

export default licenciaturaTurismo;
