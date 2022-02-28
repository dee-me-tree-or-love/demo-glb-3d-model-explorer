import React, { PropsWithChildren, useEffect, useState } from "react";

import { fetchRandomData } from "../../data/api";
import { adapters } from "../../data/adapters";
import { useShip } from "../../models/stores/useShip";
import { useFish } from "../../models/stores/useFish";
import { Ship } from "../../models/ship";
import { Fish } from "../../models/fish";

type ExplorerDataContextDetails = {
  loaded: boolean;
  loadTimeMs: number;
};

const DEFAULT_CONTEXT_DATA = {
  loaded: false,
  loadTimeMs: 0
};

// TODO: can be improved
interface ModelLoadingResponseData extends ExplorerDataContextDetails {
  model: Ship | Fish;
}

const loadModelData = async (): Promise<ModelLoadingResponseData> => {
  try {
    const startTime = performance.now();

    const rawData = await fetchRandomData();
    const model = adapters[rawData.objectType](rawData);
    // TODO: store the model in the right store?

    var endTime = performance.now();
    console.warn("loaded data");
    return { loaded: true, loadTimeMs: endTime - startTime, model };
  } catch (e) {
    console.warn("Failed to load explorer data");
    throw e;
  }
};

/**
 * Context of the loaded data for the Explorer.
 */
export const ExplorerDataContext = React.createContext<
  ExplorerDataContextDetails | undefined
>(undefined);

interface ExplorerDataContextProviderProps {
  requestCounter: number;
}

export const ExplorerDataContextProvider = ({
  children,
  requestCounter
}: PropsWithChildren<ExplorerDataContextProviderProps>) => {
  const [explorerData, setExplorerData] = useState<ExplorerDataContextDetails>({
    ...DEFAULT_CONTEXT_DATA
  });

  const addShip = useShip((state) => state.add);
  const cleanupShips = useShip((state) => state.cleanup);
  const addFish = useFish((state) => state.add);
  const cleanupFishes = useFish((state) => state.cleanup);

  // Loading of the API data.
  useEffect(() => {
    // Load the data from the API
    loadModelData()
      // Populate the context info and stores
      .then(({ model, ...loadingData }) => {
        setExplorerData(loadingData);
        if (!!model) {
          console.debug("add");
          // TODO: use polymoprhism & liskov substitution princple here
          switch (model.objectType) {
            case "fish":
              addFish(model);
              break;
            case "ship":
              addShip(model);
              break;
            default:
              console.warn("Unknown type encountered");
              break;
          }
        } else {
          console.warn("unknown type received");
        }
      })
      .catch(() => setExplorerData({ loaded: false, loadTimeMs: 0 }));

    // Cleanup the stores when re-rendering
    return () => {
      console.debug("cleanup");
      cleanupShips();
      cleanupFishes();
    };
  }, [requestCounter, cleanupShips, cleanupFishes, addShip, addFish]);

  useEffect(() => {
    console.log("loaded", explorerData.loaded);
  }, [explorerData]);

  return (
    <ExplorerDataContext.Provider value={explorerData}>
      {children}
    </ExplorerDataContext.Provider>
  );
};
