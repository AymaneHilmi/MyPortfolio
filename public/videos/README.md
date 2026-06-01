# Vidéos du showreel

Dépose ici tes vidéos drone (format .mp4 recommandé, H.264, < 15 Mo idéalement
pour le web). Ensuite, renseigne leur chemin dans `src/data/content.js` :

```js
export const SHOWREEL = [
  { id: 1, title: "Survol urbain", category: "Cinéma · 4K", src: "/videos/survol.mp4", poster: "/videos/survol.jpg" },
  ...
];
```

- `src`    : chemin de la vidéo (obligatoire pour activer la lecture)
- `poster` : image d'aperçu (optionnel mais recommandé)

Astuce : exporte des vidéos verticales (9:16) ou carrées pour un rendu
optimal sur mobile / réseaux sociaux.
