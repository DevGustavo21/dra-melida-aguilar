import { doctorImages } from "./images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  icon: string;
  imagePosition?: "top" | "center" | "bottom";
};

export const services: Service[] = [
  {
    slug: "consulta-general",
    title: "Consulta para hombres y mujeres",
    short:
      "Atención urológica integral para todas las etapas de la vida con un trato cercano y humano.",
    description:
      "Realizamos evaluaciones completas del sistema urinario para pacientes de todas las edades y géneros, identificamos problemas de salud desde etapas tempranas y diseñamos planes de tratamiento adaptados a cada persona. La consulta incluye anamnesis detallada, examen físico orientado y orientación sobre hábitos saludables para la salud urológica.",
    highlights: [
      "Evaluación clínica especializada",
      "Educación y prevención",
      "Plan terapéutico individual",
    ],
    image: doctorImages.consultorioEquipo,
    imageAlt:
      "Dra. Melida Aguilar junto a su equipo en el consultorio de urología",
    icon: "stethoscope",
    imagePosition: "center",
  },
  {
    slug: "deteccion-oncologica",
    title: "Detección y tratamiento de cánceres urológicos",
    short:
      "Detección temprana y manejo integral del cáncer de próstata, riñón, vejiga y testículo.",
    description:
      "Especialización en el diagnóstico y tratamiento del cáncer de próstata, riñón, vejiga y testículo. Utilizamos métodos de detección avanzados para identificar signos de alerta a tiempo, mejorando significativamente las posibilidades de éxito terapéutico. El programa incluye tu seguimiento clínico, terapias cuando es necesario y coordinación con oncólogos para tratamiento multidisciplinario.",
    highlights: [
      "Tamizaje y diagnóstico temprano",
      "Cirugía oncológica especializada",
      "Manejo multidisciplinario",
    ],
    image: doctorImages.cirugiaProcedimiento,
    imageAlt:
      "Dra. Aguilar y equipo médico durante un procedimiento quirúrgico oncológico",
    icon: "microscope",
    imagePosition: "center",
  },
  {
    slug: "cirugia-minimamente-invasiva",
    title: "Cirugía Mínimamente Invasiva",
    short:
      "Procedimientos laparoscópicos y endoscópicos con menos dolor y recuperación más rápida.",
    description:
      "Procedimientos quirúrgicos por laparoscopia que minimizan el trauma corporal, reducen el dolor postoperatorio y aceleran la recuperación. Incluye técnicas laparoscópicas y endoscópicas para tratar condiciones urológicas complejas como cálculos renales, obstrucciones ureterales y tumores. Menos dolor, menos cicatrices y recuperación más rápida.",
    highlights: [
      "Laparoscopía avanzada",
      "Endoscopía urológica",
      "Recuperación acelerada",
    ],
    image: doctorImages.cirugiaEquipo,
    imageAlt:
      "Equipo quirúrgico liderado por la Dra. Aguilar realizando cirugía mínimamente invasiva",
    icon: "syringe",
    imagePosition: "center",
  },
  {
    slug: "trastornos-tracto-urinario",
    title: "Trastornos del Tracto Urinario",
    short:
      "Manejo de infecciones, incontinencia, vejiga hiperactiva y otros trastornos urinarios.",
    description:
      "Tratamos integralmente infecciones urinarias recurrentes, cálculos renales, incontinencia urinaria, vejiga hiperactiva y otras condiciones que afectan en tracto urinario. Brindamos terapias personalizadas, combinando tratamiento médico, cambios de estilo de vida y, cuando es necesario, intervenciones mínimamente invasivas.",
    highlights: [
      "Manejo de cálculos renales",
      "Incontinencia urinaria",
      "Infecciones recurrentes",
    ],
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Doctor explicando tratamiento urológico a paciente masculino",
    icon: "droplet",
  },
  {
    slug: "enfermedades-transmision-sexual",
    title: "Enfermedades de transmisión sexual",
    short:
      "Diagnóstico confidencial y tratamiento efectivo de todas las ETS con discreción y respeto.",
    description:
      "Diagnóstico confidencial y tratamiento efectivo de todas las enfermedades de transmisión sexual. Ofrecemos pruebas de detección actualizadas, consejería de salud sexual integral y seguimiento médico completo en un ambiente de respeto, privacidad y juicio. El tratamiento se adapta al tipo de infección y a las condiciones específicas de cada paciente.",
    highlights: [
      "Pruebas confidenciales",
      "Tratamiento personalizado",
      "Consejería integral",
    ],
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Consultorio confidencial para evaluación de ETS",
    icon: "shield",
  },
  {
    slug: "vasectomia",
    title: "Vasectomía",
    short:
      "Procedimiento ambulatorio seguro y definitivo para la planificación familiar masculina.",
    description:
      "Procedimiento quirúrgico seguro, rápido y efectivo para la planificación familiar masculina. Realizado con técnicas modernas que garantizan la mínima incomodidad, una recuperación rápida y resultados duraderos. Ofrecemos asesoramiento completo antes del procedimiento y un seguimiento postoperatorio cuidadoso para garantizar una recuperación óptima.",
    highlights: [
      "Procedimiento ambulatorio",
      "Sin cortes profundos",
      "Recuperación rápida",
    ],
    image: doctorImages.mascarilla,
    imageAlt: "Dra. Melida Aguilar preparada en quirófano para procedimiento ambulatorio",
    icon: "scissors",
    imagePosition: "center",
  },
  {
    slug: "chequeo-prostatico",
    title: "Chequeo Prostático",
    short:
      "Evaluación preventiva completa para hombres mayores de 40 años o con antecedentes familiares.",
    description:
      "Evaluación preventiva y diagnóstico completo de la salud prostática. Incluye examen físico digital, análisis de antígeno prostático específico (PSA) y otros estudios necesarios para detectar a tiempo cualquier anomalía. Recomendado especialmente para hombres mayores de 40 años o aquellos con antecedentes familiares de cáncer de próstata.",
    highlights: [
      "Examen físico digital",
      "Análisis de PSA",
      "Recomendaciones personalizadas",
    ],
    image: doctorImages.selfie,
    imageAlt:
      "Dra. Melida Aguilar en quirófano lista para una evaluación clínica",
    icon: "heart-pulse",
    imagePosition: "top",
  },
];

