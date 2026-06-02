import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
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

    const ampX = mobile ? 0.7 : 1.7;
    const baseY = mobile ? 1.0 : 0.75; // le drone lévite au-dessus du titre
    const targetX = Math.sin(p * Math.PI * 2.2) * ampX + pointerState.x * 0.6;
    const targetY =
      baseY +
      Math.cos(p * Math.PI * 1.8) * 0.4 +
      Math.sin(t * 0.9) * 0.08 -
      pointerState.y * 0.4;
    const targetZ = -p * 1.6;

    const yaw = t * 0.18 + p * Math.PI * 0.9 + pointerState.x * 0.4;
    const roll = -Math.cos(p * Math.PI * 2.2) * 0.35 - pointerState.x * 0.2;
    const pitch =
      Math.sin(t * 0.7) * 0.05 +
      MathUtils.clamp(scrollState.velocity * 0.015, -0.4, 0.4) +
      pointerState.y * 0.15;

    const k = animate ? 3 : 60;
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
      <ambientLight intensity={1.05} />
      <hemisphereLight args={["#ffffff", "#d7dade", 0.8]} />
      <directionalLight position={[5, 9, 6]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-5, 3, 4]} intensity={0.7} color="#eef1f5" />
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

  if (!supported) {
    return <div className="fixed inset-0 -z-10 bg-paper" />;
  }

  const animate = !reduced;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-paper">
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
          {/* Ombre douce portée → effet photo produit sur fond blanc */}
          <ContactShadows
            position={[0, mobile ? -1.4 : -1.5, 0]}
            opacity={0.32}
            scale={mobile ? 7 : 9}
            blur={2.6}
            far={5}
            resolution={mobile ? 256 : 512}
            color="#16171a"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
