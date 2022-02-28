import { useContext } from "react";
import { ExplorerDataContext } from "../contexts/ExplorerDataContext";

import { useShip } from "../../models/stores/useShip";
import { useFish } from "../../models/stores/useFish";

/**
 * Display the explorer loading info in a div.
 */
export const ExplorerLoadingViewer = () => {
  // Use the context
  const explorerDataContext = useContext(ExplorerDataContext);
  const ships = useShip((state) => state.ships);
  const fishes = useFish((state) => state.fishes);

  // Render the details
  return (
    <>
      <div>
        {" "}
        <i>
          loaded data: {String(explorerDataContext?.loaded)} in{" "}
          {explorerDataContext?.loadTimeMs.toFixed(4)}... ms{" "}
        </i>
      </div>
      <div>ships: {ships.length}</div>
      <div>fishes: {fishes.length}</div>
    </>
  );
};
