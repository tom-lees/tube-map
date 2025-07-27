import * as THREE from "three";
import {
  bakerlooStations,
  centralStations,
  circleStations,
  hammersmithAndCityStations,
  jubileeStations,
} from "./data/stationCoordinates";
import { OrbitControls } from "@react-three/drei";
import { Tunnel } from "./components/three/Tunnel";

// TODO Store in new folder/file

const offsetX = 528363;
const offsetY = 179760;

const BAKERLOO = bakerlooStations.map((station) => {
  const position = new THREE.Vector3(
    (station.x - offsetX) * 0.01,
    (station.y - offsetY) * 0.01,
    station.z
  );
  return position;
});
const CENTRAL = centralStations.map((station) => {
  const position = new THREE.Vector3(
    (station.x - offsetX) * 0.01,
    (station.y - offsetY) * 0.01,
    station.z
  );
  return position;
});
const CIRCLE = circleStations.map((station) => {
  const position = new THREE.Vector3(
    (station.x - offsetX) * 0.01,
    (station.y - offsetY) * 0.01,
    station.z
  );
  return position;
});
const JUBILEE = jubileeStations.map((station) => {
  const position = new THREE.Vector3(
    (station.x - offsetX) * 0.01,
    (station.y - offsetY) * 0.01,
    station.z
  );
  return position;
});

const HAMMERSMITH = hammersmithAndCityStations.map((station) => {
  const position = new THREE.Vector3(
    (station.x - offsetX) * 0.01,
    (station.y - offsetY) * 0.01,
    station.z
  );
  return position;
});

export default function Sketch() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Tunnel points={BAKERLOO} color="#a45a2a" opacity={1} />
      <Tunnel points={CENTRAL} color="#da291c" opacity={1} />
      <Tunnel points={CIRCLE} color="#ffcd00" opacity={1} />
      <Tunnel points={HAMMERSMITH} color="#e89cae" opacity={1} />
      <Tunnel points={JUBILEE} color="#7c878e" opacity={1} />
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 3} // can't go lower than ~60° (from "above")
        maxPolarAngle={Math.PI / 1.5} // can't go higher than ~120° (no flip)
        rotateSpeed={0.5}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}
