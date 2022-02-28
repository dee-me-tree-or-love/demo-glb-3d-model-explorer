import { useGLTF } from "@react-three/drei";

import { Fish } from "../../models/fish";

interface FishActorProps {
  model: Fish;
  [key: string]: any;
}

/**
 * Object3D representation of the fish model.
 */
export const FishActor = ({ model, ...props }: FishActorProps) => {
  // TODO: efficiency of this approach needs to certainly be reconsidered!
  const { scene } = useGLTF(model.gltfFilePath);
  return (
    <group dispose={null}>
      <mesh
        geometry={scene.children[0].geometry}
        material={scene.children[0].material}
        {...props}
      ></mesh>
    </group>
  );
};
