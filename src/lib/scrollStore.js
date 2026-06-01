// Store mutable partagé entre le scroll de la page et la scène 3D (R3F).
// On évite volontairement le state React : la scène lit ces valeurs dans
// useFrame, sans déclencher de re-render — essentiel pour la fluidité mobile.

export const scrollState = {
  progress: 0, // progression de scroll de la page entière, 0 → 1
  velocity: 0, // vitesse de scroll (signée) fournie par Lenis
};

export const pointerState = {
  x: 0, // -1 → 1 (centre = 0)
  y: 0, // -1 → 1 (centre = 0)
};
