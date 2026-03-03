import { Carrera } from "../../types";

const licenciaturaTrabajoSocialCR: Carrera = {
    nombre: "Licenciatura en Trabajo Social",
    facultad: "Facultad de Humanidades",
    sede: "Sede Comodoro Rivadavia",
    plan: "S/D",
    materias: [
        // PRIMER AÑO
        { codigo: "TS1", nombre: "Trabajo Social I", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS2", nombre: "Sociología", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS3", nombre: "Filosofía", año: 1, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS4", nombre: "Psicología General", año: 1, cuatrimestre: 2, correlativas: [] },

        // SEGUNDO AÑO
        { codigo: "TS5", nombre: "Metodología de la Invest. Social", año: 2, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS6", nombre: "Trabajo Social II", año: 2, cuatrimestre: 0, correlativas: ["TS1"] },
        { codigo: "TS7", nombre: "Psicología Evolutiva", año: 2, cuatrimestre: 0, correlativas: ["TS4"] },
        { codigo: "TS8", nombre: "Sociología Política", año: 2, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS9", nombre: "Instituciones Jurídicas de Familia", año: 2, cuatrimestre: 1, correlativas: [] },
        { codigo: "TS10", nombre: "Trabajo y Previsión Social", año: 2, cuatrimestre: 2, correlativas: [] },

        // TERCER AÑO
        { codigo: "TS11", nombre: "Trabajo Social III", año: 3, cuatrimestre: 0, correlativas: ["TS6"] },
        { codigo: "TS12", nombre: "Psicología Social", año: 3, cuatrimestre: 0, correlativas: ["TS7"] },
        { codigo: "TS13", nombre: "Estadística Aplicada a la Investigación Social", año: 3, cuatrimestre: 0, correlativas: ["TS5"] },
        { codigo: "TS14", nombre: "Economía Política", año: 3, cuatrimestre: 1, correlativas: [] },
        { codigo: "TS15", nombre: "Taller de cooperación y autogestión", año: 3, cuatrimestre: 2, correlativas: [] },
        { codigo: "TS16", nombre: "Antropología Cultural", año: 3, cuatrimestre: 1, correlativas: [] },

        // CUARTO AÑO
        { codigo: "TS17", nombre: "Trabajo Social IV", año: 4, cuatrimestre: 0, correlativas: ["TS11"] },
        { codigo: "TS18", nombre: "Planificación Social", año: 4, cuatrimestre: 2, correlativas: ["TS14"] },
        { codigo: "TS19", nombre: "Política Social", año: 4, cuatrimestre: 0, correlativas: [] },
        { codigo: "TS20", nombre: "Administración de proyectos", año: 4, cuatrimestre: 2, correlativas: ["TS14"] },
        { codigo: "TS21", nombre: "Seminario: s/ Patagonia", año: 4, cuatrimestre: 1, correlativas: [] },

        // QUINTO AÑO
        { codigo: "TS22", nombre: "Seminario Trabajo Social", año: 5, cuatrimestre: 0, correlativas: ["TS17", "TS18", "TS19", "TS20"] },
        { codigo: "TS23", nombre: "Salud Mental", año: 5, cuatrimestre: 1, correlativas: ["TS12"] },
        { codigo: "TS24", nombre: "Derecho Social", año: 5, cuatrimestre: 2, correlativas: [] }
    ],
    requisitos: [
        { codigo: "IDIOMA", nombre: "Prueba de competencia en lengua extranjera moderna (Portugués)" },
        { codigo: "TESINA", nombre: "Elaboración y defensa de una TESINA (Promoción del Seminario de Trabajo Social)" }
    ]
} satisfies Carrera;

export default licenciaturaTrabajoSocialCR;