export type Pkg = {
  id: "basico" | "completo" | "premium";
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  badge?: string;
};

export const packages: Pkg[] = [
  {
    id: "basico",
    name: "Básico",
    price: 1100,
    currency: "C$",
    description: "Ideal para consultas iniciales y chequeos básicos.",
    features: [
      "Consulta general urológica",
      "Chequeo Prostático o ETS",
      "Recomendaciones personalizadas",
      "1 seguimiento telefónico",
    ],
    ctaLabel: "Seleccionar",
  },
  {
    id: "completo",
    name: "Completo",
    price: 2900,
    currency: "C$",
    description: "El más elegido por nuestros pacientes. Valor integral.",
    features: [
      "Consulta general urológica",
      "2 estudios o procedimientos menores",
      "Seguimiento post-consulta",
      "Recomendaciones personalizadas",
      "2 seguimientos telefónicos",
      "Prioridad en agendamiento",
    ],
    highlighted: true,
    badge: "Más Popular",
    ctaLabel: "Agendar ahora",
  },
  {
    id: "premium",
    name: "Premium",
    price: 7500,
    currency: "C$",
    description: "Evaluación integral y tratamiento avanzado.",
    features: [
      "Evaluación integral completa",
      "Detección oncológica avanzada",
      "Cirugía mínimamente invasiva dirigida",
      "Seguimiento continuo mensual",
      "Atención prioritaria 24/7",
      "Coordinación con especialistas",
    ],
    ctaLabel: "Seleccionar",
  },
];

export type ComparisonRow = {
  feature: string;
  basico: boolean;
  completo: boolean;
  premium: boolean;
};

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Consulta general urológica",
    basico: true,
    completo: true,
    premium: true,
  },
  {
    feature: "Chequeo Prostático o ETS",
    basico: true,
    completo: true,
    premium: true,
  },
  {
    feature: "2 estudios/procedimientos menores",
    basico: false,
    completo: true,
    premium: true,
  },
  {
    feature: "Seguimiento post-consulta",
    basico: false,
    completo: true,
    premium: true,
  },
  {
    feature: "Detección oncológica",
    basico: false,
    completo: false,
    premium: true,
  },
  {
    feature: "Cirugía mínimamente invasiva",
    basico: false,
    completo: false,
    premium: true,
  },
  {
    feature: "Seguimiento continuo",
    basico: false,
    completo: false,
    premium: true,
  },
  {
    feature: "Atención prioritaria",
    basico: false,
    completo: false,
    premium: true,
  },
];

export type Testimonial = {
  name: string;
  context: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    context: "Paciente · Managua",
    quote:
      "La atención de la Dra. Melida fue excepcional. Me explicó todo con paciencia y el tratamiento funcionó desde la primera semana. Recomiendo totalmente su consulta.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    context: "Paciente · Granada",
    quote:
      "Excelente profesional. Realizé mi chequeo prostático con total confianza y discreción. Su trato humano y conocimiento médico hacen la diferencia.",
    rating: 5,
  },
  {
    name: "Andrea L.",
    context: "Paciente · Managua",
    quote:
      "Como mujer me sentí muy cómoda en la consulta. La doctora es muy clara explicando y siempre prioriza tu bienestar. Una doctora en la que se puede confiar.",
    rating: 5,
  },
];

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 2, label: "Ciudades de atención" },
  { value: 7, label: "Especialidades urológicas" },
  { value: 100, suffix: "%", label: "Satisfacción del paciente" },
];

export type Value = {
  title: string;
  description: string;
  icon: string;
};

export const values: Value[] = [
  {
    title: "Experiencia",
    description: "Más de 10 años de práctica médica urológica en Nicaragua.",
    icon: "award",
  },
  {
    title: "Confianza",
    description:
      "Relación médico-paciente basada en honestidad y respeto mutuo.",
    icon: "handshake",
  },
  {
    title: "Innovación",
    description: "Uso de técnicas y tecnología médica actualizadas.",
    icon: "lightbulb",
  },
  {
    title: "Compromiso",
    description: "Dedicación total a la salud y bienestar de cada paciente.",
    icon: "heart",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "Inicio de práctica médica",
    description: "Comienza la práctica profesional en consulta en Managua, Nicaragua.",
  },
  {
    year: "2018",
    title: "Especialización avanzada",
    description: "Subespecialización en cirugía mínimamente invasiva y técnicas modernas.",
  },
  {
    year: "2020",
    title: "Expansión a Granada",
    description: "Apertura de segunda consulta en Granada para atender más pacientes.",
  },
  {
    year: "2023",
    title: "Reconocimiento local",
    description: "Cientos de pacientes satisfechos en ambas ciudades.",
  },
  {
    year: "2026",
    title: "Liderazgo urológico",
    description: "Posicionada como referente en urología del país.",
  },
];
