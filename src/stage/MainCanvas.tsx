import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";

import { ModelScene3D } from "./scenes/ModelScene3D";

/**
 * Configuration of the MAIN canvas of the app.
 */
export const MainCanvas = () => {
  return (
    <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={["#D3D3D3"]} />
      <spotLight
        position={[-100, -100, -100]}
        intensity={0.2}
        angle={0.3}
        penumbra={1}
      />
      <hemisphereLight
        color="white"
        groundColor="#ff0f00"
        position={[-7, 25, 13]}
        intensity={1}
      />
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.2}>
          <ModelScene3D />
        </Bounds>
      </Suspense>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
      />
    </Canvas>
  );
};
