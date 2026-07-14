import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// A single orbiting "pod" node with a connecting line back to the control plane
function PodNode({ radius, speed, offset, height, color, size = 0.14 }) {
  const ref = useRef();
  const lineRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = height + Math.sin(t * 2) * 0.15;
    if (ref.current) ref.current.position.set(x, y, z);
    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z),
      ]);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color={color} transparent opacity={0.25} />
      </line>
    </group>
  );
}

function ControlPlane() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = t * 0.08;
      const s = 1 + Math.sin(t * 1.5) * 0.03;
      ref.current.scale.set(s, s, s);
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.85, 1]} />
      <meshStandardMaterial
        color="#00e5a0"
        emissive="#00e5a0"
        emissiveIntensity={0.35}
        wireframe
        roughness={0.4}
      />
    </mesh>
  );
}

function Cluster() {
  const nodes = useMemo(
    () => [
      { radius: 2.4, speed: 0.35, offset: 0, height: 0.4, color: "#4c8dff" },
      { radius: 2.9, speed: -0.25, offset: 1.4, height: -0.3, color: "#4c8dff" },
      { radius: 2.1, speed: 0.5, offset: 3.1, height: 1.0, color: "#ffb454" },
      { radius: 3.3, speed: -0.18, offset: 4.6, height: -0.9, color: "#4c8dff" },
      { radius: 2.6, speed: 0.3, offset: 5.8, height: 0.1, color: "#00e5a0" },
      { radius: 3.0, speed: -0.4, offset: 2.2, height: -0.5, color: "#ffb454" },
    ],
    []
  );

  const groupRef = useRef();
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ControlPlane />
      {nodes.map((n, i) => (
        <PodNode key={i} {...n} />
      ))}
    </group>
  );
}

export default function ClusterScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#4c8dff" />
      <pointLight position={[-5, -3, -5]} intensity={20} color="#00e5a0" />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Cluster />
      </Float>
    </Canvas>
  );
}
