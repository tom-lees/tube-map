import * as THREE from "three";
import { useMemo } from "react";

type TunnelProps = {
  points: THREE.Vector3[];
  color?: string;
  opacity?: number;
};

export function Tunnel({ points, color = "gray", opacity = 1 }: TunnelProps) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 128, 1, 8, false),
    [curve]
  );

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}
