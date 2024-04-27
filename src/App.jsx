import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";

import { Model } from "./Model";
import Background from "./Background";

import envMap from "./assets/potsdamer_platz_0.256k.hdr?url";

import "./css/base.css";

function App() {
  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 0, 16], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Environment files={envMap} />
        <Background />
        <PresentationControls
          global
          config={{ mass: 2, tension: 300 }}
          snap={{ mass: 3, tension: 200 }}
        >
          <Model />
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
