/**
 * Imágenes reales de la Dra. Melida Aguilar Chamorro.
 * Fotos propiedad de la doctora — uso autorizado para el sitio oficial.
 */
export const doctorImages = {
  selfie: "/images/doctora/dra-quirofano-selfie.png",
  mascarilla: "/images/doctora/dra-quirofano-mascarilla.png",
  cirugiaEquipo: "/images/doctora/dra-cirugia-equipo.png",
  cirugiaLamparas: "/images/doctora/dra-cirugia-lamparas.png",
  cirugiaProcedimiento: "/images/doctora/dra-cirugia-procedimiento.png",
  consultorioEquipo: "/images/doctora/dra-consultorio-equipo.png",
} as const;

export type DoctorImageKey = keyof typeof doctorImages;
