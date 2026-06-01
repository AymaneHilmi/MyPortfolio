import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import DroneModel from "./DroneModel";
import { scrollState, pointerState } from "../../lib/scrollStore";
import { useIsMobile, usePrefersReducedMotion } from "../../hooks/useMediaQuery";

// Vérifie le support WebGL pour proposer un fallback propre.
function webglSupported() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

// Pilote la position / l'inclinaison du drone à partir du scroll et du pointeur.
function Rig({ mobile, animate }) {
  const group = useRef();
  const clock = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    const d = Math.min(delta, 0.05);
    clock.current += d;
    const t = clock.current;
    const p = scrollState.progress;

    // Trajectoire : le drone slalome doucement au fil du scroll
    const ampX = mobile ? 0.7 : 1.7;
    const baseY = mobile ? 1.05 : 0.8; // le drone lévite au-dessus du titre
    const targetX = Math.sin(p * Math.PI * 2.2) * ampX + pointerState.x * 0.6;
    const targetY =
      baseY +
      Math.cos(p * Math.PI * 1.8) * 0.4 +
      Math.sin(t * 0.9) * 0.08 -
      pointerState.y * 0.4;
    const targetZ = -p * 1.6;

    // Inclinaisons (banking) liées à la trajectoire + parallaxe pointeur
    const yaw = t * 0.18 + p * Math.PI * 0.9 + pointerState.x * 0.4;
    const roll = -Math.cos(p * Math.PI * 2.2) * 0.35 - pointerState.x * 0.2;
    const pitch =
      Math.sin(t * 0.7) * 0.05 +
      MathUtils.clamp(scrollState.velocity * 0.015, -0.4, 0.4) +
      pointerState.y * 0.15;

    const k = animate ? 3 : 60; // amorti
    group.current.position.x = MathUtils.damp(group.current.position.x, targetX, k, d);
    group.current.position.y = MathUtils.damp(group.current.position.y, targetY, k, d);
    group.current.position.z = MathUtils.damp(group.current.position.z, targetZ, k, d);
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, yaw, k, d);
    group.current.rotation.z = MathUtils.damp(group.current.rotation.z, roll, k, d);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, pitch, k, d);
  });

  return (
    <group ref={group} scale={mobile ? 0.78 : 1}>
      <DroneModel mobile={mobile} />
    </group>
  );
}

function Lights() {
  return (
    <>
      <hemisphereLight args={["#2a3550", "#04060a", 1.1]} />
      <directionalLight position={[5, 8, 6]} intensity={2.6} color="#eaf6ff" />
      <pointLight position={[-4, -1, 3]} intensity={22} color="#22d3ee" distance={14} />
      <pointLight position={[3, 2, 4]} intensity={9} color="#cfeaff" distance={16} />
    </>
  );
}

export default function DroneScene() {
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(webglSupported());
  }, []);

  // Fallback élégant si WebGL indisponible
  if (!supported) {
    return (
      <div className="fixed inset-0 -z-10 bg-ink">
        <div className="absolute inset-0 bg-radial-glow" />
      </div>
    );
  }

  const animate = !reduced;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-radial-glow" />
      <Canvas
        dpr={mobile ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0.4, 5.2], fov: mobile ? 44 : 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={animate ? "always" : "demand"}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Rig mobile={mobile} animate={animate} />
        </Suspense>
      </Canvas>
    </div>
  );
}
