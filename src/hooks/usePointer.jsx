import { useEffect } from "react";
import { pointerState } from "../lib/scrollStore";

// Alimente pointerState (souris sur desktop, gyroscope sur mobile) pour le
// parallaxe de la scène 3D. N'entraîne aucun re-render.
export function usePointerParallax() {
  useEffect(() => {
    const onMove = (e) => {
      pointerState.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerState.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onOrient = (e) => {
      if (e.gamma == null || e.beta == null) return;
      // gamma : gauche/droite (-90→90), beta : avant/arrière
      pointerState.x = Math.max(-1, Math.min(1, e.gamma / 35));
      pointerState.y = Math.max(-1, Math.min(1, (e.beta - 45) / 35));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("deviceorientation", onOrient, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);
}
