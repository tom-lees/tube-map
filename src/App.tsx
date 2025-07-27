import { Canvas } from "@react-three/fiber";
import Sketch from "./Sketch";

function App() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 200], fov: 75 }}
      style={{ width: "100vw", height: "100vh", background: "#121212" }} // dark background
    >
      <Sketch />
    </Canvas>
  );
}

export default App;
