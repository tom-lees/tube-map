// src/sketch.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SpinningBox(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Sketch() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <SpinningBox position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
