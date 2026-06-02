// Contenu éditable du site. Modifie librement textes, prestations et matériel.

export const SITE = {
  name: "Aymane Hilmi",
  tagline: "Drone",
  role: "Pilote & prestataire vidéo drone",
  hero: {
    kicker: "Prises de vue aériennes",
    title: ["Vos images", "vues d'en haut."],
    subtitle:
      "Vidéo, photo, clips et FPV cinématique. Je capture vos lieux, vos événements et vos projets sous un angle inédit.",
    meta: {
      format: "4K · 48MP · D-LOG",
      gps: "43.6109° N · 3.8772° E",
      exif: "F/2.8 · 1/2000 · ISO 100",
    },
  },
  contact: {
    email: "aymanehilmi1@gmail.com",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
};

export const SERVICES = [
  {
    id: "fpv",
    title: "FPV cinématique",
    desc: "Plans immersifs et dynamiques : traversées, dives, suivis à grande vitesse. L'effet « waouh » pour vos clips et vos lieux.",
    tags: ["Immersif", "Clip", "Indoor / Outdoor"],
  },
  {
    id: "cinema",
    title: "Vidéo cinéma",
    desc: "Plans larges stabilisés en haute qualité avec le DJI Mavic. Idéal pour l'immobilier, le tourisme, les marques et l'événementiel.",
    tags: ["4K / 5.1K", "Stabilisé", "Cinématique"],
  },
  {
    id: "photo",
    title: "Photo aérienne",
    desc: "Photographies aériennes haute résolution, retouchées et livrées prêtes à publier sur vos réseaux ou supports.",
    tags: ["Haute résolution", "Retouche", "Réseaux"],
  },
  {
    id: "event",
    title: "Clip & événementiel",
    desc: "Mariages, concerts, sport, projets de marque : un montage rythmé qui raconte votre histoire vue du ciel.",
    tags: ["Montage", "Mariage", "Sport"],
  },
];

export const EQUIPMENT = [
  {
    id: "fpv",
    name: "Drone FPV",
    type: "Immersion & vitesse",
    specs: ["Vol immersif", "Plans dynamiques", "Caméra embarquée"],
    accent: "Pour les plans nerveux et spectaculaires.",
  },
  {
    id: "mavic",
    name: "DJI Mavic",
    type: "Cinéma aérien",
    specs: ["Vidéo haute qualité", "Stabilisation avancée", "Longue autonomie"],
    accent: "Pour des images larges, nettes et stables.",
  },
  {
    id: "rs3",
    name: "DJI RS 3",
    type: "Stabilisateur sol",
    specs: ["Gimbal 3 axes", "Plans fluides", "Complément au sol"],
    accent: "Pour prolonger l'aérien par des plans au sol parfaitement stables.",
  },
];

// Showreel : remplace ces entrées par tes vraies vidéos.
// `src` peut pointer vers /public/videos/xxx.mp4 — laissé vide = carte « bientôt ».
export const SHOWREEL = [
  { id: 1, title: "Survol urbain", category: "Cinéma · 4K", src: "" },
  { id: 2, title: "Dive FPV", category: "FPV · Immersif", src: "" },
  { id: 3, title: "Côte & nature", category: "Tourisme", src: "" },
  { id: 4, title: "Événement", category: "Mariage", src: "" },
  { id: 5, title: "Immobilier", category: "Marque", src: "" },
  { id: 6, title: "Sport", category: "Action", src: "" },
];
