import { useGLTF } from "@react-three/drei";

import { Ship } from "../../models/ship";

interface ShipActorProps {
  model: Ship;
  [key: string]: any;
}

/**
 * Mock mesh to mask the unloadable ship
 */
const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

export const ShipActor = ({ model, ...props }: ShipActorProps) => {
  // TODO: somehow the gltf file is not laodable, I couldn't find a nice glb resource.
  return (
    <group dispose={null}>
      <Box {...props} />
    </group>
  );
};
