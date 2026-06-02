import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

// Un seul moteur + ses hélices, placé à un coin du châssis.
function Motor({ position, spin = 1, mobile }) {
  const rotor = useRef();
  const blades = mobile ? 2 : 3;

  useFrame((_, delta) => {
    if (rotor.current) rotor.current.rotation.y += delta * 30 * spin;
  });

  return (
    <group position={position}>
      {/* Pod moteur */}
      <mesh castShadow>
        <cylinderGeometry args={[0.13, 0.15, 0.22, 18]} />
        <meshStandardMaterial color="#2c2e33" metalness={0.55} roughness={0.45} />
      </mesh>
      {/* Bague métallique discrète */}
      <mesh position={[0, 0.12, 0]}>
        <torusGeometry args={[0.14, 0.012, 8, 28]} />
        <meshStandardMaterial color="#4a4d54" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Hélices */}
      <group ref={rotor} position={[0, 0.17, 0]}>
        {Array.from({ length: blades }).map((_, i) => (
          <mesh
            key={i}
            rotation={[0, (i * Math.PI * 2) / blades, 0]}
            position={[0.16, 0, 0]}
            castShadow
          >
            <boxGeometry args={[0.34, 0.006, 0.05]} />
            <meshStandardMaterial
              color="#3a3d42"
              transparent
              opacity={0.5}
              metalness={0.2}
              roughness={0.6}
            />
          </mesh>
        ))}
        {/* Moyeu */}
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.05, 10]} />
          <meshStandardMaterial color="#1c1d20" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

// Bras reliant le châssis à un moteur.
function Arm({ angle }) {
  return (
    <group rotation={[0, angle, 0]}>
      <mesh position={[0.42, -0.02, 0]} castShadow>
        <boxGeometry args={[0.6, 0.05, 0.09]} />
        <meshStandardMaterial color="#26282c" metalness={0.45} roughness={0.5} />
      </mesh>
    </group>
  );
}

// Drone complet — quadcoptère stylisé type DJI, 100% procédural.
// Look caméra : gris anthracite mat, petits voyants de navigation.
export default function DroneModel({ mobile = false }) {
  const corners = useMemo(
    () => [
      { pos: [0.6, 0, 0.46], spin: 1, angle: Math.PI * 0.18 },
      { pos: [-0.6, 0, 0.46], spin: -1, angle: Math.PI * 0.82 },
      { pos: [0.6, 0, -0.46], spin: -1, angle: -Math.PI * 0.18 },
      { pos: [-0.6, 0, -0.46], spin: 1, angle: -Math.PI * 0.82 },
    ],
    []
  );

  return (
    <group>
      {/* Bras */}
      {corners.map((c, i) => (
        <Arm key={`arm-${i}`} angle={c.angle} />
      ))}

      {/* Châssis central */}
      <RoundedBox args={[0.9, 0.26, 0.62]} radius={0.1} smoothness={4} castShadow>
        <meshStandardMaterial color="#33363b" metalness={0.5} roughness={0.45} />
      </RoundedBox>

      {/* Capot supérieur */}
      <RoundedBox
        args={[0.66, 0.12, 0.44]}
        radius={0.06}
        smoothness={4}
        position={[0, 0.17, 0]}
        castShadow
      >
        <meshStandardMaterial color="#1f2125" metalness={0.5} roughness={0.4} />
      </RoundedBox>

      {/* Nacelle gimbal + caméra à l'avant */}
      <group position={[0, -0.16, 0.3]}>
        <mesh castShadow>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshStandardMaterial color="#26282c" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Barillet d'objectif */}
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.055, 0.055, 0.07, 24]} />
          <meshStandardMaterial color="#15161a" metalness={0.7} roughness={0.25} />
        </mesh>
        {/* Lentille (verre sombre) */}
        <mesh position={[0, 0, 0.118]}>
          <circleGeometry args={[0.04, 24]} />
          <meshStandardMaterial color="#0a0c12" metalness={1} roughness={0.05} />
        </mesh>
      </group>

      {/* Voyants de navigation : blanc à l'avant, REC rouge à l'arrière */}
      <mesh position={[0.22, 0.02, 0.31]}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      <mesh position={[-0.22, 0.02, 0.31]}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.4} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.02, -0.32]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial color="#e5484d" emissive="#e5484d" emissiveIntensity={2} toneMapped={false} />
      </mesh>

      {/* Moteurs + hélices */}
      {corners.map((c, i) => (
        <Motor key={`motor-${i}`} position={c.pos} spin={c.spin} mobile={mobile} />
      ))}
    </group>
  );
}
