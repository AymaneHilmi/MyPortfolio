# Aymane Hilmi · Drone 🚁

Site vitrine pour une activité de **prestataire vidéo drone** : prises de vue
aériennes, FPV cinématique, photo et clips. Pensé **mobile-first** pour la
promotion sur les réseaux sociaux (Instagram, TikTok), avec une scène **3D
interactive** qui réagit au scroll et au mouvement (parallaxe).

> Branche `drone` — refonte complète et indépendante du portfolio principal
> (qui reste sur `main`).

## Stack
- **React 18 + Vite** + **TailwindCSS** (design system sombre cinématique)
- **Three.js** via **@react-three/fiber** + **@react-three/drei** — drone 3D
  procédural (aucun asset externe), hélices animées, éclairage cinématique
- **Lenis** — smooth scroll, qui pilote la trajectoire du drone
- **Framer Motion** — apparitions au scroll, parallaxe, lightbox

## Structure
```
src/
├─ components/
│  ├─ three/        # DroneScene (Canvas) + DroneModel (drone procédural)
│  ├─ sections/     # Hero, Services, Showreel, Equipment, Contact
│  ├─ ui/           # Reveal (apparition au scroll)
│  └─ Navbar.jsx
├─ hooks/           # useSmoothScroll (Lenis), usePointer, useMediaQuery
├─ lib/             # scrollStore (pont scroll ↔ 3D sans re-render), utils
└─ data/content.js  # ⭐ tout le contenu éditable (textes, services, matériel, showreel)
```

## Personnaliser
- **Textes / services / matériel** : `src/data/content.js`
- **Vidéos du showreel** : dépose tes fichiers dans `public/videos/` puis
  renseigne leur `src` dans `content.js` (voir `public/videos/README.md`)
- **Couleurs** : `tailwind.config.js` (accent cyan par défaut)
- **Remplacer le drone procédural** par un vrai modèle `.glb` : voir
  `src/components/three/DroneModel.jsx`

## Démarrer
```bash
npm install --legacy-peer-deps   # peer deps de drei
npm run dev                      # http://localhost:5173
npm run build                    # build de production
```

## Performances mobile
- Scène 3D chargée en **lazy-load** (le contenu s'affiche en premier)
- `dpr` plafonné, hélices simplifiées et drone réduit sur mobile
- Respect de `prefers-reduced-motion` (animation 3D figée)
- Fallback propre si WebGL est indisponible
