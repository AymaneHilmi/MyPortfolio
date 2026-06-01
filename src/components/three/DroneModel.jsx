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
        <cylinderGeometry args={[0.13, 0.15, 0.22, 16]} />
        <meshStandardMaterial color="#16191f" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Bague d'accent lumineuse */}
      <mesh position={[0, 0.12, 0]}>
        <torusGeometry args={[0.14, 0.012, 8, 28]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      {/* Hélices */}
      <group ref={rotor} position={[0, 0.17, 0]}>
        {Array.from({ length: blades }).map((_, i) => (
          <mesh
            key={i}
            rotation={[0, (i * Math.PI * 2) / blades, 0]}
            position={[0.16, 0, 0]}
          >
            <boxGeometry args={[0.34, 0.006, 0.05]} />
            <meshStandardMaterial
              color="#2b2f37"
              transparent
              opacity={0.55}
              metalness={0.2}
              roughness={0.6}
            />
          </mesh>
        ))}
        {/* Moyeu */}
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.05, 10]} />
          <meshStandardMaterial color="#0c0d10" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

// Bras carbone reliant le châssis à un moteur.
function Arm({ angle }) {
  return (
    <group rotation={[0, angle, 0]}>
      <mesh position={[0.42, -0.02, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.09]} />
        <meshStandardMaterial color="#1b1e25" metalness={0.5} roughness={0.45} />
      </mesh>
    </group>
  );
}

// Drone complet — quadcoptère stylisé type DJI, 100% procédural (aucun asset
// externe à charger). Facilement remplaçable par un .glb plus tard.
export default function DroneModel({ mobile = false }) {
  // 4 coins en diagonale (config quad en X)
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
        <meshStandardMaterial color="#14161b" metalness={0.65} roughness={0.32} />
      </RoundedBox>

      {/* Capot supérieur accentué */}
      <RoundedBox
        args={[0.66, 0.12, 0.44]}
        radius={0.06}
        smoothness={4}
        position={[0, 0.17, 0]}
      >
        <meshStandardMaterial color="#0c0e12" metalness={0.5} roughness={0.4} />
      </RoundedBox>

      {/* Liseré lumineux frontal */}
      <mesh position={[0, 0.05, 0.315]}>
        <boxGeometry args={[0.5, 0.03, 0.02]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#67e8f9"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>

      {/* Nacelle gimbal + caméra à l'avant (clin d'œil au stabilisateur) */}
      <group position={[0, -0.16, 0.3]}>
        <mesh>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshStandardMaterial color="#0a0b0d" metalness={0.6} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.06, 20]} />
          <meshStandardMaterial color="#02060a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Reflet de lentille */}
        <mesh position={[0, 0, 0.115]}>
          <circleGeometry args={[0.035, 20]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* LED arrière */}
      <mesh position={[0, 0.02, -0.32]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshStandardMaterial
          color="#ff4d4d"
          emissive="#ff4d4d"
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>

      {/* Moteurs + hélices */}
      {corners.map((c, i) => (
        <Motor key={`motor-${i}`} position={c.pos} spin={c.spin} mobile={mobile} />
      ))}
    </group>
  );
}
