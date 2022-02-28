import { useMemo } from "react";

import { ShipActor } from "../actors/ShipActor";
import { useShip } from "../../models/stores/useShip";
import { FishActor } from "../actors/FishActor";
import { useFish } from "../../models/stores/useFish";

/**
 * Displays the loaded models in a 3D group.
 */
export const ModelScene3D = () => {
  // Use the context
  const ships = useShip((state) => state.ships);
  const fishes = useFish((state) => state.fishes);

  const shipActors = useMemo(
    () =>
      ships.map((s) => (
        <ShipActor key={s._id} model={s} position={[0, 0, 0]} />
      )),
    [ships]
  );

  const fishActors = useMemo(
    () =>
      fishes.map((s) => (
        <FishActor key={s._id} model={s} position={[0, 0, 0]} />
      )),
    [fishes]
  );

  // Render the details
  return (
    <group>
      {shipActors}
      {fishActors}
    </group>
  );
};
